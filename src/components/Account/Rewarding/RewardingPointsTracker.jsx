'use client';

import React from 'react';
import { FaStar, FaArrowUp } from 'react-icons/fa';

const currentPoints = 850;
const nextTier = 1000;
const progressPercent = Math.min((currentPoints / nextTier) * 100, 100).toFixed(1);

export default function RewardingPointsTracker() {
  return (
    <section
      className="w-full bg-gray-900 text-white p-6 sm:p-10 rounded-2xl shadow-xl"
      aria-label="Points progress tracker"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Points summary with icon */}
        <div className="flex items-center gap-4">
          <div
            className="bg-gray-800 border-4 border-yellow-400 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg"
            aria-hidden="true"
          >
            <FaStar className="text-yellow-400 text-3xl" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Your Points</p>
            <h2 className="text-2xl font-bold text-yellow-300">{currentPoints} pts</h2>
            <p className="text-xs text-gray-500">Next reward unlocks at {nextTier} pts</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex-1 w-full max-w-md" role="progressbar" aria-valuenow={currentPoints} aria-valuemin={0} aria-valuemax={nextTier} aria-label="Points progress">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">Progress</span>
            <span className="text-xs text-yellow-400 font-semibold">{progressPercent}%</span>
          </div>

          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden" aria-hidden="true">
            <div
              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center text-xs text-gray-400 mt-2 gap-1">
            <FaArrowUp className="text-yellow-300" aria-hidden="true" />
            <span>You're {nextTier - currentPoints} points away from your next tier!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
