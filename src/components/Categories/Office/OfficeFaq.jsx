"use client";
import React from "react";
import { gsap } from "gsap";

const faqs = [
  {
    id: 1,
    question: "What is the best ergonomic chair for long hours?",
    answer:
      "Look for chairs with adjustable lumbar support, seat height, and armrests to maintain good posture throughout your workday.",
  },
  {
    id: 2,
    question: "How often should I clean my office equipment?",
    answer:
      "It's recommended to clean keyboards, mice, and monitors weekly to reduce dust and bacteria buildup.",
  },
  {
    id: 3,
    question: "What desk setup improves productivity?",
    answer:
      "An organized desk with minimal clutter, good lighting, and ergonomically placed equipment helps enhance focus and efficiency.",
  },
  {
    id: 4,
    question: "How can I reduce eye strain while working on the computer?",
    answer:
      "Use anti-glare screen protectors, adjust monitor brightness, take regular breaks, and follow the 20-20-20 rule (every 20 mins, look at something 20 feet away for 20 seconds).",
  },
  {
    id: 5,
    question: "Is a standing desk better than a sitting desk?",
    answer:
      "Standing desks can improve circulation and reduce sedentary time, but alternating between sitting and standing is best for overall health.",
  },
];

const OfficeFaq = () => {
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
        <h2 className="text-4xl font-bold mb-8 text-center">Office FAQs</h2>
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

export default OfficeFaq;
