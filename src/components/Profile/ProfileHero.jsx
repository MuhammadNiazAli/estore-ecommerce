'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  UserIcon,
  IdentificationIcon,
  TruckIcon,
  HeartIcon,
  CreditCardIcon,
  ClockIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { motion, AnimatePresence } from 'framer-motion';

const initialProfileData = {
  name: 'Mr. Niaz Ali',
  email: 'mr.niaz.ali@example.com',
  phone: '+31 6 1234 5678',
  memberSince: 'January 2020',
  lastLogin: 'July 17, 2025 at 01:02 AM',
  verified: true,
};

const statsData = [
  { label: 'Orders Completed', value: 124, icon: <TruckIcon className="w-5 h-5 text-yellow-400" /> },
  { label: 'Wishlist Items', value: 37, icon: <HeartIcon className="w-5 h-5 text-yellow-400" /> },
  { label: 'Saved Payment Methods', value: 3, icon: <CreditCardIcon className="w-5 h-5 text-yellow-400" /> },
  { label: 'Profile Updates', value: 14, icon: <PencilSquareIcon className="w-5 h-5 text-yellow-400" /> },
];

export default function ProfileHero() {
  const [profile, setProfile] = useState(initialProfileData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    closeDrawer();
  };

  return (
    <>
      <section className="w-full bg-gray-900 text-white px-4 sm:px-8 py-8 sm:py-12 rounded-lg shadow-2xl max-w-[1200px] mx-auto mt-[-80px] mb-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
        >
          <div className="max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 drop-shadow-lg mb-1 leading-tight">
              Welcome back, {profile.name}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Manage your personal info, security settings, orders, wishlist, and more all in one place.
            </p>
          </div>

          <div className="flex items-center gap-2 text-yellow-300 font-semibold text-xs sm:text-sm">
            <UserIcon className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
            <span>
              Logged in as{' '}
              <span className="text-white font-bold underline decoration-yellow-400 decoration-2 underline-offset-3">
                {profile.name}
              </span>
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1.5px] bg-yellow-500/40 my-6 rounded-full shadow-lg" />

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {statsData.map(({ label, value, icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-3 rounded-md bg-yellow-900/10 backdrop-blur-sm border border-yellow-400/30 shadow-md hover:scale-[1.02] transition-transform cursor-default"
              title={label}
              aria-label={`${value} ${label}`}
            >
              <div className="p-2 bg-yellow-400/20 rounded-full">{icon}</div>
              <div>
                <p className="text-yellow-400 font-extrabold text-2xl sm:text-3xl leading-none">
                  <AnimatedNumber value={value} />
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Detailed Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Info */}
          <div className="space-y-4 bg-gray-800/50 p-4 rounded-md shadow-md border border-yellow-400/30">
            <h2 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-1.5">
              <IdentificationIcon className="w-5 h-5" />
              Profile Summary
            </h2>
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-relaxed">
              <li>
                <strong className="text-white">Email:</strong> {profile.email}
              </li>
              <li>
                <strong className="text-white">Phone:</strong> {profile.phone}
              </li>
              <li>
                <strong className="text-white">Member Since:</strong> {profile.memberSince}
              </li>
              <li>
                <strong className="text-white">Last Login:</strong> {profile.lastLogin}
              </li>
              <li className="flex items-center gap-1">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span className="text-green-400 font-semibold text-sm">
                  {profile.verified ? 'Verified Account' : 'Unverified Account'}
                </span>
              </li>
            </ul>
            <button
              aria-label="Edit Profile Information"
              onClick={() => setIsDrawerOpen(true)}
              className="mt-3 flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-semibold transition text-sm"
            >
              <PencilSquareIcon className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          {/* Right Info */}
          <div className="space-y-4 bg-gray-800/50 p-4 rounded-md shadow-md border border-yellow-400/30">
            <h2 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-1.5">
              <ClockIcon className="w-5 h-5" />
              Recent Activity
            </h2>
            <ul className="text-gray-300 text-xs sm:text-sm space-y-2 leading-relaxed">
              <li>
                <span className="font-semibold text-white text-sm">Order #5684</span> — Delivered on July 15, 2025
              </li>
              <li>
                <span className="font-semibold text-white text-sm">Password Changed</span> — July 10, 2025 at 10:20 PM
              </li>
              <li>
                <span className="font-semibold text-white text-sm">Added new payment method</span> — July 5, 2025
              </li>
              <li>
                <span className="font-semibold text-white text-sm">Wishlist updated</span> — June 30, 2025
              </li>
            </ul>

            <button
              aria-label="View Full Activity Log"
              className="mt-3 inline-block text-yellow-400 hover:text-yellow-300 font-semibold underline transition text-sm"
            >
              View Full Activity Log →
            </button>
          </div>
        </motion.div>

        {/* Manage Profile Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex justify-center sm:justify-end"
        >
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-base bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold shadow-md transition-transform hover:scale-[1.03] focus-visible:ring-4 focus-visible:ring-yellow-500"
            aria-label="Manage your profile"
          >
            <IdentificationIcon className="w-5 h-5" />
            Manage Profile
          </button>
        </motion.div>
      </section>

      {/* Drawer for managing profile */}
      <ProfileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        profile={profile}
        onSave={handleProfileUpdate}
      />
    </>
  );
}

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    const duration = 1200;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * value);
      setCount(currentCount);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return <span>{count}</span>;
};

