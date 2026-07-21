import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  {
    question: "How can I request an interview with a company spokesperson?",
    answer:
      "Please contact our media relations team via the email provided in the Press Contacts section. Include your request details and preferred dates.",
  },
  {
    question: "Where can I download official company logos and assets?",
    answer:
      "Our Media Kit section has all official logos, brand guidelines, and images available for download in various formats.",
  },
  {
    question: "How do I subscribe to press releases?",
    answer:
      "You can subscribe to our press release mailing list by filling out the subscription form available on our website or contacting press@yourcompany.com.",
  },
  {
    question: "Who should I contact for partnership inquiries?",
    answer:
      "Please reach out to our partnerships team at partnerships@yourcompany.com for all inquiries related to collaborations.",
  },
];

const PressFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (openIndex === i) {
        gsap.to(ref, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          display: "block",
        });
      } else {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          display: "none",
        });
      }
    });
  }, [openIndex]);

  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-[900px] w-full">
        <h2 className="text-amber-600 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 sm:mt-4 text-amber-500 text-base sm:text-lg md:text-xl text-center leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          Find answers to common questions about press inquiries, media assets, and more.
        </p>

        <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-amber-900 shadow-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-left text-amber-500 font-semibold text-base sm:text-lg md:text-xl leading-snug">
                  {question}
                </h3>
                <span
                  className="text-amber-600 text-2xl sm:text-3xl font-bold ml-4 select-none"
                  aria-hidden="true"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-content-${index}`}
                className="px-5 sm:px-6 text-amber-400 text-sm sm:text-base md:text-lg leading-relaxed border-t border-amber-900 overflow-hidden"
                ref={(el) => (answerRefs.current[index] = el)}
                style={{ height: 0, opacity: 0, display: "none" }}
              >
                <div className="py-4 sm:py-5">{answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressFAQ;
