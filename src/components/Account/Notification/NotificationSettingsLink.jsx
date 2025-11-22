'use client';

import React from 'react';
import { FiSettings } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotificationSettingsLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-full max-w-md mx-auto mt-8 px-4 text-center"
    >
      <Link
        href="/account/settings/notifications"
        aria-label="Manage notification settings"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 text-white text-sm font-medium rounded-full shadow-sm hover:bg-gray-700 hover:text-yellow-400 hover:shadow-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300 active:scale-95"
      >
        <FiSettings className="text-yellow-400 text-base" />
        <span>Manage Notification Settings</span>
      </Link>
    </motion.div>
  );
};

export default NotificationSettingsLink;
