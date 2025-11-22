import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "How do I measure myself correctly?",
    answer:
      "Use a soft measuring tape to measure the fullest part of your chest/bust, waist, and hips. Make sure the tape is snug but not tight.",
  },
  {
    question: "What if I’m between sizes?",
    answer:
      "If you are between sizes, we recommend choosing the larger size for comfort and ease of movement.",
  },
  {
    question: "Are the size charts the same for men and women?",
    answer:
      "No, our size charts differ for men and women to provide the best fit tailored to each body shape.",
  },
  {
    question: "Can I return or exchange if the size doesn’t fit?",
    answer:
      "Yes, we offer a hassle-free return and exchange policy. Please check our Returns & Exchanges page for details.",
  },
  {
    question: "Do sizes vary by brand?",
    answer:
      "Yes, sizes can vary slightly between brands. Please refer to the specific size chart provided for each product.",
  },
];

const SizeGuideFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      if (openIndex === i) {
        // Open: set maxHeight to scrollHeight + padding for smooth expand
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.paddingTop = "1rem";
        el.style.paddingBottom = "1.25rem";
      } else {
        // Close: collapse smoothly
        el.style.maxHeight = "0";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
      }
    });
  }, [openIndex]);

  return (
    <section
      className="w-full bg-gray-900 text-gray-100 flex justify-center py-12 px-4 sm:px-6 md:py-16 "
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-yellow-400 text-3xl sm:text-4xl font-extrabold mb-10 select-none text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
                className="w-full flex justify-between items-center p-5 text-left
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                           text-lg sm:text-xl font-semibold"
                type="button"
              >
                <span>{question}</span>
                <svg
                  className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className="px-5 text-gray-300 overflow-hidden transition-[max-height,padding] duration-500 ease-in-out box-border"
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  boxSizing: "border-box",
                }}
              >
                <p className="text-base sm:text-lg leading-relaxed">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SizeGuideFAQ;
