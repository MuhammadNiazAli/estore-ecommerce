import React, { useState, useRef, useEffect } from 'react';

const partners = [
  {
    name: 'GreenTech Innovations',
    logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80',
    url: 'https://www.greentechinnovations.com',
  },
  {
    name: 'EcoSolutions',
    logo: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=150&q=80',
    url: 'https://ecosolutions.com',
  },
  {
    name: 'SolarWave',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80',
    url: 'https://solarwaveenergy.com',
  },
  {
    name: 'CleanEnergy Partners',
    logo: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=150&q=80',
    url: 'https://cleanenergypartners.com',
  },
  {
    name: 'SustainAbility',
    logo: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=150&q=80',
    url: 'https://sustainability.org',
  },
];

const SustainabilityPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const visibleCount = 3; // Number of visible items on desktop
  const totalItems = partners.length;

  // Slide left
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  // Slide right
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  // For swipe gestures on mobile
  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const slider = sliderRef.current;

    if (!slider) return;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      if (startX - endX > 50) nextSlide();
      else if (endX - startX > 50) prevSlide();
    };

    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchmove', onTouchMove);
    slider.addEventListener('touchend', onTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentIndex]);

  // Calculate translateX % for sliding effect on mobile
  const getTranslateX = () => {
    // On desktop (md+), show all items in grid, no translate.
    // On mobile, slide each item fully (100% width).
    return `-${currentIndex * 100}%`;
  };

  return (
    <section
      aria-labelledby="sustainability-partners-title"
      className="bg-white text-black px-4 sm:px-6 lg:px-8 py-16 select-none"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="sustainability-partners-title"
          className="text-3xl sm:text-4xl font-extrabold text-black mb-12 text-center"
        >
          Our Trusted Partners
        </h2>

        {/* Desktop grid - hidden on mobile */}
        <ul
          role="list"
          className="hidden md:flex flex-wrap justify-center items-center gap-8"
        >
          {partners.map(({ name, logo, url }, index) => (
            <li key={index} className="flex-shrink-0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name} website`}
                className="
                  block w-36 h-20 bg-black/10 rounded-xl p-4 shadow-lg
                  transition-colors duration-300
                  hover:bg-black/25
                  focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-900
                  flex items-center justify-center
                "
              >
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="max-h-full max-w-full object-contain mx-auto"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile slider */}
        <div className="relative md:hidden">
          {/* Slider viewport */}
          <div
            ref={sliderRef}
            className="overflow-hidden"
            aria-roledescription="carousel"
          >
            <ul
              role="list"
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${getTranslateX()})` }}
            >
              {partners.map(({ name, logo, url }, index) => (
                <li
                  key={index}
                  className="flex-shrink-0 w-full px-4"
                  aria-label={`Partner: ${name}`}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block w-full h-24 bg-black/10 rounded-xl p-4 shadow-lg
                      transition-colors duration-300
                      hover:bg-black/25
                      focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-900
                      flex items-center justify-center
                    "
                    aria-describedby={`partner-desc-${index}`}
                  >
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      className="max-h-full max-w-full object-contain mx-auto"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </a>
                  <p
                    id={`partner-desc-${index}`}
                    className="mt-2 text-black text-center font-semibold"
                  >
                    {name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous partner"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-80 rounded-full p-2 shadow-lg text-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next partner"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-80 rounded-full p-2 shadow-lg text-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPartners;
