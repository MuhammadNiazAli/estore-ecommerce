'use client';

import React from 'react';

const articles = [
  {
    title: 'How to Place an Order',
    excerpt: 'A simple guide to help you shop confidently and place your first order without hassle.',
    url: '/support/articles/how-to-place-order',
  },
  {
    title: 'Shipping Information',
    excerpt: 'Understand delivery options, estimated arrival times, and how to track your package.',
    url: '/support/articles/shipping-information',
  },
  {
    title: 'Returns and Exchanges',
    excerpt: 'Need to return or exchange something? Here’s how to make it quick and easy.',
    url: '/support/articles/returns-exchanges',
  },
  {
    title: 'Payment Methods',
    excerpt: 'Check which payment options we accept and how to update your billing info.',
    url: '/support/articles/payment-methods',
  },
];

const SupportArticles = () => {
  return (
    <section className="w-full px-6 py-16 bg-white text-gray-900 my-[-14px]">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Helpful Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {articles.map(({ title, excerpt, url }, idx) => (
            <a
              key={idx}
              href={url}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-500 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-black shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                {title}
              </h3>
              <p className="text-gray-700">{excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportArticles;
