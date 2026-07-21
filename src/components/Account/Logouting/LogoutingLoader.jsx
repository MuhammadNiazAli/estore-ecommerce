'use client';

import React from 'react';

const LogoutingLoader = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Logging out, please wait"
      className="flex justify-center items-center py-8"
    >
      <svg
        className="animate-spin h-12 w-12 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LogoutingLoader;
