'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const NewarrivalsNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const [error, setError] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 flex items-center justify-center mb-[-150px]">
      <motion.div
        className="
          w-full max-w-3xl rounded-2xl bg-white/90 backdrop-blur-md shadow-lg
          flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 md:p-10
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Get exclusive offers, latest arrivals, and insider-only discounts delivered to your inbox.
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col sm:flex-row items-center gap-4 w-full"
          aria-label="Newsletter subscription form"
        >
          <div className="relative w-full">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              className="
                w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 text-gray-900
                placeholder-gray-500 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-1 focus:ring-offset-gray-900
                transition
              "
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="
              bg-amber-600 text-gray-900 font-semibold
              px-6 py-3 rounded-xl w-full sm:w-auto text-sm sm:text-base
              transition
              shadow-[0_0_10px_rgba(251,191,36,0)]
              hover:bg-amber-700 hover:shadow-[0_0_15px_rgba(251,191,36,0.6)]
              disabled:opacity-70 disabled:cursor-not-allowed
            "
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </motion.div>

      {/* Error Message */}
      {error && (
        <p className="mt-3 text-red-400 text-sm text-center">{error}</p>
      )}

      {/* Success Message */}
      {status === 'success' && (
        <motion.div
          className="fixed bottom-5 right-5 bg-green-600 text-gray-900 px-5 py-3 rounded-xl shadow-lg flex items-center gap-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FaCheckCircle /> Subscribed successfully!
        </motion.div>
      )}
    </section>
  );
};

export default NewarrivalsNewsletter;
