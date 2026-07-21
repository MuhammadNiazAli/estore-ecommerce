'use client';

import React from 'react';
import { Zap, Settings, ShieldCheck } from 'lucide-react';

const PrivacyUseOfInformation = () => {
  return (
    <section
      aria-labelledby="use-of-information-title"
      className="bg-white text-black w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full text-center space-y-6">
        <h2
          id="use-of-information-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center items-center gap-3"
        >
          <Zap className="w-6 h-6 text-black" />
          How We Use Your Information
        </h2>

        <p className="text-black max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We use the information you provide to deliver, improve, and personalize our services, ensuring a secure and efficient experience.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-left pt-6">
          <div className="flex items-start gap-4">
            <Settings className="w-6 h-6 mt-1 text-black" />
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">Service Delivery</p>
              <p className="text-black text-xs sm:text-sm md:text-base">
                To process your requests, manage your account, and provide customer support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 mt-1 text-black" />
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">Security & Compliance</p>
              <p className="text-black text-xs sm:text-sm md:text-base">
                To protect against fraud, unauthorized access, and to comply with legal obligations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 mt-1 text-black" />
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">Improvement & Analytics</p>
              <p className="text-black text-xs sm:text-sm md:text-base">
                To analyze usage patterns, enhance features, and tailor our offerings to your needs.
              </p>
            </div>
          </div>
        </div>

        <p className="pt-8 text-black max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
          We never use your information for unauthorized purposes or sell it to third parties. Your privacy and trust are our top priorities.
        </p>
      </div>
    </section>
  );
};

export default PrivacyUseOfInformation;
