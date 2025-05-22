import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { toast } from 'react-hot-toast';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import IncomeOverview from '../../components/Income/IncomeOverview';
import Modal from '../../components/layouts/Modal';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import IncomeList from '../../components/Income/IncomeList';

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  // Fetch all income details
  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add Income
  const handleAddIncome = async (income) => {
    const { source, amount, date, icon } = income;

    if (!source.trim()) {
      toast.error("Source is required");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0");
      return;
    }
    if (!date) {
      toast.error("Date is required");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source,
        amount,
        date,
        icon,
      });

      setOpenAddIncomeModal(false);
      toast.success("Income added successfully");
      fetchIncomeDetails();
    } catch (error) {
      console.error("Error adding income:", error.response?.data?.message || error.message);
      toast.error("Failed to add income");
    }
  };

  // Handle Delete Income
  const deleteIncome = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      toast.success("Income deleted successfully");
      fetchIncomeDetails();
      setOpenDeleteAlert({ show: false, data: null });
    } catch (error) {
      console.error("Failed to delete income:", error);
      toast.error("Error deleting income");
    }
  };
  

// Handle Download
const handleDownloadIncomeDetails = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.INCOME.DOWNLOAD_INCOME, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'income_details.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("Download started successfully");
  } catch (error) {
    console.error("Failed to download income file:", error);
    toast.error("Error downloading income details");
  }
};


  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
        </div>
      </div>

      <IncomeList
        transactions={incomeData}
        onDelete={(id) => setOpenDeleteAlert({ show: true, data: id })}
        onDownload={handleDownloadIncomeDetails}
      />

      <Modal
        isOpen={openAddIncomeModal}
        onClose={() => setOpenAddIncomeModal(false)}
        title="Add Income"
      >
        <AddIncomeForm onAddIncome={handleAddIncome} />
      </Modal>

      {/*  Delete Confirmation Modal */}
      {openDeleteAlert.show && (
        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Confirm Deletion"
        >
          <div>
            <p>Are you sure you want to delete this income?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setOpenDeleteAlert({ show: false, data: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={() => deleteIncome(openDeleteAlert.data)}
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

export default Income;
