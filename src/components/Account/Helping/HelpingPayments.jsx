'use client';

import React, { useState } from 'react';
import { FaMoneyBillWave, FaLock, FaUserShield, FaTimes } from 'react-icons/fa';

const paymentsHelpFeatures = [
  {
    icon: <FaMoneyBillWave className="text-yellow-400 text-lg" />,
    label: 'Multiple Payment Methods',
  },
  {
    icon: <FaLock className="text-yellow-400 text-lg" />,
    label: 'Secure Transactions',
  },
  {
    icon: <FaUserShield className="text-yellow-400 text-lg" />,
    label: 'Fraud Protection & Safety',
  },
];

const managePaymentsContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Manage Your Payments</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Add or remove cards, wallets, and saved methods</li>
      <li>Set a default payment option for faster checkout</li>
      <li>Review past payment activity for each order</li>
      <li>Enable two-factor for payment confirmations</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      All payment changes are securely encrypted and require account authentication.
    </p>
  </div>
);

const learnMoreContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">Secure Payment Options</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>We support Visa, MasterCard, Amex, PayPal, Apple Pay, Google Pay, and more</li>
      <li>Our platform is PCI-DSS compliant and tokenized</li>
      <li>Real-time fraud detection ensures secure purchases</li>
      <li>We never store full card numbers or sensitive info</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Learn more about how we protect your transactions in our Security Center.
    </p>
  </div>
);

export default function HelpingPayments() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Payments help and support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Payment Support
        </h2>
        <p className="text-gray-300">
          Learn about our flexible and secure payment options designed to keep your purchases safe and hassle-free.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
          {paymentsHelpFeatures.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center gap-3 whitespace-nowrap" title={label}>
              {icon}
              {label}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('manage')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'manage'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
            aria-label="Toggle manage payments section"
          >
            Manage Payments
          </button>

          <button
            type="button"
            onClick={() => toggleSection('learn')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'learn'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-label="Toggle learn more about payments"
          >
            Learn More
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
            {activeSection === 'manage' && managePaymentsContent}
            {activeSection === 'learn' && learnMoreContent}
          </div>
        )}
      </div>
    </section>
  );
}
