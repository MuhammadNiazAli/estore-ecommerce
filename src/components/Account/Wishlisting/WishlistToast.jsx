'use client';

import React, { useEffect, useState } from 'react';

const WishlistToast = ({ message = 'Item added to wishlist!', duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show toast on mount
    setVisible(true);
    // Hide toast after duration
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {visible && (
        <div
          aria-live="assertive"
          className="fixed bottom-8 right-8 max-w-xs w-full bg-amber-800 text-gray-900 px-5 py-3 rounded-lg shadow-lg
          transform transition duration-300 ease-in-out opacity-100 translate-y-0 z-50"
        >
          <p className="font-semibold">{message}</p>
        </div>
      )}
    </>
  );
};

export default WishlistToast;
