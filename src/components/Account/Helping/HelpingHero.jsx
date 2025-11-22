'use client';

import React from 'react';
import { FaHandsHelping, FaLightbulb, FaHeadset } from 'react-icons/fa';

const helpFeatures = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-lg" />,
    label: 'Expert Advice & Tips',
  },
  {
    icon: <FaHeadset className="text-yellow-400 text-lg" />,
    label: '24/7 Customer Support',
  },
  {
    icon: <FaHandsHelping className="text-yellow-400 text-lg" />,
    label: 'Personalized Assistance',
  },
];

export default function HelpingHero() {
  return (
    <section
      aria-label="Customer help and support"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Need Help?{' '}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4 underline-offset-4">
              We’ve Got You Covered
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            From expert advice to 24/7 customer support, discover how we assist you at every step for a seamless shopping experience.
          </p>

          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-gray-400 font-medium max-w-xs mx-auto lg:mx-0">
            {helpFeatures.map(({ icon, label }, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 whitespace-nowrap"
                title={label}
              >
                {icon}
                {label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              aria-label="Contact support"
            >
              Contact Support
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="Learn more"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right side icon illustration */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gray-800 border-4 border-yellow-400 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-30"
            aria-hidden="true"
          >
            <FaHandsHelping className="text-yellow-400 text-[5.5rem]" />
          </div>
        </div>
      </div>

      {/* Subtle decorative floating icon for depth */}
      <div className="absolute top-6 left-6 hidden lg:block text-yellow-400 text-4xl opacity-15 pointer-events-none select-none">
        <FaHandsHelping />
      </div>
    </section>
  );
}
