"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleFitnessProducts = [
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

const ArtPagination = () => {
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
    <section className="w-full bg-gray-900 py-10 my-[-60px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50">
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
        <div className="flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-4 bg-gray-900 rounded-lg">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
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
                    ? "bg-gray-950 text-white border border-amber-50"
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
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
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

export default ArtPagination;
