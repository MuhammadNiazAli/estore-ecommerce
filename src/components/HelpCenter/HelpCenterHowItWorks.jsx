'use client';

import React from 'react';
import { Search, MessageSquare, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Search Your Issue',
    description: 'Quickly find answers by searching topics or keywords.',
    icon: <Search className="w-12 h-12 text-yellow-400" aria-hidden="true" />,
  },
  {
    title: 'Get Help Fast',
    description: 'Browse articles or start a chat with our support team.',
    icon: <MessageSquare className="w-12 h-12 text-yellow-400" aria-hidden="true" />,
  },
  {
    title: 'Issue Resolved',
    description: 'Follow simple steps and get your problem solved promptly.',
    icon: <CheckCircle className="w-12 h-12 text-yellow-400" aria-hidden="true" />,
  },
];

const HelpCenterHowItWorks = () => {
  return (
    <section
      className="bg-gray-900 w-full px-4 py-16 flex justify-center my-[-50px]"
      aria-labelledby="how-it-works-title"
    >
      <div className="max-w-[1100px] w-full text-white text-center">
        <h2
          id="how-it-works-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-16 tracking-tight"
        >
          How It Works
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          role="list"
          aria-label="Help center steps"
        >
          {steps.map((step, index) => (
            <article
              key={index}
              tabIndex={0}
              role="listitem"
              aria-describedby={`step-desc-${index}`}
              className="bg-gray-800 hover:bg-gray-700 rounded-2xl px-6 py-10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              <p
                id={`step-desc-${index}`}
                className="text-gray-300 leading-relaxed max-w-xs mx-auto"
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenterHowItWorks;
