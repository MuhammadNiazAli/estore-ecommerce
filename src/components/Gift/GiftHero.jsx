'use client';

import React, { useEffect, useState } from 'react';
import { GiftIcon, SparklesIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Helper function to format countdown timer
function formatTime(t) {
  return t < 10 ? `0${t}` : t;
}

const GiftHero = () => {
  // Countdown timer state (e.g., 4 hours from now)
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Set target time 4 hours from mount
    const target = Date.now() + 4 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((target - now) / 1000)); // seconds left
      setTimeLeft(diff);
      if (diff <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = formatTime(Math.floor(timeLeft / 3600));
  const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatTime(timeLeft % 60);

  const handleShopClick = () => {
    console.log('Shop Gift Deals clicked');
  };

  const handleExploreClick = () => {
    console.log('Explore Collections clicked');
  };

  const handlePersonalizeClick = () => {
    console.log('Personalize Your Gift clicked');
  };

  return (
    <>
      {/* Twinkle animation keyframes injected as style tag */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <section
        aria-label="Gift offers hero section"
        className="relative w-full max-w-[1200px] mx-auto mt-[-80px] mb-10 px-6 sm:px-12 py-16 rounded-lg shadow-2xl overflow-hidden bg-white"
      >
        {/* Golden animated sparkle background */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 25%, rgba(255, 223, 93, 0.9) 2px, transparent 6px),
              radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.7) 1.5px, transparent 5px),
              radial-gradient(circle at 65% 70%, rgba(255, 239, 140, 0.85) 2.2px, transparent 7px),
              radial-gradient(circle at 80% 30%, rgba(255, 223, 93, 0.6) 1.8px, transparent 6px),
              radial-gradient(circle at 30% 80%, rgba(255, 215, 0, 0.5) 1.2px, transparent 4.5px)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '120px 120px',
            filter: 'blur(1.7px) drop-shadow(0 0 4px rgba(255, 223, 93, 0.8))',
            animation: 'twinkle 6s ease-in-out infinite',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-5"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GiftIcon
              className="w-14 h-14 text-amber-950 drop-shadow-lg"
              aria-hidden="true"
            />
          </motion.div>

          {/* Heading */}
          <h1 className="text-amber-950 font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-sans drop-shadow-md">
            Spread Joy with the Perfect Gift
          </h1>

          {/* Description */}
          <p className="mt-6 text-amber-950 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto drop-shadow-sm">
            Exclusive deals, unique gifts, and bundles curated just for your special occasions.
            Find the ideal present to make every moment unforgettable.
          </p>

          {/* Countdown Timer */}
          {timeLeft > 0 && (
            <div className="mt-8 inline-flex items-center justify-center gap-3 bg-amber-300 text-amber-950 font-semibold rounded-full px-5 py-2 shadow-md select-none text-sm sm:text-base tracking-wide drop-shadow">
              <SparklesIcon className="w-5 h-5" aria-hidden="true" />
              Limited-Time Offers Ending In: <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 flex-wrap px-2">
            <button
              onClick={handleShopClick}
              type="button"
              aria-label="Shop gift deals"
              className="flex items-center gap-3 bg-amber-950 text-amber-300 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-amber-900 transition-transform transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-900 focus:ring-opacity-50 text-base sm:text-lg"
            >
              <ShoppingBagIcon className="w-6 h-6" aria-hidden="true" />
              Shop Gift Deals
            </button>

            <button
              onClick={handleExploreClick}
              type="button"
              aria-label="Explore collections"
              className="flex items-center gap-3 border-2 border-amber-950 text-amber-950 px-8 py-3 rounded-full font-semibold hover:bg-amber-950 hover:text-amber-300 transition-transform transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-950 focus:ring-opacity-50 text-base sm:text-lg"
            >
              <SparklesIcon className="w-6 h-6" aria-hidden="true" />
              Explore Collections
            </button>

            <button
              onClick={handlePersonalizeClick}
              type="button"
              aria-label="Personalize your gift"
              className="flex items-center gap-3 bg-amber-900 text-amber-300 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-amber-800 transition-transform transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-900 focus:ring-opacity-40 text-base sm:text-lg"
            >
              <GiftIcon className="w-6 h-6" aria-hidden="true" />
              Personalize Your Gift
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default GiftHero;
