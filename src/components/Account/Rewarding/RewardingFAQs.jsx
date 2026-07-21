'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

// List of frequently asked questions with their answers
const faqList = [
  {
    question: 'How do I earn reward points?',
    answer: 'You earn points automatically every time you make a purchase. The more you shop, the more you earn.',
  },
  {
    question: 'When do my points expire?',
    answer: 'Points expire 12 months after the date they were earned. Don’t let them go to waste!',
  },
  {
    question: 'How can I redeem my points?',
    answer: 'Points can be redeemed in your Reward Hub for exclusive products, discounts, and coupons.',
  },
  {
    question: 'What are the membership tiers?',
    answer: 'We offer Silver, Gold, and Platinum tiers — each with increasing benefits and multipliers.',
  },
  {
    question: 'Do I get anything on my birthday?',
    answer: 'Yes! You’ll receive bonus points and an exclusive surprise as a birthday gift.',
  },
];

// Single FAQ item component for clarity and reuse
function FAQItem({ faq, isOpen, onToggle, id }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl transition-all duration-300">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left text-amber-500 font-semibold text-sm sm:text-base focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        onClick={onToggle}
      >
        {faq.question}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-amber-500' : 'rotate-0 text-gray-600'
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-content-${id}`}
        className={`overflow-hidden px-5 transition-all duration-300 ${
          isOpen ? 'max-h-[200px] pb-4 text-gray-700' : 'max-h-0'
        }`}
      >
        {isOpen && <p className="text-sm sm:text-base">{faq.answer}</p>}
      </div>
    </div>
  );
}

export default function RewardingFAQs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl">
      <header className="flex items-center gap-3 mb-6">
        <FaQuestionCircle className="text-amber-600 text-xl" aria-hidden="true" />
        <h2 className="text-xl sm:text-2xl font-bold">Frequently Asked Questions</h2>
      </header>

      <div className="space-y-4" role="list" aria-label="Frequently asked questions">
        {faqList.map((faq, idx) => (
          <FAQItem
            key={idx}
            id={idx}
            faq={faq}
            isOpen={expandedIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>
    </section>
  );
}
