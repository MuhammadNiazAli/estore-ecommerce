'use client';

import React from 'react';
import { FaGift, FaCoins, FaUserPlus } from 'react-icons/fa';

export default function RewardingMobileCTA() {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-amber-600 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] px-4 py-2 flex justify-around items-center sm:hidden"
      aria-label="Mobile reward quick actions"
    >
      {/* Points Button */}
      <button
        type="button"
        className="flex flex-col items-center text-amber-500 text-xs font-semibold hover:text-amber-400 transition-colors duration-200"
        aria-label="View Points"
      >
        <FaCoins className="text-lg mb-1" aria-hidden="true" />
        Points
      </button>

      {/* Redeem Button */}
      <button
        type="button"
        className="flex flex-col items-center text-amber-500 text-xs font-semibold hover:text-amber-400 transition-colors duration-200"
        aria-label="Redeem Rewards"
      >
        <FaGift className="text-lg mb-1" aria-hidden="true" />
        Redeem
      </button>

      {/* Invite Button */}
      <button
        type="button"
        className="flex flex-col items-center text-amber-500 text-xs font-semibold hover:text-amber-400 transition-colors duration-200"
        aria-label="Invite Friends"
      >
        <FaUserPlus className="text-lg mb-1" aria-hidden="true" />
        Invite
      </button>
    </nav>
  );
}
