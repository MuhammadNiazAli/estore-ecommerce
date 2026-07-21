'use client';

import React from 'react';
import { FaUserPlus, FaLink, FaCopy } from 'react-icons/fa';

export default function RewardingInviteFriends() {
  const referralLink = 'https://estore.com/referral/niaz-123';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied!');
  };

  return (
    <section className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left side: Invitation text and link */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <FaUserPlus className="text-black text-2xl" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              Invite Friends & Earn More
            </h2>
          </div>

          <p className="text-sm text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Share your referral link with friends. They get a discount, and you get bonus points when they make their first purchase.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <div
              className="bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700 flex items-center gap-3 select-all"
              aria-label="Referral link"
            >
              <FaLink className="text-black" aria-hidden="true" />
              <span className="break-all">{referralLink}</span>
            </div>

            <button
              type="button"
              onClick={copyToClipboard}
              className="px-6 py-2.5 bg-black text-black font-semibold rounded-full hover:bg-black transition-colors duration-250 shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Copy referral link to clipboard"
            >
              <FaCopy aria-hidden="true" />
              Copy Link
            </button>
          </div>
        </div>

        {/* Right side: Visual icon */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl bg-white border-4 border-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            aria-hidden="true"
          >
            <FaUserPlus className="text-black text-[3.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
