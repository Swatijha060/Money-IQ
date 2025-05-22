import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../../hooks/useUserAuth';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import ExpenseOverview from '../../components/Expense/ExpenseOverview';
import Modal from '../../components/layouts/Modal';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import ExpenseList from '../../components/Expense/ExpenseList';

const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);
      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.error("Something went wrong. Please try again", error);
      toast.error("Failed to fetch expense data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }
    if (!date) {
      toast.error("Date is required");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });

      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails();
    } catch (error) {
      console.error("Error adding expense:", error.response?.data?.message || error.message);
      toast.error("Failed to add expense");
    }
  };


  const handleDownloadExpenseDetails = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.DOWNLOAD_EXPENSE, {
        responseType: 'blob',
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'expenses.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      toast.success("Download started successfully");
    } catch (error) {
      console.error("Failed to download expense file:", error);
      toast.error("Error downloading expenses");
    }
  };
  
  const deleteExpense = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
      toast.success("Expense deleted successfully");
      fetchExpenseDetails();
      setOpenDeleteAlert({ show: false, data: null });
    } catch (error) {
      console.error("Failed to delete expense:", error);
      toast.error("Error deleting expense");
    }
  };

  useEffect(() => {
    fetchExpenseDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={() => setOpenAddExpenseModal(true)}
          />
        </div>
      </div>

      <ExpenseList
        transactions={expenseData}
        onDelete={(id) => {setOpenDeleteAlert({ show: true, data: id });
  }}
     onDownload={handleDownloadExpenseDetails}
      />
       
      <Modal
        isOpen={openAddExpenseModal}
        onClose={() => setOpenAddExpenseModal(false)}
        title="Add Expense"
      >
        <AddExpenseForm onAddExpense={handleAddExpense} />
      </Modal>

      {openDeleteAlert.show && (
        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Confirm Deletion"
        >
          <div>
            <p>Are you sure you want to delete this expense?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setOpenDeleteAlert({ show: false, data: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={() => deleteExpense(openDeleteAlert.data)}
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default Expense;

