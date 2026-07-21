import React from 'react';

const TermsPrivacyPolicy = () => {
  return (
    <section
      aria-labelledby="privacy-policy-title"
      className="bg-white text-black py-12"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-0"
        style={{ boxSizing: 'border-box' }}
      >
        <h2
          id="privacy-policy-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Privacy Policy
        </h2>

        <p className="mt-6 text-black max-w-full leading-relaxed sm:text-lg">
          We value your privacy and are committed to protecting your personal information in compliance with all relevant laws. This Privacy Policy explains what information we collect, how we use it, and your rights related to your data. By using our Services, you agree to the practices described here.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Information We Collect
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          To deliver and improve our Services, we gather various types of information:
        </p>
        <ul className="list-disc list-inside mt-2 max-w-full text-black sm:text-base space-y-2">
          <li>
            <strong>Personal Information:</strong> Details you provide directly, like your name, email, billing and shipping addresses, phone number, payment info, and account credentials.
          </li>
          <li>
            <strong>Usage Data:</strong> Automatically collected data such as your IP address, browser type, device details, pages visited, clicks, and timestamps.
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> We use cookies and similar tools to enhance your experience, analyze usage, and personalize content.
          </li>
          <li>
            <strong>Third-Party Information:</strong> Data obtained from trusted partners or sources to complement your profile or verify identity.
          </li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          How We Use Your Information
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          Your data helps us to:
        </p>
        <ul className="list-disc list-inside mt-2 max-w-full text-black sm:text-base space-y-2">
          <li>Provide, maintain, and enhance our Services, including customer support and personalized features.</li>
          <li>Process payments and transactions securely.</li>
          <li>Send important updates, promotions, and service notifications.</li>
          <li>Detect and prevent fraud or unauthorized activities.</li>
          <li>Comply with legal obligations and enforce our Terms.</li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Data Security
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          We use robust technical and organizational measures—such as encryption, firewalls, secure servers, access controls, and regular security reviews—to protect your data. While we strive to keep your information safe, no method is 100% secure, and we cannot guarantee absolute protection.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Data Retention
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          We keep your personal data only as long as needed to fulfill our services, meet legal requirements, resolve disputes, and enforce agreements. When data is no longer necessary, we securely delete or anonymize it.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Your Rights
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          Depending on your location, you may have rights over your personal data, including:
        </p>
        <ul className="list-disc list-inside mt-2 max-w-full text-black sm:text-base space-y-2">
          <li>Accessing, correcting, or updating your information.</li>
          <li>Requesting deletion or restricting how we process your data.</li>
          <li>Objecting to processing or withdrawing consent where applicable.</li>
          <li>Receiving your data in a portable format.</li>
          <li>Filing complaints with data protection authorities if you believe your rights have been violated.</li>
        </ul>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          To exercise any of these rights, please contact us using the details in the Contact Information section. We’ll respond promptly and in accordance with applicable laws.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Sharing and Disclosure
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          We never sell your personal data. We may share it with trusted third parties—such as payment processors, cloud providers, or legal authorities—only when necessary to provide our Services or comply with the law. All partners are required to keep your information confidential and secure.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          International Data Transfers
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          Your data might be processed or stored outside your home country. Where applicable, we use safeguards like standard contractual clauses to ensure your information remains protected under relevant privacy laws.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Children’s Privacy
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          Our Services are not intended for children under 13 (or the minimum legal age in your area). We do not knowingly collect personal data from children without parental consent. If we learn that we’ve collected such data, we will promptly delete it.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Changes to this Privacy Policy
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          We may update this policy occasionally to reflect new practices or legal requirements. Significant changes will be posted on our website and communicated as appropriate. Continuing to use our Services after updates means you accept the new policy.
        </p>

        <h3 className="mt-10 text-xl font-semibold tracking-wide text-black">
          Contact Us
        </h3>
        <p className="mt-4 max-w-full leading-relaxed sm:text-lg">
          If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us using the details provided in the Contact Information section. We’re here to help.
        </p>
      </div>
    </section>
  );
};

export default TermsPrivacyPolicy;
