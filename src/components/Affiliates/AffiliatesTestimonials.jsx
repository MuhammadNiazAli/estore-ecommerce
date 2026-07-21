'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Top Affiliate Partner',
    quote:
      "Joining the affiliate program was the best decision I made. The commission rates are fantastic, and the support team is top-notch.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'David Lee',
    role: 'Digital Marketer',
    quote:
      "The dashboard is intuitive and earnings are transparent. I recommend it to anyone looking for passive income opportunities.",
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Emily Carter',
    role: 'YouTube Tech Influencer',
    quote:
      "I’ve worked with many programs, but this one offers the best tools and resources. Conversion rates are solid!",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const AffiliatesTestimonials = () => {
  return (
    <div className="bg-white text-amber-600 py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          What Our Affiliates Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white hover:bg-gray-500 transition-all duration-300 ease-in-out rounded-2xl p-6 shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-amber-700 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <p className="text-sm text-amber-500">{t.role}</p>
                </div>
              </div>
              <div className="flex mb-3 text-amber-600">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-600" />
                ))}
              </div>
              <div className="flex items-start gap-2 text-amber-400 text-sm italic leading-relaxed">
                <Quote className="w-5 h-5 shrink-0 mt-1 text-amber-700" />
                <p>{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliatesTestimonials;
