'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Bell, Info, CheckCircle, XCircle, Clock, Loader2, X } from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    type: 'info',
    icon: <Info className="text-blue-400 w-5 h-5" aria-hidden="true" />,
    message: 'New product review added by Sarah.',
    time: '2 mins ago',
  },
  {
    id: 2,
    type: 'success',
    icon: <CheckCircle className="text-green-400 w-5 h-5" aria-hidden="true" />,
    message: 'Order #45321 was delivered successfully.',
    time: '10 mins ago',
  },
  {
    id: 3,
    type: 'error',
    icon: <XCircle className="text-red-400 w-5 h-5" aria-hidden="true" />,
    message: 'Failed to sync inventory with supplier.',
    time: '30 mins ago',
  },
  {
    id: 4,
    type: 'info',
    icon: <Info className="text-amber-600 w-5 h-5" aria-hidden="true" />,
    message: 'Your payout has been processed.',
    time: '1 hour ago',
  },
];

// Simulated "more" notifications to load in batches
const moreNotificationsBatch = [
  {
    id: 5,
    type: 'success',
    icon: <CheckCircle className="text-green-400 w-5 h-5" aria-hidden="true" />,
    message: 'New user registration: Michael.',
    time: '2 hours ago',
  },
  {
    id: 6,
    type: 'info',
    icon: <Info className="text-blue-400 w-5 h-5" aria-hidden="true" />,
    message: 'Inventory updated for SKU #12345.',
    time: '3 hours ago',
  },
  {
    id: 7,
    type: 'error',
    icon: <XCircle className="text-red-400 w-5 h-5" aria-hidden="true" />,
    message: 'Payment failed for order #45325.',
    time: '5 hours ago',
  },
  {
    id: 8,
    type: 'info',
    icon: <Info className="text-amber-600 w-5 h-5" aria-hidden="true" />,
    message: 'Your weekly report is ready.',
    time: '1 day ago',
  },
];

const DashboardNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [displayCount, setDisplayCount] = useState(4); // show 4 initially
  const [loadingMore, setLoadingMore] = useState(false);
  const [newNotification, setNewNotification] = useState(null);
  const [showNewNotificationBanner, setShowNewNotificationBanner] = useState(false);

  const containerRef = useRef(null);

  // Load more notifications (simulate API call)
  const loadMoreNotifications = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setNotifications((prev) => [...prev, ...moreNotificationsBatch]);
      setDisplayCount((prev) => prev + moreNotificationsBatch.length);
      setLoadingMore(false);
    }, 1500);
  };

  // Simulate real-time new notification after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotif = {
        id: Date.now(),
        type: 'info',
        icon: <Info className="text-blue-400 w-5 h-5" aria-hidden="true" />,
        message: 'New order placed: #45326.',
        time: 'Just now',
      };
      setNewNotification(newNotif);
      setShowNewNotificationBanner(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Dismiss notification by id with animation
  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // On click "Show new notification" banner, add it on top
  const addNewNotification = () => {
    if (newNotification) {
      setNotifications((prev) => [newNotification, ...prev]);
      setDisplayCount((prev) => prev + 1);
      setNewNotification(null);
      setShowNewNotificationBanner(false);
      // Scroll to top
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Simulated View All click handler
  const handleViewAll = () => {
    alert('Navigate to full notifications page (simulate)');
  };

  return (
    <section className="w-full bg-white flex justify-center px-4 py-10 min-h-[400px]">
      <div className="w-full max-w-[1000px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <h2 className="text-2xl font-bold text-amber-600 select-none">Notifications</h2>
          <button
            onClick={handleViewAll}
            className="flex items-center gap-2 text-sm text-amber-600 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
            aria-label="View all notifications"
          >
            <Bell className="w-5 h-5" />
            View All
          </button>
        </div>

        {/* New notification banner */}
        {showNewNotificationBanner && (
          <div
            className="mb-4 cursor-pointer bg-amber-800 text-black px-4 py-2 rounded-md font-semibold select-none flex items-center justify-between shadow-lg hover:bg-amber-700 transition"
            role="alert"
            aria-live="polite"
            onClick={addNewNotification}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                addNewNotification();
                e.preventDefault();
              }
            }}
          >
            <span>New notification available — click to view</span>
            <Bell className="w-5 h-5" aria-hidden="true" />
          </div>
        )}

        {/* Notifications list container */}
        <div
          ref={containerRef}
          className="bg-white rounded-xl shadow p-4 max-h-[400px] sm:max-h-[350px] overflow-y-auto space-y-4 no-scrollbar"
          role="list"
          aria-label="Notifications list"
        >
          {notifications.length === 0 && (
            <p className="text-gray-600 text-center py-8 select-none">No notifications to show.</p>
          )}

          {notifications.slice(0, displayCount).map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="flex items-start gap-3 bg-white p-3 rounded-lg hover:bg-gray-50 transition relative"
            >
              <div>{item.icon}</div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{item.message}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <time dateTime={item.time}>{item.time}</time>
                </div>
              </div>
              {/* Dismiss button */}
              <button
                onClick={() => dismissNotification(item.id)}
                aria-label={`Dismiss notification: ${item.message}`}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Load more button */}
        {displayCount < notifications.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMoreNotifications}
              disabled={loadingMore}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded px-4 py-2 border border-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Load more notifications"
            >
              {loadingMore ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  Loading...
                </>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default DashboardNotifications;
