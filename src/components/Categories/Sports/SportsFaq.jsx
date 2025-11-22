"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What types of sports gear do you offer?",
    answer:
      "We provide premium sports gear for baseball, basketball, football, tennis, and more. All products are tested for durability and performance.",
  },
  {
    id: 2,
    question: "Do you offer worldwide shipping?",
    answer:
      "Yes, we ship worldwide with free shipping on all orders above $99. Delivery times may vary by location.",
  },
  {
    id: 3,
    question: "Can I return a product if I'm not satisfied?",
    answer:
      "Absolutely! We have a 30-day hassle-free return policy on all products as long as they are in original condition.",
  },
  {
    id: 4,
    question: "Are your products used by professionals?",
    answer:
      "Yes, many of our products are used by professional athletes for practice and official games.",
  },
  {
    id: 5,
    question: "Do you provide product warranties?",
    answer:
      "Most of our products come with a 6-month warranty against manufacturing defects. Warranty details are available on product pages.",
  },
];

const SportsFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 py-14 text-yellow-400 my-[-30px]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-300 mt-2 text-lg">
            Got questions? We’ve got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gray-800 rounded-xl shadow-md p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-white text-lg font-semibold">
                  {faq.question}
                </h3>
                <span className="text-yellow-400">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-300 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsFaq;
