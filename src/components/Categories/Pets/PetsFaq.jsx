"use client";
import React from "react";
import { gsap } from "gsap";

const petsFaqs = [
  {
    id: 1,
    question: "How often should I feed my dog?",
    answer:
      "Adult dogs typically eat twice a day, while puppies may need 3-4 smaller meals. Always consult your vet for specific needs.",
  },
  {
    id: 2,
    question: "What is the best diet for cats?",
    answer:
      "Cats thrive on a protein-rich diet with essential amino acids like taurine. Opt for high-quality wet or dry food formulated for cats.",
  },
  {
    id: 3,
    question: "How do I prevent fleas on my pets?",
    answer:
      "Use veterinarian-approved flea preventatives, keep your home clean, and regularly groom your pet.",
  },
  {
    id: 4,
    question: "Can dogs eat fruits and vegetables?",
    answer:
      "Yes, many fruits and veggies like carrots, apples, and blueberries are safe for dogs, but avoid grapes, raisins, and onions.",
  },
  {
    id: 5,
    question: "How often should I groom my pet?",
    answer:
      "Grooming depends on the breed, but most pets benefit from weekly brushing and monthly baths.",
  },
];

const PetsFaq = () => {
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
    <section className="bg-gray-900 text-yellow-400 py-12 px-4 my-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Pets FAQs</h2>
        <div className="space-y-4">
          {petsFaqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border border-yellow-500 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg hover:bg-yellow-900 transition"
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
                className="px-6 overflow-hidden text-yellow-300"
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

export default PetsFaq;
