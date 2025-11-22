'use client';

import React, { useState } from 'react';
import { FaPercent, FaBoxOpen, FaBell, FaTimes } from 'react-icons/fa';

const promotionsFeatures = [
  {
    icon: <FaPercent className="text-yellow-400 text-lg" />,
    label: 'Exclusive Discounts & Deals',
  },
  {
    icon: <FaBoxOpen className="text-yellow-400 text-lg" />,
    label: 'Seasonal Gift Offers',
  },
  {
    icon: <FaBell className="text-yellow-400 text-lg" />,
    label: 'Early Access Notifications',
  },
];

const promotionsContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Latest Promotions</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Up to 50% off on select electronics — limited time</li>
      <li>Buy 1 Get 1 Free: Fashion Clearance (ends Sunday)</li>
      <li>Free shipping on orders over $49 — auto-applied</li>
      <li>Earn bonus reward points on holiday collections</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Offers update weekly. Visit our <span className="text-yellow-400">Deals Page</span> for live updates.
    </p>
  </div>
);

const subscribeContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Get Notified First</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Early access to sales and product launches</li>
      <li>Personalized discount alerts just for you</li>
      <li>Priority on back-in-stock and restock alerts</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
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
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Promotions & Offers
        </h2>
        <p className="text-gray-300">
          Stay up to date with our latest promotions, discounts, and special offers designed to save you more.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
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
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
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
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-label="Toggle subscription info"
          >
            Subscribe
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
            {activeSection === 'promotions' && promotionsContent}
            {activeSection === 'subscribe' && subscribeContent}
          </div>
        )}
      </div>
    </section>
  );
}
