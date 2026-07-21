'use client';

import React, { useState, useEffect } from 'react';
import {
  EyeIcon,
  TagIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Constants for simulation
const loyaltyTiers = ['Bronze Member', 'Silver Member', 'Gold Member', 'Platinum Member'];
const abandonmentRisks = ['Low', 'Medium', 'High'];

const CartAnalyticsTracker = () => {
  const [stats, setStats] = useState([
    { id: 1, icon: EyeIcon, label: 'Items Viewed', value: 12, type: 'number', max: 50 },
    { id: 2, icon: TagIcon, label: 'Discounts Applied', value: 2, type: 'number', max: 5 },
    { id: 3, icon: CurrencyDollarIcon, label: 'Estimated Savings', value: 35, type: 'currency', max: 150 },
    { id: 4, icon: ExclamationTriangleIcon, label: 'Abandonment Risk', value: 'Low', type: 'risk' },
    { id: 5, icon: StarIcon, label: 'Loyalty Tier', value: 'Gold Member', type: 'tier' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => {
          switch (stat.type) {
            case 'number': {
              const change = Math.floor(Math.random() * 3) - 1;
              let newVal = stat.value + change;
              newVal = Math.min(Math.max(newVal, 0), stat.max);
              return { ...stat, value: newVal };
            }
            case 'currency': {
              const change = (Math.random() * 5 - 2).toFixed(2);
              let newVal = parseFloat((stat.value + parseFloat(change)).toFixed(2));
              newVal = Math.min(Math.max(newVal, 0), stat.max);
              return { ...stat, value: newVal };
            }
            case 'risk': {
              const currentIndex = abandonmentRisks.indexOf(stat.value);
              let nextIndex = currentIndex + (Math.random() > 0.5 ? 1 : -1);
              nextIndex = Math.min(Math.max(nextIndex, 0), abandonmentRisks.length - 1);
              return { ...stat, value: abandonmentRisks[nextIndex] };
            }
            case 'tier': {
              const currentIndex = loyaltyTiers.indexOf(stat.value);
              if (Math.random() < 0.2 && currentIndex < loyaltyTiers.length - 1) {
                return { ...stat, value: loyaltyTiers[currentIndex + 1] };
              }
              return stat;
            }
            default:
              return stat;
          }
        })
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderValue = (stat) => {
    switch (stat.type) {
      case 'number':
        return <AnimatedNumber value={stat.value} />;
      case 'currency':
        return <AnimatedNumber value={stat.value} prefix="$" decimals={2} />;
      case 'risk': {
        const riskColors = { Low: 'text-green-400', Medium: 'text-amber-600', High: 'text-red-500' };
        return (
          <span className={`${riskColors[stat.value] || 'text-gray-600'} font-semibold`}>
            {stat.value}
          </span>
        );
      }
      case 'tier': {
        const tierIndex = loyaltyTiers.indexOf(stat.value) + 1;
        return (
          <div className="flex items-center gap-2">
            <span className="font-semibold select-text">{stat.value}</span>
            <div className="flex">
              {[...Array(tierIndex)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-amber-600" aria-hidden="true" />
              ))}
            </div>
          </div>
        );
      }
      default:
        return stat.value;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 flex justify-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-6 select-none">
          Cart Activity & Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                role="group"
                aria-label={`${stat.label}: ${stat.value}`}
              >
                <Icon className="w-8 h-8 text-amber-600 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-600 select-text">{stat.label}</p>
                  {/* Changed from <p> to <div> here to avoid div inside p */}
                  <div className="text-lg font-semibold text-gray-900 select-text">{renderValue(stat)}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Animated number component for smooth transitions
const AnimatedNumber = ({ value, prefix = '', decimals = 0 }) => {
  const [displayValue, setDisplayValue] = React.useState(prefix + value.toFixed(decimals));

  React.useEffect(() => {
    let rafId;
    let start = null;
    const duration = 600;
    const from = parseFloat(displayValue.replace(prefix, '')) || 0;
    const to = parseFloat(value);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentVal = from + (to - from) * progress;
      setDisplayValue(prefix + currentVal.toFixed(decimals));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [value, prefix, decimals]);

  return <span>{displayValue}</span>;
};

export default CartAnalyticsTracker;
