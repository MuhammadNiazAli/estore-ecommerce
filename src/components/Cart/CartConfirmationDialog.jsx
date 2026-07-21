'use client';

import React, { useEffect } from 'react';

const CartConfirmationDialog = ({ isOpen, onConfirm, onCancel }) => {
  // Close on ESC key press
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-[1000]" />

      {/* Modal */}
      <div className="fixed inset-0 flex justify-center items-center px-4 z-[1001]">
        <div className="bg-white rounded-xl max-w-[1000px] w-full p-8 mx-auto shadow-xl text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Confirm Your Purchase
          </h2>
          <p className="mb-6 text-gray-700 text-base sm:text-lg">
            Are you sure you want to complete this purchase? Once confirmed, your order will be processed and cannot be canceled.
          </p>

          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button
              onClick={onCancel}
              className="px-5 py-3 rounded-full border border-gray-200 hover:border-black text-gray-600 hover:text-black transition text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-3 rounded-full bg-black hover:bg-black text-gray-900 font-semibold transition text-sm sm:text-base"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartConfirmationDialog;
