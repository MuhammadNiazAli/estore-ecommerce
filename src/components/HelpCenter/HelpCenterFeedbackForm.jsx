'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const HelpCenterFeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a star rating.');
      return;
    }
    setSubmitted(true);
    setRating(0);
    setHoverRating(0);
    setFeedback('');
    // Here you could send data to backend
  };

  return (
    <section className="bg-white w-full px-4 py-12 flex justify-center my-[-80px]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl p-6 text-gray-900 shadow-md"
      >
        <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">
          Give Us Your Feedback
        </h2>

        <div className="flex justify-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none"
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
            >
              <Star
                size={32}
                className={`cursor-pointer transition-colors duration-200 ${
                  (hoverRating || rating) >= star ? 'text-amber-600' : 'text-gray-600'
                }`}
              />
            </button>
          ))}
        </div>

        <textarea
          className="w-full bg-white text-gray-900 rounded-md p-3 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 ring-amber-700"
          rows={5}
          placeholder="Write your feedback here (optional)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mt-6 bg-amber-600 hover:bg-amber-500 text-black font-semibold py-2 rounded-md transition"
        >
          Submit Feedback
        </button>

        {submitted && (
          <p className="text-green-400 text-center mt-4">
            Thank you for your feedback!
          </p>
        )}
      </form>
    </section>
  );
};

export default HelpCenterFeedbackForm;
