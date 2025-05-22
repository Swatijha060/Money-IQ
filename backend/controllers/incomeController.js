const xlsx = require('xlsx');
const Income = require("../models/Income");

// Add Income Source
exports.addIncome = async(req, res)=>{
    const userId = req.user.id;

    try{
        const {icon, source, amount, date} = req.body;

        //validation: Check for missing fields
        if(!source || !amount || !date){
            return res.status(400).json({message: "All fields are required"});
        }

        const newIncome = new Income({
            userId, icon, source, amount, date: new Date(date)
        });

        await newIncome.save();
        res.status(200).json(newIncome);
    }catch(error){
        res.status(500).json({message: "Server Error"});
    }
}
// Get All Income Source
exports.getAllIncome = async(req, res)=>{
  const userId = req.user.id;
  try{
    const income = await Income.find({userId}).sort({date: -1});
    res.json(income);
  }catch(error){
    res.status(500).json({message:"Server Error"});
  }
}
// Delete Income Source
exports.deleteIncome = async (req, res) => {
    try {
        const deletedIncome = await Income.findByIdAndDelete(req.params.id);

        if (!deletedIncome) {
            return res.status(404).json({ message: "Income not found" });
        }

        res.json({ message: "Income deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//Download Excel


exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    // Format data for Excel
    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date ? item.date.toISOString().split('T')[0] : '', // Format: YYYY-MM-DD
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");

    const filePath = 'income_details.xlsx';
    xlsx.writeFile(wb, filePath);
    res.download(filePath);
  } catch (error) {
    console.error("Excel download error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
