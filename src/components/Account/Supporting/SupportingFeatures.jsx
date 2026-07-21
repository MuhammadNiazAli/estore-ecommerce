'use client';

import React from 'react';
import { FiCheckCircle, FiShield, FiClock } from 'react-icons/fi';

const features = [
  {
    icon: <FiCheckCircle className="text-black text-4xl" />,
    title: 'Reliable Support',
    description: 'Get consistent and dependable assistance whenever you need it.',
  },
  {
    icon: <FiShield className="text-black text-4xl" />,
    title: 'Secure & Private',
    description: 'Your data and communications are always safe with us.',
  },
  {
    icon: <FiClock className="text-black text-4xl" />,
    title: '24/7 Availability',
    description: 'Our team is ready to help you around the clock, every day.',
  },
];

const SupportingFeatures = () => {
  return (
    <section
      aria-label="Support features"
      className="max-w-[900px] mx-auto px-6 py-14 bg-white rounded-3xl shadow-2xl text-black"
    >
      <h2 className="text-3xl font-extrabold mb-12 text-center tracking-tight">
        Why Choose Our Support?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-5 px-6 py-8 rounded-2xl
              bg-black bg-opacity-60 shadow-md
              hover:bg-opacity-80 hover:scale-[1.03] hover:shadow-xl transition-transform duration-300"
          >
            <div
              className="p-5 bg-gradient-to-tr from-black to-gray-900 rounded-full shadow-lg
                flex items-center justify-center transition-colors duration-300"
            >
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-black text-sm leading-relaxed max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportingFeatures;
