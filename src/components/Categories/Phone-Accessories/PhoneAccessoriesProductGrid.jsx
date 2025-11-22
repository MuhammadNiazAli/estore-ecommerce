"use client";

import React, { useState } from "react";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";

// Sample phone accessories data - please replace with your full data or import it
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

const PhoneAccessoriesProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(phoneAccessoriesData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(phoneAccessoriesData.slice(0, newCount));
  };

  const handleSort = (value) => {
    setSortOption(value);
    let sortedProducts = [...products];
    if (value === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else {
      // default - reset to slice of original data up to visibleCount
      sortedProducts = phoneAccessoriesData.slice(0, visibleCount);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Explore Phone Accessories</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-yellow-400 font-semibold">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700"
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                    <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
                      <FaCartPlus /> Add to Cart
                    </button>
                    <div className="flex gap-4 text-xl text-white">
                      <FaHeart className="cursor-pointer hover:text-yellow-400" />
                      <FaEye className="cursor-pointer hover:text-yellow-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-yellow-400">${item.price}</p>
                  <span className="text-sm text-gray-300">{item.rating}★</span>
                </div>
                <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-2">
                  {item.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-gray-700 px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    item.stock ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          {visibleCount < phoneAccessoriesData.length && (
            <button
              onClick={handleLoadMore}
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhoneAccessoriesProductGrid;
