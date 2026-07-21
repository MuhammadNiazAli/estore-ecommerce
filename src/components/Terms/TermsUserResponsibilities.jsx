import React from 'react';

const TermsUserResponsibilities = () => {
  return (
    <section
      aria-labelledby="user-responsibilities-title"
      className="bg-white text-black py-12"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-0"
        style={{ boxSizing: 'border-box' }}
      >
        <h2
          id="user-responsibilities-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          User Responsibilities
        </h2>

        <p className="mt-6 max-w-full text-black leading-relaxed sm:text-lg">
          As a user of our Services, you acknowledge and agree to uphold the following responsibilities to ensure a safe, lawful, and effective environment for all users:
        </p>

        <ul className="mt-6 max-w-full list-disc list-inside space-y-4 text-black sm:text-base leading-relaxed">
          <li>
            <strong>Compliance with Laws and Regulations:</strong> Use the Services in full compliance with all applicable local, national, and international laws, including those related to data protection, intellectual property, consumer rights, and anti-fraud.
          </li>
          <li>
            <strong>Accuracy of Information:</strong> Provide accurate, truthful, complete, and up-to-date information when registering, updating your account, or using the Services. Inaccurate information may lead to suspension or termination.
          </li>
          <li>
            <strong>Account Security:</strong> Maintain the confidentiality of your login credentials and notify us immediately of any unauthorized access or suspicious activity.
          </li>
          <li>
            <strong>Proper Use of Services:</strong> Do not engage in activities that harm, disrupt, or compromise the Services, including transmitting malware, spam, or launching attacks such as denial-of-service.
          </li>
          <li>
            <strong>Respect for Intellectual Property:</strong> Respect the intellectual property rights of the Company and others. Do not copy, distribute, or create derivative works without authorization.
          </li>
          <li>
            <strong>Prohibited Conduct:</strong> Avoid unlawful, fraudulent, abusive, defamatory, harassing, obscene, or objectionable behavior, including hate speech, harassment, or impersonation.
          </li>
          <li>
            <strong>Responsible Communication:</strong> Communicate respectfully and professionally with other users and staff, avoiding offensive or disruptive language or behavior.
          </li>
          <li>
            <strong>Use of Third-Party Content and Links:</strong> Use third-party content or links in compliance with the relevant third-party terms and assume responsibility for your interactions with them.
          </li>
          <li>
            <strong>Notification of Violations:</strong> Promptly inform us if you become aware of any violations of these Terms or misuse of the Services.
          </li>
          <li>
            <strong>Account Responsibility:</strong> You are responsible for all activities conducted through your account, regardless of authorization.
          </li>
        </ul>

        <p className="mt-8 max-w-full text-black leading-relaxed sm:text-lg">
          Failure to comply with these responsibilities may result in warnings, suspension, termination, or legal action as deemed appropriate by the Company. We reserve the right to investigate and take necessary actions to protect our users and Services.
        </p>
      </div>
    </section>
  );
};

export default TermsUserResponsibilities;
