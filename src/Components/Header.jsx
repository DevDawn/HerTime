import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaCalendarAlt, FaLightbulb, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  // Placeholder logout handler
  const handleLogout = () => {
    console.log('Logging out...');
    // Insert your actual logout logic here
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <FaLeaf className="text-2xl text-pink-400" />
          <span className="text-2xl font-bold text-pink-400">HerTime</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {/* Period Logging */}
          <Link
            to="/period-logging"
            className="flex items-center px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md transition duration-300"
          >
            <FaCalendarAlt className="mr-2" />
            Period Logging
          </Link>

          {/* Insights */}
          <Link
            to="/insights"
            className="flex items-center px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md transition duration-300"
          >
            <FaLightbulb className="mr-2" />
            Insights
          </Link>

          {/* Logout */}
          <a href="/">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md transition duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
          </a>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
