'use client';

import React from 'react';
import { FiMapPin, FiHome, FiCheckCircle } from 'react-icons/fi';
import { FaMapMarkedAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FiMapPin className="text-black text-lg" />,
    label: 'Save Multiple Delivery Locations',
  },
  {
    icon: <FiHome className="text-black text-lg" />,
    label: 'Set Your Default Address',
  },
  {
    icon: <FiCheckCircle className="text-black text-lg" />,
    label: 'Enjoy Fast & Secure Checkout',
  },
];

const AddressingHero = () => {
  return (
    <section
      aria-label="Manage your saved addresses"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Your{' '}
            <span className="text-black underline decoration-black decoration-4 underline-offset-4">
              Addresses Hub
            </span>
            <br />
            Simple, Reliable Delivery Management
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Easily save, update, and select your delivery addresses all in one place. Make your shopping experience seamless with quick access to your favorite locations.
          </p>

          {/* Features */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-gray-600 font-medium max-w-xs mx-auto lg:mx-0">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 whitespace-nowrap" title={item.label}>
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-black text-black font-semibold rounded-full shadow-md hover:bg-black hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Add new address"
            >
              Add New Address
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              aria-label="Manage addresses"
            >
              Manage Addresses
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white border-4 border-black shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center"
            aria-hidden="true"
          >
            <FaMapMarkedAlt className="text-black text-[5.5rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-black text-4xl opacity-15 pointer-events-none select-none">
        <FaMapMarkedAlt />
      </div>
    </section>
  );
};

export default AddressingHero;
