'use client';

import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const PerchasigHistoryHero = () => {
  return (
    <section
      aria-label="Your Purchase History Overview"
      className="
        w-full max-w-[900px] mx-auto px-6 py-14 lg:py-20 my-[-30px] mb-8
        bg-white
        text-amber-300 rounded-3xl shadow-2xl overflow-hidden relative
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Your{' '}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4 underline-offset-4">
              Purchase History
            </span>
            <br />
            All Your Orders in One Place
          </h1>

          <p className="text-amber-500 text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Quickly review your past purchases, track your orders, and manage your transactions effortlessly.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-5">
            <button
              type="button"
              className="
                px-8 py-3 bg-amber-700 text-amber-950 font-semibold rounded-full shadow-md
                hover:bg-amber-600 hover:shadow-lg transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-offset-2
              "
              aria-label="View detailed purchase history"
            >
              View Details
            </button>

            <button
              type="button"
              className="
                px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-full
                hover:bg-amber-600 hover:text-amber-950 transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-offset-2
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
              bg-amber-900 border-8 border-amber-600
              shadow-[0_15px_40px_rgba(202,138,4,0.6)]
              flex items-center justify-center
              animate-pulse
            "
            aria-hidden="true"
          >
            <FaShoppingBag className="text-amber-600 text-[6rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-8 left-8 hidden lg:block text-amber-600 text-5xl opacity-10 pointer-events-none select-none">
        <FaShoppingBag />
      </div>
    </section>
  );
};

export default PerchasigHistoryHero;
