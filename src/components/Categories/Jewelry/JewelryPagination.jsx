"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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

];

const JewelryPagination = () => {
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

export default JewelryPagination;
