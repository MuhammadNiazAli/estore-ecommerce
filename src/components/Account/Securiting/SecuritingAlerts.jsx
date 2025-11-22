'use client';

import React, { useState } from 'react';
import { FiBell, FiMail, FiSmartphone, FiAlertTriangle } from 'react-icons/fi';

const alertOptions = [
  {
    id: 'loginEmail',
    icon: <FiMail />,
    label: 'Email me on new login',
  },
  {
    id: 'loginSMS',
    icon: <FiSmartphone />,
    label: 'Send SMS for unknown devices',
  },
  {
    id: 'suspiciousActivity',
    icon: <FiAlertTriangle />,
    label: 'Alert me of suspicious activity',
  },
];

const SecuritingAlerts = () => {
  const [toggles, setToggles] = useState({
    loginEmail: true,
    loginSMS: false,
    suspiciousActivity: true,
  });

  const toggleHandler = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      aria-label="Manage security alert preferences"
      className="w-full bg-gray-900 text-yellow-400 p-6 rounded-2xl shadow-lg space-y-6"
    >
      <div className="flex items-center gap-3 text-yellow-400">
        <FiBell className="text-2xl" />
        <h2 className="text-xl font-bold">Security Alerts</h2>
      </div>

      <p className="text-sm text-yellow-300 max-w-md">
        Stay informed about activity in your account. Enable alerts to get notified via email or SMS about critical changes or logins.
      </p>

      <ul className="space-y-4">
        {alertOptions.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-800 border border-yellow-700 px-4 py-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>

            {/* Toggle Switch */}
            <div
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                toggles[item.id] ? 'bg-yellow-500' : 'bg-gray-700'
              }`}
              onClick={() => toggleHandler(item.id)}
              role="switch"
              aria-checked={toggles[item.id]}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  toggles[item.id] ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecuritingAlerts;
