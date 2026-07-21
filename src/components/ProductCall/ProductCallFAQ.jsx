'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How long does delivery take?',
    answer:
      'We typically deliver within 2–5 business days, depending on your location and the product type.',
  },
  {
    question: 'Do you offer refunds or exchanges?',
    answer:
      'Yes, we have a 7-day refund and 14-day exchange policy. Items must be unused and in original condition.',
  },
  {
    question: 'Is my payment information secure?',
    answer:
      'Absolutely. We use 256-bit SSL encryption and do not store any payment details.',
  },
  {
    question: 'Are your products authentic?',
    answer:
      'Yes, we only source original, brand-authorized products directly from trusted partners.',
  },
];

const ProductCallFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white flex justify-center px-4 py-12 sm:px-6 my-[-70px] mb-0">
      <div className="max-w-[1000px] w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 sm:px-5 sm:py-4 text-left text-amber-500 hover:bg-gray-500 transition-colors"
              >
                <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 sm:px-5 text-gray-700 text-sm sm:text-base border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCallFAQ;
