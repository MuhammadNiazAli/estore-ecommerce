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
      className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg text-black"
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
              className="resize-none rounded-md p-3 bg-white text-black placeholder-gray-500 focus:outline-black focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="self-center px-6 py-2 bg-black text-black font-semibold rounded-full shadow-md hover:bg-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </form>
        </>
      ) : (
        <p className="text-center text-black text-lg font-medium">
          Thank you for your feedback! We appreciate it.
        </p>
      )}
    </section>
  );
};

export default LogoutingFeedback;
