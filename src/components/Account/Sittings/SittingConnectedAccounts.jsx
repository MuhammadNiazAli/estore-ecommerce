'use client';

import React, { useState } from 'react';
import { FiGithub, FiFacebook, FiLink, FiX } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const connectedAccountsData = [
  {
    id: 'google',
    name: 'Google',
    icon: <FaGoogle className="text-yellow-500" aria-hidden="true" />,
    connected: true,
    email: 'niaz.ali@gmail.com',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <FiGithub className="text-yellow-300" aria-hidden="true" />,
    connected: false,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <FiFacebook className="text-yellow-400" aria-hidden="true" />,
    connected: true,
    email: 'niaz.ali@facebook.com',
  },
];

const SittingConnectedAccounts = () => {
  const [accounts, setAccounts] = useState(connectedAccountsData);
  const [unlinkingId, setUnlinkingId] = useState(null);

  const unlinkAccount = (id) => {
    // Confirmation handled separately
    setUnlinkingId(id);
  };

  const confirmUnlink = () => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === unlinkingId ? { ...acc, connected: false } : acc
      )
    );
    setUnlinkingId(null);
  };

  const cancelUnlink = () => setUnlinkingId(null);

  return (
    <>
      <section
        aria-label="Connected accounts"
        className="w-full max-w-[900px] mx-auto bg-gray-800 text-white p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-bold mb-6">Connected Accounts</h2>

        <ul className="space-y-4" role="list">
          <AnimatePresence>
            {accounts.map(({ id, name, icon, connected, email }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-900 rounded-lg px-4 py-3 border border-gray-700"
                role="listitem"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="text-2xl flex-shrink-0">{icon}</div>
                  <div className="min-w-0">
                    <p className="font-semibold">{name}</p>
                    {connected && email ? (
                      <p
                        className="text-sm text-yellow-300 truncate max-w-xs"
                        title={email}
                      >
                        {email}
                      </p>
                    ) : (
                      <p className="text-sm text-yellow-500 font-medium">Not connected</p>
                    )}
                  </div>
                </div>

                {connected ? (
                  <button
                    onClick={() => unlinkAccount(id)}
                    className="mt-3 sm:mt-0 flex items-center gap-1 text-yellow-500 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 rounded transition"
                    aria-label={`Unlink ${name} account`}
                    type="button"
                  >
                    <FiX />
                    <span className="text-sm font-medium">Unlink</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-3 sm:mt-0 flex items-center gap-1 text-yellow-700 text-sm cursor-not-allowed select-none"
                    aria-label={`${name} account not connected`}
                    title="Connect feature coming soon"
                    type="button"
                  >
                    <FiLink />
                    <span>Connect</span>
                  </button>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>

      {/* Confirm Unlink Modal */}
      {unlinkingId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-dialog-title"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4"
        >
          <div className="bg-gray-900 rounded-lg p-6 max-w-sm w-full text-white shadow-xl">
            <h3
              id="confirm-dialog-title"
              className="text-lg font-semibold mb-4"
            >
              Confirm Unlink
            </h3>
            <p className="mb-6">
              Are you sure you want to unlink your{' '}
              <span className="font-medium text-yellow-400">
                {accounts.find((acc) => acc.id === unlinkingId)?.name}
              </span>{' '}
              account? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelUnlink}
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmUnlink}
                className="px-4 py-2 rounded bg-yellow-600 hover:bg-yellow-700 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Unlink
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SittingConnectedAccounts;
