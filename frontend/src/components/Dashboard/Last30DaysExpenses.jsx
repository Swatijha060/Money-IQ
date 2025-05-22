import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Last30DaysExpenses = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No expenses data available for the last 30 days.</p>;
  }

  const processedData = data.map(transaction => ({
    date: new Date(transaction.date).toLocaleDateString(),
    amount: transaction.amount,
  }));

  const chartData = {
    labels: processedData.map(item => item.date),
    datasets: [
      {
        label: 'Expenses',
        data: processedData.map(item => item.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: false,
        text: 'Expenses - Last 30 Days',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1000 },
      },
    },
  };

  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">Last 30 Days Expenses</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Last30DaysExpenses;
