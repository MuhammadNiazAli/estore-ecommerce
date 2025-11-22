'use client';

import React, { useState } from 'react';
import { FaBoxOpen, FaWallet, FaHourglassHalf, FaTimes } from 'react-icons/fa';

const giftCardFeatures = [
  {
    icon: <FaBoxOpen className="text-yellow-400 text-base" />,
    label: 'Easy to Purchase & Redeem',
  },
  {
    icon: <FaWallet className="text-yellow-400 text-base" />,
    label: 'Flexible Payment Options',
  },
  {
    icon: <FaHourglassHalf className="text-yellow-400 text-base" />,
    label: 'Valid for 12 Months',
  },
];

const buyNowContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Purchase a Gift Card</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Choose any value from $10 to $500</li>
      <li>Instant delivery via email or SMS</li>
      <li>Use online or in-store with ease</li>
      <li>Customize your message for the recipient</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">Secure checkout powered by trusted payment gateways.</p>
  </div>
);

const learnMoreContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Gift Card Information</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Gift cards are valid for 12 months from the purchase date</li>
      <li>No additional fees or activation charges</li>
      <li>Can be combined with other discounts or promos</li>
      <li>Balance check and partial redemptions are supported</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">Need help redeeming? Contact our support team anytime.</p>
  </div>
);

export default function HelpingGiftCards() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Gift card help and information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Gift Cards Made Simple
        </h2>
        <p className="text-gray-300 text-sm">
          Give the perfect gift with our versatile gift cards. Easy to buy, send, and redeem online or in-store.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-xs">
          {giftCardFeatures.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center justify-center gap-2 whitespace-nowrap" title={label}>
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('buy')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'buy'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            } text-sm`}
            aria-label="Toggle buy gift card section"
          >
            Buy Now
          </button>

          <button
            type="button"
            onClick={() => toggleSection('learn')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'learn'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            } text-sm`}
            aria-label="Toggle learn more section"
          >
            Learn More
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-gray-900 border border-gray-700 rounded-xl transition-all duration-300 shadow-lg">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'buy' && buyNowContent}
            {activeSection === 'learn' && learnMoreContent}
          </div>
        )}
      </div>
    </section>
  );
}
