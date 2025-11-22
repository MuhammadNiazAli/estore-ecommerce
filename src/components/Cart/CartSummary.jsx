'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CartSummary = () => {
  const summaryRef = useRef(null);
  const [isStickyActive, setIsStickyActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if viewport is desktop (min-width 768px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop(); // Initial check

    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!summaryRef.current || !isDesktop) {
      setIsStickyActive(false);
      return;
    }

    const el = summaryRef.current;

    // ScrollTrigger to toggle sticky bg on scroll past offset on desktop only
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 112px', // when element top hits 112px from viewport top (matches top-28)
      end: 'bottom top',
      onEnter: () => setIsStickyActive(true),
      onLeaveBack: () => setIsStickyActive(false),
    });

    return () => {
      trigger.kill();
    };
  }, [isDesktop]);

  return (
    <aside
      ref={summaryRef}
      aria-label="Order summary"
      className={`
        max-w-md mx-auto w-full rounded-xl shadow-xl p-6 my-[-70px] mb-0 lg:my-0
        text-white transition-colors duration-500 z-50
        bg-gray-900
        ${isDesktop ? 'sticky top-28' : ''}
        ${isStickyActive && isDesktop ? 'bg-gray-900/10 backdrop-blur-md' : ''}
      `}
    >
      <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3">
        Order Summary
      </h2>

      <dl className="space-y-4 text-sm">
        <div className="flex justify-between text-gray-300">
          <dt>Subtotal</dt>
          <dd>$149.99</dd>
        </div>

        <div className="flex justify-between text-gray-300">
          <dt>Shipping</dt>
          <dd>$4.99</dd>
        </div>

        <div className="flex justify-between text-gray-300">
          <dt>Tax</dt>
          <dd>$12.00</dd>
        </div>

        <div className="flex justify-between text-red-400">
          <dt>Discount</dt>
          <dd>- $20.00</dd>
        </div>
      </dl>

      <hr className="border-gray-700 my-6" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span className="text-yellow-400">$146.98</span>
      </div>

      <Link
        href="/checkout"
        aria-label="Proceed to checkout"
        className="block mt-8 w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold text-center
                   hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-shadow"
      >
        Proceed to Checkout
      </Link>

      <p className="text-xs text-gray-500 text-center mt-4">
        Secure checkout. Free returns within 30 days.
      </p>
    </aside>
  );
};

export default CartSummary;
