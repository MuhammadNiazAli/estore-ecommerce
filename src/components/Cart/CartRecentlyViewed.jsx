'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const sampleProducts = [
  {
    id: 1,
    title: 'Wireless Noise-Cancelling Headphones',
    description: 'Experience immersive sound with active noise cancellation and 30-hour battery life.',
    category: 'Audio',
    price: 120.0,
    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Smart Fitness Watch Pro',
    description: 'Track your health, heart rate, and steps with a vibrant AMOLED display.',
    category: 'Wearables',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1636877648291-dc13488232fd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Portable Bluetooth Speaker',
    description: 'Powerful sound in a compact body. Perfect for travel, beach, or backyard parties.',
    category: 'Audio',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1667543239992-85092e7f2f72?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Slim Fitness Tracker Band',
    description: 'Lightweight and comfortable, ideal for daily step and sleep tracking.',
    category: 'Wearables',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Next-Gen VR Headset',
    description: 'Dive into virtual reality with stunning visuals and intuitive controls.',
    category: 'Gaming',
    price: 299.99,
    image: 'https://plus.unsplash.com/premium_photo-1734543306215-549dee79e636?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: '4K Ultra HD Smart TV',
    description: 'Cinematic visuals with built-in streaming and voice control.',
    category: 'Home Entertainment',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Ergonomic Wireless Mouse',
    description: 'Precision tracking with a comfortable grip, designed for long hours.',
    category: 'Accessories',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1625750188088-f6cd6756349c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'Mechanical RGB Gaming Keyboard',
    description: 'Tactile keys and customizable lighting for a premium gaming experience.',
    category: 'Gaming',
    price: 129.99,
    image: 'https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: '1080p Webcam with Mic',
    description: 'Crystal-clear video and audio for professional meetings and streaming.',
    category: 'Office',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1666726552129-122d69dbb7cf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Foldable Drone with 4K Camera',
    description: 'Capture breathtaking aerial footage with GPS-assisted flight.',
    category: 'Drones',
    price: 349.99,
    image: 'https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'Wireless Charging Pad',
    description: 'Fast charge your devices with this sleek and minimalistic wireless pad.',
    category: 'Accessories',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1633381638729-27f730955c23?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    title: 'Compact Mirrorless Camera',
    description: 'Stunning image quality in a lightweight body, perfect for creators.',
    category: 'Photography',
    price: 899.99,
    image: 'https://plus.unsplash.com/premium_photo-1667538961167-2f0ab7a5046e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    title: 'Smart Home Security Camera',
    description: 'Monitor your home with night vision, motion detection, and app alerts.',
    category: 'Smart Home',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?q=80&w=644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    title: 'Adjustable Laptop Stand',
    description: 'Ergonomic design to reduce neck strain and improve airflow.',
    category: 'Office',
    price: 49.99,
    image: 'https://media.istockphoto.com/id/1490306170/photo/laptop-computer-sits-on-a-portable-holder-riser-or-stand-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=L6uXiRpHhrf66z0IvjtwKrV8mtAJNTcfCmAQtfzeqBs=',
  },
  {
    id: 15,
    title: 'True Wireless Earbuds',
    description: 'Sleek, compact, and water-resistant with a powerful bass response.',
    category: 'Audio',
    price: 89.99,
    image: 'https://media.istockphoto.com/id/1205742649/photo/wireless-earbuds-or-earphones-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rv-P2dxY8Ivlgs4ToijNXf5rVAcgoqMEuXdE55MuWqg=',
  },
  {
    id: 16,
    title: 'Electric Standing Desk',
    description: 'Switch between sitting and standing with smooth motorized adjustment.',
    category: 'Office',
    price: 499.99,
    image: 'https://plus.unsplash.com/premium_photo-1715228482075-229982700566?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    title: 'Smart Indoor Plant Sensor',
    description: 'Monitor soil moisture and light levels via a mobile app.',
    category: 'Smart Home',
    price: 34.99,
    image: 'https://media.istockphoto.com/id/1305941285/photo/flower-plant-care-concept-soil-water-sunlight-sensor-in-the-flowers-pot-womans-hand-holds-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=_ceCBIgXSf3Lq5m0n5Ta4L10qwiKGqG_IRMC6tYkXvI=',
  },
  {
    id: 18,
    title: 'High-Speed USB-C Hub',
    description: 'Expand your laptop with HDMI, USB-A, SD card, and PD charging.',
    category: 'Accessories',
    price: 59.99,
    image: 'https://media.istockphoto.com/id/1438362018/photo/antennas-of-c-wifi-hotspot-for-router-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYU6KirUHzV61iXd9Xr5kihnlgdKt0mSm0xMddQnxpQ=',
  },
  {
    id: 19,
    title: 'Premium DSLR Camera Backpack',
    description: 'Water-resistant and padded with multiple compartments for gear.',
    category: 'Photography',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1610413356149-7dc29cda501f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    title: 'Gaming Chair with Lumbar Support',
    description: 'Ergonomic, fully reclinable, and designed for long gaming sessions.',
    category: 'Gaming',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1670946839270-cc4febd43b09?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 21,
    title: 'Smart Light LED Strip Kit',
    description: 'Color-changing LED lights controllable via voice or app.',
    category: 'Smart Home',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1483899701396-d59f66042035?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 22,
    title: 'Noise-Isolating Gaming Headset',
    description: 'Immersive surround sound with detachable mic and cushioned earcups.',
    category: 'Gaming',
    price: 109.99,
    image: 'https://media.istockphoto.com/id/121144731/photo/black-headphones.webp?a=1&b=1&s=612x612&w=0&k=20&c=XxRtUtunvE0nXN97wPzxeGrYzxhYjI-XTRx42IqC5is=',
  },
];


