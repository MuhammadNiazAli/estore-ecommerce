'use client';

import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const CartSecureCheckoutNote = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 py-6">
      <div className="max-w-[1000px] flex flex-col sm:flex-row items-center gap-4 text-gray-900 text-center sm:text-left">
        <ShieldCheckIcon className="w-8 h-8 text-amber-600 flex-shrink-0" />
        <p className="text-sm sm:text-base max-w-xl leading-relaxed">
          <span className="font-semibold text-amber-600">Secure Checkout:</span>{' '}
          Your payment information is encrypted and processed securely. Shop with confidence.
        </p>
      </div>
    </section>
  );
};

export default CartSecureCheckoutNote;
