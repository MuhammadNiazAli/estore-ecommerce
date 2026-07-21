'use client';

import React, { useState } from 'react';
import {
  CreditCardIcon,
  PlusCircleIcon,
  TrashIcon,
  XMarkIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

const initialCards = [
  {
    id: 1,
    cardType: 'Visa',
    cardNumber: '**** **** **** 1234',
    expiry: '12/25',
    isDefault: true,
  },
  {
    id: 2,
    cardType: 'Mastercard',
    cardNumber: '**** **** **** 5678',
    expiry: '08/24',
    isDefault: false,
  },
];

const ProfilePaymentMethods = () => {
  const [cards, setCards] = useState(initialCards);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({ cardType: '', cardNumber: '', expiry: '' });

  const handleAddCard = () => {
    if (!formData.cardType || !formData.cardNumber || !formData.expiry) return;

    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...formData,
        isDefault: false,
        cardNumber: `**** **** **** ${formData.cardNumber.slice(-4)}`,
      },
    ]);
    setFormData({ cardType: '', cardNumber: '', expiry: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
    setDeleteId(null);
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10 sm:py-14 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1">
              Payment Methods
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-md">
              Securely manage your credit and debit cards.
            </p>
          </div>
          <div className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base">
            <ShieldCheckIcon className="w-6 h-6 animate-pulse" />
            <span>Protected by Encryption</span>
          </div>
        </div>

        <div className="w-full h-px bg-white my-6" />

        {/* Payment Cards */}
        <div className="space-y-6">
          {cards.map(({ id, cardType, cardNumber, expiry, isDefault }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`bg-white rounded-xl p-5 flex justify-between items-center shadow-md border ${
                isDefault ? 'border-amber-600' : 'border-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <CreditCardIcon className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-semibold text-lg">
                    {cardType}{' '}
                    {isDefault && <span className="text-amber-600">(Default)</span>}
                  </p>
                  <p className="text-gray-600 text-sm">{cardNumber}</p>
                  <p className="text-gray-600 text-sm">Expires {expiry}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDeleteId(id)}
                className="p-2 rounded-full hover:bg-red-600 transition"
              >
                <TrashIcon className="w-6 h-6 text-red-500" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add New Button */}
        <div className="mt-8 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold shadow-lg transition"
          >
            <PlusCircleIcon className="w-6 h-6" />
            Add New Method
          </button>
        </div>
      </div>

      {/* Add Card Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur flex items-center justify-center px-4"
          >
            <div className="bg-white rounded-xl p-6 w-full max-w-md text-gray-900 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                onClick={() => setShowForm(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-bold mb-4">Add New Payment Method</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Type (Visa, Mastercard)"
                  value={formData.cardType}
                  onChange={(e) => setFormData({ ...formData, cardType: e.target.value })}
                  className="w-full border px-4 py-2 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Card Number (e.g., 1234567812345678)"
                  maxLength={16}
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full border px-4 py-2 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  maxLength={5}
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                  className="w-full border px-4 py-2 rounded text-sm"
                />
                <button
                  onClick={handleAddCard}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold py-2 rounded mt-2"
                >
                  Save Card
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm Delete Overlay */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur flex items-center justify-center px-4"
          >
            <div className="bg-white rounded-xl p-6 w-full max-w-sm text-gray-900">
              <h3 className="text-lg font-bold mb-4">Remove Card?</h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to remove this payment method? You can’t undo this.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-gray-900 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfilePaymentMethods;
