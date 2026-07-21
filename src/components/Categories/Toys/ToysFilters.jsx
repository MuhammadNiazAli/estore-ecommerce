"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";


 const toysData = [
  {
    id: 1,
    name: "Lego Classic Creative Bricks",
    brand: "LEGO",
    price: 49.99,
    material: "Plastic",
    features: ["Creative Building", "Educational"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1585249085702-e5ac880bc693?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Hot Wheels Track Builder",
    brand: "Hot Wheels",
    price: 29.99,
    material: "Plastic",
    features: ["Racing Track", "Customizable"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/2208466008/photo/childrens-plastic-toys-for-boys.webp?a=1&b=1&s=612x612&w=0&k=20&c=9-ylPsfJhkCLq_n3j2ZWcYRsQCZimFWMIj9HUGF2Jtw=",
  },
  {
    id: 3,
    name: "Barbie Dreamhouse Dollhouse",
    brand: "Barbie",
    price: 199.99,
    material: "Plastic",
    features: ["Lights & Sounds", "3 Floors"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/490818930/photo/pretty-stylish-pregnant-woman-in-a-store-for-children.webp?a=1&b=1&s=612x612&w=0&k=20&c=KIrvLj_GmfOfvMz5azLRj1tCHgDpCvJbAq4QzIs3VVE=",
  },
  {
    id: 4,
    name: "NERF Elite Disruptor Blaster",
    brand: "NERF",
    price: 24.99,
    material: "Plastic",
    features: ["Quick-Draw", "6-Dart Drum"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1425781568/photo/toy-blaster-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=JeLoPG47iA-1uap2U7iqeBzhYNBL8rUYiH_jPJm1oeg=",
  },
  {
    id: 5,
    name: "Play-Doh 36-Pack",
    brand: "Play-Doh",
    price: 19.99,
    material: "Modeling Compound",
    features: ["Creative Play", "36 Colors"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/880807988/photo/colorful-clay-for-kids-playing.webp?a=1&b=1&s=612x612&w=0&k=20&c=v1jmc3yxkmS6DSW9_Z6pxSPnlIPpiYHS1gHQ8MOmrME=",
  },
  {
    id: 6,
    name: "Fisher-Price Laugh & Learn Puppy",
    brand: "Fisher-Price",
    price: 24.99,
    material: "Plush & Plastic",
    features: ["Interactive", "Educational Songs"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1580229845513-7f52331610e4?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Remote Control Monster Truck",
    brand: "Traxxas",
    price: 159.99,
    material: "Plastic & Metal",
    features: ["4x4 Drive", "Rechargeable Battery"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1301902202/photo/radio-control-4x4-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=QqaUejvKrrzm7JxC_TS11dD7BL7yqegcT52n0Mo8IA8=",
  },
  {
    id: 8,
    name: "Disney Frozen Elsa Doll",
    brand: "Disney",
    price: 34.99,
    material: "Plastic",
    features: ["Singing", "Light-Up Dress"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1483500555287-c0bc5026d91d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Magna-Tiles 100-Piece Set",
    brand: "Magna-Tiles",
    price: 129.99,
    material: "Plastic",
    features: ["Magnetic", "STEM Learning"],
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1668461477164-c92856f347bd?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Baby Shark Dancing Doll",
    brand: "Pinkfong",
    price: 21.99,
    material: "Plastic",
    features: ["Music", "Dance Moves"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1489413753/photo/soft-toy-pink-shark-in-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=m2hmkUlQjRbCPxfPlNT40XS6_fR-YN3eJYmvje2iRNU=",
  },
{
    id: 11,
    name: "Transformers Optimus Prime Figure",
    brand: "Hasbro",
    price: 59.99,
    material: "Plastic",
    features: ["Convertible", "Action Figure"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/181973905/photo/iron-robot.webp?a=1&b=1&s=612x612&w=0&k=20&c=C-N_m4t5JU57BTWP-MhVmm6bJLDBEsX1rfNyzt-_kvE=",
  },
  {
    id: 12,
    name: "LEGO Technic Bugatti Chiron",
    brand: "LEGO",
    price: 349.99,
    material: "Plastic",
    features: ["Collector's Edition", "Detailed Model"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1621453417173-c4b72482b13e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TEVHTyUyMFRlY2huaWMlMjBCdWdhdHRpJTIwQ2hpcm9ufGVufDB8fDB8fHww",
  },
  {
    id: 13,
    name: "Melissa & Doug Wooden Train Set",
    brand: "Melissa & Doug",
    price: 49.99,
    material: "Wood",
    features: ["Durable", "Educational"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/113643364/photo/boy-with-train-set.webp?a=1&b=1&s=612x612&w=0&k=20&c=St6OONVImihZLaueAyMUDr6Q6tYglkpVkoMqip2V_9s=",
  },
  {
    id: 14,
    name: "R/C Helicopter with Gyro",
    brand: "Syma",
    price: 69.99,
    material: "Plastic & Metal",
    features: ["Remote Control", "Rechargeable"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/178374783/photo/remote-control-helicopter.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxBEe5MACOSFUSAzc4dAyYygVNZYJnJFzSpC5CqWhII=",
  },
  {
    id: 15,
    name: "Hatchimals Mystery Egg",
    brand: "Spin Master",
    price: 79.99,
    material: "Plastic",
    features: ["Interactive", "Surprise Toy"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1676686126212-177ee568e5fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhhdGNoaW1hbHMlMjBNeXN0ZXJ5JTIwRWdnfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    name: "Kinetic Sand Playset",
    brand: "Kinetic Sand",
    price: 14.99,
    material: "Sand",
    features: ["Mess-Free", "Creative Play"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/2182416177/photo/woman-playing-with-kinetic-sand-at-yellow-table-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=do_G1bvJY-rzOtskI_TeYZbS5cJ7nfm5icwNyAXAxiI=",
  },
  {
    id: 17,
    name: "Paw Patrol Adventure Bay Playset",
    brand: "Paw Patrol",
    price: 69.99,
    material: "Plastic",
    features: ["Lights & Sounds", "Role Play"],
    rating: 4,
    stock: false,
    image: "https://images.unsplash.com/photo-1544221818-74e341c81174?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Star Wars Millennium Falcon Model",
    brand: "Star Wars",
    price: 159.99,
    material: "Plastic",
    features: ["Collector’s Edition", "Detailed Design"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/475262574/photo/starship1.webp?a=1&b=1&s=612x612&w=0&k=20&c=ClBztNK9aUDBPRl5fYxhuCOSYdGY87NrzZRxpjPmZSU=",
  },
  {
    id: 19,
    name: "Baby Alive Sweet Spoonfuls Doll",
    brand: "Hasbro",
    price: 29.99,
    material: "Plastic",
    features: ["Interactive Feeding", "Role Play"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1346880661/photo/doll-mom-gives-her-doll-something-to-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=R4bAQkDMQZIHXIerRuM_r-6Pgvy9keV6XdcgJheZdGM=",
  },
  {
    id: 20,
    name: "UNO Card Game",
    brand: "Mattel",
    price: 7.99,
    material: "Cardboard",
    features: ["Family Game", "Travel Friendly"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1703000970463-bd63dbe98e15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VU5PJTIwQ2FyZCUyMEdhbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 21,
    name: "LEGO Star Wars X-Wing Fighter",
    brand: "LEGO",
    price: 89.99,
    material: "Plastic",
    features: ["Star Wars Theme", "Detailed Build"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1584847108039-bf217e06885e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TEVHTyUyMFN0YXIlMjBXYXJzJTIwWCUyMFdpbmclMjBGaWdodGVyfGVufDB8fDB8fHww",
  },
  {
    id: 22,
    name: "VTech KidiZoom Smartwatch",
    brand: "VTech",
    price: 49.99,
    material: "Plastic",
    features: ["Educational", "Games & Camera"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/2175232937/photo/childrens-smart-watches.webp?a=1&b=1&s=612x612&w=0&k=20&c=a5jm6cf1KZsELFqtE1Dx496tr84OK-LYswbla9dHs7g=",
  },
  {
    id: 23,
    name: "Marvel Avengers Hulk Action Figure",
    brand: "Marvel",
    price: 29.99,
    material: "Plastic",
    features: ["Movable Limbs", "Collectible"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1361404384/photo/childrens-toy-robot-self-assembly-parts-auto-trans-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TjaiSN4WMRWosgiQ8u6NbUTXwechT7x0It0m6AMlH80=",
  },
  {
    id: 24,
    name: "Playmobil Pirate Ship",
    brand: "Playmobil",
    price: 59.99,
    material: "Plastic",
    features: ["Detailed Ship", "Role Play"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBsYXltb2JpbCUyMFBpcmF0ZSUyMFNoaXB8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 25,
    name: "Mega Bloks First Builders",
    brand: "Mega Bloks",
    price: 19.99,
    material: "Plastic",
    features: ["Toddler Friendly", "Educational"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/498571142/photo/little-girl-in-a-colorful-shirt-playing-with-construction-toy.webp?a=1&b=1&s=612x612&w=0&k=20&c=U960pGAIEL8XzY9raLSE-7jgm5t87WTzSbpTVgQAiEk=",
  },
  {
    id: 26,
    name: "Razor A Kick Scooter",
    brand: "Razor",
    price: 39.99,
    material: "Aluminum",
    features: ["Foldable", "Adjustable Height"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1462181606837-023a46b2d355?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFJhem9yJTIwQSUyMEtpY2slMjBTY29vdGVyfGVufDB8fDB8fHww",
  },
  {
    id: 27,
    name: "Crayola Inspiration Art Case",
    brand: "Crayola",
    price: 24.99,
    material: "Plastic & Paper",
    features: ["140 Pieces", "Creative Kit"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/591811376/photo/back-to-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=yLNJzX4Sl8zw1qao57qCfSbsNI-S3SLg-n7pTXh3Y20=",
  },
  {
    id: 28,
    name: "Jurassic World Dinosaur Figure",
    brand: "Mattel",
    price: 21.99,
    material: "Plastic",
    features: ["Movable Jaws", "Detailed Design"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1517922522248-f8ae08b6b390?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnVyYXNzaWMlMjBXb3JsZCUyMERpbm9zYXVyJTIwRmlndXJlJTVDfGVufDB8fDB8fHww",
  },
  {
    id: 29,
    name: "LOL Surprise Doll",
    brand: "LOL Surprise",
    price: 12.99,
    material: "Plastic",
    features: ["Unboxing", "Accessories"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/2180595084/photo/composite-photo-collage-of-happy-girl-dance-plane-pose-balance-human-palm-hand-occasion.webp?a=1&b=1&s=612x612&w=0&k=20&c=jnpzR28c3yKvIMav4DAh77t2H7bJPmhisofxtrpRSpU=",
  },
  {
    id: 30,
    name: "Thomas & Friends Track Set",
    brand: "Thomas & Friends",
    price: 49.99,
    material: "Plastic",
    features: ["Motorized Engine", "Track Pieces"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/2159315933/photo/toy-railroad-with-battery-powered-steam-locomotives-and-railway-track-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=a3Zc89N6P9hlicP7J7jNc7a9jU-1eSh22xDHH1_ofp8=",
  },
  {
    id: 31,
    name: "LEGO Friends Heartlake City Resort",
    brand: "LEGO",
    price: 79.99,
    material: "Plastic",
    features: ["Role Play", "Detailed Design"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1560529178-855fa2041193?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TEVHTyUyMEZyaWVuZHMlMjBIZWFydGxha2UlMjBDaXR5JTIwUmVzb3J0fGVufDB8fDB8fHww",
  },
  {
    id: 32,
    name: "Magic: The Gathering Starter Kit",
    brand: "Hasbro",
    price: 19.99,
    material: "Cardboard",
    features: ["Collectible", "Strategy Game"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/490884556/photo/says.webp?a=1&b=1&s=612x612&w=0&k=20&c=BEAvluvX3GfLujdquQPtiXuJ7SWf2hc_lMHttnTmhIw=",
  },
  {
    id: 33,
    name: "Remote Control Drone",
    brand: "DJI Mini",
    price: 399.99,
    material: "Plastic & Metal",
    features: ["HD Camera", "Stabilization"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/951069666/photo/unmanned-military-drone-on-patrol-air-territory-at-high-altitude.webp?a=1&b=1&s=612x612&w=0&k=20&c=YYljAZSlJ7Of1ukGvGHCT9LdCKjQmxXBYb5fwlelrbI=",
  },
  {
    id: 34,
    name: "Disney Princess Castle Playset",
    brand: "Disney",
    price: 89.99,
    material: "Plastic",
    features: ["Lights & Sounds", "Includes Dolls"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/471687234/photo/castle.webp?a=1&b=1&s=612x612&w=0&k=20&c=SPF9dY6mrl0Px6lmvnGOEMzycc7PArtiJJSQrTWVbF0=",
  },
  {
    id: 35,
    name: "Wooden Puzzle Board",
    brand: "Hape",
    price: 14.99,
    material: "Wood",
    features: ["Educational", "Bright Colors"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/2221998856/photo/skeleton-key-on-a-old-wooden-table-made-from-jigsaw-puzzle.webp?a=1&b=1&s=612x612&w=0&k=20&c=hJoh_h7MMgaK9x9pPovJafld0eNGvEdN7cB2i5lktuc=",
  },
  {
    id: 36,
    name: "LEGO Architecture Empire State Building",
    brand: "LEGO",
    price: 109.99,
    material: "Plastic",
    features: ["Collector's Model", "Detailed Build"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1566055200761-f92101c268b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TEVHTyUyMEFyY2hpdGVjdHVyZSUyMEVtcGlyZSUyMFN0YXRlJTIwQnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 37,
    name: "Skip Hop Baby Activity Center",
    brand: "Skip Hop",
    price: 129.99,
    material: "Plastic & Fabric",
    features: ["360° Rotating Seat", "Interactive"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/2198757498/photo/little-girl-sportswoman-female-gymnast-acrobat-ballerina-dancer-with-skipping-rope-in-pink.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdZqmIkPec2ASRy8h8kPaToU4mAKxKjsC8cuKHK2eBg=",
  },
  {
    id: 38,
    name: "Fisher-Price Rock-a-Stack",
    brand: "Fisher-Price",
    price: 7.99,
    material: "Plastic",
    features: ["Colorful Rings", "Motor Skills"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1633122117096-d7aa3f93a1c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZpc2hlciUyMFByaWNlJTIwUm9jayUyMGElMjBTdGFja3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 39,
    name: "Hape Wooden Kitchen Playset",
    brand: "Hape",
    price: 119.99,
    material: "Wood",
    features: ["Role Play", "Durable"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/501066548/photo/cute-little-chef.webp?a=1&b=1&s=612x612&w=0&k=20&c=5mTf0YBlPnAfc4uigkFM2-hyXj6gOmGb9N5qP3FF1lc=",
  },
  {
    id: 40,
    name: "Tonka Steel Classic Dump Truck",
    brand: "Tonka",
    price: 39.99,
    material: "Steel & Plastic",
    features: ["Durable", "Classic Design"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/1056739810/photo/vintage-yellow-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=st5qxtrH637tlB-N9C_-Iv40-nU6uEp3Ki_Kv5gHo7Y=",
  },
  {
    id: 41,
    name: "PlayStation 5 Console",
    brand: "Sony",
    price: 499.99,
    material: "Plastic & Metal",
    features: ["4K Gaming", "DualSense Controller"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/1309172116/photo/game-symbols-playstation-5-icons-on-a-black-background-cross-triangle-square-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdDST1TxRlVOmHzsyiQKjt-DJjq3Qhe9xFnK-_qTavw=",
  },
  {
    id: 42,
    name: "Xbox Series X",
    brand: "Microsoft",
    price: 499.99,
    material: "Plastic",
    features: ["4K Gaming", "Game Pass"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/1476305675/photo/game-pad-video-game-controller.webp?a=1&b=1&s=612x612&w=0&k=20&c=l40ShFgYP0IYqCYdE8aryD4dq18d-7F8pKSxEpWlZCM=",
  },
  {
    id: 43,
    name: "Nintendo Switch",
    brand: "Nintendo",
    price: 299.99,
    material: "Plastic",
    features: ["Portable", "Multiplayer"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1634924052395-c8a61c1caedb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmludGVuZG8lMjBTd2l0Y2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 44,
    name: "Razor Electric Scooter",
    brand: "Razor",
    price: 199.99,
    material: "Aluminum",
    features: ["Rechargeable Battery", "Fast Ride"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/173750494/photo/end-of-summer-series.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z78ARf0YStdYyJ5rIZIO8RSjO1EfrtlIeb5JQB2fsOc=",
  },
  {
    id: 45,
    name: "Hoverboard Self Balancing Scooter",
    brand: "Hover-1",
    price: 179.99,
    material: "Plastic",
    features: ["Bluetooth Speaker", "LED Lights"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1221481102/photo/girl-ride-on-gyroscooter-sports-activities-outdor-riding-a-scooter-balance-on-the-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=XlOjgghGZLHdKhtSuXhIpwVlvhOC_-liTEHWxb-Vh_g=",
  },
  {
    id: 46,
    name: "Beyblade Burst Turbo Set",
    brand: "Hasbro",
    price: 29.99,
    material: "Plastic",
    features: ["Battle Spinners", "Arena Included"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/860519558/photo/futuristic-engine-part.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Q03un-sCVQQMqmAMxwzY5qNrCcJ0CvORKR0SHLabLA=",
  },
  {
    id: 47,
    name: "LEGO Harry Potter Hogwarts Castle",
    brand: "LEGO",
    price: 399.99,
    material: "Plastic",
    features: ["Collector's Set", "Detailed Design"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1479091703591-dfbc2986aaa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TEVHTyUyMEhhcnJ5JTIwUG90dGVyJTIwSG9nd2FydHMlMjBDYXN0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 48,
    name: "Pop It Fidget Toy",
    brand: "Fidget World",
    price: 7.99,
    material: "Silicone",
    features: ["Stress Relief", "Reusable"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/1987606494/photo/child-with-autism-holding-pop-it-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=loCnBNUB8S7qs0E1xnUL5BPbq88pd0lUXCmG6lGHip0=",
  },
  {
    id: 49,
    name: "Funko Pop Marvel Iron Man",
    brand: "Funko",
    price: 11.99,
    material: "Vinyl",
    features: ["Collector’s Item", "Marvel Theme"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/2216934291/photo/superhero-transformation.webp?a=1&b=1&s=612x612&w=0&k=20&c=aXUazUUI5-hr7ouqy-sWzpC-pntKE435dev5MsesV4Y=",
  },
  {
    id: 50,
    name: "Rocking Horse for Kids",
    brand: "Classic Toys",
    price: 89.99,
    material: "Wood",
    features: ["Smooth Rocking", "Sturdy Design"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/137925646/photo/girl-on-rocking-horse.webp?a=1&b=1&s=612x612&w=0&k=20&c=xr5HXlsAVtoR3RFblj4_Vk-ixj0wH5obR8ibBTuCaBA=",
  },
  {
    id: 51,
    name: "Giant Teddy Bear Plush",
    brand: "JoyLove",
    price: 59.99,
    material: "Plush",
    features: ["Soft & Cuddly", "Extra Large"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=c3gKwUiULgRzy7gwSnZU6SXr76-ccbTKkD_91gym3iY=",
  },

];



const ToysFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    material: [],
    features: [],
    minPrice: 0,
    maxPrice: 500,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredToys, setFilteredToys] = useState(toysData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = toysData;

    // Search
    if (filters.search) {
      result = result.filter((t) =>
        t.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Brand
    if (filters.brand.length > 0) {
      result = result.filter((t) => filters.brand.includes(t.brand));
    }

    // Material
    if (filters.material.length > 0) {
      result = result.filter((t) => filters.material.includes(t.material));
    }

    // Features
    if (filters.features.length > 0) {
      result = result.filter((t) =>
        filters.features.every((f) => t.features.includes(f))
      );
    }

    // Price
    result = result.filter(
      (t) => t.price >= filters.minPrice && t.price <= filters.maxPrice
    );

    // Rating
    if (filters.rating > 0) {
      result = result.filter((t) => t.rating >= filters.rating);
    }

    // Stock
    if (filters.stock !== null) {
      result = result.filter((t) => t.stock === filters.stock);
    }

    // Sorting
    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredToys([...result]);
    setVisibleCount(8); // reset on filter change
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
      material: [],
      features: [],
      minPrice: 0,
      maxPrice: 500,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8 my-[-50px]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* ✅ Sticky Filter Button for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black/80 text-black px-4 py-1 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* ✅ Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto custom-scrollbar
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
            placeholder="Search toys..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["Hasbro", "LEGO", "Mattel", "Fisher-Price", "Disney"].map(
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

          {/* Material */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Material</h3>
            {["Plastic", "Wood", "Metal", "Fabric", "Silicone"].map((mat) => (
              <label key={mat} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.material.includes(mat)}
                  onChange={() => toggleFilter("material", mat)}
                  className="mr-2"
                />
                {mat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {[
              "Interactive",
              "Educational",
              "Collector’s Edition",
              "Role Play",
              "Remote Control",
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
              max="500"
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

        {/* ✅ Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredToys.length} products found</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {filteredToys.slice(0, visibleCount).map((toy) => (
              <div
                key={toy.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{toy.name}</h3>
                <p className="text-sm text-gray-600">{toy.brand}</p>
                <p className="text-lg font-bold text-black">
                  ${toy.price}
                </p>
                <p className="text-sm">{toy.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredToys.length && (
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

export default ToysFilters;
