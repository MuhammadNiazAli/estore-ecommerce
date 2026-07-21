import React from "react";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/yourcompany",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8 19c7 0 11-6 11-11 0-.17 0-.34-.01-.51A7.94 7.94 0 0021 4.92a7.77 7.77 0 01-2.23.61 3.88 3.88 0 001.7-2.15 7.77 7.77 0 01-2.46.95 3.87 3.87 0 00-6.6 3.53A11 11 0 015 4.87a3.87 3.87 0 001.2 5.15 3.9 3.9 0 01-1.75-.48v.05a3.87 3.87 0 003.1 3.8 3.9 3.9 0 01-1.74.07 3.88 3.88 0 003.62 2.7A7.78 7.78 0 015 17.49a10.98 10.98 0 006 1.75" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourcompany",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.5 1.5-3.89 3.79-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.84h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 17 22 12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/yourcompany",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Affiliate Program", href: "/affiliate" },
  { name: "Join Now", href: "/affiliate#signup" },
  { name: "FAQs", href: "/affiliate#faq" },
  { name: "Contact", href: "/affiliate#contact" },
];

const AffiliatesFooter = () => {
  return (
    <footer className="bg-white mb-[-150px] text-amber-600 py-12 px-4">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="hover:text-amber-700 transition duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <address className="not-italic space-y-2 text-sm text-amber-500 leading-relaxed">
            <p>📍 123 Affiliate St., Suite 100</p>
            <p>Commerce City, CA 90000</p>
            <p>
              📧{" "}
              <a
                href="mailto:affiliate@yourcompany.com"
                className="hover:text-amber-700"
              >
                affiliate@yourcompany.com
              </a>
            </p>
            <p>📞 +1 (555) 123-4567</p>
          </address>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-5">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${name}`}
                className="text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="max-w-[1000px] mx-auto mt-10 border-t border-amber-900 pt-6 text-center text-sm text-amber-500 tracking-wide">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default AffiliatesFooter;
