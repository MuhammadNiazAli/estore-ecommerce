"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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
];

const FitnessPagination = () => {
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
    <section className="w-full bg-gray-900 py-10 my-[-60px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50">
            Explore Our Fitness Gear
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
                  <p className="text-red-500 line-through text-sm">
                    ${item.oldPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-4 bg-gray-900 rounded-lg">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
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
                    ? "bg-gray-950 text-white border border-amber-50"
                    : "bg-white text-gray-700 hover:bg-gray-100"
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
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
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

export default FitnessPagination;
