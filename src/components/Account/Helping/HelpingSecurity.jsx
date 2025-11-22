'use client';

import React, { useState } from 'react';
import { FaLockOpen, FaUserLock, FaEyeSlash, FaTimes } from 'react-icons/fa';

const securityFeatures = [
  {
    icon: <FaLockOpen className="text-yellow-400 text-lg" />,
    label: 'Advanced Protection',
  },
  {
    icon: <FaUserLock className="text-yellow-400 text-lg" />,
    label: 'Secure Login & 2FA',
  },
  {
    icon: <FaEyeSlash className="text-yellow-400 text-lg" />,
    label: 'Biometric Authentication',
  },
];

const manageSecurityContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Manage Your Security Settings</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Enable Two-Factor Authentication (2FA) for added login security</li>
      <li>Set up biometric login such as fingerprint or facial recognition</li>
      <li>Review and manage active sessions and connected devices</li>
      <li>Update your password regularly and use strong, unique passwords</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Visit your <span className="text-yellow-400">Security Settings</span> page to configure these options.
    </p>
  </div>
);

const learnMoreContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Learn More About Account Security</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Understand how 2FA protects your account from unauthorized access</li>
      <li>Benefits of biometric authentication for seamless and secure login</li>
      <li>Tips to recognize phishing and suspicious activities</li>
      <li>How we safeguard your data with encryption and privacy measures</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Read our full <a href="/security" className="underline text-yellow-400">Security Guide</a> for detailed information.
    </p>
  </div>
);

export default function HelpingSecurity() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Security support and information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Account Security
        </h2>
        <p className="text-gray-300">
          Protect your account with our advanced security features including two-factor authentication and biometric login.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
          {securityFeatures.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center gap-3 whitespace-nowrap" title={label}>
              {icon}
              {label}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('manageSecurity')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'manageSecurity'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
            aria-label="Manage security settings"
          >
            Manage Security
          </button>

          <button
            type="button"
            onClick={() => toggleSection('learnMore')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'learnMore'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-label="Learn more about security"
          >
            Learn More
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
            {activeSection === 'manageSecurity' && manageSecurityContent}
            {activeSection === 'learnMore' && learnMoreContent}
          </div>
        )}
      </div>
    </section>
  );
}
