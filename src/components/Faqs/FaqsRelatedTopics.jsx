import React from 'react';

const relatedTopics = [
  'Account Management',
  'Shipping Info',
  'Payment Issues',
  'Returns & Refunds',
  'Product Usage',
  'Technical Support',
  'Privacy & Security',
  'Order Tracking',
];

const FaqsRelatedTopics = ({ onTopicClick }) => {
  return (
    <section
      aria-label="Related FAQ Topics"
      className="max-w-[1000px] mx-auto mt-10 bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-6 text-center tracking-tight">
        Related Topics
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {relatedTopics.map((topic, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onTopicClick && onTopicClick(topic)}
            className="bg-gray-800 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 focus:bg-yellow-500 focus:text-gray-900 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            aria-label={`View questions about ${topic}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FaqsRelatedTopics;
