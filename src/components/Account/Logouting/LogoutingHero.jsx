'use client';

import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutingHero = () => {
  return (
    <section
      aria-label="Log out from your account"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-yellow-400 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            You Are About to{' '}
            <span className="underline decoration-yellow-300 decoration-4 underline-offset-4">
              Log Out
            </span>
          </h1>
          <p className="text-yellow-300 text-base sm:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
            Are you sure you want to end your session? We hope to see you back soon!
            Logging out will secure your account on this device.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              aria-label="Confirm logout"
            >
              Confirm Logout
            </button>

            <button
              type="button"
              className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              aria-label="Cancel logout"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Right Icon Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gray-800 border-4 border-yellow-400 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center"
            aria-hidden="true"
          >
            <FaSignOutAlt className="text-yellow-400 text-[6rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-yellow-400 text-5xl opacity-15 pointer-events-none select-none">
        <FaSignOutAlt />
      </div>
    </section>
  );
};

export default LogoutingHero;
