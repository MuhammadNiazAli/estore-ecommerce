'use client';

import React, { useRef, useEffect, useState } from "react";

const partners = [
  {
    id: 1,
    name: "Adobe",
    logo:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=150&q=80",
    href: "https://www.adobe.com",
  },
  {
    id: 2,
    name: "Spotify",
    logo:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80",
    href: "https://www.spotify.com",
  },
  {
    id: 3,
    name: "Netflix",
    logo:
      "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=150&q=80",
    href: "https://www.netflix.com",
  },
  {
    id: 4,
    name: "Slack",
    logo:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=150&q=80",
    href: "https://www.slack.com",
  },
  {
    id: 5,
    name: "Dropbox",
    logo:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80",
    href: "https://www.dropbox.com",
  },
  {
    id: 6,
    name: "Airbnb",
    logo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80",
    href: "https://www.airbnb.com",
  },
  {
    id: 7,
    name: "Amazon",
    logo:
      "https://images.unsplash.com/photo-1513708928675-9e422a865e0c?auto=format&fit=crop&w=150&q=80",
    href: "https://www.amazon.com",
  },
  {
    id: 8,
    name: "Apple",
    logo:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=150&q=80",
    href: "https://www.apple.com",
  },
  {
    id: 9,
    name: "Google",
    logo:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=150&q=80",
    href: "https://www.google.com",
  },
  {
    id: 10,
    name: "Microsoft",
    logo:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80",
    href: "https://www.microsoft.com",
  },
  {
    id: 11,
    name: "Facebook",
    logo:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=150&q=80",
    href: "https://www.facebook.com",
  },
  {
    id: 12,
    name: "Twitter",
    logo:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=150&q=80",
    href: "https://www.twitter.com",
  },
  {
    id: 13,
    name: "LinkedIn",
    logo:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=150&q=80",
    href: "https://www.linkedin.com",
  },
  {
    id: 14,
    name: "Tesla",
    logo:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=150&q=80",
    href: "https://www.tesla.com",
  },
  {
    id: 15,
    name: "Samsung",
    logo:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=150&q=80",
    href: "https://www.samsung.com",
  },
  {
    id: 16,
    name: "PayPal",
    logo:
      "https://images.unsplash.com/photo-1515165562835-c68a9a4b8a3a?auto=format&fit=crop&w=150&q=80",
    href: "https://www.paypal.com",
  },
  {
    id: 17,
    name: "Intel",
    logo:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80",
    href: "https://www.intel.com",
  },
  {
    id: 18,
    name: "IBM",
    logo:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80",
    href: "https://www.ibm.com",
  },
  {
    id: 19,
    name: "Uber",
    logo:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=150&q=80",
    href: "https://www.uber.com",
  },
  {
    id: 20,
    name: "Airbnb",
    logo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80",
    href: "https://www.airbnb.com",
  },
  {
    id: 21,
    name: "Salesforce",
    logo:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80",
    href: "https://www.salesforce.com",
  },
  {
    id: 22,
    name: "Shopify",
    logo:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=150&q=80",
    href: "https://www.shopify.com",
  },
  {
    id: 23,
    name: "Zoom",
    logo:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80",
    href: "https://www.zoom.us",
  },
  {
    id: 24,
    name: "Dropbox",
    logo:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80",
    href: "https://www.dropbox.com",
  },
];


const AffiliatesPartners = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate width of each card dynamically on mount and resize (only desktop/tablet)
  useEffect(() => {
    const updateCardWidth = () => {
      if (!scrollRef.current) return;
      const firstCard = scrollRef.current.querySelector("a");
      if (firstCard) {
        const style = window.getComputedStyle(firstCard);
        const width = firstCard.offsetWidth;
        const marginRight = parseFloat(style.marginRight) || 0;
        setCardWidth(width + marginRight);
      }
    };
    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Check scroll position and toggle arrows (only desktop/tablet)
  const checkForScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    scroller.addEventListener("scroll", checkForScrollPosition);
    checkForScrollPosition();

    return () => {
      scroller.removeEventListener("scroll", checkForScrollPosition);
    };
  }, []);

  // Scroll handler scrolls exactly 4 cards width (only desktop/tablet)
  const scroll = (direction) => {
    if (!scrollRef.current || cardWidth === 0) return;

    const scrollAmount = cardWidth * 4;
    const { scrollLeft } = scrollRef.current;

    let newScrollLeft =
      direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

    newScrollLeft = Math.max(
      0,
      Math.min(newScrollLeft, scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
    );

    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Affiliate Program Partners"
      className="bg-white text-black py-12 px-4"
    >
      <div className="max-w-[800px] mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide text-black">
          Our Trusted Partners
        </h2>

        {/* Left Arrow - hidden on small/mobile */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll partners left"
          className={`hidden my-16 sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black text-gray-900 rounded-full p-2 shadow-lg hover:bg-black transition-colors duration-300 z-30 focus:outline-none focus:ring-4 focus:ring-black
            ${!canScrollLeft ? "opacity-40 cursor-not-allowed" : ""}
          `}
          style={{ transform: "translate(-70%, -50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow - hidden on small/mobile */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll partners right"
          className={`hidden my-16 sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black text-gray-900 rounded-full p-2 shadow-lg hover:bg-black transition-colors duration-300 z-30 focus:outline-none focus:ring-4 focus:ring-black
            ${!canScrollRight ? "opacity-40 cursor-not-allowed" : ""}
          `}
          style={{ transform: "translate(70%, -50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Scrollable list of partner logos"
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
          onKeyDown={(e) => {
            if (!scrollRef.current) return;
            if (e.key === "ArrowRight") {
              e.preventDefault();
              scroll("right");
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              scroll("left");
            }
          }}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {partners.map(({ id, name, logo, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-shrink-0 
                rounded-md bg-black bg-opacity-10 flex items-center justify-center p-2 shadow-md hover:shadow-lg transition-shadow duration-300 snap-center focus:outline-none focus:ring-2 focus:ring-black

                ${/* Desktop/tablet: show 4 cards width (as before) */ ""}
                w-[calc((1000px-18rem)/4)] 
                h-[80px]

                ${/* Mobile: show only 1 card width */ ""}
                sm:w-[calc((1000px-18rem)/4)]
                w-[80vw]
                max-w-[300px]
              `}
              aria-label={`Visit partner ${name}`}
              tabIndex={0}
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                draggable={false}
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Hide scrollbar for Webkit */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AffiliatesPartners;
