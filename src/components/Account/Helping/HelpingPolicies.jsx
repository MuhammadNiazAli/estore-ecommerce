'use client';

import React, { useState } from 'react';
import {
  FaRegFileAlt,
  FaLock,
  FaGavel,
  FaTimes,
} from 'react-icons/fa';

const policiesFeatures = [
  {
    icon: <FaRegFileAlt className="text-yellow-400 text-lg" />,
    label: 'Clear Terms & Conditions',
  },
  {
    icon: <FaLock className="text-yellow-400 text-lg" />,
    label: 'Privacy & Security',
  },
  {
    icon: <FaGavel className="text-yellow-400 text-lg" />,
    label: 'Fair Return Policies',
  },
];

const policiesContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Our Policy Overview</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>Terms:</strong> Transparent, easy-to-read terms for safe shopping</li>
      <li><strong>Privacy:</strong> We never sell your data. End-to-end encryption applied</li>
      <li><strong>Returns:</strong> 14-day return window with free label generation</li>
      <li><strong>Refunds:</strong> Issued within 5 business days after item inspection</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">Full documentation is available on our official policies page.</p>
  </div>
);

const supportContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Need Help with Policies?</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Chat with a specialist about returns, terms, or disputes</li>
      <li>Request clarification on specific clauses via email or live chat</li>
      <li>Our legal support team responds within 24 hours</li>
      <li>Use our <span className="text-yellow-400 font-medium">Support Center</span> for live assistance</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">Need urgent help? Call us or use the Live Chat on the bottom right corner.</p>
  </div>
);

export default function HelpingPolicies() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Policies information and support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Our Policies
        </h2>
        <p className="text-gray-300">
          Understand our terms, privacy practices, and return policies to shop with confidence and peace of mind.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
          {policiesFeatures.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center gap-3 whitespace-nowrap" title={label}>
              {icon}
              {label}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('policies')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'policies'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
            aria-label="View policies"
          >
            View Policies
          </button>

          <button
            type="button"
            onClick={() => toggleSection('support')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'support'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-label="Contact support about policies"
          >
            Contact Support
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-gray-900 border border-gray-700 rounded-xl transition-all duration-300 shadow-lg">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'policies' && policiesContent}
            {activeSection === 'support' && supportContent}
          </div>
        )}
      </div>
    </section>
  );
}
