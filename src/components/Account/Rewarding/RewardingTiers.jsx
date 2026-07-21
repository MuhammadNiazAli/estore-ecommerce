'use client';

import React from 'react';
import { FaGem, FaStar, FaCrown } from 'react-icons/fa';

const membershipTiers = [
  {
    name: 'Silver',
    icon: <FaGem className="text-gray-600 text-4xl" aria-hidden="true" />,
    minPoints: 0,
    benefits: [
      '1x points on purchases',
      'Access to basic rewards',
      'Monthly newsletter',
    ],
    styles: {
      color: 'text-gray-600',
      border: 'border-gray-500',
      bg: 'bg-white',
    },
  },
  {
    name: 'Gold',
    icon: <FaStar className="text-black text-5xl" aria-hidden="true" />,
    minPoints: 500,
    benefits: [
      '1.5x points multiplier',
      'Early access to sales',
      'Free express shipping',
    ],
    styles: {
      color: 'text-black',
      border: 'border-black',
      bg: 'bg-white',
    },
  },
  {
    name: 'Platinum',
    icon: <FaCrown className="text-black text-5xl" aria-hidden="true" />,
    minPoints: 1000,
    benefits: [
      '2x points multiplier',
      'Exclusive VIP events',
      'Personalized offers',
      'Priority customer support',
    ],
    styles: {
      color: 'text-black',
      border: 'border-black',
      bg: 'bg-white',
    },
  },
];

export default function RewardingTiers() {
  return (
    <section
      className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl"
      aria-labelledby="membership-tiers-title"
    >
      <h2
        id="membership-tiers-title"
        className="text-xl sm:text-2xl font-bold mb-8 border-b border-gray-200 pb-2"
      >
        Membership Tiers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {membershipTiers.map(({ name, icon, minPoints, benefits, styles }, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center p-6 rounded-xl border shadow-lg
              ${styles.border} ${styles.bg}`}
            tabIndex={0}
            aria-label={`${name} tier, starts from ${minPoints} points`}
          >
            <div className="mb-4">{icon}</div>
            <h3 className={`text-2xl font-semibold mb-1 ${styles.color}`}>{name}</h3>
            <p className="text-sm text-gray-600 mb-4">From {minPoints} points</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
