import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Editor-in-Chief",
    company: "Tech Today",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "YourCompany's press materials are always professional and easy to access. Their responsiveness is unmatched!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Senior Journalist",
    company: "Global News Daily",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "From timely updates to detailed resources, YourCompany makes covering stories smooth and hassle-free.",
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Media Relations Manager",
    company: "Innovate Media Corp",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "I’ve worked with countless PR teams, but YourCompany stands out for clarity, speed, and professionalism.",
  },
];

const PressTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteRef = useRef(null);

  const animateSlide = () => {
    gsap.fromTo(
      quoteRef.current,
      { autoAlpha: 0, x: 50 },
      { autoAlpha: 1, x: 0, duration: 0.6, ease: "power3.out" }
    );
  };

  useEffect(() => {
    animateSlide();
  }, [currentIndex]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { name, role, company, quote, photo } = testimonials[currentIndex];

  return (
    <section className="w-full bg-white px-4 sm:px-6 py-16 flex justify-center mb-[-50px]">
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-amber-600 text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-lg">
          Testimonials
        </h2>
        <p className="mt-3 sm:mt-4 text-amber-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-10">
          Hear what respected media professionals say about working with us.
        </p>

        <div className="relative bg-white rounded-xl px-6 py-10 sm:px-10 sm:py-12 shadow-xl overflow-hidden mx-auto max-w-2xl">
          {/* Animated Quote */}
          <blockquote
            ref={quoteRef}
            className="text-amber-500 italic text-base sm:text-lg md:text-xl leading-relaxed min-h-[100px] transition-opacity duration-300"
          >
            “{quote}”
          </blockquote>

          {/* Author Info */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <img
              src={photo}
              alt={name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-600 shadow-md"
            />
            <div className="text-center sm:text-left">
              <p className="text-amber-600 font-semibold text-base sm:text-lg">
                {name}
              </p>
              <p className="text-amber-500 text-sm sm:text-base">
                {role} – {company}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="bg-amber-600 hover:bg-amber-500 text-gray-900 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow-md"
            >
              &#8592;
            </button>
          </div>
          <div className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="bg-amber-600 hover:bg-amber-500 text-gray-900 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow-md"
            >
              &#8594;
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-6 flex justify-center gap-2 sm:gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-amber-600 scale-110" : "bg-amber-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressTestimonials;
