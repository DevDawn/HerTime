import React from 'react';
import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
import { FaHeartbeat, FaRegCalendarAlt, FaLightbulb, FaRegSmile, FaMedkit, FaFemale, FaLeaf } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-15 flex-grow">
        <section className="relative bg-cover bg-center">
  
          <FaHeartbeat className="absolute top-5 left-5 text-white opacity-30 text-4xl" />
          <FaRegCalendarAlt className="absolute bottom-10 right-5 text-white opacity-30 text-4xl" />
          <FaLightbulb className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white opacity-30 text-5xl" />
          <FaFemale className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white opacity-30 text-3xl" />
          <FaLeaf className="absolute top-10 right-10 text-white opacity-30 text-4xl" />

          <div className="bg-pink-400 bg-opacity-60">
            <div className="max-w-5xl mx-auto py-20 px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Empowering Women Through Menstrual Health Awareness
              </h1>
              <p className="text-lg text-white mb-8">
                Track your cycle, manage symptoms, and take control of your health.
              </p>
              <button className="bg-white cursor-pointer text-pink-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section id="about" className="py-16 px-4 bg-gradient-to-r from-white to-pink-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-6 text-center md:text-left">
              The Challenge
            </h2>
            <p className="text-gray-700 text-xl text-bold mb-6 text-center md:text-left">
              1 in 5 women suffer from severe period cramps, irregular cycles, PMS, and other menstrual health issues that can disrupt daily life.
            </p>
            <p className="text-gray-600 text-lg mb-10 text-center md:text-left">
              Despite affecting millions, the struggles of menstrual health are often overlooked. Women not only endure intense physical pain and discomfort, but they also face emotional and social challenges as they cope with unpredictable symptoms. The relentless pain from severe cramps, the uncertainty of irregular cycles, and the impact of PMS and mood swings disrupt everyday routines and hinder professional and personal growth. This issue calls for increased awareness, compassionate support, and innovative solutions that recognize the full scope of the challenge.
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src="https://sf-maas-uat-prod.oss-cn-shanghai.aliyuncs.com/outputs/31922ed8-fdc3-44df-a987-f4ee3932f229_0.png"
                  alt="Menstrual Health Issues"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2 text-gray-700 text-lg">
                    <FaHeartbeat className="text-pink-400 text-2xl" />
                    <span>Severe period cramps</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700 text-lg">
                    {/* Updated icon usage */}
                    <FaRegCalendarAlt className="text-pink-400 text-2xl" />
                    <span>Irregular cycles</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700 text-lg">
                    <FaRegSmile className="text-pink-400 text-2xl" />
                    <span>PMS and mood swings</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700 text-lg">
                    <FaMedkit className="text-pink-400 text-2xl" />
                    <span>Endometriosis challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="features" className="py-16 px-4 bg-pink-400">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
    <p className="text-gray-100 text-lg mb-8">
      HerTime offers personalized insights, symptom logging, educational resources, and a supportive community to help you manage your menstrual health.
    </p>
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <FaRegCalendarAlt className="text-4xl text-white mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-white">Cycle Tracking</h3>
            <p className="text-gray-100">
              Log your period dates and predict your cycle with ease.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <FaHeartbeat className="text-4xl text-white mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-white">Symptom Logging</h3>
            <p className="text-gray-100">
              Record symptoms like cramps, mood swings, and more.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaLightbulb className="text-4xl text-white mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-white">Health Insights</h3>
            <p className="text-gray-100">
              Receive personalized tips and educational resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Personal Story Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/dawnny.png"
                alt="Personal Story"
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-[#FFB6C1] mb-4">
                From Struggle to Solution: My Journey with Irregular Periods
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                As a software engineer, I’ve always been passionate about solving problems. But when it came to my own health,
                I felt powerless. I struggled with irregular periods and debilitating cramps for years, often missing work and
                social events. Doctors couldn’t provide clear answers, and I felt alone.
              </p>
              <p className="text-gray-700 text-lg">
                That’s when I decided to take matters into my own hands and create HerTime—a web app designed to empower women
                by tracking their cycles, managing symptoms, and providing personalized insights. This project is a movement to
                empower women through knowledge and support.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-4 bg-pink-400">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Take Control of Your Health</h2>
            <p className="text-white text-lg mb-8">
              Join thousands of women taking charge of their menstrual wellness. Sign up today!
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-white text-pink-400 px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-gray-100 transition">
                Sign Up Now
              </button>
              <button className="bg-white text-pink-400 px-6 py-3 cursor-pointer rounded-full font-semibold hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;