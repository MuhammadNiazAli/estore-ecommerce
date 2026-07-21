'use client';
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Williams',
    review:
      'Amazing experience! The quality is outstanding, and delivery was super fast. Highly recommended!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'James Carter',
    review:
      'Great deals and premium quality. Customer support was helpful. Will definitely shop again.',
    rating: 4,
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    review:
      'Absolutely love the products. The discounts were amazing, and everything arrived in perfect condition.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const BestdealsTestimonials = () => {
  return (
    <section className="bg-white text-gray-900 w-full py-12 px-4 sm:px-6 flex justify-center">
      <div className="max-w-[1000px] w-full">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          What Our <span className="text-amber-600">Customers</span> Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              {/* Customer Photo */}
              <img
                src={item.photo}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-amber-600"
              />
              {/* Name */}
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              {/* Rating */}
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating ? 'text-amber-600 fill-amber-600' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestdealsTestimonials;
