import React, { useState } from 'react';
import { FaLeaf, FaBars, FaTimes, FaChartLine, FaCalendarCheck } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <a className="flex items-center space-x-2" href="/">
            <FaLeaf className="text-2xl text-pink-400" />
            <span className="text-2xl font-bold text-pink-400">HerTime</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="/insights"
            className="flex items-center space-x-1 px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition duration-300"
          >
            <FaChartLine />
            <span>Insights</span>
          </a>
          <a
            href="/period-logging"
            className="flex items-center space-x-1 px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition duration-300"
          >
            <FaCalendarCheck />
            <span>Log Period</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-pink-400 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-4">
            <a
              href="/insights"
              className="flex items-center space-x-2 px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition duration-300"
            >
              <FaChartLine />
              <span>Insights</span>
            </a>
            <a
              href="/period-logging"
              className="flex items-center space-x-2 px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition duration-300"
            >
              <FaCalendarCheck />
              <span>Log Period</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
