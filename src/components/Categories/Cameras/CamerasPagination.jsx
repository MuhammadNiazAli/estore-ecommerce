"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Sample camera products data (you can replace this with your actual camera data)
const sampleCameraProducts = [
  {
    id: 1,
    name: "Canon EOS R5",
    brand: "Canon",
    category: "Mirrorless",
    price: 3899,
    lensMount: "RF",
    features: ["8K Video", "IBIS", "Touchscreen"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1648781329670-5f00c1b37404?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Fub24lMjBFT1MlMjBSNXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Sony A7 IV",
    brand: "Sony",
    category: "Mirrorless",
    price: 2499,
    lensMount: "E",
    features: ["4K Video", "IBIS", "Weather-Sealed"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1647920564028-5756c7af4bd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29ueSUyMEE3JTIwSVZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Nikon Z6 II",
    brand: "Nikon",
    category: "Mirrorless",
    price: 1999,
    lensMount: "Z",
    features: ["4K Video", "Touchscreen", "Weather-Sealed"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1692030179940-c65af6a0e6b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29ueSUyMEE3JTIwSVZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Canon 5D Mark IV",
    brand: "Canon",
    category: "DSLR",
    price: 2799,
    lensMount: "EF",
    features: ["Full Frame", "Weather-Sealed"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1692030179565-814c41b22ad5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNvbnklMjBBNyUyMElWfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Nikon D850",
    brand: "Nikon",
    category: "DSLR",
    price: 2999,
    lensMount: "F",
    features: ["45MP Sensor", "Weather-Sealed"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/152128250/photo/wide-angle-lens-on-a-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=FEmzUXsK3Nf1DgUh5m0LZOvEQOcqIhv8bqzCrOqmgbc=",
  },
  {
    id: 6,
    name: "Fujifilm X-T5",
    brand: "Fujifilm",
    category: "Mirrorless",
    price: 1699,
    lensMount: "X",
    features: ["Retro Design", "IBIS", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1562528100-7790642cc75d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 7,
    name: "Sony A6400",
    brand: "Sony",
    category: "Mirrorless",
    price: 899,
    lensMount: "E",
    features: ["Compact", "Touchscreen", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1470940511639-1068d7764233?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "GoPro Hero 11",
    brand: "GoPro",
    category: "Action",
    price: 499,
    lensMount: "Fixed",
    features: ["Waterproof", "4K Video", "Stabilization"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1532963190277-e82a9d6e2d54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "DJI Action 2",
    brand: "DJI",
    category: "Action",
    price: 399,
    lensMount: "Fixed",
    features: ["Compact", "Waterproof", "Stabilization"],
    rating: 3,
    stock: true,
    image: "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    name: "Panasonic GH6",
    brand: "Panasonic",
    category: "Mirrorless",
    price: 2199,
    lensMount: "Micro Four Thirds",
    features: ["6K Video", "V-Log", "IBIS"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  // ✅ Adding 40 more cameras
  {
    id: 11,
    name: "Canon EOS R6 II",
    brand: "Canon",
    category: "Mirrorless",
    price: 2499,
    lensMount: "RF",
    features: ["4K Video", "IBIS", "Touchscreen"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1542328457-f450cab675c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    name: "Sony A7R V",
    brand: "Sony",
    category: "Mirrorless",
    price: 3899,
    lensMount: "E",
    features: ["61MP Sensor", "IBIS", "8K Video"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    name: "Nikon Z9",
    brand: "Nikon",
    category: "Mirrorless",
    price: 5499,
    lensMount: "Z",
    features: ["8K Video", "Pro Build", "Weather-Sealed"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1455100624998-cbee3a9eab8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    name: "Canon EOS RP",
    brand: "Canon",
    category: "Mirrorless",
    price: 999,
    lensMount: "RF",
    features: ["Compact", "Full Frame", "Touchscreen"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1676389758836-af3c83885dbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 15,
    name: "Fujifilm X-H2",
    brand: "Fujifilm",
    category: "Mirrorless",
    price: 1999,
    lensMount: "X",
    features: ["8K Video", "Retro Design", "IBIS"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1613213601168-104ccd105b07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 16,
    name: "Sony ZV-E10",
    brand: "Sony",
    category: "Vlogging",
    price: 699,
    lensMount: "E",
    features: ["Compact", "Flip Screen", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1516641463285-bf3f40e65bae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    name: "GoPro Hero 10",
    brand: "GoPro",
    category: "Action",
    price: 399,
    lensMount: "Fixed",
    features: ["Waterproof", "Stabilization", "Slow Motion"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1567013734261-5c1a2c46dde6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 18,
    name: "DJI Pocket 2",
    brand: "DJI",
    category: "Compact",
    price: 349,
    lensMount: "Fixed",
    features: ["Gimbal Stabilization", "Compact", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1567013734261-5c1a2c46dde6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 19,
    name: "Panasonic S5 II",
    brand: "Panasonic",
    category: "Mirrorless",
    price: 1999,
    lensMount: "L",
    features: ["6K Video", "IBIS", "V-Log"],
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 20,
    name: "Canon M50 Mark II",
    brand: "Canon",
    category: "Mirrorless",
    price: 649,
    lensMount: "EF-M",
    features: ["Compact", "Flip Screen", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1543242792-e06503878126?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
  },
  {
  id: 21,
  name: "Sony A1",
  brand: "Sony",
  category: "Mirrorless",
  price: 6499,
  lensMount: "E",
  features: ["8K Video", "Fast AF", "IBIS"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1586678742154-730aac24a3bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
},
{
  id: 22,
  name: "Canon EOS R3",
  brand: "Canon",
  category: "Mirrorless",
  price: 5999,
  lensMount: "RF",
  features: ["6K Video", "Pro Build", "Eye Control AF"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1582265476939-d83ffe02a965?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
},
{
  id: 23,
  name: "Nikon Z7 II",
  brand: "Nikon",
  category: "Mirrorless",
  price: 2999,
  lensMount: "Z",
  features: ["45MP Sensor", "IBIS", "4K Video"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1667567468452-0a865140c55a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
},
{
  id: 24,
  name: "Fujifilm X-Pro3",
  brand: "Fujifilm",
  category: "Mirrorless",
  price: 1899,
  lensMount: "X",
  features: ["Hybrid Viewfinder", "Retro Design"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1455321803702-557b68a4941b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
},
{
  id: 25,
  name: "Leica Q2",
  brand: "Leica",
  category: "Compact",
  price: 5499,
  lensMount: "Fixed",
  features: ["Full Frame", "Luxury Build", "Weather-Sealed"],
  rating: 5,
  stock: false,
  image: "https://plus.unsplash.com/premium_photo-1667538962342-2d9937f014d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
},
{
  id: 26,
  name: "Blackmagic Pocket 6K Pro",
  brand: "Blackmagic",
  category: "Cinema",
  price: 2495,
  lensMount: "EF",
  features: ["6K RAW", "Touchscreen", "Pro Video"],
  rating: 5,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1723914005335-16b7987ad8bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
},
{
  id: 27,
  name: "RED Komodo 6K",
  brand: "RED",
  category: "Cinema",
  price: 5995,
  lensMount: "RF",
  features: ["6K RAW", "Pro Build", "Compact"],
  rating: 5,
  stock: false,
  image: "https://images.unsplash.com/photo-1544520719-430620ea8d85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
},
{
  id: 28,
  name: "Sony FX3",
  brand: "Sony",
  category: "Cinema",
  price: 3899,
  lensMount: "E",
  features: ["Cinematic", "Compact", "4K Video"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1643804158143-4d41136e75a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
},
{
  id: 29,
  name: "Panasonic Lumix BGH1",
  brand: "Panasonic",
  category: "Cinema",
  price: 1999,
  lensMount: "Micro Four Thirds",
  features: ["Box Camera", "6K Video", "Modular"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1643804158143-4d41136e75a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
},
{
  id: 30,
  name: "Hasselblad X1D II 50C",
  brand: "Hasselblad",
  category: "Medium Format",
  price: 5750,
  lensMount: "XCD",
  features: ["50MP", "Luxury", "Medium Format"],
  rating: 5,
  stock: false,
  image: "https://images.unsplash.com/photo-1567126542353-3188bc1cf6cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
},
{
  id: 31,
  name: "Canon C70",
  brand: "Canon",
  category: "Cinema",
  price: 5499,
  lensMount: "RF",
  features: ["Super 35", "Pro Video", "ND Filters"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1564764006606-6d13ad82b908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
},
{
  id: 32,
  name: "Nikon D6",
  brand: "Nikon",
  category: "DSLR",
  price: 6499,
  lensMount: "F",
  features: ["Pro Build", "Fast AF", "Weather-Sealed"],
  rating: 5,
  stock: false,
  image: "https://images.unsplash.com/photo-1606706252658-ed02293ca3bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
},
{
  id: 33,
  name: "Canon 1DX Mark III",
  brand: "Canon",
  category: "DSLR",
  price: 6499,
  lensMount: "EF",
  features: ["Pro Sports", "Fast AF", "4K Video"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1643804158890-4e42d2942f8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
},
{
  id: 34,
  name: "Fujifilm GFX100S",
  brand: "Fujifilm",
  category: "Medium Format",
  price: 5999,
  lensMount: "G",
  features: ["102MP", "IBIS", "Medium Format"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1637408990228-08f245ac4e83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
},
{
  id: 35,
  name: "Sony RX100 VII",
  brand: "Sony",
  category: "Compact",
  price: 1199,
  lensMount: "Fixed",
  features: ["Pocket Size", "4K Video", "Fast AF"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1547214117-a112f358e61b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
},
{
  id: 36,
  name: "Ricoh GR III",
  brand: "Ricoh",
  category: "Compact",
  price: 999,
  lensMount: "Fixed",
  features: ["Street Photography", "Compact", "Snap Focus"],
  rating: 4,
  stock: true,
  image: "https://plus.unsplash.com/premium_photo-1723514588877-14fc4f7fb536?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
},
{
  id: 37,
  name: "Olympus OM-D E-M1 Mark III",
  brand: "Olympus",
  category: "Mirrorless",
  price: 1799,
  lensMount: "Micro Four Thirds",
  features: ["Weather-Sealed", "IBIS", "4K Video"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1564764006406-9d838c412d81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
},
{
  id: 38,
  name: "Panasonic LX100 II",
  brand: "Panasonic",
  category: "Compact",
  price: 799,
  lensMount: "Fixed",
  features: ["Compact", "4K Video", "Manual Controls"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1500646953400-045056a916d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
},
{
  id: 39,
  name: "Sigma fp L",
  brand: "Sigma",
  category: "Mirrorless",
  price: 2499,
  lensMount: "L",
  features: ["61MP Sensor", "Compact", "RAW Video"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1633279817918-68bb2975331e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
},
{
  id: 40,
  name: "Leica SL2",
  brand: "Leica",
  category: "Mirrorless",
  price: 5995,
  lensMount: "L",
  features: ["Full Frame", "Luxury", "IBIS"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1613146565646-c35971d10ea7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
},
{
  id: 41,
  name: "Canon EOS 90D",
  brand: "Canon",
  category: "DSLR",
  price: 1199,
  lensMount: "EF-S",
  features: ["32MP Sensor", "Crop Sensor", "Fast AF"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1617727680158-71b026e86160?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
},
{
  id: 42,
  name: "Pentax K-1 Mark II",
  brand: "Pentax",
  category: "DSLR",
  price: 1799,
  lensMount: "K",
  features: ["Full Frame", "Weather-Sealed", "Astrotracer"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1598793984586-27ecf0df4baa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
},
{
  id: 43,
  name: "Canon EOS R10",
  brand: "Canon",
  category: "Mirrorless",
  price: 979,
  lensMount: "RF-S",
  features: ["Compact", "Crop Sensor", "4K Video"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1549982673-f5ecc08f9483?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
},
{
  id: 44,
  name: "Sony ZV-1",
  brand: "Sony",
  category: "Vlogging",
  price: 749,
  lensMount: "Fixed",
  features: ["Compact", "Flip Screen", "4K Video"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1657357296179-f6e7cde6af1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
},
{
  id: 45,
  name: "DJI Osmo Pocket 3",
  brand: "DJI",
  category: "Compact",
  price: 519,
  lensMount: "Fixed",
  features: ["Gimbal", "Stabilization", "4K Video"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1521212137228-770d2c1624f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
},
{
  id: 46,
  name: "GoPro Max 360",
  brand: "GoPro",
  category: "Action",
  price: 499,
  lensMount: "Fixed",
  features: ["360 Video", "Waterproof", "Stabilization"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1496551729338-fa0c71a2c950?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
},
{
  id: 47,
  name: "Canon EOS R8",
  brand: "Canon",
  category: "Mirrorless",
  price: 1499,
  lensMount: "RF",
  features: ["Full Frame", "4K Video", "IBIS"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1496551729338-fa0c71a2c950?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
},
{
  id: 48,
  name: "Sony A7C II",
  brand: "Sony",
  category: "Mirrorless",
  price: 2199,
  lensMount: "E",
  features: ["Compact", "Full Frame", "IBIS"],
  rating: 5,
  stock: true,
  image: "https://images.unsplash.com/photo-1627561204922-652842302813?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
},
{
  id: 49,
  name: "Panasonic GH5 II",
  brand: "Panasonic",
  category: "Mirrorless",
  price: 1499,
  lensMount: "Micro Four Thirds",
  features: ["4K Video", "V-Log", "IBIS"],
  rating: 4,
  stock: true,
  image: "https://images.unsplash.com/photo-1493805503700-3219b693ffcc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8",
},
{
  id: 50,
  name: "Leica M11",
  brand: "Leica",
  category: "Rangefinder",
  price: 8995,
  lensMount: "M",
  features: ["60MP", "Luxury Build", "Manual Focus"],
  rating: 5,
  stock: false,
  image: "https://images.unsplash.com/photo-1668401498108-facf5cf3200a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8",
}
];

const CamerasPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(sampleCameraProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleCameraProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-white py-10 my-[-30px] mb-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Camera Collection
          </h2>
          <p className="text-gray-500 mt-2">Browse through our curated camera gear</p>
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

export default CamerasPagination;
