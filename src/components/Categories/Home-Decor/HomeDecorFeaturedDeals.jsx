"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const featuredDeals = [
  {
    id: 1,
    name: "Elegant Vase Set",
    brand: "DecoraHome",
    category: "Vases",
    price: 49,
    features: ["Ceramic", "Matte Finish", "Hand Painted"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1665655277264-2e365eb4049a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Wooden Coffee Table",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 299,
    features: ["Solid Wood", "Modern Design", "Eco Friendly"],
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1665655277264-2e365eb4049a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Abstract Wall Art",
    brand: "Artify",
    category: "Wall Decor",
    price: 89,
    features: ["Canvas Print", "Vibrant Colors", "Ready to Hang"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681558314333-fb036f1df542?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    name: "Cozy Throw Blanket",
    brand: "SoftNest",
    category: "Textiles",
    price: 59,
    features: ["Fleece", "Warm", "Machine Washable"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681558314333-fb036f1df542?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    name: "Modern Floor Lamp",
    brand: "LightHaus",
    category: "Lighting",
    price: 149,
    features: ["LED", "Adjustable Brightness", "Sleek Design"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1612022565287-136b9c669781?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
  },
  {
    id: 6,
    name: "Decorative Cushions Set",
    brand: "CushionCo",
    category: "Textiles",
    price: 39,
    features: ["Soft Fabric", "Colorful", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748975026989-bb6327dfcd83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
  },
  // New 44 products below
  {
    id: 7,
    name: "Rustic Wall Clock",
    brand: "Timely",
    category: "Wall Decor",
    price: 75,
    features: ["Wooden Frame", "Silent Movement", "Vintage Style"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1691380302791-7a0be56f28fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 8,
    name: "Marble Table Lamp",
    brand: "LightHaus",
    category: "Lighting",
    price: 179,
    features: ["Marble Base", "LED Bulb", "Modern"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1691380302791-7a0be56f28fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 9,
    name: "Indoor Plant Set",
    brand: "GreenLife",
    category: "Plants",
    price: 89,
    features: ["Succulents", "Self-Watering", "Decorative Pots"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1691380302791-7a0be56f28fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 10,
    name: "Mid-Century Modern Chair",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 249,
    features: ["Ergonomic", "Wooden Legs", "Fabric Upholstery"],
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1691380302791-7a0be56f28fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 11,
    name: "Geometric Wall Shelves",
    brand: "DecoraHome",
    category: "Wall Decor",
    price: 69,
    features: ["Metal Frame", "Floating Shelves", "Easy Installation"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1691380302791-7a0be56f28fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 12,
    name: "Textured Throw Pillow",
    brand: "CushionCo",
    category: "Textiles",
    price: 29,
    features: ["Soft", "Durable", "Hypoallergenic"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1663144256992-6b69263cc521?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8",
  },
  {
    id: 13,
    name: "Glass Coffee Table",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 329,
    features: ["Tempered Glass", "Steel Legs", "Modern Design"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
  },
  {
    id: 14,
    name: "Vintage Area Rug",
    brand: "SoftNest",
    category: "Textiles",
    price: 119,
    features: ["Wool", "Handwoven", "Boho Style"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1680799222840-348e4f2170b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
  },
  {
    id: 15,
    name: "Ceramic Plant Pot",
    brand: "GreenLife",
    category: "Plants",
    price: 25,
    features: ["Glazed Finish", "Drainage Hole", "Eco Friendly"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1718049719671-3c0a592ac8c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
  },
  {
    id: 16,
    name: "Wall Mirror Round",
    brand: "DecoraHome",
    category: "Wall Decor",
    price: 89,
    features: ["Metal Frame", "Anti-fog", "Easy Mount"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1552406475-acece2e1979d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcwfHx8ZW58MHx8fHx8",
  },
  {
    id: 17,
    name: "Adjustable Floor Lamp",
    brand: "LightHaus",
    category: "Lighting",
    price: 129,
    features: ["Flexible Neck", "LED Bulb", "Matte Black"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681449856616-ecb8fd072a8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
  },
  {
    id: 18,
    name: "Macrame Wall Hanging",
    brand: "Artify",
    category: "Wall Decor",
    price: 59,
    features: ["Cotton Rope", "Handmade", "Bohemian Style"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1737093841293-3b4588b8c844?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",
  },
  {
    id: 19,
    name: "Leather Ottoman",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 199,
    features: ["Genuine Leather", "Storage Space", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1551907234-fb773fb08a2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
  },
  {
    id: 20,
    name: "Decorative Lantern Set",
    brand: "LightHaus",
    category: "Lighting",
    price: 79,
    features: ["Metal", "Glass Panels", "LED Candles"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
  },
  {
    id: 21,
    name: "Minimalist Bookshelf",
    brand: "DecoraHome",
    category: "Furniture",
    price: 349,
    features: ["Metal Frame", "Wooden Shelves", "Industrial Style"],
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
  },
  {
    id: 22,
    name: "Velvet Sofa Cushion",
    brand: "CushionCo",
    category: "Textiles",
    price: 49,
    features: ["Velvet Fabric", "Soft", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
  },
  {
    id: 23,
    name: "Hanging Planter Basket",
    brand: "GreenLife",
    category: "Plants",
    price: 35,
    features: ["Woven", "Self-Watering", "Natural Fibers"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
  },
  {
    id: 24,
    name: "Vintage Candle Holder",
    brand: "LightHaus",
    category: "Lighting",
    price: 29,
    features: ["Metal", "Antique Finish", "Decorative"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
  },
  {
    id: 25,
    name: "Woven Storage Basket",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 59,
    features: ["Natural Fibers", "Lightweight", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682510027446-78cb5053370b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
  },
  {
    id: 26,
    name: "Rustic Picture Frame",
    brand: "DecoraHome",
    category: "Wall Decor",
    price: 25,
    features: ["Wooden", "Handmade", "Distressed Finish"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682510027446-78cb5053370b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
  },
  {
    id: 27,
    name: "Soft Wool Rug",
    brand: "SoftNest",
    category: "Textiles",
    price: 129,
    features: ["Wool", "Handwoven", "Soft Texture"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682685341417-5e919fb25952?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8",
  },
  {
    id: 28,
    name: "Ceramic Table Lamp",
    brand: "LightHaus",
    category: "Lighting",
    price: 99,
    features: ["Ceramic Base", "LED Bulb", "Compact"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1733774669529-420fd738c0c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 29,
    name: "Indoor Fern Plant",
    brand: "GreenLife",
    category: "Plants",
    price: 45,
    features: ["Air Purifying", "Easy Care", "Decorative Pot"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1733774669529-420fd738c0c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 30,
    name: "Modern TV Stand",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 399,
    features: ["Wood & Metal", "Cable Management", "Spacious"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1669812541887-0b4a58b6ffff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 31,
    name: "Decorative Wall Hooks",
    brand: "DecoraHome",
    category: "Wall Decor",
    price: 29,
    features: ["Metal", "Vintage Style", "Rust Resistant"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669812541887-0b4a58b6ffff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 32,
    name: "Cotton Throw Blanket",
    brand: "SoftNest",
    category: "Textiles",
    price: 69,
    features: ["Soft Cotton", "Machine Washable", "Lightweight"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669812541887-0b4a58b6ffff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 33,
    name: "Hanging Pendant Light",
    brand: "LightHaus",
    category: "Lighting",
    price: 159,
    features: ["LED Bulb", "Adjustable Height", "Modern Design"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1750306955715-85fdf631bd0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
  },
  {
    id: 34,
    name: "Succulent Plant Trio",
    brand: "GreenLife",
    category: "Plants",
    price: 55,
    features: ["Low Maintenance", "Decorative Pots", "Set of 3"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1695305098031-3e232072f66d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk0fHx8ZW58MHx8fHx8",
  },
  {
    id: 35,
    name: "Fabric Dining Chairs",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 199,
    features: ["Fabric Upholstery", "Ergonomic", "Modern Look"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1737711732150-5f337b62f56e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8",
  },
  {
    id: 36,
    name: "Decorative Wall Panels",
    brand: "DecoraHome",
    category: "Wall Decor",
    price: 99,
    features: ["3D Design", "Easy Installation", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748975026839-e68da17878b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8",
  },
  {
    id: 37,
    name: "Knitted Throw Blanket",
    brand: "SoftNest",
    category: "Textiles",
    price: 79,
    features: ["Handmade", "Soft Wool", "Warm"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748975026839-e68da17878b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8",
  },
  {
    id: 38,
    name: "Tabletop Fountain",
    brand: "ZenDecor",
    category: "Decorative",
    price: 129,
    features: ["Ceramic", "Soothing Sound", "LED Light"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8",
  },
  {
    id: 39,
    name: "LED Strip Lights",
    brand: "LightHaus",
    category: "Lighting",
    price: 45,
    features: ["Remote Controlled", "Color Changing", "Flexible"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1537384901770-4dc15e7ae013?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk5fHx8ZW58MHx8fHx8",
  },
  {
    id: 40,
    name: "Modern Wall Clock",
    brand: "Timely",
    category: "Wall Decor",
    price: 79,
    features: ["Silent", "Metal Frame", "Minimalist"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748629760586-a5037c2bb89e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Wicker Storage Basket",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 69,
    features: ["Lightweight", "Natural Fibers", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1748629760586-a5037c2bb89e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Soft Faux Fur Rug",
    brand: "SoftNest",
    category: "Textiles",
    price: 149,
    features: ["Faux Fur", "Warm", "Machine Washable"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1666603012208-340170e94be0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Decorative Wall Clock",
    brand: "Timely",
    category: "Wall Decor",
    price: 79,
    features: ["Metal Frame", "Silent Movement", "Vintage Style"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1716408229541-b5667fae1c79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Adjustable Desk Lamp",
    brand: "LightHaus",
    category: "Lighting",
    price: 99,
    features: ["LED", "Flexible Arm", "Matte Black"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1631609571817-168bac4ff61a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    name: "Ceramic Wall Vase",
    brand: "DecoraHome",
    category: "Vases",
    price: 45,
    features: ["Hand Painted", "Matte Finish", "Wall Mounted"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1631609571817-168bac4ff61a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    name: "Indoor Bamboo Plant",
    brand: "GreenLife",
    category: "Plants",
    price: 35,
    features: ["Air Purifying", "Easy Care", "Eco Friendly"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1631609571817-168bac4ff61a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    name: "Wooden Side Table",
    brand: "UrbanCraft",
    category: "Furniture",
    price: 199,
    features: ["Solid Wood", "Compact", "Modern Style"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1604584908836-4bd22650e641?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    name: "Handwoven Wall Basket",
    brand: "DecoraHome",
    category: "Wall Decor",
    price: 59,
    features: ["Natural Fibers", "Handmade", "Decorative"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1555871856-58ecdb804499?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeDecorFeaturedDeals = () => {
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

export default HomeDecorFeaturedDeals;
