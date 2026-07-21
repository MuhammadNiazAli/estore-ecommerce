'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: "What does 'responsibility' mean to your company?",
    answer:
      "It means committing to sustainable, ethical, and community-focused decisions in every aspect of our operations—from sourcing to customer engagement.",
  },
  {
    question: "How are your products environmentally friendly?",
    answer:
      "We use recyclable packaging, ethically sourced materials, and carbon-neutral shipping wherever possible to reduce our ecological footprint.",
  },
  {
    question: "Are you part of any global sustainability programs?",
    answer:
      "Yes, we are proud members of the UN Global Compact and align our strategy with the Sustainable Development Goals (SDGs).",
  },
  {
    question: "Can customers participate in your initiatives?",
    answer:
      "Absolutely. From recycling programs to donation matching and community events, we offer many ways for customers to get involved.",
  },
];

const transition = { duration: 0.18, ease: 'easeInOut' };

const ResponsibilityFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && openIndex !== null) setOpenIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="w-full bg-white flex justify-center px-4 py-12 sm:py-16 md:py-20 mb-0"
      aria-label="Frequently Asked Questions"
    >
      <div className="w-full max-w-[1000px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10 sm:mb-12 select-none px-2 sm:px-0"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/50 border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left text-amber-600 font-semibold text-base sm:text-lg md:text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-lg transition"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={transition}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-amber-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-amber-600" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={transition}
                      className="px-4 sm:px-6 pb-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed select-text overflow-hidden"
                      ref={(el) => (contentRefs.current[index] = el)}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityFAQ;
