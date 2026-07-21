import React from 'react';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'CEO at InnovateX',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote:
      "Niaz Ali is a phenomenal developer! His attention to detail and ability to understand complex requirements helped us launch a flawless e-commerce platform ahead of schedule.",
  },
  {
    name: 'Michael Thompson',
    role: 'Product Manager at Bright Solutions',
    photo: 'https://randomuser.me/api/portraits/men/34.jpg',
    quote:
      "Working with Niaz was a pleasure. His coding expertise and dedication brought our vision to life with a smooth, user-friendly interface and robust backend integration.",
  },
  {
    name: 'Sophia Lee',
    role: 'Founder of Creative Minds',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      "I highly recommend Niaz Ali for any full-stack development needs. His professionalism, problem-solving skills, and communication are outstanding.",
  },
];

const AboutTestimonials = () => {
  return (
    <section
      className="bg-white text-gray-800 py-20 px-6 flex justify-center"
      aria-label="Client testimonials about Niaz Ali"
    >
      <div className="max-w-[1000px] w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-14">
          What Clients Say About Niaz Ali
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map(({ name, role, photo, quote }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl border border-gray-200 shadow-xl transition-shadow duration-300 flex flex-col items-center text-center p-5"
              style={{
                aspectRatio: '1 / 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={photo}
                alt={`${name} photo`}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-black mx-auto"
                loading="lazy"
                decoding="async"
              />

              <blockquote className="text-gray-700 italic text-sm sm:text-base leading-snug mt-5 mb-6 flex-grow overflow-hidden">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-black text-xs sm:text-sm mt-1">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
