import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const PaymentingFooter = () => {
  return (
    <footer
      aria-label="Payment page footer"
      className="bg-white text-gray-700 border-t border-gray-200 mb-[-50px]"
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
        {/* Copyright - always visible */}
        <p className="text-xs sm:text-sm select-none text-center md:text-left order-1 md:order-1">
          &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </p>

        {/* Quick Payment Links - always visible */}
        <nav
          aria-label="Payment quick links"
          className="flex flex-wrap justify-center gap-6 text-sm order-2 md:order-2"
        >
          <a
            href="/account/paymenting/dashboard"
            className="hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Dashboard
          </a>
          <a
            href="/account/paymenting/cards"
            className="hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Payment Methods
          </a>
          <a
            href="/account/paymenting/billing-history"
            className="hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Billing History
          </a>
          <a
            href="/account/paymenting/subscriptions"
            className="hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Subscriptions
          </a>
          <a
            href="/account/paymenting/support"
            className="hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Support
          </a>
        </nav>

        {/* Contact info - visible only on mobile and small tablets */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm order-3 md:hidden">
          <a
            href="mailto:support@yourcompany.com"
            className="flex items-center gap-1 hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            <FiMail className="text-black" />
            <span>support@yourcompany.com</span>
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center gap-1 hover:text-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            <FiPhone className="text-black" />
            <span>+1 (234) 567-890</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PaymentingFooter;
