'use client';

import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const PerchasigHistoryEmptyState = () => {
  const handleRedirect = () => {
    // Forward to shop page — can be replaced with Next.js router if needed
    window.location.href = '/shop';
  };

  return (
    <section
      aria-label="No purchase history found"
      className="
        flex flex-col items-center justify-center
        py-20 max-w-[600px] mx-auto text-center
        bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700
        rounded-3xl shadow-2xl px-8
      "
      style={{ minHeight: '320px' }}
    >
      <FaBoxOpen
        className="text-yellow-400 text-8xl mb-6 opacity-90"
        aria-hidden="true"
      />

      <h2 className="text-3xl font-extrabold text-yellow-100 mb-3">
        No Purchase History Yet
      </h2>

      <p className="text-yellow-300 max-w-sm leading-relaxed">
        It looks like you haven’t made any purchases yet. Start shopping now and your history will appear here.
      </p>

      <button
        type="button"
        onClick={handleRedirect}
        aria-label="Start shopping now"
        className="
          mt-8 px-10 py-3 rounded-full
          bg-yellow-400 text-yellow-900 font-semibold shadow-md
          hover:bg-yellow-300 transition duration-300
          focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
        "
      >
        Start Shopping
      </button>
    </section>
  );
};

export default PerchasigHistoryEmptyState;
