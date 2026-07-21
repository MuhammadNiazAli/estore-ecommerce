import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is included in the New Season Collection?',
    answer:
      'Our New Season Collection features premium clothing, accessories, and footwear crafted with modern designs and top-quality materials.',
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'Yes, we provide free standard shipping on all orders over $100. Express options are also available.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order is shipped, you will receive a confirmation email with a tracking link to monitor your delivery.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day hassle-free return policy for unused products with original tags.',
  },
];

const NewseasonFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 mb-[-150px]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-black text-lg mb-10">
          Find answers to the most common questions about our New Season Collection.
        </p>

        <div className="text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 md:p-5 cursor-pointer border border-transparent hover:border-black transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-black font-semibold text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-black transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`mt-3 text-black text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewseasonFAQ;
