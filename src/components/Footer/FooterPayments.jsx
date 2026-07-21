'use client';

import React from 'react';
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiApplepay,
} from 'react-icons/si';

const payments = [
  {
    name: 'Visa',
    Icon: SiVisa,
    color: '#1a1f71',
    glow: '0 0 12px #1a1f71aa',
    url: 'https://www.visa.com',
  },
  {
    name: 'Mastercard',
    Icon: SiMastercard,
    color: '#eb001b',
    glow: '0 0 12px #eb001baa',
    url: 'https://www.mastercard.com',
  },
  {
    name: 'American Express',
    Icon: SiAmericanexpress,
    color: '#2e77bb',
    glow: '0 0 12px #2e77bbaa',
    url: 'https://www.americanexpress.com',
  },
  {
    name: 'PayPal',
    Icon: SiPaypal,
    color: '#003087',
    glow: '0 0 12px #003087aa',
    url: 'https://www.paypal.com',
  },
  {
    name: 'Apple Pay',
    Icon: SiApplepay,
    color: '#ffffff',
    glow: '0 0 12px #ffffffaa',
    url: 'https://www.apple.com/apple-pay/',
  },
];

export default function FooterPayments() {
  return (
    <section
      aria-labelledby="footer-payments-heading"
      className="max-w-[1000px] mx-auto px-6 py-16 select-none"
    >
      <h4
        id="footer-payments-heading"
        className="text-gray-900 text-3xl font-extrabold mb-6 text-center md:text-left tracking-wide"
      >
        We Accept
      </h4>

      <p className="text-amber-500 max-w-xl mx-auto md:mx-0 mb-12 text-center md:text-left text-lg leading-relaxed tracking-wide">
        Pay securely using your preferred payment method. We support all major credit cards and digital wallets for your convenience.
      </p>

      <ul className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8">
        {payments.map(({ name, Icon, color, glow, url }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="
                flex items-center justify-center
                w-24 h-16 sm:w-28 sm:h-20
                rounded-xl
                bg-white/60
                text-gray-900
                transition-all duration-300 ease-in-out
                transform hover:scale-110
                shadow-md
                hover:shadow-xl
                hover:brightness-110
                focus:outline-none focus:ring-4 focus:ring-amber-700 focus:ring-offset-2 focus:ring-offset-gray-900
              "
              style={{
                color,
                boxShadow: `inset 0 0 4px ${color}, ${glow}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 20px ${glow}, inset 0 0 4px ${color}`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = `inset 0 0 4px ${color}, ${glow}`)
              }
            >
              <Icon className="w-10 h-10 sm:w-12 sm:h-12" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
