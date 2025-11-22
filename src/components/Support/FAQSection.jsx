'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can I track my order?',
    answer:
      'Once your order is placed, you’ll receive a confirmation email with a tracking link. You can also find it in your account under "My Orders".',
  },
  {
    question: 'What’s your return policy?',
    answer:
      'Changed your mind? No worries! You can return unused items within 30 days of delivery. Just make sure they’re in the original packaging.',
  },
  {
    question: 'Can I update my shipping address?',
    answer:
      'Yes — if your order hasn’t shipped yet. Please contact our support team as soon as possible to make changes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, MasterCard, PayPal, and Apple Pay. All payments are securely processed.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-16 bg-gray-900 text-white my-[-50px]">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, idx) => (
            <div
              key={idx}
              tabIndex={0}
              role="button"
              onClick={() => toggleFAQ(idx)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFAQ(idx)}
              aria-expanded={activeIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              className="border border-gray-700 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <div className="flex justify-between items-center p-5 cursor-pointer select-none">
                <h3 className="text-lg font-medium text-white">{question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-5 pb-5 text-gray-300 leading-relaxed"
                >
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
