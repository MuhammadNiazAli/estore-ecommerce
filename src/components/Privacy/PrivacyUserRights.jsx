'use client';

import React from 'react';
import { ShieldCheck, UserCheck, RefreshCw, Trash2, Download } from 'lucide-react';

const PrivacyUserRights = () => {
  const rights = [
    {
      icon: <UserCheck className="w-6 h-6 text-amber-600" />,
      title: 'Right to Access',
      description:
        'You have the right to request a copy of the personal data we hold about you, including details on how it is processed.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-amber-600" />,
      title: 'Right to Rectification',
      description:
        'You can request corrections to inaccurate or incomplete personal information to ensure its accuracy.',
    },
    {
      icon: <Trash2 className="w-6 h-6 text-amber-600" />,
      title: 'Right to Erasure',
      description:
        'Under certain conditions, you may request deletion of your personal data from our systems.',
    },
    {
      icon: <Download className="w-6 h-6 text-amber-600" />,
      title: 'Right to Data Portability',
      description:
        'You have the right to receive your personal data in a structured, commonly used, and machine-readable format.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: 'Right to Object',
      description:
        'You may object to our processing of your data for marketing or other legitimate interests at any time.',
    },
  ];

  return (
    <section
      aria-labelledby="user-rights-title"
      className="bg-white text-amber-600 w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full text-center space-y-8">
        <h2
          id="user-rights-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Your Privacy Rights
        </h2>

        <p className="text-amber-500 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We respect your rights under data protection laws and are committed to helping you exercise these rights easily.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {rights.map(({ icon, title, description }, index) => (
            <div key={index} className="flex items-start gap-4">
              {icon}
              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">{title}</p>
                <p className="text-amber-500 text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-amber-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed pt-4">
          To exercise any of these rights or for any privacy-related inquiries, please contact our support team at{' '}
          <a
            href="mailto:privacy@yourcompany.com"
            className="underline hover:text-amber-700 transition-colors break-words"
          >
            privacy@yourcompany.com
          </a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyUserRights;
