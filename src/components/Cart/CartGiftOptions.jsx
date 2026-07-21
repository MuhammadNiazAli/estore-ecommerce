'use client';

import React, { useState } from 'react';

const CartGiftOptions = () => {
  const [giftWrap, setGiftWrap] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="w-full bg-white text-gray-900 flex justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-[1000px]">
        <h3 className="text-amber-600 text-2xl font-semibold mb-6">
          Gift Options
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Gift Wrap Checkbox */}
          <label className="inline-flex items-center cursor-pointer text-gray-900 select-none">
            <input
              type="checkbox"
              checked={giftWrap}
              onChange={() => setGiftWrap(!giftWrap)}
              className="form-checkbox h-5 w-5 text-amber-600 rounded focus:ring-2 focus:ring-amber-600 focus:outline-none transition"
            />
            <span className="ml-3 text-lg select-none">Add gift wrap</span>
          </label>

          {/* Gift Message */}
          <div className="flex-grow">
            <label
              htmlFor="gift-message"
              className="block mb-1 text-amber-600 font-medium"
            >
              Gift message (optional)
            </label>
            <textarea
              id="gift-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!giftWrap}
              placeholder="Write a message to include with your gift"
              className={`w-full resize-none rounded-md bg-white border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 transition disabled:opacity-50 disabled:cursor-not-allowed`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartGiftOptions;
