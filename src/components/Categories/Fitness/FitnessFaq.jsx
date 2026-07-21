"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";

const faqs = [
  {
    id: 1,
    question: "How often should I workout to see results?",
    answer:
      "For most people, working out 3-5 times a week consistently, combined with a balanced diet, will show results within a few weeks.",
  },
  {
    id: 2,
    question: "What’s the best way to warm up before exercise?",
    answer:
      "Dynamic stretches and light cardio such as jogging or jumping jacks for 5-10 minutes helps prepare your muscles and joints.",
  },
  {
    id: 3,
    question: "Can I build muscle without weights?",
    answer:
      "Yes! Bodyweight exercises like push-ups, squats, and lunges can effectively build muscle strength and endurance.",
  },
  {
    id: 4,
    question: "How important is nutrition for fitness?",
    answer:
      "Nutrition is crucial. Proper intake of proteins, carbs, and fats supports muscle recovery and energy for workouts.",
  },
  {
    id: 5,
    question: "Should I do cardio or strength training first?",
    answer:
      "It depends on your goals. For fat loss, cardio after strength training is effective. For endurance, do cardio first.",
  },
];

const FitnessFaq = () => {
  const activeIdRef = React.useRef(null);
  const containersRef = React.useRef({});

  const toggleFaq = (id) => {
    if (activeIdRef.current === id) {
      // Close currently open FAQ
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
      // Close previous open FAQ if any
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

      // Open new FAQ
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
          Frequently Asked Questions
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

export default FitnessFaq;
