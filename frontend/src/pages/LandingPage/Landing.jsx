import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../../assets/images/LandingImage.png"; 
import logo from "../../assets/images/logo.png";
import { FaListAlt, FaChartLine, FaFileExcel } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 text-gray-900">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full px-6 py-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Money IQ Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-xl font-bold text-blue-800 whitespace-nowrap">
            MONEY IQ
          </span>
        </div>

        <div className="flex gap-6 text-lg font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <Link to="/login" className="hover:text-blue-600">Log in</Link>
          <Link to="/signup" className="hover:text-blue-600">Sign up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl w-full mx-auto px-6 py-12 md:py-20 gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Take Control of Your Finances
          </h1>
          <p className="text-lg text-blue-800 mb-6">
            Track your income, expenses, and financial goals effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/login"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/learn-more"
              className="border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded hover:bg-blue-100"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img src={LandingImage} alt="Landing Illustration" className="w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <FeatureCard 
            icon={<FaListAlt className="text-3xl text-blue-600 mb-3" />} 
            title="Custom Categories"
            description="Organize your spending with fully customizable categories."
          />
          <FeatureCard 
            icon={<FaChartLine className="text-3xl text-blue-600 mb-3" />} 
            title="Expense Tracking"
            description="Record and monitor your expenses in a few clicks."
          />
          <FeatureCard 
            icon={<FaFileExcel className="text-3xl text-blue-600 mb-3" />} 
            title="Download Reports"
            description="Export your income and expense data as Excel files."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Money IQ. All rights reserved.
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-100 p-6 rounded-lg border border-blue-300 flex flex-col items-center">
    {icon}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default Landing;
