'use client';

import React, { useState } from 'react';
import { Star, UploadCloud } from 'lucide-react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [photo, setPhoto] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be under 5MB.');
      e.target.value = null;
      return;
    }
    setPhoto(file || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return alert('Please select a rating.');
    if (!validateEmail(email)) return alert('Please enter a valid email.');

    setFormStatus('Submitting...');
    setTimeout(() => {
      setFormStatus('Thank you for your review!');
      setRating(0);
      setHovered(null);
      setName('');
      setEmail('');
      setReviewText('');
      setPhoto(null);
      e.target.reset();
    }, 1500);
  };

  return (
    <section
      className="w-full px-4 mb-[-55px] sm:px-6 md:px-8 lg:px-0 py-16 bg-gray-900 flex justify-center items-center"
      aria-labelledby="review-form-title"
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-[700px] bg-gray-900 border border-gray-800 shadow-xl rounded-xl p-6 sm:p-8 text-white"
      >
        <h2 id="review-form-title" className="text-3xl font-bold text-amber-400 mb-8 text-center">
          Leave a Review
        </h2>

        
        <fieldset className="mb-6">
          <legend className="mb-2 font-medium">
            Your Rating <span className="text-rose-500">*</span>
          </legend>
          <div className="flex gap-2" role="radiogroup" aria-label="Star rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={rating === value}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHovered(value)}
                onMouseLeave={() => setHovered(null)}
                className="text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
              >
                <Star
                  size={28}
                  fill={value <= (hovered || rating) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth={1.5}
                />
              </button>
            ))}
          </div>
        </fieldset>

   
        <div className="mb-5">
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

     
        <div className="mb-5">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email (not published) <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="e.g. john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby="email-help"
          />
          <p id="email-help" className="mt-1 text-xs text-gray-400">
            We'll never share your email.
          </p>
        </div>

      
        <div className="mb-5">
          <label htmlFor="reviewText" className="block mb-1 text-sm font-medium">
            Your Review <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="reviewText"
            rows={5}
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            placeholder="Write your honest feedback..."
          />
        </div>

   
        <div className="mb-6">
          <label htmlFor="photo" className="block mb-2 text-sm font-medium">
            Add a Photo (optional)
          </label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-amber-500 file:text-gray-900 hover:file:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {photo && (
            <p className="mt-2 text-sm text-amber-400">Selected: {photo.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-semibold rounded-full shadow hover:from-amber-500 hover:to-amber-700 focus:ring-4 focus:ring-amber-400 focus:ring-offset-2 transition-transform active:scale-95"
        >
          Submit Review
        </button>

        {/* Status */}
        {formStatus && (
          <p role="alert" className="mt-4 text-center font-medium text-green-400">
            {formStatus}
          </p>
        )}
      </form>
    </section>
  );
};

export default ReviewForm;
