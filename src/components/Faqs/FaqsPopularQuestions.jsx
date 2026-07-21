import React from 'react';
import { motion } from 'framer-motion';

const popularQuestions = [
  'How can I reset my password?',
  'What is your return policy?',
  'How long does shipping take?',
  'How do I track my order?',
  'Can I change my payment method?',
  'Is my personal data secure?',
];

const FaqsPopularQuestions = ({ onQuestionClick }) => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-6 sm:p-6 bg-white rounded-xl shadow-lg text-amber-600">
      {/* Animated CTA for mobile only */}
      <div className="block sm:hidden mb-4 text-center">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-flex items-center gap-2 text-sm text-amber-500 font-medium"
        >
          <span className="text-xl">🔍</span>
          Tap to Explore Popular Questions
        </motion.div>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-500 text-center">
        Popular Questions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularQuestions.map((question, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onQuestionClick && onQuestionClick(question)}
            className="text-left bg-amber-900 hover:bg-amber-800 focus:bg-amber-800 focus:outline-none rounded-lg px-4 py-3 transition shadow-md font-medium text-amber-300"
            aria-label={`Search or view answer for: ${question}`}
          >
            {question}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FaqsPopularQuestions;
