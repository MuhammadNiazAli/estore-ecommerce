import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'How do I reset my password?',
    answer:
      'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email.',
  },
  {
    id: 2,
    question: 'Can I track my order?',
    answer:
      'Yes, you can track your order status in your account dashboard under "My Orders".',
  },
  {
    id: 3,
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, MasterCard, PayPal, and Apple Pay.',
  },
  {
    id: 4,
    question: 'What is your return policy?',
    answer:
      'You can return most items within 30 days of receipt for a full refund. Items must be in original condition.',
  },
];

const FaqsAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1000px] px-4 sm:px-6 md:px-8 py-8 bg-white text-black rounded-md shadow-md mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-black text-center sm:text-left">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-black">
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className="py-4">
            {/* FAQ Question Button */}
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              onClick={() => toggleFaq(id)}
              aria-expanded={openId === id}
              aria-controls={`faq-answer-${id}`}
              id={`faq-question-${id}`}
            >
              <span className="text-base sm:text-lg font-semibold">{question}</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                  openId === id ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* FAQ Answer Area */}
            <div
              id={`faq-answer-${id}`}
              role="region"
              aria-labelledby={`faq-question-${id}`}
              className={`text-black text-sm sm:text-base mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openId === id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="pt-2">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsAccordion;
