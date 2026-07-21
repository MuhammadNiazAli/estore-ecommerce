"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const collectibleDeals = [
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
  {
    id: 46,
    name: "Classic Sports Jersey",
    brand: "SportsMemorabilia",
    category: "Fashion",
    price: 95,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1722533595069-a4a32b227ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Signed", "Rare", "Mint Condition"],
  },
  {
    id: 47,
    name: "Retro Movie Script",
    brand: "CineArt",
    category: "Prints",
    price: 110,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1669837810216-238f84f37a1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Original", "Annotated", "Collector's Item"],
  },
  {
    id: 48,
    name: "Antique Pocket Compass",
    brand: "StarGazer",
    category: "Collectibles",
    price: 140,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1711033905632-6344e6a01d70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Brass Finish", "Engraved", "Fully Functional"],
  },
  
];

const CollectiblesFeaturedDeals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    function handleResize() {
      setCardsPerSlide(window.innerWidth < 640 ? 1 : 3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(collectibleDeals.length / cardsPerSlide);

  const prevSlide = () => setCurrentSlide((s) => Math.max(s - 1, 0));
  const nextSlide = () => setCurrentSlide((s) => Math.min(s + 1, totalSlides - 1));

  const slideItems = [];
  for (let i = 0; i < totalSlides; i++) {
    slideItems.push(
      collectibleDeals.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
    );
  }

  return (
    <section className="bg-white text-gray-900 py-12 px-6 max-w-[1200px] mx-auto rounded-lg shadow-xl select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Collectibles Featured Deals</h2>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-amber-600"
          }`}
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
          }}
        >
          {slideItems.map((items, index) => (
            <div
              key={index}
              className="flex justify-center gap-6 px-2"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {items.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-white rounded-xl shadow-lg flex flex-col max-w-sm w-full"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-md ${
                        deal.stock ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {deal.stock ? "In Stock" : "Out of Stock"}
                    </span>
                    <span className="absolute top-2 right-2 bg-amber-700 text-black text-xs font-bold px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <p className="text-sm text-gray-700 mb-1 font-medium">
                      Brand: {deal.brand}
                    </p>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < deal.rating ? "text-amber-600" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-amber-600">
                        ${deal.price}
                      </span>
                    </div>

                    <button
                      disabled={!deal.stock}
                      className={`mt-4 w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2 transition ${
                        deal.stock
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

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-amber-700 text-black p-3 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
            currentSlide === totalSlides - 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-amber-600"
          }`}
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CollectiblesFeaturedDeals;
