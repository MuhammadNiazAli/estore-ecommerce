'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiX } from 'react-icons/fi';

const ShopFlashDealStrip = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-red-800 via-yellow-500 to-red-800 text-white py-4 px-6 shadow-lg relative overflow-hidden z-10">
      <div className="max-w-[1300px] mx-auto flex items-center gap-4">
        <FiZap className="text-yellow-300 animate-pulse shrink-0 drop-shadow" size={24} />

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="whitespace-nowrap text-[15px] sm:text-[17px] font-bold tracking-wide flex items-center gap-3"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            <FiZap className="text-yellow-300 shrink-0" />
            <span className="drop-shadow-sm">
               FLASH SALE: Save up to <span className="underline underline-offset-4 text-white">70% Off</span> across all categories – Electronics, Fashion, Home & More!
              Hurry, deals end soon 
            </span>
            <FiZap className="text-yellow-300 shrink-0" />
          </motion.div>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-white hover:text-yellow-200 transition hidden sm:block"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>
      </div>
    </div>
  );
};

export default ShopFlashDealStrip;
