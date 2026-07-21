'use client';

import React from 'react';

const trackingSteps = [
  {
    status: 'Order Confirmed',
    date: '2025-07-01',
    description: 'Your order has been confirmed.',
    icon: (
      <svg
        className="w-5 h-5 text-gray-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    status: 'Packed',
    date: '2025-07-02',
    description: 'Your order has been packed and is ready for shipment.',
    icon: (
      <svg
        className="w-5 h-5 text-gray-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    status: 'Shipped',
    date: '2025-07-03',
    description: 'Your order has been shipped.',
    icon: (
      <svg
        className="w-5 h-5 text-gray-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M9 17v-6h13v6M5 17h.01M5 12h.01" />
      </svg>
    ),
  },
  {
    status: 'In Transit',
    date: '2025-07-04',
    description: 'Your package is on the way.',
    icon: (
      <svg
        className="w-5 h-5 text-gray-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 10h4l3 6h7" />
      </svg>
    ),
  },
  {
    status: 'Out for Delivery',
    date: '2025-07-05',
    description: 'Your package is out for delivery.',
    icon: (
      <svg
        className="w-5 h-5 text-gray-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M9 20l-5-5 1.5-1.5L9 17l9-9 1.5 1.5L9 20z" />
      </svg>
    ),
  },
  {
    status: 'Delivered',
    date: 'Expected: 2025-07-06',
    description: 'Your package will be delivered today.',
    icon: (
      <svg
        className="w-5 h-5 text-gray-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

// Tick icon for completed steps
const TickIcon = () => (
  <svg
    className="w-5 h-5 text-gray-900"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ShippingTracker = ({ currentStep = 3 }) => {
  return (
    <section
      aria-label="Shipping tracker"
      className="max-w-[1000px] mx-auto px-6 py-16 sm:py-24 text-gray-700 bg-gradient-to-r from-white via-white to-white rounded-lg shadow-lg my-5"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center drop-shadow-lg tracking-wide">
        Track Your Shipment
      </h2>

      <ol className="relative border-l-4 border-black ml-6 space-y-14">
        {trackingSteps.map(({ status, date, description, icon }, i) => {
          const isCompleted = i < currentStep;
          const isActive = i === currentStep;
          const isUpcoming = i > currentStep;

          return (
            <li key={status} className="relative group">
              {/* Circle */}
              <span
                className={`absolute -left-9 top-2 w-9 h-9 rounded-full flex items-center justify-center ring-4 transition
                  ${
                    isCompleted
                      ? 'bg-black ring-black'
                      : isActive
                      ? 'bg-black ring-black animate-pulse'
                      : 'bg-transparent ring-2 ring-gray-200 group-hover:ring-black'
                  }
                `}
                aria-current={isActive ? 'step' : undefined}
              >
                {/* Show tick icon if completed */}
                {isCompleted ? (
                  <TickIcon />
                ) : isActive ? (
                  icon
                ) : (
                  // For upcoming steps: empty circle, no icon
                  <span className="w-3 h-3 rounded-full bg-white group-hover:bg-black transition-colors" />
                )}
              </span>

              {/* Content */}
              <div className="pl-8 sm:pl-12">
                <time
                  className={`text-sm font-semibold ${
                    isActive ? 'text-black' : 'text-black'
                  }`}
                >
                  {date}
                </time>
                <h3
                  className={`text-lg sm:text-xl font-semibold mb-1 transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {status}
                </h3>
                <p
                  className={`text-gray-600 max-w-xl leading-relaxed transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {description}
                </p>
              </div>

              {/* Tooltip */}
              <div
                className="absolute left-12 top-0 -translate-x-full max-w-xs rounded-md bg-white bg-opacity-90 p-3 text-sm text-gray-900 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg z-20"
                role="tooltip"
              >
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default ShippingTracker;
