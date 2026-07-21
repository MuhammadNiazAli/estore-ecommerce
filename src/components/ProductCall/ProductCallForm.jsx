'use client';

import React, { useState } from 'react';

const ProductCallForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate form submission with backend feel
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  return (
    <section className="w-full bg-white flex justify-center px-4 py-12 sm:px-6 my-[-50px]">
      <form
        onSubmit={handleSubmit}
        className="max-w-[1000px] w-full bg-white rounded-xl p-6 sm:p-8 shadow-lg"
        noValidate
        aria-label="Contact form"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-black font-semibold mb-1 text-sm sm:text-base"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition ${
                errors.name ? 'ring-2 ring-black' : ''
              }`}
              placeholder="Your full name"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-black text-xs sm:text-sm mt-1"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-black font-semibold mb-1 text-sm sm:text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition ${
                errors.email ? 'ring-2 ring-black' : ''
              }`}
              placeholder="you@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-black text-xs sm:text-sm mt-1"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-black font-semibold mb-1 text-sm sm:text-base"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition ${
              errors.phone ? 'ring-2 ring-black' : ''
            }`}
            placeholder="+1 234 567 8900"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="text-black text-xs sm:text-sm mt-1"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-black font-semibold mb-1 text-sm sm:text-base"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition resize-none ${
              errors.message ? 'ring-2 ring-black' : ''
            }`}
            placeholder="Write your message here..."
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-black text-xs sm:text-sm mt-1"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-black font-semibold py-3 rounded-xl hover:bg-black transition-colors duration-200 shadow-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ProductCallForm;
