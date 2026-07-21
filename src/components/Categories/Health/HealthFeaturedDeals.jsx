"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample health products data - aap apni puri list yahan add kar sakte hain
const healthData = [
  {
    id: 1,
    name: "Organic Multivitamin Tablets",
    brand: "NutriLife",
    category: "Supplements",
    price: 25,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boost Immunity", "All-Natural", "No Artificial Colors"],
  },
  {
    id: 2,
    name: "Whey Protein Powder (1kg)",
    brand: "FitFuel",
    category: "Protein",
    price: 45,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    features: ["High Protein", "Low Sugar", "Gluten-Free"],
  },
  {
    id: 3,
    name: "Herbal Green Tea (Pack of 100)",
    brand: "NatureSip",
    category: "Beverage",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    features: ["Detox", "Rich in Antioxidants", "Natural Flavor"],
  },
  {
    id: 4,
    name: "Electrolyte Hydration Mix",
    brand: "HydroBoost",
    category: "Drinks",
    price: 12,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1685997179861-6bf40eaa0c52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    features: ["Fast Hydration", "Low Calorie", "No Added Sugar"],
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil Capsules",
    brand: "HealthPlus",
    category: "Supplements",
    price: 30,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661405471329-8c648eb6531f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    features: ["Supports Heart Health", "High EPA/DHA", "No Fishy Aftertaste"],
  },
  {
    id: 6,
    name: "Plant-Based Protein Bar (12 Pack)",
    brand: "GreenFuel",
    category: "Snacks",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1583241800518-8aec2693fe53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    features: ["Vegan", "High Fiber", "Delicious Taste"],
  },
  {
    id: 7,
    name: "Vitamin C Effervescent Tablets",
    brand: "BoostWell",
    category: "Supplements",
    price: 15,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1646082275130-347d10885c5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    features: ["Immunity Support", "Quick Absorption", "Refreshing Taste"],
  },
  {
    id: 8,
    name: "Almond Protein Smoothie Mix",
    brand: "NutriShake",
    category: "Protein",
    price: 35,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1666886573215-b59d8ad9970c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    features: ["Dairy-Free", "Rich in Fiber", "Natural Sweetener"],
  },
  {
    id: 9,
    name: "Organic Chia Seeds (500g)",
    brand: "NatureSip",
    category: "Superfoods",
    price: 10,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1726804955472-4c6cf7c59791?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
    features: ["High Omega-3", "Gluten-Free", "Rich in Fiber"],
  },
  {
    id: 10,
    name: "Collagen Peptides Powder",
    brand: "SkinBoost",
    category: "Supplements",
    price: 40,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1624716346716-303904799c92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
    features: ["Supports Skin Health", "Dissolves Easily", "Unflavored"],
  },
  {
    id: 11,
    name: "Apple Cider Vinegar Gummies",
    brand: "DetoxPlus",
    category: "Supplements",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1709560425798-d9bb56dff78b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boosts Metabolism", "Tasty Gummies", "Supports Digestion"],
  },
  {
    id: 12,
    name: "Turmeric Curcumin Capsules",
    brand: "HerbalCare",
    category: "Supplements",
    price: 28,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670793332176-9e86e6045bf0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    features: ["Anti-Inflammatory", "Joint Support", "With Black Pepper"],
  },
  {
    id: 13,
    name: "Organic Spirulina Powder",
    brand: "GreenFuel",
    category: "Superfoods",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670885807025-e54b5e0c8337?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    features: ["Rich in Protein", "Boost Energy", "Detox Support"],
  },
  {
    id: 14,
    name: "Vitamin D3 + K2 Drops",
    brand: "SunBoost",
    category: "Supplements",
    price: 20,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673126637413-f5ea1ccaae82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    features: ["Bone Health", "Immune Support", "Easy Absorption"],
  },
  {
    id: 15,
    name: "Organic Matcha Green Tea",
    brand: "NatureSip",
    category: "Beverage",
    price: 25,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Rich in Antioxidants", "Boost Energy", "Natural Taste"],
  },
  {
    id: 16,
    name: "Pre-Workout Energy Blend",
    brand: "FitFuel",
    category: "Supplements",
    price: 35,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661507183946-559d65a5ad5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    features: ["Increase Stamina", "Quick Energy", "Refreshing Flavors"],
  },
  {
    id: 17,
    name: "Post-Workout Recovery Drink",
    brand: "HydroBoost",
    category: "Drinks",
    price: 28,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1669216369059-ba56becfd570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    features: ["Reduce Muscle Soreness", "Electrolyte Rich", "Fast Recovery"],
  },
  {
    id: 18,
    name: "Organic Almond Butter",
    brand: "NutriShake",
    category: "Snacks",
    price: 14,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["No Added Sugar", "Rich in Protein", "Creamy Texture"],
  },
  {
    id: 19,
    name: "Keto Snack Bar (Pack of 6)",
    brand: "FitFuel",
    category: "Snacks",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1601091566377-17adfa2fa02e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Low Carb", "High Fat", "Gluten-Free"],
  },
  {
    id: 20,
    name: "Organic Flaxseed Powder",
    brand: "NatureSip",
    category: "Superfoods",
    price: 12,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2163190720/photo/hospital-medical-switchboard-operator.webp?a=1&b=1&s=612x612&w=0&k=20&c=-jL1VIeDUN2D7g0cw2POzzYJCLkdf09VO8alCm0L8Zk=",
    features: ["Rich in Omega-3", "High Fiber", "Supports Heart Health"],
  },
{
    id: 21,
    name: "Organic Quinoa (1kg)",
    brand: "NatureSip",
    category: "Superfoods",
    price: 15,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2191184175/photo/healthcare-professionals-walking-to-their-examination-rooms-reception-desk-icu-units-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=-XMHhSSewAQuUPntd6soWSdVysz7qGVaREY1loE7vQk=",
    features: ["Gluten-Free", "Rich in Protein", "High Fiber"],
  },
  {
    id: 22,
    name: "Herbal Ashwagandha Capsules",
    brand: "HerbalCare",
    category: "Supplements",
    price: 22,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1513224502586-d1e602410265?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsfGVufDB8fDB8fHww",
    features: ["Stress Relief", "Boost Energy", "All-Natural"],
  },
  {
    id: 23,
    name: "Vitamin B-Complex Tablets",
    brand: "BoostWell",
    category: "Supplements",
    price: 18,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Energy Support", "Metabolism Booster", "Daily Use"],
  },
  {
    id: 24,
    name: "Pea Protein Powder (1kg)",
    brand: "GreenFuel",
    category: "Protein",
    price: 38,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Vegan", "Lactose-Free", "Rich in Amino Acids"],
  },
  {
    id: 25,
    name: "Energy Boosting Trail Mix",
    brand: "NutriShake",
    category: "Snacks",
    price: 12,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Mixed Nuts", "Dried Fruits", "Natural Energy"],
  },
  {
    id: 26,
    name: "Magnesium Citrate Capsules",
    brand: "HealthPlus",
    category: "Supplements",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1554734867-bf3c00a49371?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Muscle Relaxation", "Supports Nerves", "Non-GMO"],
  },
  {
    id: 27,
    name: "Coconut Water Hydration Pack",
    brand: "HydroBoost",
    category: "Drinks",
    price: 16,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    features: ["Natural Electrolytes", "Low Sugar", "Refreshing Taste"],
  },
  {
    id: 28,
    name: "Keto Collagen Creamer",
    brand: "FitFuel",
    category: "Supplements",
    price: 28,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1944765851/photo/an-embrace-of-love.webp?a=1&b=1&s=612x612&w=0&k=20&c=OwErUwi1AerncAf_PQIet6z1adBPOhuBj-3-1K5H6e8=",
    features: ["Supports Joints", "Healthy Fats", "Coffee Add-On"],
  },
  {
    id: 29,
    name: "Organic Goji Berries",
    brand: "NatureSip",
    category: "Superfoods",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661767897334-bbfbdfdc4d1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Rich in Antioxidants", "Immune Boost", "Natural Sweetness"],
  },
  {
    id: 30,
    name: "Plant-Based Omega Capsules",
    brand: "EcoHealth",
    category: "Supplements",
    price: 32,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["From Algae", "Supports Brain", "Vegan"],
  },
  {
    id: 31,
    name: "Natural Peanut Butter",
    brand: "GreenFuel",
    category: "Snacks",
    price: 14,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2048635835/photo/senior-gentlemans-check-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rvaeago6FYkf28h5tJN2yqhFceR61T20-TIHTsqUnvw=",
    features: ["No Added Sugar", "Protein-Rich", "Creamy Texture"],
  },
  {
    id: 32,
    name: "Probiotic Digestive Capsules",
    brand: "GutCare",
    category: "Supplements",
    price: 26,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
    features: ["Gut Health", "Boost Immunity", "Natural Strains"],
  },
  {
    id: 33,
    name: "Electrolyte Sports Drink Powder",
    brand: "HydroBoost",
    category: "Drinks",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
    features: ["Quick Hydration", "Zero Sugar", "Multiple Flavors"],
  },
  {
    id: 34,
    name: "Organic Hemp Protein Powder",
    brand: "EcoHealth",
    category: "Protein",
    price: 30,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Plant-Based", "Complete Protein", "Gluten-Free"],
  },
  {
    id: 35,
    name: "Vitamin E Softgel Capsules",
    brand: "BoostWell",
    category: "Supplements",
    price: 15,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww",
    features: ["Skin Health", "Antioxidant", "Natural Oil"],
  },
  {
    id: 36,
    name: "Organic Almond Flour (1kg)",
    brand: "NatureSip",
    category: "Superfoods",
    price: 20,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Low Carb", "Gluten-Free", "High Fiber"],
  },
  {
    id: 37,
    name: "Energy Gel Sachets (Pack of 12)",
    brand: "FitFuel",
    category: "Sports Nutrition",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Quick Energy", "Portable", "For Athletes"],
  },
  {
    id: 38,
    name: "Organic Cacao Powder",
    brand: "GreenFuel",
    category: "Superfoods",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1706958580557-ddc88a349a16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    features: ["Rich in Antioxidants", "Boost Mood", "Natural Cocoa"],
  },
  {
    id: 39,
    name: "Herbal Sleep Support Tea",
    brand: "NatureSip",
    category: "Beverage",
    price: 14,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Calming Herbs", "Caffeine-Free", "Natural Flavor"],
  },
  {
    id: 40,
    name: "L-Carnitine Fat Burner",
    brand: "FitFuel",
    category: "Supplements",
    price: 32,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1678834890210-3dd2e8443455?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    features: ["Supports Metabolism", "Boost Energy", "Workout Aid"],
  },
  {
    id: 41,
    name: "Organic Apple Chips",
    brand: "NutriShake",
    category: "Snacks",
    price: 10,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
    features: ["No Added Sugar", "Crispy Texture", "Healthy Snack"],
  },
  {
    id: 42,
    name: "Plant-Based Energy Drink",
    brand: "HydroBoost",
    category: "Drinks",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1727434032792-c7ef921ae086?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
    features: ["Natural Caffeine", "Zero Sugar", "Vegan-Friendly"],
  },
  {
    id: 43,
    name: "Organic Maca Root Powder",
    brand: "EcoHealth",
    category: "Superfoods",
    price: 22,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1584819762556-68601d7f3a86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    features: ["Hormone Balance", "Energy Boost", "Natural Adaptogen"],
  },
  {
    id: 44,
    name: "Zinc + Vitamin C Combo",
    brand: "BoostWell",
    category: "Supplements",
    price: 18,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    features: ["Immune Support", "Fast Absorption", "Daily Wellness"],
  },
  {
    id: 45,
    name: "Organic Coconut Sugar",
    brand: "GreenFuel",
    category: "Superfoods",
    price: 12,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    features: ["Low GI", "Natural Sweetener", "Vegan"],
  },
  {
    id: 46,
    name: "Electrolyte Gummies",
    brand: "HydroBoost",
    category: "Snacks",
    price: 16,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    features: ["Quick Hydration", "Tasty Gummies", "Zero Artificial Colors"],
  },
  {
    id: 47,
    name: "Organic Barley Grass Powder",
    brand: "EcoHealth",
    category: "Superfoods",
    price: 20,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    features: ["Detox Support", "Rich in Chlorophyll", "Natural Alkalizer"],
  },
  {
    id: 48,
    name: "Plant-Based Meal Replacement Shake",
    brand: "GreenFuel",
    category: "Protein",
    price: 45,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    features: ["Complete Nutrition", "Vegan", "Delicious Flavor"],
  },
];

const HealthFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(healthData.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? 0 : s - 1));
  const nextSlide = () => setCurrentSlide((s) => (s === totalSlides - 1 ? s : s + 1));

  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(healthData.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide));
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Health Featured Deals</h2>

      <div className="relative overflow-hidden">
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
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {item.stock ? (
                      <span className="absolute top-2 left-2 bg-green-600 text-xs font-bold px-2 py-1 rounded-md">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 bg-red-600 text-xs font-bold px-2 py-1 rounded-md">
                        Out of Stock
                      </span>
                    )}
                    <span className="absolute top-2 right-2 bg-amber-700 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-700 mb-1 font-medium">Brand: {item.brand}</p>

                    <ul className="text-xs text-amber-500 mb-3 list-disc list-inside">
                      {item.features?.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < item.rating ? "text-amber-600" : "text-gray-600"}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-amber-600">${item.price}</span>
                    </div>

                    <button
                      disabled={!item.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition
                        ${
                          item.stock
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

export default HealthFeaturedDeals;
