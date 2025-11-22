'use client'

import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is the warranty period for laptops?',
    answer:
      'Most laptops come with a 1-year manufacturer warranty. Extended warranties can be purchased separately.',
  },
  {
    id: 2,
    question: 'Can I upgrade the RAM or storage later?',
    answer:
      'Some laptops allow upgrades, but many ultrabooks have soldered components. Check product specs before buying.',
  },
  {
    id: 3,
    question: 'Do laptops come with pre-installed software?',
    answer:
      'Yes, usually the operating system and essential drivers are pre-installed. Additional software varies by brand.',
  },
  {
    id: 4,
    question: 'How long does the battery typically last?',
    answer:
      'Battery life varies by model and usage but generally ranges from 6 to 12 hours on a full charge.',
  },
];

const LaptopFaq = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-[1000px] mx-auto px-4 py-8 bg-gray-900 rounded-md text-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-gray-100 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="border border-gray-700 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggle(id)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-700 hover:bg-gray-600 transition focus:outline-none"
              aria-expanded={openId === id}
              aria-controls={`faq-${id}`}
            >
              <span className="font-medium">{question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openId === id ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openId === id && (
              <div
                id={`faq-${id}`}
                className="px-6 py-4 bg-gray-800 text-gray-300"
              >
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaptopFaq;
