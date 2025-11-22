'use client';

import React from 'react';
import GiftCardItem from './GiftCardItem';

const sampleGiftCards = [
  {
    id: 1,
    title: 'Birthday Special',
    description: 'Send warm wishes with this customizable gift card.',
    value: '$100',
    image:
      'https://plus.unsplash.com/premium_photo-1669740580292-deaad2099f2e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Holiday Cheer',
    description: 'Perfect gift card for your festive celebrations.',
    value: '$75',
    image:
      'https://images.unsplash.com/photo-1481475240398-029b4f59cdf9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Thank You Card',
    description: 'Show gratitude with a meaningful gift card.',
    value: '$50',
    image:
      'https://plus.unsplash.com/premium_photo-1733259687682-d872ca81d233?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Anniversary Gift',
    description: 'Celebrate love with this elegant gift card.',
    value: '$150',
    image:
      'https://images.unsplash.com/photo-1641933002513-880c86d110e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more gift cards as needed
];

const GiftCardList = () => {
  return (
    <section
      aria-label="List of available gift cards"
      className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-8"
    >
      {sampleGiftCards.map(({ id, title, description, value, image }) => (
        <GiftCardItem
          key={id}
          title={title}
          description={description}
          value={value}
          image={image}
        />
      ))}
    </section>
  );
};

export default GiftCardList;
