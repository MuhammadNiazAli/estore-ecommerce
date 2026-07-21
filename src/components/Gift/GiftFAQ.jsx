'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 30 days of purchase. Items must be in original condition and packaging to qualify for a refund or exchange.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping usually takes 3-7 business days. Express options are available at checkout for faster delivery.',
  },
  {
    question: 'Can I customize my gift?',
    answer:
      'Yes! Many of our products offer customization options. Look for the "Customize" label or contact our support team.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'We currently ship to select countries worldwide. Please check our shipping policy for the latest list of available destinations.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle, id }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="border border-amber-600/30 rounded-lg overflow-hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        id={`faq-header-${id}`}
        onClick={onToggle}
        className="w-full flex justify-between items-center bg-white px-5 py-4 text-left text-amber-600 font-semibold text-lg hover:bg-amber-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-600 rounded-lg"
      >
        {question}
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      <div
        id={`faq-content-${id}`}
        role="region"
        aria-labelledby={`faq-header-${id}`}
        className="overflow-hidden bg-white text-gray-700 text-sm sm:text-base px-5"
        style={{
          maxHeight,
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="py-4 select-text">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function GiftFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 bg-white rounded-lg shadow-2xl text-gray-900">
      <h2 className="text-amber-600 text-3xl font-extrabold mb-8 text-center drop-shadow-lg">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map(({ question, answer }, idx) => (
          <FAQItem
            key={idx}
            id={idx}
            question={question}
            answer={answer}
            isOpen={openIndex === idx}
            onToggle={() => toggleFAQ(idx)}
          />
        ))}
      </div>
    </section>
  );
}
