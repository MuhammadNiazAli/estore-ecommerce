'use client';

import React, { useState } from "react";

export default function ShippingDetails({ formData, setFormData, onSubmit }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (!formData.shippingAddress || formData.shippingAddress.trim().length < 10) {
      return "Please provide a valid shipping address (min 10 characters).";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      const el = document.getElementById("shippingAddress");
      if (el) el.focus();
      return;
    }
    setError("");
    if (onSubmit) onSubmit(formData);
  };

  return (
    <section
      className="
        w-full px-4 sm:px-6 py-14
        max-w-[700px] mx-auto
        bg-white
        border border-amber-800/40 rounded-3xl
        shadow-2xl
        backdrop-blur-md ring-1 ring-amber-600/40
        transition-all
        -mt-16 sm:-mt-20
        mb-10
      "
      aria-label="Shipping details form"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-amber-400 text-center tracking-wide drop-shadow-md select-none">
        Shipping Details
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor="shippingAddress"
          className="flex flex-col font-medium text-sm sm:text-base text-amber-300 mb-1"
        >
          Shipping Address <span className="text-red-400">*</span>
        </label>

        <textarea
          id="shippingAddress"
          name="shippingAddress"
          value={formData.shippingAddress || ""}
          onChange={handleChange}
          required
          rows={5}
          placeholder="1234 Elm Street, Apartment 5B, City, State, ZIP"
          aria-describedby={error ? "shippingAddress-error" : "shippingAddressHelp"}
          aria-invalid={error ? "true" : "false"}
          className={`
            w-full
            mt-2
            resize-none
            rounded-xl
            border px-4 py-3 sm:px-5 sm:py-4
            text-gray-900
            placeholder-amber-400
            bg-amber-950/40
            text-sm sm:text-base
            transition-all focus:outline-none focus:ring-4
            ${error
              ? "border-red-500 bg-red-900/40 ring-red-400"
              : "border-amber-800 hover:border-amber-700 focus:ring-amber-500"}
          `}
        />

        {error ? (
          <p
            id="shippingAddress-error"
            className="text-xs text-red-300 mt-2 italic"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        ) : (
          <p
            id="shippingAddressHelp"
            className="text-xs sm:text-sm text-amber-500 mt-2 select-text"
          >
            Please enter your complete delivery address including postal code.
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="
              bg-gradient-to-r from-amber-600 to-amber-800
              hover:from-amber-700 hover:to-amber-900
              text-gray-900 font-bold
              px-8 sm:px-10 md:px-12
              py-3 sm:py-3.5
              rounded-full
              shadow-md hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-amber-500/60
              transition-all duration-200
              text-sm sm:text-base md:text-lg tracking-wide
              disabled:opacity-60 disabled:cursor-not-allowed
              select-none
            "
            aria-label="Submit shipping details form"
          >
            Submit Shipping Info
          </button>
        </div>
      </form>
    </section>
  );
}
