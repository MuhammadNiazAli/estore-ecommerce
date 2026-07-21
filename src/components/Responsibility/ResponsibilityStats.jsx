'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Data for stats
const statsData = [
  { id: 1, label: 'Tons of CO₂ Reduced', value: 12500 },
  { id: 2, label: 'Communities Supported', value: 85 },
  { id: 3, label: 'Sustainable Products Sold', value: 43000 },
  { id: 4, label: 'Global Partnerships', value: 22 },
];

// Hook to detect if element is in viewport
const useInViewport = (ref, options = {}) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inViewport;
};

// Count-up hook with requestAnimationFrame for smooth animation
const useCountUp = (end, duration = 2000, startOn = true) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startOn) {
      setCount(0);
      return;
    }

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * end));

      if (progress < duration) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure final value is exact
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [end, duration, startOn]);

  return count;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ResponsibilityStats = () => {
  const containerRef = useRef(null);
  const inViewport = useInViewport(containerRef, { threshold: 0.3 });

  return (
    <section
      className="w-full bg-white flex justify-center px-4 py-16 sm:py-20"
      aria-labelledby="stats-heading"
      role="region"
    >
      <div className="max-w-[1000px] w-full" ref={containerRef}>
        <motion.h2
          id="stats-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inViewport ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-amber-600 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 select-none max-w-full"
        >
          Our Impact in Numbers
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inViewport ? 'visible' : 'hidden'}
        >
          {statsData.map(({ id, label, value }) => {
            const count = useCountUp(value, 2000, inViewport);

            return (
              <motion.article
                key={id}
                variants={cardVariants}
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 sm:p-8 text-center cursor-default
                  focus:outline-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2
                  transition-shadow duration-300 hover:shadow-amber-700/40 hover:scale-[1.04] focus:shadow-amber-700/60"
                tabIndex={0}
                aria-label={`${label}: ${count.toLocaleString()}`}
              >
                <p
                  className="text-amber-600 text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tabular-nums select-text"
                  aria-live="polite"
                >
                  {count.toLocaleString()}
                </p>
                <p className="text-gray-700 text-base sm:text-lg font-semibold select-none">{label}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibilityStats;
