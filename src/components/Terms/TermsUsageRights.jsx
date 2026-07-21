import React from 'react';

const TermsUsageRights = () => {
  return (
    <section
      aria-labelledby="usage-rights-title"
      className="bg-white text-amber-600 py-12"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="max-w-[1000px] w-full mx-auto px-6 sm:px-8 lg:px-0"
        style={{ boxSizing: 'border-box' }}
      >
        <h2
          id="usage-rights-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Usage Rights
        </h2>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          Unless otherwise stated, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the content, features, and services available through our platform strictly under these Terms. This license allows you to view, download, and interact with content solely for your personal, non-commercial use.
        </p>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          You agree not to, without our prior written consent:
        </p>

        <ul className="list-disc list-inside mt-4 max-w-full text-amber-500 sm:text-base space-y-3">
          <li>Reproduce, copy, sell, resell, or exploit any part of the content or Services for commercial purposes;</li>
          <li>Modify, adapt, translate, create derivative works from, or reverse engineer any content, software, or technology;</li>
          <li>Use the Services or content in violation of any laws, regulations, or third-party rights;</li>
          <li>Remove, obscure, or alter any copyright, trademark, or proprietary notices;</li>
          <li>Use automated tools, bots, scrapers, or spiders to access or collect data without explicit authorization;</li>
          <li>Distribute, publicly display, or perform any content except as expressly permitted;</li>
          <li>Transfer or sublicense your license rights to others.</li>
        </ul>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          All intellectual property rights—including copyrights, trademarks, patents, trade secrets, and other proprietary rights—belong exclusively to the Company or its licensors. These Terms do not grant you any ownership rights or rights to use our trademarks, service marks, or logos.
        </p>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          Some third-party content available through the Services may be subject to separate licenses or restrictions. Your use of such content must comply with the terms set by the respective owners.
        </p>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          We reserve the right to revoke or modify your usage rights at any time without prior notice, including restricting or terminating access for violations of these Terms or unauthorized use of intellectual property.
        </p>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          If you believe any content infringes your intellectual property rights, please contact us promptly with detailed information so we can address it in accordance with applicable laws.
        </p>

        <p className="mt-6 max-w-full text-amber-500 leading-relaxed sm:text-lg">
          By using our Services, you acknowledge and agree to comply fully with all intellectual property laws and restrictions, respecting the rights of both the Company and third parties.
        </p>
      </div>
    </section>
  );
};

export default TermsUsageRights;
