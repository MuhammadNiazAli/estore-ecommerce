import React, { useState } from "react";

export default function PromoCode({ applyPromo }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    const trimmedCode = code.trim().toUpperCase();
    if (!trimmedCode) {
      setMessage("Please enter a promo code.");
      setIsSuccess(false);
      return;
    }

    setLoading(true);
    try {
      const success = await Promise.resolve(applyPromo(trimmedCode));
      setIsSuccess(success);
      setMessage(success ? "Promo code applied!" : "Invalid promo code.");
      if (success) setCode("");
    } catch (error) {
      setIsSuccess(false);
      setMessage("Error applying promo code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-16 flex justify-center items-center">
      <div
        className="
          w-full max-w-[600px]
          bg-white
          border border-black
          shadow-2xl rounded-3xl
          p-5 sm:p-8 md:p-10
          backdrop-blur-md
          ring-1 ring-black/30
          transition-all
        "
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-10 text-gray-900 text-center tracking-wide drop-shadow-md select-none">
          Apply Promo Code
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto w-full">
          <input
            type="text"
            aria-label="Enter promo code"
            placeholder="SUMMER25"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (!loading) handleApply();
              }
            }}
            disabled={loading}
            className="
              px-4 py-3 rounded-lg
              bg-black/80 border border-black
              placeholder-gray-500 text-gray-900 font-semibold tracking-wide
              focus:outline-none focus:ring-4 focus:ring-black
              transition
              w-full
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          />

          <button
            onClick={handleApply}
            type="button"
            disabled={!code.trim() || loading}
            className="
              px-6 py-3 rounded-lg
              bg-gradient-to-r from-black to-gray-900
              hover:from-black hover:to-gray-900
              text-gray-900 font-extrabold tracking-wide
              focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
              transition
              sm:w-auto w-full
              disabled:opacity-50 disabled:cursor-not-allowed
              select-none
            "
          >
            {loading ? "Applying..." : "Apply"}
          </button>
        </div>

        {message && (
          <p
            role="alert"
            className={`mt-6 text-center text-sm font-semibold select-text ${
              isSuccess ? "text-black" : "text-black"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
