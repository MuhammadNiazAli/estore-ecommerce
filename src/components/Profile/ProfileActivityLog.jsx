'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  ClockIcon,
  DocumentTextIcon,
  UserIcon,
  ShoppingCartIcon,
  MapPinIcon,
  KeyIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const allActivities = [
  {
    id: 1,
    type: 'Password Change',
    icon: KeyIcon,
    description: 'Password changed successfully',
    timestamp: new Date('2025-07-17T01:22:00'),
  },
  {
    id: 2,
    type: 'Address Update',
    icon: MapPinIcon,
    description: 'Added new shipping address',
    timestamp: new Date('2025-07-16T16:08:00'),
  },
  {
    id: 3,
    type: 'Order',
    icon: ShoppingCartIcon,
    description: 'Placed an order for 2 items',
    timestamp: new Date('2025-07-15T11:45:00'),
  },
  {
    id: 4,
    type: 'Profile Update',
    icon: UserIcon,
    description: 'Updated profile information',
    timestamp: new Date('2025-07-14T09:30:00'),
  },
  {
    id: 5,
    type: 'Login',
    icon: ClockIcon,
    description: 'Successful login from new device',
    timestamp: new Date('2025-07-13T22:15:00'),
  },
  {
    id: 6,
    type: 'Password Change',
    icon: KeyIcon,
    description: 'Password reset requested',
    timestamp: new Date('2025-07-10T14:12:00'),
  },
  {
    id: 7,
    type: 'Order',
    icon: ShoppingCartIcon,
    description: 'Order #12345 shipped',
    timestamp: new Date('2025-07-09T08:55:00'),
  },
  {
    id: 8,
    type: 'Login',
    icon: ClockIcon,
    description: 'Logged out from all devices',
    timestamp: new Date('2025-07-08T20:45:00'),
  },
  {
    id: 9,
    type: 'Address Update',
    icon: MapPinIcon,
    description: 'Removed old billing address',
    timestamp: new Date('2025-07-07T17:22:00'),
  },
  {
    id: 10,
    type: 'Profile Update',
    icon: UserIcon,
    description: 'Changed profile picture',
    timestamp: new Date('2025-07-06T12:40:00'),
  },
];

const activityTypes = ['All', 'Login', 'Order', 'Password Change', 'Address Update', 'Profile Update'];

const ITEMS_PER_PAGE = 5;

function formatDateTime(date) {
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

const ProfileActivityLog = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setLastUpdated(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredActivities = useMemo(() => {
    return allActivities
      .filter((activity) => (filter === 'All' ? true : activity.type === filter))
      .filter((activity) => {
        const searchText = searchTerm.toLowerCase();
        return (
          activity.description.toLowerCase().includes(searchText) ||
          activity.type.toLowerCase().includes(searchText)
        );
      });
  }, [filter, searchTerm]);

  const paginatedActivities = filteredActivities.slice(0, page * ITEMS_PER_PAGE);
  const canLoadMore = paginatedActivities.length < filteredActivities.length;

  return (
    <section
      className="w-full max-w-[1200px] mx-auto bg-gray-900 text-white rounded-lg px-4 py-8 sm:px-8 sm:py-12 md:px-10 md:py-14"
      aria-label="User activity log section"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="max-w-full sm:max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 drop-shadow-lg leading-tight">
            Activity Log
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md">
            Review your recent account activities, actions, and changes.
          </p>
        </div>
        <div
          className="flex items-center gap-2 sm:gap-3 text-yellow-300 font-semibold text-xs sm:text-sm md:text-base select-none whitespace-nowrap"
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="text"
        >
          <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 animate-spin-slow text-yellow-400 drop-shadow-md" />
          Last updated: {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {activityTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                setPage(1);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition ${
                filter === type
                  ? 'bg-yellow-400 text-gray-900 shadow-lg'
                  : 'bg-yellow-400/30 text-yellow-300 hover:bg-yellow-400/60'
              } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              aria-pressed={filter === type}
              aria-label={`Filter activity log by ${type}`}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="search"
          placeholder="Search activity..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="w-full sm:w-64 md:w-72 px-4 py-2 rounded-full bg-gray-800 border border-yellow-400/50 placeholder-yellow-400 text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-sm sm:text-base"
          aria-label="Search activity log"
        />
      </div>

      {/* Divider */}
      <div className="w-full h-[1.5px] bg-yellow-400/30 rounded-full mb-8 shadow-sm" />

      {/* Activity Items List */}
      <ul
        role="list"
        className="space-y-5 pr-2"
        aria-live="polite"
        aria-relevant="additions"
      >
        <AnimatePresence initial={false}>
          {paginatedActivities.length === 0 && (
            <motion.li
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-yellow-400 text-center font-semibold py-10"
            >
              No activities match your filter or search.
            </motion.li>
          )}

          {paginatedActivities.map(({ id, type, icon: Icon, description, timestamp }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              tabIndex={0}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-inner border border-yellow-400/20 focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-default"
              aria-label={`${type} activity: ${description} on ${formatDateTime(timestamp)}`}
            >
              <Icon
                className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5 sm:mt-0"
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm sm:text-base md:text-lg">{description}</p>
                <time
                  className="text-gray-400 text-xs sm:text-sm"
                  dateTime={timestamp.toISOString()}
                >
                  {formatDateTime(timestamp)} ({timeAgo(timestamp)})
                </time>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Load More */}
      {canLoadMore && (
        <div className="mt-6 flex justify-center sm:justify-end">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-yellow-500"
            aria-label="Load more activity log items"
            type="button"
          >
            <ArrowPathIcon className="w-5 h-5 animate-spin-slow" />
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfileActivityLog;
