"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";


const phoneAccessoriesData = [
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
  {
    id: 52,
    name: "Wireless Charging Power Bank",
    brand: "ChargePro",
    category: "Chargers",
    price: 59,
    features: ["High Capacity", "Fast Charging", "Wireless"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1707485122968-56916bd2c464?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 53,
    name: "Phone Camera Lens Kit",
    brand: "LensMaster",
    category: "Camera Accessories",
    price: 35,
    features: ["Wide Angle", "Macro Lens", "Portable"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1540159453465-731d5a46060a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
];


const PhoneAccessoriesFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 100,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(phoneAccessoriesData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Filtering logic
  useEffect(() => {
    let result = phoneAccessoriesData;

    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.brand.length > 0) {
      result = result.filter((p) => filters.brand.includes(p.brand));
    }
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }
    if (filters.features.length > 0) {
      result = result.filter((p) =>
        filters.features.every((f) => p.features.includes(f))
      );
    }
    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );
    if (filters.rating > 0) {
      result = result.filter((p) => p.rating >= filters.rating);
    }
    if (filters.stock !== null) {
      result = result.filter((p) => p.stock === filters.stock);
    }
    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts([...result]);
    setVisibleCount(8);
  }, [filters]);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const newArr = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newArr };
    });
  };

  const resetFilters = () => {
    setFilters({
      brand: [],
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 100,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Filter toggle button for mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-amber-700 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
        >
          {/* Close button for mobile */}
          <button
            className="absolute top-4 right-4 text-amber-600 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-amber-600 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search phone accessories..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Brand</h3>
            {["ChargePro", "CaseMate", "SoundMax"].map((brand) => (
              <label key={brand} className="block mb-1 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleFilter("brand", brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Category</h3>
            {["Chargers", "Cases", "Audio"].map((cat) => (
              <label key={cat} className="block mb-1 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleFilter("category", cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Features</h3>
            {[
              "Fast Charging",
              "Compact",
              "Qi Certified",
              "Durable",
              "Soft Touch",
              "Lightweight",
              "Noise Cancelling",
              "Long Battery",
              "Comfort Fit",
            ].map((feature) => (
              <label key={feature} className="block mb-1 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => toggleFilter("features", feature)}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
              }
              className="w-full"
            />
            <p className="text-sm">Up to ${filters.maxPrice}</p>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded cursor-pointer ${
                  filters.rating === r ? "bg-amber-600 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-amber-600">Availability</h3>
            <label className="block cursor-pointer">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === true}
                onChange={() => setFilters({ ...filters, stock: true })}
                className="mr-2"
              />
              In Stock
            </label>
            <label className="block cursor-pointer">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === false}
                onChange={() => setFilters({ ...filters, stock: false })}
                className="mr-2"
              />
              Out of Stock
            </label>
          </div>
        </aside>

        {/* Products Section */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              className="bg-white text-gray-900 border border-gray-200 px-3 py-2 rounded cursor-pointer"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                  loading="lazy"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-amber-600">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PhoneAccessoriesFilters;
