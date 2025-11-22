"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

const faqs = [
  {
    question: "What is the difference between DSLR and Mirrorless cameras?",
    answer:
      "Mirrorless cameras are generally lighter and offer faster shooting speeds compared to DSLRs. DSLRs, however, provide an optical viewfinder and longer battery life.",
  },
  {
    question: "Which camera is best for beginners?",
    answer:
      "The Canon EOS R50 or Sony A6400 are excellent choices for beginners due to their easy controls and great image quality.",
  },
  {
    question: "Do I need a full-frame camera?",
    answer:
      "Not necessarily. Full-frame cameras excel in low light and provide better depth of field, but APS-C and Micro Four Thirds are also great for many uses.",
  },
  {
    question: "What lens should I buy first?",
    answer:
      "A versatile 24-70mm f/2.8 lens is a great starting point, offering flexibility for portraits, landscapes, and everyday photography.",
  },
  {
    question: "How important is IBIS (In-Body Image Stabilization)?",
    answer:
      "IBIS helps reduce camera shake for sharper photos and smoother videos, especially in low light and handheld shooting conditions.",
  },
];

const CamerasFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      closeFAQ(index);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        closeFAQ(activeIndex);
      }
      openFAQ(index);
      setActiveIndex(index);
    }
  };

  const openFAQ = (index) => {
    const content = contentRefs.current[index];
    if (content) {
      gsap.to(content, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const closeFAQ = (index) => {
    const content = contentRefs.current[index];
    if (content) {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-16 px-4 my-[-40px]">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          Find answers to the most common questions about our cameras and gear.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-5 pb-4 text-gray-300 text-base overflow-hidden"
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

export default CamerasFaq;
