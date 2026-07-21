'use client';

import React, { useState, useEffect } from 'react';

const SETTINGS_STORAGE_KEY = 'dashboard-user-settings';

const defaultSettings = {
  emailNotifications: true,
  twoFactorAuth: false,
  darkMode: true,
};

const DashboardSettings = () => {
  // Load from localStorage or fallback to default
  const [settings, setSettings] = useState(defaultSettings);
  const [formSettings, setFormSettings] = useState(defaultSettings);

  // Track save state: 'idle' | 'saving' | 'success' | 'error'
  const [saveStatus, setSaveStatus] = useState('idle');

  // Track if form has unsaved changes
  const hasChanges = JSON.stringify(settings) !== JSON.stringify(formSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSettings(parsed);
        setFormSettings(parsed);
      }
    } catch {
      // ignore parse errors, fallback default
    }
  }, []);

  // Handle toggle switch change
  const handleToggle = (key) => {
    setFormSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    if (saveStatus !== 'idle') setSaveStatus('idle'); // reset status on change
  };

  // Reset changes to last saved state
  const handleReset = () => {
    setFormSettings(settings);
    setSaveStatus('idle');
  };

  // Save changes (simulate async backend call)
  const handleSave = async (e) => {
    e.preventDefault();
    if (!hasChanges) return;

    setSaveStatus('saving');

    try {
      // Simulate network latency and possible failure
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          // 90% chance success
          Math.random() < 0.9 ? resolve() : reject(new Error('Network error'));
        }, 1500)
      );

      // Save to localStorage (simulate backend save)
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(formSettings));

      // Update saved settings state
      setSettings(formSettings);
      setSaveStatus('success');

      // Clear success message after a while
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      setSaveStatus('error');
    }
  };

  return (
    <section className="w-full bg-white flex justify-center px-4 py-10 min-h-[400px]">
      <div className="w-full max-w-[1000px] text-gray-900">
        <h2 className="text-2xl font-bold text-amber-600 mb-6">Settings</h2>

        <form
          onSubmit={handleSave}
          className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto space-y-6"
          aria-live="polite"
          aria-busy={saveStatus === 'saving'}
        >
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="emailNotifications"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Email Notifications
            </label>
            <input
              type="checkbox"
              id="emailNotifications"
              checked={formSettings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
              className="w-5 h-5 rounded border-gray-200 bg-white cursor-pointer accent-amber-600"
              aria-checked={formSettings.emailNotifications}
              role="switch"
            />
          </div>

          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="twoFactorAuth"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Two-Factor Authentication
            </label>
            <input
              type="checkbox"
              id="twoFactorAuth"
              checked={formSettings.twoFactorAuth}
              onChange={() => handleToggle('twoFactorAuth')}
              className="w-5 h-5 rounded border-gray-200 bg-white cursor-pointer accent-amber-600"
              aria-checked={formSettings.twoFactorAuth}
              role="switch"
            />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="darkMode"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Dark Mode
            </label>
            <input
              type="checkbox"
              id="darkMode"
              checked={formSettings.darkMode}
              onChange={() => handleToggle('darkMode')}
              className="w-5 h-5 rounded border-gray-200 bg-white cursor-pointer accent-amber-600"
              aria-checked={formSettings.darkMode}
              role="switch"
            />
          </div>

          {/* Save and Reset Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={!hasChanges || saveStatus === 'saving'}
              className={`flex-1 bg-amber-600 text-black font-semibold py-2 rounded-md hover:bg-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-disabled={!hasChanges || saveStatus === 'saving'}
            >
              {saveStatus === 'saving' ? 'Saving...' : 'Save Settings'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              disabled={!hasChanges || saveStatus === 'saving'}
              className="text-amber-600 font-semibold py-2 px-4 rounded-md hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset
            </button>
          </div>

          {/* Feedback Messages */}
          {saveStatus === 'success' && (
            <p className="text-green-400 font-medium mt-2" role="alert">
              Settings saved successfully!
            </p>
          )}
          {saveStatus === 'error' && (
            <p className="text-red-500 font-medium mt-2" role="alert">
              Error saving settings. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default DashboardSettings;
