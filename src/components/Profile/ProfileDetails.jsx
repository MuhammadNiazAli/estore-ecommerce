'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  UserCircleIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProfileDetails = () => {
  const [profile, setProfile] = useState({
    fullName: 'Mr. Niaz Ali',
    email: 'niaz@example.com',
    phone: '+31 6 12345678',
    dob: '1995-01-01',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(profile);
  const [formErrors, setFormErrors] = useState({});
  const modalRef = useRef(null);

  // Focus on first input when modal opens
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const firstInput = modalRef.current.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }, [isModalOpen]);

  // Handle input changes
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Simple validation
  const validate = () => {
    const errors = {};
    if (!form.fullName.trim()) errors.fullName = 'Full name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      errors.email = 'Invalid email format';
    if (!form.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^\+?\d[\d\s-]{6,}$/i.test(form.phone))
      errors.phone = 'Invalid phone number';
    if (!form.dob.trim()) errors.dob = 'Date of birth is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Open modal and load current data into form
  const openModal = () => {
    setForm(profile);
    setFormErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormErrors({});
  };

  // On submit, validate and save
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setProfile(form);
    closeModal();
  };

  return (
    <section
      className="w-full bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12 max-w-[1200px] mx-auto rounded-lg"
      aria-label="User profile details"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-1">
            Profile Details
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-md">
            View and manage your personal information and contact details.
          </p>
        </div>
        <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base select-none">
          <UserCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
          <span>Basic Info</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white mb-8" />

      {/* User Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base">
        <div className="space-y-1">
          <p className="text-gray-600">Full Name</p>
          <p className="text-gray-900 font-medium">{profile.fullName}</p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-600">Email Address</p>
          <p className="text-gray-900 font-medium">{profile.email}</p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-600">Phone Number</p>
          <p className="text-gray-900 font-medium">{profile.phone}</p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-600">Date of Birth</p>
          <p className="text-gray-900 font-medium">
            {new Date(profile.dob).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-8 flex justify-center sm:justify-end">
        <button
          onClick={openModal}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base bg-black hover:bg-black text-gray-900 font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-black"
          aria-label="Edit personal details"
          type="button"
        >
          <PencilSquareIcon className="w-6 h-6" />
          Edit Details
        </button>
      </div>

      {/* Modal for Editing */}
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
            aria-labelledby="edit-profile-title"
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
                id="edit-profile-title"
                className="text-2xl font-bold text-black mb-4 select-none"
              >
                Edit Profile Details
              </h3>
              <form onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <label className="block mb-4">
                  <span className="text-black font-semibold">Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.fullName ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="Enter your full name"
                    aria-invalid={!!formErrors.fullName}
                    aria-describedby="error-fullName"
                  />
                  {formErrors.fullName && (
                    <p
                      id="error-fullName"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.fullName}
                    </p>
                  )}
                </label>

                {/* Email */}
                <label className="block mb-4">
                  <span className="text-black font-semibold">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.email ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="Enter your email"
                    aria-invalid={!!formErrors.email}
                    aria-describedby="error-email"
                  />
                  {formErrors.email && (
                    <p
                      id="error-email"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.email}
                    </p>
                  )}
                </label>

                {/* Phone */}
                <label className="block mb-4">
                  <span className="text-black font-semibold">Phone Number</span>
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

                {/* Date of Birth */}
                <label className="block mb-6">
                  <span className="text-black font-semibold">Date of Birth</span>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-white border ${
                      formErrors.dob ? 'border-black' : 'border-black/50'
                    } px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black`}
                    aria-invalid={!!formErrors.dob}
                    aria-describedby="error-dob"
                    max={new Date().toISOString().split('T')[0]}
                  />
                  {formErrors.dob && (
                    <p
                      id="error-dob"
                      className="mt-1 text-xs text-black font-semibold"
                      role="alert"
                    >
                      {formErrors.dob}
                    </p>
                  )}
                </label>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
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
                    Save Changes
                  </button>
                </div>
              </form>

              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close edit profile modal"
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

export default ProfileDetails;
