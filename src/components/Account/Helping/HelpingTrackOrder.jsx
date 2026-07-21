'use client';

import React, { useState } from 'react';
import { FaMapMarkedAlt, FaShippingFast, FaSearchLocation, FaTimes } from 'react-icons/fa';

const trackOrderFeatures = [
  {
    icon: <FaMapMarkedAlt className="text-amber-600 text-lg" />,
    label: 'Live Location Tracking',
  },
  {
    icon: <FaShippingFast className="text-amber-600 text-lg" />,
    label: 'Fast Updates',
  },
  {
    icon: <FaSearchLocation className="text-amber-600 text-lg" />,
    label: 'Easy Order Lookup',
  },
];

const trackNowContent = (
  <div className="text-left text-sm text-gray-700 space-y-3">
    <h3 className="text-xl font-semibold text-amber-600">Track Your Order Now</h3>
    <p>
      Use our real-time tracking system to get live updates on your order’s location and estimated delivery time.
      Simply enter your order ID on the tracking page to start.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Instant location updates</li>
      <li>Delivery status notifications</li>
      <li>Estimated time of arrival</li>
    </ul>
  </div>
);

const learnMoreContent = (
  <div className="text-left text-sm text-gray-700 space-y-3">
    <h3 className="text-xl font-semibold text-amber-600">Learn More About Tracking</h3>
    <p>
      Our tracking system is designed for your convenience and peace of mind. Learn how to interpret tracking details,
      what to expect during delivery, and how to resolve issues.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Understanding tracking updates</li>
      <li>Handling delays and exceptions</li>
      <li>Contacting support for help</li>
    </ul>
  </div>
);

export default function HelpingTrackOrder() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Track your order help and information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-amber-600 tracking-tight">
          Track Your Order
        </h2>
        <p className="text-gray-700">
          Stay updated with live location tracking, fast notifications, and easy order lookup for peace of mind.
        </p>
        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600 font-medium text-sm">
          {trackOrderFeatures.map(({ icon, label }, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 whitespace-nowrap"
              title={label}
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-5 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('trackNow')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'trackNow'
                ? 'bg-amber-500 text-black ring-amber-500'
                : 'bg-amber-600 text-black hover:bg-amber-500'
            }`}
            aria-expanded={activeSection === 'trackNow'}
            aria-controls="track-now-content"
            aria-label="Track order now"
          >
            Track Now
          </button>
          <button
            type="button"
            onClick={() => toggleSection('learnMore')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'learnMore'
                ? 'bg-white text-black ring-gray-200'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100 hover:text-black'
            }`}
            aria-expanded={activeSection === 'learnMore'}
            aria-controls="learn-more-content"
            aria-label="Learn more about tracking"
          >
            Learn More
          </button>
        </div>

        {activeSection && (
          <div
            id={activeSection === 'trackNow' ? 'track-now-content' : 'learn-more-content'}
            className="relative mt-8 p-6 bg-white border border-gray-200 rounded-xl shadow-lg max-w-md mx-auto text-left text-gray-700"
          >
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-400 text-lg"
              aria-label="Close details"
            >
              <FaTimes />
            </button>
            {activeSection === 'trackNow' && trackNowContent}
            {activeSection === 'learnMore' && learnMoreContent}
          </div>
        )}
      </div>
    </section>
  );
}
