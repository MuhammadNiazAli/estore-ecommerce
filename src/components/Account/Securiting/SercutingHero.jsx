'use client';

import React from 'react';
import { FiShield, FiLock, FiAlertTriangle } from 'react-icons/fi';
import { FaFingerprint } from 'react-icons/fa';

const securityFeatures = [
  {
    icon: <FiShield className="text-amber-700 text-xs" />,
    label: <span className="text-amber-700 text-xs">Advanced Encryption Protection</span>,
  },
  {
    icon: <FiLock className="text-amber-700 text-xs" />,
    label: <span className="text-amber-700 text-xs">Password & 2FA Control</span>,
  },
  {
    icon: <FiAlertTriangle className="text-amber-700 text-xs" />,
    label: <span className="text-amber-700 text-xs">Suspicious Login Alerts</span>,
  },
];


const SecuritingHero = () => {
  return (
    <section
      aria-label="Secure your account with advanced tools"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-white via-white to-white text-amber-600 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Your{' '}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4 underline-offset-4">
              Security Vault
            </span>
            <br />
            Stay Protected. Stay Confident.
          </h1>

          <p className="text-amber-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Take full control over your account's security settings. Enable 2FA, manage active sessions, set up alerts, and more — all in one secure space.
          </p>

          {/* Features List */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-amber-500 font-medium max-w-xs mx-auto lg:mx-0">
            {securityFeatures.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 whitespace-nowrap"
                title={item.label}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-amber-600 text-black font-semibold rounded-full shadow-md hover:bg-amber-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Enable 2FA"
            >
              Enable 2FA
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              aria-label="Security Settings"
            >
              Security Settings
            </button>
          </div>
        </div>

        {/* Right Visual - Fingerprint Icon */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white border-4 border-amber-600 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-30"
            aria-hidden="true"
          >
            <FaFingerprint className="text-amber-600 text-[5.5rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-amber-600 text-4xl opacity-15 pointer-events-none select-none">
        <FaFingerprint />
      </div>
    </section>
  );
};

export default SecuritingHero;
