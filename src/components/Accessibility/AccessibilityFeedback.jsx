import React, { useState } from 'react';

const AccessibilityFeedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const stars = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return alert('Please select a rating');
    // Dummy submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setComment('');
    }, 4000);
  };

  return (
    <section
      aria-labelledby="feedback-heading"
      className="w-full bg-gray-900 flex justify-center px-4 py-12 sm:py-16"
    >
      <div className="max-w-[1000px] w-full text-yellow-400">
        <h2
          id="feedback-heading"
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          style={{ textShadow: '0 0 8px #FFD70099' }}
        >
          Accessibility Feedback
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-[700px] mx-auto flex flex-col space-y-6"
          noValidate
        >
          <fieldset>
            <legend className="font-semibold text-lg mb-2">Rate your experience</legend>
            <div className="flex space-x-3" role="radiogroup" aria-label="Star rating">
              {stars.map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-checked={rating === star}
                  role="radio"
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-10 h-10 cursor-pointer transition-colors duration-200 ${
                      (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-yellow-900'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.196-1.538-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.046 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.966z" />
                  </svg>
                </button>
              ))}
            </div>
          </fieldset>

          <label htmlFor="feedback-comment" className="font-semibold text-lg">
            Additional comments
            <textarea
              id="feedback-comment"
              name="comment"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts or suggestions"
              className="mt-1 w-full rounded-md bg-gray-800 border border-yellow-400 px-3 py-2 text-yellow-300 placeholder-yellow-600 resize-y focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </label>

          <button
            type="submit"
            disabled={submitted}
            className="self-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-live="polite"
          >
            {submitted ? 'Thanks for your feedback!' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AccessibilityFeedback;
