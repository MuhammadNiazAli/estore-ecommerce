'use client';

import React, { useState, useEffect } from 'react';

// Countdown component
const CountdownTimer = ({ targetDate }) => {
  const computeRemainingTime = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(computeRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(computeRemainingTime());
    }, 60000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) {
    return <span className="text-gray-400 text-xs sm:text-sm font-medium">Delivery time has passed</span>;
  }

  return (
    <span className="font-semibold text-sm sm:text-base">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
    </span>
  );
};

// Main Tracking Component
const TrackShipmentContent = ({ closePanel }) => {
  const shipmentSteps = [
    {
      id: 1,
      label: 'Order Processed',
      date: 'July 5, 2025',
      description: 'Your order has been received and confirmed.',
    },
    {
      id: 2,
      label: 'Dispatched from Warehouse',
      date: 'July 7, 2025',
      description: 'Package left the warehouse and is in transit.',
    },
    {
      id: 3,
      label: 'Arrived at Sorting Facility',
      date: 'July 9, 2025',
      description: 'Package arrived at local sorting center.',
    },
    {
      id: 4,
      label: 'Out for Delivery',
      date: 'Estimated today, July 15, 2025',
      description: 'Your package is with the delivery agent.',
    },
    {
      id: 5,
      label: 'Delivered',
      date: 'Expected shortly',
      description: 'Your package will arrive today or shortly.',
      isFinal: true,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto text-[14px] sm:text-[15px]">
      {/* Header */}
      <header className="mb-6 text-center sm:text-left">
        <h2 className="text-yellow-400 text-2xl sm:text-3xl font-bold tracking-wide">
          Shipment Tracking Details
        </h2>
      </header>

      {/* Intro */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
        Your order is important to us. Below is the real-time status of your shipment along with detailed tracking information.
      </p>

      {/* Timeline */}
      <section className="mb-10 max-w-xl mx-auto sm:mx-0" aria-label="Shipment progress">
        <ul className="pl-6 border-l-4 border-yellow-400 space-y-6">
          {shipmentSteps.map(({ id, label, date, description, isFinal }) => (
            <li key={id} className="relative">
              <div
                className={`absolute -left-8 top-0 w-7 h-7 flex items-center justify-center rounded-full ring-4 text-xs font-bold
                ${isFinal ? 'bg-gray-700 text-gray-500 ring-gray-900' : 'bg-yellow-400 text-black ring-gray-900'}`}
              >
                {id}
              </div>
              <p className={`${isFinal ? 'text-gray-500' : 'text-yellow-400'} font-semibold ml-1 text-[15px]`}>
                {label}
              </p>
              <p className={`${isFinal ? 'text-gray-500' : 'text-gray-400'} ml-1 text-[13px]`}>
                {date} — {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Current Status */}
      <section className="bg-gray-800 p-4 sm:p-5 rounded-lg mb-10 shadow-lg max-w-xl mx-auto sm:mx-0">
        <p className="text-yellow-400 font-semibold text-base sm:text-lg mb-1">Current Status</p>
        <p className="text-gray-300 mb-1">
          <strong>In Transit</strong> — Your package is moving through the delivery network.
        </p>
        <p className="text-gray-400 mb-2">
          Estimated delivery date: <strong>July 15, 2025</strong>
        </p>
        <p className="text-yellow-400 font-semibold">
          Estimated time remaining: <CountdownTimer targetDate="2025-07-15T18:00:00Z" />
        </p>
      </section>

      {/* Courier Info */}
      <section className="bg-gray-900 p-4 sm:p-5 rounded-lg mb-10 shadow-lg max-w-xl mx-auto sm:mx-0" aria-label="Courier details">
        <h3 className="text-yellow-400 font-semibold text-base sm:text-lg mb-3">Courier Information</h3>
        <p className="text-gray-300 text-sm mb-1">
          Courier: <strong>FastShip Logistics</strong>
        </p>
        <p className="text-gray-300 text-sm mb-1">
          Tracking #: <strong>FS1234567890</strong>
        </p>
        <p className="text-gray-300 text-sm mb-4">Contact courier for urgent queries.</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+18001234567"
            className="bg-yellow-400 text-black text-sm px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition text-center w-full sm:w-auto"
            aria-label="Call FastShip"
          >
            Call FastShip
          </a>
          <a
            href="https://fastshiplogistics.com/track/FS1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-400 text-yellow-400 text-sm px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition text-center w-full sm:w-auto"
            aria-label="Track Package"
          >
            Track Package
          </a>
        </div>
      </section>

      {/* Support Links */}
      <section className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0 text-center sm:text-left space-y-3 mb-10" aria-label="Help and support">
        <p>
          Having issues with your shipment? Visit our{' '}
          <a href="/help/shipping" className="text-yellow-400 underline hover:text-yellow-300">
            Shipping Help Center
          </a>{' '}
          or{' '}
          <a href="/contact" className="text-yellow-400 underline hover:text-yellow-300">
            Contact Support
          </a>.
        </p>
      </section>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto sm:mx-0 justify-center sm:justify-start mb-4">
        <button
          type="button"
          onClick={() => window.open('https://your-ecommerce-site.com/order/tracking', '_blank')}
          className="bg-yellow-400 text-black text-sm px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md w-full sm:w-auto"
          aria-label="Open tracking page"
        >
          Tracking Details
        </button>
        <button
          type="button"
          onClick={closePanel}
          className="border border-yellow-400 text-yellow-400 text-sm px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition shadow-md w-full sm:w-auto"
          aria-label="Close tracking panel"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TrackShipmentContent;
