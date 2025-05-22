import React from 'react';
import DashboardImage from "../../assets/images/DashboardImage.png";
import { LuTrendingUpDown } from "react-icons/lu";
import logo from '../../assets/images/logo.png';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex'>
      {/* Left Side */}
      
  <div className='w-screen h-screen md:w-[60vw] px-12 pt-3 pb-5 flex flex-col'>
  <div className="flex items-center gap-3 mb-6">
  <img src={logo} alt="Money IQ Logo" className="h-10 w-10 object-contain" />
  <span className="text-xl font-bold text-blue-800">MONEY IQ</span>
</div>

  <div className="flex-grow flex items-center justify-center">
    {children}
  </div>
</div>


      {/* Right Side - Hidden on small screens */}
      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
        
        {/* Decorative shapes */}
        <div className='w-64 h-64 rounded-[50px] bg-blue-600 absolute -top-20 -left-12 z-10' />
        <div className='w-52 h-60 rounded-[40px] border-[20px] border-red-300 absolute top-[30%] -right-12 z-10' />
        <div className='w-60 h-60 rounded-[50px] bg-blue-500 absolute -bottom-10 left-4 z-10' />

        {/* Stat Info Card  */}
        <div className='relative z-30 mt-8 ml-4'>
          <StatInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expense"
            value="430,000"
            color="bg-blue-500"
          />
        </div>

        {/* Image */}
        <img
          src={DashboardImage}
          alt="Dashboard Visual"
          className='w-[80%] lg:w-[90%] absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 shadow-lg shadow-blue-400/15'
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatInfoCard = ({ icon, label, value, color = "bg-purple-500" }) => {
    return (
      <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50'>
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
          {icon}
        </div>
        <div>
          <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
          <span className='text-[20px]'>${value}</span>
        </div>
      </div>
    );
  };
  