
'use client';

import React, { useState } from 'react';
import { FiCheckCircle, FiStar, FiShield } from 'react-icons/fi';

export default function FooterLatter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <footer className="bg-white text-gray-700 py-20 px-6 border-t border-gray-200 shadow-inner my-[-50px]">
      <div className="max-w-[1000px] mx-auto w-full">

   
        <section className="text-center mb-20">
          <h4 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-wide drop-shadow-lg">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
            Stay updated with the latest news, exclusive offers, and special deals — delivered straight to your inbox.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
              aria-label="Newsletter subscription form"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white sm:flex-1 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-amber-700 text-amber-50 placeholder-gray-500 shadow-md transition"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 cursor-pointer active:bg-amber-900 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition focus:outline-none focus:ring-4 focus:ring-amber-900 flex items-center justify-center gap-2"
              >
                Subscribe
                <FiCheckCircle size={20} />
              </button>
            </form>
          ) : (
            <p className="text-green-400 font-semibold mt-6 text-lg flex items-center justify-center gap-2 animate-fadeIn">
              <FiCheckCircle size={24} /> Thank you for subscribing!
            </p>
          )}
        </section>

        <section className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center text-amber-500">
          <div className="space-y-3">
            <FiStar className="mx-auto text-amber-700" size={40} />
            <p className="text-gray-900 font-bold text-xl sm:text-2xl">Rated 4.8/5</p>
            <p className="text-gray-600 text-sm sm:text-base">By 20,000+ Happy Customers</p>
          </div>
          <div className="space-y-3">
            <FiShield className="mx-auto text-amber-700" size={40} />
            <p className="text-gray-900 font-bold text-xl sm:text-2xl">Secure & Reliable</p>
            <p className="text-gray-600 text-sm sm:text-base">
              Trusted by millions worldwide for fast, safe shopping.
            </p>
          </div>
          <div className="space-y-3">
            <FiCheckCircle className="mx-auto text-amber-700" size={40} />
            <p className="text-gray-900 font-bold text-xl sm:text-2xl">Quality Guarantee</p>
            <p className="text-gray-600 text-sm sm:text-base">
              Dedicated to offering the best products and service.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
