'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ResponsibilityHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStayUpdatedForm, setShowStayUpdatedForm] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef(null);
  const lastFocusedElement = useRef(null);

  const openModal = () => {
    lastFocusedElement.current = document.activeElement;
    setIsModalOpen(true);
    setShowStayUpdatedForm(false);
    setEmail('');
    setEmailError('');
    setIsSubmitting(false);
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (lastFocusedElement.current) {
      lastFocusedElement.current.focus();
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

    const modalNode = modalRef.current;
    const focusableElements = modalNode.querySelectorAll(focusableElementsString);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    modalNode.addEventListener('keydown', trapFocus);
    firstElement.focus();

    return () => modalNode.removeEventListener('keydown', trapFocus);
  }, [isModalOpen]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');

    if (!validateEmail(email.trim())) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-900 w-full flex justify-center px-4 pt-12 pb-6 my-[-50px] mb-0">
      <div className="w-full max-w-[1000px] text-center">
        {/* Glass-Blur Layer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-6 sm:p-10 border border-gray-700"
          aria-label="Responsibility section"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-400 uppercase text-xs sm:text-sm tracking-widest font-semibold mb-3"
          >
            Responsibility
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 px-2 sm:px-0"
          >
            Building a Responsible Future Together
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-6 px-2 sm:px-0 leading-relaxed"
          >
            We are committed to sustainable practices, ethical innovation, and social impact.
            Discover how we're making a difference and how you can be part of the journey.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-sm sm:text-base px-5 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 mx-auto"
            onClick={openModal}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 sm:p-6"
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              aria-modal="true"
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
            >
              <motion.div
                className="bg-gray-900 rounded-3xl max-w-full sm:max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-gray-700"
                variants={modalContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                ref={modalRef}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-yellow-500 transition-colors focus:outline-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                {!showStayUpdatedForm && (
                  <>
                    <h2
                      id="modal-title"
                      className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 select-none px-2 sm:px-0"
                    >
                      Our Responsibility Commitment
                    </h2>

                    <p
                      id="modal-desc"
                      className="text-gray-300 mb-6 leading-relaxed px-2 sm:px-0 text-sm sm:text-base md:text-lg"
                    >
                      At our core, we believe in building a sustainable future that benefits all. Our efforts focus on three key pillars:
                    </p>

                    <ul className="list-disc list-inside text-gray-400 mb-8 space-y-3 px-4 sm:px-6 md:px-0 text-sm sm:text-base md:text-lg">
                      <li>
                        <strong>Sustainable Practices:</strong> We minimize environmental impact through energy-efficient processes and responsible sourcing.
                      </li>
                      <li>
                        <strong>Ethical Innovation:</strong> We invest in technology and ideas that uplift communities while respecting human rights and fairness.
                      </li>
                      <li>
                        <strong>Social Impact:</strong> Our initiatives empower local communities, support education, and promote diversity and inclusion.
                      </li>
                    </ul>

                    <div className="text-center">
                      <button
                        onClick={() => setShowStayUpdatedForm(true)}
                        className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 mx-auto"
                      >
                        Stay Updated
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                )}

                {/* Stay Updated Form */}
                <AnimatePresence mode="wait">
                  {showStayUpdatedForm && (
                    <motion.div
                      key="stay-updated-form"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-300 px-2 sm:px-0"
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 select-none">
                        Stay Updated
                      </h2>

                      {!submitted ? (
                        <form
                          onSubmit={handleSubmit}
                          noValidate
                          className="max-w-md mx-auto"
                        >
                          <label
                            htmlFor="email"
                            className="block text-left mb-2 font-semibold text-sm sm:text-base"
                          >
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className={`w-full p-3 rounded-md text-gray-900 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400 transition-colors text-sm sm:text-base ${
                              emailError
                                ? 'border-2 border-red-500'
                                : 'border border-gray-300'
                            }`}
                            disabled={isSubmitting}
                            required
                            aria-invalid={emailError ? 'true' : 'false'}
                            aria-describedby={emailError ? 'email-error' : undefined}
                          />
                          {emailError && (
                            <p
                              id="email-error"
                              className="text-red-500 mt-1 text-xs sm:text-sm font-semibold"
                              role="alert"
                            >
                              {emailError}
                            </p>
                          )}

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-5 w-5 text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                              </svg>
                            ) : (
                              <>
                                Submit
                                <ArrowRight className="w-5 h-5" />
                              </>
                            )}
                          </button>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-center"
                        >
                          <p className="mb-6 text-lg text-green-400 font-semibold select-none">
                            Thank you for subscribing! We will keep you updated.
                          </p>
                          <button
                            onClick={closeModal}
                            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            Close
                            <X className="w-5 h-5" />
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResponsibilityHero;
