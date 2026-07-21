'use client';

import React from 'react';

const CartRewardPoints = ({
  currentPoints = 150,
  pointsEarned = 20,
  nextRewardThreshold = 300,
}) => {
  const totalPoints = currentPoints + pointsEarned;
  const progressPercent = Math.min((totalPoints / nextRewardThreshold) * 100, 100);
  const pointsLeft = Math.max(nextRewardThreshold - totalPoints, 0);

  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 py-8 text-gray-900">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-black text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
          Your Reward Points
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-gray-700 text-sm sm:text-base">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-600">Current Points</span>
            <span className="text-gray-900 font-semibold text-lg sm:text-xl">{currentPoints}</span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-600">Points Earned This Purchase</span>
            <span className="text-gray-900 font-semibold text-lg sm:text-xl">{pointsEarned}</span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-600">Points Needed for Next Reward</span>
            <span className="text-gray-900 font-semibold text-lg sm:text-xl">{pointsLeft}</span>
          </div>
        </div>

        {/* Thinner Progress Bar */}
        <div
          className="w-full h-2 bg-white rounded-full overflow-hidden shadow-inner"
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reward points progress"
        >
          <div
            className="h-full bg-black transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Optional message below progress bar */}
        <p className="mt-3 text-center sm:text-left text-black font-medium select-none">
          {pointsLeft === 0
            ? '🎉 Congratulations! You have reached your next reward!'
            : `${pointsLeft} point${pointsLeft !== 1 ? 's' : ''} left to unlock your next reward.`}
        </p>
      </div>
    </section>
  );
};

export default CartRewardPoints;
