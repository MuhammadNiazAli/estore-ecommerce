'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What is the return policy?',
    answer:
      'You can return any item within 7 days of delivery for a full refund or exchange, no questions asked.',
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'Yes, we offer free standard shipping on orders above $50. Express shipping is available at additional cost.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order ships, you will receive an email with the tracking number and link to the courier website.',
  },
  {
    question: 'Are the products covered by warranty?',
    answer:
      'Most products come with a 1-year manufacturer warranty. Please check individual product details for warranty info.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer:
      'You can change or cancel your order within 2 hours of placing it by contacting our support team.',
  },
];

const contentVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
  collapsed: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
};

const DealFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto bg-white text-gray-900 rounded-lg p-6 shadow-lg max-w-[1100px] w-full my-5">
      <h2 className="text-3xl font-semibold mb-8 text-center border-b border-gray-200 pb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none text-lg font-medium transition-colors duration-300 ${
                  isActive ? 'bg-white text-amber-600' : 'hover:bg-gray-500'
                }`}
                aria-expanded={isActive}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <span>{item.question}</span>
                <span
                  className={`text-2xl font-bold transform transition-transform duration-300 ${
                    isActive ? 'rotate-45 text-amber-600' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    id={`faq-content-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={contentVariants}
                    className="px-5 pb-5 text-gray-700 text-base leading-relaxed origin-top"
                    style={{ overflow: 'hidden', transformOrigin: 'top' }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DealFAQ;
