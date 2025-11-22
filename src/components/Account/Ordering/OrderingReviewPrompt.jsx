import React from 'react';

const OrderingReviewPrompt = ({ orderId, onReview }) => {
  const handleReviewClick = () => {
    if (onReview) {
      onReview(orderId);
    }
  };

  return (
    <section
      aria-label="Review prompt"
      className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto lg:mx-0 text-center shadow-md"
    >
      <h2 className="text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
        Enjoying your order?
      </h2>

      <p className="text-gray-300 mb-6 max-w-xs mx-auto text-base leading-relaxed">
        We’d love to hear your thoughts! Leaving a review helps others and supports our community.
      </p>

      <button
        type="button"
        onClick={handleReviewClick}
        className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        aria-label="Leave a review"
      >
        Leave a Review
      </button>
    </section>
  );
};

export default OrderingReviewPrompt;
