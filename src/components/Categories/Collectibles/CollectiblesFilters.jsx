"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Sample collectibles data
export const collectiblesData = [
  {
    id: 1,
    name: "Vintage Coin Set",
    brand: "NumisWorld",
    category: "Coins",
    price: 350,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2200260186/photo/asian-tea-sets-for-sale.webp?a=1&b=1&s=612x612&w=0&k=20&c=bEUtaoXVQoTsjYVGjLJZP-EzCX5ppNClUv8EUF0RaGI=",
    features: ["Rare", "Limited Edition", "Certified Authentic"],
  },
  {
    id: 2,
    name: "Retro Action Figure",
    brand: "ToyVault",
    category: "Figures",
    price: 120,
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2192980104/photo/auction-valuer-evaluates-historical-items.webp?a=1&b=1&s=612x612&w=0&k=20&c=_A4pXouSEFvBTfRaWb5S_vjt5ffC71xXavp6uyWaN5Q=",
    features: ["Original Packaging", "Articulated", "Collector's Item"],
  },
  {
    id: 3,
    name: "Antique Pocket Watch",
    brand: "Timeless",
    category: "Watches",
    price: 750,
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1661780612169-8d58ad9a2949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVjdGlibGVzfGVufDB8fDB8fHww",
    features: ["Handcrafted", "Working Condition", "Engraved Case"],
  },
  {
    id: 4,
    name: "Classic Comic Book",
    brand: "PageTurners",
    category: "Books",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681396692271-1b1c5eeef182?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVjdGlibGVzfGVufDB8fDB8fHww",
    features: ["First Edition", "Mint Condition", "Signed"],
  },
  {
    id: 5,
    name: "Retro Vinyl Record",
    brand: "SoundWave",
    category: "Music",
    price: 60,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1600196024415-59f3750928d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Rare Pressing", "Classic Album", "Collector's Item"],
  },
  {
    id: 6,
    name: "Antique Camera",
    brand: "SnapShot",
    category: "Photography",
    price: 900,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1735720422405-9fd845c48c8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Fully Functional", "Original Lens", "Leather Case"],
  },
  {
    id: 7,
    name: "Vintage Leather Journal",
    brand: "OldScript",
    category: "Books",
    price: 45,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1701808235569-e6ff5c94b9a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Handmade", "Antique Paper", "Durable"],
  },
  {
    id: 8,
    name: "Classic Fountain Pen",
    brand: "InkMaster",
    category: "Stationery",
    price: 150,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1729005326851-89fab5720eba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Gold Nib", "Refillable", "Elegant Design"],
  },
  {
    id: 9,
    name: "Retro Game Console",
    brand: "PixelPlay",
    category: "Electronics",
    price: 300,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1739133978657-2db058c9d466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Original", "Works Perfectly", "With Games"],
  },
  {
    id: 10,
    name: "Antique Chess Set",
    brand: "Checkmate",
    category: "Games",
    price: 400,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681586033518-97e2e2abdd13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Hand Carved", "Wooden", "Complete Set"],
  },
  {
    id: 11,
    name: "Vintage Movie Poster",
    brand: "CineArt",
    category: "Prints",
    price: 85,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1701808236285-9464dc96c4b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Original Print", "Framed", "Limited Edition"],
  },
  {
    id: 12,
    name: "Classic Baseball Card",
    brand: "SportsMemorabilia",
    category: "Cards",
    price: 25,
    rating: 3,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1692872402795-c63e8129b788?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Rare", "Graded", "Mint Condition"],
  },
  {
    id: 13,
    name: "Antique Globe",
    brand: "WorldView",
    category: "Decor",
    price: 320,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1533708381675-9317f3b35e50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Wooden Base", "Detailed Map", "Rotates"],
  },
  {
    id: 14,
    name: "Retro Movie Camera",
    brand: "FilmGear",
    category: "Photography",
    price: 780,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1658847122852-8fecd5773ac0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Fully Functional", "Vintage Lens", "Collector's Item"],
  },
  {
    id: 15,
    name: "Classic Model Train",
    brand: "RailMasters",
    category: "Toys",
    price: 210,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1694412515579-8080310249d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Detailed", "Working Lights", "Complete Set"],
  },
  {
    id: 16,
    name: "Vintage Porcelain Doll",
    brand: "DollHouse",
    category: "Toys",
    price: 180,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1735720520964-6f0718bcef81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Hand Painted", "Original Clothes", "Collector's Item"],
  },
  {
    id: 17,
    name: "Antique Silverware Set",
    brand: "SilverLux",
    category: "Decor",
    price: 670,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1659652640321-6254219947d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Sterling Silver", "Engraved", "Complete Set"],
  },
  {
    id: 18,
    name: "Classic Leather Briefcase",
    brand: "VintageCarry",
    category: "Accessories",
    price: 250,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1736083246433-6469582524db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Handmade", "Durable", "Classic Style"],
  },
  {
    id: 19,
    name: "Retro Toy Robot",
    brand: "RoboPlay",
    category: "Toys",
    price: 90,
    rating: 3,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1637597384655-e3c8ca310502?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Battery Operated", "Original Box", "Collector's Item"],
  },
  {
    id: 20,
    name: "Antique Typewriter",
    brand: "WriteTime",
    category: "Electronics",
    price: 850,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681414728557-29820ddf646b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Working Condition", "Original Keys", "Vintage Style"],
  },
  {
    id: 21,
    name: "Vintage Map Collection",
    brand: "MapMakers",
    category: "Prints",
    price: 220,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1659652676424-528bfdd60c8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Hand Drawn", "Framed", "Rare"],
  },
  {
    id: 22,
    name: "Classic Jazz Vinyl",
    brand: "VinylVibes",
    category: "Music",
    price: 55,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1680025949460-3f2bb4dda575?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Original Pressing", "Good Condition", "Collector's Item"],
  },
  {
    id: 23,
    name: "Antique Jewelry Box",
    brand: "Gems & Co.",
    category: "Accessories",
    price: 380,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1659652810084-5a124b0f99f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Hand Carved", "Lined Interior", "Lockable"],
  },
  {
    id: 24,
    name: "Vintage Perfume Bottle",
    brand: "Scentique",
    category: "Decor",
    price: 75,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1714589984856-f7c1d5be5106?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Glass", "Rare Fragrance", "Collector's Item"],
  },
  {
    id: 25,
    name: "Classic Movie Reel",
    brand: "FilmVault",
    category: "Collectibles",
    price: 150,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1659652413798-6adaeaa6caf4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Original", "Working Condition", "Vintage"],
  },
  {
    id: 26,
    name: "Retro Radio",
    brand: "SoundClassic",
    category: "Electronics",
    price: 280,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["AM/FM", "Original Parts", "Collector's Item"],
  },
  {
    id: 27,
    name: "Antique Pocket Knife",
    brand: "BladeMasters",
    category: "Tools",
    price: 95,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1659651224384-649d4eb44f2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Engraved", "Handcrafted", "Stainless Steel"],
  },
  {
    id: 28,
    name: "Vintage Leather Boots",
    brand: "OldWalkers",
    category: "Fashion",
    price: 230,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681810789517-9f1ff5e3c3f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Handmade", "Durable", "Classic Style"],
  },
  {
    id: 29,
    name: "Classic Pocket Watch Chain",
    brand: "Timeless",
    category: "Accessories",
    price: 60,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1671059218671-2be857fe1874?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Sterling Silver", "Vintage Design", "Polished"],
  },
  {
    id: 30,
    name: "Retro Arcade Machine",
    brand: "Arcadia",
    category: "Games",
    price: 1200,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1742326663182-7733d46e2b84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Fully Functional", "Original Parts", "Collector's Item"],
  },
  {
    id: 31,
    name: "Vintage Postcard Collection",
    brand: "TravelBack",
    category: "Prints",
    price: 40,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1567786748490-2332887ba126?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Handwritten", "Rare", "Good Condition"],
  },
  {
    id: 32,
    name: "Antique Porcelain Tea Set",
    brand: "FineTea",
    category: "Decor",
    price: 450,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1714598268920-3235095562f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Hand Painted", "Complete Set", "Delicate"],
  },
  {
    id: 33,
    name: "Classic Vinyl Player",
    brand: "SoundWave",
    category: "Electronics",
    price: 320,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Vintage Style", "High Quality Sound", "Easy Controls"],
  },
  {
    id: 34,
    name: "Vintage Film Camera",
    brand: "SnapShot",
    category: "Photography",
    price: 650,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1735720518793-804614ff5c48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Manual Focus", "Original Lens", "Collector's Item"],
  },
  {
    id: 35,
    name: "Classic Leather Wallet",
    brand: "OldCarry",
    category: "Accessories",
    price: 70,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1671827817356-6ea2285c85b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Genuine Leather", "Handcrafted", "Durable"],
  },
  {
    id: 36,
    name: "Antique Brass Telescope",
    brand: "StarGazer",
    category: "Collectibles",
    price: 1200,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1637597384638-0e2ac36e9b42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Brass Finish", "Fully Functional", "Collector's Item"],
  },
  {
    id: 37,
    name: "Retro Motorcycle Helmet",
    brand: "RideSafe",
    category: "Fashion",
    price: 200,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1714598268918-55b2ca87d145?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Classic Design", "Durable", "Comfortable"],
  },
  {
    id: 38,
    name: "Vintage Camera Lens",
    brand: "LensWorks",
    category: "Photography",
    price: 550,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1739133479982-dec5032a7c61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Compatible", "Sharp Focus", "Collector's Item"],
  },
  {
    id: 39,
    name: "Classic Movie Ticket Stub",
    brand: "CinemaMemories",
    category: "Prints",
    price: 15,
    rating: 3,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1693221848619-5cda3e687a62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Rare", "Good Condition", "Collectible"],
  },
  {
    id: 40,
    name: "Retro Tin Toy Car",
    brand: "ToyVault",
    category: "Toys",
    price: 70,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1701094772334-07af1a16bd42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Wind-up", "Original Paint", "Collector's Item"],
  },
  {
    id: 41,
    name: "Antique Wall Clock",
    brand: "Timeless",
    category: "Decor",
    price: 650,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1739133337547-ed7fc4e48594?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Handcrafted", "Working Condition", "Wooden Case"],
  },
  {
    id: 42,
    name: "Vintage Military Medal",
    brand: "HonorGuard",
    category: "Collectibles",
    price: 130,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1722498256948-348c674cc87a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Original", "Rare", "Polished"],
  },
  {
    id: 43,
    name: "Classic Vinyl Record Player",
    brand: "SoundWave",
    category: "Electronics",
    price: 400,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1696799145894-1eaae8a15ba1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Easy Controls", "Vintage Design", "Great Sound"],
  },
  {
    id: 44,
    name: "Antique Brass Compass",
    brand: "StarGazer",
    category: "Collectibles",
    price: 220,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1720535190566-89d1e2aa0e39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Fully Functional", "Engraved", "Brass Finish"],
  },
  {
    id: 45,
    name: "Vintage Camera Tripod",
    brand: "SnapShot",
    category: "Photography",
    price: 180,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1746572605739-c70e0d7b54d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Adjustable", "Durable", "Lightweight"],
  },
];

const CollectiblesFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 500,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(collectiblesData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    let result = collectiblesData;

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
      maxPrice: 500,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  const brands = ["CardCo", "ToyTime", "CoinCraft"];
  const categories = ["Sports Memorabilia", "Action Figures", "Coins"];
  const features = [
    "Original",
    "Rare",
    "Sealed Box",
    "Mint Condition",
    "Certified",
    "Limited Edition",
  ];

  return (
    <div className="bg-white text-gray-900 py-8 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-amber-700 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
            aria-label="Open filters"
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Filters Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
          aria-label="Product filters"
        >
          <button
            className="absolute top-4 right-4 text-amber-600 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
            aria-label="Close filters"
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-amber-600 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          <input
            type="text"
            placeholder="Search collectibles..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
            aria-label="Search collectibles"
          />

          {/* Filter Sections */}
          {[["Brand", brands, "brand"], ["Category", categories, "category"], ["Features", features, "features"]].map(
            ([title, list, key]) => (
              <div className="mb-4" key={key}>
                <h3 className="font-semibold mb-2 text-amber-600">{title}</h3>
                {list.map((item) => (
                  <label key={item} className="block mb-1 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters[key].includes(item)}
                      onChange={() => toggleFilter(key, item)}
                      className="mr-2"
                    />
                    {item}
                  </label>
                ))}
              </div>
            )
          )}

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
            <input
              type="range"
              min="0"
              max="500"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
              }
              className="w-full"
            />
            <p className="text-sm">Up to ${filters.maxPrice}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-amber-600 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-amber-600">Availability</h3>
            {[["In Stock", true], ["Out of Stock", false], ["All", null]].map(([label, value]) => (
              <label key={label} className="block cursor-pointer">
                <input
                  type="radio"
                  name="stock"
                  checked={filters.stock === value}
                  onChange={() => setFilters({ ...filters, stock: value })}
                  className="mr-2"
                />
                {label}
              </label>
            ))}
          </div>
        </aside>

        {/* Products Display */}
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
                  loading="lazy"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-amber-600">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
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

export default CollectiblesFilters;
