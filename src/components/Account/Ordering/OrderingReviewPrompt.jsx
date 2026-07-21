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
      className="bg-white rounded-lg p-6 max-w-md mx-auto lg:mx-0 text-center shadow-md"
    >
      <h2 className="text-xl font-semibold text-black border-b border-black pb-2 mb-4">
        Enjoying your order?
      </h2>

      <p className="text-gray-700 mb-6 max-w-xs mx-auto text-base leading-relaxed">
        We’d love to hear your thoughts! Leaving a review helps others and supports our community.
      </p>

      <button
        type="button"
        onClick={handleReviewClick}
        className="px-8 py-3 bg-black text-black font-semibold rounded-full shadow-md hover:bg-black hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Leave a review"
      >
        Leave a Review
      </button>
    </section>
  );
};

export default OrderingReviewPrompt;
