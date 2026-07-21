'use client';

import React, { useState } from 'react';
import {
  LinkIcon,
  UsersIcon,
  ClipboardDocumentIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const referrals = [
  {
    id: 1,
    code: 'REF12345',
    link: 'https://example.com/referral/REF12345',
    referredCount: 8,
    rewardsEarned: '$40.00',
  },
  {
    id: 2,
    code: 'FRIEND2025',
    link: 'https://example.com/referral/FRIEND2025',
    referredCount: 3,
    rewardsEarned: '$15.00',
  },
];

const ProfileReferralLinks = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (id, link) => {
    navigator.clipboard.writeText(link);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10 sm:py-14">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-600 tracking-tight">
              Your Referral Links
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mt-1 max-w-lg">
              Invite your friends and earn exciting rewards every time someone signs up using your link!
            </p>
          </div>
          <motion.div
            className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <UsersIcon className="w-6 h-6 animate-pulse" />
            <span>Invite More Friends</span>
          </motion.div>
        </div>

        <div className="w-full h-px bg-white my-8" />

        {/* Referral List */}
        <div className="space-y-6">
          {referrals.map(({ id, code, link, referredCount, rewardsEarned }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              {/* Left Content */}
              <div className="flex items-start sm:items-center gap-4 flex-1">
                <ClipboardDocumentIcon className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-900">{code}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:underline text-sm break-all"
                  >
                    {link}
                  </a>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-700 text-sm sm:text-base sm:pl-6 sm:border-l border-gray-200">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-5 h-5 text-amber-600" />
                  <span>{referredCount} referred</span>
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-5 h-5 text-amber-600" />
                  <span>Rewards: {rewardsEarned}</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard(id, link)}
                    className="relative px-4 py-1.5 rounded-full bg-amber-600 hover:bg-amber-500 text-gray-900 font-bold text-sm transition duration-200 shadow-md"
                  >
                    Copy Link
                  </button>

                  <AnimatePresence>
                    {copied === id && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: -16 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-white text-amber-600 text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1"
                      >
                        <CheckCircleIcon className="w-4 h-4" />
                        <span>Copied!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileReferralLinks;
