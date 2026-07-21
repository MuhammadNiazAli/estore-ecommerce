"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
 {
    id: 1,
    name: "Elegant Monstera Deliciosa",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 79,
    features: ["Air Purifying", "Large Leaves", "Low Maintenance"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1639756533798-28c14d5e46db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    name: "Succulent Mixed Pot",
    brand: "Nature's Touch",
    category: "Succulents",
    price: 35,
    features: ["Drought Resistant", "Compact", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1512428735642-908dea4257ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig Tree",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 129,
    features: ["Statement Plant", "Air Purifying", "Medium Light"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1669905375098-966bddfedaea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    name: "Bamboo Palm",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 69,
    features: ["Low Light", "Air Purifying", "Pet Friendly"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669905375207-a52d12106d46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    name: "Orchid in Ceramic Pot",
    brand: "Nature's Touch",
    category: "Flowering Plant",
    price: 89,
    features: ["Elegant Flowers", "Bright Indirect Light", "Medium Water"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723662215441-39ad8a06ef20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 6,
    name: "Snake Plant",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 45,
    features: ["Air Purifying", "Low Maintenance", "Tolerant"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669905375318-87c4050418cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 7,
    name: "Aloe Vera Plant",
    brand: "GreenScape",
    category: "Succulents",
    price: 25,
    features: ["Healing Properties", "Easy Care", "Sun Loving"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673712238673-b247972fcc78?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 8,
    name: "Potted Lavender",
    brand: "Nature's Touch",
    category: "Flowering Plant",
    price: 59,
    features: ["Fragrant", "Attracts Bees", "Full Sun"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669905375086-a7ee33434457?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 9,
    name: "Herb Garden Kit",
    brand: "Urban Jungle",
    category: "Herbs",
    price: 39,
    features: ["Organic Seeds", "Easy to Grow", "Indoor/Outdoor"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1726848105089-9c1e11495638?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 10,
    name: "Peace Lily",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 55,
    features: ["Air Purifying", "White Flowers", "Low Light"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1672218147368-332ba9c1386e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 11,
    name: "ZZ Plant",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 48,
    features: ["Drought Tolerant", "Low Light", "Glossy Leaves"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1722038414496-27b905382a4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 12,
    name: "Calathea Orbifolia",
    brand: "Nature's Touch",
    category: "Indoor Plant",
    price: 64,
    features: ["Decorative Leaves", "Shade Loving", "Non-Toxic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1680630202094-cd15c8314657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 13,
    name: "Boston Fern",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 42,
    features: ["Air Purifying", "Humidity Loving", "Lush Foliage"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673712238721-783aac38de2e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 14,
    name: "Chinese Evergreen",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 38,
    features: ["Shade Tolerant", "Air Purifying", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1668416065881-41ac5e406759?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
  {
    id: 15,
    name: "Jade Plant",
    brand: "Nature's Touch",
    category: "Succulents",
    price: 29,
    features: ["Drought Resistant", "Easy to Propagate", "Long-Lived"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1683121181519-aeaea57f225b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
  {
    id: 16,
    name: "Rubber Plant",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 72,
    features: ["Large Leaves", "Air Purifying", "Medium Light"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669869961621-66258696a46c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    id: 17,
    name: "Cactus Assortment",
    brand: "Urban Jungle",
    category: "Succulents",
    price: 22,
    features: ["Low Water Needs", "Decorative", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661895419885-07825c64767d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    id: 18,
    name: "Bird of Paradise",
    brand: "Nature's Touch",
    category: "Indoor Plant",
    price: 135,
    features: ["Large Leaves", "Tropical Look", "Bright Light"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1673969608352-ec2d84279614?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  },
  {
    id: 19,
    name: "Spider Plant",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 28,
    features: ["Air Purifying", "Pet Friendly", "Easy to Grow"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  },
  {
    id: 20,
    name: "Money Tree",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 85,
    features: ["Good Luck Plant", "Air Purifying", "Easy Care"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1668780538108-a097b10a918a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 21,
    name: "African Violet",
    brand: "Nature's Touch",
    category: "Flowering Plant",
    price: 38,
    features: ["Bright Flowers", "Low Light", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
  },
  {
    id: 22,
    name: "Lavender Bush",
    brand: "GreenScape",
    category: "Flowering Plant",
    price: 55,
    features: ["Fragrant", "Attracts Bees", "Full Sun"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1707242994810-eb448d8ddbe8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
  },
  {
    id: 23,
    name: "Gardenia",
    brand: "Urban Jungle",
    category: "Flowering Plant",
    price: 65,
    features: ["Fragrant", "Glossy Leaves", "Bright Light"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1674646022475-0ad6da80b60c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
  },
  {
    id: 24,
    name: "Daisy Pot",
    brand: "Nature's Touch",
    category: "Flowering Plant",
    price: 30,
    features: ["Bright Flowers", "Easy to Grow", "Sun Loving"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1672998563388-5976b020f4a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
  },
  {
    id: 25,
    name: "Rosemary Herb Pot",
    brand: "GreenScape",
    category: "Herbs",
    price: 22,
    features: ["Fragrant", "Cooking Herb", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673064926981-a7ebef0fbd27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },
  {
    id: 26,
    name: "Jasmine Plant",
    brand: "Urban Jungle",
    category: "Flowering Plant",
    price: 60,
    features: ["Fragrant", "Climbing", "Bright Light"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669243451680-c318522b9949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 27,
    name: "Mint Herb Pot",
    brand: "Nature's Touch",
    category: "Herbs",
    price: 18,
    features: ["Refreshing Scent", "Easy to Grow", "Indoor/Outdoor"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669243451680-c318522b9949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 28,
    name: "Geranium Flower Pot",
    brand: "GreenScape",
    category: "Flowering Plant",
    price: 34,
    features: ["Bright Flowers", "Low Maintenance", "Sun Loving"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673468196436-6257c32656c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
  },
  {
    id: 29,
    name: "Eucalyptus Plant",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 58,
    features: ["Fragrant Leaves", "Air Purifying", "Full Sun"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669905375532-5a1fd0e94efb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  },
  {
    id: 30,
    name: "Cilantro Herb Pot",
    brand: "Nature's Touch",
    category: "Herbs",
    price: 20,
    features: ["Culinary Herb", "Fast Growing", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1674237294437-01239c443bed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  },
  {
    id: 31,
    name: "Garden Cactus",
    brand: "GreenScape",
    category: "Succulents",
    price: 27,
    features: ["Low Water Needs", "Decorative", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1674237294437-01239c443bed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  },
  {
    id: 32,
    name: "Bonsai Tree",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 110,
    features: ["Miniature Tree", "Meditative", "Decorative"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720420054218-bffbaed7da0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
  },
  {
    id: 33,
    name: "Cypress Plant",
    brand: "Nature's Touch",
    category: "Indoor Plant",
    price: 65,
    features: ["Evergreen", "Air Purifying", "Medium Light"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1676117273990-aa8dd5a579d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
  },
  {
    id: 34,
    name: "Hibiscus Flower Pot",
    brand: "GreenScape",
    category: "Flowering Plant",
    price: 75,
    features: ["Bright Flowers", "Sun Loving", "Tropical"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1676117273990-aa8dd5a579d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
  },
  {
    id: 35,
    name: "Sage Herb Pot",
    brand: "Urban Jungle",
    category: "Herbs",
    price: 22,
    features: ["Aromatic", "Cooking Herb", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669905375141-e85ed335320a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
  },
  {
    id: 36,
    name: "Azalea Flower Pot",
    brand: "Nature's Touch",
    category: "Flowering Plant",
    price: 49,
    features: ["Bright Flowers", "Shade Loving", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673814841195-c1304884f9c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
  },
  {
    id: 37,
    name: "Philodendron Plant",
    brand: "GreenScape",
    category: "Indoor Plant",
    price: 70,
    features: ["Air Purifying", "Trailing", "Low Maintenance"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1674645858890-06e51817c265?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
  },
  {
    id: 38,
    name: "Thyme Herb Pot",
    brand: "Urban Jungle",
    category: "Herbs",
    price: 19,
    features: ["Culinary Herb", "Drought Resistant", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1676117273924-dd09d364b66d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },
  {
    id: 39,
    name: "Kalanchoe Flower Pot",
    brand: "Nature's Touch",
    category: "Succulents",
    price: 33,
    features: ["Bright Flowers", "Easy Care", "Indoor Plant"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681807326608-ff8af57d796a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
  },
  {
    id: 40,
    name: "Ornamental Grass Pot",
    brand: "GreenScape",
    category: "Outdoor Plant",
    price: 41,
    features: ["Low Maintenance", "Wind Resistant", "Decorative"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1680630201319-a028d6b84cf3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    id: 41,
    name: "Tulip Bulbs Pack",
    brand: "Urban Jungle",
    category: "Flowering Plant",
    price: 28,
    features: ["Seasonal Blooms", "Colorful Flowers", "Easy Planting"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1680630201319-a028d6b84cf3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    id: 42,
    name: "Magnolia Tree",
    brand: "Nature's Touch",
    category: "Outdoor Plant",
    price: 145,
    features: ["Large Flowers", "Shade Tolerant", "Fragrant"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
  },
  {
    id: 43,
    name: "Cherry Blossom Tree",
    brand: "GreenScape",
    category: "Outdoor Plant",
    price: 170,
    features: ["Seasonal Blooms", "Ornamental", "Fragrant"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669148911895-a95de51d09ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
  },
  {
    id: 44,
    name: "Rose Pot",
    brand: "Urban Jungle",
    category: "Flowering Plant",
    price: 38,
    features: ["Fragrant Flowers", "Bright Sunlight", "Easy Care"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1711051512519-1116a434bbde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
  },
  {
    id: 45,
    name: "Lemon Tree",
    brand: "Nature's Touch",
    category: "Outdoor Plant",
    price: 120,
    features: ["Fruit Bearing", "Full Sun", "Drought Resistant"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1676654936547-976f37b66c0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
  },
  {
    id: 46,
    name: "Mint Bush",
    brand: "GreenScape",
    category: "Herbs",
    price: 18,
    features: ["Fragrant", "Easy to Grow", "Versatile"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661331747673-cfdb17f5204c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
  },
  {
    id: 47,
    name: "Sago Palm",
    brand: "Urban Jungle",
    category: "Indoor Plant",
    price: 80,
    features: ["Tropical", "Low Light", "Decorative"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670344901637-7fe5e9431ab9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
  },
  {
    id: 48,
    name: "Camellia",
    brand: "Nature's Touch",
    category: "Flowering Plant",
    price: 68,
    features: ["Bright Flowers", "Shade Loving", "Glossy Leaves"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1677597801950-810d6b82445a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
];

const BeautyPagination = () => {
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
                  <p className="text-red-500 line-through text-sm">
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
                    ? "bg-white text-gray-900 border border-amber-50"
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
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
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

export default BeautyPagination;
