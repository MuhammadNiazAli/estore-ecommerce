'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const faqs = [
  {
    question: 'What does accessibility mean on a website?',
    answer:
      'Accessibility means designing and developing websites so that people with disabilities can perceive, understand, navigate, and interact with the site effectively.',
  },
  {
    question: 'How do you ensure screen reader compatibility?',
    answer:
      'We follow ARIA guidelines, semantic HTML, and proper labeling to ensure that screen readers can interpret all interactive elements clearly.',
  },
  {
    question: 'Do you provide keyboard navigation support?',
    answer:
      'Yes, all major functionalities are accessible via keyboard including tab navigation, focus states, and shortcuts where appropriate.',
  },
  {
    question: 'Can I report an accessibility issue?',
    answer:
      'Absolutely. You can use the contact form on this page to report any issues you’re facing — we take every concern seriously and aim to resolve it promptly.',
  },
];

const AccessibilityFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    return () => {
      contentRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      animateClose(index);
      setOpenIndex(null);
    } else {
      if (openIndex !== null) animateClose(openIndex);
      setOpenIndex(index);
      animateOpen(index);
    }
  };

  const animateOpen = (index) => {
    const el = contentRefs.current[index];
    if (!el) return;

    gsap.set(el, { display: 'block' });
    const height = el.scrollHeight;

    gsap.fromTo(
      el,
      { height: 0, opacity: 0 },
      {
        height,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        clearProps: 'height,opacity',
      }
    );
  };

  const animateClose = (index) => {
    const el = contentRefs.current[index];
    if (!el) return;

    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(el, { display: 'none' });
      },
    });
  };

  return (
    <section className="w-full bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 mb-[-150px]">
      <div className="max-w-[900px] mx-auto space-y-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 tracking-tight select-none">
          Accessibility FAQs
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-sm"
                aria-expanded={isOpen}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-yellow-300 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 hover:bg-gray-800 transition select-none"
                  aria-controls={`faq-panel-${index}`}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-400 transform transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="px-6 pb-5 text-gray-300 text-sm md:text-base leading-relaxed select-text overflow-hidden"
                  style={{ display: 'none', height: 0, opacity: 0 }}
                  role="region"
                  aria-live="polite"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFAQs;
