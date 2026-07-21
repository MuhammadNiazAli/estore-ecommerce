"use client";
import React, { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";

const collectiblesData = [
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
  {
    id: 49,
    name: "Vintage Motorcycle Jacket",
    brand: "OldRide",
    category: "Fashion",
    price: 350,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1721461834584-c1c8f5cafba2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Leather", "Classic Style", "Durable"],
  },
  {
    id: 50,
    name: "Classic Porcelain Figurine",
    brand: "ArtisanCraft",
    category: "Decor",
    price: 90,
    rating: 3,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1541797873665-6d4cc148885f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxjb2xsZWN0aWJsZXN8ZW58MHx8MHx8fDA%3D",
    features: ["Hand Painted", "Collector's Item", "Delicate"],
  },
];


const CollectiblesProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(collectiblesData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(collectiblesData.slice(0, newCount));
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
      sortedProducts = collectiblesData.slice(0, visibleCount);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-white text-gray-900 py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Collectibles Collection</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-amber-600 font-semibold">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-200"
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
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
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
                  <div className="absolute inset-0 bg-white/60 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                    <button className="bg-amber-600 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition flex items-center gap-2">
                      <FaCartPlus /> Add to Cart
                    </button>
                    <div className="flex gap-4 text-xl text-gray-900">
                      <FaHeart className="cursor-pointer hover:text-amber-600" />
                      <FaEye className="cursor-pointer hover:text-amber-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-amber-600">${item.price}</p>
                  <span className="text-sm text-gray-700">{item.rating}★</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 text-xs text-gray-600 mt-2">
                  {(item.features || []).slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-white px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <p className={`text-sm font-semibold mt-2 ${item.stock ? "text-green-400" : "text-red-400"}`}>
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          {visibleCount < collectiblesData.length && (
            <button
              onClick={handleLoadMore}
              className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectiblesProductGrid;
