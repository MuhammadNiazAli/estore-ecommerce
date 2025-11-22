'use client';
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    title: "Venture Capitalist",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Investing here has been one of my best decisions. The transparency and growth speak for themselves.",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Angel Investor",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The leadership team’s vision and execution are truly outstanding. I’m proud to be a stakeholder.",
  },
  {
    id: 3,
    name: "Amina Patel",
    title: "Private Equity Partner",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    quote:
      "Consistent returns and ethical governance make this company a reliable investment for the future.",
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Institutional Investor",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Their strategic vision and execution have consistently delivered exceptional returns, making this a top choice for my portfolio.",
  },
];


const InvestorsTestimonials = () => {
  return (
    <section
      aria-label="Investor Testimonials"
      className="bg-gray-900 text-yellow-400 py-12 px-4 flex justify-center mb-[-150px]"
    >
      <div className="max-w-[1000px] w-full">
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-400 text-center select-none">
          What Our Investors Say
        </h2>
        <div
          role="list"
          className="flex flex-wrap justify-center gap-6"
        >
          {testimonials.map(({ id, name, title, photo, quote }) => (
            <article
              key={id}
              role="listitem"
              tabIndex={0}
              className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-yellow-400/50 focus:shadow-yellow-400/70
                transition-shadow duration-300
                flex flex-col items-center text-center
                max-w-xs
                w-full sm:w-[300px]
                outline-none
                scale-100 hover:scale-[1.03] focus:scale-[1.03]"
            >
              <img
                src={photo}
                alt={`Photo of investor ${name}`}
                className="w-20 h-20 rounded-full mb-4 object-cover shadow-lg"
                loading="lazy"
                decoding="async"
                width={80}
                height={80}
              />
              <p className="text-yellow-300 italic mb-4 leading-relaxed font-medium select-text">
                “{quote}”
              </p>
              <h3 className="text-yellow-400 font-semibold text-lg truncate w-full" title={name}>
                {name}
              </h3>
              <p className="text-yellow-300 text-sm truncate w-full" title={title}>
                {title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsTestimonials;
