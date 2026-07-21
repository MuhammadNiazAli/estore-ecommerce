"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const featuredDeals = [
    {
    id: 1,
    name: "Adjustable Dumbbell Set",
    brand: "FitPro",
    category: "Strength",
    price: 249,
    features: ["Adjustable Weight", "Compact", "Durable"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666736569798-421076607ba7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Treadmill 3000X",
    brand: "ProRun",
    category: "Cardio",
    price: 1199,
    features: ["Foldable", "Bluetooth", "Shock Absorption"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664298260459-b326e87aa2a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Yoga Mat Pro",
    brand: "ZenFlex",
    category: "Yoga",
    price: 59,
    features: ["Eco-Friendly", "Non-Slip", "Extra Thick"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726618574563-199fe67e0cc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    name: "Pull-Up Bar",
    brand: "IronCore",
    category: "Strength",
    price: 89,
    features: ["Doorway Mount", "Adjustable", "Steel Build"],
    rating: 3,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1664444389063-fe08357d688c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    name: "Resistance Band Set",
    brand: "FlexFit",
    category: "Strength",
    price: 39,
    features: ["Portable", "Durable", "Multi-Tension"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1747534891098-689e971d715d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
  },
  {
    id: 6,
    name: "Stationary Bike Elite",
    brand: "SpinMax",
    category: "Cardio",
    price: 899,
    features: ["Bluetooth", "LCD Display", "Silent Belt Drive"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1672280783700-58881fc43bc9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",
  },
  {
    id: 7,
    name: "Foam Roller XL",
    brand: "ZenFlex",
    category: "Recovery",
    price: 35,
    features: ["Extra Long", "Deep Tissue", "Lightweight"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726096575271-8d1bd5b64081?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
  },
  {
    id: 8,
    name: "Kettlebell Pro 20kg",
    brand: "IronCore",
    category: "Strength",
    price: 99,
    features: ["Ergonomic Grip", "Cast Iron", "Durable Coating"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663100764663-418395b1dd86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc2fHx8ZW58MHx8fHx8",
  },
  {
    id: 9,
    name: "Rowing Machine Pro",
    brand: "CardioKing",
    category: "Cardio",
    price: 1299,
    features: ["Water Resistance", "Compact", "Bluetooth"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1663100764663-418395b1dd86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc2fHx8ZW58MHx8fHx8",
  },
  // ✅ Additional 36 Products
  {
    id: 10,
    name: "Medicine Ball 10lb",
    brand: "FlexFit",
    category: "Strength",
    price: 45,
    features: ["Durable", "Non-Slip", "Compact"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666738346280-beabdff2c3c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8",
  },
  {
    id: 11,
    name: "Elliptical Trainer 7000",
    brand: "ProRun",
    category: "Cardio",
    price: 1500,
    features: ["Bluetooth", "LCD Display", "Silent Drive"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661574913674-74e268d7dbb3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
  },
  {
    id: 12,
    name: "Jump Rope Pro",
    brand: "ZenFlex",
    category: "Cardio",
    price: 20,
    features: ["Adjustable Length", "Lightweight", "Durable"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1725557640204-a65976aec6fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8",
  },
  {
    id: 13,
    name: "Power Rack 500",
    brand: "IronCore",
    category: "Strength",
    price: 799,
    features: ["Heavy Duty", "Adjustable", "Multi-Grip"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723924883368-dc8201e1deb6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 14,
    name: "Ab Roller Wheel",
    brand: "FitPro",
    category: "Strength",
    price: 25,
    features: ["Compact", "Durable", "Foam Handles"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663133833741-bccaafbe1b92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 15,
    name: "Battle Rope Heavy",
    brand: "FlexFit",
    category: "Strength",
    price: 99,
    features: ["Heavy Duty", "Non-Slip", "Durable"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1661400403030-1d7060c0f064?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkzfHx8ZW58MHx8fHx8",
  },
  {
    id: 16,
    name: "Bench Press Pro",
    brand: "IronCore",
    category: "Strength",
    price: 499,
    features: ["Incline", "Adjustable", "Sturdy"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664536968460-738ba488545e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
  },
  {
    id: 17,
    name: "Pilates Ring",
    brand: "ZenFlex",
    category: "Yoga",
    price: 30,
    features: ["Lightweight", "Foam Handles", "Compact"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664536968011-c16fad5fa3b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8",
  },
  {
    id: 18,
    name: "Speed Ladder",
    brand: "FlexFit",
    category: "Cardio",
    price: 29,
    features: ["Adjustable", "Portable", "Durable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666736569722-7f3efa99158f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Smith Machine 9000",
    brand: "IronCore",
    category: "Strength",
    price: 1599,
    features: ["Heavy Duty", "Safety Locks", "Adjustable"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1675155445906-50f27d953fe3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Spin Bike Pro",
    brand: "SpinMax",
    category: "Cardio",
    price: 1099,
    features: ["Bluetooth", "Silent Drive", "Sturdy"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661589404422-3e9b553f70e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    name: "Adjustable Weight Bench",
    brand: "FitPro",
    category: "Strength",
    price: 299,
    features: ["Incline/Decline", "Folding", "Ergonomic Design"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666736570530-c00d735936dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Hex Dumbbell Pair 10kg",
    brand: "IronCore",
    category: "Strength",
    price: 129,
    features: ["Rubber Coated", "Ergonomic Grip", "Durable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661548329699-ee93a03a2f22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    name: "Gymnastic Rings",
    brand: "FlexFit",
    category: "Strength",
    price: 45,
    features: ["Wooden", "Adjustable Straps", "Portable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1731222300629-0701d3160e1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    name: "Weighted Vest 20kg",
    brand: "IronCore",
    category: "Strength",
    price: 149,
    features: ["Adjustable Weight", "Breathable", "Secure Fit"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663134092526-73498f231c69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "Adjustable Aerobic Step",
    brand: "ZenFlex",
    category: "Cardio",
    price: 49,
    features: ["Height Adjustable", "Non-Slip", "Lightweight"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663133866815-9dfdf55f4572?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    name: "Resistance Loop Bands",
    brand: "FlexFit",
    category: "Strength",
    price: 25,
    features: ["Portable", "Multi-Tension", "Non-Slip"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661601953380-1638ddf23596?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    name: "Adjustable Barbell Set 50kg",
    brand: "IronCore",
    category: "Strength",
    price: 349,
    features: ["Cast Iron", "Secure Locks", "Durable"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1663045413653-232bb456c160?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Balance Board Trainer",
    brand: "ZenFlex",
    category: "Recovery",
    price: 59,
    features: ["Anti-Slip", "Wooden", "Compact"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663045413653-232bb456c160?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Plyometric Jump Box",
    brand: "FlexFit",
    category: "Cardio",
    price: 179,
    features: ["Adjustable Height", "Non-Slip", "Sturdy"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661953189229-0ba4ac196e4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    name: "Compact Home Gym Station",
    brand: "ProRun",
    category: "Strength",
    price: 1899,
    features: ["Multi-Function", "Heavy Duty", "Space Saving"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666736570009-76c9551729bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    name: "Pilates Ball 65cm",
    brand: "ZenFlex",
    category: "Yoga",
    price: 25,
    features: ["Anti-Burst", "Non-Slip", "Eco-Friendly"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1664536968450-c9a92f074ad6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 32,
    name: "Adjustable Squat Rack",
    brand: "IronCore",
    category: "Strength",
    price: 399,
    features: ["Height Adjustable", "Steel Build", "Compact"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663133836322-43afd7264093?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 33,
    name: "Rowing Machine Compact",
    brand: "CardioKing",
    category: "Cardio",
    price: 799,
    features: ["Magnetic Resistance", "Foldable", "LCD Display"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663036274274-8ba6f7174faa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    name: "Leg Press Machine",
    brand: "IronCore",
    category: "Strength",
    price: 1599,
    features: ["Heavy Duty", "Adjustable Seat", "Ergonomic"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1663134046007-c8553afa9453?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Grip Strength Trainer",
    brand: "FlexFit",
    category: "Strength",
    price: 15,
    features: ["Adjustable Resistance", "Compact", "Durable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666736570930-ec41a23bd378?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    name: "Weighted Jump Rope Pro",
    brand: "FitPro",
    category: "Cardio",
    price: 35,
    features: ["Weighted Handles", "Adjustable", "Durable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663133893433-e522b6372b0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Foam Yoga Block",
    brand: "ZenFlex",
    category: "Yoga",
    price: 12,
    features: ["Eco-Friendly", "Non-Slip", "Durable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663036276969-6abd2eb5c64d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    name: "Punching Bag Pro",
    brand: "IronCore",
    category: "Cardio",
    price: 179,
    features: ["Heavy Duty", "Leather", "Wall Mount"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1663099517082-deba57bed9e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    name: "Stepper Machine Compact",
    brand: "CardioKing",
    category: "Cardio",
    price: 129,
    features: ["LCD Monitor", "Compact", "Silent"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1666738345836-8045d12650e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    name: "Massage Gun Pro",
    brand: "ZenFlex",
    category: "Recovery",
    price: 199,
    features: ["Adjustable Speed", "Portable", "Rechargeable"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663012929531-910fb331826e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0NXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Wall-Mounted Pull-Up Bar",
    brand: "IronCore",
    category: "Strength",
    price: 129,
    features: ["Steel Frame", "Multi-Grip", "Compact"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661581826142-cd0f12a8338f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0N3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Adjustable Kettlebell",
    brand: "FitPro",
    category: "Strength",
    price: 149,
    features: ["Adjustable Plates", "Compact", "Ergonomic"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663036230162-750bd9e63817?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Resistance Bar System",
    brand: "FlexFit",
    category: "Strength",
    price: 79,
    features: ["Portable", "Adjustable", "Durable"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1672129881087-76646a57d517?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Foam Balance Cushion",
    brand: "ZenFlex",
    category: "Recovery",
    price: 39,
    features: ["Anti-Slip", "Durable", "Portable"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1566568531155-07244e00963d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxmaXRuZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 45,
    name: "Compact Treadmill Mini",
    brand: "ProRun",
    category: "Cardio",
    price: 499,
    features: ["Foldable", "Lightweight", "LED Display"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxmaXRuZXNzfGVufDB8fDB8fHww",
  },
{
  id: 46,
  name: "Adjustable Dip Station",
  brand: "IronCore",
  category: "Strength",
  price: 179,
  features: ["Height Adjustable", "Sturdy Steel", "Compact Design"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  id: 47,
  name: "TheraBand Resistance Tubes",
  brand: "FlexFit",
  category: "Strength",
  price: 29,
  features: ["Latex-Free", "Portable", "Multi-Resistance Levels"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1578619740917-93f6b3612a8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
},
{
  id: 48,
  name: "Adjustable Aerobic Bench",
  brand: "ZenFlex",
  category: "Cardio",
  price: 89,
  features: ["3-Level Height", "Anti-Slip Surface", "Lightweight"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1578619740917-93f6b3612a8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
},
{
  id: 49,
  name: "Compact Rowing Machine",
  brand: "CardioKing",
  category: "Cardio",
  price: 699,
  features: ["Magnetic Resistance", "LCD Monitor", "Folding Design"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664298084551-277444c16b1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
},
{
  id: 50,
  name: "Weighted Medicine Ball 8kg",
  brand: "FitPro",
  category: "Strength",
  price: 59,
  features: ["Textured Grip", "Durable Rubber", "Versatile Training"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1682531025463-5d5b8c8b23cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
},
{
  id: 51,
  name: "Adjustable Weighted Ankle Straps",
  brand: "FlexFit",
  category: "Cardio",
  price: 35,
  features: ["Secure Fit", "Adjustable Weight", "Comfort Padding"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1692369608023-a3822e070ee9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
},
{
  id: 52,
  name: "Yoga Wheel Pro",
  brand: "ZenFlex",
  category: "Yoga",
  price: 49,
  features: ["Non-Slip", "Eco-Friendly", "Supports 500 lbs"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
},
{
  id: 53,
  name: "Adjustable Power Tower",
  brand: "IronCore",
  category: "Strength",
  price: 299,
  features: ["Pull-Up Bar", "Dip Station", "Push-Up Handles"],
  rating: 5,
  stock: false,
  image: "https://plus.unsplash.com/premium_photo-1661700246745-36189c6d12a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
},
{
  id: 54,
  name: "Compact Under-Desk Bike",
  brand: "SpinMax",
  category: "Cardio",
  price: 179,
  features: ["Adjustable Resistance", "Silent Operation", "LCD Display"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1597452485677-d661670d9640?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
},
{
  id: 55,
  name: "Mini Resistance Band Pack",
  brand: "FlexFit",
  category: "Strength",
  price: 19,
  features: ["5 Resistance Levels", "Portable", "Durable Latex"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663036275037-413d2f634be7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
},
{
  id: 56,
  name: "Adjustable Barbell Curl Rack",
  brand: "IronCore",
  category: "Strength",
  price: 189,
  features: ["Ergonomic Design", "Height Adjustable", "Steel Build"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664910157921-9afe48d38b8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
},
{
  id: 57,
  name: "Yoga Bolster Cushion",
  brand: "ZenFlex",
  category: "Yoga",
  price: 45,
  features: ["Soft Cover", "Eco-Friendly Fill", "Portable"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1704223523321-7b0b44a1a0b9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
},
{
  id: 58,
  name: "Speed Jump Rope Elite",
  brand: "FitPro",
  category: "Cardio",
  price: 25,
  features: ["Ball Bearings", "Adjustable Cable", "Lightweight"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1671316149443-d722ef4f960d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
},
{
  id: 59,
  name: "Adjustable Dumbbell Pro 50lb",
  brand: "IronCore",
  category: "Strength",
  price: 399,
  features: ["Quick Change", "Compact", "Ergonomic Grip"],
  rating: 5,
  stock: false,
  image: "https://images.unsplash.com/photo-1532384555668-bc0c32a17ffd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
},
{
  id: 60,
  name: "Foam Roller Pro Grid",
  brand: "ZenFlex",
  category: "Recovery",
  price: 45,
  features: ["Textured Surface", "Lightweight", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1713800444752-4e155bf14bff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
},
{
  id: 61,
  name: "Core Sliders Set",
  brand: "FlexFit",
  category: "Strength",
  price: 19,
  features: ["Double-Sided", "Portable", "Durable"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1646072508214-b88d6b1677c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
},
{
  id: 62,
  name: "Adjustable Aerobic Platform",
  brand: "ZenFlex",
  category: "Cardio",
  price: 79,
  features: ["Non-Slip Surface", "Stackable", "Lightweight"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
},
{
  id: 63,
  name: "Heavy Duty Punching Bag Stand",
  brand: "IronCore",
  category: "Cardio",
  price: 249,
  features: ["Steel Frame", "Adjustable Height", "Stable Base"],
  rating: 5,
  stock: false,
  image: "https://plus.unsplash.com/premium_photo-1661700234501-56b4a5deec63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
},
{
  id: 64,
  name: "Yoga Strap Pro",
  brand: "ZenFlex",
  category: "Yoga",
  price: 15,
  features: ["Durable Cotton", "Metal D-Ring", "Adjustable Length"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1646072508794-3a8a4bb9b544?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
},
{
  id: 65,
  name: "Adjustable Weighted Jump Rope",
  brand: "FitPro",
  category: "Cardio",
  price: 35,
  features: ["Weighted Handles", "Adjustable Cable", "Comfort Grip"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663036348682-ab753bf624ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
},
{
  id: 66,
  name: "Smith Machine Combo",
  brand: "IronCore",
  category: "Strength",
  price: 1799,
  features: ["Heavy Duty", "Multiple Attachments", "Safety Locks"],
  rating: 5,
  stock: false,
  image: "https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
},
{
  id: 67,
  name: "Foam Yoga Roller Mini",
  brand: "ZenFlex",
  category: "Recovery",
  price: 25,
  features: ["Compact", "Textured", "Durable"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1704223523493-84c92ac51ad7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
},
{
  id: 68,
  name: "Wall Mounted Squat Rack",
  brand: "IronCore",
  category: "Strength",
  price: 299,
  features: ["Space Saving", "Adjustable J-Hooks", "Sturdy Design"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1646072507379-c6c9dca7de0c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
},
{
  id: 69,
  name: "Adjustable Stepper Machine",
  brand: "CardioKing",
  category: "Cardio",
  price: 229,
  features: ["Resistance Bands", "LCD Monitor", "Compact"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1585152969004-0fb794d6025e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
},
{
  id: 70,
  name: "Weighted Hula Hoop",
  brand: "FlexFit",
  category: "Cardio",
  price: 39,
  features: ["Adjustable Weight", "Soft Foam Padding", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  id: 71,
  name: "Ab Crunch Bench",
  brand: "FitPro",
  category: "Strength",
  price: 99,
  features: ["Folding Design", "Padded Support", "Adjustable Angle"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1671840016768-5834c0c01b92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
},
{
  id: 72,
  name: "Pilates Resistance Bar Kit",
  brand: "ZenFlex",
  category: "Yoga",
  price: 49,
  features: ["Portable", "Elastic Bands", "Durable Bar"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1661281312944-60e54d1dc031?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
},
{
  id: 73,
  name: "Wrist & Ankle Weight Set",
  brand: "FlexFit",
  category: "Strength",
  price: 29,
  features: ["Adjustable Straps", "Comfort Padding", "Secure Fit"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664304106292-ef7e34f74dc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
},
{
  id: 74,
  name: "Battle Rope Elite",
  brand: "IronCore",
  category: "Strength",
  price: 119,
  features: ["Heavy Duty", "Durable Coating", "Non-Slip Grip"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1723921356647-2a3c6b6016c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
},
{
  id: 75,
  name: "Compact Elliptical Trainer",
  brand: "ProRun",
  category: "Cardio",
  price: 599,
  features: ["Silent Drive", "LCD Monitor", "Compact Design"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663012929531-910fb331826e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
},
{
  id: 76,
  name: "Resistance Tube Door Anchor Kit",
  brand: "FlexFit",
  category: "Strength",
  price: 35,
  features: ["Door Anchor", "Handles Included", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663134307358-d614d8a53c29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
},
{
  id: 77,
  name: "Smart Jump Rope Digital",
  brand: "FitPro",
  category: "Cardio",
  price: 45,
  features: ["Digital Counter", "Bluetooth", "Adjustable Length"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663133852597-71743cdc6767?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
},
{
  id: 78,
  name: "Kettlebell Rack Stand",
  brand: "IronCore",
  category: "Strength",
  price: 149,
  features: ["3-Tier", "Heavy Duty", "Space Saving"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663100764663-418395b1dd86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
},
{
  id: 79,
  name: "Foam Stretching Mat",
  brand: "ZenFlex",
  category: "Yoga",
  price: 35,
  features: ["Eco-Friendly", "Non-Toxic", "Extra Thick"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664536967796-c00b4fb4fcff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
},
{
  id: 80,
  name: "Wall Mounted Barbell Holder",
  brand: "IronCore",
  category: "Strength",
  price: 59,
  features: ["Steel Build", "Anti-Slip Coating", "Compact Design"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1661772818985-d68c84975dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
},
{
  id: 81,
  name: "Adjustable Step Platform",
  brand: "FlexFit",
  category: "Cardio",
  price: 65,
  features: ["Height Adjustable", "Non-Slip Surface", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1670505059783-806c0708bb31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
},
{
  id: 82,
  name: "Grip Strength Power Ball",
  brand: "FlexFit",
  category: "Strength",
  price: 25,
  features: ["Self-Rotating", "Compact", "Durable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663036276969-6abd2eb5c64d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
},
{
  id: 83,
  name: "Compact Spin Bike",
  brand: "SpinMax",
  category: "Cardio",
  price: 799,
  features: ["Silent Drive", "LCD Monitor", "Resistance Control"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663036230162-750bd9e63817?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
},
{
  id: 84,
  name: "Adjustable Sit-Up Bench",
  brand: "IronCore",
  category: "Strength",
  price: 149,
  features: ["Incline Adjustable", "Padded Cushion", "Folding"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1753476399620-d0672448550a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
},
{
  id: 85,
  name: "Foam Massage Ball Set",
  brand: "ZenFlex",
  category: "Recovery",
  price: 29,
  features: ["3 Sizes", "Non-Slip", "Durable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664298355914-bc65d2c9af64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
},
{
  id: 86,
  name: "Adjustable Barbell Weight Rack",
  brand: "IronCore",
  category: "Strength",
  price: 199,
  features: ["Heavy Duty", "Compact", "Stable Base"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663036274274-8ba6f7174faa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
},
{
  id: 87,
  name: "Portable Rowing Straps Kit",
  brand: "FlexFit",
  category: "Cardio",
  price: 39,
  features: ["Adjustable Resistance", "Compact", "Travel-Friendly"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663134097061-e59c97e939c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
},
{
  id: 88,
  name: "Smart Yoga Mat",
  brand: "ZenFlex",
  category: "Yoga",
  price: 129,
  features: ["Bluetooth Sensor", "Non-Slip", "Eco-Friendly"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663133533310-f3daf82d6c1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
},
{
  id: 89,
  name: "Barbell Pad Pro",
  brand: "IronCore",
  category: "Strength",
  price: 25,
  features: ["Thick Foam", "Non-Slip", "Universal Fit"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663133833741-bccaafbe1b92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
},
{
  id: 90,
  name: "Adjustable Aerobic Combo Kit",
  brand: "FlexFit",
  category: "Cardio",
  price: 89,
  features: ["Step Platform", "Resistance Bands", "Lightweight"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1663076199021-85f5b8347c08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
},
{
  id: 91,
  name: "Compact Hand Grip Set",
  brand: "FitPro",
  category: "Strength",
  price: 22,
  features: ["Adjustable Resistance", "Ergonomic Design", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1723676418347-24593e8f0dba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8",
},
{
  id: 92,
  name: "Under Desk Elliptical",
  brand: "CardioKing",
  category: "Cardio",
  price: 259,
  features: ["LCD Monitor", "Silent Drive", "Compact Design"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1726862769772-dc8c33d980a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
},
{
  id: 93,
  name: "Foam Pilates Ring",
  brand: "ZenFlex",
  category: "Yoga",
  price: 32,
  features: ["Comfort Grips", "Lightweight", "Durable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1661963869671-b11c70e16e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
},
{
  id: 94,
  name: "Weighted Sandbag Trainer",
  brand: "IronCore",
  category: "Strength",
  price: 99,
  features: ["Adjustable Weight", "Durable Fabric", "Secure Handles"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1661536823375-eab2e7a58349?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8",
},
{
  id: 95,
  name: "Compact Vibration Plate",
  brand: "FlexFit",
  category: "Cardio",
  price: 189,
  features: ["Adjustable Intensity", "Remote Control", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1723899614031-65938585c39a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
},
{
  id: 96,
  name: "Yoga Knee Pads",
  brand: "ZenFlex",
  category: "Yoga",
  price: 15,
  features: ["Non-Slip", "Cushioned", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664536967979-7d72564bfe57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
},
{
  id: 97,
  name: "Adjustable Pull-Up Assist Bands",
  brand: "FlexFit",
  category: "Strength",
  price: 35,
  features: ["Multi-Tension", "Durable", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1666736570009-76c9551729bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8",
},
{
  id: 98,
  name: "Portable Pedal Exerciser",
  brand: "CardioKing",
  category: "Cardio",
  price: 89,
  features: ["LCD Monitor", "Resistance Control", "Compact Design"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1664300939514-04cdd61608d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8",
},
{
  id: 99,
  name: "Weighted Balance Disc",
  brand: "ZenFlex",
  category: "Recovery",
  price: 29,
  features: ["Anti-Burst", "Non-Slip Surface", "Portable"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1666736569690-51bb577ae55b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8",
},
];

const FitnessFeaturedDeals = () => {
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
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
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
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full   transition-shadow duration-300"
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
                    <span className="absolute top-2 right-2 bg-amber-700 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <p className="text-sm text-gray-700 mb-1 font-medium">Brand: {deal.brand}</p>

                    {/* Features */}
                    <ul className="text-xs text-amber-500 mb-3 list-disc list-inside">
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
                            i < deal.rating ? "text-amber-600" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price & Stock */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-amber-600">${deal.price}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          deal.stock
                            ? "bg-amber-600 text-black hover:bg-amber-500"
                            : "bg-white text-gray-600 cursor-not-allowed"
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
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FitnessFeaturedDeals;
