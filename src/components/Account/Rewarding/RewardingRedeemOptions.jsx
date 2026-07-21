'use client';

import React from 'react';
import { FaGift, FaPercentage, FaTicketAlt, FaStar } from 'react-icons/fa';

const redeemItems = [
  {
    icon: <FaGift className="text-black text-3xl" aria-hidden="true" />,
    title: 'Exclusive Gift Boxes',
    pointsRequired: 500,
  },
  {
    icon: <FaPercentage className="text-black text-3xl" aria-hidden="true" />,
    title: '10% Discount Coupon',
    pointsRequired: 300,
  },
  {
    icon: <FaTicketAlt className="text-black text-3xl" aria-hidden="true" />,
    title: 'Free Shipping Voucher',
    pointsRequired: 400,
  },
  {
    icon: <FaStar className="text-black text-3xl" aria-hidden="true" />,
    title: 'VIP Event Access',
    pointsRequired: 1000,
  },
];

export default function RewardingRedeemOptions() {
  return (
    <section
      className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl"
      aria-labelledby="redeem-options-title"
    >
      <h2
        id="redeem-options-title"
        className="text-xl sm:text-2xl font-bold mb-6 border-b border-gray-200 pb-2"
      >
        Redeem Your Points
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {redeemItems.map(({ icon, title, pointsRequired }, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`Redeem ${title} for ${pointsRequired} points`}
            className="bg-white border border-gray-200 hover:border-black rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{pointsRequired} Points</p>
            <button
              type="button"
              aria-label={`Redeem ${title}`}
              className="mt-4 px-5 py-2 bg-black text-black font-semibold rounded-full hover:bg-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
