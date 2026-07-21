'use client';

import React, { useState } from 'react';
import { FiShield, FiKey, FiSmartphone } from 'react-icons/fi';

const Securiting2FA = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <section
      aria-label="Two-Factor Authentication settings"
      className="w-full bg-white text-black p-6 rounded-2xl shadow-lg space-y-6"
    >
      <div className="flex items-center gap-3 text-black">
        <FiShield className="text-2xl" />
        <h2 className="text-xl font-bold">Two-Factor Authentication (2FA)</h2>
      </div>

      <p className="text-sm text-black max-w-md">
        Add an extra layer of security to your account by enabling 2FA. You’ll be required to enter a verification code in addition to your password when signing in.
      </p>

      {/* Toggle Section */}
      <div className="flex items-center justify-between bg-white border border-black rounded-xl px-4 py-4">
        <div className="flex items-center gap-3">
          <FiSmartphone className="text-xl text-black" />
          <span className="text-sm font-medium">
            {enabled ? '2FA is currently enabled' : '2FA is currently disabled'}
          </span>
        </div>

        <button
          onClick={() => setEnabled(!enabled)}
          className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
            enabled
              ? 'bg-black hover:bg-black text-black'
              : 'bg-black hover:bg-black text-black'
          }`}
        >
          {enabled ? 'Disable 2FA' : 'Enable 2FA'}
        </button>
      </div>

      {/* QR / Setup Instructions Placeholder */}
      {enabled && (
        <div className="bg-white border border-black p-5 rounded-xl space-y-4">
          <h3 className="text-sm font-bold text-black flex items-center gap-2">
            <FiKey /> Set up 2FA with Authenticator App
          </h3>
          <p className="text-xs text-black">
            Scan this QR code with Google Authenticator or Authy. Then enter the 6-digit code below.
          </p>

          {/* QR Placeholder */}
          <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center text-black text-sm">
            QR Code
          </div>

          {/* Code Input */}
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit code"
            className="w-40 mt-2 px-4 py-2 rounded-lg bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            className="block mt-3 px-6 py-2 bg-black hover:bg-black text-black font-semibold rounded-full transition"
          >
            Verify & Activate
          </button>
        </div>
      )}
    </section>
  );
};

export default Securiting2FA;
