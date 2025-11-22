import React from 'react';

const TermsLimitations = () => {
  return (
    <section
      aria-labelledby="limitations-title"
      className="bg-gray-900 text-yellow-400 py-12"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-0"
        style={{ boxSizing: 'border-box' }}
      >
        <h2
          id="limitations-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Limitations of Liability
        </h2>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          To the fullest extent allowed by law, the Company and its affiliates, officers, employees, and agents (collectively, the “Company Parties”) are not liable for any damages arising from your use or inability to use the Services. This includes direct, indirect, incidental, consequential, or punitive damages, even if advised of their possibility.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          This limitation applies regardless of the cause, including service interruptions, errors, unauthorized access, or third-party actions.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          The Company does not guarantee uninterrupted or error-free service. Use the Services at your own risk.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          Some jurisdictions do not allow certain liability exclusions; if so, liability is limited to the maximum extent permitted by law.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          Overall liability for any claim related to these Terms or the Services will not exceed the amount you paid for the Services in the 12 months before the issue arose.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          You agree to indemnify and hold harmless the Company Parties from claims related to your misuse of the Services or violation of these Terms.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          These limitations survive termination of these Terms and are essential to our ability to provide the Services.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          Third-party services integrated with the Services have their own terms, and the Company is not liable for issues arising from their use.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          The Company is not responsible for delays or failures caused by events beyond its control, such as natural disasters, labor disputes, or infrastructure failures.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          You acknowledge these liability limits are reasonable and necessary for our agreement.
        </p>

        <p className="mt-6 text-yellow-300 max-w-full leading-relaxed sm:text-lg">
          If any part of this section is invalid, the rest will remain effective.
        </p>
      </div>
    </section>
  );
};

export default TermsLimitations;
