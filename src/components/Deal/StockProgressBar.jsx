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
    if (percentSold >= 90) return 'bg-gradient-to-r from-red-600 to-red-400';
    if (percentSold >= 60) return 'bg-gradient-to-r from-yellow-500 to-yellow-300';
    return 'bg-gradient-to-r from-green-500 to-green-300';
  };

  return (
    <div className="w-full text-xs text-gray-200">
    
      <div className="flex justify-between items-center mb-1">
        <span className="text-[13px] font-medium text-white">{label}</span>
        <span className="text-[13px] font-medium text-gray-400">{percentSold}% Sold</span>
      </div>

     
      <div className={`w-full bg-gray-700/60 ${height} ${rounded} overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentSold}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`${getBarGradient()} ${height} ${rounded}`}
        />
      </div>

    
      <div className="flex justify-between items-center mt-1 text-[12px] text-gray-400">
        <span>{percentLeft} items left</span>
        <span>{sold} sold</span>
      </div>
    </div>
  );
};

export default StockProgressBar;
