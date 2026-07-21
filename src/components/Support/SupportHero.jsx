'use client';

import React from 'react';
import {
  FaHeadset,
  FaShippingFast,
  FaUndoAlt,
  FaCreditCard,
} from 'react-icons/fa';

const supportTopics = [
  {
    icon: <FaHeadset />,
    label: 'Customer Service',
    href: '/support/customer-service',
  },
  {
    icon: <FaShippingFast />,
    label: 'Shipping & Delivery',
    href: '/support/shipping',
  },
  {
    icon: <FaUndoAlt />,
    label: 'Returns & Refunds',
    href: '/support/returns',
  },
  {
    icon: <FaCreditCard />,
    label: 'Payments & Billing',
    href: '/support/payments',
  },
];

const SupportHero = () => {
  return (
    <section className="w-full bg-white px-6 py-16 text-gray-900 my-[-80px]">
      <div className="max-w-[960px] mx-auto text-center">

        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-amber-800 rounded-full shadow-lg">
            <FaHeadset size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            How Can We Help You Today?
          </h1>
          <p className="max-w-lg text-gray-700 text-lg leading-relaxed mb-8">
            Have questions about your order, returns, or billing? We’re here 24/7 to offer help that’s fast, friendly, and personalized—just the way support should be.
          </p>
          <a
            href="mailto:support@ecommerce.com"
            className="inline-block bg-amber-800 hover:bg-amber-900 transition-colors duration-300 text-gray-900 px-10 py-3 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-700 focus:ring-opacity-50"
          >
            Contact Support
          </a>
        </div>

       
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {supportTopics.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 hover:bg-gray-500 transition duration-300 shadow-md hover:shadow-lg text-gray-700"
            >
              <div className="text-amber-700 text-3xl">{icon}</div>
              <span className="font-semibold text-lg">{label}</span>
            </a>
          ))}
        </div>

       
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg text-left">
          <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
          <p className="text-gray-600 mb-5">
            Need answers fast? Here are a few topics our customers ask about most often:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a
                href="/support/faq#order-status"
                className="hover:text-amber-600 transition-colors"
              >
                • How can I check the status of my order?
              </a>
            </li>
            <li>
              <a
                href="/support/faq#return-policy"
                className="hover:text-amber-600 transition-colors"
              >
                • What’s your return policy?
              </a>
            </li>
            <li>
              <a
                href="/support/faq#payment-options"
                className="hover:text-amber-600 transition-colors"
              >
                • What payment methods do you accept?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
