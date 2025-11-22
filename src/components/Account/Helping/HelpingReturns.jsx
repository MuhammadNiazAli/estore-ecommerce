'use client';

import React, { useState } from 'react';
import { FaReply, FaShippingFast, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const returnsFeatures = [
  {
    icon: <FaReply className="text-yellow-400 text-lg" />,
    label: 'Easy Return Process',
  },
  {
    icon: <FaShippingFast className="text-yellow-400 text-lg" />,
    label: 'Free Return Shipping',
  },
  {
    icon: <FaPhoneAlt className="text-yellow-400 text-lg" />,
    label: 'Customer Support Assistance',
  },
];

const returnProcessContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Start Your Return</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Initiate returns within 30 days of delivery</li>
      <li>Generate a free return shipping label online</li>
      <li>Pack items securely and drop off at the nearest carrier location</li>
      <li>Track your return status easily from your account</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      For damaged or incorrect items, please contact support immediately.
    </p>
  </div>
);

const contactSupportContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Contact Support</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Get personalized help with your return or refund</li>
      <li>Reach out via live chat, phone, or email</li>
      <li>Our support team is available 24/7 to assist you</li>
      <li>We ensure quick resolution and customer satisfaction</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Prefer phone? Call us at <a href="tel:+18001234567" className="underline text-yellow-400">1-800-123-4567</a>.
    </p>
  </div>
);

export default function HelpingReturns() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Returns and refunds support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Returns & Refunds
        </h2>
        <p className="text-gray-300">
          Hassle-free returns with free shipping and dedicated support to ensure your satisfaction.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
          {returnsFeatures.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center gap-3 whitespace-nowrap" title={label}>
              {icon}
              {label}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('returnProcess')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'returnProcess'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
            aria-label="Start return process"
          >
            Start Return
          </button>

          <button
            type="button"
            onClick={() => toggleSection('contactSupport')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'contactSupport'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-label="Contact support"
          >
            Contact Support
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-gray-900 border border-gray-700 rounded-xl transition-all duration-300 shadow-lg text-left max-w-md mx-auto">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'returnProcess' && returnProcessContent}
            {activeSection === 'contactSupport' && contactSupportContent}
          </div>
        )}
      </div>
    </section>
  );
}
