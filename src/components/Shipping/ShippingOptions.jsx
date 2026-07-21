'use client';

import React from 'react';
import { FiClock, FiMapPin, FiShield, FiTruck } from 'react-icons/fi';

const options = [
  {
    Icon: FiClock,
    title: 'Fast Delivery',
    description: 'Get your orders delivered within 1-3 business days with our express shipping options.',
  },
  {
    Icon: FiMapPin,
    title: 'Worldwide Shipping',
    description: 'We ship to over 100 countries globally with reliable tracking and support.',
  },
  {
    Icon: FiShield,
    title: 'Secure Packaging',
    description: 'All packages are carefully packed to ensure your products arrive safe and sound.',
  },
  {
    Icon: FiTruck,
    title: 'Real-Time Tracking',
    description: 'Stay updated with live tracking information from warehouse to your doorstep.',
  },
];

const ShippingOptions = () => {
  return (
    <section
      aria-label="Shipping options"
      className="max-w-[1000px] mx-auto px-6 py-16 sm:py-24 text-gray-700"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center drop-shadow-lg">
        Why Choose Our Shipping?
      </h2>

      <div className="grid gap-10 sm:grid-cols-2">
        {options.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-6 bg-white rounded-2xl p-6 sm:p-8
                       shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            role="group"
            tabIndex={0}
            aria-label={title}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click();
            }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16
                         rounded-full bg-gradient-to-tr from-amber-400 to-amber-600
                         text-gray-900 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShippingOptions;
