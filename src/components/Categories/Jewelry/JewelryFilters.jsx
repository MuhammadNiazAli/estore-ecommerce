"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Sample Jewelry Data
const jewelryData = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    brand: "Luxora",
    category: "Necklaces",
    price: 299,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    brand: "GlitterGems",
    category: "Earrings",
    price: 499,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Classic Silver Bracelet",
    brand: "SilverLine",
    category: "Bracelets",
    price: 129,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Pearl Pendant",
    brand: "OceanPearls",
    category: "Necklaces",
    price: 159,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    name: "Rose Gold Ring",
    brand: "Luxora",
    category: "Rings",
    price: 249,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    name: "Sapphire Drop Earrings",
    brand: "GlitterGems",
    category: "Earrings",
    price: 399,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 7,
    name: "Leather Strap Watch",
    brand: "TimeLux",
    category: "Watches",
    price: 299,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    name: "Gold Hoop Earrings",
    brand: "Luxora",
    category: "Earrings",
    price: 279,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 9,
    name: "Diamond Tennis Bracelet",
    brand: "GlitterGems",
    category: "Bracelets",
    price: 599,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    name: "Sterling Silver Ring",
    brand: "SilverLine",
    category: "Rings",
    price: 199,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 11,
    name: "Vintage Pearl Necklace",
    brand: "OceanPearls",
    category: "Necklaces",
    price: 189,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 12,
    name: "Ruby Cocktail Ring",
    brand: "Luxora",
    category: "Rings",
    price: 349,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    name: "Silver Charm Bracelet",
    brand: "SilverLine",
    category: "Bracelets",
    price: 109,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 14,
    name: "Gold Plated Earrings",
    brand: "GlitterGems",
    category: "Earrings",
    price: 189,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 15,
    name: "Rose Gold Pendant",
    brand: "Luxora",
    category: "Necklaces",
    price: 259,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1522001947148-8b4dfe064edc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 16,
    name: "Diamond Studs",
    brand: "GlitterGems",
    category: "Earrings",
    price: 599,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1599459183200-59c7687a0275?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 17,
    name: "Silver Chain Bracelet",
    brand: "SilverLine",
    category: "Bracelets",
    price: 139,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 18,
    name: "Gold Hoop Earrings",
    brand: "Luxora",
    category: "Earrings",
    price: 279,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1585960622850-ed33c41d6418?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 19,
    name: "Leather Strap Watch",
    brand: "TimeLux",
    category: "Watches",
    price: 299,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 20,
    name: "Classic Silver Ring",
    brand: "SilverLine",
    category: "Rings",
    price: 179,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 21,
    name: "Pearl Drop Earrings",
    brand: "OceanPearls",
    category: "Earrings",
    price: 229,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681276170423-2c60b95094b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 22,
    name: "Rose Gold Bracelet",
    brand: "Luxora",
    category: "Bracelets",
    price: 269,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1625908733875-efa9c75c084d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 23,
    name: "Sapphire Necklace",
    brand: "GlitterGems",
    category: "Necklaces",
    price: 399,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1625908733875-efa9c75c084d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 24,
    name: "Diamond Tennis Bracelet",
    brand: "GlitterGems",
    category: "Bracelets",
    price: 599,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 25,
    name: "Gold Chain Necklace",
    brand: "Luxora",
    category: "Necklaces",
    price: 279,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 26,
    name: "Classic Leather Watch",
    brand: "TimeLux",
    category: "Watches",
    price: 319,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 27,
    name: "Silver Hoop Earrings",
    brand: "SilverLine",
    category: "Earrings",
    price: 139,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 28,
    name: "Pearl Bracelet",
    brand: "OceanPearls",
    category: "Bracelets",
    price: 189,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 29,
    name: "Rose Gold Hoop Earrings",
    brand: "Luxora",
    category: "Earrings",
    price: 299,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1671641737531-8959f76d4a43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 30,
    name: "Classic Gold Ring",
    brand: "Luxora",
    category: "Rings",
    price: 219,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 31,
    name: "Diamond Pendant Necklace",
    brand: "GlitterGems",
    category: "Necklaces",
    price: 549,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 32,
    name: "Silver Cuff Bracelet",
    brand: "SilverLine",
    category: "Bracelets",
    price: 159,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 33,
    name: "Gold Plated Necklace",
    brand: "Luxora",
    category: "Necklaces",
    price: 279,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 34,
    name: "Pearl Stud Earrings",
    brand: "OceanPearls",
    category: "Earrings",
    price: 229,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1597006354775-2955b15ec026?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 35,
    name: "Leather Watch Strap",
    brand: "TimeLux",
    category: "Watches",
    price: 279,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1709033511355-d2b8d7e86797?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 36,
    name: "Diamond Hoop Earrings",
    brand: "GlitterGems",
    category: "Earrings",
    price: 499,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1709033511355-d2b8d7e86797?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 37,
    name: "Rose Gold Bracelet",
    brand: "Luxora",
    category: "Bracelets",
    price: 259,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1632434553802-d916ede9c85e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 38,
    name: "Classic Silver Necklace",
    brand: "SilverLine",
    category: "Necklaces",
    price: 199,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1611087388916-b6c97e01735b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 39,
    name: "Pearl Pendant Necklace",
    brand: "OceanPearls",
    category: "Necklaces",
    price: 179,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1618713041735-adb0de8316ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 40,
    name: "Gold Plated Ring",
    brand: "Luxora",
    category: "Rings",
    price: 239,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1543295204-2ae345412549?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 41,
    name: "Silver Drop Earrings",
    brand: "SilverLine",
    category: "Earrings",
    price: 149,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 42,
    name: "Diamond Ring",
    brand: "GlitterGems",
    category: "Rings",
    price: 499,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 43,
    name: "Pearl Choker Necklace",
    brand: "OceanPearls",
    category: "Necklaces",
    price: 199,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 44,
    name: "Gold Link Bracelet",
    brand: "Luxora",
    category: "Bracelets",
    price: 279,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 45,
    name: "Classic Leather Bracelet",
    brand: "SilverLine",
    category: "Bracelets",
    price: 139,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 46,
    name: "Sapphire Ring",
    brand: "GlitterGems",
    category: "Rings",
    price: 399,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1627072108045-a6605828afb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 47,
    name: "Gold Plated Earrings",
    brand: "Luxora",
    category: "Earrings",
    price: 279,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681276170321-d838ac131f81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 48,
    name: "Sterling Silver Necklace",
    brand: "SilverLine",
    category: "Necklaces",
    price: 219,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 49,
    name: "Rose Gold Stud Earrings",
    brand: "Luxora",
    category: "Earrings",
    price: 299,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1542779632-539b861ee8f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 50,
    name: "Diamond Cuff Bracelet",
    brand: "GlitterGems",
    category: "Bracelets",
    price: 599,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  }
];

const JewelryFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 3000,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(jewelryData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Apply Filters
  useEffect(() => {
    let result = jewelryData;

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
      maxPrice: 3000,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Filter Toggle Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
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
          {/* Close Btn for Mobile */}
          <button
            className="absolute top-4 right-4 text-black text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-black hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search jewelry..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["GoldenCraft", "SparkleCo", "SilverLine", "ForeverBands"].map(
              (brand) => (
                <label key={brand} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => toggleFilter("brand", brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            {["Necklaces", "Earrings", "Bracelets", "Rings"].map((cat) => (
              <label key={cat} className="block mb-1 text-sm">
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
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {[
              "18K Gold",
              "Adjustable Length",
              "Handcrafted",
              "0.5 Carat Diamonds",
              "White Gold",
              "Hypoallergenic",
              "Sterling Silver",
              "Includes 5 Charms",
              "Comfort Fit",
              "Custom Engraving",
            ].map((feature) => (
              <label key={feature} className="block mb-1 text-sm">
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
            <h3 className="font-semibold mb-2 text-black">Price</h3>
            <input
              type="range"
              min="0"
              max="3000"
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
            <h3 className="font-semibold mb-2 text-black">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-black text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Availability</h3>
            <label className="block">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === true}
                onChange={() => setFilters({ ...filters, stock: true })}
                className="mr-2"
              />
              In Stock
            </label>
            <label className="block">
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

        {/* Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              className="bg-white text-gray-900 border border-gray-200 px-3 py-2 rounded"
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
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-black">
                  ${product.price}
                </p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black transition"
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

export default JewelryFilters;
