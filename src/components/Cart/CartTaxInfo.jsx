'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

const CartTaxInfo = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      aria-label="Tax information"
      className="bg-white text-gray-700 rounded-lg p-5 shadow-md mt-6 max-w-[1000px] mx-auto"
    >
      <div className="flex items-start gap-3">
        <Info
          className="w-6 h-6 text-black flex-shrink-0 mt-1"
          aria-hidden="true"
        />
        <div className="flex flex-col flex-grow">
          <p className="text-sm sm:text-base leading-relaxed">
            Taxes are estimated and will be calculated during checkout.
          </p>

          {showMore && (
            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Tax rates are based on your shipping address and local regulations.
              If you qualify for tax exemption, you can submit documentation during
              the checkout process or in your account settings.
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            className="mt-3 self-start text-black hover:text-black underline text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            {showMore ? 'Hide details' : 'Learn more'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartTaxInfo;
