import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Learn More About Money IQ
        </h1>

        {/* Section 1: Budgeting Importance */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Why Budgeting Matters</h2>
          <p className="text-gray-700">
            Budgeting helps you stay in control of your financial life. With Money IQ,
            you can set clear limits on your spending, allocate funds for savings, and
            understand where your money is going — all in one place.
          </p>
        </section>

        {/* Section 2: Visual Dashboards */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">See Your Finances Clearly</h2>
          <p className="text-gray-700">
            Our intuitive dashboards provide charts and graphs to help you visualize
            your income, expenses, and category-wise breakdown. Get instant clarity
            and make informed financial decisions.
          </p>
        </section>

        {/* Section 3: Download Reports */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Download Your Reports</h2>
          <p className="text-gray-700">
            Need your data for accounting, tax filing, or just to keep a record?
            You can easily export your income and expense data as Excel files with just one click.
          </p>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
