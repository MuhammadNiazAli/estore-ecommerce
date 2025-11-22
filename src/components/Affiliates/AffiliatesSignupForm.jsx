import React, { useState, useEffect, useRef } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "India",
  "Netherlands",
  "Other",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

const AffiliatesSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    country: "",
    referral: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const successRef = useRef(null);
  const errorRef = useRef(null);
  const validateTimeout = useRef(null);

  // Validate single field on change with debounce for backend feel
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!emailRegex.test(value)) error = "Please enter a valid email address.";
        break;
      case "website":
        if (!value.trim()) error = "Website URL is required.";
        else if (!urlRegex.test(value)) error = "Please enter a valid website URL.";
        break;
      case "country":
        if (!value) error = "Please select your country.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Debounced validation on input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus(null);

    if (validateTimeout.current) clearTimeout(validateTimeout.current);

    setIsValidating(true);
    validateTimeout.current = setTimeout(() => {
      validateField(name, value);
      setIsValidating(false);
    }, 500);
  };

  // Full form validation before submit
  const validateAll = () => {
    const validationErrors = {};
    if (!formData.fullName.trim()) validationErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) validationErrors.email = "Please enter a valid email address.";
    if (!formData.website.trim()) validationErrors.website = "Website URL is required.";
    else if (!urlRegex.test(formData.website)) validationErrors.website = "Please enter a valid website URL.";
    if (!formData.country) validationErrors.country = "Please select your country.";

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidating) return; // prevent submit during validation

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus(null);
      errorRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    // Simulated async submission with 15% error chance
    setTimeout(() => {
      const didFail = Math.random() < 0.15;
      setIsSubmitting(false);

      if (didFail) {
        setSubmitStatus("error");
        errorRef.current?.focus();
      } else {
        setSubmitStatus("success");
        successRef.current?.focus();
        setFormData({
          fullName: "",
          email: "",
          website: "",
          country: "",
          referral: "",
        });
      }
    }, 1800);
  };

  return (
    <section
      aria-label="Affiliate Signup Form"
      className="bg-gray-900 text-yellow-400 py-12 px-4"
      style={{ minHeight: "fit-content" }}
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide">
          Join Our Affiliate Program
        </h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-describedby="formInstructions"
          aria-busy={isSubmitting}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-1 font-semibold text-yellow-300">
              Full Name<span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              placeholder="John Doe"
              disabled={isSubmitting}
              className={`rounded-md bg-gray-800 border
                px-4 py-3 text-yellow-100 placeholder-yellow-500
                focus:outline-none focus:ring-2 focus:ring-yellow-500
                transition-colors duration-200
                ${errors.fullName ? "border-red-500 focus:ring-red-500" : "border-yellow-600"}`}
            />
            {errors.fullName && (
              <span
                id="fullName-error"
                role="alert"
                className="mt-1 text-red-500 text-sm font-medium"
              >
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-semibold text-yellow-300">
              Email<span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
              disabled={isSubmitting}
              className={`rounded-md bg-gray-800 border
                px-4 py-3 text-yellow-100 placeholder-yellow-500
                focus:outline-none focus:ring-2 focus:ring-yellow-500
                transition-colors duration-200
                ${errors.email ? "border-red-500 focus:ring-red-500" : "border-yellow-600"}`}
            />
            {errors.email && (
              <span
                id="email-error"
                role="alert"
                className="mt-1 text-red-500 text-sm font-medium"
              >
                {errors.email}
              </span>
            )}
          </div>

          {/* Website URL */}
          <div className="flex flex-col">
            <label htmlFor="website" className="mb-1 font-semibold text-yellow-300">
              Website URL<span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              aria-invalid={errors.website ? "true" : "false"}
              aria-describedby={errors.website ? "website-error" : undefined}
              placeholder="https://yourwebsite.com"
              disabled={isSubmitting}
              className={`rounded-md bg-gray-800 border
                px-4 py-3 text-yellow-100 placeholder-yellow-500
                focus:outline-none focus:ring-2 focus:ring-yellow-500
                transition-colors duration-200
                ${errors.website ? "border-red-500 focus:ring-red-500" : "border-yellow-600"}`}
            />
            {errors.website && (
              <span
                id="website-error"
                role="alert"
                className="mt-1 text-red-500 text-sm font-medium"
              >
                {errors.website}
              </span>
            )}
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-1 font-semibold text-yellow-300">
              Country<span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              aria-invalid={errors.country ? "true" : "false"}
              aria-describedby={errors.country ? "country-error" : undefined}
              disabled={isSubmitting}
              className={`rounded-md bg-gray-800 border
                px-4 py-3 text-yellow-100
                focus:outline-none focus:ring-2 focus:ring-yellow-500
                transition-colors duration-200
                ${errors.country ? "border-red-500 focus:ring-red-500" : "border-yellow-600"}`}
            >
              <option value="" disabled>
                Select your country
              </option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.country && (
              <span
                id="country-error"
                role="alert"
                className="mt-1 text-red-500 text-sm font-medium"
              >
                {errors.country}
              </span>
            )}
          </div>

          {/* Referral (optional) full width */}
          <div className="sm:col-span-2 flex flex-col">
            <label htmlFor="referral" className="mb-1 font-semibold text-yellow-300">
              How did you hear about us? (Optional)
            </label>
            <textarea
              id="referral"
              name="referral"
              rows={4}
              value={formData.referral}
              onChange={handleChange}
              placeholder="Your answer here..."
              disabled={isSubmitting}
              className="rounded-md bg-gray-800 border border-yellow-600
                px-4 py-3 text-yellow-100 placeholder-yellow-500
                focus:outline-none focus:ring-2 focus:ring-yellow-500
                transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit button full width */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || isValidating}
              className={`bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700
                text-gray-900 font-semibold px-8 py-3 rounded-md shadow-md
                transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-400
                disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-live="polite"
            >
              {isSubmitting ? "Submitting..." : isValidating ? "Validating..." : "Sign Up"}
            </button>
          </div>

          {/* Submission Status */}
          {submitStatus === "success" && (
            <p
              ref={successRef}
              tabIndex={-1}
              className="sm:col-span-2 text-green-400 text-center font-semibold mt-4"
              role="alert"
              aria-live="polite"
            >
              Thank you for signing up! We'll be in touch soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p
              ref={errorRef}
              tabIndex={-1}
              className="sm:col-span-2 text-red-500 text-center font-semibold mt-4"
              role="alert"
              aria-live="assertive"
            >
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default AffiliatesSignupForm;
