'use client';

import React, { useState } from 'react';
import { FaPercent, FaBoxOpen, FaBell, FaTimes } from 'react-icons/fa';

const promotionsFeatures = [
  {
    icon: <FaPercent className="text-amber-600 text-lg" />,
    label: 'Exclusive Discounts & Deals',
  },
  {
    icon: <FaBoxOpen className="text-amber-600 text-lg" />,
    label: 'Seasonal Gift Offers',
  },
  {
    icon: <FaBell className="text-amber-600 text-lg" />,
    label: 'Early Access Notifications',
  },
];

const promotionsContent = (
  <div className="text-left text-sm text-gray-700 space-y-3">
    <h3 className="text-xl font-semibold text-amber-600">Latest Promotions</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Up to 50% off on select electronics — limited time</li>
      <li>Buy 1 Get 1 Free: Fashion Clearance (ends Sunday)</li>
      <li>Free shipping on orders over $49 — auto-applied</li>
      <li>Earn bonus reward points on holiday collections</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">
      Offers update weekly. Visit our <span className="text-amber-600">Deals Page</span> for live updates.
    </p>
  </div>
);

const subscribeContent = (
  <div className="text-left text-sm text-gray-700 space-y-3">
    <h3 className="text-xl font-semibold text-amber-600">Get Notified First</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Early access to sales and product launches</li>
      <li>Personalized discount alerts just for you</li>
      <li>Priority on back-in-stock and restock alerts</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">
      Subscribe to our newsletter and never miss a deal. Unsubscribe anytime.
    </p>
  </div>
);

export default function HelpingPromotions() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Promotions help and information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-amber-600 tracking-tight">
          Promotions & Offers
        </h2>
        <p className="text-gray-700">
          Stay up to date with our latest promotions, discounts, and special offers designed to save you more.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600 font-medium text-sm">
          {promotionsFeatures.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center gap-3 whitespace-nowrap" title={label}>
              {icon}
              {label}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('promotions')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'promotions'
                ? 'bg-amber-500 text-black ring-amber-500'
                : 'bg-amber-600 text-black hover:bg-amber-500'
            }`}
            aria-label="Toggle promotions section"
          >
            View Promotions
          </button>

          <button
            type="button"
            onClick={() => toggleSection('subscribe')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'subscribe'
                ? 'bg-white text-black ring-gray-200'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100 hover:text-black'
            }`}
            aria-label="Toggle subscription info"
          >
            Subscribe
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 shadow-lg">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-400 text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'promotions' && promotionsContent}
            {activeSection === 'subscribe' && subscribeContent}
          </div>
        )}
      </div>
    </section>
  );
}