function ProfileDrawer({ isOpen, onClose, profile, onSave }) {
  const drawerRef = useRef();

  const [formData, setFormData] = useState(profile);

  useEffect(() => {
    if (isOpen) setFormData(profile);
  }, [isOpen, profile]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    else window.removeEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Close on outside click
  const handleClickOutside = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Name is required');
      return;
    }
    if (!formData.email.trim()) {
      alert('Email is required');
      return;
    }
    onSave(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-gray-900 text-white z-50 shadow-2xl flex flex-col p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            {/* Header */}
            <header className="flex items-center justify-between pb-2 border-b border-yellow-400/40">
              <h2 id="drawer-title" className="text-lg font-bold text-yellow-400">
                Manage Profile
              </h2>
              <button
                onClick={onClose}
                aria-label="Close Profile Drawer"
                className="text-yellow-400 hover:text-yellow-300 focus:outline-none"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </header>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 mt-4"
              autoComplete="off"
            >
              <label className="flex flex-col text-yellow-400 text-sm font-semibold">
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="mt-1 rounded-md bg-gray-800 border border-yellow-400/50 p-2 text-white placeholder-yellow-600 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <label className="flex flex-col text-yellow-400 text-sm font-semibold">
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="mt-1 rounded-md bg-gray-800 border border-yellow-400/50 p-2 text-white placeholder-yellow-600 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <label className="flex flex-col text-yellow-400 text-sm font-semibold">
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+31 6 1234 5678"
                  className="mt-1 rounded-md bg-gray-800 border border-yellow-400/50 p-2 text-white placeholder-yellow-600 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <label className="flex flex-col text-yellow-400 text-sm font-semibold">
                Member Since
                <input
                  type="text"
                  name="memberSince"
                  value={formData.memberSince}
                  readOnly
                  className="mt-1 rounded-md bg-gray-700 border border-yellow-400/50 p-2 text-yellow-300 text-sm cursor-not-allowed"
                />
              </label>

              <label className="flex flex-col text-yellow-400 text-sm font-semibold">
                Last Login
                <input
                  type="text"
                  name="lastLogin"
                  value={formData.lastLogin}
                  readOnly
                  className="mt-1 rounded-md bg-gray-700 border border-yellow-400/50 p-2 text-yellow-300 text-sm cursor-not-allowed"
                />
              </label>

              <label className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold mt-2">
                <input
                  type="checkbox"
                  name="verified"
                  checked={formData.verified}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-yellow-400 text-yellow-400 focus:ring-yellow-400"
                />
                Verified Account
              </label>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition font-semibold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-1.5 rounded-full bg-yellow-400 text-gray-900 font-extrabold hover:bg-yellow-300 transition text-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
