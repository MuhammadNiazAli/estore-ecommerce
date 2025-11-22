'use client';

import React, { useState, useEffect } from 'react';
import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  RefreshCcw,
  Loader2,
  ChevronDown,
} from 'lucide-react';

const overviewDatasets = {
  'This Month': [
    {
      title: 'Total Sales',
      value: '$48,900',
      icon: <DollarSign className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+12%',
    },
    {
      title: 'Orders',
      value: '1,320',
      icon: <ShoppingBag className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+6.2%',
    },
    {
      title: 'Customers',
      value: '842',
      icon: <Users className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+4.1%',
    },
    {
      title: 'Growth',
      value: '15.4%',
      icon: <TrendingUp className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+2.8%',
    },
  ],
  'Last Month': [
    {
      title: 'Total Sales',
      value: '$42,100',
      icon: <DollarSign className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '-5.6%',
    },
    {
      title: 'Orders',
      value: '1,180',
      icon: <ShoppingBag className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '-3.4%',
    },
    {
      title: 'Customers',
      value: '810',
      icon: <Users className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+1.2%',
    },
    {
      title: 'Growth',
      value: '12.6%',
      icon: <TrendingUp className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '-0.7%',
    },
  ],
  'This Year': [
    {
      title: 'Total Sales',
      value: '$480,000',
      icon: <DollarSign className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+8.2%',
    },
    {
      title: 'Orders',
      value: '15,900',
      icon: <ShoppingBag className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+4.7%',
    },
    {
      title: 'Customers',
      value: '10,200',
      icon: <Users className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+3.5%',
    },
    {
      title: 'Growth',
      value: '18.9%',
      icon: <TrendingUp className="text-yellow-400 w-6 h-6" aria-hidden="true" />,
      change: '+6.1%',
    },
  ],
};

const DashboardOverview = () => {
  const periods = Object.keys(overviewDatasets);
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [overviewData, setOverviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Simulate fetching data based on selectedPeriod
  useEffect(() => {
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      // Simulate occasional error
      if (Math.random() < 0.05) {
        setError('Failed to load data. Please try again.');
        setOverviewData([]);
      } else {
        setOverviewData(overviewDatasets[selectedPeriod]);
      }
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [selectedPeriod]);

  // Refresh handler
  const refreshData = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setOverviewData(overviewDatasets[selectedPeriod]);
      setLoading(false);
    }, 1000);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => setDropdownOpen((open) => !open);

  // Select period from dropdown
  const selectPeriod = (period) => {
    setSelectedPeriod(period);
    setDropdownOpen(false);
  };

  return (
    <section
      className="w-full bg-gray-900 flex justify-center px-4 py-10"
      aria-label="Dashboard Overview Section"
    >
      <div className="w-full max-w-[1000px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 select-none">Overview</h2>
            <p className="text-sm text-gray-400 mt-1 max-w-[400px]">
              A quick summary of recent performance and metrics.
            </p>
          </div>

          {/* Period selection + Refresh */}
          <div className="flex items-center gap-4">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                aria-labelledby="period-label"
                id="period-button"
                className="flex items-center gap-1 bg-gray-800 text-yellow-400 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 select-none"
              >
                <span id="period-label">{selectedPeriod}</span>
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>

              {dropdownOpen && (
                <ul
                  role="listbox"
                  aria-labelledby="period-label"
                  tabIndex={-1}
                  className="absolute right-0 mt-1 w-40 bg-gray-800 rounded-md shadow-lg text-gray-300 z-50 max-h-52 overflow-auto focus:outline-none"
                >
                  {periods.map((period) => (
                    <li
                      key={period}
                      role="option"
                      aria-selected={period === selectedPeriod}
                      tabIndex={0}
                      onClick={() => selectPeriod(period)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          selectPeriod(period);
                          e.preventDefault();
                        }
                      }}
                      className={`cursor-pointer px-3 py-2 hover:bg-yellow-500 hover:text-gray-900 ${
                        period === selectedPeriod ? 'bg-yellow-600 text-gray-900 font-semibold' : ''
                      }`}
                    >
                      {period}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Refresh button */}
            <button
              onClick={refreshData}
              disabled={loading}
              aria-label="Refresh overview data"
              className="text-yellow-400 hover:text-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-2"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
              ) : (
                <RefreshCcw className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mb-4 rounded-md bg-red-700 p-3 text-red-200 select-none"
            tabIndex={-1}
          >
            {error}
          </div>
        )}

        {/* Overview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-5 rounded-xl shadow animate-pulse flex flex-col gap-2"
                  aria-hidden="true"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-5 bg-gray-700 rounded w-24"></div>
                    <div className="h-6 w-6 bg-yellow-700 rounded"></div>
                  </div>
                  <div className="h-10 bg-yellow-700 rounded w-3/4"></div>
                  <div className="h-5 bg-green-700 rounded w-1/4"></div>
                </div>
              ))
            : overviewData.map((item, index) => {
                // Determine if change is positive or negative
                const isPositive = item.change.startsWith('+');
                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition-all flex flex-col gap-2"
                    tabIndex={0}
                    role="region"
                    aria-label={`${item.title} overview card`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{item.title}</span>
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div
                      className={`text-sm ${
                        isPositive ? 'text-green-400' : 'text-red-500'
                      } font-semibold select-none`}
                      aria-live="polite"
                    >
                      {item.change} this {selectedPeriod.toLowerCase()}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
