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
      className="max-w-[900px] mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl p-8"
      role="region"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <FaWallet className="text-yellow-400 text-4xl" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-300">Your Gift Card Balance</h2>
          <p className="text-yellow-200 text-sm">Available to spend anytime</p>
        </div>
      </div>

      {/* Balance */}
      <div className="text-center mb-10 select-text">
        <span className="text-6xl font-extrabold text-white">
          {balance.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-yellow-300">
          <FaHistory className="text-yellow-400" aria-hidden="true" />
          Recent Activity
        </h3>

        <ul
          className="divide-y divide-yellow-600 max-h-48 overflow-y-auto rounded-md
            bg-yellow-800/20 p-4 scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-yellow-900"
          role="list"
          aria-label="Recent gift card transactions"
        >
          {recentActivity.map(({ id, type, amount, date }) => {
            const isPositive = amount > 0;
            return (
              <li
                key={id}
                className="flex justify-between py-2 text-sm sm:text-base text-white"
                title={`${type} of ${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toFixed(
                  2
                )} on ${formatDate(date)}`}
              >
                <span className="truncate text-yellow-200">{type}</span>
                <span
                  className={`font-mono ${
                    isPositive ? 'text-yellow-400' : 'text-red-500'
                  }`}
                >
                  {isPositive ? '+' : '-'}
                  {Math.abs(amount).toFixed(2)}
                </span>
                <time className="text-yellow-300" dateTime={date}>
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
            bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-300 hover:shadow-lg
            transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300
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
