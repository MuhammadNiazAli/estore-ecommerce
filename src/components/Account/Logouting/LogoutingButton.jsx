'use client';

import React from 'react';

const LogoutingButton = ({ onLogout, onCancel }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 max-w-md mx-auto lg:mx-0">
      <button
        type="button"
        onClick={onLogout}
        className="px-8 py-3 bg-black text-black font-semibold rounded-full shadow-md hover:bg-black hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Confirm logout"
      >
        Confirm Logout
      </button>

      <button
        type="button"
        onClick={onCancel}
        className="px-8 py-3 border border-black text-black font-semibold rounded-full hover:bg-black hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Cancel logout"
      >
        Cancel
      </button>
    </div>
  );
};

export default LogoutingButton;
