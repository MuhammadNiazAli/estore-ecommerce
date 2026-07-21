import React, { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sophia Turner',
    title: 'Fashion Blogger',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4.9,
    content: `I've never been this impressed by the quality and craftsmanship of fashion accessories. 
The intricate details and premium materials make each piece feel truly special and unique. 
From the stitching to the finishing touches, everything reflects the brand's dedication. 
Delivery was prompt and packaging elegant, making the whole experience delightful.`,
  },
  {
    id: 2,
    name: 'Liam Johnson',
    title: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4.8,
    content: `As someone always on the move, durability is essential, and these products deliver perfectly. 
They combine toughness with sleek design, built to last without sacrificing style. 
Ordering was easy with clear product info, and delivery arrived quickly and safely. 
Overall, a reliable and stylish choice for everyday use.`,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    title: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5.0,
    content: `From browsing the site to delivery, the experience was flawless. 
The user-friendly interface helped me find what I needed effortlessly. 
Products arrived even better than expected, with attention to detail and quality materials. 
Packaging was eco-friendly and thoughtfully designed, adding to the joy of unboxing.`,
  },
  {
    id: 4,
    name: 'Noah Smith',
    title: 'Photographer',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 4.7,
    content: `I love how versatile these accessories are, fitting both casual and formal looks. 
The consistent quality and fine details make each piece stand out. 
I get compliments every time I wear them, and delivery was fast and secure. 
A worthwhile addition to any wardrobe.`,
  },
  {
    id: 5,
    name: 'Olivia Brown',
    title: 'Lifestyle Coach',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    rating: 4.9,
    content: `Exceptional products that enhance daily life with thoughtful design and lasting quality. 
The shopping process was smooth, with clear communication and helpful support. 
Packaging and delivery were prompt and professional. 
I look forward to purchasing more from this brand soon.`,
  },
]

// ✅ Responsive Star Component
const StarRating = ({ rating }) => {
  const fullStars = Math.round(rating)
  return (
    <div className="flex space-x-0.5 sm:space-x-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < fullStars ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1
              1 0 00.95.69h4.162c.969 0 1.371 1.24.588
              1.81l-3.37 2.448a1 1 0 00-.364
              1.118l1.287 3.955c.3.922-.755
              1.688-1.54 1.118l-3.37-2.448a1
              1 0 00-1.175 0l-3.37
              2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.955a1
              1 0 00-.364-1.118L2.03
              9.382c-.783-.57-.38-1.81.588-1.81h4.162a1
              1 0 00.95-.69l1.286-3.955z"
          />
        </svg>
      ))}
    </div>
  )
}

const BestsellersTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000) // 7 seconds per slide

    return () => clearTimeout(timeoutRef.current)
  }, [currentIndex])

  return (
    <section className="max-w-[95%] sm:max-w-[750px] md:max-w-[900px] mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg select-none mt-4 my-[-30px] mb-8">
      <h2 className="text-amber-600 text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10 text-center tracking-wide">
        What Our Customers Say
      </h2>

      <div className="relative h-[400px] sm:h-[420px] md:h-[370px]">
        {testimonials.map((t, i) => (
          <article
            key={t.id}
            className={`absolute top-0 left-0 w-full h-full bg-white rounded-xl p-4 sm:p-6 flex flex-col transition-opacity duration-1000 ease-in-out
              ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
            `}
            aria-hidden={i !== currentIndex}
          >
            {/* Top section: avatar + info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4">
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-600 object-cover shadow-md mb-3 sm:mb-0"
                loading="lazy"
              />
              <div>
                <h3 className="text-amber-500 font-semibold text-lg sm:text-xl leading-tight">
                  {t.name}
                </h3>
                <p className="text-amber-700 text-xs sm:text-sm mb-1">{t.title}</p>
                <StarRating rating={t.rating} />
              </div>
            </div>

            {/* Content */}
            <p
              className="text-amber-200 text-xs sm:text-sm leading-relaxed tracking-wide whitespace-pre-line overflow-y-auto flex-grow pr-2"
              style={{ scrollbarWidth: 'thin' }}
            >
              {t.content}
            </p>
          </article>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? 'bg-amber-600 shadow-lg' : 'bg-amber-900 hover:bg-amber-700'
            }`}
            onClick={() => setCurrentIndex(idx)}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}

export default BestsellersTestimonials
