'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

const icons = {
  success: <CheckCircle className="text-black w-5 h-5" />,
  error: <XCircle className="text-black w-5 h-5" />,
  info: <Info className="text-black w-5 h-5" />,
  warning: <AlertTriangle className="text-black w-5 h-5" />,
};

const CartToastNotification = ({ type = 'success', message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[9999] max-w-xs w-full bg-white text-gray-900 px-4 py-3 rounded-lg shadow-lg flex items-start gap-3"
        >
          <div>{icons[type]}</div>
          <div className="text-sm font-medium">{message}</div>
          <button
            onClick={onClose}
            className="ml-auto text-gray-600 hover:text-gray-900 transition"
            aria-label="Close toast"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartToastNotification;
