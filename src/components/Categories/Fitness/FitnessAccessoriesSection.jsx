"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
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
];

const FitnessAccessoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleAccessories = accessories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(accessories.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-4 my-[-30px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Fitness Accessories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleAccessories.map(({ id, name, price, rating, image }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg border border-yellow-500 flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_15px_3px_rgba(202,138,4,0.7)]"
              style={{ willChange: "transform, box-shadow" }}
            >
              {/* Image */}
              <img
                src={image}
                alt={name}
                className="rounded-t-lg w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-600" />
                    )
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xl font-bold">{price}</p>

                  <button
                    aria-label={`Add ${name} to cart`}
                    className="bg-yellow-500 text-gray-900 p-2 rounded-md hover:bg-yellow-400 transition"
                  >
                    <FaCartPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < accessories.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FitnessAccessoriesSection;
