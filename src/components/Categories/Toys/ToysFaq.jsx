"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const faqData = [
  {
    id: 1,
    question: "What age group are these toys suitable for?",
    answer:
      "Our toys are carefully designed for children ages 3 to 12 years old, ensuring safety and developmental appropriateness.",
  },
  {
    id: 2,
    question: "Are the toy materials non-toxic and safe?",
    answer:
      "Yes, all toys are made from certified non-toxic materials and meet international safety standards.",
  },
  {
    id: 3,
    question: "What is your return policy for damaged toys?",
    answer:
      "We offer a 30-day return policy on damaged items. Please contact our support team with pictures for a smooth process.",
  },
  {
    id: 4,
    question: "Do you provide international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs and times vary depending on the destination.",
  },
  {
    id: 5,
    question: "Can I track my order once it’s shipped?",
    answer:
      "Absolutely! Once your order ships, you'll receive a tracking number via email to monitor your package.",
  },
];

const ToysFaq = () => {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;
      if (faqData[index].id === activeId) {
        gsap.to(ref, {
          height: "auto",
          duration: 0.4,
          ease: "power2.out",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          opacity: 1,
          pointerEvents: "auto",
        });
      } else {
        gsap.to(ref, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
          pointerEvents: "none",
        });
      }
    });
  }, [activeId]);

  const toggleFaq = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-[800px] mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-lg my-12 my-[-30px]">
      <h2 className="text-3xl font-bold mb-8 text-amber-600 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map(({ id, question, answer }, i) => (
          <div
            key={id}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(id)}
              className={`w-full text-left px-5 py-4 bg-white hover:bg-gray-500 focus:outline-none flex justify-between items-center ${
                activeId === id ? "font-semibold text-amber-600" : "font-medium"
              }`}
              aria-expanded={activeId === id}
              aria-controls={`faq-content-${id}`}
              id={`faq-header-${id}`}
            >
              <span>{question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeId === id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={`faq-content-${id}`}
              role="region"
              aria-labelledby={`faq-header-${id}`}
              ref={(el) => (contentRefs.current[i] = el)}
              style={{ height: 0, opacity: 0, overflow: "hidden", padding: 0 }}
              className="px-5 text-gray-700"
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToysFaq;
