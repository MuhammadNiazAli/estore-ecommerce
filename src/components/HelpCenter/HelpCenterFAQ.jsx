'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { gsap } from 'gsap';

const faqs = [
  {
    question: 'How do I track my order?',
    answer:
      'You can track your order by logging into your account and navigating to the "My Orders" section. There you will find real-time status updates.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 30 days of delivery. Items must be in original condition and packaging. Visit the returns page for more details.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can contact customer support via phone, live chat, or email. Visit our Contact Support section for all options.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards, PayPal, and other popular payment methods. All payments are securely processed.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer:
      'Orders can be changed or canceled within 2 hours of placing them. After that, you may need to initiate a return after delivery.',
  },
];

const HelpCenterFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  // Clear all animations on unmount
  useEffect(() => {
    return () => {
      gsap.killTweensOf(answerRefs.current);
    };
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      // Close current
      animateClose(index);
      setOpenIndex(null);
    } else {
      // Close old open
      if (openIndex !== null) animateClose(openIndex);

      // Open new
      animateOpen(index);
      setOpenIndex(index);
    }
  };

  const animateOpen = (index) => {
    const el = answerRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.set(el, { height: 'auto', opacity: 1, display: 'block' });
    const height = el.offsetHeight;

    gsap.fromTo(
      el,
      { height: 0, opacity: 0, display: 'block' },
      {
        height,
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
        clearProps: 'height opacity display',
      }
    );
  };

  const animateClose = (index) => {
    const el = answerRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: 'power1.in',
      onComplete: () => {
        gsap.set(el, { display: 'none' });
      },
    });
  };

  return (
    <section className="bg-white w-full px-4 py-12 flex justify-center mb-[-40px]">
      <div className="w-full max-w-[1000px] text-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 cursor-pointer select-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFAQ(index);
                }
              }}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-600" />
                )}
              </div>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                ref={(el) => (answerRefs.current[index] = el)}
                style={{ display: 'none', overflow: 'hidden', height: 0, opacity: 0 }}
                className="mt-3 text-gray-700 leading-relaxed"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenterFAQ;
