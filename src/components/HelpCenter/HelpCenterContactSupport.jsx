'use client';

import React, { useState, useEffect } from 'react';
import { PhoneCall, Mail, MessageCircleMore } from 'lucide-react';

const HelpCenterContactSupport = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ email: '', message: '' });

  // Basic email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate inputs on change
  useEffect(() => {
    setErrors({
      email:
        email.trim() === ''
          ? 'Email is required.'
          : !emailRegex.test(email)
          ? 'Please enter a valid email address.'
          : '',
      message: message.trim() === '' ? 'Message is required.' : '',
    });
  }, [email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.message) {
      setSubmitted(true);
      setEmail('');
      setMessage('');
      // Clear success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const isFormValid = !errors.email && !errors.message && email && message;

  return (
    <section className="bg-white w-full px-4 py-12 flex justify-center mb-[-30px]">
      <div className="w-full max-w-[1000px] text-gray-900 space-y-12">
        {/* Title */}
        <header className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-black tracking-tight">
            Contact Support
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            We're here to help! Choose a contact method below or send us a message.
          </p>
        </header>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <PhoneCall className="w-8 h-8 text-black" aria-hidden="true" />,
              title: 'Call Us',
              info: '+1 (800) 123-4567',
              role: 'link',
              href: 'tel:+18001234567',
            },
            {
              icon: <MessageCircleMore className="w-8 h-8 text-black" aria-hidden="true" />,
              title: 'Live Chat',
              info: 'Available 24/7 in the corner chat',
            },
            {
              icon: <Mail className="w-8 h-8 text-black" aria-hidden="true" />,
              title: 'Email Us',
              info: 'support@example.com',
              role: 'link',
              href: 'mailto:support@example.com',
            },
          ].map(({ icon, title, info, role, href }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-[1.03] hover:bg-black hover:text-black cursor-pointer focus-within:ring-4 focus-within:ring-black"
              tabIndex={0}
              role={role === 'link' ? 'link' : 'region'}
              aria-label={title}
              onClick={() => {
                if (href) window.open(href, '_self');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && href) {
                  window.open(href, '_self');
                }
              }}
            >
              {icon}
              <h3 className="mt-3 font-semibold text-lg">{title}</h3>
              <p className="text-sm mt-1">{info}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto space-y-6"
          aria-labelledby="contact-form-title"
        >
          <h3
            id="contact-form-title"
            className="text-black text-2xl font-semibold text-center"
          >
            Send Us a Message
          </h3>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              className={`w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition ${
                errors.email ? 'ring-2 ring-black' : ''
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
              required
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-black"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-gray-700 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className={`w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition resize-none ${
                errors.message ? 'ring-2 ring-black' : ''
              }`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
              required
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-black"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-md font-semibold transition focus:outline-none focus:ring-4 focus:ring-black ${
              isFormValid
                ? 'bg-black hover:bg-black text-black cursor-pointer'
                : 'bg-black/60 text-black cursor-not-allowed'
            }`}
            aria-disabled={!isFormValid}
          >
            Send Message
          </button>

          {submitted && (
            <p
              className="text-black text-center pt-2"
              role="status"
              aria-live="polite"
            >
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HelpCenterContactSupport;
