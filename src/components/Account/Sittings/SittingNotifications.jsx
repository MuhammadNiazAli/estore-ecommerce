'use client';

import React, { useState } from 'react';
import { FiMail, FiBell } from 'react-icons/fi';

const NOTIFICATION_OPTIONS = [
  {
    id: 'email',
    icon: <FiMail />,
    label: 'Email Notifications',
  },
  {
    id: 'push',
    icon: <FiBell />,
    label: 'Push Notifications',
  },
];

const NotificationSettings = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    push: false,
  });

  // Toggle notification preference by id
  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      aria-label="Manage notification preferences"
      className="w-full max-w-[900px] mx-auto bg-white text-gray-900 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6">Notification Settings</h2>

      <ul className="space-y-5">
        {NOTIFICATION_OPTIONS.map(({ id, icon, label }) => (
          <li
            key={id}
            className="flex items-center justify-between bg-white border border-gray-200 px-4 py-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-xl">{icon}</span>
              <span className="text-sm font-medium">{label}</span>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={preferences[id]}
              aria-label={`Toggle ${label}`}
              onClick={() => togglePreference(id)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                preferences[id] ? 'bg-amber-700' : 'bg-white'
              }`}
            >
              <span
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  preferences[id] ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NotificationSettings;
