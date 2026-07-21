'use client';

import React from 'react';
import { FaBell, FaCheckCircle, FaShippingFast } from 'react-icons/fa';
import { FiXCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const notifications = [
  {
    id: 1,
    title: 'Order Shipped',
    message: 'Your order #11243 has been shipped!',
    icon: <FaShippingFast className="text-black text-lg" />,
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Profile Updated',
    message: 'You successfully updated your profile details.',
    icon: <FaCheckCircle className="text-black text-lg" />,
    time: 'Yesterday',
  },
  {
    id: 3,
    title: 'Password Attempt Blocked',
    message: 'We blocked a suspicious login attempt.',
    icon: <FiXCircle className="text-black text-lg" />,
    time: '3 days ago',
  },
];

const NotificationList = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Recent notifications"
      className="w-full max-w-2xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
        <FaBell className="text-black" aria-hidden="true" />
        Recent Notifications
      </h2>

      <ul className="space-y-4">
        {notifications.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:bg-white/50 active:scale-[0.98] transition-all duration-200"
            role="listitem"
          >
            <div className="flex-shrink-0">{item.icon}</div>

            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {item.message}
              </p>
              <span className="text-gray-500 text-[11px] sm:text-xs mt-1 block">
                {item.time}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default NotificationList;
