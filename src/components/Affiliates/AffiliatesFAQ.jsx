import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const faqItems = [
  {
    question: "How do I join the affiliate program?",
    answer:
      "Simply sign up using the subscription form above or contact our affiliate team. Once approved, you will receive your unique affiliate links and access to the dashboard.",
  },
  {
    question: "When do I get paid?",
    answer:
      "We offer flexible payout schedules. Payments are processed monthly with no minimum payout threshold required.",
  },
  {
    question: "How can I track my performance?",
    answer:
      "Our real-time affiliate dashboard lets you monitor clicks, conversions, and commissions easily from anywhere.",
  },
  {
    question: "Are there any costs to join?",
    answer:
      "No, joining our affiliate program is completely free with no hidden fees or charges.",
  },
  {
    question: "Can I promote on multiple platforms?",
    answer:
      "Absolutely! You can promote our products on your website, blog, social media, email marketing, and more.",
  },
];

const AffiliatesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    faqItems.forEach((_, i) => {
      const el = contentRefs.current[i];
      if (!el) return;

      // Kill any running tweens on this element to avoid conflicts
      gsap.killTweensOf(el);

      if (openIndex === i) {
        // Get natural height of content for smooth height animation
        const height = el.scrollHeight;

        // Animate open: height from 0 to scrollHeight, opacity and padding
        gsap.to(el, {
          height,
          duration: 0.35,
          ease: "power2.out",
          paddingTop: 8,
          paddingBottom: 16,
          opacity: 1,
          pointerEvents: "auto",
          overflow: "hidden",
          // After animation, set height to auto for better responsiveness
          onComplete: () => {
            gsap.set(el, { height: "auto", overflow: "visible" });
          },
        });
      } else {
        // Animate close: height to 0, opacity and padding to 0
        gsap.to(el, {
          height: 0,
          duration: 0.25,
          ease: "power2.in",
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
          pointerEvents: "none",
          overflow: "hidden",
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      aria-label="Affiliate Program Frequently Asked Questions"
      className="bg-white text-amber-600 py-12 px-4"
      style={{ minHeight: "fit-content" }}
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-4">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-amber-900 rounded-md">
                <dt>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-desc-${index}`}
                    id={`faq-btn-${index}`}
                    onClick={() => toggleIndex(index)}
                    className="w-full flex justify-between items-center p-4 text-left
                      focus:outline-none focus:ring-2 focus:ring-amber-700
                      hover:bg-amber-950 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold">{question}</span>
                    <svg
                      className={`h-6 w-6 text-amber-600 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-desc-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="px-4 text-amber-500 text-sm leading-relaxed overflow-hidden"
                  style={{
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                  }}
                >
                  {answer}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default AffiliatesFAQ;
