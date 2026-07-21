'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi';

const HomeCall = () => {
  return (
    <section
      className="relative bg-amber-600 text-black py-16 px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 my-10"
      aria-labelledby="limited-offer-heading"
    >
   
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        className="absolute -top-4 -left-4 bg-white text-amber-800 font-bold px-4 py-2 rounded-full text-[11px] sm:text-xs shadow-lg z-20"
        role="note"
        aria-label="Limited Time Deal"
      >
        Limited Time Deal!
      </motion.div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10">
     
        <div className="flex-1 w-full max-w-xl text-center md:text-left space-y-5">
          <h2
            id="limited-offer-heading"
            className="text-[1.9rem] sm:text-[2.4rem] font-extrabold leading-tight"
          >
            <div className="relative inline-block">
              <div>Discover Your</div>
              <div className="pl-[0.1em]">Next Favorite</div>
              <div className="flex items-center">
                <span className="pl-[0.1em]">Product</span>
                <span className="ml-3 inline-block bg-white text-amber-800 text-[10px] sm:text-xs px-2 py-[5px] rounded-full font-semibold shadow-sm">
                  UP TO 50% OFF
                </span>
              </div>
            </div>
          </h2>

          <p className="text-sm sm:text-base text-black/80 leading-relaxed">
            Explore exclusive deals on top-rated tech, fashion, and lifestyle
            products. Don’t miss out—these limited-time offers are selling fast.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => alert('Redirecting to shop...')}
          className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:bg-gray-50 transition duration-200"
          aria-label="Shop Now"
        >
          <FiShoppingBag className="text-lg" aria-hidden="true" />
          Shop Now
          <FiArrowRight className="text-lg" aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  );
};

export default HomeCall;
