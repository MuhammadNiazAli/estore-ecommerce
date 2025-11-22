import React from 'react';

const AccessibilityHero = () => {
  return (
    <section
      aria-label="Accessibility statement introduction"
      className="w-full bg-gray-900 flex justify-center"
      style={{ padding: '2rem 1rem' }}
    >
      <div
        className="max-w-[1000px] w-full text-center"
        style={{ color: '#FFD700' /* gold/yellow */, lineHeight: 1.4 }}
      >
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-3"
          style={{ textShadow: '0 0 8px #FFD70099' }}
        >
          Accessibility at Our Website
        </h1>
        <p className="text-lg sm:text-xl max-w-[700px] mx-auto font-light">
          We are committed to ensuring a seamless and inclusive experience for all users. Our goal is to provide accessible content that meets WCAG standards and empowers everyone.
        </p>
      </div>
    </section>
  );
};

export default AccessibilityHero;
