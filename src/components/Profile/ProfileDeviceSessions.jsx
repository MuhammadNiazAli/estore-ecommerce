'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  DevicePhoneMobileIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy session data (could be fetched from backend)
const initialSessions = [
  {
    id: 1,
    device: 'Windows 10 PC',
    browser: 'Chrome 114.0',
    ip: '192.168.1.10',
    location: 'Amsterdam, Netherlands',
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    current: true,
  },
  {
    id: 2,
    device: 'iPhone 14 Pro',
    browser: 'Safari 17.0',
    ip: '192.168.1.15',
    location: 'Rotterdam, Netherlands',
    lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    current: false,
  },
  {
    id: 3,
    device: 'MacBook Pro',
    browser: 'Firefox 115.0',
    ip: '192.168.1.20',
    location: 'Utrecht, Netherlands',
    lastActive: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    current: false,
  },
];

// Helper: format "time ago"
const timeAgo = (date) => {
  const diff = Date.now() - date.getTime();
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec} seconds ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} minute${min > 1 ? 's' : ''} ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hour${hr > 1 ? 's' : ''} ago`;
  const day = Math.floor(hr / 24);
  return `${day} day${day > 1 ? 's' : ''} ago`;
};

const ProfileDeviceSessions = () => {
  const [sessions, setSessions] = useState(initialSessions);
  const [confirmModal, setConfirmModal] = useState({ open: false, sessionId: null });
  const [logoutAllModal, setLogoutAllModal] = useState(false);

  const confirmRef = useRef(null);

  // Focus trap for confirmation modal
  useEffect(() => {
    if ((confirmModal.open || logoutAllModal) && confirmRef.current) {
      confirmRef.current.focus();
    }
  }, [confirmModal.open, logoutAllModal]);

  // Remove one session by id (except current)
  const logoutSession = (id) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
    closeConfirmModal();
  };

  // Remove all except current
  const logoutAllExceptCurrent = () => {
    setSessions((prev) => prev.filter((s) => s.current));
    setLogoutAllModal(false);
  };

  const openConfirmModal = (id) => setConfirmModal({ open: true, sessionId: id });
  const closeConfirmModal = () => setConfirmModal({ open: false, sessionId: null });
  const openLogoutAllModal = () => setLogoutAllModal(true);
  const closeLogoutAllModal = () => setLogoutAllModal(false);

  return (
    <section
      className="w-full bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-12 max-w-[1200px] mx-auto rounded-lg"
      aria-label="Device sessions"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">
            Device Sessions
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-md">
            Review devices where your account is currently logged in.
          </p>
        </div>
        <div className="flex items-center gap-2 text-yellow-300 font-medium text-sm sm:text-base select-none">
          <DevicePhoneMobileIcon className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
          <span>Active Sessions</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 mb-8" />

      {/* Sessions List */}
      <div className="space-y-6">
        {sessions.map((session) => (
          <motion.div
            key={session.id}
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`bg-gray-800 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md border ${
              session.current ? 'border-2 border-yellow-400' : 'border border-gray-700'
            }`}
          >
            <div className="flex items-center gap-4">
              <DevicePhoneMobileIcon className="w-10 h-10 text-yellow-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-semibold text-lg">{session.device}</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Browser: {session.browser}
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  IP: {session.ip} — {session.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base whitespace-nowrap">
              <ClockIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
              <span>{timeAgo(session.lastActive)}</span>
              {session.current && (
                <span
                  className="ml-4 px-3 py-1 rounded-full text-yellow-900 bg-yellow-400 font-semibold text-xs sm:text-sm"
                  aria-label="Current session"
                >
                  Current Session
                </span>
              )}
              {!session.current && (
                <button
                  onClick={() => openConfirmModal(session.id)}
                  type="button"
                  aria-label={`Log out from device ${session.device}`}
                  className="ml-4 flex items-center gap-1 text-red-500 hover:text-red-400 transition text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  Log out
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logout All Except Current Button */}
      {sessions.length > 1 && (
        <div className="mt-8 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={openLogoutAllModal}
            className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold shadow-lg transition text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-yellow-500"
            aria-label="Log out from all other sessions except current"
          >
            Log out from other sessions
          </button>
        </div>
      )}

      {/* Confirm Single Logout Modal */}
      <AnimatePresence>
        {confirmModal.open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-logout-title"
            aria-describedby="confirm-logout-desc"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeConfirmModal();
            }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              tabIndex={-1}
              ref={confirmRef}
            >
              <h3
                id="confirm-logout-title"
                className="text-xl font-bold text-yellow-400 mb-4"
              >
                Confirm Logout
              </h3>
              <p id="confirm-logout-desc" className="mb-6 text-gray-300">
                Are you sure you want to log out from this session? You will need to
                log in again on that device.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeConfirmModal}
                  className="px-5 py-2 rounded-full bg-gray-700 text-yellow-400 font-semibold hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => logoutSession(confirmModal.sessionId)}
                  className="px-5 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Log Out
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={closeConfirmModal}
                aria-label="Close confirmation modal"
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="button"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm Logout All Modal */}
      <AnimatePresence>
        {logoutAllModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-logout-all-title"
            aria-describedby="confirm-logout-all-desc"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLogoutAllModal();
            }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              tabIndex={-1}
              ref={confirmRef}
            >
              <h3
                id="confirm-logout-all-title"
                className="text-xl font-bold text-yellow-400 mb-4"
              >
                Confirm Logout from All Other Sessions
              </h3>
              <p id="confirm-logout-all-desc" className="mb-6 text-gray-300">
                Are you sure you want to log out from all sessions except the current
                one? You will need to log in again on those devices.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeLogoutAllModal}
                  className="px-5 py-2 rounded-full bg-gray-700 text-yellow-400 font-semibold hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Cancel
                </button>
                <button
                  onClick={logoutAllExceptCurrent}
                  className="px-5 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Log Out All
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={closeLogoutAllModal}
                aria-label="Close logout all confirmation modal"
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="button"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfileDeviceSessions;
