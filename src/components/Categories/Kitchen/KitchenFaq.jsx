"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What materials are your cookware sets made from?",
    answer:
      "Our cookware sets are crafted from premium stainless steel and non-stick coated aluminum for durability and even heat distribution.",
  },
  {
    id: 2,
    question: "Are your kitchen accessories dishwasher-safe?",
    answer:
      "Yes! Most of our accessories are dishwasher-safe. Always check the product label for specific care instructions.",
  },
  {
    id: 3,
    question: "Do you offer warranty on products?",
    answer:
      "Absolutely. We offer a 1-year warranty on most kitchen products. Please refer to the warranty section for details.",
  },
  {
    id: 4,
    question: "Can I return or exchange an item?",
    answer:
      "Yes, you can return or exchange within 30 days of purchase if the product is unused and in original packaging.",
  },
];

const KitchenFaq = () => {
  const [openId, setOpenId] = useState(null);
  const refs = useRef({});

  const toggleFaq = (id) => {
    const current = refs.current[id];
    const content = current.querySelector(".faq-content");

    if (openId === id) {
      // Close Animation
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setOpenId(null);
    } else {
      // Close previous if open
      if (openId !== null) {
        const prev = refs.current[openId].querySelector(".faq-content");
        gsap.to(prev, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      // Open new
      gsap.set(content, { height: "auto" });
      const fullHeight = content.offsetHeight;
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        }
      );
      setOpenId(id);
    }
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-10 my-[-30px]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              ref={(el) => (refs.current[faq.id] = el)}
              className="bg-gray-800 rounded-lg border border-yellow-500 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left text-yellow-300 hover:bg-gray-700 transition"
                onClick={() => toggleFaq(faq.id)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="faq-content px-4 overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <p className="py-3 text-sm text-yellow-200">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenFaq;
