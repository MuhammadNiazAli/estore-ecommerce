'use client';

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

const SupportingContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate async submit action (replace with real API call)
    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setSubmitStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      aria-label="Contact support form"
      className="max-w-[700px] mx-auto bg-gray-900 rounded-3xl p-8 shadow-2xl text-yellow-100"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center tracking-tight">
        Contact Support
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-yellow-400">
            Name
          </label>
          <div className="relative">
            <FiMail className="absolute top-3 left-3 text-yellow-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-yellow-800 placeholder-yellow-600 text-yellow-100
                focus:outline-none focus:ring-2 ${
                  errors.name ? 'focus:ring-red-500' : 'focus:ring-yellow-400'
                }`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              disabled={isSubmitting}
            />
          </div>
          {errors.name && (
            <p id="name-error" className="mt-1 text-red-500 text-sm" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-yellow-400">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute top-3 left-3 text-yellow-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-yellow-800 placeholder-yellow-600 text-yellow-100
                focus:outline-none focus:ring-2 ${
                  errors.email ? 'focus:ring-red-500' : 'focus:ring-yellow-400'
                }`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="mt-1 text-red-500 text-sm" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-yellow-400">
            Message
          </label>
          <div className="relative">
            <FiMessageCircle className="absolute top-3 left-3 text-yellow-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here..."
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-yellow-800 placeholder-yellow-600 text-yellow-100 resize-y
                focus:outline-none focus:ring-2 ${
                  errors.message ? 'focus:ring-red-500' : 'focus:ring-yellow-400'
                }`}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={isSubmitting}
            />
          </div>
          {errors.message && (
            <p id="message-error" className="mt-1 text-red-500 text-sm" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-yellow-400 text-yellow-900 font-semibold py-3 rounded-xl shadow-md
            transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
            ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'hover:bg-yellow-300'}`}
          aria-label="Send support message"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitStatus && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 text-center text-yellow-300 font-semibold"
        >
          {submitStatus}
        </p>
      )}
    </section>
  );
};

export default SupportingContactForm;
