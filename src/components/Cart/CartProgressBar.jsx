'use client';

import React, { useEffect, useState } from 'react';

const CartProgressBar = ({ currentAmount = 120, goalAmount = 200 }) => {
  const [progressPercent, setProgressPercent] = useState(0);
  const amountLeft = Math.max(goalAmount - currentAmount, 0);

  useEffect(() => {
    // Animate progress smoothly on currentAmount change
    const clampedPercent = Math.min((currentAmount / goalAmount) * 100, 100);
    let start = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 600, 1); // 600ms animation duration
      setProgressPercent(progress * clampedPercent);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [currentAmount, goalAmount]);

  return (
    <section className="w-full bg-white px-4 py-4 sm:px-6 md:py-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
          <p className="text-xs sm:text-sm text-center sm:text-left text-gray-900 font-medium tracking-tight select-text">
            {amountLeft > 0 ? (
              <>
                Spend{' '}
                <span className="font-semibold text-amber-600">
                  ${amountLeft.toFixed(2)}
                </span>{' '}
                more to get free shipping!
              </>
            ) : (
              <span className="flex items-center justify-center sm:justify-start gap-1 text-amber-600 font-semibold select-text">
                🎉 You’ve qualified for free shipping!
              </span>
            )}
          </p>
          <span className="text-[10px] sm:text-xs text-gray-600 text-center sm:text-right select-text tabular-nums">
            ${currentAmount.toFixed(2)} / ${goalAmount.toFixed(2)}
          </span>
        </div>

        <div
          className="relative w-full h-2 sm:h-3 bg-white/90 rounded-full overflow-hidden shadow-inner"
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progress towards free shipping"
        >
          <div
            className="absolute top-0 left-0 h-full bg-amber-600 rounded-full transition-width duration-500 ease-in-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default CartProgressBar;
