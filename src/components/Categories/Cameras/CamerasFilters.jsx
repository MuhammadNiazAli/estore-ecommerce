"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

export const camerasData = [
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


const CamerasFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    lensMount: [],
    features: [],
    minPrice: 0,
    maxPrice: 4000,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredCameras, setFilteredCameras] = useState(camerasData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = camerasData;

    // Search
    if (filters.search) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Brand
    if (filters.brand.length > 0) {
      result = result.filter((c) => filters.brand.includes(c.brand));
    }

    // Lens Mount
    if (filters.lensMount.length > 0) {
      result = result.filter((c) => filters.lensMount.includes(c.lensMount));
    }

    // Features
    if (filters.features.length > 0) {
      result = result.filter((c) =>
        filters.features.every((f) => c.features.includes(f))
      );
    }

    // Price
    result = result.filter(
      (c) => c.price >= filters.minPrice && c.price <= filters.maxPrice
    );

    // Rating
    if (filters.rating > 0) {
      result = result.filter((c) => c.rating >= filters.rating);
    }

    // Stock
    if (filters.stock !== null) {
      result = result.filter((c) => c.stock === filters.stock);
    }

    // Sorting
    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredCameras([...result]);
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
      lensMount: [],
      features: [],
      minPrice: 0,
      maxPrice: 4000,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* ✅ Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* ✅ Sidebar Filters */}
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
            placeholder="Search cameras..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["Canon", "Sony", "Nikon", "Fujifilm", "GoPro", "DJI", "Panasonic"].map((brand) => (
              <label key={brand} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleFilter("brand", brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>

          {/* Lens Mount */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Lens Mount</h3>
            {["RF", "EF", "E", "Z", "X", "Micro Four Thirds", "Fixed"].map((mount) => (
              <label key={mount} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.lensMount.includes(mount)}
                  onChange={() => toggleFilter("lensMount", mount)}
                  className="mr-2"
                />
                {mount}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {["4K Video", "8K Video", "IBIS", "Touchscreen", "Weather-Sealed", "Waterproof"].map((feature) => (
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
              max="4000"
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
            <p>{filteredCameras.length} products found</p>
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
            {filteredCameras.slice(0, visibleCount).map((camera) => (
              <div
                key={camera.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={camera.image}
                  alt={camera.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{camera.name}</h3>
                <p className="text-sm text-gray-600">{camera.brand}</p>
                <p className="text-lg font-bold text-black">
                  ${camera.price}
                </p>
                <p className="text-sm">
                  {camera.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredCameras.length && (
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

export default CamerasFilters;
