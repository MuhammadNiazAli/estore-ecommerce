'use client';

import React from 'react';
import { BadgeCheck, Truck, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    title: 'Top-Quality Products',
    description: 'All items are handpicked and quality-verified by experts.',
  },
  {
    icon: <Truck className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    title: 'Fast & Free Delivery',
    description: 'Enjoy free shipping on all orders with real-time tracking.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    title: 'Secure Checkout',
    description: 'Your data is safe with end-to-end encryption and fraud protection.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    title: 'Exclusive Deals',
    description: 'Access members-only discounts and limited-time promotions.',
  },
];

const ProductCallBenefits = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-12 sm:px-6">
      <div className="max-w-[1000px] w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200"
          >
            <div>{benefit.icon}</div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-600 mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCallBenefits;
