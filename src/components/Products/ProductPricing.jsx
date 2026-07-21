import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const formatCurrency = (value) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });

const ProductPricing = ({
  pricing = {
    price: 249.99,
    originalPrice: 299.99,
    taxPercent: 8,
    shippingCost: 9.99,
    specialDeal: true,
    dealText: "Limited Time Offer!",
  },
  onAddToCart = (quantity, total) =>
    alert(`Added ${quantity} items to cart. Total: ${formatCurrency(total)}`),
}) => {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const [inputError, setInputError] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscountPercent, setPromoDiscountPercent] = useState(0);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  const {
    price,
    originalPrice,
    taxPercent,
    shippingCost,
    specialDeal,
    dealText,
  } = pricing;

  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const promoDiscountAmount = promoApplied
    ? price * (promoDiscountPercent / 100)
    : 0;

  const subtotal = (price - promoDiscountAmount) * quantity;
  const taxAmount = (subtotal * taxPercent) / 100;
  const total = subtotal + taxAmount + shippingCost;

  const increment = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
      setInputValue(String(quantity + 1));
      setInputError("");
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setInputValue(String(quantity - 1));
      setInputError("");
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value.trim();
    if (/^\d*$/.test(val)) {
      setInputValue(val);
      if (val === "") {
        setInputError("Quantity is required");
        return;
      }
      const num = Number(val);
      if (num < 1) {
        setInputError("Minimum quantity is 1");
      } else if (num > 99) {
        setInputError("Maximum quantity is 99");
      } else {
        setInputError("");
        setQuantity(num);
      }
    }
  };

  const applyPromoCode = () => {
    if (promoCode.trim() === "") return;
    setIsApplyingPromo(true);
    setTimeout(() => {
      if (promoCode.toLowerCase() === "save10") {
        setPromoDiscountPercent(10);
        setPromoApplied(true);
        alert("Promo code applied! 10% discount.");
      } else if (promoCode.toLowerCase() === "save20") {
        setPromoDiscountPercent(20);
        setPromoApplied(true);
        alert("Promo code applied! 20% discount.");
      } else {
        alert("Invalid promo code.");
        setPromoApplied(false);
        setPromoDiscountPercent(0);
      }
      setIsApplyingPromo(false);
    }, 1000);
  };

  return (
    <section className="max-w-xl w-full mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      {specialDeal && (
        <div className="bg-amber-600 text-gray-900 font-semibold text-center py-2 rounded-md mb-8 select-none animate-pulse">
          {dealText}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Price */}
        <div className="flex-1 min-w-0">
          <p className="text-gray-600 text-sm mb-1">Price</p>
          <div className="flex items-baseline space-x-4 flex-wrap">
            <span className="text-4xl font-extrabold text-gray-800">
              {formatCurrency(price - promoDiscountAmount)}
            </span>
            {originalPrice && originalPrice > price && !promoApplied && (
              <>
                <span className="line-through text-gray-500 text-lg">
                  {formatCurrency(originalPrice)}
                </span>
                <span className="bg-red-600 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-md select-none whitespace-nowrap">
                  -{discountPercent}%
                </span>
              </>
            )}
            {promoApplied && (
              <span className="bg-green-600 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-md select-none whitespace-nowrap">
                Promo: -{promoDiscountPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center space-x-4">
          <button
            onClick={decrement}
            aria-label="Decrease quantity"
            className={`w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 transition
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-600
            ${quantity === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={quantity === 1}
          >
            –
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            max={99}
            value={inputValue}
            onChange={handleInputChange}
            aria-label="Quantity"
            className={`w-20 text-center rounded-md border border-gray-200 bg-white text-gray-800
            focus:outline-none focus:ring-2 focus:ring-amber-600
            ${inputError ? "border-red-500 focus:ring-red-500" : ""}`}
          />
          <button
            onClick={increment}
            aria-label="Increase quantity"
            className={`w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 transition
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-600
            ${quantity === 99 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={quantity === 99}
          >
            +
          </button>
        </div>
      </div>

      {inputError && (
        <p className="mt-1 text-sm text-red-500 font-medium" role="alert">
          {inputError}
        </p>
      )}

      {/* Promo code */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            disabled={promoApplied}
            aria-label="Promo code input"
            className="w-full rounded-md border border-gray-200 bg-white text-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <AiOutlineInfoCircle
            title="Try promo codes: save10 or save20"
            className="absolute right-3 top-3 w-5 h-5 text-amber-600 cursor-help"
          />
        </div>
        <button
          onClick={applyPromoCode}
          disabled={promoApplied || promoCode.trim() === "" || isApplyingPromo}
          className={`rounded-md bg-amber-600 hover:bg-amber-700 text-gray-900 font-semibold py-3 px-6 shadow-md transition
          disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-amber-500`}
          aria-label="Apply promo code"
        >
          {isApplyingPromo ? "Applying..." : promoApplied ? "Applied" : "Apply"}
        </button>
      </div>

      {/* Price breakdown */}
      <div className="mt-8 space-y-3 text-gray-600 text-sm">
        <p>
          <span className="font-semibold">Estimated Tax:</span> {taxPercent}% (
          {formatCurrency(taxAmount)})
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-1">Shipping Cost:</span>{" "}
          {formatCurrency(shippingCost)}
          <AiOutlineInfoCircle
            title="Shipping cost may vary based on location."
            className="ml-1 w-4 h-4 text-gray-500 cursor-help"
          />
        </p>
        <p className="border-t border-gray-200 pt-3 font-semibold text-lg text-gray-800">
          Total: {formatCurrency(total)}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onAddToCart(quantity, total)}
        disabled={!!inputError}
        className={`mt-8 w-full bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold py-4 rounded-xl shadow-lg transition-colors duration-300
        focus:outline-none focus:ring-4 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed`}
        aria-disabled={!!inputError}
      >
        Add to Cart
      </button>
    </section>
  );
};

export default ProductPricing;
