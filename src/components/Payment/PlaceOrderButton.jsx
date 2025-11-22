import React from "react";

export default function PlaceOrderButton({
  disabled = false,
  onClick,
  children = "Place Order",
}) {
  return (
    <section
      className="w-full flex justify-center bg-gray-900 px-4 py-12 mt-[-100px] mb-[-25px]"
      aria-live="polite"
    >
      <div className="w-full max-w-[1000px] flex justify-center">
        <button
          type="button"
          disabled={disabled}
          onClick={onClick}
          aria-disabled={disabled}
          className={` 
            w-full max-w-[320px] sm:max-w-none sm:w-auto 
            px-6 sm:px-14 
            py-3.5 sm:py-4 
            font-extrabold 
            text-base sm:text-xl 
            rounded-full 
            text-center 
            transition-all duration-300 ease-in-out 
            shadow-xl 
            focus:outline-none focus:ring-4 focus:ring-offset-2 
            select-none
            ${
              disabled
                ? "bg-gradient-to-r from-yellow-800 to-yellow-900 text-yellow-300/60 cursor-not-allowed pointer-events-none border border-yellow-700"
                : "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 active:scale-95 cursor-pointer text-gray-900 shadow-yellow-400/30 focus:ring-yellow-300 focus:ring-offset-yellow-950"
            }
          `}
        >
          {children}
        </button>
      </div>
    </section>
  );
}
