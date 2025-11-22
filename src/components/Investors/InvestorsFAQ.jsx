'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'What is the minimum investment amount?',
    answer:
      'The minimum investment amount varies depending on the investment vehicle. Please contact our investor relations team for detailed information.',
  },
  {
    question: 'How often do you provide financial reports?',
    answer:
      'We provide quarterly financial reports to all our investors, along with annual summaries and updates on strategic initiatives.',
  },
  {
    question: 'Can I participate in shareholder meetings remotely?',
    answer:
      'Yes, we offer virtual attendance options for shareholder meetings to ensure all investors can participate regardless of location.',
  },
  {
    question: 'How can I contact the investor relations team?',
    answer:
      'You can reach out to our investor relations team via the contact form on the Investors Contact page or email us directly at investors@example.com.',
  },
];

const InvestorsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Investors Frequently Asked Questions"
      className="bg-gray-900 text-yellow-400 flex justify-center py-12 px-4"
    >
      <div className="max-w-[1000px] w-full">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Frequently Asked Questions</h2>

        <dl className="space-y-4">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`faq-desc-${index}`}
                aria-labelledby={`faq-label-${index}`}
                className="bg-gray-800 rounded-xl px-5 py-4 sm:py-5 cursor-pointer select-none transition-all duration-200 hover:bg-gray-700 focus:outline-none"
              >
                <dt
                  id={`faq-label-${index}`}
                  className="flex justify-between items-center text-lg sm:text-xl font-semibold text-yellow-300"
                >
                  {question}
                  <motion.span
                    aria-hidden="true"
                    className="text-yellow-400 text-2xl font-bold ml-4"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-desc-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: 'easeInOut',
                      }}
                      className="overflow-hidden mt-3 text-yellow-300 leading-relaxed text-base sm:text-lg"
                    >
                      {answer}
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default InvestorsFAQ;
