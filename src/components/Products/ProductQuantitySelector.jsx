import React, { useState } from "react";

const ProductQuantitySelector = ({
  min = 1,
  max = 99,
  initial = 1,
  onChange = () => {},
}) => {
  const [quantity, setQuantity] = useState(initial);

  const updateQuantity = (value) => {
    let val = Math.max(min, Math.min(max, Number(value) || min));
    setQuantity(val);
    onChange(val);
  };

  const increment = () => updateQuantity(quantity + 1);
  const decrement = () => updateQuantity(quantity - 1);

  return (
    <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-md overflow-hidden bg-white dark:bg-white dark:border-gray-200 shadow-sm">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={`px-3 py-1 text-lg font-semibold text-gray-700 dark:text-gray-700 transition-colors ${
          quantity <= min
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-100 dark:hover:bg-gray-50"
        }`}
      >
        −
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={(e) => updateQuantity(e.target.value)}
        className="w-16 text-center bg-transparent outline-none font-medium text-gray-900 dark:text-gray-900"
        aria-label="Quantity input"
      />
      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className={`px-3 py-1 text-lg font-semibold text-gray-700 dark:text-gray-700 transition-colors ${
          quantity >= max
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-100 dark:hover:bg-gray-50"
        }`}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantitySelector;
