'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import gsap from 'gsap';

const faqs = [
  {
    question: 'What is the hiring process like?',
    answer:
      'Our process includes an initial application review, one or two interviews, and a final culture fit discussion. We move fast and value your time.',
  },
  {
    question: 'Can I work remotely?',
    answer:
      'Absolutely! We support remote work across many roles. Location flexibility is a core part of our culture.',
  },
  {
    question: 'Do I need a degree to apply?',
    answer:
      'Not at all. We care more about your skills, portfolio, and passion than formal education.',
  },
  {
    question: 'How do I prepare for the interview?',
    answer:
      'We recommend being yourself, reviewing the role details, and being ready to discuss your past work, mindset, and aspirations.',
  },
];

const CareersFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      if (openIndex === idx) {
        gsap.to(ref, {
          height: 'auto',
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        });
      } else {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    });
  }, [openIndex]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-amber-500 font-medium hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-6 text-sm text-amber-300 overflow-hidden opacity-0 h-0"
              >
                <div className="pb-4 pt-1">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersFAQ;
