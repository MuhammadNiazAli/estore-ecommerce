'use client';

import React from 'react';
import { FiPackage, FiTruck, FiHelpCircle } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FiPackage className="text-black text-lg" />,
    label: 'Live Package Tracking',
  },
  {
    icon: <FiTruck className="text-black text-lg" />,
    label: 'Real-Time Delivery Updates',
  },
  {
    icon: <FiHelpCircle className="text-black text-lg" />,
    label: '24/7 Support Access',
  },
];

const OrderingHero = () => {
  return (
    <section
      aria-label="Track and manage your orders"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Seamless{' '}
            <span className="text-black underline decoration-black decoration-4 underline-offset-4">
              Order Tracking
            </span>
            <br />
            From Checkout to Delivery
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Get real-time updates on every stage of your order — from purchase confirmation
            to doorstep delivery. Enjoy full control and transparency throughout your shopping experience.
          </p>

          {/* Feature List */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-gray-600 font-medium max-w-xs mx-auto lg:mx-0">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-2 whitespace-nowrap" title={item.label}>
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
              aria-label="View your order history"
            >
              View Orders
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              aria-label="Contact customer support"
            >
              Get Support
            </button>
          </div>
        </div>

        {/* Right Image Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative w-72 h-96 rounded-3xl overflow-hidden border-4 border-black bg-white shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            aria-hidden="true"
          >
            <img
              src="https://images.unsplash.com/photo-1588348442528-85c6fa3b0440?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Package in transit"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
              loading="eager"
              decoding="async"
            />

            <div className="absolute top-3 right-3 bg-black text-black text-xs font-bold px-3 py-1 rounded-full shadow">
              In Transit
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-black text-4xl opacity-15 pointer-events-none select-none">
        <FaCheckCircle />
      </div>
    </section>
  );
};

export default OrderingHero;
