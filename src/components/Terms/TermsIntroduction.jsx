import React from 'react';

const TermsIntroduction = () => {
  return (
    <section
      aria-labelledby="terms-intro-title"
      className="bg-white text-amber-600 py-12"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-0"
        style={{ boxSizing: 'border-box' }}
      >
        <h1
          id="terms-intro-title"
          tabIndex={-1}
          className="text-3xl sm:text-4xl font-extrabold tracking-wide"
        >
          Terms and Conditions
        </h1>

        <p className="mt-6 text-amber-500 leading-relaxed sm:text-lg max-w-full">
          Welcome and thank you for using our services. These Terms and Conditions (“Terms”) form a binding agreement between you (“User”) and the Company, governing your access to and use of our website, applications, and related services (“Service”). By using the Service, you agree to comply with these Terms and all applicable laws.
        </p>

        <p className="mt-6 text-amber-500 leading-relaxed sm:text-lg max-w-full">
          Please read these Terms carefully before using the Service. They explain your rights, responsibilities, and limitations. If you disagree with any part, please do not use our Service.
        </p>

        <p className="mt-6 text-amber-500 leading-relaxed sm:text-lg max-w-full">
          These Terms cover usage rules, intellectual property, privacy, dispute resolution, liability limits, and more. We may update them occasionally, and your continued use means you accept those changes.
        </p>

        <p className="mt-6 text-amber-500 leading-relaxed sm:text-lg max-w-full">
          By using our Service, you confirm you have read, understood, and accepted these Terms. For questions, please contact our support team in the Contact Information section.
        </p>

        <p className="mt-6 text-amber-500 leading-relaxed sm:text-lg max-w-full">
          We’re committed to providing a safe and reliable experience that protects both your interests and ours. Thank you for trusting us.
        </p>
      </div>
    </section>
  );
};

export default TermsIntroduction;
