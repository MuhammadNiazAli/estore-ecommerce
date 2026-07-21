'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ResponsibilityMission = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);

  // Accessibility: focus trap for "Read More" expandable
  useEffect(() => {
    if (!showMore) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

    const modalNode = contentRef.current;
    if (!modalNode) return;

    const focusableElements = modalNode.querySelectorAll(focusableElementsString);
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleTab(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    modalNode.addEventListener('keydown', handleTab);
    firstEl.focus();

    return () => modalNode.removeEventListener('keydown', handleTab);
  }, [showMore]);

  return (
    <section
      className="w-full bg-white flex justify-center px-4 py-16 sm:py-20"
      aria-labelledby="mission-title"
      role="region"
    >
      <div className="w-full max-w-[1000px] text-center px-2 sm:px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            id="mission-title"
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-600 mb-6 select-none"
          >
            Our Mission
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          >
            To lead with integrity and innovation, fostering sustainable growth and
            empowering communities worldwide by integrating responsibility into
            everything we do.
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="italic text-amber-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto border-l-4 border-amber-600 pl-6 mb-8 cursor-default
              focus:outline-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 transition-shadow
              hover:shadow-amber-700/40"
            tabIndex={0}
            aria-label="Quote about responsibility"
            role="blockquote"
          >
            “Responsibility is not just a commitment; it’s our way of doing business.”
          </motion.blockquote>

          {/* CTA to expand more details */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => setShowMore((prev) => !prev)}
              aria-expanded={showMore}
              aria-controls="mission-more-content"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {showMore ? 'Show Less' : 'Read More'}
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  showMore ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </motion.div>

          {/* Expandable content */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                id="mission-more-content"
                key="more-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden mt-8 text-gray-700 max-w-3xl mx-auto text-left leading-relaxed select-text"
                ref={contentRef}
              >
                <p className="mb-4 text-sm sm:text-base md:text-lg">
                  Our mission guides every decision we make. We believe that integrating responsibility
                  into business is essential to creating lasting value not just for shareholders,
                  but for employees, customers, and communities alike.
                </p>
                <p className="mb-4 text-sm sm:text-base md:text-lg">
                  We strive to innovate in ways that are sustainable and ethical, prioritizing long-term
                  impact over short-term gains. This commitment ensures that our growth positively
                  influences the environment and society.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Join us as we work to foster a culture of transparency, accountability, and inclusivity
                  — values that empower everyone connected to our mission to contribute to a better world.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibilityMission;
