'use client';

import React, { useState } from 'react';
import { FaShippingFast, FaWarehouse, FaReceipt, FaTimes } from 'react-icons/fa';

const ordersHelpFeatures = [
  {
    icon: <FaShippingFast className="text-black text-base" />,
    label: 'Track Your Orders Easily',
  },
  {
    icon: <FaWarehouse className="text-black text-base" />,
    label: 'Fast & Reliable Shipping',
  },
  {
    icon: <FaReceipt className="text-black text-base" />,
    label: 'Order History & Invoices',
  },
];

const trackOrderContent = (
  <div className="text-left text-sm text-gray-700 space-y-3">
    <h3 className="text-xl font-semibold text-black">Track Your Order</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Enter your order number and email to view status</li>
      <li>See real-time tracking updates for shipping progress</li>
      <li>Estimated delivery windows are shown per courier</li>
      <li>Delayed? Contact support directly from the tracker</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">
      Tracking is available for all shipped orders in your account dashboard.
    </p>
  </div>
);

const orderHistoryContent = (
  <div className="text-left text-sm text-gray-700 space-y-3">
    <h3 className="text-xl font-semibold text-black">View Order History</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Access your full order list and downloadable invoices</li>
      <li>Reorder past purchases in one click</li>
      <li>Filter orders by status: Delivered, Canceled, or Processing</li>
      <li>Invoices and delivery slips available in PDF format</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">
      You must be signed in to view order history and print receipts.
    </p>
  </div>
);

export default function HelpingOrders() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Order help and support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">
          Order Assistance
        </h2>
        <p className="text-gray-700">
          Manage your orders with ease. Track shipments, view invoices, and get support whenever needed.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600 font-medium text-sm">
          {ordersHelpFeatures.map(({ icon, label }, idx) => (
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

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('track')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'track'
                ? 'bg-black text-black ring-black'
                : 'bg-black text-black hover:bg-black'
            }`}
            aria-label="Track your order"
          >
            Track Order
          </button>

          <button
            type="button"
            onClick={() => toggleSection('history')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'history'
                ? 'bg-white text-black ring-gray-200'
                : 'border-gray-200 text-gray-900 hover:bg-gray-500 hover:text-black'
            }`}
            aria-label="View order history"
          >
            Order History
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
            {activeSection === 'track' && trackOrderContent}
            {activeSection === 'history' && orderHistoryContent}
          </div>
        )}
      </div>
    </section>
  );
}
