import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaLightbulb } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Static Greeting */}
          <h1 className="text-4xl font-bold text-center text-pink-500 mb-8">
            Welcome to HerTime
          </h1>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overview Card: spans full width on md+ screens */}
            <div className="bg-white rounded-md shadow-md p-6 col-span-1 md:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Period Overview</h2>
              <p className="text-gray-500">
                Here you’ll find a summary of your period data and upcoming cycle information.
                (Placeholder for period overview details like countdown, cycle stats, etc.)
              </p>
            </div>

            {/* Period Logging Card */}
            <Link
              to="/period-logging"
              className="bg-white rounded-md shadow-md p-6 flex flex-col items-center hover:bg-pink-50 transition"
            >
              <FaCalendarAlt className="text-4xl text-pink-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">Period Logging</h2>
              <p className="text-gray-500 mt-2 text-center">
                Log your period start and end dates.
              </p>
            </Link>

            {/* Health Insights Card */}
            <Link
              to="/insights"
              className="bg-white rounded-md shadow-md p-6 flex flex-col items-center hover:bg-pink-50 transition"
            >
              <FaLightbulb className="text-4xl text-pink-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">Health Insights</h2>
              <p className="text-gray-500 mt-2 text-center">
                Read blog-style articles about women’s health and wellness.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
