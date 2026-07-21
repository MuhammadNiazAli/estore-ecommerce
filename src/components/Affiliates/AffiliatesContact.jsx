"use client";

import React, { useState, useRef, useEffect } from "react";

const AffiliatesContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSubmitStatus(null);
  };

  const scrollToError = () => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      const el = document.getElementById(firstErrorField);
      if (el?.scrollIntoView) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus({ preventScroll: true });
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      scrollToError();
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);

    try {
      // Simulate real API delay
      await new Promise((res) => setTimeout(res, 1500));

      // Simulate API success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-black py-12 px-4" aria-label="Affiliate Contact">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide">
          Contact Our Affiliate Team
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-semibold text-black">
              Name<span className="text-black">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Your full name"
              className={`rounded-md bg-white border px-4 py-3 text-black placeholder-gray-500
                focus:outline-none focus:ring-2 transition-all duration-200
                ${errors.name ? "border-black focus:ring-black" : "border-black focus:ring-black"}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" role="alert" className="mt-1 text-black text-sm">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-semibold text-black">
              Email<span className="text-black">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="you@example.com"
              className={`rounded-md bg-white border px-4 py-3 text-black placeholder-gray-500
                focus:outline-none focus:ring-2 transition-all duration-200
                ${errors.email ? "border-black focus:ring-black" : "border-black focus:ring-black"}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" role="alert" className="mt-1 text-black text-sm">
                {errors.email}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-1 font-semibold text-black">
              Message<span className="text-black">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Write your message here..."
              className={`rounded-md bg-white border px-4 py-3 text-black placeholder-gray-500
                focus:outline-none focus:ring-2 transition-all duration-200 resize-none
                ${errors.message ? "border-black focus:ring-black" : "border-black focus:ring-black"}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" role="alert" className="mt-1 text-black text-sm">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-black hover:bg-black focus:bg-black text-gray-900 font-semibold px-8 py-3 rounded-md shadow-md
              transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-black
              disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-busy={isSubmitting}
              aria-live="polite"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Status Message */}
          {submitStatus === "success" && (
            <p
              className="sm:col-span-2 text-center text-black font-semibold mt-2 animate-pulse"
              role="alert"
              aria-live="polite"
            >
              ✅ Message sent successfully! We'll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p
              className="sm:col-span-2 text-center text-black font-semibold mt-2 animate-pulse"
              role="alert"
              aria-live="assertive"
            >
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default AffiliatesContact;
