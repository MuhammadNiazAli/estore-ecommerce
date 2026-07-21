'use client';

import React from 'react';
import { Lightbulb, Clock, ShieldCheck, Package } from 'lucide-react';

const tips = [
  {
    icon: <Lightbulb size={24} aria-hidden="true" />,
    title: 'Keep Your Receipt',
    description: 'Always keep your order confirmation or receipt handy for faster processing.',
  },
  {
    icon: <Clock size={24} aria-hidden="true" />,
    title: 'Return Within Time',
    description: 'Make sure to initiate your return or exchange within 14 days of receiving the item.',
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: 'Original Condition',
    description: 'Return items in their original condition with tags and packaging intact.',
  },
  {
    icon: <Package size={24} aria-hidden="true" />,
    title: 'Use Secure Packaging',
    description: 'Pack your item securely to avoid damage during transit.',
  },
];

const ReturnChangeTips = () => {
  return (
    <section
      aria-labelledby="return-change-tips-title"
      className="bg-white text-gray-900 px-4 py-16 flex justify-center"
    >
      <div className="max-w-[1000px] w-full text-center">
        <h2
          id="return-change-tips-title"
          className="text-amber-600 text-3xl md:text-4xl font-bold mb-10"
        >
          Helpful Return & Exchange Tips
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-base md:text-lg">
          Follow these tips to ensure a smooth and hassle-free return or exchange experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {tips.map(({ icon, title, description }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:bg-gray-50 transition cursor-default focus:outline-amber-600 focus:outline-2 focus:outline-offset-2"
              tabIndex={0}
              aria-label={title}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-700 text-black shadow-md">
                {icon}
              </div>
              <h3 className="text-amber-500 font-semibold text-lg md:text-xl mb-2">{title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturnChangeTips;
