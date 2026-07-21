import React, { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Press Event 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Press Event 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "Press Event 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=800&q=80",
    alt: "Press Event 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    alt: "Press Event 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    alt: "Press Event 6",
  },
];

const PressGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Optional: Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedImage]);

  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 py-16">
      <div className="max-w-[1280px] w-full text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
          Press Gallery
        </h2>
        <p className="mt-4 text-black max-w-2xl mx-auto text-base sm:text-lg leading-relaxed drop-shadow-md">
          Explore photos from our latest press events and media appearances.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {images.map(({ id, src, alt }) => (
            <button
              key={id}
              onClick={() => setSelectedImage({ src, alt })}
              className="relative group overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-black"
              aria-label={`View larger image of ${alt}`}
            >
              <div className="w-full aspect-[4/3]">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-gray-900 text-sm sm:text-base font-semibold">{alt}</p>
                <span className="mt-1 text-black text-xs sm:text-sm">View Details</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          >
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] max-w-[95vw] sm:max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-white/60 text-gray-900 px-4 py-2 rounded-md text-sm shadow-md">
                {selectedImage.alt}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-black focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressGallery;
