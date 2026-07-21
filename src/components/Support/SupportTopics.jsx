'use client';

import React from 'react';

const topics = [
  {
    title: 'Orders & Shipping',
    description: 'Get real-time updates, track packages, or make changes to your recent order.',
    link: '/support/shipping',
  },
  {
    title: 'Returns & Refunds',
    description: 'Need to send something back? We’ll guide you through the return and refund process.',
    link: '/support/returns',
  },
  {
    title: 'Payments & Billing',
    description: 'View your charges, update payment methods, or resolve billing issues.',
    link: '/support/payments',
  },
  {
    title: 'Account Management',
    description: 'Edit your personal details, change your password, or manage preferences anytime.',
    link: '/support/account',
  },
];

const SupportTopics = () => {
  return (
    <section className="w-full px-6 py-16 bg-white text-gray-900">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Explore Our Most Asked Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {topics.map(({ title, description, link }, idx) => (
            <a
              key={idx}
              href={link}
              tabIndex={0}
              className="block group border border-gray-200 bg-white hover:bg-gray-500 transition-colors duration-300 rounded-xl p-6 focus:ring-4 focus:ring-black focus:outline-none shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTopics;
