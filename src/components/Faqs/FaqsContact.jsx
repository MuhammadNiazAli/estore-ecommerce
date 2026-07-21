import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FaqsContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate sending form data
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="bg-white text-amber-600 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 rounded-md shadow-lg mt-6 mb-[-100px] relative overflow-hidden">
      {/* Background for Desktop */}
      <div className="hidden md:block absolute inset-0 bg-white opacity-90"></div>

      <h2 className="text-3xl font-bold text-amber-500 text-center mb-10 relative z-10">
        Contact Support
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <div className="bg-white md:bg-white/40 md:backdrop-blur-lg rounded-xl p-6 shadow-2xl">
          {submitted ? (
            <div
              role="alert"
              className="bg-amber-900 text-gray-900 p-4 rounded-md text-center mb-6"
            >
              Thank you for contacting us! We will get back to you shortly.
              <button
                className="mt-3 px-5 py-2 bg-amber-700 hover:bg-amber-800 rounded-md text-gray-900 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold text-amber-500">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md bg-white border ${
                      errors.name ? 'border-red-500' : 'border-amber-800 focus:border-amber-600'
                    } text-amber-300 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition`}
                    placeholder="Your full name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-1 font-semibold text-amber-500">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md bg-white border ${
                      errors.email ? 'border-red-500' : 'border-amber-800 focus:border-amber-600'
                    } text-amber-300 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition`}
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mt-6">
                <label htmlFor="subject" className="block mb-1 font-semibold text-amber-500">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-white border ${
                    errors.subject ? 'border-red-500' : 'border-amber-800 focus:border-amber-600'
                  } text-amber-300 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition`}
                  placeholder="Subject of your message"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mt-6">
                <label htmlFor="message" className="block mb-1 font-semibold text-amber-500">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-white border ${
                    errors.message ? 'border-red-500' : 'border-amber-800 focus:border-amber-600'
                  } text-amber-300 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition resize-none`}
                  placeholder="Write your message here..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={
                    !formData.name.trim() ||
                    !formData.email.trim() ||
                    !formData.subject.trim() ||
                    !formData.message.trim()
                  }
                  className={`px-8 py-3 rounded-md font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                    !formData.name.trim() ||
                    !formData.email.trim() ||
                    !formData.subject.trim() ||
                    !formData.message.trim()
                      ? 'bg-amber-900 cursor-not-allowed text-amber-600'
                      : 'bg-amber-700 hover:bg-amber-800 text-gray-900'
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right - Info & Image (Desktop Only) */}
        <div className="hidden md:flex flex-col justify-center gap-8 bg-white/40 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1679826780180-4047efbd3fbd?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Support illustration"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
          <div className="text-amber-400 text-lg space-y-4">
            <p className="flex items-center gap-3">
              <FiMail className="text-amber-600 text-2xl" /> support@example.com
            </p>
            <p className="flex items-center gap-3">
              <FiPhone className="text-amber-600 text-2xl" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-3">
              <FiMapPin className="text-amber-600 text-2xl" /> 123 Support Ave, Help City
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsContact;