const CartRecentlyViewed = () => {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!carouselRef.current) return;
      const width = carouselRef.current.offsetWidth;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      const gap = 24 * (visibleCards - 1);
      const cardW = (width - gap) / visibleCards;
      setCardWidth(cardW);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: dir === 'left' ? -(cardWidth + 24) : cardWidth + 24,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full bg-gray-900 text-white py-12 px-4 relative mb-[-150px]">
      <div className="max-w-[1000px] mx-auto relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
          Recently Viewed Products
        </h2>

        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
          tabIndex={0}
          aria-label="Recently viewed products carousel"
        >
          {sampleProducts.map(({ id, title, description, category, price, image }) => (
            <article
              key={id}
              className="group bg-gray-800 rounded-xl shadow-lg flex-shrink-0 transition duration-300 "
              style={{ width: cardWidth ? `${cardWidth}px` : '260px' }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-[210px]">
                <div>
                  <h3
                    className="text-white text-base font-semibold truncate"
                    title={title}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {description}
                  </p>
                  <span className="mt-2 inline-block text-xs text-gray-500 font-medium">
                    Category: {category}
                  </span>
                </div>
                <p className="text-yellow-400 font-bold text-lg mt-4">${price.toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Left arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className={`absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-6 z-40
              ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}
              bg-gray-900/60 hover:bg-yellow-400 hover:text-black
              border border-gray-700 text-white backdrop-blur-md shadow-md
              rounded-full flex items-center justify-center transition`}
            type="button"
          >
            <FiChevronLeft size={isMobile ? 18 : 22} />
          </button>
        )}

        {/* Right arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className={`absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 z-40
              ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}
              bg-gray-900/60 hover:bg-yellow-400 hover:text-black
              border border-gray-700 text-white backdrop-blur-md shadow-md
              rounded-full flex items-center justify-center transition`}
            type="button"
          >
            <FiChevronRight size={isMobile ? 18 : 22} />
          </button>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CartRecentlyViewed;
