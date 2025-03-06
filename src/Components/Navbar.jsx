import React, { useState } from 'react';
import { FaLeaf, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
       
        <div>
            <a className='flex  items-center space-x-2' href="/">
          <FaLeaf className="text-2xl text-pink-400" />
          <span className="text-2xl font-bold text-pink-400">HerTime</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
        <a href="/login" className="focus:outline-none">
          <button className="flex items-center px-4 py-2 bg-pink-400 hover:bg-500 text-white cursor-pointer rounded-md transition duration-300">
            <FaSignInAlt className="mr-2" />
            Login
          </button>
          </a>

          <a href="/register" className="focus:outline-none">
          <button className="flex cursor-pointer items-center px-4 py-2 bg-pink-400 hover:bg-pink-400 text-white rounded-md transition duration-300">
            <FaUserPlus className="mr-2" />
            Signup
          </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-[#FFB6C1] focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-4">
            <button className="flex items-center px-4 py-2 bg-pink-300 hover:bg-pink-400text-white rounded-md transition duration-300">
              <FaSignInAlt className="mr-2" />
              <a href="/login" className="focus:outline-none">Login</a>
            </button>
            <button className="flex items-center px-4 py-2 bg-pink-300 hover:bg-pink-400 text-white rounded-md transition duration-300">
              <FaUserPlus className="mr-2" />
              <a href="/register" className="focus:outline-none">Signup</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
