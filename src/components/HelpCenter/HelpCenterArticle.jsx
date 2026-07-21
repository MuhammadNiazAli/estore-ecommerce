'use client';

import React, { useState } from 'react';

const HelpCenterArticle = () => {
  const [feedback, setFeedback] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedback = (type) => {
    setFeedback(type);
    setFeedbackSubmitted(true);

    // Optional: Reset feedback after some time if you want
    // setTimeout(() => {
    //   setFeedback(null);
    //   setFeedbackSubmitted(false);
    // }, 5000);
  };

  const relatedArticles = [
    'How to track your order?',
    'How to initiate a return?',
    'Payment issues and solutions',
  ];

  return (
    <section className="bg-white min-h-screen w-full px-6 py-16 flex justify-center">
      <article className="w-full max-w-[900px] text-gray-900 space-y-10 sm:space-y-12 md:space-y-16">
        {/* Title & Meta */}
        <header className="text-center space-y-3 max-w-[650px] mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-600 tracking-tight leading-tight">
            How to Cancel an Order
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Updated <time dateTime="2025-07">July 2025</time> &bull; by{' '}
            <span className="text-amber-500 font-semibold">Support Team</span>
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed prose-a:text-amber-600 prose-a:no-underline prose-a:hover:underline prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-1 prose-li:mb-1 sm:prose-lg">
          <p>
            If you placed an order by mistake or want to cancel it for any reason, please follow the steps below carefully.
          </p>

          <h2>Steps to Cancel</h2>
          <ol>
            <li>Log in to your account.</li>
            <li>Navigate to <strong>My Orders</strong>.</li>
            <li>Find the order you want to cancel.</li>
            <li>Click on <strong>Cancel Order</strong> and confirm your cancellation.</li>
          </ol>

          <p>
            Please note: If your order has already been shipped, you may not be able to cancel it. In such cases, you can initiate a return after delivery.
          </p>

          <h2>Still Need Help?</h2>
          <p>
            Our customer service team is available 24/7 to assist you. You can also use the live chat support located at the bottom right of your screen for quick assistance.
          </p>
        </div>

        {/* Feedback Section */}
        <section
          aria-label="Article feedback"
          className="bg-white p-8 rounded-xl max-w-[600px] mx-auto text-center shadow-lg"
        >
          <p className="text-amber-400 text-xl font-semibold mb-6">
            Was this article helpful?
          </p>

          {feedbackSubmitted ? (
            <div
              role="alert"
              aria-live="polite"
              className={`inline-block px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                feedback === 'yes' ? 'bg-green-600 text-green-100' : 'bg-red-600 text-red-100'
              }`}
            >
              {feedback === 'yes'
                ? 'Thank you for your feedback!'
                : 'Thanks for your feedback! We will improve.'}
            </div>
          ) : (
            <div className="flex justify-center gap-6">
              <button
                onClick={() => handleFeedback('yes')}
                className="flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-black shadow-md transition hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-700"
                aria-label="Yes, this article was helpful"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Yes
              </button>

              <button
                onClick={() => handleFeedback('no')}
                className="flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-black shadow-md transition hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-700"
                aria-label="No, this article was not helpful"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                No
              </button>
            </div>
          )}
        </section>

        {/* Related Articles */}
        <aside aria-label="Related articles" className="pt-12 border-t border-gray-200 max-w-[650px] mx-auto">
          <h3 className="text-xl font-semibold text-amber-600 mb-6 tracking-wide">
            Related Articles
          </h3>
          <ul className="space-y-4 text-gray-700">
            {relatedArticles.map((title, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="block rounded-md px-4 py-3 bg-white hover:bg-amber-800 transition text-amber-500 hover:text-amber-200 shadow-sm"
                  tabIndex={0}
                  onClick={(e) => e.preventDefault()} // placeholder
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') e.preventDefault();
                  }}
                  aria-label={`Read related article: ${title}`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </section>
  );
};

export default HelpCenterArticle;
