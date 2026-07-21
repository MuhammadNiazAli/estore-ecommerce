'use client';

import React, { useState } from 'react';
import { FiX, FiCopy } from 'react-icons/fi';

const WishlistShareOverlay = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://your-site.com/wishlist';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg text-gray-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close share wishlist overlay"
          className="absolute top-4 right-4 text-black hover:text-black transition"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">Share Your Wishlist</h2>
        <p className="text-black mb-6 text-center">
          Share the link below with friends and family so they can see your wishlist!
        </p>

        <div className="flex items-center bg-black rounded-lg px-4 py-2 mb-4">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="bg-transparent outline-none flex-grow text-sm text-black truncate"
            aria-label="Wishlist share link"
          />
          <button
            onClick={handleCopy}
            aria-label="Copy share link"
            className="ml-3 text-black hover:text-black transition"
          >
            <FiCopy size={20} />
          </button>
        </div>

        {copied && (
          <p className="text-black text-center text-sm font-medium animate-pulse">
            Link copied to clipboard!
          </p>
        )}

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black rounded-lg hover:bg-black transition text-gray-900 font-semibold"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black rounded-lg hover:bg-black transition text-gray-900 font-semibold"
          >
            Twitter
          </a>
          <a
            href={`mailto:?subject=Check out my wishlist&body=Here is my wishlist: ${encodeURIComponent(
              shareUrl
            )}`}
            className="px-4 py-2 bg-black rounded-lg hover:bg-black transition text-gray-900 font-semibold"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default WishlistShareOverlay;
