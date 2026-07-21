'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Submitted Contact Form:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full px-6 py-16 bg-white text-gray-900 my-[-30px]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Contact Us
        </h2>

        {submitted ? (
          <p className="text-center text-black text-lg font-medium">
            Thank you for reaching out! We'll be in touch shortly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6"
          >
      
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white border border-gray-200 rounded resize-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Let us know how we can help..."
              />
            </div>

  
            <button
              type="submit"
              className="w-full bg-black hover:bg-black transition-colors text-gray-900 py-3 rounded font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
