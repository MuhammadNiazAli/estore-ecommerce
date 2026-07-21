'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'How do I purchase a gift card?',
    answer:
      'You can buy gift cards directly from our Gift Cards page by selecting the design and amount, then proceeding to checkout.',
  },
  {
    question: 'Can I customize the gift card message?',
    answer:
      'Yes, during the purchase process you can add a personalized message to your gift card.',
  },
  {
    question: 'How do I redeem a gift card?',
    answer:
      'Redeem your gift card online during checkout or at any of our physical store locations.',
  },
  {
    question: 'Do gift cards expire?',
    answer:
      'Our gift cards expire 3 years after the purchase date. You can always check your card’s expiry in your account.',
  },
  {
    question: 'Can I reload my gift card?',
    answer:
      'Yes, you can reload your gift card balance through your account dashboard anytime.',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle, idx }) => {
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  const handleClick = () => {
    onToggle(idx);
    btnRef.current?.blur(); // Remove focus border immediately
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggle(idx);
      btnRef.current?.blur();
    }
  };

  return (
    <div className="py-4 border-b border-black last:border-none">
      <button
        ref={btnRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
        id={`faq-header-${idx}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="flex w-full justify-between items-center text-left text-black font-semibold text-lg hover:text-black outline-none transition-colors duration-200"
      >
        <span>{question}</span>
        <span
          aria-hidden="true"
          className={`text-black transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <FaChevronDown />
        </span>
      </button>

      <div
        id={`faq-panel-${idx}`}
        role="region"
        aria-labelledby={`faq-header-${idx}`}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{ maxHeight }}
        ref={contentRef}
      >
        <p className="mt-2 text-black text-sm sm:text-base select-text">{answer}</p>
      </div>
    </div>
  );
};

const GiftCardFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-label="Frequently asked questions about gift cards"
      className="max-w-[900px] mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8"
    >
      <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3 select-none">
        <FaQuestionCircle className="text-black" aria-hidden="true" />
        Gift Card FAQs
      </h2>

      <div>
        {faqData.map((faq, idx) => (
          <FAQItem
            key={idx}
            idx={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === idx}
            onToggle={toggleFAQ}
          />
        ))}
      </div>
    </section>
  );
};

export default GiftCardFAQ;
