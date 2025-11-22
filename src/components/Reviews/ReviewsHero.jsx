'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star } from 'lucide-react';

const STAR_COUNT = 5;

const ReviewsHero = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const starControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleHoverStart = async (index) => {
    if (!introComplete || index === clickedIndex) return;
    await starControls.start((i) =>
      i === index
        ? {
            scale: 1.2,
            rotate: 5,
            transition: { type: 'spring', stiffness: 500, damping: 25 },
          }
        : {}
    );
  };

  const handleHoverEnd = async (index) => {
    if (!introComplete || index === clickedIndex) return;
    await starControls.start((i) =>
      i === index
        ? {
            scale: 1,
            rotate: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }
        : {}
    );
  };

  const handleStarClick = (index) => {
    if (!introComplete) return;
    setClickedIndex(index);
  };

  return (
    <section
      aria-label="Interactive customer reviews highlight"
      className="relative w-full my-[-100px] bg-gray-900 text-white py-24 px-6 flex flex-col items-center overflow-hidden"
    >
  
      {/* Stars Section */}
      <div className="flex gap-6 mb-10 z-20">
        {Array.from({ length: STAR_COUNT }).map((_, i) => {
          const delay = i * 0.25;
          const isClicked = i === clickedIndex;

          return (
            <motion.div
              key={i}
              custom={i}
              animate={starControls}
              onHoverStart={() => handleHoverStart(i)}
              onHoverEnd={() => handleHoverEnd(i)}
              whileTap={{ scale: 0.9 }}
              drag={introComplete}
              dragElastic={0.45}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              className="cursor-pointer"
              role="img"
              aria-label={`Star ${i + 1} interactive icon`}
              onClick={() => handleStarClick(i)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.3, y: -60 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    delay,
                    duration: 1.2,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <Star
                  width={36}
                  height={36}
                  stroke="#FBBF24"
                  fill={isClicked ? '#FBBF24' : 'transparent'}
                  style={{
                    opacity: isClicked ? 1 : 0.7,
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    if (introComplete && !isClicked) e.currentTarget.style.fill = '#FBBF24';
                  }}
                  onMouseLeave={(e) => {
                    if (introComplete && !isClicked) e.currentTarget.style.fill = 'transparent';
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Heading + CTA */}
      <div className="max-w-[900px] text-center px-4 z-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight drop-shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
        >
          <span>Stories That Matter,</span>{' '}
          <span className="text-amber-400 underline decoration-amber-500 decoration-8 underline-offset-6">
            Reviews That Speak
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
        >
          Dive into real customer experiences. From first impressions to fast delivery—see why thousands
          choose us every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-semibold shadow-[0_8px_30px_rgba(255,193,7,0.3)] hover:from-amber-500 hover:to-amber-700 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-offset-2 active:scale-95"
          >
            Explore Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsHero;
