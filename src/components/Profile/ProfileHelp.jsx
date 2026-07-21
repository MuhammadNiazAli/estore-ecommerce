'use client';

import React, { useState, useMemo } from 'react';
import {
  LifebuoyIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

// Sample FAQs
const faqsData = [
  {
    id: 1,
    question: 'How do I reset my password?',
    answer: 'Go to Profile Settings > Password and follow the instructions to reset your password securely.',
  },
  {
    id: 2,
    question: 'How can I contact support?',
    answer: 'You can contact support by emailing support@example.com or using the live chat available on our website.',
  },
  {
    id: 3,
    question: 'Where can I find my order history?',
    answer: 'Order history is available under the "Orders" section in your profile dashboard.',
  },
  {
    id: 4,
    question: 'Can I update my billing information?',
    answer: 'Yes, billing information can be updated in the Billing section under your Profile Settings.',
  },
  {
    id: 5,
    question: 'How to track my shipments?',
    answer: 'Go to Orders and click on any order to see detailed shipment tracking information.',
  },
];

// Modal for Contact Support
const ContactSupportModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        alert('Support request sent!');
        setSubmitted(false);
        setForm({ name: '', email: '', message: '' });
        onClose();
      }, 1200);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          open
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed top-1/2 left-1/2 z-[100] w-full max-w-md bg-white text-gray-900 p-6 rounded-xl shadow-xl -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-black">Contact Support</h3>
            <button onClick={onClose} className="text-gray-600 hover:text-black">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-white text-gray-900 border ${
                  errors.name ? 'border-black' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.name && <p className="text-black text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-white text-gray-900 border ${
                  errors.email ? 'border-black' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.email && <p className="text-black text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-white text-gray-900 border ${
                  errors.message ? 'border-black' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-black resize-y`}
              />
              {errors.message && <p className="text-black text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-black text-gray-900 font-semibold py-3 rounded-full hover:bg-black transition"
            >
              {submitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

// Main Help Component
const ProfileHelp = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqsData;
    return faqsData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleFAQ = (id) => setOpenFAQ((prev) => (prev === id ? null : id));

  return (
    <>
      <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12 mb-[-100px]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-black mb-1">Help & Support</h2>
              <p className="text-gray-700">Find answers or get in touch with our support team.</p>
            </div>
            <div className="flex items-center gap-2 text-black font-semibold text-sm">
              <LifebuoyIcon className="w-6 h-6 animate-pulse" />
              FAQs <span className="ml-1 bg-black text-black rounded-full px-2 text-xs">{faqsData.length}</span>
            </div>
          </div>

          {/* Search Input */}
          <div className="mb-8">
            <input
              type="search"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 && (
              <p className="text-center text-gray-600">No FAQs found for your search.</p>
            )}

            {filteredFaqs.map(({ id, question, answer }) => {
              const isOpen = openFAQ === id;
              return (
                <div key={id} className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(id)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-2">
                      <QuestionMarkCircleIcon className="w-5 h-5 text-black" />
                      <span className="text-lg font-semibold">{question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUpIcon className="w-5 h-5 text-black" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-black" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-answer"
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="px-6 pb-4 text-gray-700 text-sm"
                      >
                        {answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Contact Support Button */}
          <div className="mt-10 text-center sm:text-right">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-black text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-black transition"
            >
              <LifebuoyIcon className="w-5 h-5" />
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ContactSupportModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default ProfileHelp;
