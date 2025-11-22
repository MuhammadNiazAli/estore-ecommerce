'use client';

import React, { useState } from 'react';
import { FaBellSlash, FaSyncAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NotificationEmpty = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate refresh
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="No notifications"
      className="w-full max-w-md mx-auto px-6 py-16 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl"
    >
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ rotate: 5 }}
          className="w-24 h-24 rounded-2xl bg-gray-800 border-4 border-gray-700 shadow-inner flex items-center justify-center"
        >
          <FaBellSlash className="text-4xl text-gray-500" aria-hidden="true" />
        </motion.div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">
        You're All Caught Up!
      </h2>

      <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
        You have no new notifications. We'll let you know as soon as there's something important.
      </p>

      <button
        onClick={handleRefresh}
        type="button"
        className={`mt-6 px-6 py-2.5 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-white text-sm font-medium rounded-full transition-all duration-300 ${
          isLoading ? 'cursor-not-allowed opacity-80' : ''
        }`}
        disabled={isLoading}
        aria-label="Refresh notifications"
      >
        {isLoading ? (
          <svg
            className="w-4 h-4 animate-spin text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 00-8 8z"
            ></path>
          </svg>
        ) : (
          <>
            <FaSyncAlt className="text-sm" />
            Refresh
          </>
        )}
      </button>
    </motion.section>
  );
};

export default NotificationEmpty;
