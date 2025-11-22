'use client';

import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const BlogAuthor = () => {
  return (
    <section
      aria-labelledby="author-section-title"
      className="w-full flex justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10 lg:gap-12">
        {/* Author Image */}
        <div
          className="w-28 h-28 xs:w-32 xs:h-32 md:w-36 md:h-36 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg flex-shrink-0"
          aria-label="Author profile picture"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1669075651892-ad3b64f2145c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Photo of Niaz Ali"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
            className="object-cover"
            priority={true}
          />
        </div>

        {/* Author Info */}
        <div className="text-center sm:text-left max-w-xl w-full px-2">
          <h2
            id="author-section-title"
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight"
          >
            Niaz Ali
          </h2>
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            Lead Frontend Engineer & Tech Blogger
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            I write about frontend architecture, design systems, performance, and scalable web
            solutions. My mission is to make tech simpler, cleaner, and smarter.
          </p>

          {/* Social Links */}
          <nav
            aria-label="Social media links"
            className="flex justify-center sm:justify-start gap-6"
          >
            <a
              href="https://twitter.com/niazali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="Visit Twitter profile"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/niazali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:niaz@example.com"
              className="text-yellow-400 hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="Send email to Niaz Ali"
            >
              <Mail size={24} />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogAuthor;
