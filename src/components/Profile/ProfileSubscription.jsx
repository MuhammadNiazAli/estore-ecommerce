'use client';

import React, { useState, useMemo } from 'react';
import {
  CreditCardIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const initialSubscription = {
  planName: 'Premium Plus',
  status: 'Active', // Active | Expired | Pending
  renewalDate: 'August 15, 2025',
  price: '$29.99 / month',
};

const statusStyles = {
  Active: 'bg-green-600/90 text-green-100',
  Expired: 'bg-red-600/90 text-red-100',
  Pending: 'bg-amber-800/90 text-amber-300',
};

const statusIcons = {
  Active: <CheckCircleIcon className="w-5 h-5" />,
  Expired: <XCircleIcon className="w-5 h-5" />,
  Pending: <ClockIcon className="w-5 h-5" />,
};

const ProfileSubscription = () => {
  const [subscription, setSubscription] = useState(initialSubscription);
  const [loading, setLoading] = useState(false);

  const handleUpgrade = () => {
    setLoading(true);
    setTimeout(() => {
      setSubscription({
        ...subscription,
        planName: 'Enterprise Elite',
        price: '$49.99 / month',
        status: 'Pending',
        renewalDate: 'September 15, 2025',
      });
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setLoading(true);
    setTimeout(() => {
      setSubscription((prev) => ({
        ...prev,
        status: 'Expired',
      }));
      setLoading(false);
    }, 1500);
  };

  const showWarning = useMemo(() => subscription.status === 'Expired', [subscription]);

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10 sm:py-14">
      <div className="w-full max-w-[900px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
              Subscription
            </h2>
            <p className="text-sm text-gray-700">
              View or modify your subscription and billing preferences.
            </p>
          </div>
          <div className="flex items-center gap-2 text-amber-500 font-medium text-sm">
            <CreditCardIcon className="w-5 h-5 animate-pulse" />
            Plan Details
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white" />

        {/* Subscription Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative"
        >
          <div className="flex-1 space-y-2">
            <p className="text-amber-600 text-lg font-semibold">{subscription.planName}</p>
            <p className="text-gray-700 text-sm">{subscription.price}</p>
            <p className="text-gray-600 text-sm">
              Renewal Date: <span className="font-medium text-gray-900">{subscription.renewalDate}</span>
            </p>
            {showWarning && (
              <p className="text-red-400 text-sm pt-2">
                Your plan has expired. Please upgrade to continue.
              </p>
            )}
          </div>

          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition ${
              statusStyles[subscription.status] || 'bg-white text-gray-700'
            }`}
          >
            {statusIcons[subscription.status]}
            <span>{subscription.status}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={handleUpgrade}
              disabled={loading || subscription.status === 'Pending'}
              className="px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Upgrade subscription"
            >
              {loading && subscription.status !== 'Expired' ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin mx-auto" />
              ) : (
                'Upgrade'
              )}
            </button>
            <button
              onClick={handleCancel}
              disabled={loading || subscription.status === 'Expired'}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-amber-600 font-semibold shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Cancel subscription"
            >
              {loading && subscription.status !== 'Pending' ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin mx-auto" />
              ) : (
                'Cancel'
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSubscription;
