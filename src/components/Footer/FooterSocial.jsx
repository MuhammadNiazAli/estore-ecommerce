'use client';

import React from 'react';
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from 'react-icons/fi';
import {
  SiAmazon,
  SiEbay,
  SiShopify,
  SiAliexpress,
  SiEtsy,
  SiWalmart,
  SiWish,
  SiFlipkart,
  SiPaypal,
  SiVisa,
  SiMastercard,
  SiStripe,
} from 'react-icons/si';

const socialApps = [
  { name: 'Facebook', Icon: FiFacebook, url: 'https://www.facebook.com', color: '#3b5998' },
  { name: 'Twitter', Icon: FiTwitter, url: 'https://twitter.com', color: '#1da1f2' },
  { name: 'Instagram', Icon: FiInstagram, url: 'https://www.instagram.com', color: '#e1306c' },
  { name: 'LinkedIn', Icon: FiLinkedin, url: 'https://www.linkedin.com', color: '#0077b5' },
  { name: 'YouTube', Icon: FiYoutube, url: 'https://www.youtube.com', color: '#ff0000' },
  { name: 'Amazon', Icon: SiAmazon, url: 'https://www.amazon.com', color: '#ff9900' },
  { name: 'eBay', Icon: SiEbay, url: 'https://www.ebay.com', color: '#e53238' },
  { name: 'Shopify', Icon: SiShopify, url: 'https://www.shopify.com', color: '#96bf48' },
  { name: 'AliExpress', Icon: SiAliexpress, url: 'https://www.aliexpress.com', color: '#ff4747' },
  { name: 'Etsy', Icon: SiEtsy, url: 'https://www.etsy.com', color: '#f16521' },
  { name: 'Walmart', Icon: SiWalmart, url: 'https://www.walmart.com', color: '#0071ce' },
  { name: 'Wish', Icon: SiWish, url: 'https://www.wish.com', color: '#ff3b3b' },
  { name: 'Flipkart', Icon: SiFlipkart, url: 'https://www.flipkart.com', color: '#0046be' },
  { name: 'PayPal', Icon: SiPaypal, url: 'https://www.paypal.com', color: '#003087' },
  { name: 'Visa', Icon: SiVisa, url: 'https://www.visa.com', color: '#1a1f71' },
  { name: 'Mastercard', Icon: SiMastercard, url: 'https://www.mastercard.com', color: '#eb001b' },
  { name: 'Stripe', Icon: SiStripe, url: 'https://stripe.com', color: '#635bff' },
];

export default function FooterSocial() {
  return (
    <section
      aria-labelledby="footer-social-heading"
      className="max-w-[1000px] mx-auto px-6 mb-[-60px] py-16 select-none"
    >
      <h4
        id="footer-social-heading"
        className="text-gray-900 text-3xl font-extrabold mb-6 text-center md:text-left tracking-wide"
      >
        Follow & Connect With Us
      </h4>

      <p className="text-black max-w-xl mx-auto md:mx-0 mb-12 text-center md:text-left text-lg leading-relaxed tracking-wide">
        Stay updated on the latest deals, trends, and offers by following our social channels and e-commerce platforms. We’re everywhere you shop!
      </p>

      <ul
        role="list"
        className="flex flex-wrap justify-center md:justify-start gap-8"
      >
        {socialApps.map(({ name, Icon, url, color }) => (
          <li key={name} className="relative group">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="
                flex items-center justify-center
                w-16 h-16 rounded-xl
                bg-white
                text-gray-600
                transition
                transform
                hover:text-gray-900
                focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-900
                group-hover:scale-110
                group-focus:scale-110
                shadow-lg
                hover:shadow-black/70
                cursor-pointer
              "
              style={{ color }}
            >
              <Icon className="w-8 h-8" aria-hidden="true" />
            </a>

            <span
              role="tooltip"
              className="
                pointer-events-none
                absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2
                rounded-md bg-black text-gray-900 text-xs font-semibold
                px-3 py-1.5
                opacity-0
                group-hover:opacity-100 group-focus:opacity-100
                transition-opacity duration-300
                whitespace-nowrap
                select-none
                z-20
                before:absolute before:bottom-[-6px] before:left-1/2 before:-translate-x-1/2 before:border-6 before:border-transparent before:border-t-black
              "
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
