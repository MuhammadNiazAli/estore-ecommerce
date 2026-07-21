'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiShoppingBag, FiTag } from 'react-icons/fi';

const ShopHero = () => {
  const controls = useAnimation();
  const dragRef = useRef(null);

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    });
  }, [controls]);

  const handleDragEnd = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        bounce: 0.4,
      },
    });
  };

  return (
    <section
      role="region"
      aria-label="Shop hero section"
      className="relative bg-white px-6 sm:px-12 py-24 sm:py-40 flex flex-col items-center overflow-hidden select-none my-[-110px] mb-0"
    >
  
      {/* Content container */}
      <div className="relative max-w-[1100px] w-full text-center z-10 px-4  sm:px-8">
        {/* Draggable icon */}
        <motion.div
          ref={dragRef}
          drag
          dragElastic={0.25}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          animate={controls}
          initial={{ opacity: 0, scale: 0.75 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center mb-12 cursor-grab active:cursor-grabbing text-black drop-shadow-[0_0_25px_rgba(59,130,246,0.85)]"
          aria-label="Draggable shopping bag icon"
          role="img"
        >
          <FiShoppingBag className="w-24 h-24 sm:w-28 sm:h-28" aria-hidden="true" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 drop-shadow-lg"
        >
          Discover Our{' '}
          <span className="text-black underline decoration-black decoration-6 underline-offset-4">
            Exclusive
          </span>{' '}
          Shop Collection
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.3, ease: 'easeOut' }}
          className="mt-7 max-w-3xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md"
        >
          Explore thousands of premium, handpicked products — from trending fashion and cutting-edge
          tech to exclusive deals that elevate your lifestyle.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-16 flex justify-center gap-6 flex-wrap"
        >
          <button
            type="button"
            className="flex items-center gap-3 px-14 py-4 rounded-full bg-gradient-to-r from-black to-gray-900 text-gray-900 font-semibold shadow-lg hover:from-black hover:to-gray-900 focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2 transition-transform active:scale-95"
            aria-label="Start shopping now"
          >
            <FiShoppingBag className="w-5 h-5" aria-hidden="true" />
            Start Shopping
          </button>
          <button
            type="button"
            className="flex items-center gap-3 px-14 py-4 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2 transition"
            aria-label="Browse deals"
          >
            <FiTag className="w-5 h-5" aria-hidden="true" />
            Browse Deals
          </button>
          <button
            type="button"
            className="px-14 py-4 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-500 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-offset-2 transition"
            aria-label="Learn more about our collection"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Blob animation keyframes */}
      <style jsx>{`
        @keyframes blobAnimation {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -10px) scale(1.04);
          }
          66% {
            transform: translate(-12px, 12px) scale(0.96);
          }
        }
        .animate-blobAnimation {
          animation: blobAnimation 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ShopHero;
