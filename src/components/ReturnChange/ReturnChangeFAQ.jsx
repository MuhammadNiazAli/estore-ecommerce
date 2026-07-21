'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { gsap } from 'gsap';

const faqData = [
  {
    question: 'How long do I have to return a product?',
    answer:
      'You have 14 days from the delivery date to return an item, as long as it’s unused and in original packaging.',
  },
  {
    question: 'How can I exchange an item for a different size or color?',
    answer:
      'Go to the "Start an Exchange" section above and enter your Order ID to begin. Exchanges are free within 14 days.',
  },
  {
    question: 'Will I be charged for returns or exchanges?',
    answer:
      'Returns are free for damaged or incorrect items. Otherwise, a small handling fee may apply based on region.',
  },
  {
    question: 'How long does it take to get my refund?',
    answer:
      'Once your return is picked up and verified, refunds are processed within 1–3 business days.',
  },
  {
    question: 'Can I return a product after using it?',
    answer:
      'Used or damaged items due to personal use are not eligible for return unless defective upon arrival.',
  },
];

const ReturnChangeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containersRef = useRef([]);

  // Clear refs on every render to avoid stale refs
  containersRef.current = [];

  const addToRefs = (el) => {
    if (el && !containersRef.current.includes(el)) {
      containersRef.current.push(el);
    }
  };

  const toggleIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    containersRef.current.forEach((container, index) => {
      if (!container) return;
      const content = container.querySelector('.answer-content');
      if (!content) return;

      if (activeIndex === index) {
        // Open animation
        gsap.to(container, {
          duration: 0.35,
          height: content.scrollHeight,
          ease: 'power2.out',
          onStart: () => {
            container.style.overflow = 'hidden';
          },
          onComplete: () => {
            container.style.height = 'auto';
            container.style.overflow = 'visible';
          },
        });
        gsap.to(content, { duration: 0.35, opacity: 1, ease: 'power2.out' });
      } else {
        // Close animation
        gsap.to(content, {
          duration: 0.25,
          opacity: 0,
          ease: 'power2.in',
          onComplete: () => {
            gsap.to(container, {
              duration: 0.35,
              height: 0,
              ease: 'power2.in',
              onStart: () => {
                container.style.overflow = 'hidden';
              },
            });
          },
        });
      }
    });
  }, [activeIndex]);

  return (
    <section className="w-full bg-white text-gray-900 px-4 py-16 flex justify-center mb-[-50px] my-[-50px]">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-600 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-left text-amber-500 font-semibold text-lg px-5 py-5 hover:bg-gray-50 transition"
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  {isActive ? (
                    <ChevronUp className="text-amber-600" />
                  ) : (
                    <ChevronDown className="text-amber-600" />
                  )}
                </button>

                {/* Answer container with 0 height by default, animated by GSAP */}
                <div
                  ref={addToRefs}
                  className="overflow-hidden h-0 transition-height duration-300"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p
                    className="answer-content px-5 pb-5 pt-0 text-gray-700 opacity-0"
                    style={{ userSelect: 'text' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReturnChangeFAQ;
