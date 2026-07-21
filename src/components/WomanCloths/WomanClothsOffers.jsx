import React, { useEffect, useState } from "react";

const sampleOffers = [
  {
    id: 1,
    title: "Summer Floral Maxi Dress",
    description:
      "Flow gracefully with this floral maxi dress, perfect for sunny days and vacation vibes.",
    price: 79.99,
    oldPrice: 120,
    discountPercent: 35,
    rating: 4.7,
    reviews: 134,
    img: "https://images.unsplash.com/photo-1649109669076-a432665c5dcb?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Classic Denim Jacket",
    description:
      "An evergreen denim jacket that pairs effortlessly with dresses and skirts.",
    price: 69.99,
    oldPrice: 99.99,
    discountPercent: 30,
    rating: 4.5,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1715408153725-186c6c77fb45?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Elegant Satin Evening Gown",
    description:
      "Turn heads with this satin evening gown featuring a sleek silhouette.",
    price: 199.99,
    oldPrice: 250,
    discountPercent: 20,
    rating: 4.9,
    reviews: 56,
    img: "https://images.unsplash.com/photo-1567409928336-730decd96b00?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Chic Off-Shoulder Bodycon Dress",
    description:
      "Show off your curves with this elegant off-shoulder bodycon dress.",
    price: 59.99,
    oldPrice: 95,
    discountPercent: 37,
    rating: 4.6,
    reviews: 103,
    img: "https://images.unsplash.com/photo-1624140323078-cacb57df7884?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Casual Striped Shirt Dress",
    description:
      "Stay comfortable yet stylish in this lightweight striped shirt dress.",
    price: 45.99,
    oldPrice: 75,
    discountPercent: 39,
    rating: 4.4,
    reviews: 61,
    img: "https://images.unsplash.com/photo-1696713443647-3aa49dbb22c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Floral Wrap Midi Dress",
    description:
      "A feminine wrap dress in soft florals, perfect for brunch and summer outings.",
    price: 89.99,
    oldPrice: 140,
    discountPercent: 36,
    rating: 4.8,
    reviews: 78,
    img: "https://images.unsplash.com/photo-1637794895556-faf0a6012c38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    title: "Vintage Polka Dot Dress",
    description:
      "Retro-inspired polka dot dress for a timeless and playful look.",
    price: 74.99,
    oldPrice: 110,
    discountPercent: 32,
    rating: 4.7,
    reviews: 87,
    img: "https://plus.unsplash.com/premium_photo-1734415282660-af48b656dc9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Boho Ruffle Maxi Dress",
    description:
      "Channel your inner free spirit with this flowy boho-style ruffle maxi dress.",
    price: 99.99,
    oldPrice: 150,
    discountPercent: 34,
    rating: 4.6,
    reviews: 112,
    img: "https://images.unsplash.com/photo-1746207068099-4b3a1dfe5fbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    title: "High-Waist Pleated Skirt",
    description:
      "Elegant high-waist skirt with pleats for a chic and modern appeal.",
    price: 49.99,
    oldPrice: 80,
    discountPercent: 38,
    rating: 4.5,
    reviews: 65,
    img: "https://images.unsplash.com/photo-1596783047904-4000addd05cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    title: "Luxury Cashmere Sweater Dress",
    description:
      "Stay warm and stylish with this premium cashmere sweater dress.",
    price: 129.99,
    oldPrice: 200,
    discountPercent: 35,
    rating: 4.8,
    reviews: 59,
    img: "https://images.unsplash.com/photo-1737188550372-ba2603e49bab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
 {
    id: 13,
    title: "Elegant Evening Gown",
    description:
      "A stunning floor-length gown designed for elegant dinners and evening parties.",
    price: 59.99,
    oldPrice: 80,
    discountPercent: 25,
    rating: 4.6,
    reviews: 92,
    img: "https://images.unsplash.com/photo-1547697933-66bcb20f114a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 14,
    title: "Luxury Silk Dress",
    description:
      "An exquisite silk dress that flows effortlessly, perfect for high-class events and parties.",
    price: 45.99,
    oldPrice: 65,
    discountPercent: 29,
    rating: 4.4,
    reviews: 38,
    img: "https://plus.unsplash.com/premium_photo-1702635213457-dceafc304b7b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 15,
    title: "Chic Wrap Dress",
    description:
      "A versatile wrap dress that combines comfort with elegance, ideal for casual outings or work.",
    price: 34.99,
    oldPrice: 50,
    discountPercent: 30,
    rating: 4.5,
    reviews: 65,
    img: "https://images.unsplash.com/photo-1571682262898-48532c58b3a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 16,
    title: "Floral Summer Midi Dress",
    description:
      "Lightweight and breathable midi dress with delicate floral prints for sunny days.",
    price: 29.99,
    oldPrice: 45,
    discountPercent: 33,
    rating: 4.8,
    reviews: 48,
    img: "https://images.unsplash.com/photo-1548454433-4a1812514573?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 17,
    title: "Classic Denim Shirt Dress",
    description:
      "A chic and functional denim dress for a stylish casual look, perfect for day-long comfort.",
    price: 64.99,
    oldPrice: 90,
    discountPercent: 28,
    rating: 4.6,
    reviews: 102,
    img: "https://images.unsplash.com/photo-1547697875-a99fe8f08327?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 18,
    title: "Trendy Maxi Dress",
    description:
      "Step out in style with this trendy maxi dress, designed for ultimate comfort and elegance.",
    price: 129.99,
    oldPrice: 180,
    discountPercent: 28,
    rating: 4.5,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1567290290527-b553f4d97960?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 19,
    title: "Bohemian Style Dress",
    description:
      "Express your free-spirited style with this flowing bohemian dress, perfect for festivals and casual days.",
    price: 149.99,
    oldPrice: 200,
    discountPercent: 25,
    rating: 4.7,
    reviews: 187,
    img: "https://images.unsplash.com/photo-1568378241395-262e2debcaab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 20,
    title: "Casual Striped Shirt Dress",
    description:
      "A comfortable and stylish striped dress, perfect for everyday wear and casual meetups.",
    price: 54.99,
    oldPrice: 75,
    discountPercent: 27,
    rating: 4.6,
    reviews: 77,
    img: "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
{
    id: 21,
    title: "Elegant Satin Evening Dress",
    description:
      "Turn heads at any event with this flowing satin evening dress, designed for ultimate elegance.",
    price: 249.99,
    oldPrice: 320,
    discountPercent: 22,
    rating: 4.8,
    reviews: 91,
    img: "https://images.unsplash.com/flagged/photo-1564181595228-a5c75430cdac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 22,
    title: "Minimalist Summer Dress",
    description:
      "A lightweight, minimalist summer dress perfect for hot days and casual outings.",
    price: 39.99,
    oldPrice: 55,
    discountPercent: 27,
    rating: 4.3,
    reviews: 53,
    img: "https://images.unsplash.com/photo-1574868844366-3df4c6d7e2c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 23,
    title: "Luxury Cashmere Knit Dress",
    description:
      "Stay cozy and chic in this premium cashmere knit dress for winter outings.",
    price: 199.99,
    oldPrice: 260,
    discountPercent: 23,
    rating: 4.9,
    reviews: 46,
    img: "https://images.unsplash.com/flagged/photo-1577854362336-ec93f79d06ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 24,
    title: "Chic Party Bodycon Dress",
    description:
      "A trendy bodycon dress perfect for parties and night-outs with friends.",
    price: 59.99,
    oldPrice: 85,
    discountPercent: 29,
    rating: 4.7,
    reviews: 112,
    img: "https://images.unsplash.com/photo-1675294297325-0b78ef21dbc1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 25,
    title: "Trendy Shirt Dress",
    description:
      "Effortless style with this adjustable shirt dress featuring a flattering fit.",
    price: 49.99,
    oldPrice: 70,
    discountPercent: 28,
    rating: 4.4,
    reviews: 65,
    img: "https://images.unsplash.com/photo-1675294294829-9d071dd6bd62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
{
    id: 26,
    title: "Premium Velvet Gown",
    description:
      "A luxurious velvet gown that exudes sophistication and timeless appeal.",
    price: 399.99,
    oldPrice: 520,
    discountPercent: 23,
    rating: 4.9,
    reviews: 73,
    img: "https://images.unsplash.com/photo-1675294292199-aac27f952585?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 27,
    title: "Floral A-Line Dress",
    description:
      "An elegant A-line dress with floral details, perfect for day or evening wear.",
    price: 29.99,
    oldPrice: 45,
    discountPercent: 33,
    rating: 4.4,
    reviews: 34,
    img: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 28,
    title: "Elegant Pleated Midi Dress",
    description:
      "Sophisticated pleated midi dress that offers both style and comfort.",
    price: 119.99,
    oldPrice: 160,
    discountPercent: 25,
    rating: 4.6,
    reviews: 91,
    img: "https://images.unsplash.com/photo-1675294273352-079770f75a6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 29,
    title: "Casual Denim Shirt Dress",
    description:
      "Stylish and comfortable denim shirt dress for an easygoing look.",
    price: 89.99,
    oldPrice: 120,
    discountPercent: 25,
    rating: 4.7,
    reviews: 162,
    img: "https://images.unsplash.com/photo-1691316089197-1269faeb3af7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 30,
    title: "Classic Wrap Dress",
    description:
      "A timeless wrap dress that flatters every body shape and style.",
    price: 149.99,
    oldPrice: 210,
    discountPercent: 29,
    rating: 4.5,
    reviews: 47,
    img: "https://images.unsplash.com/photo-1562964568-192c14d85b6a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
{
    id: 31,
    title: "Modern Office Pencil Skirt",
    description:
      "A sleek pencil skirt perfect for professional settings with a modern touch.",
    price: 119.99,
    oldPrice: 170,
    discountPercent: 29,
    rating: 4.6,
    reviews: 84,
    img: "https://images.unsplash.com/photo-1574868843985-6caab2f9e64c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 32,
    title: "Classic Cotton Shirt Dress",
    description:
      "Comfort meets style with this breathable cotton shirt dress, perfect for daily wear.",
    price: 189.99,
    oldPrice: 260,
    discountPercent: 27,
    rating: 4.8,
    reviews: 69,
    img: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 33,
    title: "Elegant Evening Gown",
    description:
      "A glamorous evening gown designed to make a stunning impression at formal events.",
    price: 44.99,
    oldPrice: 65,
    discountPercent: 31,
    rating: 4.4,
    reviews: 53,
    img: "https://images.unsplash.com/photo-1683581378087-5a529885225b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 34,
    title: "Fashionable Trench Coat Dress",
    description:
      "Stay chic and warm with this stylish trench coat dress for transitional weather.",
    price: 179.99,
    oldPrice: 240,
    discountPercent: 25,
    rating: 4.7,
    reviews: 56,
    img: "https://images.unsplash.com/photo-1631291887694-0bd5d4d610be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 35,
    title: "Designer Evening Clutch Bag",
    description:
      "Complete your evening look with this elegant and spacious designer clutch bag.",
    price: 89.99,
    oldPrice: 130,
    discountPercent: 31,
    rating: 4.6,
    reviews: 44,
    img: "https://images.unsplash.com/photo-1714629825960-75fd2154d700?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 36,
    title: "Luxury Silk Scarf",
    description:
      "Add a touch of luxury with this smooth silk scarf that complements any outfit.",
    price: 59.99,
    oldPrice: 90,
    discountPercent: 33,
    rating: 4.5,
    reviews: 77,
    img: "https://images.unsplash.com/photo-1746025242086-cb5dcf498aea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 37,
    title: "Smart Casual Blazer",
    description:
      "A versatile blazer to elevate your casual and formal outfits effortlessly.",
    price: 79.99,
    oldPrice: 110,
    discountPercent: 27,
    rating: 4.7,
    reviews: 134,
    img: "https://images.unsplash.com/photo-1741985979908-5f3b6d7060fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 38,
    title: "Cozy Knit Cardigan",
    description:
      "Stay warm and stylish with this cozy knit cardigan, perfect for layering.",
    price: 49.99,
    oldPrice: 75,
    discountPercent: 33,
    rating: 4.5,
    reviews: 58,
    img: "https://images.unsplash.com/photo-1749055089644-0567c5420f2b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 39,
    title: "Elegant Silk Blouse",
    description:
      "Smooth silk blouse that adds sophistication and grace to your wardrobe.",
    price: 129.99,
    oldPrice: 180,
    discountPercent: 28,
    rating: 4.6,
    reviews: 62,
    img: "https://images.unsplash.com/photo-1649109669076-a432665c5dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 40,
    title: "Casual Summer Jumpsuit",
    description:
      "Light and breathable jumpsuit ideal for warm days and casual outings.",
    price: 199.99,
    oldPrice: 260,
    discountPercent: 23,
    rating: 4.8,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1556437298-3c544908b65c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 41,
    title: "Elegant Faux Fur Coat",
    description:
      "Soft and cozy faux fur coat to keep you warm with luxury and style.",
    price: 79.99,
    oldPrice: 120,
    discountPercent: 33,
    rating: 4.7,
    reviews: 41,
    img: "https://images.unsplash.com/photo-1733041482420-e2894386944d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 42,
    title: "Professional Women's DSLR Camera Bag",
    description:
      "Carry your DSLR with style using this sleek and durable camera bag designed for women.",
    price: 799.99,
    oldPrice: 999.99,
    discountPercent: 20,
    rating: 4.9,
    reviews: 102,
    img: "https://images.unsplash.com/photo-1613424935149-c8efd5c41e91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 43,
    title: "Designer Perfume for Women",
    description:
      "Long-lasting, elegant fragrances designed to enhance your feminine charm.",
    price: 69.99,
    oldPrice: 100,
    discountPercent: 30,
    rating: 4.8,
    reviews: 77,
    img: "https://images.unsplash.com/photo-1631386749697-ca71a14f89c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 44,
    title: "Modern Women's Full-Length Mirror",
    description:
      "Large full-length mirror with a sleek frame perfect for your dressing room.",
    price: 129.99,
    oldPrice: 180,
    discountPercent: 28,
    rating: 4.6,
    reviews: 55,
    img: "https://images.unsplash.com/photo-1747625120131-4d32aa58e0e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 45,
    title: "Portable Women's Power Bank Purse",
    description:
      "High-capacity power bank cleverly designed as a stylish purse for women on the go.",
    price: 39.99,
    oldPrice: 60,
    discountPercent: 33,
    rating: 4.7,
    reviews: 94,
    img: "https://images.unsplash.com/photo-1725208146250-8eb809b2d224?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fEVsZWdhbnQlMjBFdmVuaW5nJTIwR293bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 46,
    title: "Wireless Earbuds for Women",
    description:
      "Compact noise-canceling wireless earbuds designed with women’s style and comfort in mind.",
    price: 149.99,
    oldPrice: 200,
    discountPercent: 25,
    rating: 4.8,
    reviews: 183,
    img: "https://images.unsplash.com/photo-1666026532376-e320a8d4d0eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 47,
    title: "Designer Women's Sunglasses",
    description:
      "Trendy polarized sunglasses with UV protection designed exclusively for women.",
    price: 59.99,
    oldPrice: 85,
    discountPercent: 30,
    rating: 4.5,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1728646995777-6dbb354691e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 48,
    title: "Premium Women's Hair Dryer",
    description:
      "Salon-quality hair dryer with quick-dry technology and multiple heat settings for women.",
    price: 79.99,
    oldPrice: 110,
    discountPercent: 27,
    rating: 4.7,
    reviews: 101,
    img: "https://images.unsplash.com/photo-1674383979883-f167be8e07cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 49,
    title: "Elegant Women's Wrist Watch",
    description:
      "Luxury wristwatch with a minimalist design, tailored for women with water resistance.",
    price: 149.99,
    oldPrice: 220,
    discountPercent: 32,
    rating: 4.9,
    reviews: 66,
    img: "https://images.unsplash.com/photo-1586421562707-efdc69cb653d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 50,
    title: "Premium Women's Yoga Mat",
    description:
      "Non-slip yoga mat with extra cushioning for women’s ultimate comfort during workouts.",
    price: 39.99,
    oldPrice: 60,
    discountPercent: 33,
    rating: 4.6,
    reviews: 74,
    img: "https://plus.unsplash.com/premium_photo-1701208413644-c28268f8b7d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 51,
    title: "Luxury Silk Bedsheet Set for Women",
    description:
      "Experience ultimate comfort with this premium silk bedsheet set, perfect for women's bedrooms.",
    price: 249.99,
    oldPrice: 320,
    discountPercent: 22,
    rating: 4.8,
    reviews: 68,
    img: "https://images.unsplash.com/photo-1704129129391-2230af3d8f3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 52,
    title: "Smart Touchscreen Thermostat Dress",
    description:
      "Chic, body-hugging dress inspired by the sleek design of smart technology thermostats.",
    price: 199.99,
    oldPrice: 260,
    discountPercent: 23,
    rating: 4.7,
    reviews: 83,
    img: "https://images.unsplash.com/photo-1749055089393-7390999902fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 53,
    title: "Portable Outdoor Summer Dress",
    description:
      "Lightweight and breathable outdoor dress, perfect for summer barbecues and gatherings.",
    price: 179.99,
    oldPrice: 230,
    discountPercent: 22,
    rating: 4.6,
    reviews: 91,
    img: "https://images.unsplash.com/photo-1746025241709-0fb2528687e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxFbGVnYW50JTIwRXZlbmluZyUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
];


const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div
      className="flex items-center space-x-0.5"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={"full" + i}
          className="w-4 h-4 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-4 h-4 text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={"empty" + i}
          className="w-4 h-4 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
    </div>
  );
};

const CountdownTimer = ({ expiryDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(expiryDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!timeLeft) {
    return (
      <span className="text-black font-semibold select-none">Offer expired</span>
    );
  }

  return (
    <div className="flex space-x-3 text-center font-mono text-sm text-gray-900 bg-black rounded-md px-3 py-1 select-none w-max mx-auto sm:mx-0">
      <div>
        <span className="font-bold tabular-nums">{timeLeft.days}</span>d
      </div>
      <div>
        <span className="font-bold tabular-nums">{timeLeft.hours}</span>h
      </div>
      <div>
        <span className="font-bold tabular-nums">{timeLeft.minutes}</span>m
      </div>
      <div>
        <span className="font-bold tabular-nums">{timeLeft.seconds}</span>s
      </div>
    </div>
  );
};

const WomanClothsOffers = () => {
  // Show 6 offers initially, show 6 more on click "Show More"
  const INITIAL_SHOW_COUNT = 6;
  const SHOW_MORE_COUNT = 6;

  const [visibleCount, setVisibleCount] = useState(
    sampleOffers.length > INITIAL_SHOW_COUNT ? INITIAL_SHOW_COUNT : sampleOffers.length
  );
  const [loadingMore, setLoadingMore] = useState(false);

  const handleShowMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + SHOW_MORE_COUNT, sampleOffers.length)
      );
      setLoadingMore(false);
    }, 1200); // simulate loading delay
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Hero Offer */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1650668014993-b914b33f8112?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Exclusive Evening Gown Offer"
          className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 sm:left-12 text-gray-900 max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 drop-shadow-lg">
            Exclusive Evening Gown Sale
          </h1>
          <p className="text-sm sm:text-base mb-4 drop-shadow-md max-w-xs">
            Up to 40% off on selected elegant gowns. Shop now and dazzle the night.
          </p>
          <CountdownTimer expiryDate={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)} />{" "}
          {/* 15 days */}
          <button
            type="button"
            className="mt-6 inline-block rounded-md bg-black px-6 py-3 text-lg font-semibold text-black hover:bg-black shadow-lg transition"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleOffers.slice(0, visibleCount).map((offer) => (
          <article
            key={offer.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
            tabIndex={0}
            aria-label={`Offer: ${offer.title}`}
          >
            <div className="relative overflow-hidden rounded-t-xl h-60 sm:h-64">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute top-3 right-3 bg-black text-black font-bold px-3 py-1 rounded-lg shadow-md select-none">
                {offer.discountPercent}% OFF
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">{offer.description}</p>
              <div className="flex items-center justify-between mt-3">
                <StarRating rating={offer.rating} />
                <span className="text-sm text-gray-500">({offer.reviews})</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-2xl font-extrabold text-black">
                  ${offer.price.toFixed(2)}
                </span>
                <span className="text-sm line-through text-gray-600">
                  ${offer.oldPrice.toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                className="mt-5 bg-black hover:bg-black text-black font-semibold py-2 rounded-md shadow-md transition"
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Show More Button */}
      {sampleOffers.length > visibleCount && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowMore}
            disabled={loadingMore}
            className="inline-flex items-center space-x-2 rounded-md bg-black hover:bg-black text-black font-semibold px-6 py-3 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Show more offers"
          >
            {loadingMore ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              <span>Show More</span>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default WomanClothsOffers;
