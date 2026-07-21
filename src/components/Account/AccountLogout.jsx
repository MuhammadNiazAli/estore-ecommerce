'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AccountLogout = () => {
  const handleLogout = () => {
    // This would trigger a real logout in production
    alert('You’ve successfully logged out.');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white via-white to-white rounded-xl p-10 max-w-[400px] mx-auto flex flex-col items-center shadow-xl mb-[-30px]"
      aria-label="Logout Section"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide select-none">
        Sign Out
      </h2>

      <button
        type="button"
        onClick={handleLogout}
        aria-label="Log out from your account"
        className="
          bg-red-600 
          hover:bg-red-700 
          active:bg-red-800
          text-gray-900 
          px-10 py-4 
          rounded-full 
          font-semibold 
          shadow-lg 
          transition 
          duration-300 
          ease-in-out
          transform
          hover:scale-[1.05]
          focus:outline-none 
          focus-visible:ring-4 
          focus-visible:ring-red-500 
          focus-visible:ring-opacity-75
          select-none
        "
      >
        Log Out
      </button>
    </motion.section>
  );
};

export default AccountLogout;
