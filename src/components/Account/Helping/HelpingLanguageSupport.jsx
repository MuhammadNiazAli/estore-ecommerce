'use client';

import React, { useState } from 'react';
import { FaGlobeAmericas, FaCommentDots, FaUserFriends, FaTimes } from 'react-icons/fa';

const languageSupportFeatures = [
  {
    icon: <FaGlobeAmericas className="text-amber-600 text-base" />,
    label: 'Multiple Languages Supported',
  },
  {
    icon: <FaCommentDots className="text-amber-600 text-base" />,
    label: 'Localized Customer Service',
  },
  {
    icon: <FaUserFriends className="text-amber-600 text-base" />,
    label: 'Real-Time Translation Help',
  },
];

const supportContent = (
  <div className="text-center text-xs text-gray-700 space-y-3">
    <h3 className="text-lg font-semibold text-amber-600">Request Language Support</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Choose your preferred language from over 25 options</li>
      <li>Speak with a native or fluent support agent</li>
      <li>Available 24/7 via chat, email, or phone</li>
      <li>Instant auto-translation available for chat requests</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">
      We aim to bridge communication gaps and ensure you feel fully supported.
    </p>
  </div>
);

const learnMoreContent = (
  <div className="text-center text-xs text-gray-700 space-y-3">
    <h3 className="text-lg font-semibold text-amber-600">About Our Language Services</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Supports English, Spanish, French, German, Arabic, Chinese, Hindi, and many more</li>
      <li>Automatic translation integrated in live chat for fast replies</li>
      <li>Local agents available in select regions for in-person help</li>
      <li>All documentation available in your selected language</li>
    </ul>
    <p className="pt-2 text-xs text-gray-600">
      Language preference can be updated in your account settings anytime.
    </p>
  </div>
);

export default function HelpingLanguageSupport() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Language support information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-amber-600 tracking-tight">
          Language Support Made Easy
        </h2>
        <p className="text-gray-700 text-sm">
          We provide assistance in multiple languages to ensure smooth communication and help whenever you need it.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600 font-medium text-xs max-w-md mx-auto">
          {languageSupportFeatures.map(({ icon, label }, idx) => (
            <li
              key={idx}
              className="flex items-center justify-center gap-2 whitespace-nowrap"
              title={label}
            >
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('support')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'support'
                ? 'bg-amber-500 text-black ring-amber-500'
                : 'bg-amber-600 text-black hover:bg-amber-500'
            } text-sm`}
            aria-label="Toggle language support section"
          >
            Get Support
          </button>

          <button
            type="button"
            onClick={() => toggleSection('learn')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'learn'
                ? 'bg-white text-black ring-gray-200'
                : 'border-gray-200 text-gray-900 hover:bg-gray-500 hover:text-black'
            } text-sm`}
            aria-label="Toggle learn more section"
          >
            Learn More
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 shadow-lg">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-400 text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'support' && supportContent}
            {activeSection === 'learn' && learnMoreContent}
          </div>
        )}
      </div>
    </section>
  );
}
