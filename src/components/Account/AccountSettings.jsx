'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = ['English', 'Dutch', 'Spanish', 'French'];

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    newsletterSubscribed: true,
    language: 'English',
    accountPublic: false,
  });

  const [saved, setSaved] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  // Track if form has unsaved changes
  useEffect(() => {
    setIsDirty(true);
  }, [settings]);

  const toggleNewsletter = () => {
    setSettings((prev) => ({
      ...prev,
      newsletterSubscribed: !prev.newsletterSubscribed,
    }));
  };

  const changeLanguage = (e) => {
    setSettings((prev) => ({
      ...prev,
      language: e.target.value,
    }));
  };

  const toggleAccountPublic = () => {
    setSettings((prev) => ({
      ...prev,
      accountPublic: !prev.accountPublic,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setIsDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-gradient-to-b from-white to-white rounded-xl p-6 sm:p-10 max-w-[1000px] mx-auto text-gray-900 shadow-xl"
      aria-label="Account settings"
    >
      <h2 className="text-3xl font-extrabold mb-8 tracking-tight text-center sm:text-left">
        Account Settings
      </h2>

      <form
        onSubmit={handleSave}
        className="max-w-md w-full h-[360px] sm:h-[380px] overflow-y-auto space-y-10 px-2 sm:px-0 custom-scrollbar"
        aria-live="polite"
        aria-relevant="additions"
      >
        {/* Newsletter Toggle */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="newsletterToggle"
            className="text-lg font-semibold select-none"
          >
            Subscribe to Newsletter
          </label>
          <div className="relative">
            <input
              id="newsletterToggle"
              type="checkbox"
              checked={settings.newsletterSubscribed}
              onChange={toggleNewsletter}
              className="sr-only"
              aria-checked={settings.newsletterSubscribed}
              role="switch"
            />
            <div
              className={`w-12 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
                settings.newsletterSubscribed
                  ? 'bg-amber-600'
                  : 'bg-white'
              }`}
              onClick={toggleNewsletter}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleNewsletter();
              }}
              aria-label="Toggle newsletter subscription"
              role="switch"
              aria-checked={settings.newsletterSubscribed}
            />
            <span
              className={`absolute top-[2px] left-[2px] w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                settings.newsletterSubscribed ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Language Selector */}
        <div>
          <label
            htmlFor="languageSelect"
            className="block mb-2 font-semibold text-lg select-none"
          >
            Preferred Language
          </label>
          <select
            id="languageSelect"
            value={settings.language}
            onChange={changeLanguage}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
            aria-label="Select preferred language"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Account Public Toggle */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="accountPublicToggle"
            className="text-lg font-semibold select-none"
          >
            Make Account Public
          </label>
          <div className="relative">
            <input
              id="accountPublicToggle"
              type="checkbox"
              checked={settings.accountPublic}
              onChange={toggleAccountPublic}
              className="sr-only"
              aria-checked={settings.accountPublic}
              role="switch"
            />
            <div
              className={`w-12 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
                settings.accountPublic ? 'bg-amber-600' : 'bg-white'
              }`}
              onClick={toggleAccountPublic}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleAccountPublic();
              }}
              aria-label="Toggle public account setting"
              role="switch"
              aria-checked={settings.accountPublic}
            />
            <span
              className={`absolute top-[2px] left-[2px] w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                settings.accountPublic ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={!isDirty}
          className={`w-full bg-amber-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition 
            hover:bg-amber-500 active:scale-95 disabled:bg-amber-500 disabled:text-gray-600 disabled:cursor-not-allowed`}
          aria-disabled={!isDirty}
        >
          Save Settings
        </button>
      </form>

      {/* Success Toast */}
      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-600 text-black rounded-lg px-6 py-3 font-semibold shadow-lg select-none z-50"
            role="alert"
            aria-live="assertive"
          >
            Settings saved!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(252, 211, 77, 0.6);
          border-radius: 9999px;
          transition: background-color 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(252, 211, 77, 0.9);
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(252, 211, 77, 0.6) transparent;
        }
        .custom-scrollbar:hover {
          scrollbar-color: rgba(252, 211, 77, 0.9) transparent;
        }
      `}</style>
    </motion.section>
  );
};

export default AccountSettings;
