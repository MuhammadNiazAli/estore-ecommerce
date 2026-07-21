"use client";
import React from "react";
import { gsap } from "gsap";

const faqs = [
  {
    id: 1,
    question: "What specs are best for a gaming PC?",
    answer:
      "For most modern games, a powerful CPU (Intel i7 or Ryzen 7), at least 16GB RAM, and a dedicated GPU like RTX 3070 or better is recommended.",
  },
  {
    id: 2,
    question: "Do I need a high refresh rate monitor for gaming?",
    answer:
      "Yes! For competitive gaming, a 144Hz or higher refresh rate provides smoother visuals and better responsiveness.",
  },
  {
    id: 3,
    question: "Is wired internet better for gaming?",
    answer:
      "Wired Ethernet connections are more stable and offer lower latency compared to Wi-Fi, making them ideal for online gaming.",
  },
  {
    id: 4,
    question: "Should I get a mechanical keyboard for gaming?",
    answer:
      "Mechanical keyboards offer better tactile feedback, faster response times, and durability, making them popular among gamers.",
  },
  {
    id: 5,
    question: "How can I improve my gaming performance?",
    answer:
      "Optimize in-game settings, keep drivers updated, close background apps, and ensure your PC is well-cooled for maximum performance.",
  },
];

const GamingFaq = () => {
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
          Gaming FAQs
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

export default GamingFaq;
