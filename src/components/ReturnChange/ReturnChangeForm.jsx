'use client';

import React, { useState, useEffect } from 'react';

const conditions = [
  'Unused & Original Packaging',
  'Opened but Unused',
  'Used - Defective',
  'Used - Not Defective',
];

const ReturnChangeForm = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    reason: '',
    condition: '',
    files: [],
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Store object URLs to revoke them later to avoid memory leaks
  const [filePreviews, setFilePreviews] = useState([]);

  useEffect(() => {
    // Revoke URLs on cleanup or files change
    return () => {
      filePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [filePreviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: filesArray }));

    // Revoke old previews and create new ones
    filePreviews.forEach((url) => URL.revokeObjectURL(url));
    const newPreviews = filesArray.map((file) => URL.createObjectURL(file));
    setFilePreviews(newPreviews);
  };

  const validate = () => {
    const errs = {};
    if (!formData.orderId.trim()) errs.orderId = 'Order ID is required';
    if (!formData.reason.trim()) errs.reason = 'Reason is required';
    if (!formData.condition) errs.condition = 'Please select product condition';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);

      // Scroll to first error for better UX
      const firstErrorField = Object.keys(errs)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });

      return;
    }

    setSubmitted(true);

    // Simulate API call
    setTimeout(() => {
      // Reset form
      setFormData({ orderId: '', reason: '', condition: '', files: [] });
      setErrors({});
      setSubmitted(false);

      // Revoke previews and clear
      filePreviews.forEach((url) => URL.revokeObjectURL(url));
      setFilePreviews([]);
      
      // Scroll to top for success message visibility
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 4000);
  };

  return (
    <section className="w-full bg-white px-4 py-14 flex justify-center min-h-[calc(100vh-120px)] my-[-50px]">
      <div className="w-full max-w-[1000px] text-gray-900">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Return / Exchange Request Form
        </h2>

        {submitted && (
          <div
            role="alert"
            className="mb-6 bg-black rounded-md p-4 text-center font-semibold text-gray-900 select-none"
          >
            ✅ Your request was submitted successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 shadow-lg max-w-xl mx-auto"
          noValidate
          aria-describedby="form-errors"
        >
          <div className="mb-6">
            <label
              htmlFor="orderId"
              className="block mb-2 font-semibold text-black"
            >
              Order ID <span className="text-black">*</span>
            </label>
            <input
              id="orderId"
              name="orderId"
              type="text"
              value={formData.orderId}
              onChange={handleChange}
              placeholder="e.g., #123456789"
              aria-invalid={!!errors.orderId}
              aria-describedby={errors.orderId ? 'orderId-error' : undefined}
              className={`w-full p-3 rounded-md bg-white border ${
                errors.orderId ? 'border-black' : 'border-gray-200'
              } text-gray-900 placeholder-gray-500 focus:outline-black focus:ring-1 focus:ring-black transition`}
              disabled={submitted}
            />
            {errors.orderId && (
              <p
                id="orderId-error"
                className="mt-1 text-black text-sm"
                role="alert"
              >
                {errors.orderId}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="reason"
              className="block mb-2 font-semibold text-black"
            >
              Reason for Return/Exchange <span className="text-black">*</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              placeholder="Please describe why you want to return or exchange the item"
              aria-invalid={!!errors.reason}
              aria-describedby={errors.reason ? 'reason-error' : undefined}
              className={`w-full p-3 rounded-md bg-white border ${
                errors.reason ? 'border-black' : 'border-gray-200'
              } text-gray-900 placeholder-gray-500 resize-none focus:outline-black focus:ring-1 focus:ring-black transition`}
              disabled={submitted}
            />
            {errors.reason && (
              <p
                id="reason-error"
                className="mt-1 text-black text-sm"
                role="alert"
              >
                {errors.reason}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="condition"
              className="block mb-2 font-semibold text-black"
            >
              Condition of the Product <span className="text-black">*</span>
            </label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              aria-invalid={!!errors.condition}
              aria-describedby={errors.condition ? 'condition-error' : undefined}
              className={`w-full p-3 rounded-md bg-white border ${
                errors.condition ? 'border-black' : 'border-gray-200'
              } text-gray-900 placeholder-gray-500 focus:outline-black focus:ring-1 focus:ring-black transition`}
              disabled={submitted}
            >
              <option value="" disabled>
                Select condition
              </option>
              {conditions.map((cond, idx) => (
                <option key={idx} value={cond}>
                  {cond}
                </option>
              ))}
            </select>
            {errors.condition && (
              <p
                id="condition-error"
                className="mt-1 text-black text-sm"
                role="alert"
              >
                {errors.condition}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-black">
              Upload Photos (optional)
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-gray-700 cursor-pointer"
              disabled={submitted}
              aria-describedby={
                formData.files.length > 0 ? 'upload-preview' : undefined
              }
            />
            {filePreviews.length > 0 && (
              <div
                id="upload-preview"
                className="mt-4 flex flex-wrap gap-3"
                aria-live="polite"
              >
                {filePreviews.map((url, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 rounded-md overflow-hidden border border-black"
                    title={formData.files[idx]?.name || 'Uploaded image preview'}
                  >
                    <img
                      src={url}
                      alt={`Upload preview ${idx + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-3 rounded-md font-semibold transition 
            ${
              submitted
                ? 'bg-black text-black cursor-not-allowed'
                : 'bg-black text-black hover:bg-black focus:outline-black focus:ring-2 focus:ring-black'
            }`}
            aria-busy={submitted}
          >
            {submitted ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReturnChangeForm;
