'use client';

import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const PerchasigHistoryHero = () => {
  return (
    <section
      aria-label="Your Purchase History Overview"
      className="
        w-full max-w-[900px] mx-auto px-6 py-14 lg:py-20 my-[-30px] mb-8
        bg-gray-900
        text-yellow-100 rounded-3xl shadow-2xl overflow-hidden relative
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Your{' '}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4 underline-offset-4">
              Purchase History
            </span>
            <br />
            All Your Orders in One Place
          </h1>

          <p className="text-yellow-300 text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Quickly review your past purchases, track your orders, and manage your transactions effortlessly.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-5">
            <button
              type="button"
              className="
                px-8 py-3 bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow-md
                hover:bg-yellow-400 hover:shadow-lg transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
              "
              aria-label="View detailed purchase history"
            >
              View Details
            </button>

            <button
              type="button"
              className="
                px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full
                hover:bg-yellow-400 hover:text-yellow-900 transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
              "
              aria-label="Export purchase history"
            >
              Export History
            </button>
          </div>
        </div>

        {/* Right Icon Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              w-52 h-52 sm:w-64 sm:h-64 rounded-3xl
              bg-yellow-800 border-8 border-yellow-400
              shadow-[0_15px_40px_rgba(202,138,4,0.6)]
              flex items-center justify-center
              animate-pulse
            "
            aria-hidden="true"
          >
            <FaShoppingBag className="text-yellow-400 text-[6rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-8 left-8 hidden lg:block text-yellow-400 text-5xl opacity-10 pointer-events-none select-none">
        <FaShoppingBag />
      </div>
    </section>
  );
};

export default PerchasigHistoryHero;
