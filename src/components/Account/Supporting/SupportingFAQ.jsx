'use client';

import React, { useState, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How can I contact support?',
    answer:
      'You can reach out to our support team via the contact form above, live chat, or email at support@example.com.',
  },
  {
    question: 'What are your support hours?',
    answer: 'Our support team is available 24/7 to assist you with any issues or inquiries.',
  },
  {
    question: 'Where can I find troubleshooting guides?',
    answer:
      'We have a comprehensive help center with articles and guides accessible from the support page.',
  },
  {
    question: 'How do I track my support ticket?',
    answer:
      'Once you submit a ticket, you will receive a tracking number via email to monitor its status.',
  },
];

const SupportingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="max-w-[700px] mx-auto bg-white rounded-3xl p-8 shadow-2xl text-amber-300"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center tracking-tight">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 cursor-pointer select-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
              onClick={() => toggleFAQ(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFAQ(idx);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-controls={`faq-desc-${idx}`}
              aria-labelledby={`faq-title-${idx}`}
            >
              <div className="flex justify-between items-center">
                <h3 id={`faq-title-${idx}`} className="font-semibold text-lg text-amber-600">
                  {faq.question}
                </h3>
                <span
                  className={`text-amber-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                >
                  <FiChevronDown size={24} />
                </span>
              </div>

              <div
                id={`faq-desc-${idx}`}
                className="mt-2 text-amber-500 text-sm leading-relaxed overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? contentRefs.current[idx]?.scrollHeight + 'px' : '0px',
                }}
                ref={(el) => (contentRefs.current[idx] = el)}
              >
                <p className="py-2">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SupportingFAQ;
