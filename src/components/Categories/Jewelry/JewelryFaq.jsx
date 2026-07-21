"use client";
import React from "react";
import { gsap } from "gsap";

const faqs = [
  {
    id: 1,
    question: "How do I choose the right necklace length?",
    answer:
      "Consider your neckline and personal style. Common lengths are 16-18 inches for chokers, 20-24 for longer chains.",
  },
  {
    id: 2,
    question: "How can I clean my gold jewelry safely?",
    answer:
      "Use mild soap and warm water with a soft cloth. Avoid harsh chemicals or abrasive materials that can damage the finish.",
  },
  {
    id: 3,
    question: "What should I know about diamond certifications?",
    answer:
      "Look for certifications from reputable labs like GIA or AGS to ensure diamond quality and authenticity.",
  },
  {
    id: 4,
    question: "How do I store my jewelry to prevent tarnishing?",
    answer:
      "Keep jewelry in a dry, airtight container or pouch. Store pieces separately to avoid scratches and tangling.",
  },
  {
    id: 5,
    question: "Are hypoallergenic metals available?",
    answer:
      "Yes, metals like surgical steel, platinum, and titanium are hypoallergenic and good for sensitive skin.",
  },
];

const JewelryFaq = () => {
  const activeIdRef = React.useRef(null);
  const containersRef = React.useRef({});

  const toggleFaq = (id) => {
    if (activeIdRef.current === id) {
      const container = containersRef.current[id];
      if (container) {
        gsap.to(container, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            container.style.display = "none";
          },
        });
        activeIdRef.current = null;
      }
    } else {
      if (activeIdRef.current !== null) {
        const prevContainer = containersRef.current[activeIdRef.current];
        if (prevContainer) {
          gsap.to(prevContainer, {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              prevContainer.style.display = "none";
            },
          });
        }
      }

      const container = containersRef.current[id];
      if (container) {
        container.style.display = "block";
        const height = container.scrollHeight;
        gsap.fromTo(
          container,
          { height: 0, opacity: 0 },
          {
            height,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              container.style.height = "auto";
            },
          }
        );
      }
      activeIdRef.current = id;
    }
  };

  return (
    <section className="bg-white text-amber-600 py-12 px-4 my-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Jewelry FAQs</h2>
        <div className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border border-amber-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg hover:bg-amber-950 transition"
                onClick={() => toggleFaq(id)}
                aria-expanded={activeIdRef.current === id}
                aria-controls={`faq-answer-${id}`}
                id={`faq-question-${id}`}
              >
                {question}
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIdRef.current === id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                ref={(el) => (containersRef.current[id] = el)}
                id={`faq-answer-${id}`}
                role="region"
                aria-labelledby={`faq-question-${id}`}
                className="px-6 overflow-hidden text-amber-500"
                style={{ display: "none", height: 0, opacity: 0 }}
              >
                <p className="py-4">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelryFaq;
