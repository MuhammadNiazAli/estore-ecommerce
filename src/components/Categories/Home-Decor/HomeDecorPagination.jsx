"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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
  {
    id: 49,
    name: "Cozy Knit Throw",
    brand: "SoftNest",
    category: "Textiles",
    price: 79,
    features: ["Handmade", "Warm", "Soft Wool"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1750306955844-b11d2e9c74c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 50,
    name: "Minimalist Floor Vase",
    brand: "DecoraHome",
    category: "Vases",
    price: 69,
    features: ["Ceramic", "Matte Finish", "Modern Design"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1750306955844-b11d2e9c74c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 51,
    name: "Pro Gaming Keyboard XL",
    brand: "KeyPro",
    category: "Peripherals",
    price: 159,
    features: ["RGB Lighting", "Mechanical Switches", "Wrist Rest"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720806036601-5d4173aa638d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 52,
    name: "Wireless Gaming Mouse Ultra",
    brand: "ClickFast",
    category: "Peripherals",
    price: 99,
    features: ["Adjustable DPI", "Bluetooth 5.0", "Ergonomic"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1731535536703-7ec9e7c4cb5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
  },
  {
    id: 53,
    name: "4K Gaming Monitor Pro",
    brand: "ScreenMax",
    category: "Display",
    price: 899,
    features: ["3840x2160", "144Hz", "G-Sync"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1739054760972-a65a3fe8e639?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },
  {
    id: 54,
    name: "RGB Backlit Gaming Chair",
    brand: "ComfortZone",
    category: "Furniture",
    price: 279,
    features: ["Adjustable Height", "Lumbar Support", "RGB Lighting"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1720983571850-26fc90a0e9c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
  },
  {
    id: 55,
    name: "Gaming Controller Wireless X",
    brand: "ProPad",
    category: "Controllers",
    price: 89,
    features: ["Bluetooth", "Rechargeable", "Programmable Buttons"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1738614647398-25bd0bfba344?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 56,
    name: "High Performance Gaming Router",
    brand: "NetGear",
    category: "Networking",
    price: 249,
    features: ["Low Latency", "Dual Band", "QoS Support"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1723058789381-ed8742ec29dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  },
];

const HomeDecorPagination = () => {
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
                    ? "bg-white text-gray-900 border border-amber-50"
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

export default HomeDecorPagination;
