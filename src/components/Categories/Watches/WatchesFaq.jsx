"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";

const faqs = [
  {
    id: 1,
    question: "What makes a luxury watch worth the price?",
    answer:
      "Luxury watches are crafted with precision, premium materials, and timeless design. They often become collector’s items with value appreciation.",
  },
  {
    id: 2,
    question: "Are luxury watches waterproof?",
    answer:
      "Most luxury watches offer water resistance, but it varies by model. Always check the depth rating before submersion.",
  },
  {
    id: 3,
    question: "How often should I service my watch?",
    answer:
      "It’s recommended to service your watch every 3-5 years to ensure accuracy and maintain the movement.",
  },
  {
    id: 4,
    question: "Can I customize straps or bezels?",
    answer:
      "Yes! Many luxury brands allow strap and bezel customization to suit your style preferences.",
  },
  {
    id: 5,
    question: "Do luxury watches hold their value?",
    answer:
      "Top brands like Rolex, Audemars Piguet, and Patek Philippe often hold or appreciate in value over time.",
  },
];

const WatchesFaq = () => {
  const [activeId, setActiveId] = useState(null);
  const refs = useRef({});

  const toggleFAQ = (id) => {
    if (activeId === id) {
      // Close animation
      const el = refs.current[id];
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setActiveId(null);
    } else {
      // Close previous if open
      if (activeId) {
        const prevEl = refs.current[activeId];
        gsap.to(prevEl, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
      // Open new
      const el = refs.current[id];
      gsap.set(el, { height: "auto" });
      const fullHeight = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: fullHeight, opacity: 1, duration: 0.4, ease: "power2.inOut" }
      );
      setActiveId(id);
    }
  };

  return (
    <section className="bg-white text-gray-800 py-14 px-4 my-[-50px]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">
            Everything you need to know about luxury watches
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center justify-between w-full px-5 py-4 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    activeId === faq.id ? "rotate-180 text-black" : "text-gray-600"
                  }`}
                />
              </button>

              {/* Answer Container */}
              <div
                ref={(el) => (refs.current[faq.id] = el)}
                style={{ height: 0, overflow: "hidden", opacity: 0 }}
                className="px-5 text-gray-700 text-sm leading-relaxed"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-3">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-black text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-black transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default WatchesFaq;
