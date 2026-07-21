import React, { useState } from 'react';

const initialFeedbacks = [
  {
    id: 1,
    name: 'Alice',
    rating: 5,
    comment: 'Great FAQs! Very helpful.',
  },
  {
    id: 2,
    name: 'Bob',
    rating: 4,
    comment: 'Found what I needed quickly.',
  },
];

const FaqsFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '' || name.trim() === '') {
      setError('All fields are required including rating.');
      return;
    }

    const newFeedback = {
      id: feedbacks.length + 1,
      name: name.trim(),
      rating,
      comment: comment.trim(),
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    setRating(0);
    setHoverRating(0);
    setComment('');
    setName('');
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-amber-600 py-12 px-4 sm:px-6 lg:px-8 rounded-md shadow-md max-w-7xl mx-auto relative overflow-hidden my-10">
      {/* Desktop Gradient Overlay */}
      <div className="hidden md:block absolute inset-0 bg-white opacity-90"></div>

      <h2 className="text-3xl font-bold mb-10 text-amber-500 text-center relative z-10">
        Share Your Feedback
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Feedback Form */}
        <div className="bg-white md:bg-white/40 md:backdrop-blur-xl rounded-xl p-6 shadow-2xl">
          {submitted && (
            <div
              role="alert"
              className="bg-amber-900 text-gray-900 p-4 rounded-md text-center mb-6"
            >
              Thank you for your feedback!
              <button
                onClick={() => setSubmitted(false)}
                className="ml-4 mt-2 sm:mt-0 px-4 py-2 bg-amber-700 hover:bg-amber-800 rounded-md text-gray-900 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 transition"
              >
                Submit Another
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="feedback-name"
                className="block mb-1 font-semibold text-amber-500"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="feedback-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md bg-white border border-amber-800 text-amber-300 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
                required
              />
            </div>

            {/* Rating */}
            <div className="mb-4">
              <span className="block mb-1 font-semibold text-amber-500">
                Rating <span className="text-red-500">*</span>
              </span>
              <div className="flex space-x-2" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-checked={rating === star}
                    role="radio"
                    className={`text-3xl transition transform hover:scale-125 ${
                      (hoverRating || rating) >= star
                        ? 'text-amber-600'
                        : 'text-amber-900'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label
                htmlFor="feedback-comment"
                className="block mb-1 font-semibold text-amber-500"
              >
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="feedback-comment"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your feedback here..."
                className="w-full px-4 py-3 rounded-md bg-white border border-amber-800 text-amber-300 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition resize-none"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <p
                className="text-red-500 mb-4 font-semibold"
                role="alert"
                aria-live="assertive"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 mt-4 rounded-md font-semibold bg-amber-700 hover:bg-amber-800 text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>

        {/* Right: Previous Feedback */}
        <div className="hidden md:flex flex-col gap-6 bg-white/40 backdrop-blur-xl rounded-xl p-6 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-amber-500">
            Recent Feedback
          </h3>
          {feedbacks.length === 0 ? (
            <p className="italic text-amber-500">No feedback yet.</p>
          ) : (
            <ul className="space-y-6 overflow-y-auto max-h-[500px] custom-scrollbar">
              {feedbacks.map(({ id, name, rating, comment }) => (
                <li
                  key={id}
                  className="bg-amber-950 bg-opacity-10 p-4 rounded-md border border-amber-900 hover:shadow-lg transition"
                >
                  <div className="flex items-center mb-2 justify-between">
                    <p className="font-semibold text-amber-600">{name}</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-lg ${
                            star <= rating ? 'text-amber-600' : 'text-amber-900'
                          }`}
                          aria-hidden="true"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-amber-500 whitespace-pre-wrap text-sm">{comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqsFeedback;
