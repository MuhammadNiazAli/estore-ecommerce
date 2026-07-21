'use client';

import React, { useState } from 'react';
import { FiTrash2, FiAlertTriangle } from 'react-icons/fi';

const SecuritingDeleteAccount = () => {
  const [confirming, setConfirming] = useState(false);

  return (
    <section
      aria-label="Delete your account permanently"
      className="w-full bg-gradient-to-br from-amber-950 via-amber-900 to-amber-900 text-black p-6 rounded-2xl shadow-xl space-y-6"
    >
      <div className="flex items-center gap-3 text-amber-700">
        <FiAlertTriangle className="text-2xl" />
        <h2 className="text-xl font-bold">Delete Account</h2>
      </div>

      <p className="text-sm text-black max-w-md">
        This will permanently delete your account, personal information, and all associated order history. This action is irreversible. Please proceed with caution.
      </p>

      {!confirming ? (
        <button
          type="button"
          onClick={() => setConfirming(true)}
          className="bg-amber-800 hover:bg-amber-700 px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-black flex items-center gap-2"
        >
          <FiTrash2 />
          Delete My Account
        </button>
      ) : (
        <div className="space-y-4 max-w-md">
          <p className="text-sm text-black">
            Are you sure you want to delete your account? This cannot be undone.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-6 py-2 bg-amber-900 hover:bg-amber-800 text-black rounded-full text-sm font-medium transition"
              onClick={() => alert('Account deletion logic triggered')}
            >
              Yes, Delete Permanently
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-white hover:bg-gray-500 text-gray-900 rounded-full text-sm font-medium transition"
              onClick={() => setConfirming(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SecuritingDeleteAccount;
