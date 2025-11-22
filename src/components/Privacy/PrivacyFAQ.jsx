'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What personal data do you collect?',
    answer:
      'We collect only essential data such as your name, email, and usage behavior to provide our services efficiently. We do not collect sensitive data unless explicitly authorized.',
  },
  {
    question: 'How can I delete my data?',
    answer:
      'You can request data deletion at any time by contacting our support team or using the data deletion option in your account settings.',
  },
  {
    question: 'Do you share my information with third parties?',
    answer:
      'We never sell your information. We only share data with trusted service providers under strict confidentiality agreements.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'Your data is stored in secure, encrypted cloud servers hosted in ISO-certified data centers in the US and EU.',
  },
  {
    question: 'Is my data encrypted?',
    answer:
      'Yes. All user data is encrypted at rest using AES-256 and in transit using TLS 1.3 to ensure maximum protection.',
  },
];

const PrivacyFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-gray-900 text-yellow-400 w-full flex justify-center px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      aria-label="Privacy FAQ Section"
    >
      <div className="max-w-[1000px] w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-yellow-600 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-yellow-300 hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium text-base sm:text-lg leading-snug">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 shrink-0" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="px-5 pb-5 text-yellow-300 text-sm sm:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyFAQ;
