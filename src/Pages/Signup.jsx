import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
} from 'react-icons/fa';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  

  const handleSignup = (e) => {
    e.preventDefault();
    setIsRegistering(true);
    setError(null);

    if (!fullName || !phoneNumber || !email || !password) {
      setError('Please fill in all required fields.');
      setIsRegistering(false);
      return;
    }
    console.log('User signed up successfully!', {
      fullName,
      email,
      password,
    });
    alert('Account Successfully Created, Login to Continue');

    setIsRegistering(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white mt-20 w-full max-w-4xl rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left: Placeholder Image */}
          <div className="md:w-1/2 hidden md:block">
            <img
              src="/loginimage.webp"
              alt="Smiling Female"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right: Signup Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-pink-500 mb-1">Create Account</h2>
            <p className="text-gray-600 mb-4">Please enter your details</p>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleSignup} className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full bg-pink-300 cursor-pointer hover:bg-pink-400 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                {isRegistering ? 'Signing Up...' : 'Signup'}
              </button>
            </form>

            <div className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <a href="/login" className="text-pink-500 hover:underline">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;