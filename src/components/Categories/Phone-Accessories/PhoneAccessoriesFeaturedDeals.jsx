"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const featuredDeals = [
  {
    id: 1,
    name: "Wireless Charger",
    brand: "ChargePro",
    category: "Chargers",
    price: 39,
    features: ["Fast Charging", "Compact", "Qi Certified"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1565536421961-1f165e0c981e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Silicone Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 19,
    features: ["Durable", "Soft Touch", "Lightweight"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1677145503731-87bfe49e5c67?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Bluetooth Earbuds",
    brand: "SoundMax",
    category: "Audio",
    price: 59,
    features: ["Noise Cancelling", "Long Battery", "Comfort Fit"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1666739388750-735b21d11a4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  // Additional 47 items:
  {
    id: 4,
    name: "Magnetic Car Mount",
    brand: "HoldFast",
    category: "Mounts",
    price: 24,
    features: ["360 Rotation", "Strong Magnet", "Compact"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1683531060429-9a47d55ddf0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "USB-C Fast Charger",
    brand: "ChargePro",
    category: "Chargers",
    price: 29,
    features: ["Fast Charging", "Compact", "Durable"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Leather Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 35,
    features: ["Premium Leather", "Durable", "Stylish"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1573739022854-abceaeb585dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Wireless Earbuds Pro",
    brand: "SoundMax",
    category: "Audio",
    price: 79,
    features: ["Noise Cancelling", "Touch Control", "Long Battery"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1706210063693-51cec7c4c757?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Screen Protector Glass",
    brand: "ClearView",
    category: "Protectors",
    price: 15,
    features: ["Anti-Scratch", "HD Clarity", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1691256291309-a4682ed0e4fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "Adjustable Phone Stand",
    brand: "HoldFast",
    category: "Stands",
    price: 22,
    features: ["Foldable", "Adjustable Angle", "Portable"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1483383490964-8335c18b6666?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    name: "Magnetic Wireless Charger",
    brand: "ChargePro",
    category: "Chargers",
    price: 49,
    features: ["Magnetic Alignment", "Fast Charging", "Qi Certified"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    name: "Heavy Duty Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 27,
    features: ["Shockproof", "Drop Tested", "Textured Grip"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1565536421966-1e4aec32c7e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    name: "Noise Cancelling Headphones",
    brand: "SoundMax",
    category: "Audio",
    price: 99,
    features: ["Over-Ear", "Long Battery", "Comfort Fit"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1565536421966-1e4aec32c7e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    name: "Flexible Charging Cable",
    brand: "ChargePro",
    category: "Cables",
    price: 12,
    features: ["Fast Charging", "Durable", "Tangle-Free"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1565536421966-1e4aec32c7e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 14,
    name: "Wireless Charging Pad",
    brand: "ChargePro",
    category: "Chargers",
    price: 35,
    features: ["Qi Certified", "Compact", "Fast Charging"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1596207891316-23851be3cc20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 15,
    name: "Waterproof Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 29,
    features: ["Waterproof", "Shockproof", "Clear Design"],
    rating: 4,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1680709373720-0a6baadc2a63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    name: "True Wireless Earbuds",
    brand: "SoundMax",
    category: "Audio",
    price: 65,
    features: ["Touch Control", "Long Battery", "Compact"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1628570220294-20b6bd9546ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    name: "Car Charger Adapter",
    brand: "ChargePro",
    category: "Chargers",
    price: 18,
    features: ["Fast Charging", "Dual USB", "Compact"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623998022290-a74f8cc36563?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 18,
    name: "Anti-Glare Screen Protector",
    brand: "ClearView",
    category: "Protectors",
    price: 16,
    features: ["Anti-Glare", "HD Clarity", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1613380832864-7630c5573da9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 19,
    name: "Adjustable Desk Phone Stand",
    brand: "HoldFast",
    category: "Stands",
    price: 28,
    features: ["Foldable", "Adjustable Angle", "Portable"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1510017098667-27dfc7150acb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 20,
    name: "USB-C to Lightning Cable",
    brand: "ChargePro",
    category: "Cables",
    price: 14,
    features: ["Durable", "Fast Charging", "Tangle-Free"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1623998019820-99c01e6d2e5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 21,
    name: "Rugged Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 31,
    features: ["Shockproof", "Dust Resistant", "Textured Grip"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623998019820-99c01e6d2e5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 22,
    name: "Wireless Earbuds Charging Case",
    brand: "SoundMax",
    category: "Audio",
    price: 69,
    features: ["Long Battery", "Compact", "Fast Charging"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 23,
    name: "Magnetic Phone Mount",
    brand: "HoldFast",
    category: "Mounts",
    price: 26,
    features: ["Strong Magnet", "360 Rotation", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1568746980529-9061a45c8c88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 24,
    name: "Fast Charging Power Bank",
    brand: "ChargePro",
    category: "Chargers",
    price: 49,
    features: ["High Capacity", "Fast Charging", "Compact"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1568746980529-9061a45c8c88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 25,
    name: "Soft TPU Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 22,
    features: ["Flexible", "Durable", "Slim Fit"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1753036051291-cfc20d052c24?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    name: "Over-Ear Wireless Headphones",
    brand: "SoundMax",
    category: "Audio",
    price: 89,
    features: ["Noise Cancelling", "Comfort Fit", "Long Battery"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1753036051291-cfc20d052c24?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 27,
    name: "Braided Lightning Cable",
    brand: "ChargePro",
    category: "Cables",
    price: 15,
    features: ["Durable", "Tangle-Free", "Fast Charging"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1577954732026-2071521acdfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 28,
    name: "Wireless Charging Stand",
    brand: "ChargePro",
    category: "Chargers",
    price: 45,
    features: ["Fast Charging", "Qi Certified", "Stand Design"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1581003989336-2ae25a99c091?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 29,
    name: "Shockproof Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 25,
    features: ["Shockproof", "Textured Grip", "Durable"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623998020873-eb2d166dda40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 30,
    name: "True Wireless Sports Earbuds",
    brand: "SoundMax",
    category: "Audio",
    price: 75,
    features: ["Water Resistant", "Long Battery", "Comfort Fit"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623998020873-eb2d166dda40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 31,
    name: "Magnetic Wireless Charging Pad",
    brand: "ChargePro",
    category: "Chargers",
    price: 55,
    features: ["Magnetic Alignment", "Fast Charging", "Qi Certified"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669323926640-680d85157a55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 32,
    name: "Clear Hard Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 20,
    features: ["Clear Design", "Durable", "Slim Fit"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1567094764148-bb14c3e6f14c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 33,
    name: "Wireless Earbuds with Mic",
    brand: "SoundMax",
    category: "Audio",
    price: 69,
    features: ["Noise Cancelling", "Mic Included", "Long Battery"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1681702277226-d3c63331730a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 34,
    name: "Adjustable Phone Holder",
    brand: "HoldFast",
    category: "Mounts",
    price: 30,
    features: ["Adjustable Angle", "Strong Magnet", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1700825238353-43d0268f6e0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 35,
    name: "Fast Charging USB Cable",
    brand: "ChargePro",
    category: "Cables",
    price: 13,
    features: ["Tangle-Free", "Durable", "Fast Charging"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1682104376111-b23660ff443c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 36,
    name: "Wireless Charger Stand",
    brand: "ChargePro",
    category: "Chargers",
    price: 44,
    features: ["Fast Charging", "Stand Design", "Qi Certified"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1700825238276-6885060d54d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 37,
    name: "Waterproof Phone Sleeve",
    brand: "CaseMate",
    category: "Cases",
    price: 18,
    features: ["Waterproof", "Lightweight", "Durable"],
    rating: 3,
    stock: true,
    image: "https://images.unsplash.com/photo-1599317193916-642a55564630?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 38,
    name: "Noise Isolating Earbuds",
    brand: "SoundMax",
    category: "Audio",
    price: 55,
    features: ["Noise Isolating", "Comfort Fit", "Long Battery"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623998021451-306e52f35634?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 39,
    name: "Magnetic Phone Grip",
    brand: "HoldFast",
    category: "Mounts",
    price: 15,
    features: ["Strong Magnet", "Ergonomic", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1556578330-5caf4520131e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 40,
    name: "Portable Power Bank",
    brand: "ChargePro",
    category: "Chargers",
    price: 39,
    features: ["High Capacity", "Compact", "Fast Charging"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723900969957-d4dacb2238ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 41,
    name: "Soft Silicone Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 20,
    features: ["Soft Touch", "Durable", "Lightweight"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723900969957-d4dacb2238ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 42,
    name: "True Wireless Earbuds Pro",
    brand: "SoundMax",
    category: "Audio",
    price: 85,
    features: ["Noise Cancelling", "Touch Control", "Long Battery"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723900969957-d4dacb2238ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 43,
    name: "Car Phone Holder",
    brand: "HoldFast",
    category: "Mounts",
    price: 20,
    features: ["Adjustable", "Strong Magnet", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723900969957-d4dacb2238ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 44,
    name: "USB-C Fast Charging Cable",
    brand: "ChargePro",
    category: "Cables",
    price: 16,
    features: ["Fast Charging", "Durable", "Tangle-Free"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 45,
    name: "Shockproof Clear Case",
    brand: "CaseMate",
    category: "Cases",
    price: 24,
    features: ["Clear Design", "Shockproof", "Durable"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1599007612680-ca049eabd546?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 46,
    name: "Wireless Bluetooth Headphones",
    brand: "SoundMax",
    category: "Audio",
    price: 92,
    features: ["Over-Ear", "Noise Cancelling", "Long Battery"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1567637825290-4bb6ad22fee3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 47,
    name: "Magnetic Car Vent Mount",
    brand: "HoldFast",
    category: "Mounts",
    price: 23,
    features: ["Strong Magnet", "Compact", "Easy Install"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 48,
    name: "Portable Wireless Charger",
    brand: "ChargePro",
    category: "Chargers",
    price: 42,
    features: ["Compact", "Fast Charging", "Qi Certified"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 49,
    name: "TPU Phone Case",
    brand: "CaseMate",
    category: "Cases",
    price: 18,
    features: ["Flexible", "Durable", "Slim Fit"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 50,
    name: "True Wireless Sports Earbuds",
    brand: "SoundMax",
    category: "Audio",
    price: 77,
    features: ["Water Resistant", "Long Battery", "Comfort Fit"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1579933948224-66809af73e44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 51,
    name: "Foldable Bluetooth Keyboard",
    brand: "KeyFlex",
    category: "Accessories",
    price: 49,
    features: ["Compact", "Rechargeable", "Wireless"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1707485122968-56916bd2c464?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
];

const PhoneAccessoriesFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    // Responsive cards per slide
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(featuredDeals.length / cardsPerSlide);

  // Clamp slide index
  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  // Slice deals for current slide
  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(featuredDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-gray-900 text-white py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-yellow-400"
          }`}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
          }}
        >
          {slideItems.map((items, slideIndex) => (
            <div
              key={slideIndex}
              className="flex justify-center gap-6 px-2"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {items.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-gray-800 rounded-xl shadow-lg flex flex-col max-w-sm w-full   transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Badge */}
                    {deal.stock ? (
                      <span className="absolute top-2 left-2 bg-green-600 text-xs font-bold px-2 py-1 rounded-md">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 bg-red-600 text-xs font-bold px-2 py-1 rounded-md">
                        Out of Stock
                      </span>
                    )}
                    {/* Category Badge */}
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <p className="text-sm text-gray-300 mb-1 font-medium">Brand: {deal.brand}</p>

                    {/* Features */}
                    <ul className="text-xs text-yellow-300 mb-3 list-disc list-inside">
                      {deal.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < deal.rating ? "text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price & Stock */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-yellow-400">${deal.price}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          deal.stock
                            ? "bg-yellow-400 text-black hover:bg-yellow-300"
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                      <FaCartPlus />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next Slide"
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-yellow-400"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PhoneAccessoriesFeaturedDeals;
