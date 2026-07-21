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
      className="max-w-[1000px] mx-auto mt-10 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 text-center tracking-tight">
        Related Topics
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {relatedTopics.map((topic, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onTopicClick && onTopicClick(topic)}
            className="bg-white text-black hover:bg-black hover:text-gray-900 focus:bg-black focus:text-gray-900 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
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
