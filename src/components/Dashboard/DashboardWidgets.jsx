'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Globe, Users, CreditCard } from 'lucide-react';

const initialWidgets = [
  {
    id: 1,
    title: 'Server Load',
    value: 68, // as number for easy animation
    unit: '%',
    icon: Cpu,
    description: 'Current CPU usage',
    min: 50,
    max: 90,
  },
  {
    id: 2,
    title: 'Global Visitors',
    value: 12400,
    unit: '',
    icon: Globe,
    description: 'Visitors in last 24h',
    min: 10000,
    max: 15000,
  },
  {
    id: 3,
    title: 'Active Users',
    value: 3142,
    unit: '',
    icon: Users,
    description: 'Currently online',
    min: 2800,
    max: 3500,
  },
  {
    id: 4,
    title: 'Payments Processed',
    value: 1276,
    unit: '',
    icon: CreditCard,
    description: 'Transactions today',
    min: 1000,
    max: 1400,
  },
];

const formatNumber = (num) => {
  // Format large numbers nicely (e.g., 12400 => 12.4K)
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

const DashboardWidgets = () => {
  const [widgets, setWidgets] = useState([]);
  const [loading, setLoading] = useState(true);

  // On mount, load initial data (simulate fetch)
  useEffect(() => {
    setTimeout(() => {
      setWidgets(initialWidgets);
      setLoading(false);
    }, 1200); // simulate loading delay
  }, []);

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      setWidgets((prevWidgets) =>
        prevWidgets.map((widget) => {
          // Randomize value within min/max range +/- 3% variance
          const variance = (widget.max - widget.min) * 0.03;
          let newValue =
            widget.value +
            (Math.random() * variance * 2 - variance); // +/- variance

          // Clamp between min and max
          newValue = Math.min(widget.max, Math.max(widget.min, newValue));

          // Round values smartly
          newValue =
            widget.unit === '%' ? Math.round(newValue) : Math.round(newValue);

          return { ...widget, value: newValue };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <section className="w-full bg-gray-900 flex justify-center px-4 py-10" aria-busy="true" aria-label="Loading widgets">
        <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-5 shadow animate-pulse h-28"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-900 flex justify-center px-4 py-10" aria-label="Dashboard widgets overview">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Widgets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {widgets.map(({ id, title, value, unit, icon: Icon, description }) => (
            <div
              key={id}
              className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col gap-3 cursor-default select-none"
              title={description}
              role="region"
              aria-label={`${title}: ${value}${unit}`}
            >
              <div className="flex justify-between items-center">
                <span className="text-yellow-400" aria-hidden="true">
                  <Icon className="w-6 h-6" />
                </span>
                <span
                  className="text-white font-semibold text-lg tabular-nums"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {formatNumber(value)}{unit}
                </span>
              </div>
              <h3 className="text-white font-semibold text-md">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardWidgets;
