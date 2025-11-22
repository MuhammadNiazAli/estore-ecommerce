'use client';

import React from 'react';
import { ClipboardList, Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Submit Request',
    description: 'Fill out the return/exchange form with your order details.',
    icon: <ClipboardList size={28} aria-hidden="true" />,
  },
  {
    title: 'Package Item',
    description: 'Prepare the product securely in its original packaging.',
    icon: <Package size={28} aria-hidden="true" />,
  },
  {
    title: 'Ship It',
    description:
      'Schedule a pickup or drop off your package at the nearest location.',
    icon: <Truck size={28} aria-hidden="true" />,
  },
  {
    title: 'Refund or Exchange',
    description:
      'Once received, we process your refund or ship your exchange.',
    icon: <CheckCircle size={28} aria-hidden="true" />,
  },
];

const ReturnChangeSteps = () => {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="bg-gray-900 text-white py-16 px-4 flex justify-center"
    >
      <div className="max-w-[1000px] w-full text-center">
        <h2
          id="how-it-works-title"
          className="text-yellow-400 text-3xl md:text-4xl font-bold mb-12"
        >
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          {steps.map(({ title, description, icon }, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-md hover:bg-gray-700 transition cursor-default flex-1 max-w-sm mx-auto md:max-w-none"
              aria-label={`${title} step`}
              tabIndex={0}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-yellow-500 text-black shadow-md">
                {icon}
              </div>
              <h3 className="text-yellow-300 font-semibold text-xl mb-3">
                {title}
              </h3>
              <p className="text-gray-300 max-w-xs">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturnChangeSteps;
