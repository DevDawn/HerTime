import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError(null);

    if (!email || !password) {
      setError('Please fill in all required fields.');
      setIsLoggingIn(false);
      return;
    }
    if (password.length === 0) {
      setError("Please enter a password");
      setIsLoggingIn(false);
      return;
    }

    console.log('User logged in successfully with email:', email);
    setIsLoggingIn(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white mt-20 w-full max-w-4xl rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left: Login Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">Log In</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-pink-300 cursor-pointer hover:bg-pink-400 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                {isLoggingIn ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            {/* Redirect for Users without an Account */}
            <div className="mt-4 text-sm text-center">
              Don't have an account?{' '}
              <a href="/register" className="text-pink-500 hover:underline">
                Create one
              </a>
            </div>
          </div>

          {/* Right: Placeholder Image (visible on md and larger screens) */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="/loginimage.webp"
              alt="Login Illustration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
