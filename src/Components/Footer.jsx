import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-400 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">Empowering women through menstrual health awareness.</p>

        <form className="flex">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 border border-white rounded-l-full text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-pink-500 px-4 py-2 rounded-r-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
