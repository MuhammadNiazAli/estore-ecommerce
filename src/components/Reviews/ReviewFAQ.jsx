'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'How do I leave a review?',
    answer:
      'You can leave a review by filling out the review form on this page with your honest feedback about the product or service.',
  },
  {
    question: 'Can I edit or delete my review?',
    answer:
      'Currently, you cannot edit or delete reviews once submitted. Please contact customer support if you need assistance.',
  },
  {
    question: 'Are reviews verified?',
    answer:
      'We mark verified buyers to help you identify authentic reviews from actual customers.',
  },
  {
    question: 'How long does it take for my review to appear?',
    answer:
      'Reviews are usually moderated and appear within 24-48 hours after submission.',
  },
];

const ReviewFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const onKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleIndex(idx);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (idx + 1) % faqData.length;
      faqRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (idx - 1 + faqData.length) % faqData.length;
      faqRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <section
      className="w-full max-w-[900px] mb-[-26px] mx-auto mt-16  px-6"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map(({ question, answer }, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 cursor-pointer select-none shadow-md"
              onClick={() => toggleIndex(idx)}
              onKeyDown={(e) => onKeyDown(e, idx)}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              aria-labelledby={`faq-question-${idx}`}
              ref={(el) => (faqRefs.current[idx] = el)}
            >
              <div className="flex justify-between items-center">
                <h3
                  id={`faq-question-${idx}`}
                  className="text-lg font-semibold text-amber-400"
                >
                  {question}
                </h3>
                <motion.span
                  aria-hidden="true"
                  className="text-amber-400 font-bold text-2xl select-none"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    id={`faq-answer-${idx}`}
                    className="mt-3 text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewFAQ;
