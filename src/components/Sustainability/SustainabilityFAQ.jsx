import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'What is sustainability and why is it important?',
    answer:
      'Sustainability is about meeting our current needs without compromising the ability of future generations to meet theirs. It promotes environmental balance, social equity, and economic growth.',
  },
  {
    question: 'How can businesses reduce their carbon footprint?',
    answer:
      'Businesses can reduce their carbon footprint by adopting renewable energy, improving energy efficiency, minimizing waste, and encouraging sustainable supply chain practices.',
  },
  {
    question: 'What are the benefits of community engagement in sustainability?',
    answer:
      'Community engagement fosters awareness, collaboration, and shared responsibility, which strengthens the effectiveness and reach of sustainability initiatives.',
  },
  {
    question: 'How can I contribute to sustainability in my daily life?',
    answer:
      'You can contribute by reducing waste, conserving water and energy, choosing sustainable products, supporting local and eco-friendly businesses, and spreading awareness.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
      setOpacity(isOpen ? 1 : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-black"
      role="region"
      aria-labelledby={`faq-btn-${index}`}
      tabIndex={-1}
    >
      <dt>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-desc-${index}`}
          id={`faq-btn-${index}`}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle();
            }
          }}
          className="
            w-full flex justify-between items-center
            px-6 sm:px-8 lg:px-10
            py-4 sm:py-6
            text-left text-black font-semibold
            text-lg sm:text-xl lg:text-2xl
            rounded-2xl
            focus:outline-none focus-visible:ring-4 focus-visible:ring-black
            hover:bg-black hover:bg-opacity-20
            transition-colors duration-300
            select-none
          "
        >
          <span>{faq.question}</span>
          <svg
            className={`w-6 h-6 sm:w-7 sm:h-7 text-black transform transition-transform duration-400 ease-in-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </dt>

      <dd
        id={`faq-desc-${index}`}
        className="px-6 sm:px-8 lg:px-10 pt-0 pb-6 sm:pb-8 text-black text-base sm:text-lg lg:text-xl overflow-hidden"
        style={{
          maxHeight,
          opacity,
          transition: 'max-height 0.5s ease, opacity 0.4s ease 0.15s',
        }}
        ref={contentRef}
      >
        <p className="leading-relaxed tracking-wide">{faq.answer}</p>
      </dd>
    </div>
  );
};

const SustainabilityFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="sustainability-faq-title"
      className="bg-white text-black px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="sustainability-faq-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-12 sm:mb-14 text-center tracking-wide select-none drop-shadow-md"
        >
          Frequently Asked Questions
        </h2>

        <dl className="space-y-6 sm:space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </dl>
      </div>
    </section>
  );
};

export default SustainabilityFAQ;
