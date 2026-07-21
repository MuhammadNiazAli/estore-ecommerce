'use client';

import React from 'react';

const LogoutingButton = ({ onLogout, onCancel }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 max-w-md mx-auto lg:mx-0">
      <button
        type="button"
        onClick={onLogout}
        className="px-8 py-3 bg-amber-600 text-black font-semibold rounded-full shadow-md hover:bg-amber-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="Confirm logout"
      >
        Confirm Logout
      </button>

      <button
        type="button"
        onClick={onCancel}
        className="px-8 py-3 border border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
        aria-label="Cancel logout"
      >
        Cancel
      </button>
    </div>
  );
};

export default LogoutingButton;
