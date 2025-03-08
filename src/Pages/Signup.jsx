import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { supabase } from '../supabaseClient';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!email || !password) {
      setError('Please provide your email and password.');
      setIsSubmitting(false);
      return;
    }

    // Use Supabase Auth to sign up the user.
    const { data, error: authError } = await supabase.auth.signUp(
      { email, password },
      { data: { fullName } }
    );

    if (authError) {
      setError(authError.message);
    } else {
      setSuccess(true);
      setUser(data.user);
      setFullName('');
      setEmail('');
      setPassword('');
    }

    setIsSubmitting(false);
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
            <h2 className="text-2xl font-bold text-pink-500 mb-1">Join Our Waitlist</h2>
            <p className="text-gray-600 mb-4">Be the first to know when our MVP is ready.</p>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            {success && <div className="text-green-500 mb-4">Thanks for signing up!</div>}

            <form onSubmit={handleSignup} className="space-y-4">
              {/* Full Name (Optional) */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name (Optional)"
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
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </form>

            {/* Display User Info on Successful Signup
            {user && (
              <div className="mt-4 p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-bold">User Info</h3>
                <p>
                  <strong>Name:</strong>{' '}
                  {user.user_metadata && user.user_metadata.fullName
                    ? user.user_metadata.fullName
                    : 'N/A'}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
