'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InvestorsHero = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', amount: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    const handleEsc = (e) => e.key === 'Escape' && setShowModal(false);

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.amount) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setForm({ name: '', email: '', amount: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section
      aria-label="Investor introduction section"
      className="relative isolate flex items-center justify-center bg-gray-900 text-yellow-400 overflow-hidden py-16 sm:py-24 md:py-32 my-[-100px] mb-[-100px]"
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-yellow-400 mb-6"
        >
          Invest in Our Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-yellow-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Join our journey to create lasting impact. Innovation, transparency,
          and sustainable growth are at the heart of everything we do.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={() => setShowModal(true)}
          aria-label="Start your investment journey"
          className="mt-10 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg px-8 py-3 shadow-lg shadow-yellow-500/20 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 focus-visible:ring-opacity-60"
        >
          Get Started
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 text-gray-800 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">Start Investing</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Fill out the form below to express your interest. We'll get
                    back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="number"
                      name="amount"
                      placeholder="Investment Amount (USD)"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                      value={form.amount}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg py-2 transition-all duration-300 disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Submit Interest'}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Submission Successful!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your interest. We’ll contact you soon.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InvestorsHero;
