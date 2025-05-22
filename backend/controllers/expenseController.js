const xlsx = require('xlsx');
const Expense = require("../models/Expense");


exports.addExpense = async (req, res) => {
    const userId = req.user.id;
  
    try {
      const { icon, category, amount, date } = req.body;
  
      // validation: Check for missing fields
      if (!category || !amount || !date) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newExpense = new Expense({
        userId,
        icon,
        category,
        amount: Number(amount), 
        date: new Date(date),
      });
  
      await newExpense.save();
      res.status(200).json(newExpense);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  
// Get All Expense Source
exports.getAllExpense = async(req, res)=>{
  const userId = req.user.id;
  try{
    const expense = await Expense.find({userId}).sort({date: -1});
    res.json(expense);
  }catch(error){
    res.status(500).json({message:"Server Error"});
  }
}
// Delete Expense Source
exports.deleteExpense = async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);

        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//Download Excel


exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });

    // Prepare data for Excel with formatted date
    const data = expense.map((item) => ({
      Category: item.category,
      Amount: item.amount,
      Date: item.date ? new Date(item.date).toISOString().split('T')[0] : '', // "YYYY-MM-DD"
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expense");

    const filePath = 'expense_details.xlsx';
    xlsx.writeFile(wb, filePath);
    
    res.download(filePath, (err) => {
      if (err) {
        console.error("File download error:", err);
        res.status(500).json({ message: "Download failed" });
      }
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


