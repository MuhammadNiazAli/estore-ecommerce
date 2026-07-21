import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: "What is the battery life of AeroGlide Pro Wireless Earbuds?",
    answer:
      "The earbuds provide up to 8 hours of playback, and the charging case extends the total battery life to 24 hours.",
  },
  {
    question: "Are these earbuds waterproof?",
    answer:
      "Yes, they have an IPX7 waterproof rating, making them resistant to sweat and rain, perfect for workouts and outdoor activities.",
  },
  {
    question: "Can I use voice assistants with these earbuds?",
    answer:
      "Absolutely! They come with built-in voice assistant support, allowing you to control your music and calls hands-free.",
  },
  {
    question: "What devices are compatible with these earbuds?",
    answer:
      "They support Bluetooth 5.1 and are compatible with most smartphones, tablets, and Bluetooth-enabled devices.",
  },
  {
    question: "Is there a warranty for these earbuds?",
    answer:
      "Yes, they come with a 1-year limited warranty covering manufacturing defects.",
  },
];

const ProductFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white text-left text-gray-900 font-semibold text-lg hover:bg-gray-500 transition"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-6 overflow-hidden bg-white text-gray-700 transition-[max-height,padding] duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight + 16 + 'px' // +16px for padding vertical
                    : '0px',
                  paddingTop: isOpen ? '1rem' : '0px',
                  paddingBottom: isOpen ? '1rem' : '0px',
                }}
              >
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductFAQs;
