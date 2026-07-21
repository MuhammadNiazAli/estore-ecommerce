'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MapPinIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const initialAddresses = [
  {
    id: 1,
    title: 'Home',
    name: 'Mr. Niaz Ali',
    address: '123 Main Street, Amsterdam, Netherlands',
    phone: '+31 6 12345678',
  },
  {
    id: 2,
    title: 'Office',
    name: 'Mr. Niaz Ali',
    address: '456 Business Ave, Rotterdam, Netherlands',
    phone: '+31 6 87654321',
  },
];

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProfileAddresses = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [form, setForm] = useState({
    title: '',
    name: '',
    address: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(null);

  const modalRef = useRef(null);

  // Focus first input when modal opens
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const firstInput = modalRef.current.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }, [isModalOpen]);

  // Handle form input change
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Basic form validation
  const validate = () => {
    const errors = {};
    if (!form.title.trim()) errors.title = 'Title is required';
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.address.trim()) errors.address = 'Address is required';
    if (!form.phone.trim()) errors.phone = 'Phone is required';
    else if (!/^\+?\d[\d\s-]{6,}$/i.test(form.phone))
      errors.phone = 'Phone number is invalid';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Open modal for adding or editing
  const openModal = (address = null) => {
    if (address) {
      setEditingAddress(address);
      setForm({
        title: address.title,
        name: address.name,
        address: address.address,
        phone: address.phone,
      });
    } else {
      setEditingAddress(null);
      setForm({ title: '', name: '', address: '', phone: '' });
    }
    setFormErrors({});
    setIsModalOpen(true);
  };

  // Close modal and reset form
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAddress(null);
    setFormErrors({});
  };

  // Handle form submit (add or edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingAddress) {
      // Edit existing
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddress.id ? { ...editingAddress, ...form } : addr
        )
      );
    } else {
      // Add new
      const newAddress = {
        id: Date.now(),
        ...form,
      };
      setAddresses((prev) => [newAddress, ...prev]);
    }
    closeModal();
  };

  // Confirm delete address
  const confirmDeleteAddress = (id) => {
    setConfirmDelete(id);
  };

  // Cancel delete confirmation
  const cancelDelete = () => {
    setConfirmDelete(null);
  };

  // Delete address
  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    setConfirmDelete(null);
  };

  return (
    <section
      className="w-full bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12 rounded-lg max-w-[1200px] mx-auto"
      aria-label="Manage your addresses"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-1">
            Your Addresses
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-md">
            Manage your shipping and billing addresses for faster checkout.
          </p>
        </div>
        <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base select-none">
          <MapPinIcon className="w-6 h-6 sm:w-7 sm:h-7 animate-ping-slow" />
          <span>{addresses.length} saved address{addresses.length !== 1 ? 'es' : ''}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white mb-8" />

      {/* Addresses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <motion.div
            key={addr.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white p-5 rounded-lg shadow-inner relative group"
          >
            <p className="text-black font-semibold text-lg">{addr.title}</p>
            <p className="text-gray-900 mt-1 font-medium">{addr.name}</p>
            <p className="text-gray-700 mt-1">{addr.address}</p>
            <p className="text-gray-600 mt-1">{addr.phone}</p>

            {/* Edit/Delete Buttons, visible on hover */}
            <div
              className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Actions for address titled ${addr.title}`}
            >
              <button
                onClick={() => openModal(addr)}
                aria-label={`Edit address titled ${addr.title}`}
                className="p-1 rounded-full hover:bg-black hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-black"
                type="button"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              {confirmDelete === addr.id ? (
                <>
                  <button
                    onClick={() => deleteAddress(addr.id)}
                    aria-label={`Confirm delete address titled ${addr.title}`}
                    className="p-1 rounded-full bg-black text-gray-900 hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-black"
                    type="button"
                  >
                    Yes
                  </button>
                  <button
                    onClick={cancelDelete}
                    aria-label="Cancel delete address"
                    className="p-1 rounded-full bg-white text-black hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-black"
                    type="button"
                  >
                    No
                  </button>
                </>
              ) : (
                <button
                  onClick={() => confirmDeleteAddress(addr.id)}
                  aria-label={`Delete address titled ${addr.title}`}
                  className="p-1 rounded-full hover:bg-black hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-black"
                  type="button"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Address Button */}
      <div className="mt-8 flex justify-center sm:justify-end">
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base bg-black hover:bg-black text-gray-900 font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-black"
          aria-label="Add new address"
          type="button"
        >
          <PlusIcon className="w-6 h-6" />
          Add New Address
        </button>
      </div>

      {/* Modal for Add/Edit Address */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50 px-4"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            tabIndex={-1}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-lg w-full p-6 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              ref={modalRef}
            >
              <h3
                id="modal-title"
                className="text-2xl font-bold text-black mb-4 select-none"
              >
                {editingAddress ? 'Edit Address' : 'Add New Address'}
              </h3>
              <form onSubmit={handleSubmit} noValidate>
                {/* Title */}
                <label className="block mb-3">
                  <span className="text-black font-semibold">Title</span>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.title ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="e.g. Home, Office"
                    aria-invalid={!!formErrors.title}
                    aria-describedby="error-title"
                  />
                  {formErrors.title && (
                    <p
                      id="error-title"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.title}
                    </p>
                  )}
                </label>

                {/* Name */}
                <label className="block mb-3">
                  <span className="text-black font-semibold">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.name ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="Full name"
                    aria-invalid={!!formErrors.name}
                    aria-describedby="error-name"
                  />
                  {formErrors.name && (
                    <p
                      id="error-name"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.name}
                    </p>
                  )}
                </label>

                {/* Address */}
                <label className="block mb-3">
                  <span className="text-black font-semibold">Address</span>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows={3}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.address ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-none`}
                    placeholder="Street, city, country"
                    aria-invalid={!!formErrors.address}
                    aria-describedby="error-address"
                  />
                  {formErrors.address && (
                    <p
                      id="error-address"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.address}
                    </p>
                  )}
                </label>

                {/* Phone */}
                <label className="block mb-6">
                  <span className="text-black font-semibold">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.phone ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="+31 6 12345678"
                    aria-invalid={!!formErrors.phone}
                    aria-describedby="error-phone"
                  />
                  {formErrors.phone && (
                    <p
                      id="error-phone"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.phone}
                    </p>
                  )}
                </label>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-black text-gray-900 font-semibold hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    {editingAddress ? 'Save Changes' : 'Add Address'}
                  </button>
                </div>
              </form>

              {/* Close Modal Button */}
              <button
                onClick={closeModal}
                aria-label="Close address form"
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-black hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-black"
                type="button"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfileAddresses;
