'use client';

import React, { useState } from 'react';
import { FiShield, FiKey, FiSmartphone } from 'react-icons/fi';

const Securiting2FA = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <section
      aria-label="Two-Factor Authentication settings"
      className="w-full bg-gray-900 text-yellow-400 p-6 rounded-2xl shadow-lg space-y-6"
    >
      <div className="flex items-center gap-3 text-yellow-400">
        <FiShield className="text-2xl" />
        <h2 className="text-xl font-bold">Two-Factor Authentication (2FA)</h2>
      </div>

      <p className="text-sm text-yellow-300 max-w-md">
        Add an extra layer of security to your account by enabling 2FA. You’ll be required to enter a verification code in addition to your password when signing in.
      </p>

      {/* Toggle Section */}
      <div className="flex items-center justify-between bg-gray-800 border border-yellow-700 rounded-xl px-4 py-4">
        <div className="flex items-center gap-3">
          <FiSmartphone className="text-xl text-yellow-400" />
          <span className="text-sm font-medium">
            {enabled ? '2FA is currently enabled' : '2FA is currently disabled'}
          </span>
        </div>

        <button
          onClick={() => setEnabled(!enabled)}
          className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
            enabled
              ? 'bg-yellow-700 hover:bg-yellow-600 text-black'
              : 'bg-yellow-400 hover:bg-yellow-300 text-black'
          }`}
        >
          {enabled ? 'Disable 2FA' : 'Enable 2FA'}
        </button>
      </div>

      {/* QR / Setup Instructions Placeholder */}
      {enabled && (
        <div className="bg-gray-800 border border-yellow-700 p-5 rounded-xl space-y-4">
          <h3 className="text-sm font-bold text-yellow-300 flex items-center gap-2">
            <FiKey /> Set up 2FA with Authenticator App
          </h3>
          <p className="text-xs text-yellow-300">
            Scan this QR code with Google Authenticator or Authy. Then enter the 6-digit code below.
          </p>

          {/* QR Placeholder */}
          <div className="w-32 h-32 bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-500 text-sm">
            QR Code
          </div>

          {/* Code Input */}
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit code"
            className="w-40 mt-2 px-4 py-2 rounded-lg bg-gray-900 text-yellow-400 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            className="block mt-3 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full transition"
          >
            Verify & Activate
          </button>
        </div>
      )}
    </section>
  );
};

export default Securiting2FA;
