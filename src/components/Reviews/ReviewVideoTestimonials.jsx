'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  {
    id: 1,
    src: 'https://cuberto.com/assets/home/hero/header.mp4',
    img: 'https://cuberto.com/assets/projects/riyadh/cover.jpg',
    title: 'Cuberto Hero Video',
    rating: [5, 4, 5, 5, 4],
  },
  {
    id: 2,
    src: 'https://cuberto.com/assets/showreel/short.mp4',
    img: 'https://cuberto.com/assets/projects/daoway/cover.jpg',
    title: 'Cuberto Showreel',
    rating: [4, 4, 4, 5, 3],
  },
  {
    id: 3,
    src: 'https://cuberto.com/assets/projects/daoway/cover.mp4',
    img: 'https://cuberto.com/assets/projects/daoway/cover.jpg',
    title: 'Daoway Project Video',
    rating: [5, 5, 5, 5, 5],
  },
  {
    id: 4,
    src: 'https://cuberto.com/assets/projects/riyadh/cover.mp4',
    img: 'https://cuberto.com/assets/projects/riyadh/cover.jpg',
    title: 'Riyadh Project Video',
    rating: [3, 4, 4, 4, 3],
  },
  {
    id: 5,
    src: 'https://cuberto.com/assets/projects/flipaclip/cover.mp4?2',
    img: 'https://cuberto.com/assets/projects/flipaclip/cover.jpg',
    title: 'Flipaclip Project Video',
    rating: [5, 4, 3, 4, 5],
  },
  {
    id: 6,
    src: 'https://cuberto.com/assets/projects/potion/cover.mp4',
    img: 'https://cuberto.com/assets/projects/potion/cover.jpg',
    title: 'Potion Project Video',
    rating: [4, 4, 5, 5, 4],
  },
];

// Variants for the stars container to stagger children's animation
const starsContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
  exit: {},
};

// Variants for each star bounce animation
const starVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.15, 1], // Slight bounce scale
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      repeat: 1,
      repeatType: 'reverse',
    },
  },
  exit: { scale: 1 },
};

const Star = ({ filled, isHovered }) => (
  <motion.svg
    aria-hidden="true"
    className={`w-4 h-4 mr-0.5 ${
      filled ? 'fill-amber-400 stroke-amber-400' : 'fill-transparent stroke-amber-400'
    }`}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={filled ? 'Filled star' : 'Empty star'}
    variants={starVariants}
    initial="initial"
    animate={isHovered && filled ? 'animate' : 'initial'}
    exit="exit"
    style={{ originX: 0.5, originY: 0.5 }}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </motion.svg>
);

const VideoCard = ({ video, isHovered, onHover, onLeave }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  React.useEffect(() => {
    if (isHovered) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isHovered]);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg bg-black cursor-pointer
                 transition-transform duration-400 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-amber-400"
      aria-label={`Video testimonial: ${video.title}`}
      role="group"
      tabIndex={0}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onKeyDown={handleKeyDown}
    >
      <video
        ref={videoRef}
        src={video.src}
        className={`w-full aspect-[16/9] object-cover transition-opacity duration-400 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        preload="metadata"
        playsInline
        aria-hidden={!isHovered}
        tabIndex={-1}
      />

      <img
        src={video.img}
        alt={`Poster image for ${video.title}`}
        className={`absolute top-0 left-0 w-full h-full object-cover
          transition-opacity duration-400 ease-in-out
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden={isHovered}
      />

      {/* Stars container with stagger animation */}
      <motion.div
        className="absolute top-2 right-2 flex items-center bg-black/80 bg-opacity-60 rounded-full px-2 py-1
                   shadow-md select-none pointer-events-none"
        variants={starsContainerVariants}
        initial="initial"
        animate={isHovered ? 'animate' : 'initial'}
        exit="exit"
      >
        {video.rating.map((starValue, i) => (
          <Star key={i} filled={starValue > i} isHovered={isHovered} />
        ))}
      </motion.div>

      {/* Animated "View Video" link at bottom center on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={video.src}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-500/50 hover:bg-amber-500/60
                       text-black font-semibold px-4 py-2 rounded-full shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-amber-400
                       select-none z-20"
            aria-label={`View full video for ${video.title}`}
          >
            View Video
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

const ReviewVideoTestimonials = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full bg-gray-900 my-[-45px] py-16 px-4">
      <div className="max-w-[1100px] mx-auto text-white">
        <h3 className="text-3xl font-bold mb-12 text-center select-none">Video Testimonials</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isHovered={hoveredId === video.id}
              onHover={() => setHoveredId(video.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewVideoTestimonials;
