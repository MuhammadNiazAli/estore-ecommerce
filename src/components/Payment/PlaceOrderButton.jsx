import React from "react";

export default function PlaceOrderButton({
  disabled = false,
  onClick,
  children = "Place Order",
}) {
  return (
    <section
      className="w-full flex justify-center bg-white px-4 py-12 mt-[-100px] mb-[-25px]"
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
                ? "bg-gradient-to-r from-amber-900 to-amber-950 text-amber-500/60 cursor-not-allowed pointer-events-none border border-amber-900"
                : "bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 active:scale-95 cursor-pointer text-gray-900 shadow-amber-600/30 focus:ring-amber-500 focus:ring-offset-amber-950"
            }
          `}
        >
          {children}
        </button>
      </div>
    </section>
  );
}
