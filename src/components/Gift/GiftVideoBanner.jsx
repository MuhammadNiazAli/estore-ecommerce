'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GiftVideoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-label="Gift video banner showcasing celebrations and unique gifts"
      className="relative max-w-[1000px] mx-auto rounded-lg overflow-hidden shadow-2xl bg-gradient-to-tr from-black via-gray-700 to-gray-900"
    >
      {/* Background video with subtle zoom on hover */}
      <motion.video
        className="w-full h-[280px] sm:h-[380px] md:h-[450px] object-cover brightness-75"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Background video showing gift wrapping and celebrations"
        src="https://cdn.videvo.net/videvo_files/video/free/2018-03/small_watermarked/180215_04_Gift_wrap_03_preview.webm"
        type="video/webm"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 10, ease: 'easeInOut' }}
      />

      {/* Overlay with dark gray transparent background */}
      <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-center items-center px-6 sm:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md mb-2 font-sans"
        >
          Celebrate Every Moment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-black max-w-xl mb-8 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-sm"
        >
          Discover unique gifts that make your loved ones smile. Shop now and enjoy exclusive offers!
        </motion.p>
        <motion.a
          href="#shop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-block bg-black text-black font-extrabold px-8 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50 transition-transform transform hover:scale-105 focus:scale-105"
          aria-label="Shop now and discover unique gifts"
        >
          Shop Now
        </motion.a>
      </div>
    </motion.section>
  );
}
