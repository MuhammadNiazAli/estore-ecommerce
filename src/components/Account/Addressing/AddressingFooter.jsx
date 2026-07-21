'use client';

import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const AddressingFooter = ({ onAddNewClick }) => {
  return (
    <footer className="w-full bg-gradient-to-tr from-white via-white to-white text-gray-700 py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-gray-900 text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-black" />
              <a href="tel:+1234567890" className="hover:text-black transition">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-black" />
              <a href="mailto:support@example.com" className="hover:text-black transition">
                support@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-black" />
              <address className="not-italic">
                123 Delivery St., Cityville, Country
              </address>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-black transition">
                Manage Addresses
              </a>
            </li>
            <li>
              <button
                onClick={onAddNewClick}
                className="hover:text-black transition text-left w-full"
              >
                Add New Address
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Delivery FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Shipping Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-gray-900 text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6 text-black text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default AddressingFooter;
