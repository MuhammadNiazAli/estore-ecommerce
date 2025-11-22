'use client';

import React from 'react';

const WishlistConfirmationModal = ({ 
  isOpen = false, 
  onConfirm, 
  onCancel, 
  message = "Are you sure you want to clear your wishlist?" 
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-modal-title"
      aria-describedby="wishlist-modal-desc"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
    >
      <div className="bg-gray-900 rounded-xl max-w-md w-full p-6 text-yellow-400 shadow-lg animate-fadeIn">
        <div className="flex flex-col items-center gap-4">
          {/* Confirmation Icon */}
          <svg
            className="w-16 h-16 text-yellow-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>

          {/* Title */}
          <h2
            id="wishlist-modal-title"
            className="text-2xl font-bold text-center text-yellow-400"
          >
            Confirm Action
          </h2>

          {/* Message */}
          <p
            id="wishlist-modal-desc"
            className="text-yellow-300 text-center"
          >
            {message}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 w-full">
            <button
              onClick={onCancel}
              className="flex-1 py-2 rounded-md border border-yellow-600 hover:border-yellow-500 text-yellow-300 hover:text-yellow-500 transition font-semibold"
              aria-label="Cancel"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 transition font-semibold text-gray-900"
              aria-label="Confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistConfirmationModal;
