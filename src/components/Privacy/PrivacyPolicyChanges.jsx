'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';

const PrivacyPolicyChanges = () => {
  return (
    <section
      aria-labelledby="policy-changes-title"
      className="bg-white text-black w-full flex justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-[1000px] py-10 sm:py-14 md:py-16 lg:py-20">
        <h2
          id="policy-changes-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" />
          <span className="leading-tight">Privacy Policy Changes</span>
        </h2>

        <div className="space-y-4 text-black">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We may update our privacy policy from time to time to reflect changes in our practices,
            services, legal requirements, or other operational, legal, or regulatory reasons. Any
            changes will be communicated by posting the revised policy on this page.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            You are encouraged to periodically review this page for the latest information on our
            privacy practices. If we make significant changes, we will notify you by prominently
            posting a notice on our website or by directly sending you a notification.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Your continued use of our services after such modifications constitutes your
            acknowledgment of the modified policy and your agreement to abide and be bound by it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyChanges;
