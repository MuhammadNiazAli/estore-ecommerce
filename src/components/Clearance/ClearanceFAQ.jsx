'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is included in the clearance sale?",
    answer:
      "Our clearance sale includes select products across various categories, all offered at heavily discounted prices while stocks last.",
  },
  {
    question: "Can I return or exchange clearance items?",
    answer:
      "Yes, clearance items can be returned or exchanged according to our standard return policy, unless otherwise stated in the product details.",
  },
  {
    question: "How long will the clearance sale last?",
    answer:
      "The clearance sale is available until the end of this season or while stocks last. Keep an eye on the countdown timers for specific deals.",
  },
  {
    question: "Do clearance items come with a warranty?",
    answer:
      "Most clearance items come with the manufacturer’s warranty. Warranty details are provided on the product page.",
  },
  {
    question: "Can I use promo codes with clearance items?",
    answer:
      "Promo codes generally cannot be combined with clearance discounts, but occasional exceptions may apply during special events.",
  },
];

const ClearanceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-gray-900 w-full py-12 px-4 sm:px-6 flex justify-center mb-[-100px]">
      <div className="max-w-[1200px] w-full">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 leading-tight">
          Frequently Asked <span className="text-black">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-4 sm:px-6 py-4 sm:py-5 cursor-pointer hover:bg-gray-500 transition duration-300"
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? toggleFAQ(index) : null}
              role="button"
              tabIndex={0}
              aria-expanded={activeIndex === index}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
                    activeIndex === index ? 'rotate-180 text-black' : ''
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-600 leading-relaxed ${
                  activeIndex === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-sm sm:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClearanceFAQ;
