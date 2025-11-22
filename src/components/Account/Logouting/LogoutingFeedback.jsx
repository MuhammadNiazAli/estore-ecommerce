'use client';

import React, { useState } from 'react';

const LogoutingFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '') return;
    // Yahan aap feedback backend ya analytics ko bhej sakte hain
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Logout feedback form"
      className="max-w-md mx-auto bg-gray-800 rounded-2xl p-8 shadow-lg text-yellow-400"
    >
      {!submitted ? (
        <>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Before you go, please tell us why you’re logging out:
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback (optional)"
              rows={4}
              className="resize-none rounded-md p-3 bg-gray-900 text-yellow-300 placeholder-yellow-600 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="self-center px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </form>
        </>
      ) : (
        <p className="text-center text-yellow-300 text-lg font-medium">
          Thank you for your feedback! We appreciate it.
        </p>
      )}
    </section>
  );
};

export default LogoutingFeedback;
