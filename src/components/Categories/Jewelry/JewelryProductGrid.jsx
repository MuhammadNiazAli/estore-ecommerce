"use client";

import React, { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";

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

const JewelryProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(jewelryData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(jewelryData.slice(0, newCount));
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
      sortedProducts = jewelryData.slice(0, visibleCount);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Exclusive Jewelry Collection</h2>
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
          {visibleCount < jewelryData.length && (
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

export default JewelryProductGrid;
