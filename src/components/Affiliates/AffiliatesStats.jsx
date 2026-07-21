'use client';

import React, { useState, useEffect } from "react";
import { BarChart3, Users, DollarSign, TrendingUp } from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Active Affiliates",
    value: 12345,
    suffix: "+",
    icon: <Users className="w-8 h-8 text-amber-600" />,
    description: "Engaged partners promoting our platform daily.",
  },
  {
    id: 2,
    title: "Commission Paid",
    value: 120000,
    prefix: "$",
    suffix: "+",
    icon: <DollarSign className="w-8 h-8 text-amber-600" />,
    description: "Total rewards distributed to our affiliate partners.",
  },
  {
    id: 3,
    title: "Total Sales Generated",
    value: 89000,
    suffix: "+",
    icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
    description: "Sales made directly through affiliate links.",
  },
  {
    id: 4,
    title: "Conversion Rate",
    value: 7.9,
    suffix: "%",
    icon: <BarChart3 className="w-8 h-8 text-amber-600" />,
    description: "Average conversion rate across all campaigns.",
    decimal: 1,
  },
];

// Animated counting hook
function useCountUp(end, duration = 2000, decimal = 0) {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const start = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = start + (end - start) * progress;
      setCount(Number(currentCount.toFixed(decimal)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, decimal]);

  return count;
}

const AffiliatesStats = () => {
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  // Simulate data load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const counts = statsData.map(({ value, decimal = 0 }) =>
    useCountUp(value, 1800, decimal)
  );

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedId(selectedId === id ? null : id);
    }
  };

  return (
    <section
      aria-label="Affiliate Program Key Statistics"
      className="bg-white text-amber-600 py-16 px-6 sm:px-8"
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-center font-extrabold mb-12 tracking-wide text-amber-600
          text-[clamp(1.75rem,4vw,2.5rem)]"
        >
          Key Affiliate Statistics
        </h2>

        {loading ? (
          <div
            className="flex justify-center items-center h-40"
            role="status"
            aria-live="polite"
            aria-label="Loading affiliate statistics"
          >
            <svg
              className="animate-spin h-12 w-12 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
          >
            {statsData.map(
              (
                {
                  id,
                  title,
                  prefix = "",
                  suffix = "",
                  icon,
                  description,
                  decimal = 0,
                },
                i
              ) => {
                const count = counts[i];
                const isSelected = selectedId === id;

                return (
                  <article
                    key={id}
                    role="listitem"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-describedby={`desc-${id}`}
                    onClick={() => setSelectedId(isSelected ? null : id)}
                    onKeyDown={(e) => handleKeyDown(e, id)}
                    className={`relative bg-white rounded-2xl p-6 flex flex-col items-start justify-start shadow-lg cursor-pointer
                      focus:outline-none focus:ring-4 focus:ring-amber-700
                      transition-all duration-300 ease-in-out
                      ${
                        isSelected
                          ? "bg-amber-950 shadow-amber-700/60 scale-[1.03]"
                          : "hover:bg-gray-50 hover:shadow-amber-700/30 hover:scale-[1.02]"
                      }`}
                  >
                    <div className="mb-4" aria-hidden="true">
                      {icon}
                    </div>

                    {/* Value */}
                    <h3
                      className="font-extrabold tracking-tight mb-1 select-none text-amber-600
                        text-[clamp(1.75rem,3vw,2rem)] leading-tight"
                      aria-label={`${title} value`}
                    >
                      {prefix}
                      {count.toLocaleString(undefined, {
                        minimumFractionDigits: decimal,
                        maximumFractionDigits: decimal,
                      })}
                      {suffix}
                    </h3>

                    {/* Title */}
                    <p className="text-sm font-semibold text-amber-500 mb-2 select-none
                      tracking-wide"
                    >
                      {title}
                    </p>

                    {/* Expanded description shown only when selected */}
                    {isSelected ? (
                      <p
                        id={`desc-${id}`}
                        className="mt-3 text-amber-600 text-sm leading-relaxed select-text
                          transition-opacity duration-300"
                        aria-live="polite"
                      >
                        {description}
                      </p>
                    ) : (
                      // Screen reader only description (invisible but accessible)
                      <p
                        id={`desc-${id}`}
                        className="sr-only"
                      >
                        {description}
                      </p>
                    )}
                  </article>
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AffiliatesStats;
