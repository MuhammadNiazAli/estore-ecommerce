import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Carter',
    role: 'Fashion Enthusiast',
    review:
      'The new season collection is absolutely stunning! The quality and style exceeded my expectations.',
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Parker',
    role: 'Lifestyle Blogger',
    review:
      'Every piece feels premium and unique. I love how versatile the styles are this season!',
    image:
      'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Olivia Harris',
    role: 'Content Creator',
    review:
      'Fast delivery and the designs are on-trend. This collection is a must-have for every wardrobe!',
    image:
      'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
  },
];

const NewseasonTestimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-amber-400 text-lg mb-12 max-w-2xl mx-auto">
          Hear from our happy customers who love the new season collection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, role, review, image, rating }) => (
            <div
              key={id}
              className="bg-white rounded-lg p-6 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 rounded-full border-2 border-amber-600 mb-3"
                />
                <h3 className="text-amber-500 text-lg font-semibold">{name}</h3>
                <p className="text-amber-400 text-sm">{role}</p>
              </div>
              <p className="text-amber-300 text-sm mb-4">{review}</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className={`${
                      index < rating
                        ? 'text-amber-600 fill-amber-600'
                        : 'text-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewseasonTestimonials;
