import React from 'react';

const TermsTermination = () => {
  return (
    <section
      aria-labelledby="termination-title"
      className="bg-gray-900 text-yellow-400 py-12"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-0"
        style={{ boxSizing: 'border-box' }}
      >
        <h2
          id="termination-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Termination
        </h2>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          We reserve the right, at our sole discretion and without prior notice or liability, to suspend, restrict, or terminate your access to all or part of the Services—including your account and related data—immediately or at any time, for any reason, including but not limited to:
        </p>

        <ul className="list-disc list-inside mt-4 max-w-full text-yellow-300 sm:text-base space-y-3">
          <li>Violation of these Terms or any other applicable policies;</li>
          <li>Engaging in fraudulent, abusive, or unlawful activities;</li>
          <li>Failure to meet payment obligations, if applicable;</li>
          <li>Requests by law enforcement, regulatory bodies, or government authorities;</li>
          <li>Discontinuation or significant modification of the Services;</li>
          <li>Any conduct that, in our judgment, harms the interests, safety, or rights of the Company, Users, or third parties.</li>
        </ul>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          Upon termination, all rights granted to you under these Terms will immediately end. You agree to stop using the Services, and we may delete, deactivate, or otherwise remove your account information, content, and any associated data.
        </p>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          Termination will not affect any rights or obligations accrued prior to termination, including payment responsibilities, indemnities, disclaimers, or limitations of liability.
        </p>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          Certain provisions of these Terms—such as those related to intellectual property, confidentiality, liability limitations, indemnification, and dispute resolution—will survive termination or expiration of your account or access.
        </p>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          We have no obligation to retain your data after termination, except as required by law or legitimate business needs. Please back up any information you wish to keep before termination.
        </p>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          If you believe your account was terminated or suspended by mistake, you may contact our support team using the information in the Contact Information section. While we will review such requests in good faith, we reserve the right to uphold any termination decision.
        </p>

        <p className="mt-6 max-w-full text-yellow-300 leading-relaxed sm:text-lg">
          Termination does not limit or affect any other rights or remedies we may have under applicable law.
        </p>
      </div>
    </section>
  );
};

export default TermsTermination;
