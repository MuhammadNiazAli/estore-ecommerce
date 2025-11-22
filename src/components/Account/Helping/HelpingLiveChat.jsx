'use client';

import React, { useState } from 'react';
import { FaRegComments, FaBrain, FaHandsHelping, FaTimes } from 'react-icons/fa';

const liveChatFeatures = [
  {
    icon: <FaRegComments className="text-yellow-400 text-base" />,
    label: 'Real-Time Customer Chat',
  },
  {
    icon: <FaBrain className="text-yellow-400 text-base" />,
    label: 'AI-Powered Assistance',
  },
  {
    icon: <FaHandsHelping className="text-yellow-400 text-base" />,
    label: 'Human Support Available',
  },
];

const startChatContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Start a Live Chat</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Instant connection with our support system</li>
      <li>AI Assistant responds within seconds</li>
      <li>Option to escalate to human support anytime</li>
      <li>Available 24/7 — no wait times</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">Click the chat icon on the bottom-right of your screen to begin.</p>
  </div>
);

const learnMoreContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">About Our Live Chat</h3>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Our AI assistant handles 85% of questions instantly</li>
      <li>Human agents are available 24/7 for complex queries</li>
      <li>All conversations are encrypted for your privacy</li>
      <li>You can request a transcript anytime</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      We combine smart tech with human care for a seamless support experience.
    </p>
  </div>
);

export default function HelpingLiveChat() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Live chat support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Live Chat Support
        </h2>
        <p className="text-gray-300 text-sm">
          Chat with our support team in real-time, powered by AI and backed by friendly humans, to get your issues resolved quickly.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-xs max-w-md mx-auto">
          {liveChatFeatures.map(({ icon, label }, idx) => (
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
            onClick={() => toggleSection('start')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'start'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            } text-sm`}
            aria-label="Toggle live chat start section"
          >
            Start Chat
          </button>

          <button
            type="button"
            onClick={() => toggleSection('learn')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'learn'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            } text-sm`}
            aria-label="Toggle live chat info section"
          >
            Learn More
          </button>
        </div>

        {activeSection && (
          <div className="relative mt-8 p-6 bg-gray-900 border border-gray-700 rounded-xl transition-all duration-300 shadow-lg">
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
              aria-label="Close section"
            >
              <FaTimes />
            </button>
            {activeSection === 'start' && startChatContent}
            {activeSection === 'learn' && learnMoreContent}
          </div>
        )}
      </div>
    </section>
  );
}
