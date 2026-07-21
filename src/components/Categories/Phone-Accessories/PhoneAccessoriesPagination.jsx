"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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
];

const PhoneAccessoriesPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(sampleFitnessProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleFitnessProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-white py-10 my-[-60px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Plants Beauty
          </h2>
          <p className="text-gray-500 mt-2">Browse through our curated collection</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-gray-800 font-bold mt-1">${item.price}</p>
                {item.oldPrice && (
                  <p className="text-black line-through text-sm">
                    ${item.oldPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-4 bg-white rounded-lg">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === 1
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Prev
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium min-w-[50px] whitespace-nowrap transition ${
                  currentPage === page
                    ? "bg-white text-gray-900 border border-black"
                    : "bg-white text-gray-700 hover:bg-gray-500"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhoneAccessoriesPagination;
