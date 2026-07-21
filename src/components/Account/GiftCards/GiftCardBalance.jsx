'use client';

import React from 'react';
import { FaWallet, FaHistory, FaSyncAlt } from 'react-icons/fa';

const formatDate = (dateString) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
};

const GiftCardBalance = ({
  balance = 125.0,
  recentActivity = [
    { id: 1, type: 'Redeemed', amount: -25, date: '2025-07-05' },
    { id: 2, type: 'Reloaded', amount: 50, date: '2025-06-28' },
    { id: 3, type: 'Redeemed', amount: -10, date: '2025-06-20' },
  ],
  onReload = () => alert('Reload action triggered!'),
}) => {
  return (
    <section
      aria-label="Your gift card balance and recent activity"
      className="max-w-[900px] mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8"
      role="region"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <FaWallet className="text-black text-4xl" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-extrabold text-black">Your Gift Card Balance</h2>
          <p className="text-black text-sm">Available to spend anytime</p>
        </div>
      </div>

      {/* Balance */}
      <div className="text-center mb-10 select-text">
        <span className="text-6xl font-extrabold text-gray-900">
          {balance.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-black">
          <FaHistory className="text-black" aria-hidden="true" />
          Recent Activity
        </h3>

        <ul
          className="divide-y divide-black max-h-48 overflow-y-auto rounded-md
            bg-black/20 p-4 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100"
          role="list"
          aria-label="Recent gift card transactions"
        >
          {recentActivity.map(({ id, type, amount, date }) => {
            const isPositive = amount > 0;
            return (
              <li
                key={id}
                className="flex justify-between py-2 text-sm sm:text-base text-gray-900"
                title={`${type} of ${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toFixed(
                  2
                )} on ${formatDate(date)}`}
              >
                <span className="truncate text-black">{type}</span>
                <span
                  className={`font-mono ${
                    isPositive ? 'text-black' : 'text-black'
                  }`}
                >
                  {isPositive ? '+' : '-'}
                  {Math.abs(amount).toFixed(2)}
                </span>
                <time className="text-black" dateTime={date}>
                  {formatDate(date)}
                </time>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Reload Button */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={onReload}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full
            bg-black text-black font-semibold shadow-md hover:bg-black hover:shadow-lg
            transition duration-300 focus:outline-none focus:ring-2 focus:ring-black
            focus:ring-offset-2 active:scale-[0.97] select-none"
          aria-label="Reload gift card balance"
        >
          <FaSyncAlt className="text-black" aria-hidden="true" />
          Reload Balance
        </button>
      </div>
    </section>
  );
};

export default GiftCardBalance;
