'use client';

import React, { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'nl', label: 'Dutch', flag: '🇳🇱' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
];

const regions = [
  { code: 'us', label: 'United States' },
  { code: 'nl', label: 'Netherlands' },
  { code: 'fr', label: 'France' },
  { code: 'de', label: 'Germany' },
];

const SittingLanguageRegion = () => {
  const [language, setLanguage] = useState(languages[0].code);
  const [region, setRegion] = useState(regions[1].code);

  return (
    <section
      aria-label="Language and region settings"
      className="w-full max-w-[900px] mx-auto bg-white text-gray-900 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <FiGlobe className="text-black" /> Language & Region
      </h2>

      <form className="space-y-5">
        {/* Language Select */}
        <div className="flex flex-col">
          <label
            htmlFor="language-select"
            className="mb-1 text-sm font-medium text-black"
          >
            Language
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          >
            {languages.map(({ code, label, flag }) => (
              <option key={code} value={code}>
                {flag} {label}
              </option>
            ))}
          </select>
        </div>

        {/* Region Select */}
        <div className="flex flex-col">
          <label
            htmlFor="region-select"
            className="mb-1 text-sm font-medium text-black"
          >
            Region
          </label>
          <select
            id="region-select"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          >
            {regions.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default SittingLanguageRegion;
