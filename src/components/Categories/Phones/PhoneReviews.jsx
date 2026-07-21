'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Star = ({ filled }) => (
  <svg
    aria-hidden="true"
    className={`w-5 h-5 transition-colors ${filled ? 'text-black' : 'text-gray-700'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.123 6.53a1 1 0 00.95.69h6.862c.969 0 1.371 1.24.588 1.81l-5.557 4.04a1 1 0 00-.364 1.118l2.122 6.53c.3.922-.755 1.688-1.54 1.118L12 17.77l-5.558 4.04c-.784.57-1.838-.196-1.54-1.118l2.122-6.53a1 1 0 00-.364-1.118l-5.557-4.04c-.783-.57-.38-1.81.588-1.81h6.862a1 1 0 00.95-.69l2.123-6.53z"
    />
  </svg>
);

const reviews = [
  {
    id: 1,
    name: 'Alicia M.',
    review: 'The phone is good but took longer to ship than expected.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: 2,
    name: 'Brandon F.',
    review: 'Solid build, beautiful screen. Battery could last longer though.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 3,
    name: 'Clara V.',
    review: 'Honestly, best phone I’ve owned in years. Super fast!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
  },
  {
    id: 4,
    name: 'Derek P.',
    review: 'UI is clean and fast. Only issue is with fingerprint accuracy.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    id: 5,
    name: 'Emily G.',
    review: 'Camera quality is amazing, especially in low light.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    id: 6,
    name: 'Farhan S.',
    review: 'Phone is decent, but I miss the headphone jack.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
  },
  {
    id: 7,
    name: 'Georgia H.',
    review: 'Feels premium. Face unlock is lightning fast!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
  {
    id: 8,
    name: 'Hassan M.',
    review: 'The packaging was damaged, but the phone works fine.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
  },
  {
    id: 9,
    name: 'Isla R.',
    review: 'Absolutely love the size and camera features.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    id: 10,
    name: 'Jake T.',
    review: 'Battery drains faster than expected during gaming.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    id: 11,
    name: 'Katrina D.',
    review: 'Stylish design, vibrant display. Charging is super quick!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    id: 12,
    name: 'Liam Z.',
    review: 'Great device overall but no SD card slot.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 13,
    name: 'Megan B.',
    review: 'Perfect for photography. Very pleased.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    id: 14,
    name: 'Nate W.',
    review: 'Good mid-range device. Does the job well.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
  {
    id: 15,
    name: 'Olive K.',
    review: 'Little bulky in hand but great specs and smooth UI.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 16,
    name: 'Peter X.',
    review: 'Works fine, but I got a scratch on the back out of the box.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/26.jpg',
  },
  {
    id: 17,
    name: 'Quinn L.',
    review: 'Audio clarity is excellent. Love the stereo output.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/27.jpg',
  },
  {
    id: 18,
    name: 'Rafael A.',
    review: 'Software experience is smooth. I like the animations.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
  {
    id: 19,
    name: 'Sophie M.',
    review: 'Got it during a sale. Totally worth the price.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
  },
  {
    id: 20,
    name: 'Tyler J.',
    review: 'Expected better camera for the price. It’s okay though.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    id: 21,
    name: 'Umaira C.',
    review: 'Battery life is outstanding! Easily lasts 2 days.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
  },
  {
    id: 22,
    name: 'Victor N.',
    review: 'Had to update software out of the box. After that, smooth!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 23,
    name: 'Wendy S.',
    review: 'Premium feel, excellent fingerprint sensor speed.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    id: 24,
    name: 'Xavier G.',
    review: 'Love the minimal UI. No ads or bloat.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    id: 25,
    name: 'Yasmin O.',
    review: 'Takes beautiful portrait photos. Background blur is natural.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
  },
  {
    id: 26,
    name: 'Zach M.',
    review: 'Had some network issues in first week, but now it’s stable.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    id: 27,
    name: 'Abby F.',
    review: 'Phone is responsive and lightweight. Happy with my purchase.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/37.jpg',
  },
  {
    id: 28,
    name: 'Bilal T.',
    review: 'The back design is fingerprint-prone. Keep a case!',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/38.jpg',
  },
  {
    id: 29,
    name: 'Carla U.',
    review: 'Easy setup. Great sound output and display clarity.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/39.jpg',
  },
  {
    id: 30,
    name: 'Danyal I.',
    review: 'Performance is great but heats a bit under load.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    id: 31,
    name: 'Elise V.',
    review: 'Color options are lovely. Got compliments already!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/41.jpg',
  },
  {
    id: 32,
    name: 'Faris J.',
    review: 'Delivery was late but device works perfectly.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/42.jpg',
  },
  {
    id: 33,
    name: 'Gina P.',
    review: 'Love the widget customizations. Super useful.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  {
    id: 34,
    name: 'Hamza B.',
    review: 'Would’ve liked wireless charging at this price.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    id: 35,
    name: 'Ivy Q.',
    review: 'Very lightweight and slim. Easy to carry in small purse.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 36,
    name: 'Junaid L.',
    review: 'Facial recognition struggles in low light.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 37,
    name: 'Kimberly R.',
    review: 'Watching Netflix on this screen is amazing!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    id: 38,
    name: 'Leo D.',
    review: 'Great value for money. Would buy again.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
  },
  {
    id: 39,
    name: 'Mira E.',
    review: 'Charging cable wasn’t working properly. Replaced myself.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/women/49.jpg',
  },
  {
    id: 40,
    name: 'Nolan C.',
    review: 'Phone is super fast and responsive. Loving it.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    id: 41,
    name: 'Opal Y.',
    review: 'Best purchase this year. Smooth from unboxing to usage.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    id: 42,
    name: 'Parker W.',
    review: 'Decent phone. Wouldn’t call it flagship killer though.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 43,
    name: 'Rachel A.',
    review: 'Photo editing apps run like a dream on this device.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    id: 44,
    name: 'Saad U.',
    review: 'No complaints so far. Phone handles multitasking great.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    id: 45,
    name: 'Tania K.',
    review: 'Had to restart twice during setup. Now runs fine.',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    id: 46,
    name: 'Usman F.',
    review: 'Gaming performance is solid. No overheating.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    id: 47,
    name: 'Violet M.',
    review: 'Glass back is slippery. Definitely need a case.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
  },
  {
    id: 48,
    name: 'Waleed R.',
    review: 'Overall, a very balanced device. Worth the price.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
  {
    id: 49,
    name: 'Xena T.',
    review: 'Volume button feels a bit soft, but rest is great.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/59.jpg',
  },
  {
    id: 50,
    name: 'Yasir H.',
    review: 'I’ve owned many phones. This one hits the sweet spot!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
];

const PhoneReviews = () => {
  const swiperRef = useRef(null);

  // On click, go next normally, prev if shiftKey pressed
  const handleClick = (e) => {
    e.preventDefault();
    if (!swiperRef.current) return;
    if (e.shiftKey) {
      swiperRef.current.slidePrev();
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 text-gray-900 bg-white rounded-3xl shadow-lg"
      aria-label="Customer Reviews"
    >
      <h2 className="text-center text-[20px] sm:text-5xl font-extrabold tracking-tight text-black mb-12 select-none">
        Trusted by Real Customers
      </h2>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="cursor-pointer select-none"
        onClick={handleClick}
        aria-roledescription="carousel"
        aria-live="polite"
        aria-label="Customer reviews carousel"
      >
        {reviews.map(({ id, name, review, rating, image }) => (
          <SwiperSlide key={id} aria-roledescription="slide" aria-label={`Review by ${name}`}>
            <article
              className="bg-white border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between
                transition-transform hover:scale-[1.015] hover:shadow-2xl duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-black"
              tabIndex={0}
              role="group"
              aria-labelledby={`review-title-${id}`}
              aria-describedby={`review-text-${id}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={image}
                  alt={`Photo of ${name}`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-black flex-shrink-0"
                  loading="lazy"
                  draggable={false}
                />
                <h3
                  id={`review-title-${id}`}
                  className="text-base font-semibold text-gray-800 truncate"
                  title={name}
                >
                  {name}
                </h3>
              </div>

              <p
                id={`review-text-${id}`}
                className="text-gray-600 text-sm leading-relaxed italic flex-grow"
              >
                “{review}”
              </p>

              <div
                className="flex items-center mt-6"
                role="img"
                aria-label={`Rating: ${rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < rating} />
                ))}
                <span className="ml-2 text-gray-500 text-sm select-none">
                  {rating.toFixed(1)}
                </span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="mt-6 text-center text-sm text-gray-600 select-none">
        Click a review to advance; shift+click to go back.
      </p>
    </section>
  );
};

export default PhoneReviews;
