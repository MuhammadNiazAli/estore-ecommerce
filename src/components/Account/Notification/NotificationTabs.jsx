'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabsData = [
  { id: 'all', label: 'All Notifications' },
  { id: 'unread', label: 'Unread' },
  { id: 'system', label: 'System Alerts' },
];

const NotificationTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-8">
      {/* Tab Headers */}
      <div className="flex items-center justify-center sm:justify-start gap-4 border-b border-gray-200 pb-2 relative">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-3 py-1.5 text-sm sm:text-base font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? 'text-amber-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="tab-underline"
                className="absolute left-0 bottom-0 h-0.5 w-full bg-amber-600 rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content Placeholder */}
      <div className="mt-6 text-sm text-gray-700">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            Currently viewing:{' '}
            <span className="text-amber-600 font-medium">
              {tabsData.find((t) => t.id === activeTab)?.label}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationTabs;
