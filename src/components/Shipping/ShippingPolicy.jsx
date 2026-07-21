'use client';

import React, { useState, useRef, useEffect } from 'react';

const policies = [
  {
    title: 'Order Processing Time',
    content: [
      'We carefully review and process all orders within 1-2 business days.',
      'Orders placed on weekends or holidays will be handled the next business day.',
      'During busy times like holidays or sales, processing might take up to 3 business days.',
      'Once your order is processed, you’ll receive a confirmation email with shipping details.',
    ],
  },
  {
    title: 'Shipping Methods & Delivery Times',
    content: [
      'Choose from shipping options that fit your needs:',
      '- Standard Shipping: Reliable delivery within 5-10 business days.',
      '- Express Shipping: Faster delivery in 2-4 business days.',
      '- Overnight Shipping: Next-business-day delivery in select areas.',
      'Delivery times depend on your location and chosen method.',
      'Please keep in mind that weather or customs can sometimes cause delays.',
    ],
  },
  {
    title: 'Shipping Costs',
    content: [
      'Shipping fees are calculated at checkout based on your order’s size, weight, and destination.',
      'We work hard to keep shipping affordable and sometimes offer free shipping promotions.',
      'Enjoy free standard shipping on orders over $75 within the continental U.S.',
      'International shipping costs vary by country and are shown at checkout.',
      'Additional customs fees or taxes may apply depending on your country’s rules.',
    ],
  },
  {
    title: 'International Shipping',
    content: [
      'We ship to over 100 countries worldwide, bringing your favorite products right to your door.',
      'International delivery usually takes between 7 to 21 business days, depending on your location.',
      'Customs processing is out of our control and may add extra time.',
      'Be aware that your local customs office might charge import duties or taxes.',
      'We recommend checking your country’s import regulations before ordering.',
    ],
  },
  {
    title: 'Lost or Damaged Packages',
    content: [
      'Your satisfaction matters to us. If your package is lost or arrives damaged:',
      '- Contact our support team within 7 days of the expected delivery date.',
      '- Provide your order number and photos if the item is damaged.',
      'We’ll investigate with the carrier and arrange a replacement or refund as needed.',
      'Please keep all packaging and damaged items until the issue is resolved.',
    ],
  },
];

const splitTextIntoWords = (text) => text.split(/(\s+)/);

const ShippingPolicy = () => {
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(null);
  const containerRefs = useRef([]);
  const lightPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  // State for forcing re-render to update light position styles
  const [, setRender] = useState(0);

  // Smoothly animate light position towards targetPosRef
  const animateLight = () => {
    const ease = 0.15; // easing factor between 0 and 1
    const dx = targetPosRef.current.x - lightPosRef.current.x;
    const dy = targetPosRef.current.y - lightPosRef.current.y;

    // If close enough, skip update
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      lightPosRef.current.x = targetPosRef.current.x;
      lightPosRef.current.y = targetPosRef.current.y;
      setRender((v) => v + 1); // trigger re-render
      animationFrameRef.current = requestAnimationFrame(animateLight);
      return;
    }

    // Update light position with easing
    lightPosRef.current.x += dx * ease;
    lightPosRef.current.y += dy * ease;

    setRender((v) => v + 1); // trigger re-render
    animationFrameRef.current = requestAnimationFrame(animateLight);
  };

  const handleMouseMoveBox = (e, index) => {
    const rect = containerRefs.current[index]?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoveredBoxIndex(index);

    targetPosRef.current = { x, y };

    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateLight);
    }
  };

  const handleMouseLeaveBox = () => {
    setHoveredBoxIndex(null);
    targetPosRef.current = { x: 0, y: 0 };
    lightPosRef.current = { x: 0, y: 0 };
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const lightStyle =
    hoveredBoxIndex !== null
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          filter: 'blur(90px)',
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)',
          transform: `translate(${lightPosRef.current.x - 130}px, ${
            lightPosRef.current.y - 130
          }px)`,
          transition: 'none', // no transition because we're animating manually
          mixBlendMode: 'screen',
          zIndex: 10,
        }
      : { display: 'none' };

  return (
    <section
      aria-label="Shipping policy"
      className="max-w-[1000px] mx-auto px-4 sm:px-6 py-20 sm:py-28 text-gray-700 relative select-none"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-15 text-center drop-shadow-md">
        Shipping Policy
      </h2>

      <div className="space-y-14 relative">
        {policies.map(({ title, content }, boxIndex) => (
          <article
            key={title}
            ref={(el) => (containerRefs.current[boxIndex] = el)}
            onMouseMove={(e) => handleMouseMoveBox(e, boxIndex)}
            onMouseLeave={handleMouseLeaveBox}
            className="relative bg-gradient-to-br from-white via-white to-white bg-opacity-90 rounded-2xl px-6 py-10 sm:p-12 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {hoveredBoxIndex === boxIndex && <div style={lightStyle} />}

            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8 select-text">
              {title}
            </h3>

            <div className="space-y-6 leading-relaxed text-base sm:text-lg text-gray-700">
              {content.map((paragraph, paraIndex) => {
                const words = splitTextIntoWords(paragraph);
                return (
                  <p key={paraIndex} className="select-text">
                    {words.map((word, wordIndex) => (
                      <span key={wordIndex}>{word}</span>
                    ))}
                  </p>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ShippingPolicy;
