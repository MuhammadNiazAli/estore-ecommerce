import React from 'react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'Environmental Scientist',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      'This company’s commitment to sustainability has truly transformed the way we approach environmental impact. Their innovative solutions make a real difference.',
  },
  {
    name: 'Michael Lee',
    role: 'Community Organizer',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote:
      'Partnering with them has empowered our local community to adopt greener practices and become more environmentally conscious.',
  },
  {
    name: 'Sophia Martinez',
    role: 'Renewable Energy Advocate',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'Their dedication to renewable energy projects is inspiring and essential for a sustainable future.',
  },
];

const SustainabilityTestimonials = () => {
  return (
    <section
      aria-labelledby="sustainability-testimonials-title"
      className="bg-gray-900 text-yellow-400 px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          id="sustainability-testimonials-title"
          className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-16 select-none"
        >
          What People Say About Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {testimonials.map(({ name, role, photo, quote }, i) => (
            <blockquote
              key={i}
              tabIndex={0}
              aria-label={`Testimonial by ${name}`}
              className="
                bg-yellow-900/10 rounded-xl p-6 shadow-lg
                flex flex-col items-center
                transition-transform duration-300 hover:scale-[1.03] focus-within:scale-[1.03]
                outline-none focus-visible:ring-4 focus-visible:ring-yellow-500 focus-visible:ring-opacity-75
              "
            >
              <img
                src={photo}
                alt={`Photo of ${name}`}
                className="w-20 h-20 rounded-full mb-5 object-cover shadow-md select-none"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <p className="text-yellow-200 italic mb-6 text-sm sm:text-base leading-relaxed max-w-[300px]">
                &ldquo;{quote}&rdquo;
              </p>
              <footer className="text-yellow-300 font-semibold select-text">
                {name},{' '}
                <span className="text-yellow-400 text-sm font-normal select-text">{role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityTestimonials;
