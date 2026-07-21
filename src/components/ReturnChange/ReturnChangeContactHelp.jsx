'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';

const ReturnChangeContactHelp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(''); // clear error on input change
  };

  const validateEmail = (email) => {
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // basic frontend validation
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter a message.');
      return;
    }

    setSubmitting(true);

    // simulate submission delay
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }, 2000);
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 py-14 flex justify-center">
      <div className="w-full max-w-[1000px] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Need More Help?</h2>
        <p className="text-gray-700 text-lg mb-10 max-w-xl mx-auto">
          We’re here for you. Choose a contact method below or send us a message.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
          <div className="bg-white hover:bg-gray-500 transition rounded-xl p-6 shadow-lg flex flex-col items-start">
            <Phone className="text-black mb-3" size={32} />
            <h4 className="text-black font-semibold text-lg mb-1">Call Us</h4>
            <p className="text-gray-600">Mon–Sat, 9 AM to 6 PM</p>
            <p className="mt-1 text-gray-900 font-medium select-text">+1 800 123 4567</p>
          </div>
          <div className="bg-white hover:bg-gray-500 transition rounded-xl p-6 shadow-lg flex flex-col items-start">
            <Mail className="text-black mb-3" size={32} />
            <h4 className="text-black font-semibold text-lg mb-1">Email Support</h4>
            <p className="text-gray-600">Response within 12–24 hrs</p>
            <p className="mt-1 text-gray-900 font-medium select-text">support@yourshop.com</p>
          </div>
          <div className="bg-white hover:bg-gray-500 transition rounded-xl p-6 shadow-lg flex flex-col items-start">
            <MessageSquare className="text-black mb-3" size={32} />
            <h4 className="text-black font-semibold text-lg mb-1">Live Chat</h4>
            <p className="text-gray-600">24/7 chat available via website widget</p>
            <p className="mt-1 text-gray-900 font-medium">Click chat icon below</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-left max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h3>

          <div aria-live="polite" className="mb-4 min-h-[1.5rem]">
            {submitted && (
              <p className="text-black font-medium select-none">
                ✅ Your message was submitted successfully!
              </p>
            )}
            {error && (
              <p className="text-black font-medium select-none" role="alert">
                ⚠️ {error}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1 cursor-pointer">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                disabled={submitting}
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                placeholder="Your name"
                aria-invalid={!!error && !formData.name.trim()}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 cursor-pointer">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                disabled={submitting}
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                placeholder="you@example.com"
                aria-invalid={!!error && !validateEmail(formData.email)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1 cursor-pointer">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={submitting}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition resize-none"
                placeholder="Tell us how we can help..."
                aria-invalid={!!error && !formData.message.trim()}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-black text-black px-6 py-3 rounded-md font-semibold transition
                hover:bg-black focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
                disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Support Hours */}
        <div className="mt-10 flex justify-center items-center text-gray-600 gap-2 text-sm sm:text-base">
          <Clock className="text-black" size={18} aria-hidden="true" />
          <p>Support available Monday to Saturday, 9 AM – 6 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ReturnChangeContactHelp;
