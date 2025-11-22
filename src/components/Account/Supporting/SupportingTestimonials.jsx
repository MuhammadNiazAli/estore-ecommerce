'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Sarah Williams',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    feedback:
      'The support team was incredibly helpful and resolved my issue within minutes. Highly recommend!',
  },
  {
    name: 'James Anderson',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    feedback:
      'Quick responses and very professional service. I always feel valued as a customer.',
  },
  {
    name: 'Emily Johnson',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    feedback:
      'Friendly staff and great support resources. Made my experience smooth and stress-free.',
  },
];

const SupportingTestimonials = () => {
  return (
    <section
      aria-label="Customer testimonials"
      className="max-w-[700px] mx-auto bg-gray-900 rounded-3xl p-8 shadow-2xl text-yellow-100"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center tracking-tight select-none">
        What Our Customers Say
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {testimonials.map(({ name, photo, feedback }, idx) => (
          <article
            key={idx}
            className="bg-yellow-800 bg-opacity-60 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center
              shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-200 max-w-xs mx-auto"
            role="group"
            aria-label={`Testimonial from ${name}`}
          >
            <img
              src={photo}
              alt={`Photo of ${name}`}
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-yellow-400 shadow-sm"
              loading="lazy"
              decoding="async"
              width={64}
              height={64}
            />

            <p
              className="mb-4 text-yellow-300 italic font-medium px-4 leading-snug
              before:content-['“'] before:text-yellow-400 before:mr-1
              after:content-['”'] after:text-yellow-400 after:ml-1"
            >
              {feedback}
            </p>

            <p className="font-semibold text-yellow-400 text-sm tracking-wide">
              {name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SupportingTestimonials;
