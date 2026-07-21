'use client';

import React, { useState, useEffect } from 'react';
import { FiBox, FiShoppingCart, FiUsers, FiPercent } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';

const stats = [
  { label: 'Products', value: 1480, icon: FiBox },
  { label: 'Orders Today', value: 329, icon: FiShoppingCart },
  { label: 'Happy Users', value: 8721, icon: FiUsers },
  { label: 'Active Deals', value: 42, icon: FiPercent },
];


function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    let frameId;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(easeOutCubic(progressRatio) * target));

      if (progress < duration) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return count;
}

const AnimatedNumber = ({ value }) => {
  const count = useCountUp(value);


  const formatted = count.toLocaleString();

  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-live="polite"
    >
      {formatted}
    </motion.span>
  );
};

const ShopTopBarStats = () => {
  return (
    <section
      aria-label="Shop statistics"
      className="w-full bg-gradient-to-r from-white via-white to-white text-gray-900 py-12 px-6 select-none shadow-lg"
    >
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map(({ label, value, icon: Icon }, i) => {
          const controls = useAnimation();

         
          React.useEffect(() => {
            controls.start({
              rotate: [0, 15, -15, 0],
              transition: {
                delay: i * 0.3 + 0.6,
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
            });
          }, [controls, i]);

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.25, duration: 0.7, ease: 'easeOut' }}
              whileHover={{ scale: 1.1, color: '#b45309', cursor: 'default' }}
              className="flex flex-col items-center justify-center gap-4"
              role="region"
              aria-label={`${value.toLocaleString()} ${label}`}
              tabIndex={0}
            >
              <motion.div
                animate={controls}
                className="text-amber-400"
                aria-hidden="true"
              >
                <Icon size={48} />
              </motion.div>
              <div className="text-5xl font-extrabold tracking-tight leading-none">
                <AnimatedNumber value={value} />
              </div>
              <div className="text-lg font-semibold uppercase tracking-widest text-gray-700">
                {label}
              </div>
              <motion.div
                className="mt-1 h-1 w-12 rounded-full bg-amber-400 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.25 + 0.5, duration: 0.6, ease: 'easeOut' }}
                aria-hidden="true"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopTopBarStats;
