'use client';

import React, { useState } from 'react';
import { FiEye, FiLock, FiUserCheck } from 'react-icons/fi';

const PRIVACY_OPTIONS = [
  {
    id: 'profileVisibility',
    icon: <FiEye />,
    label: 'Profile Visibility',
    description: 'Control who can see your profile information.',
  },
  {
    id: 'dataSharing',
    icon: <FiUserCheck />,
    label: 'Data Sharing',
    description: 'Allow sharing your data with third-party partners.',
  },
  {
    id: 'adPersonalization',
    icon: <FiLock />,
    label: 'Ad Personalization',
    description: 'Enable personalized ads based on your activity.',
  },
];

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    profileVisibility: true,
    dataSharing: false,
    adPersonalization: true,
  });

  // Flip the toggle for the specified setting
  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      aria-label="Privacy settings"
      className="w-full max-w-[900px] mx-auto bg-white text-gray-900 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>

      <ul className="space-y-6">
        {PRIVACY_OPTIONS.map(({ id, icon, label, description }) => (
          <li
            key={id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <span className="text-amber-600 text-2xl">{icon}</span>
                <span className="text-sm font-semibold">{label}</span>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={settings[id]}
                aria-label={`Toggle ${label}`}
                onClick={() => toggleSetting(id)}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  settings[id] ? 'bg-amber-700' : 'bg-white'
                }`}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    settings[id] ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <p className="text-xs text-amber-500">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PrivacySettings;
