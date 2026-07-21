"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

const faqData = [
  {
    question: "What is the best programming book for beginners?",
    answer:
      "For beginners, 'Python Crash Course' and 'Eloquent JavaScript' are excellent starting points due to their simplicity and practical approach.",
  },
  {
    question: "Do you provide eBook versions of all books?",
    answer:
      "Yes! Most of our books are available in digital formats (PDF/ePub) alongside physical copies for convenience.",
  },
  {
    question: "Are there any discounts for students?",
    answer:
      "Absolutely! Students can enjoy discounts of up to 20% on select programming and computer science books.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy for physical books in case of damage or incorrect delivery. eBooks are non-refundable.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we ship worldwide! Delivery charges and estimated delivery time vary by location.",
  },
];

const BooksFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (el) {
        if (idx === activeIndex) {
          gsap.to(el, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="bg-white text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-black shadow-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium hover:bg-gray-500 transition"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="px-5 text-gray-700 overflow-hidden h-0"
              >
                <p className="py-3">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksFaq;
