import React from 'react';
import { FaCalendarAlt, FaChartPie, FaBook, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-purple-800 mb-4">HerTime</h1>
        <p className="text-xl text-gray-600 mb-8">Your cycle, your power. Track, understand, and thrive.</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-8">Why Choose HerTime?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaCalendarAlt className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Cycle Tracking</h3>
            <p className="text-gray-600">Log and predict your menstrual cycle with ease.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaChartPie className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Health Insights</h3>
            <p className="text-gray-600">Gain personalized insights into your health.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaBook className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Educational Resources</h3>
            <p className="text-gray-600">Learn about menstrual health and wellness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaUser className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Personalized Experience</h3>
            <p className="text-gray-600">Tailored to your unique needs and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;