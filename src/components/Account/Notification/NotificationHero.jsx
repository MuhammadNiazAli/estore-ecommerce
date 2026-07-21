'use client';

import React from 'react';
import { FaBell, FaRegBell, FaEnvelopeOpenText } from 'react-icons/fa';
import { FiBellOff, FiMail, FiClock } from 'react-icons/fi';

const notificationFeatures = [
  {
    icon: <FaRegBell className="text-amber-600 text-lg" />,
    label: 'Real-time Alerts',
  },
  {
    icon: <FiMail className="text-amber-600 text-lg" />,
    label: 'Email Notifications',
  },
  {
    icon: <FiClock className="text-amber-600 text-lg" />,
    label: 'Scheduled Summaries',
  },
];

const NotificationHero = () => {
  return (
    <section
      aria-label="Manage your notification preferences"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Your{' '}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4 underline-offset-4">
              Notification Hub
            </span>
            <br />
            Stay Informed On Your Terms
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Customize how and when you receive updates. Whether it's alerts, emails, or summaries — you're in full control.
          </p>

          {/* Features List */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-gray-600 font-medium max-w-xs mx-auto lg:mx-0">
            {notificationFeatures.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 whitespace-nowrap" title={item.label}>
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-amber-600 text-black font-semibold rounded-full shadow-md hover:bg-amber-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Customize notifications"
            >
              Customize Alerts
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              aria-label="More notification settings"
            >
              More Options
            </button>
          </div>
        </div>

        {/* Right Icon Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white border-4 border-amber-600 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-30"
            aria-hidden="true"
          >
            <FaBell className="text-amber-600 text-[5.5rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-amber-600 text-4xl opacity-15 pointer-events-none select-none">
        <FaBell />
      </div>
    </section>
  );
};

export default NotificationHero;
