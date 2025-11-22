'use client';

import React from 'react';
import { BellIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const notifications = [
  {
    id: 1,
    type: 'success',
    message: 'Your password was changed successfully.',
    time: 'Just now',
  },
  {
    id: 2,
    type: 'info',
    message: 'New login from Chrome on Windows 10 detected.',
    time: '2 hours ago',
  },
  {
    id: 3,
    type: 'error',
    message: 'Failed to process your payment for order #1234.',
    time: '1 day ago',
  },
];

const iconByType = {
  success: <CheckCircleIcon className="w-6 h-6 text-green-400" />,
  info: <BellIcon className="w-6 h-6 text-yellow-400" />,
  error: <XCircleIcon className="w-6 h-6 text-red-500" />,
};

const ProfileNotifications = () => {
  return (
    <section className="w-full bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-12  my-[-70px] mb-0">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
              Notifications
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-md">
              Stay updated with the latest alerts and messages about your account.
            </p>
          </div>
          <div className="flex items-center gap-2 text-yellow-300 font-medium text-sm sm:text-base">
            <BellIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span>Recent Alerts</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-6" />

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.map(({ id, type, message, time }) => (
            <div
              key={id}
              className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 shadow-md"
              role="alert"
            >
              <div>{iconByType[type]}</div>
              <div className="flex-1">
                <p className="text-white font-medium">{message}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Clear notifications button */}
        <div className="mt-8 flex justify-center sm:justify-end">
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold shadow-lg transition text-sm sm:text-base"
            aria-label="Clear all notifications"
          >
            Clear All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileNotifications;
