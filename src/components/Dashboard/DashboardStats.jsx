'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Info,
} from 'lucide-react';

// Simulated backend fetch function (returns promise)
const fetchStats = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.95) {
        resolve([
          {
            title: 'Revenue',
            value: 52300 + Math.floor(Math.random() * 1000),
            icon: <DollarSign className="w-6 h-6 text-amber-600" />,
            change: '+8.5%',
            changeColor: 'text-green-400',
            description: 'Total revenue generated this month.',
            isCurrency: true,
          },
          {
            title: 'Orders',
            value: 1420 + Math.floor(Math.random() * 20),
            icon: <ShoppingCart className="w-6 h-6 text-amber-600" />,
            change: '+4.2%',
            changeColor: 'text-green-400',
            description: 'Number of completed orders.',
          },
          {
            title: 'New Users',
            value: 385 + Math.floor(Math.random() * 10),
            icon: <Users className="w-6 h-6 text-amber-600" />,
            change: '-1.3%',
            changeColor: 'text-red-500',
            description: 'New user sign-ups this month.',
          },
          {
            title: 'Growth',
            value: 14.7 + Math.random() * 1,
            icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
            change: '+3.9%',
            changeColor: 'text-green-400',
            description: 'Overall growth rate compared to last month.',
            isPercent: true,
          },
        ]);
      } else {
        reject(new Error('Failed to fetch stats. Please try again.'));
      }
    }, 1200);
  });
};

// Hook for smooth count up animation
const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef(null);

  useEffect(() => {
    let rafId;

    const step = (timestamp) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const progressRatio = Math.min(progress / duration, 1);
      const currentValue = target * progressRatio;
      setCount(currentValue);
      if (progress < duration) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    setCount(0);
    startTimestamp.current = null;
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return count;
};

// Single stat card component with own useCountUp hook call
const StatCard = ({
  title,
  value,
  icon,
  change,
  changeColor,
  description,
  isCurrency = false,
  isPercent = false,
}) => {
  const animatedValue = useCountUp(value);

  const formatValue = () => {
    if (isCurrency) {
      return `$${Math.round(animatedValue).toLocaleString()}`;
    } else if (isPercent) {
      return `${animatedValue.toFixed(1)}%`;
    } else {
      return Math.round(animatedValue).toLocaleString();
    }
  };

  return (
    <article
      className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition flex flex-col gap-3 relative group"
      tabIndex={0}
      aria-describedby={`desc-${title.replace(/\s+/g, '-')}`}
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">{title}</span>
        <div aria-hidden="true">{icon}</div>
      </div>
      <div
        className="text-3xl font-bold text-gray-900"
        aria-live="off"
        aria-atomic="true"
        aria-relevant="additions"
      >
        {formatValue()}
      </div>
      <div className={`text-sm font-semibold ${changeColor}`}>{change} this month</div>

      <div
        id={`desc-${title.replace(/\s+/g, '-')}`}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-56 bg-white text-gray-700 text-xs rounded-md p-2 opacity-0 pointer-events-none group-focus:opacity-100 group-hover:opacity-100 transition-opacity shadow-lg z-10"
        role="tooltip"
      >
        <Info
          className="inline w-4 h-4 mr-1 text-amber-600 align-text-bottom"
          aria-hidden="true"
        />
        {description}
      </div>
    </article>
  );
};

const DashboardStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stats initially and every 15 seconds
  useEffect(() => {
    let isMounted = true;

    const getStats = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchStats();
        if (isMounted) {
          setStats(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    getStats();
    const interval = setInterval(getStats, 15000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <section
        className="w-full bg-white flex justify-center px-4 py-10"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="w-full max-w-[1000px]">
          <h2 className="text-2xl font-bold text-amber-600 mb-6 animate-pulse">
            Key Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow animate-pulse h-32"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="w-full bg-white flex justify-center px-4 py-10"
        role="alert"
        aria-live="assertive"
      >
        <div className="w-full max-w-[1000px] text-center">
          <h2 className="text-2xl font-bold text-amber-600 mb-4">Key Statistics</h2>
          <p className="text-red-500 font-semibold">{error}</p>
          <button
            onClick={() => {
              setLoading(true);
              setError(null);
              fetchStats()
                .then((data) => {
                  setStats(data);
                  setLoading(false);
                })
                .catch((err) => {
                  setError(err.message);
                  setLoading(false);
                });
            }}
            className="mt-4 bg-amber-600 text-black px-5 py-2 rounded-md font-semibold hover:bg-amber-500 transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-white flex justify-center px-4 py-10"
      aria-live="polite"
    >
      <div className="w-full max-w-[1000px]">
        <h2 className="text-2xl font-bold text-amber-600 mb-6">Key Statistics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
