import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from './SideMenu';
import logo from "../../assets/images/logo.png";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className='flex items-center justify-between gap-5 bg-white dark:bg-gray-900 border-b border-gray-200/50 dark:border-gray-700 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30'>
      
      {/* Left: Hamburger and Logo */}
      <div className='flex items-center gap-3'>
        {/* Hamburger Menu */}
        <button
          className='block lg:hidden text-black dark:text-white'
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className='text-2xl' />
          ) : (
            <HiOutlineMenu className='text-2xl' />
          )}
        </button>

        {/* Logo */}
        <img src={logo} alt="Logo" className='h-8 w-auto' />

        {/* Title */}
        <h2 className='text-lg font-semibold text-blue-800 dark:text-white'>
          Money IQ
        </h2>
      </div>

      {/* Mobile Sidebar */}
      {openSideMenu && (
        <div className='fixed top-[61px] -ml-4 bg-white dark:bg-gray-900'>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
