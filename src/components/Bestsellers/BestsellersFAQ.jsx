import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const faqData = [
  {
    question: 'What is the return policy?',
    answer:
      'You can return any item within 30 days of purchase for a full refund. Items must be in original condition.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship worldwide. Shipping fees and delivery times vary based on location.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order is shipped, you will receive an email with tracking information.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer:
      'You can change or cancel your order within 2 hours of placing it by contacting our support team.',
  },
]

const BestsellersFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const answerRefs = useRef([])

  useEffect(() => {
    answerRefs.current.forEach((el, index) => {
      if (!el) return
      if (openIndex === index) {
        gsap.to(el, {
          height: 'auto',
          duration: 0.4,
          ease: 'power3.out',
          paddingTop: 10,
          paddingBottom: 10,
          opacity: 1,
          pointerEvents: 'auto',
        })
      } else {
        gsap.to(el, {
          height: 0,
          duration: 0.3,
          ease: 'power3.inOut',
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
          pointerEvents: 'none',
        })
      }
    })
  }, [openIndex])

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-3xl mx-auto p-6 sm:p-10 bg-gary-900 rounded-xl my-[-10px] ">
      <h2 className="text-3xl font-extrabold mb-8 text-black text-center tracking-wide select-none">
        Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border border-black rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
              className={`w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-black hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-black transition-colors duration-200`}
            >
              <span className="text-lg md:text-xl">{item.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 stroke-black ${
                  openIndex === idx ? 'rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              ref={(el) => (answerRefs.current[idx] = el)}
              className="px-6 overflow-hidden text-black text-base md:text-lg leading-relaxed select-text"
              style={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
            >
              <p className="pb-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestsellersFAQ
