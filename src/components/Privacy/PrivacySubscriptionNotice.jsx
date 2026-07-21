'use client';

import React from 'react';
import { BellRing } from 'lucide-react';

const PrivacySubscriptionNotice = () => {
  return (
    <section
      aria-labelledby="subscription-notice-title"
      className="bg-white text-black w-full flex justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 mb-[-130px]"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        <h2
          id="subscription-notice-title"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center items-center gap-2 sm:gap-3"
        >
          <BellRing className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          Subscription & Marketing Notices
        </h2>

        <p className="text-black max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
          By subscribing to our newsletter or marketing communications, you agree to receive emails and
          notifications about product updates, offers, and company news. You can unsubscribe at any time
          using the unsubscribe link provided in every email.
        </p>

        <p className="text-black max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
          We respect your privacy and will never share your contact details with third parties for
          marketing purposes without your explicit consent.
        </p>

        <p className="text-black max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
          For more details about how we handle your subscription data, please visit our{' '}
          <a
            href="/privacy-policy"
            className="underline hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacySubscriptionNotice;
