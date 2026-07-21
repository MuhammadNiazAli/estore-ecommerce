'use client';

import React, { useState, useEffect } from 'react';

const PerchasigHistoryLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for UX (can be replaced with real logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // fake loading complete
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Don’t show anything when loading is complete

  return (
    <div
      role="status"
      aria-label="Loading purchase history"
      className="flex flex-col items-center justify-center py-20 space-y-4"
      style={{ minHeight: '320px' }}
    >
      <svg
        className="animate-spin h-14 w-14 text-black"
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
      <span className="text-black font-semibold text-lg">Loading Purchase History...</span>
    </div>
  );
};

export default PerchasigHistoryLoader;
