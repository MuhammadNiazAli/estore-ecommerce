'use client';

import React, { useState } from 'react';
import {
  FiUser,
  FiFileText,
  FiCreditCard,
  FiDollarSign,
  FiPlus,
  FiShield,
  FiMapPin,
  FiSettings,
  FiLock,
  FiInbox,
  FiPhone,
} from 'react-icons/fi';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import { PiArrowArcLeft } from 'react-icons/pi';
import Link from 'next/link';

const sidebarSections = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', href: '/account/paymenting/dashboard', icon: <FiUser /> },
      { label: 'Activity Log', href: '/account/paymenting/activity', icon: <FiFileText /> },
    ],
  },
  {
    title: 'Payment Methods',
    items: [
      { label: 'Manage Cards', href: '/account/paymenting/cards', icon: <FiCreditCard /> },
      { label: 'Bank Accounts', href: '/account/paymenting/banks', icon: <FiDollarSign /> },
      { label: 'Add New Method', href: '/account/paymenting/new', icon: <FiPlus /> },
    ],
  },
  {
    title: 'Security & Billing',
    items: [
      { label: '2FA Setup', href: '/account/paymenting/2fa', icon: <FiShield /> },
      { label: 'Billing Address', href: '/account/paymenting/billing-address', icon: <FiMapPin /> },
      { label: 'Billing History', href: '/account/paymenting/billing-history', icon: <FiFileText /> },
    ],
  },
  {
    title: 'Subscriptions',
    items: [
      { label: 'Your Plans', href: '/account/paymenting/subscriptions', icon: <FiSettings /> },
      { label: 'Upgrade Plan', href: '/account/paymenting/upgrade', icon: <FaChevronLeft /> },
      { label: 'Pause/Cancel', href: '/account/paymenting/pause-cancel', icon: <FiLock /> },
    ],
  },
  {
    title: 'Invoices & Reports',
    items: [
      { label: 'Download Invoices', href: '/account/paymenting/invoices', icon: <FiFileText /> },
      { label: 'Tax Settings', href: '/account/paymenting/tax', icon: <FiDollarSign /> },
      { label: 'Spending Report', href: '/account/paymenting/report', icon: <FiInbox /> },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { label: 'Currency Settings', href: '/account/paymenting/currency', icon: <FiDollarSign /> },
      { label: 'Payment Reminders', href: '/account/paymenting/reminders', icon: <FiSettings /> },
      { label: 'Saved Coupons', href: '/account/paymenting/coupons', icon: <FiInbox /> },
    ],
  },
  {
    title: 'Help & Support',
    items: [
      { label: 'Contact Support', href: '/account/paymenting/support', icon: <FiPhone /> },
      { label: 'FAQs', href: '/account/paymenting/faq', icon: <FiFileText /> },
      { label: 'Disputes', href: '/account/paymenting/disputes', icon: <FiShield /> },
    ],
  },
];

const PaymentingSidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderSections = () => (
    <div className="space-y-10">
      {sidebarSections.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-4">
            {section.title}
          </h3>
          <ul className="space-y-4">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-500 transition-all group"
                >
                  <span className="text-amber-600">{item.icon}</span>
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button on Right Side */}
      <button
        onClick={() => setMobileOpen(true)}
        className={`md:hidden fixed top-24 right-0 z-[1000] bg-white text-gray-900 p-3 rounded-tl-xl rounded-bl-xl shadow-lg
          flex items-center justify-center
          ${mobileOpen ? 'hidden' : 'flex'}`}
        style={{ width: '48px', height: '56px' }}
        aria-label="Open payments sidebar"
        title="Open payments sidebar"
      >
        <PiArrowArcLeft size={22} />
      </button>

      {/* Mobile Drawer sliding in from right */}
      <div
        className={`md:hidden fixed inset-0 z-[1100] h-screen bg-white/50 backdrop-blur-md px-4 py-6 overflow-auto
          transition-opacity duration-300 ease-in-out
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className={`bg-white text-gray-900 rounded-xl p-6 shadow-lg w-full max-w-sm mx-auto
            transform transition-transform duration-300 ease-in-out
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ marginLeft: 'auto' }}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-amber-600 hover:text-amber-500"
              aria-label="Close payments sidebar"
              title="Close payments sidebar"
            >
              <FaTimes size={22} />
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Payments Center</h2>
          <div className="custom-scrollbar max-h-[calc(100vh-160px)] overflow-y-auto pr-1">
            {renderSections()}
          </div>
        </div>
      </div>

      {/* Scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #ffffff;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #ffffff; /* Dark golden shade */
          border-radius: 4px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ffffff #ffffff;
        }
      `}</style>
    </>
  );
};

export default PaymentingSidebar;
