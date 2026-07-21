'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'What are the estimated delivery times?',
    answer:
      'Delivery typically takes 1-3 business days for domestic orders and 5-10 business days for international shipping, depending on your location.',
  },
  {
    question: 'Can I track my shipment?',
    answer:
      'Yes! Once your order ships, you will receive a tracking number via email to monitor your package in real time.',
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'We offer free shipping on orders over $75 within the continental United States. Other promotions may apply occasionally.',
  },
  {
    question: 'What happens if my package is lost or damaged?',
    answer:
      'If your package is lost or arrives damaged, please contact our support team within 7 days of delivery. We will arrange a replacement or refund.',
  },
];

const answerVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    paddingTop: 16,
    paddingBottom: 16,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  collapsed: {
    opacity: 0,
    scaleY: 0,
    paddingTop: 0,
    paddingBottom: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const ShippingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="Shipping frequently asked questions"
      className="max-w-[900px] mx-auto px-6 py-16 sm:py-24 text-gray-700"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-14 text-center drop-shadow-lg tracking-wide select-none">
        Shipping FAQs
      </h2>

      <div className="space-y-6">
        {faqs.map(({ question, answer }, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={question}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-black"
              onClick={() => toggleIndex(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleIndex(i);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              aria-labelledby={`faq-question-${i}`}
            >
              <div className="flex items-center justify-between px-6 py-5 sm:py-6">
                <h3
                  id={`faq-question-${i}`}
                  className={`text-lg sm:text-xl font-semibold transition-colors ${
                    isOpen ? 'text-black' : 'text-gray-700'
                  } hover:text-black underline decoration-black underline-offset-4`}
                >
                  {question}
                </h3>
                <span className="text-black flex-shrink-0">
                  {isOpen ? (
                    <FiMinus className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <FiPlus className="w-6 h-6" aria-hidden="true" />
                  )}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    aria-live="polite"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={answerVariants}
                    style={{ originY: 0 }}
                    className="bg-white bg-opacity-70 px-6 sm:px-8 text-gray-700 text-base sm:text-lg leading-relaxed"
                  >
                    {answer}
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

export default ShippingFAQ;
