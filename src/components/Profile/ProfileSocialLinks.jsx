'use client';

import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const initialAccounts = [
  {
    id: 1,
    platform: 'Facebook',
    username: 'niaz.ali',
    icon: <FaFacebookF className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    platform: 'Twitter',
    username: '@niazali',
    icon: <FaTwitter className="w-6 h-6 text-sky-400" />,
  },
  {
    id: 3,
    platform: 'Instagram',
    username: '@niaz_insta',
    icon: <FaInstagram className="w-6 h-6 text-pink-500" />,
  },
  {
    id: 4,
    platform: 'LinkedIn',
    username: 'niaz-ali',
    icon: <FaLinkedinIn className="w-6 h-6 text-blue-700" />,
  },
];

const ProfileSocialLinks = () => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [editingId, setEditingId] = useState(null);
  const [editedUsername, setEditedUsername] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const handleEdit = (id, currentUsername) => {
    setEditingId(id);
    setEditedUsername(currentUsername);
  };

  const handleSave = (id) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id ? { ...acc, username: editedUsername } : acc
      )
    );
    setEditingId(null);
  };

  const handleDelete = () => {
    setAccounts((prev) => prev.filter((acc) => acc.id !== deletingId));
    setDeletingId(null);
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10 sm:py-14">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1">
              Social Links
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-md">
              Manage and customize your connected social media accounts.
            </p>
          </div>
          <div className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base">
            <PencilSquareIcon className="w-6 h-6 animate-pulse" />
            <span>Manage Connections</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-6" />

        {/* Social Accounts */}
        <div className="space-y-6">
          <AnimatePresence>
            {accounts.map(({ id, platform, username, icon }) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md"
              >
                <div className="flex items-center gap-4">
                  {icon}
                  <div>
                    <p className="text-gray-900 font-semibold text-lg">
                      {platform}
                    </p>
                    {editingId === id ? (
                      <input
                        type="text"
                        className="mt-1 bg-white text-gray-900 border border-amber-700 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm w-full sm:w-[200px]"
                        value={editedUsername}
                        onChange={(e) => setEditedUsername(e.target.value)}
                      />
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base">
                        {username}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {editingId === id ? (
                    <>
                      <button
                        onClick={() => handleSave(id)}
                        className="p-2 bg-green-600 text-gray-900 rounded-full hover:bg-green-700 transition"
                        aria-label="Save"
                      >
                        <CheckIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition"
                        aria-label="Cancel"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(id, username)}
                        className="p-2 rounded-full hover:bg-amber-600 hover:text-gray-900 transition"
                        aria-label={`Edit ${platform}`}
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setDeletingId(id)}
                        className="p-2 rounded-full hover:bg-red-600 hover:text-gray-900 transition"
                        aria-label={`Delete ${platform}`}
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deletingId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-xl p-6 w-[90%] max-w-md text-gray-900 shadow-2xl"
              >
                <h3 className="text-xl font-bold mb-4 text-red-500">
                  Confirm Deletion
                </h3>
                <p className="text-gray-700 mb-6">
                  Are you sure you want to remove this social account?
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setDeletingId(null)}
                    className="px-4 py-2 rounded-md bg-white hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-gray-900 transition"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProfileSocialLinks;
