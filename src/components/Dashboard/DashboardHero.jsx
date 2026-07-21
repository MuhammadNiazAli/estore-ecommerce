'use client';

import React, { useState, useEffect } from 'react';
import { Bell, User, Settings, LineChart, RefreshCcw } from 'lucide-react';

const DashboardHero = () => {
  // Simulate fetching stats from backend
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate data fetch
  const fetchStats = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      try {
        // In real app, fetch from API here
        setStats([
          { label: 'Revenue', value: '$24,500', icon: <LineChart className="text-amber-600" aria-hidden="true" /> },
          { label: 'Orders', value: '1,258', icon: <LineChart className="text-amber-600" aria-hidden="true" /> },
          { label: 'Active Users', value: '540', icon: <LineChart className="text-amber-600" aria-hidden="true" /> },
          { label: 'Growth', value: '12.8%', icon: <LineChart className="text-amber-600" aria-hidden="true" /> },
        ]);
        setLoading(false);
      } catch (e) {
        setError('Failed to load stats');
        setLoading(false);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // User menu toggle for avatar (simulate)
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => setUserMenuOpen((open) => !open);

  // Close user menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('#user-menu-button') && !e.target.closest('#user-menu')) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <section className="w-full bg-white flex justify-center px-4 py-10 min-h-[320px]">
      <div className="w-full max-w-[1000px] text-gray-900">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl font-bold text-amber-600 leading-tight select-none">
              Welcome back, Niaz <span aria-label="waving hand emoji" role="img"></span>
            </h1>
            <p className="text-sm text-gray-600 mt-1 max-w-[380px]">
              Here’s what’s happening with your store today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications Button */}
            <button
              aria-label="View notifications"
              className="text-amber-600 hover:text-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded p-2"
              title="Notifications"
            >
              <Bell className="w-6 h-6" />
            </button>

            {/* Settings Button */}
            <button
              aria-label="Settings"
              className="text-amber-600 hover:text-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded p-2"
              title="Settings"
            >
              <Settings className="w-6 h-6" />
            </button>

            {/* User Avatar with dropdown */}
            <div className="relative">
              <button
                id="user-menu-button"
                onClick={toggleUserMenu}
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
                className="w-10 h-10 rounded-full bg-amber-600 text-black flex items-center justify-center font-semibold shadow-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600 transition select-none"
                title="User menu"
              >
                N
              </button>

              {userMenuOpen && (
                <ul
                  id="user-menu"
                  role="menu"
                  aria-label="User menu"
                  className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-1 text-sm text-gray-700 ring-1 ring-gray-300 ring-opacity-20 z-50 animate-fadeIn"
                >
                  <li>
                    <a
                      href="#profile"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 hover:bg-amber-700 hover:text-gray-900 transition cursor-pointer"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 hover:bg-amber-700 hover:text-gray-900 transition cursor-pointer"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="border-gray-200 my-1" />
                  </li>
                  <li>
                    <a
                      href="#logout"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 hover:bg-red-600 hover:text-gray-900 transition cursor-pointer"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Refresh stats button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={fetchStats}
            disabled={loading}
            aria-label="Refresh statistics"
            className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
          >
            <RefreshCcw className={`w-5 h-5 animate-spin ${loading ? 'inline-block' : 'hidden'}`} aria-hidden="true" />
            {!loading && <RefreshCcw className="w-5 h-5" aria-hidden="true" />}
            <span className="sr-only">Refresh statistics</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid gap-5 ${
            loading ? 'grid-cols-1 sm:grid-cols-1 lg:grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {loading ? (
            // Show skeleton loading placeholders
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow animate-pulse flex justify-between items-center"
                aria-hidden="true"
              >
                <div className="space-y-3 w-full max-w-[150px]">
                  <div className="h-4 bg-white rounded w-3/4"></div>
                  <div className="h-6 bg-amber-900 rounded w-1/2"></div>
                </div>
                <div className="w-6 h-6 bg-amber-900 rounded"></div>
              </div>
            ))
          ) : error ? (
            <p className="text-red-500 col-span-full text-center">{error}</p>
          ) : (
            stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all flex justify-between items-center"
                tabIndex={0}
                role="region"
                aria-label={`${item.label} statistic`}
              >
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <h2 className="text-xl font-bold text-amber-500 mt-1">{item.value}</h2>
                </div>
                <div aria-hidden="true" className="text-amber-600">
                  {item.icon}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default DashboardHero;
