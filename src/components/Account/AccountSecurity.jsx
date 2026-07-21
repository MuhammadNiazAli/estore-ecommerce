'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const dummyLoginActivity = [
  { id: 1, device: 'Chrome on Windows 10', location: 'Amsterdam, Netherlands', date: '2025-07-01 10:23 AM' },
  { id: 2, device: 'Firefox on macOS Ventura', location: 'Rotterdam, Netherlands', date: '2025-06-28 05:45 PM' },
  { id: 3, device: 'Safari on iPhone 13', location: 'Utrecht, Netherlands', date: '2025-06-25 08:12 AM' },
];

const AccountSecurity = () => {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChanging, setPasswordChanging] = useState(false);

  const toggleTwoFA = () => setTwoFAEnabled((prev) => !prev);

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill all password fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }
    setPasswordChanging(true);
    setTimeout(() => {
      alert('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPasswordChanging(false);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-white to-white rounded-xl p-8 max-w-[700px] mx-auto text-gray-900 shadow-lg"
      aria-label="Security Settings Section"
    >
      <h2 className="text-3xl font-extrabold mb-8 tracking-wide select-none">Security Settings</h2>

   
      <section aria-labelledby="two-fa-heading" className="mb-10">
        <h3 id="two-fa-heading" className="text-2xl font-semibold mb-4">Two-Factor Authentication (2FA)</h3>
        <label
          htmlFor="twoFA-toggle"
          className="inline-flex items-center cursor-pointer select-none"
          aria-checked={twoFAEnabled}
          role="switch"
        >
          <input
            type="checkbox"
            id="twoFA-toggle"
            checked={twoFAEnabled}
            onChange={toggleTwoFA}
            className="form-checkbox h-6 w-6 text-amber-600 rounded transition duration-200 ease-in-out"
          />
          <span className="ml-3 font-medium text-gray-900">{twoFAEnabled ? 'Enabled' : 'Disabled'}</span>
        </label>
        <p className="mt-3 text-gray-700 max-w-lg leading-relaxed text-sm">
          Enable Two-Factor Authentication to enhance your account security. With 2FA, a second verification step will be required when you log in, helping protect your account from unauthorized access.
        </p>
      </section>

   
      <section aria-labelledby="change-password-heading" className="mb-12 max-w-md">
        <h3 id="change-password-heading" className="text-2xl font-semibold mb-6">Change Password</h3>
        <form onSubmit={handleChangePassword} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="currentPassword"
              className="block mb-2 text-gray-700 font-medium"
            >
              Current Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Enter your current password"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block mb-2 text-gray-700 font-medium"
            >
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Create a new password"
              required
              aria-required="true"
              minLength={8}
            />
            <p className="mt-1 text-xs text-gray-600">
              Password must be at least 8 characters long.
            </p>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-gray-700 font-medium"
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Confirm your new password"
              required
              aria-required="true"
              minLength={8}
            />
          </div>

          <button
            type="submit"
            disabled={passwordChanging}
            className={`w-full bg-amber-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-700 ${
              passwordChanging ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            aria-live="polite"
          >
            {passwordChanging ? 'Changing Password...' : 'Change Password'}
          </button>
        </form>
      </section>

     
      <section
        aria-labelledby="login-activity-heading"
        className="max-w-full overflow-x-auto custom-scrollbar"
      >
        <h3 id="login-activity-heading" className="text-2xl font-semibold mb-5">Recent Login Activity</h3>
        <table className="min-w-full table-auto border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-6 text-gray-700 uppercase tracking-wide font-medium">Device</th>
              <th className="py-3 px-6 text-gray-700 uppercase tracking-wide font-medium">Location</th>
              <th className="py-3 px-6 text-gray-700 uppercase tracking-wide font-medium">Date &amp; Time</th>
            </tr>
          </thead>
          <tbody>
            {dummyLoginActivity.map(({ id, device, location, date }) => (
              <tr
                key={id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-default"
              >
                <td className="py-3 px-6 whitespace-nowrap font-semibold">{device}</td>
                <td className="py-3 px-6 whitespace-nowrap">{location}</td>
                <td className="py-3 px-6 whitespace-nowrap">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-600 italic max-w-md">
          This log shows your recent login activity. If you notice any suspicious activity, please change your password immediately and enable 2FA.
        </p>
      </section>

      <style jsx>{`
        /* Custom thin, smooth scrollbar styles for modern browsers */
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(252, 211, 77, 0.6); /* amber-600 with 60% opacity */
          border-radius: 9999px; /* full round */
          transition: background-color 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(252, 211, 77, 0.9);
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(252, 211, 77, 0.6) transparent;
          scroll-padding: 10px;
        }
        .custom-scrollbar:hover {
          scrollbar-color: rgba(252, 211, 77, 0.9) transparent;
        }
      `}</style>
    </motion.section>
  );
};

export default AccountSecurity;
