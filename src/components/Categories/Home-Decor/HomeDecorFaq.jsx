"use client";
import React from "react";
import { gsap } from "gsap";

const faqs = [
  {
    id: 1,
    question: "What materials are best for home decor textiles?",
    answer:
      "Natural fabrics like cotton, linen, and wool are popular for their comfort, durability, and aesthetic appeal.",
  },
  {
    id: 2,
    question: "How do I choose the right lighting for a room?",
    answer:
      "Consider the room’s purpose: soft warm lighting for relaxation areas, bright daylight for workspaces, and adjustable lamps for versatility.",
  },
  {
    id: 3,
    question: "What colors are trending in home decor this year?",
    answer:
      "Earthy tones, muted pastels, and rich jewel colors like emerald and sapphire are very popular this season.",
  },
  {
    id: 4,
    question: "How can I mix modern and vintage decor styles?",
    answer:
      "Balance sleek modern pieces with vintage accessories or furniture to create a curated, eclectic look.",
  },
  {
    id: 5,
    question: "What are some eco-friendly decor options?",
    answer:
      "Look for sustainably sourced wood, recycled materials, and organic fabrics to reduce your environmental footprint.",
  },
];

const HomeDecorFaq = () => {
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
        <h2 className="text-4xl font-bold mb-8 text-center">
          Home Decor FAQs
        </h2>
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
                className="px-6 overflow-hidden text-gray-700"
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

export default HomeDecorFaq;
