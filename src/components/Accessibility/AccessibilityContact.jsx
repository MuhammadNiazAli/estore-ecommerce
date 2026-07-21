import React, { useState } from 'react';

const AccessibilityContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just a dummy submit for UX
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full bg-white flex justify-center px-4 py-12 sm:py-16"
    >
      <div className="max-w-[1000px] w-full text-black">
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          style={{ textShadow: '0 0 8px #FFD70099' }}
        >
          Contact Us for Accessibility Support
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-[700px] mx-auto flex flex-col space-y-6"
          noValidate
        >
          <label htmlFor="name" className="font-semibold text-lg">
            Name
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-1 w-full rounded-md bg-white border border-black px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </label>

          <label htmlFor="email" className="font-semibold text-lg">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md bg-white border border-black px-3 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </label>

          <label htmlFor="message" className="font-semibold text-lg">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className="mt-1 w-full rounded-md bg-white border border-black px-3 py-2 text-black placeholder-gray-500 resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </label>

          <button
            type="submit"
            className="self-center bg-black hover:bg-black text-gray-900 font-bold py-3 px-8 rounded-md shadow-lg transition"
            aria-live="polite"
            aria-disabled={submitted}
            disabled={submitted}
          >
            {submitted ? 'Thank you for contacting us!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AccessibilityContact;
