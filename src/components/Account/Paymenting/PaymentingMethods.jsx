'use client';

import React, { useState } from 'react';
import {
  FiCreditCard,
  FiPhone,
  FiShield,
  FiClock,
} from 'react-icons/fi';
import PaymentingMethodItem from './PaymentingMethodItem';

const paymentOptions = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    description: 'Visa, MasterCard, AMEX, Discover',
    features: [
      {
        icon: <FiShield className="text-blue-500" aria-hidden="true" />,
        text: 'Secure encrypted transactions',
      },
      {
        icon: <FiClock className="text-green-500" aria-hidden="true" />,
        text: 'Instant approval',
      },
    ],
    icon: <FiCreditCard className="text-indigo-600" size={28} aria-hidden="true" />,
  },
  {
    id: 'mobile-pay',
    name: 'Mobile Pay',
    description: 'Apple Pay, Google Pay, Samsung Pay',
    features: [
      {
        icon: <FiShield className="text-blue-500" aria-hidden="true" />,
        text: 'Tokenized payment security',
      },
      {
        icon: <FiClock className="text-green-500" aria-hidden="true" />,
        text: 'Fast checkout with one tap',
      },
    ],
    icon: <FiPhone className="text-indigo-600" size={28} aria-hidden="true" />,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Secure online payments worldwide',
    features: [
      {
        icon: <FiShield className="text-blue-500" aria-hidden="true" />,
        text: 'Buyer protection',
      },
      {
        icon: <FiClock className="text-green-500" aria-hidden="true" />,
        text: 'No need to enter card details',
      },
    ],
    icon: <FiCreditCard className="text-indigo-600" size={28} aria-hidden="true" />,
  },
];

const PaymentingMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState(paymentOptions[0].id);

  return (
    <section
      aria-label="Select payment method"
      className="max-w-lg mx-auto px-6 py-8 bg-gray-900 rounded-xl border border-gray-700 space-y-6 shadow-lg"
    >
      <header>
        <h2 className="text-2xl font-semibold text-white leading-tight">
          Choose Your Payment Method
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-md">
          Select the payment method you prefer to complete your purchase securely.
        </p>
      </header>

      <div role="list" className="space-y-5">
        {paymentOptions.map((option) => (
          <PaymentingMethodItem
            key={option.id}
            id={option.id}
            name={option.name}
            description={option.description}
            icon={option.icon}
            features={option.features}
            selected={selectedMethod === option.id}
            onSelect={setSelectedMethod}
          />
        ))}
      </div>
    </section>
  );
};

export default PaymentingMethods;
