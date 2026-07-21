import React, { useState } from 'react';

const SustainabilityHero = () => {
  // Button state for UX feedback and debounce
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Simulate async "Learn More" action
  const handleLearnMore = () => {
    if (isLoading) return; // prevent double click
    setIsLoading(true);
    setAlertMessage(''); // reset previous message

    // simulate async loading
    setTimeout(() => {
      setAlertMessage('Thank you for your interest! We will be in touch soon.');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section
      aria-labelledby="sustainability-hero-title"
      className="bg-white text-black flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 my-[-80px]"
    >
      <div className="max-w-[1000px] w-full text-center">
        {/* Hero Title */}
        <h1
          id="sustainability-hero-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-snug text-black drop-shadow-lg"
          tabIndex={0} // ensure focusable for screen readers
        >
          Building a Sustainable Tomorrow
        </h1>

        {/* Hero Subtitle */}
        <p
          className="mt-4 text-lg sm:text-xl text-black max-w-xl mx-auto"
          tabIndex={0}
        >
          Empowering businesses and communities to reduce carbon footprints and foster eco-friendly growth.
        </p>

        {/* Learn More Button */}
        <button
          type="button"
          aria-label="Learn more about sustainability initiatives"
          className={`mt-8 inline-block bg-black hover:bg-black focus-visible:outline-black text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed`}
          onClick={handleLearnMore}
          disabled={isLoading}
        >
          {isLoading ? (
            <span aria-live="polite" role="status" className="inline-flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Loading...
            </span>
          ) : (
            'Learn More'
          )}
        </button>

        {/* Alert message for UX feedback */}
        {alertMessage && (
          <div
            role="alert"
            aria-live="assertive"
            className="mt-6 max-w-md mx-auto bg-black bg-opacity-80 rounded-md px-4 py-3 text-black font-semibold drop-shadow-md"
          >
            {alertMessage}
          </div>
        )}

        {/* Features Grid */}
        <article
          aria-label="Sustainability initiatives"
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left"
        >
          {[
            {
              title: 'Renewable Energy',
              description:
                'Harness clean, renewable energy solutions to power your operations and reduce environmental impact.',
            },
            {
              title: 'Waste Reduction',
              description:
                'Implement efficient waste management strategies to minimize landfill contribution and increase recycling.',
            },
            {
              title: 'Community Engagement',
              description:
                'Partner with local communities to promote awareness and sustainable practices worldwide.',
            },
          ].map(({ title, description }, idx) => (
            <section
              key={title}
              className="bg-black bg-opacity-10 rounded-lg p-6 hover:bg-black hover:bg-opacity-20 transition-colors duration-300 cursor-default focus-within:ring-4 focus-within:ring-black"
              tabIndex={0}
              aria-labelledby={`feature-title-${idx}`}
            >
              <h3
                id={`feature-title-${idx}`}
                className="text-black font-semibold text-lg mb-2"
              >
                {title}
              </h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">{description}</p>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
};

export default SustainabilityHero;
