'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Clock, CheckCircle, XCircle, Activity } from 'lucide-react';



const allActivities = [
  { id: 1, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #45312 has been completed.', time: 'Just now' },
  { id: 2, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #45291 failed.', time: '12 mins ago' },
  { id: 3, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.3', time: '30 mins ago' },
  { id: 4, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #45255 shipped via FedEx.', time: '1 hour ago' },
  { id: 5, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #45200 has been completed.', time: '2 hours ago' },
  { id: 6, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #45100 failed.', time: '3 hours ago' },
  { id: 7, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.10', time: '5 hours ago' },
  { id: 8, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #45000 shipped via DHL.', time: '1 day ago' },
  { id: 9, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44950 has been completed.', time: '2 days ago' },
  { id: 10, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #44900 failed.', time: '3 days ago' },

  { id: 11, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44800 has been completed.', time: '3 days ago' },
  { id: 12, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.15', time: '4 days ago' },
  { id: 13, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #44700 shipped via UPS.', time: '5 days ago' },
  { id: 14, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #44650 failed.', time: '5 days ago' },
  { id: 15, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44600 has been completed.', time: '6 days ago' },
  { id: 16, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.20', time: '6 days ago' },
  { id: 17, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #44550 shipped via FedEx.', time: '1 week ago' },
  { id: 18, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #44500 failed.', time: '1 week ago' },
  { id: 19, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44450 has been completed.', time: '1 week ago' },
  { id: 20, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.25', time: '1 week ago' },

  { id: 21, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44400 has been completed.', time: '1 week ago' },
  { id: 22, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #44350 failed.', time: '1 week ago' },
  { id: 23, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.30', time: '2 weeks ago' },
  { id: 24, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #44300 shipped via DHL.', time: '2 weeks ago' },
  { id: 25, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44250 has been completed.', time: '2 weeks ago' },
  { id: 26, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #44200 failed.', time: '2 weeks ago' },
  { id: 27, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.35', time: '2 weeks ago' },
  { id: 28, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #44150 shipped via UPS.', time: '2 weeks ago' },
  { id: 29, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #44100 has been completed.', time: '3 weeks ago' },
  { id: 30, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.40', time: '3 weeks ago' },

  { id: 31, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #44050 failed.', time: '3 weeks ago' },
  { id: 32, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #44000 shipped via FedEx.', time: '3 weeks ago' },
  { id: 33, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #43950 has been completed.', time: '3 weeks ago' },
  { id: 34, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.45', time: '3 weeks ago' },
  { id: 35, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #43900 failed.', time: '4 weeks ago' },
  { id: 36, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #43850 shipped via DHL.', time: '4 weeks ago' },
  { id: 37, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #43800 has been completed.', time: '4 weeks ago' },
  { id: 38, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.50', time: '4 weeks ago' },
  { id: 39, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #43750 failed.', time: '4 weeks ago' },
  { id: 40, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #43700 shipped via UPS.', time: '1 month ago' },

  { id: 41, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #43650 has been completed.', time: '1 month ago' },
  { id: 42, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.55', time: '1 month ago' },
  { id: 43, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #43600 failed.', time: '1 month ago' },
  { id: 44, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #43550 shipped via FedEx.', time: '1 month ago' },
  { id: 45, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #43500 has been completed.', time: '1 month ago' },
  { id: 46, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.60', time: '1 month ago' },
  { id: 47, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #43450 failed.', time: '1 month ago' },
  { id: 48, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #43400 shipped via DHL.', time: '1 month ago' },
  { id: 49, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #43350 has been completed.', time: '1 month ago' },
  { id: 50, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.65', time: '1 month ago' },

  { id: 51, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #43300 failed.', time: '1 month ago' },
  { id: 52, type: 'Order Shipped', icon: CheckCircle, iconColor: 'text-blue-400', message: 'Order #43250 shipped via UPS.', time: '1 month ago' },
  { id: 53, type: 'Order Completed', icon: CheckCircle, iconColor: 'text-green-400', message: 'Order #43200 has been completed.', time: '1 month ago' },
  { id: 54, type: 'User Login', icon: Activity, iconColor: 'text-yellow-400', message: 'New login from IP 192.168.0.70', time: '1 month ago' },
  { id: 55, type: 'Payment Failed', icon: XCircle, iconColor: 'text-red-400', message: 'Payment for order #43150 failed.', time: '1 month ago' },
];

const PAGE_SIZE = 4;

const DashboardActivity = () => {
  // States
  const [activities, setActivities] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [readItems, setReadItems] = useState(new Set());

  // Simulate API fetch with delay, error possibility
  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchTimeout = setTimeout(() => {
      // 10% chance to error for demonstration
      if (Math.random() < 0.1) {
        setError('Failed to fetch activities. Please try again.');
        setLoading(false);
        return;
      }

      // On success: reset page and load first page of filtered activities
      setPage(1);
      setLoading(false);
      setActivities(allActivities); // This would be filtered by filter/search below
    }, 1000);

    return () => clearTimeout(fetchTimeout);
  }, []);

  // Filter and search applied on full data (allActivities)
  const filteredActivities = useMemo(() => {
    let filtered = allActivities;

    if (filterType !== 'All') {
      filtered = filtered.filter((a) => a.type === filterType);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((a) =>
        a.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [filterType, searchTerm]);

  // Pagination: slice activities by page
  const paginatedActivities = filteredActivities.slice(0, page * PAGE_SIZE);

  // Mark as read/unread toggler
  const toggleRead = (id) => {
    setReadItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  // When filterType or searchTerm changes, reset page to 1
  useEffect(() => {
    setPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filterType, searchTerm]);

  return (
    <section className="w-full bg-gray-900 flex justify-center px-4 py-10 min-h-[500px]">
      <div className="w-full max-w-[1000px]">
        {/* Header */}
        <header className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">Recent Activity</h2>
          <p className="text-sm text-gray-400 mt-1">
            Stay updated with the latest system and user events.
          </p>
        </header>

        {/* Controls: Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
          <select
            aria-label="Filter activities by type"
            className="px-3 py-1 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Order Completed">Order Completed</option>
            <option value="Payment Failed">Payment Failed</option>
            <option value="User Login">User Login</option>
            <option value="Order Shipped">Order Shipped</option>
          </select>

          <input
            type="search"
            aria-label="Search activities"
            placeholder="Search activity messages..."
            className="flex-1 px-3 py-1 rounded bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Activity List Container */}
        <div
          className="
            bg-gray-800 rounded-xl shadow
            p-4
            max-h-[320px] sm:max-h-[400px] md:max-h-[500px]
            overflow-y-auto
            scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-700
            space-y-4
          "
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#FBBF24 #374151' }}
        >
          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-10 text-yellow-400 font-semibold">
              Loading activities...
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-700 text-red-100 p-4 rounded text-center font-semibold">
              {error}
            </div>
          )}

          {/* No Results */}
          {!loading && !error && paginatedActivities.length === 0 && (
            <div className="text-gray-400 text-center py-6 select-none">
              No activities found matching your criteria.
            </div>
          )}

          {/* Activity Items */}
          {!loading &&
            !error &&
            paginatedActivities.map((activity) => {
              const Icon = activity.icon;
              const isRead = readItems.has(activity.id);

              return (
                <article
                  key={activity.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleRead(activity.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleRead(activity.id);
                    }
                  }}
                  className={`
                    flex items-start gap-3 p-3
                    rounded-lg
                    cursor-pointer
                    select-none
                    transition
                    ${isRead ? 'bg-gray-700' : 'bg-gray-900 hover:bg-gray-800'}
                    focus:outline-none focus:ring-2 focus:ring-yellow-400
                  `}
                  aria-pressed={isRead}
                  aria-label={`${activity.type} - ${activity.message} - ${isRead ? 'Read' : 'Unread'}. Click to mark as ${isRead ? 'unread' : 'read'}.`}
                >
                  <div className={`${activity.iconColor} w-5 h-5 flex-shrink-0 mt-1`}>
                    <Icon />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm truncate ${isRead ? 'text-gray-300 line-through' : 'text-white'}`}>
                      {activity.message}
                    </p>

                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400 select-text">
                      <Clock className="w-3 h-3" />
                      <time dateTime={new Date().toISOString()}>{activity.time}</time>
                    </div>
                  </div>

                  {/* Read/Unread badge */}
                  <div
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      isRead ? 'bg-gray-600 text-gray-300' : 'bg-yellow-500 text-yellow-900'
                    } select-none`}
                  >
                    {isRead ? 'Read' : 'New'}
                  </div>
                </article>
              );
            })}
        </div>

        {/* Load More Button */}
        {!loading && !error && paginatedActivities.length < filteredActivities.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="
                px-5 py-2
                bg-yellow-400 text-gray-900 font-semibold
                rounded-lg shadow-md
                hover:bg-yellow-500
                transition
                focus:outline-none focus:ring-2 focus:ring-yellow-400
                disabled:opacity-50 disabled:cursor-not-allowed
              "
              aria-label="Load more activities"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardActivity;
