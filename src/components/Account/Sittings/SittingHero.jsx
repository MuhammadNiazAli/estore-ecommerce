'use client';

import React from 'react';
import { FiSettings, FiUser, FiGlobe } from 'react-icons/fi';
import { FaUserCog } from 'react-icons/fa';

const settingsFeatures = [
  {
    icon: <FiUser className="text-yellow-400 text-xs" />,
    label: <span className="text-yellow-400 text-xs">Update Profile Information</span>,
  },
  {
    icon: <FiGlobe className="text-yellow-400 text-xs" />,
    label: <span className="text-yellow-400 text-xs">Manage Language & Region</span>,
  },
  {
    icon: <FiSettings className="text-yellow-400 text-xs" />,
    label: <span className="text-yellow-400 text-xs">Customize Preferences</span>,
  },
];


const SittingHero = () => {
  return (
    <section
      aria-label="Manage your account settings"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Your{' '}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4 underline-offset-4">
              Settings Center
            </span>
            <br />
            Control Everything In One Place
          </h1>

          <p className="text-yellow-300 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Easily manage your personal information, preferences, and notifications from your settings hub — built for simplicity and power.
          </p>

          {/* Features List */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-yellow-400 font-medium max-w-xs mx-auto lg:mx-0">
            {settingsFeatures.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 whitespace-nowrap" title={item.label}>
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              aria-label="Edit profile settings"
            >
              Edit Profile
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="More settings"
            >
              More Settings
            </button>
          </div>
        </div>

        {/* Right Icon Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gray-800 border-4 border-yellow-400 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-30"
            aria-hidden="true"
          >
            <FaUserCog className="text-yellow-400 text-[5.5rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-yellow-400 text-4xl opacity-15 pointer-events-none select-none">
        <FaUserCog />
      </div>
    </section>
  );
};

export default SittingHero;
