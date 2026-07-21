import React from 'react';

const lookbookItems = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1680055196833-c2965de0caec?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Bold Street Style',
    description: 'Urban vibes with a mix of edgy streetwear and statement pieces.',
  },
  {
    id: 2,
    image:
      'https://plus.unsplash.com/premium_photo-1733938563565-3720eba96daf?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Elegant Evening Wear',
    description: 'Luxury and sophistication for your next evening out.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1633406389921-9b03b77d72bc?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Casual Comfort',
    description: 'Relaxed silhouettes perfect for everyday style.',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1636347141929-13cb2a31e59a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Chic Minimalism',
    description: 'Clean cuts and soft tones for effortless elegance.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1746395592054-dc3aed101f72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Modern Tailoring',
    description: 'Sharp lines and tailored fits for the modern professional.',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1707569590650-2f963183dc0c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Luxurious Textures',
    description: 'Rich fabrics and tactile finishes that exude opulence.',
  },
];

const NewseasonLookbook = () => {
  return (
    <section className="bg-white py-16 px-6 my-[-30px]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
          New Season Lookbook
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lookbookItems.map(({ id, image, caption, description }) => (
            <div
              key={id}
              className="relative overflow-hidden rounded-lg cursor-pointer group bg-white flex flex-col"
            >
              {/* Image */}
              <img
                src={image}
                alt={caption}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Mobile Details */}
              <div className="block md:hidden bg-white px-4 py-4 text-center">
                <p className="text-amber-500 text-lg font-semibold">{caption}</p>
              </div>

              {/* Desktop Hover Overlay with More Details */}
              <div className="hidden md:flex absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-center items-center px-6 text-center">
                <p className="text-amber-500 text-2xl font-bold mb-3">{caption}</p>
                <p className="text-amber-400 text-sm mb-5">{description}</p>
                <button
                  type="button"
                  className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-semibold py-2 px-5 rounded-md transition-all duration-300 shadow-md"
                >
                  View Collection
                </button>
              </div>

              {/* Gold border on hover (Desktop Only) */}
              <div className="hidden md:block absolute inset-0 border-4 border-transparent group-hover:border-amber-600 rounded-lg pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewseasonLookbook;
