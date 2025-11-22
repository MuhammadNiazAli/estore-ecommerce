'use client';

import React from 'react';
import { ShoppingCart, CreditCard, Package, Smile } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingCart className="w-10 h-10 text-yellow-400" aria-hidden="true" />,
    title: 'Choose Your Product',
    description:
      'Browse our extensive catalog and pick the perfect item tailored to your needs.',
  },
  {
    icon: <CreditCard className="w-10 h-10 text-yellow-400" aria-hidden="true" />,
    title: 'Secure Checkout',
    description:
      'Pay safely using our encrypted and trusted payment gateways for peace of mind.',
  },
  {
    icon: <Package className="w-10 h-10 text-yellow-400" aria-hidden="true" />,
    title: 'Fast Shipping',
    description:
      'Receive your order promptly with real-time tracking and updates.',
  },
  {
    icon: <Smile className="w-10 h-10 text-yellow-400" aria-hidden="true" />,
    title: 'Enjoy & Support',
    description:
      'Experience your product fully and rely on our dedicated support whenever needed.',
  },
];

const ProductCallSteps = () => {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="w-full bg-gray-900 px-4 sm:px-6 py-12 sm:py-16 flex justify-center my-[-20px]"
    >
      <div className="max-w-6xl w-full">
        <h2
          id="how-it-works-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12 sm:mb-16 tracking-tight px-2 sm:px-0"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {steps.map(({ icon, title, description }, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-md hover:bg-gray-900 duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              tabIndex={0}
              aria-label={`${title} step`}
            >
              <div className="relative mb-5 sm:mb-6">
                {icon}
                <span
                  className="absolute -top-3 -right-3 bg-yellow-500 text-gray-900 font-bold rounded-full w-7 h-7 flex items-center justify-center text-lg shadow-lg select-none"
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2 text-center">
                {title}
              </h3>
              <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCallSteps;
