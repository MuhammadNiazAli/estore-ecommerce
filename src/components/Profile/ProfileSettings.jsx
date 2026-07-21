'use client';

import React, { useState } from 'react';
import {
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const ToggleSwitch = ({ enabled, onToggle }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={enabled}
      onChange={onToggle}
    />
    <div className="w-12 h-7 bg-white peer-checked:bg-black rounded-full peer transition-colors duration-300" />
    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5 shadow-md" />
  </label>
);

const SettingItem = ({ icon, title, description, value, onChange }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="flex items-start justify-between flex-wrap sm:flex-nowrap gap-6 group"
  >
    <div className="flex gap-4 items-start max-w-lg">
      <div className="w-6 h-6">{icon}</div>
      <div>
        <h4 className="text-gray-900 font-semibold text-base sm:text-lg">{title}</h4>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
    <ToggleSwitch enabled={value} onToggle={onChange} />
  </motion.div>
);

const ProfileSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  const settingOptions = [
    {
      id: 'email',
      title: 'Email Notifications',
      description: 'Receive updates, newsletters, and promotions via email.',
      icon: <BellIcon className="text-black w-6 h-6" />,
      value: emailNotifications,
      onChange: () => setEmailNotifications((prev) => !prev),
    },
    {
      id: 'sms',
      title: 'SMS Alerts',
      description: 'Get important account alerts via text message.',
      icon: <DevicePhoneMobileIcon className="text-black w-6 h-6" />,
      value: smsNotifications,
      onChange: () => setSmsNotifications((prev) => !prev),
    },
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description: 'Secure your account with an extra verification step during login.',
      icon: <ShieldCheckIcon className="text-black w-6 h-6" />,
      value: twoFactorAuth,
      onChange: () => setTwoFactorAuth((prev) => !prev),
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10 sm:py-14 my-[-50px] mb-0">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
              Profile Settings
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mt-1">
              Manage your notification preferences and security features below.
            </p>
          </div>
          <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base">
            <Cog6ToothIcon className="w-6 h-6 animate-spin-slow" />
            <span>Settings</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white" />

        {/* Settings */}
        <div className="grid gap-10">
          {settingOptions.map((option) => (
            <SettingItem key={option.id} {...option} />
          ))}
        </div>

        {/* Info footer */}
        <div className="flex items-center gap-2 text-gray-500 text-sm pt-6 border-t border-gray-200">
          <InformationCircleIcon className="w-5 h-5 text-black" />
          <p>
            All changes are saved automatically. You can update these anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
