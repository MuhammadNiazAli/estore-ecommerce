'use client';

import React from 'react';
import { FaShoppingBag, FaStar, FaGift } from 'react-icons/fa';

// Steps explaining the rewards process
const steps = [
  {
    icon: <FaShoppingBag className="text-black text-3xl" />,
    title: '1. Shop & Earn',
    description: 'Get points every time you shop — automatically added to your account.',
  },
  {
    icon: <FaStar className="text-black text-3xl" />,
    title: '2. Track Progress',
    description: 'Watch your points grow and reach new VIP tiers for extra perks.',
  },
  {
    icon: <FaGift className="text-black text-3xl" />,
    title: '3. Redeem Rewards',
    description: 'Use your points to claim discounts, gifts, and exclusive products.',
  },
];

// Single step card component for clarity and reuse
function HowItWorksStep({ icon, title, description }) {
  return (
    <article
      className="bg-white border border-gray-200 rounded-xl px-6 py-8 shadow-md transition-all duration-300 hover:border-black"
      role="region"
      aria-label={title}
      tabIndex={0}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-black text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </article>
  );
}

export default function RewardingHowItWorks() {
  return (
    <section
      className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl"
      aria-labelledby="how-it-works-title"
    >
      <h2
        id="how-it-works-title"
        className="text-xl sm:text-2xl font-bold mb-6 border-b border-gray-200 pb-2"
      >
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {steps.map(({ icon, title, description }, idx) => (
          <HowItWorksStep
            key={idx}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
