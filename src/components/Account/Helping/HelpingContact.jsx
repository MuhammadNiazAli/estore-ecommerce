'use client';

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaComments, FaTimes } from 'react-icons/fa';

const contactHelpFeatures = [
  {
    icon: <FaPhoneAlt className="text-yellow-400 text-base" />,
    label: 'Call Our Support Team',
  },
  {
    icon: <FaEnvelope className="text-yellow-400 text-base" />,
    label: 'Email Us Anytime',
  },
  {
    icon: <FaComments className="text-yellow-400 text-base" />,
    label: 'Live Chat Assistance',
  },
];

const callSupportContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Call Support</h3>
    <p>Speak directly with our team for urgent help:</p>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li><strong>+1 (800) 123-4567</strong></li>
      <li>Available 24/7, including holidays</li>
      <li>Typical wait time: <strong>2-5 minutes</strong></li>
    </ul>
  </div>
);

const emailSupportContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Email Support</h3>
    <p>Send us an email with your issue and we’ll respond within 24 hours:</p>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li><strong>support@estore.com</strong></li>
      <li>Include screenshots or order numbers for faster assistance</li>
      <li>Available 24/7</li>
    </ul>
  </div>
);

const chatSupportContent = (
  <div className="text-center text-xs text-gray-300 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Live Chat</h3>
    <p>Chat with our friendly support agents in real-time:</p>
    <ul className="list-disc pl-5 space-y-1 max-w-xs mx-auto text-left">
      <li>Start a conversation instantly</li>
      <li>Get solutions in real-time</li>
      <li>Mon–Fri: 8 AM to 11 PM, Weekends: 9 AM to 9 PM</li>
    </ul>
  </div>
);

export default function HelpingContact() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Contact help and support"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Get In Touch With Us
        </h2>
        <p className="text-gray-300 max-w-md mx-auto text-sm">
          Have questions or need assistance? Reach out through any of the options below — we’re here to help 24/7.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-xs max-w-md mx-auto">
          {contactHelpFeatures.map(({ icon, label }, idx) => (
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
            onClick={() => toggleSection('call')}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'call'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            } text-sm`}
            aria-label="Toggle call section"
          >
            Call Now
          </button>
          <button
            type="button"
            onClick={() => toggleSection('email')}
            className={`px-6 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'email'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            } text-sm`}
            aria-label="Toggle email section"
          >
            Email Us
          </button>
          <button
            type="button"
            onClick={() => toggleSection('chat')}
            className={`px-6 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'chat'
                ? 'bg-yellow-400 text-black ring-yellow-300'
                : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
            } text-sm`}
            aria-label="Toggle live chat section"
          >
            Live Chat
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
            {activeSection === 'call' && callSupportContent}
            {activeSection === 'email' && emailSupportContent}
            {activeSection === 'chat' && chatSupportContent}
          </div>
        )}
      </div>
    </section>
  );
}
