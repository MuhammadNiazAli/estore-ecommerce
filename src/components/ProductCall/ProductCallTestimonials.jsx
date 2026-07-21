'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica Pearson',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    comment:
      'Amazing products and excellent customer service! I’m so happy with my purchase and will definitely shop again.',
  },
  {
    name: 'Michael Scott',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    comment:
      'Great quality and fast delivery. The team was very helpful when I had questions.',
  },
  {
    name: 'Linda Johnson',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment:
      'The product exceeded my expectations. Highly recommend to anyone looking for quality and value!',
  },
];

const ProductCallTestimonials = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-12 sm:py-16">
      <div className="max-w-[1000px] w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-10 px-2 sm:px-0">
          What Our Customers Say
        </h2>

        <div className="flex flex-col sm:flex-row gap-6">
          {testimonials.map(({ name, photo, rating, comment }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 min-w-0"
              tabIndex={0}
              aria-label={`Testimonial from ${name}`}
            >
              <img
                src={photo}
                alt={`${name}'s photo`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4 border-2 border-black"
                loading="lazy"
              />
              <h3 className="text-black font-semibold text-lg mb-1 text-center truncate max-w-full">
                {name}
              </h3>
              <div className="flex mb-3" aria-label={`Rating: ${rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < rating ? 'text-black' : 'text-gray-600'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-center text-sm sm:text-base leading-relaxed">
                {comment}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCallTestimonials;
