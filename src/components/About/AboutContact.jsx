'use client';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const AboutContact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        '',  
        '',   
        formRef.current,
        ''      
      )
      .then(() => {
        alert('Thank you! Your message has been sent successfully.');
        formRef.current.reset(); 
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section
      className="bg-white text-gray-800 py-16 px-4 sm:px-6 flex justify-center my-[-80px] mb-[-200px]"
      aria-label="Contact section"
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-amber-600 text-center mb-5">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 text-base xs:text-lg max-w-xl mx-auto mb-8 px-1">
          Have a question, suggestion, or just want to say hello? We’d love to hear from you.
        </p>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 sm:gap-5"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full sm:w-1/2 px-4 py-3 rounded bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full sm:w-1/2 px-4 py-3 rounded bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded bg-white border border-gray-200 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-amber-700 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-amber-600 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 sm:mt-12 space-y-4 text-center text-sm sm:text-base text-gray-600 px-2">
          <p className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <FiMail className="text-amber-600 text-lg" />
            <a
              href="mailto:contact@example.com"
              className="underline hover:text-amber-500 transition break-all"
            >
              contact@example.com
            </a>
          </p>
          <p className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <FiPhone className="text-amber-600 text-lg" />
            <a
              href="tel:+1234567890"
              className="underline hover:text-amber-500 transition"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-center">
            <FiMapPin className="text-amber-600 text-lg" />
            <span>1234 Street Name, City, Country</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
