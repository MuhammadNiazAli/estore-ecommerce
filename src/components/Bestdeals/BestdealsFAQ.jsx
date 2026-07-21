'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long will it take to receive my order?',
    answer:
      'Most orders are delivered within 3-7 business days. You will receive a tracking link via email after your order ships.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and secure online banking payments.',
  },
  {
    question: 'Can I return or exchange an item?',
    answer:
      'Yes! We offer easy returns within 30 days of purchase. Please check our return policy for details.',
  },
  {
    question: 'Are there any hidden charges?',
    answer:
      'No hidden charges at all. The price you see is the price you pay.',
  },
];

const BestdealsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-gray-900 w-full py-12 px-4 sm:px-6 flex justify-center mb-[-100px]">
      <div className="max-w-[1200px] w-full">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 leading-tight">
          Frequently Asked <span className="text-amber-600">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-4 sm:px-6 py-4 sm:py-5 cursor-pointer hover:bg-gray-500 transition duration-300"
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? toggleFAQ(index) : null}
              role="button"
              tabIndex={0}
              aria-expanded={activeIndex === index}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
                    activeIndex === index ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-600 leading-relaxed ${
                  activeIndex === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-sm sm:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestdealsFAQ;
