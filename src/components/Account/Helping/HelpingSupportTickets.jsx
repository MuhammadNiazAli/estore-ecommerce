'use client';

import React, { useState } from 'react';
import { FaClipboardList, FaComments, FaBolt, FaTimes } from 'react-icons/fa';

const supportTicketsFeatures = [
  {
    icon: <FaClipboardList className="text-yellow-400 text-lg" />,
    label: 'Easy Ticket Submission',
  },
  {
    icon: <FaComments className="text-yellow-400 text-lg" />,
    label: '24/7 Customer Support',
  },
  {
    icon: <FaBolt className="text-yellow-400 text-lg" />,
    label: 'Fast Response Times',
  },
];

const submitTicketContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">How to Submit a Support Ticket</h3>
    <p>
      To get help with any issues, fill out the support ticket form with detailed information about your problem.
      Our team is available 24/7 to assist you quickly and efficiently.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Provide your contact details</li>
      <li>Describe the issue clearly</li>
      <li>Attach any relevant screenshots or documents</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      After submission, you will receive a confirmation email with a ticket ID for tracking.
    </p>
  </div>
);

const viewTicketsContent = (
  <div className="text-left text-sm text-gray-300 space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">View Your Existing Tickets</h3>
    <p>
      You can track the progress of your submitted support tickets and communicate directly with our support staff.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Check ticket status and updates</li>
      <li>Respond to support queries</li>
      <li>Close resolved tickets</li>
    </ul>
    <p className="pt-2 text-xs text-gray-400">
      Log in to your account and navigate to the Support Tickets section to view your requests.
    </p>
  </div>
);

export default function HelpingSupportTickets() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  return (
    <section
      aria-label="Support tickets help and information"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="space-y-6 text-center max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 tracking-tight">
          Support Tickets
        </h2>
        <p className="text-gray-300">
          Submit support tickets easily and get 24/7 assistance with fast response times to resolve your issues quickly.
        </p>
        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-medium text-sm">
          {supportTicketsFeatures.map(({ icon, label }, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 whitespace-nowrap"
              title={label}
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-5 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => toggleSection('submitTicket')}
            className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'submitTicket'
                ? 'bg-yellow-300 text-black ring-yellow-300'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
            aria-expanded={activeSection === 'submitTicket'}
            aria-controls="submit-ticket-content"
            aria-label="Submit a support ticket"
          >
            Submit Ticket
          </button>
          <button
            type="button"
            onClick={() => toggleSection('viewTickets')}
            className={`px-8 py-3 rounded-full border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeSection === 'viewTickets'
                ? 'bg-white text-black ring-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            aria-expanded={activeSection === 'viewTickets'}
            aria-controls="view-tickets-content"
            aria-label="View existing tickets"
          >
            View Tickets
          </button>
        </div>

        {activeSection && (
          <div
            id={activeSection === 'submitTicket' ? 'submit-ticket-content' : 'view-tickets-content'}
            className="relative mt-8 p-6 bg-gray-900 border border-gray-700 rounded-xl shadow-lg max-w-md mx-auto text-left text-gray-300"
          >
            <button
              onClick={() => setActiveSection('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
              aria-label="Close details"
            >
              <FaTimes />
            </button>
            {activeSection === 'submitTicket' && submitTicketContent}
            {activeSection === 'viewTickets' && viewTicketsContent}
          </div>
        )}
      </div>
    </section>
  );
}
