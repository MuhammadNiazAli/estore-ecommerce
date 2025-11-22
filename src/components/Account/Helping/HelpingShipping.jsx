'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaShip, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const shippingFeatures = [
  {
    icon: <FaPaperPlane className="text-yellow-400 text-lg" />,
    label: 'Fast Shipping Options',
  },
  {
    icon: <FaShip className="text-yellow-400 text-lg" />,
    label: 'Reliable Delivery Partners',
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-400 text-lg" />,
    label: 'Real-Time Tracking',
  },
];

const viewOptionsContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Our Shipping Options</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Standard Shipping – Delivery within 5-7 business days</li>
      <li>Express Shipping – Delivery within 2-3 business days</li>
      <li>Overnight Shipping – Next day delivery for urgent needs</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Shipping costs vary based on your location and selected service.
    </p>
  </div>
);

const contactSupportContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Contact Shipping Support</h3>
    <p>
      Need help with your shipment? Our shipping support team is available 24/7 to assist you.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Track your package status</li>
      <li>Resolve delivery issues</li>
      <li>Change shipping address or options</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Call us at <a href="tel:+18001234567" className="underline text-yellow-400">1-800-123-4567</a> or email <a href="mailto:shipping@yourstore.com" className="underline text-yellow-400">shipping@yourstore.com</a>.
    </p>
  </div>
);

export default function HelpingShipping() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Shipping help and information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Shipping Information
        </h2>
        <p className="text-gray-300">
          Discover our fast and reliable shipping options, with real-time tracking to keep you updated every step of the way.
        </p>
        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
          {shippingFeatures.map(({ icon, label }, idx) => (
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
            onClick={() => toggleSection('viewOptions')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'viewOptions'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
            aria-expanded={activeSection === 'viewOptions'}
            aria-controls="view-options-content"
            aria-label="View shipping options"
          >
            View Options
          </button>
          <button
            type="button"
            onClick={() => toggleSection('contactSupport')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'contactSupport'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-expanded={activeSection === 'contactSupport'}
            aria-controls="contact-support-content"
            aria-label="Contact shipping support"
          >
            Contact Support
          </button>
        </div>

        {activeSection && (
          <div
            id={activeSection === 'viewOptions' ? 'view-options-content' : 'contact-support-content'}
            className="relative mt-8 p-6 bg-gray-900 border border-gray-700 rounded-xl shadow-lg max-w-md mx-auto text-left text-gray-300"
          >
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
              aria-label="Close details"
            >
              <FaTimes />
            </button>
            {activeSection === 'viewOptions' && viewOptionsContent}
            {activeSection === 'contactSupport' && contactSupportContent}
          </div>
        )}
      </div>
    </section>
  );
}
