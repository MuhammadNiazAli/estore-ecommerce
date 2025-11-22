'use client';

import React, { useState } from 'react';

const CartGiftOptions = () => {
  const [giftWrap, setGiftWrap] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="w-full bg-gray-900 text-white flex justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-[1000px]">
        <h3 className="text-yellow-400 text-2xl font-semibold mb-6">
          Gift Options
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Gift Wrap Checkbox */}
          <label className="inline-flex items-center cursor-pointer text-white select-none">
            <input
              type="checkbox"
              checked={giftWrap}
              onChange={() => setGiftWrap(!giftWrap)}
              className="form-checkbox h-5 w-5 text-yellow-400 rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />
            <span className="ml-3 text-lg select-none">Add gift wrap</span>
          </label>

          {/* Gift Message */}
          <div className="flex-grow">
            <label
              htmlFor="gift-message"
              className="block mb-1 text-yellow-400 font-medium"
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
              className={`w-full resize-none rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartGiftOptions;
