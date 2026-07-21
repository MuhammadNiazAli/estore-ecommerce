import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductAddToCartButton = ({
  price = 129.99,
  quantity = 1,
  onAddToCart = () => {},
  disabled = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    if (disabled || loading) return;
    setLoading(true);
    try {
      await onAddToCart(quantity);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (e) {
      // Handle error if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Total Price Display */}
        <div className="flex-1 text-center sm:text-left text-gray-900 text-2xl font-bold tracking-wide">
          ${ (price * quantity).toFixed(2) }
          <span className="text-sm text-gray-600 ml-1">USD</span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleClick}
          disabled={disabled || loading}
          whileTap={{ scale: 0.95 }}
          className={`
            flex-1
            bg-black 
            hover:bg-black 
            active:bg-black 
            focus:outline-none 
            focus:ring-4 
            focus:ring-black 
            text-black 
            font-semibold 
            py-3 
            rounded-md 
            shadow-lg 
            transition 
            disabled:opacity-60
            disabled:cursor-not-allowed
            flex items-center justify-center gap-3
            cursor-pointer
          `}
          aria-label="Add to Cart"
          aria-disabled={disabled || loading}
        >
          {loading ? (
            // Spinner
            <svg
              className="animate-spin h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : success ? (
            <span className="text-black font-semibold">Added ✓</span>
          ) : (
            <span>Add to Cart</span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ProductAddToCartButton;
