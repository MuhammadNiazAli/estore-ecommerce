'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StockProgressBar = ({
  sold = 78,
  total = 100,
  label = 'Limited Stock',
  height = 'h-3',
  rounded = 'rounded-full',
}) => {
  const percentSold = Math.min(100, Math.round((sold / total) * 100));
  const percentLeft = total - sold;

 
  const getBarGradient = () => {
    if (percentSold >= 90) return 'bg-gradient-to-r from-black to-gray-900';
    if (percentSold >= 60) return 'bg-gradient-to-r from-black to-gray-900';
    return 'bg-gradient-to-r from-black to-gray-900';
  };

  return (
    <div className="w-full text-xs text-gray-700">
    
      <div className="flex justify-between items-center mb-1">
        <span className="text-[13px] font-medium text-gray-900">{label}</span>
        <span className="text-[13px] font-medium text-gray-600">{percentSold}% Sold</span>
      </div>

     
      <div className={`w-full bg-white/60 ${height} ${rounded} overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentSold}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`${getBarGradient()} ${height} ${rounded}`}
        />
      </div>

    
      <div className="flex justify-between items-center mt-1 text-[12px] text-gray-600">
        <span>{percentLeft} items left</span>
        <span>{sold} sold</span>
      </div>
    </div>
  );
};

export default StockProgressBar;
