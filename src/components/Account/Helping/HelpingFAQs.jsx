'use client';

import React, { useState } from 'react';

const faqData = [
  {
    question: 'How do I reset my password?',
    answer:
      'To reset your password, go to the account settings page and click "Forgot Password". Follow the instructions sent to your registered email.',
  },
  {
    question: 'Where can I view my order history?',
    answer:
      'You can view your complete order history in the "My Orders" section of your account dashboard.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can contact our support team via the "Contact Us" page, live chat, or by calling our support number available 24/7.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy on most products. Please visit the Returns section for detailed instructions.',
  },
];

export default function HelpingFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="w-full max-w-[700px] mx-auto px-6 py-12 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold text-black text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center max-w-md mx-auto">
          Find answers to the most common questions about your account, orders, and support.
        </p>

        <div className="divide-y divide-gray-200">
          {faqData.map(({ question, answer }, idx) => (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="flex justify-between w-full text-left text-lg font-semibold text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
                aria-expanded={activeIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span>{question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === idx ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`mt-2 text-gray-700 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
