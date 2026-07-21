'use client';

import React, { useState } from 'react';
import { FaHandsHelping, FaUserShield, FaEnvelopeOpenText, FaTimes } from 'react-icons/fa';

const accountHelpFeatures = [
  {
    icon: <FaUserShield className="text-black text-base" />,
    label: 'Secure Account Management',
  },
  {
    icon: <FaEnvelopeOpenText className="text-black text-base" />,
    label: 'Update Contact Information',
  },
  {
    icon: <FaHandsHelping className="text-black text-base" />,
    label: 'Support for Account Issues',
  },
];

const accountSettingsContent = (
  <div className="text-center text-xs text-gray-700 space-y-3">
    <h3 className="text-lg font-semibold text-black">Account Settings Guide</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Change your password securely.</li>
      <li>Update your email, phone number, or username.</li>
      <li>Enable 2-factor authentication for extra protection.</li>
      <li>Manage login activity across devices.</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">Need further assistance? Use the support button below.</p>
  </div>
);

const contactSupportContent = (
  <div className="text-center text-xs text-gray-700 space-y-3">
    <h3 className="text-lg font-semibold text-black">Contact Support</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Describe your issue clearly for faster assistance.</li>
      <li>Include screenshots or error codes if applicable.</li>
      <li>Response time is typically within 24 hours.</li>
      <li>Support is available 24/7 via email or live chat.</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">We’re here to help you resolve account-related issues quickly.</p>
  </div>
);

export default function HelpingAccount() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionToggle = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Account help and support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">
          Account Support Center
        </h2>
        <p className="text-gray-700 max-w-md mx-auto text-sm">
          Manage your account with confidence. Update your details, secure your profile, and get help anytime you need it.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600 font-medium text-xs max-w-md mx-auto">
          {accountHelpFeatures.map(({ icon, label }, idx) => (
            <li
              key={idx}
              className="flex items-center justify-center gap-2 whitespace-nowrap"
              title={label}
            >
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => handleSectionToggle('settings')}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'settings'
                ? 'bg-black text-black ring-black'
                : 'bg-black text-black hover:bg-black'
            } text-sm`}
            aria-label="Toggle account settings section"
          >
            Account Settings
          </button>
          <button
            type="button"
            onClick={() => handleSectionToggle('support')}
            className={`px-6 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'support'
                ? 'bg-white text-black ring-gray-200'
                : 'border-gray-200 text-gray-900 hover:bg-gray-500 hover:text-black'
            } text-sm`}
            aria-label="Toggle contact support section"
          >
            Contact Support
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 shadow-lg">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'settings' && accountSettingsContent}
            {activeSection === 'support' && contactSupportContent}
          </div>
        )}
      </div>
    </section>
  );
}
