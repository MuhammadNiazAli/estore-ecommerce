'use client';

import React from 'react';
import { Link2, ExternalLink } from 'lucide-react';

const PrivacyThirdPartyLinks = () => {
  return (
    <section
      aria-labelledby="third-party-links-title"
      className="bg-white text-black w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        <h2
          id="third-party-links-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center items-center gap-2"
        >
          <Link2 className="w-6 h-6 text-black" />
          Third-Party Links & Services
        </h2>

        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Our website and services may contain links to third-party websites, applications, or services for
          your convenience and additional functionality.
        </p>

        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          We do not control these third-party sites and are not responsible for their content, privacy
          practices, or terms. We encourage you to review their privacy policies before providing any personal
          information.
        </p>

        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          For your security, any interactions with third parties are governed by their respective policies,
          and your use of their services is at your own risk.
        </p>

        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          To help identify external links, we mark them with an icon like this{' '}
          <ExternalLink className="inline w-4 h-4 text-black align-baseline" />.
        </p>
      </div>
    </section>
  );
};

export default PrivacyThirdPartyLinks;
