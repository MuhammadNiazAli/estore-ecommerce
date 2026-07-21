import React, { useState } from "react";

const baseProducts = [
  // === Dresses ===
  {
    id: 1,
    title: "Elegant Red Dress",
    category: "Dresses",
    price: 150,
    color: "Red",
    img: "https://images.unsplash.com/photo-1739773375426-880a10bea9a9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2,
    title: "Classic White Gown",
    category: "Dresses",
    price: 180,
    color: "White",
    img: "https://images.unsplash.com/photo-1735553817415-34af90cf7645?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 3,
    title: "Luxury Black Dress",
    category: "Dresses",
    price: 210,
    color: "Black",
    img: "https://images.unsplash.com/photo-1735553816869-9ebc8b1a17ef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 4,
    title: "Blue Evening Dress",
    category: "Dresses",
    price: 190,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1733310925418-7566070e6d9d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 5,
    title: "Elegant Beige Dress",
    category: "Dresses",
    price: 160,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1733310925430-667f8ece82ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 6,
    title: "Chic Gray Dress",
    category: "Dresses",
    price: 175,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1735553816813-f7640e8e521c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },

  // === Tops ===
  {
    id: 788,
    title: "Red Casual Top",
    category: "Tops",
    price: 60,
    color: "Red",
    img: "https://images.unsplash.com/photo-1693988505632-ff65ec0e320b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 888,
    title: "White Cotton Blouse",
    category: "Tops",
    price: 70,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1682965453758-9978b45a560a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 999,
    title: "Black Crop Top",
    category: "Tops",
    price: 55,
    color: "Black",
    img: "https://images.unsplash.com/photo-1618400219178-578c3368882e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1000,
    title: "Blue Denim Shirt",
    category: "Tops",
    price: 85,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1693988105039-a8458df83845?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1111,
    title: "Beige Linen Top",
    category: "Tops",
    price: 65,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1693988504628-6c8eefbce574?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1222,
    title: "Gray Polo Shirt",
    category: "Tops",
    price: 75,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1693989240286-f5c5176cba12?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },

  // === Jackets ===
  {
    id: 1333,
    title: "Red Bomber Jacket",
    category: "Jackets",
    price: 190,
    color: "Red",
    img: "https://plus.unsplash.com/premium_photo-1673757103441-2571045781d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1444,
    title: "White Leather Jacket",
    category: "Jackets",
    price: 230,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1727967193973-2132b6ff3a80?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1555,
    title: "Black Winter Jacket",
    category: "Jackets",
    price: 210,
    color: "Black",
    img: "https://plus.unsplash.com/premium_photo-1661409439834-84856fcfeebd?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1666,
    title: "Blue Sports Jacket",
    category: "Jackets",
    price: 170,
    color: "Blue",
    img: "https://plus.unsplash.com/premium_photo-1737370659011-3de25cbb6322?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1777,
    title: "Beige Trench Coat",
    category: "Jackets",
    price: 200,
    color: "Beige",
    img: "https://plus.unsplash.com/premium_photo-1737370659217-b39a989a6264?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 1888,
    title: "Gray Zip Jacket",
    category: "Jackets",
    price: 180,
    color: "Gray",
    img: "https://plus.unsplash.com/premium_photo-1737093820544-aad0af6b8538?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },

  // === Skirts ===
  {
    id: 1999,
    title: "Red Pleated Skirt",
    category: "Skirts",
    price: 70,
    color: "Red",
    img: "https://images.unsplash.com/photo-1521511189395-b82252213754?q=80&w=395&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2000,
    title: "White Mini Skirt",
    category: "Skirts",
    price: 90,
    color: "White",
    img: "https://images.unsplash.com/photo-1605084198811-7a358b91dc15?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2111,
    title: "Black Leather Skirt",
    category: "Skirts",
    price: 100,
    color: "Black",
    img: "https://images.unsplash.com/photo-1666932521022-3514c9fc441f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2222,
    title: "Blue Denim Skirt",
    category: "Skirts",
    price: 85,
    color: "Blue",
    img: "https://plus.unsplash.com/premium_photo-1674273915213-18d0c1f056b9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2333,
    title: "Beige Pencil Skirt",
    category: "Skirts",
    price: 75,
    color: "Beige",
    img: "https://plus.unsplash.com/premium_photo-1725914369469-0c8fbd81277c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2444,
    title: "Gray A-Line Skirt",
    category: "Skirts",
    price: 80,
    color: "Gray",
    img: "https://plus.unsplash.com/premium_photo-1727427850092-5874f7c7b075?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  // ===== Dresses More Variants =====
  {
    id: 2555,
    title: "Elegant Red Gown",
    category: "Dresses",
    price: 220,
    color: "Red",
    img: "https://images.unsplash.com/photo-1623609163887-ce62bb3baad1?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2666,
    title: "White Satin Dress",
    category: "Dresses",
    price: 200,
    color: "White",
    img: "https://images.unsplash.com/photo-1718871828963-450573c7b76f?q=80&w=317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2777,
    title: "Classic Black Midi Dress",
    category: "Dresses",
    price: 175,
    color: "Black",
    img: "https://images.unsplash.com/photo-1734944688814-84e2c89c48a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2888,
    title: "Blue Party Dress",
    category: "Dresses",
    price: 190,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1693987648230-1c6bc9f86067?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2999,
    title: "Beige Bodycon Dress",
    category: "Dresses",
    price: 165,
    color: "Beige",
    img: "https://plus.unsplash.com/premium_photo-1708276235167-7405b7fd2e93?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3000,
    title: "Gray Modern Dress",
    category: "Dresses",
    price: 180,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1693988501009-2eded870a6a8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ===== Tops More Variants =====
  {
    id: 3111,
    title: "Red Slim Fit Tee",
    category: "Tops",
    price: 55,
    color: "Red",
    img: "https://plus.unsplash.com/premium_photo-1671826911811-3d42cd0b28d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3222,
    title: "White Oversized Shirt",
    category: "Tops",
    price: 68,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1701208413644-c28268f8b7d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3333,
    title: "Black Turtleneck Top",
    category: "Tops",
    price: 90,
    color: "Black",
    img: "https://images.unsplash.com/photo-1679136341758-9341619bbb44?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3444,
    title: "Blue Casual Shirt",
    category: "Tops",
    price: 80,
    color: "Blue",
    img: "https://plus.unsplash.com/premium_photo-1727943085814-f1ed126ada57?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3555,
    title: "Beige Stylish Top",
    category: "Tops",
    price: 72,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3666,
    title: "Gray Everyday Tee",
    category: "Tops",
    price: 65,
    color: "Gray",
    img: "https://plus.unsplash.com/premium_photo-1674343821308-9c1bc5427489?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ===== Jackets More Variants =====
  {
    id: 3777,
    title: "Red Leather Jacket",
    category: "Jackets",
    price: 240,
    color: "Red",
    img: "https://images.unsplash.com/flagged/photo-1556955129-ceb8442ca79b?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3888,
    title: "White Winter Coat",
    category: "Jackets",
    price: 210,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1677624875681-e47dfef066db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3999,
    title: "Black Denim Jacket",
    category: "Jackets",
    price: 190,
    color: "Black",
    img: "https://images.unsplash.com/photo-1642514326920-3666653cc16e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4000,
    title: "Blue Hoodie Jacket",
    category: "Jackets",
    price: 175,
    color: "Blue",
    img: "https://plus.unsplash.com/premium_photo-1727943074845-dacef74aa757?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4111,
    title: "Beige Overcoat",
    category: "Jackets",
    price: 230,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1731581650184-8c76086ab226?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4222,
    title: "Gray Formal Jacket",
    category: "Jackets",
    price: 200,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1664894626633-3b5419c19507?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAzfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },

  // ===== Skirts More Variants =====
  {
    id: 4333,
    title: "Red Wrap Skirt",
    category: "Skirts",
    price: 78,
    color: "Red",
    img: "https://images.unsplash.com/photo-1615538786259-04ff6ccdf02b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4444,
    title: "White Maxi Skirt",
    category: "Skirts",
    price: 95,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1664202526367-53d9916b0a57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEzfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4555,
    title: "Black High Waist Skirt",
    category: "Skirts",
    price: 110,
    color: "Black",
    img: "https://images.unsplash.com/photo-1564864310852-e1e98eb07010?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQwfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4666,
    title: "Blue Satin Skirt",
    category: "Skirts",
    price: 88,
    color: "Blue",
    img: "https://plus.unsplash.com/premium_photo-1674273912680-14dc56e523b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQxfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4777,
    title: "Beige Midi Skirt",
    category: "Skirts",
    price: 79,
    color: "Beige",
    img: "https://plus.unsplash.com/premium_photo-1692574098104-b16daca8b190?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4888,
    title: "Gray Pleated Skirt",
    category: "Skirts",
    price: 82,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1751399566412-ad1194241c5c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzcxfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },

  // ===== More Dresses =====
{
  id: 4999,
  title: "Red Velvet Gown",
  category: "Dresses",
  price: 230,
  color: "Red",
  img: "https://images.unsplash.com/photo-1643618516911-9cb452481769?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5000,
  title: "White Wedding Dress",
  category: "Dresses",
  price: 250,
  color: "White",
  img: "https://images.unsplash.com/photo-1618143223650-2f715efc7d63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDYwfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5111,
  title: "Black Off-Shoulder Dress",
  category: "Dresses",
  price: 180,
  color: "Black",
  img: "https://images.unsplash.com/photo-1613005346461-81cfd2696eeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5222,
  title: "Blue Luxury Dress",
  category: "Dresses",
  price: 220,
  color: "Blue",
  img: "https://images.unsplash.com/photo-1587155471946-9e8d4d1132fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTUyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5333,
  title: "Beige Off-Shoulder Dress",
  category: "Dresses",
  price: 210,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1621390878576-571eca088f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQzfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5444,
  title: "Gray Party Dress",
  category: "Dresses",
  price: 185,
  color: "Gray",
  img: "https://images.unsplash.com/photo-1664894626606-283ad185a726?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDk0fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},

// ===== More Tops =====
{
  id: 5555,
  title: "Red Cropped Hoodie",
  category: "Tops",
  price: 85,
  color: "Red",
  img: "https://plus.unsplash.com/premium_photo-1708275295686-29b030c5bf3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTE3fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5666,
  title: "White Silk Blouse",
  category: "Tops",
  price: 92,
  color: "White",
  img: "https://images.unsplash.com/photo-1635814930732-0e0f8fbbfec5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDk5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5777,
  title: "Black Oversized Tee",
  category: "Tops",
  price: 70,
  color: "Black",
  img: "https://images.unsplash.com/photo-1747707499012-684390664060?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTA3fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5888,
  title: "Blue Sleeveless Top",
  category: "Tops",
  price: 75,
  color: "Blue",
  img: "https://plus.unsplash.com/premium_photo-1677678803324-2c6180a1a00d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTYxfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 5999,
  title: "Beige Button-Up Shirt",
  category: "Tops",
  price: 78,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1747321754355-8c8bdfac12b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTY2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6000,
  title: "Gray Round-Neck Tee",
  category: "Tops",
  price: 62,
  color: "Gray",
  img: "https://images.unsplash.com/photo-1622625841997-dfbffc98f4c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTg2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},

// ===== More Jackets =====
{
  id: 6111,
  title: "Red Puffy Jacket",
  category: "Jackets",
  price: 210,
  color: "Red",
  img: "https://images.unsplash.com/photo-1643618410229-450aac7615c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTk5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6222,
  title: "White Faux Fur Coat",
  category: "Jackets",
  price: 250,
  color: "White",
  img: "https://plus.unsplash.com/premium_photo-1671305004252-17666fa2c42b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjA1fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6333,
  title: "Black Classic Blazer",
  category: "Jackets",
  price: 230,
  color: "Black",
  img: "https://images.unsplash.com/photo-1605777973555-888f9265d2c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjIwfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6444,
  title: "Blue Windbreaker",
  category: "Jackets",
  price: 180,
  color: "Blue",
  img: "https://images.unsplash.com/photo-1596629562229-0fff022c6b74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njc1fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6555,
  title: "Beige Suede Jacket",
  category: "Jackets",
  price: 220,
  color: "Beige",
  img: "https://plus.unsplash.com/premium_photo-1708276242787-387acf1bbd4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njg5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6666,
  title: "Gray Zip-Up Hoodie",
  category: "Jackets",
  price: 190,
  color: "Gray",
  img: "https://images.unsplash.com/photo-1612636676503-77f496c96ef8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzA3fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},

// ===== More Skirts =====
{
  id: 6777,
  title: "Red Maxi Skirt",
  category: "Skirts",
  price: 88,
  color: "Red",
  img: "https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzUyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6888,
  title: "White A-Line Skirt",
  category: "Skirts",
  price: 99,
  color: "White",
  img: "https://images.unsplash.com/photo-1642786457217-37c74fbc169a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzcxfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 6999,
  title: "Black Wrap Skirt",
  category: "Skirts",
  price: 95,
  color: "Black",
  img: "https://images.unsplash.com/photo-1622021211530-7d31fd86862d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzk2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7000,
  title: "Blue Ruffled Skirt",
  category: "Skirts",
  price: 82,
  color: "Blue",
  img: "https://plus.unsplash.com/premium_photo-1727943075000-abd07f9f2736?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODA5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7111,
  title: "Beige Wrap Skirt",
  category: "Skirts",
  price: 91,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1684225357508-a66ce1dab44c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODIyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7222,
  title: "Gray Pencil Skirt",
  category: "Skirts",
  price: 89,
  color: "Gray",
  img: "https://images.unsplash.com/photo-1666932999823-8d2a413a024b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODI2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},

// ===== Even More Variants to reach 100 =====
{
  id: 7333,
  title: "Red Off-Shoulder Dress",
  category: "Dresses",
  price: 210,
  color: "Red",
  img: "https://images.unsplash.com/photo-1750032467505-4fe00a442b0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTcxfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7444,
  title: "White Evening Gown",
  category: "Dresses",
  price: 230,
  color: "White",
  img: "https://images.unsplash.com/photo-1732706437698-f2db5bfd7a88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTY5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7555,
  title: "Black Party Dress",
  category: "Dresses",
  price: 220,
  color: "Black",
  img: "https://images.unsplash.com/photo-1706153065448-bf75598a948a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTE1fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7666,
  title: "Blue Cocktail Dress",
  category: "Dresses",
  price: 240,
  color: "Blue",
  img: "https://plus.unsplash.com/premium_photo-1708275308999-2c8b177d631f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwNnx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 7777,
  title: "Beige Lace Dress",
  category: "Dresses",
  price: 200,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1617790274211-cbe0e677b425?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTkyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 7888,
  title: "Gray Knit Dress",
  category: "Dresses",
  price: 190,
  color: "Gray",
  img: "https://plus.unsplash.com/premium_photo-1737093820544-aad0af6b8538?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTYyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
// ===== Tops (More Variants) =====
{
  id: 7999,
  title: "Red Slim Blouse",
  category: "Tops",
  price: 72,
  color: "Red",
  img: "https://plus.unsplash.com/premium_photo-1708275303014-c9d5f5d572e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyN3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8000,
  title: "White Cropped Top",
  category: "Tops",
  price: 65,
  color: "White",
  img: "https://images.unsplash.com/photo-1684225358843-54b1132537b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1NHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8111,
  title: "Black Off-Shoulder Top",
  category: "Tops",
  price: 90,
  color: "Black",
  img: "https://images.unsplash.com/photo-1750032376213-8bf309af1a9f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTkzfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
},
{
  id: 8222,
  title: "Blue Halter Top",
  category: "Tops",
  price: 78,
  color: "Blue",
  img: "https://images.unsplash.com/photo-1679136340201-e9742dae1faa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxN3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8333,
  title: "Beige V-Neck Top",
  category: "Tops",
  price: 70,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1705784443622-6580144d9c9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzOHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8444,
  title: "Gray Casual Tee",
  category: "Tops",
  price: 68,
  color: "Gray",
  img: "https://images.unsplash.com/photo-1634588946349-f0799e47a19d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2Nnx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},

// ===== Jackets (More Variants) =====
{
  id: 8555,
  title: "Red Varsity Jacket",
  category: "Jackets",
  price: 210,
  color: "Red",
  img: "https://images.unsplash.com/photo-1633048199679-3bfd4ec3200d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4NHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8666,
  title: "White Bomber Jacket",
  category: "Jackets",
  price: 225,
  color: "White",
  img: "https://images.unsplash.com/photo-1510847878063-dbcf28b5c7cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4OXx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8777,
  title: "Black Formal Blazer",
  category: "Jackets",
  price: 240,
  color: "Black",
  img: "https://images.unsplash.com/photo-1551977021-af54e6399e55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3N3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8888,
  title: "Blue Quilted Jacket",
  category: "Jackets",
  price: 195,
  color: "Blue",
  img: "https://images.unsplash.com/photo-1684225358875-1b8fcf322cbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2NHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 8999,
  title: "Beige Classic Coat",
  category: "Jackets",
  price: 235,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1584339312444-6952d098e152?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0OHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9000,
  title: "Gray Bomber Jacket",
  category: "Jackets",
  price: 205,
  color: "Gray",
  img: "https://plus.unsplash.com/premium_photo-1664378762212-96fe9bd34d56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4Nnx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},

// ===== Skirts (More Variants) =====
{
  id: 9111,
  title: "Red Mini Skirt",
  category: "Skirts",
  price: 85,
  color: "Red",
  img: "https://images.unsplash.com/photo-1633048199472-900f29c5235e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExMnx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9222,
  title: "White Lace Skirt",
  category: "Skirts",
  price: 98,
  color: "White",
  img: "https://plus.unsplash.com/premium_photo-1690034979177-d736ee09f361?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExMHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9333,
  title: "Black Satin Skirt",
  category: "Skirts",
  price: 102,
  color: "Black",
  img: "https://images.unsplash.com/photo-1644769752255-e80980882aeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExN3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9444,
  title: "Blue High-Waist Skirt",
  category: "Skirts",
  price: 88,
  color: "Blue",
  img: "https://images.unsplash.com/photo-1684225359412-223f429b3f81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyNXx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9555,
  title: "Beige Pencil Skirt",
  category: "Skirts",
  price: 92,
  color: "Beige",
  img: "https://images.unsplash.com/photo-1664889794488-18b14b4a2206?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0OHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9666,
  title: "Gray Layered Skirt",
  category: "Skirts",
  price: 87,
  color: "Gray",
  img: "https://images.unsplash.com/photo-1583777256056-4174d78d27b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1M3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},

// ===== Bonus Items for Total 100+ =====
{
  id: 9777,
  title: "Red Wrap Dress",
  category: "Dresses",
  price: 225,
  color: "Red",
  img: "https://images.unsplash.com/photo-1719266307151-c07fadbee416?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3M3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9899,
  title: "White Bodycon Dress",
  category: "Dresses",
  price: 215,
  color: "White",
  img: "https://images.unsplash.com/photo-1732706430833-c605baf02917?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwM3x8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 9988,
  title: "Black Cocktail Dress",
  category: "Dresses",
  price: 235,
  color: "Black",
  img: "https://images.unsplash.com/photo-1685538540414-9248617bec83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwMHx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
{
  id: 10000,
  title: "Blue Wrap Dress",
  category: "Dresses",
  price: 245,
  color: "Blue",
  img: "https://images.unsplash.com/photo-1568047422922-ab797aeabfb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4NXx8Y2xvdGhlcyUyMHdvbWFufGVufDB8fDB8fHww",
},
];


const extraImages = [
  // Red related images
  "https://images.unsplash.com/photo-1735553817396-510cfe7066e6?q=80&w=387", // For Red products
  "https://images.unsplash.com/photo-1735553816811-7f8bb61fbf08?q=80&w=387", // For Red products

  // White related images
  "https://images.unsplash.com/photo-1739773375426-880a10bea9a9?q=80&w=387", // For White products
  "https://images.unsplash.com/photo-1739773375441-e8ded0ce3605?q=80&w=387", // For White products

  // Black related images
  "https://images.unsplash.com/photo-1739773375403-36a4ba177f73?q=80&w=387", // For Black products
  "https://images.unsplash.com/photo-1735553817411-78c7fb5e78c2?q=80&w=387", // For Black products

  // Blue related images
  "https://images.unsplash.com/photo-1735553817415-34af90cf7645?q=80&w=387", // For Blue products

  // Beige related images
  "https://images.unsplash.com/photo-1739773375246-621154fc080f?q=80&w=387", // For Beige products

  // Gray related images
  "https://images.unsplash.com/photo-1735553816769-7d30e5b1a19a?q=80&w=387", // For Gray products
];

// ✅ Generate large dataset dynamically
const productsData = [...baseProducts];
for (let i = 7; i <= 60; i++) {
  const colors = ["Red", "White", "Black", "Blue", "Beige", "Gray"];
  const categories = ["Dresses", "Tops", "Jackets", "Skirts"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomPrice = Math.floor(Math.random() * 230) + 20;
  const randomImg = extraImages[Math.floor(Math.random() * extraImages.length)];
  productsData.push({
    id: i,
    title: `${randomColor} ${randomCategory} ${i}`,
    category: randomCategory,
    price: randomPrice,
    color: randomColor,
    img: randomImg, // Related image (but you can improve mapping manually later)
  });
}

const categories = ["All", "Dresses", "Tops", "Jackets", "Skirts"];
const colors = ["All", "Red", "White", "Black", "Blue", "Beige", "Gray"];

const WomanClothsFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [priceRange, setPriceRange] = useState(250);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, setLoading] = useState(false);

  const filteredProducts = productsData.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const colorMatch = selectedColor === "All" || product.color === selectedColor;
    const priceMatch = product.price <= priceRange;
    return categoryMatch && colorMatch && priceMatch;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 20);
      setLoading(false);
    }, 1000); // Simulate loading animation
  };

  return (
    <section className="w-full my-8 bg-white text-gray-900 py-8 px-3 md:px-6">
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #ffffff;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #b45309, #d97706);
          border-radius: 10px;
          border: 2px solid #ffffff;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #b45309, #b45309);
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-xl mb-8">
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto custom-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(20);
                }}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-amber-700 text-gray-900"
                    : "bg-white hover:bg-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-2 md:ml-auto">
            <label className="text-xs md:text-sm whitespace-nowrap">
              Max Price: ${priceRange}
            </label>
            <input
              type="range"
              min="20"
              max="250"
              value={priceRange}
              onChange={(e) => {
                setPriceRange(Number(e.target.value));
                setVisibleCount(20);
              }}
              className="w-28 md:w-40 accent-amber-700"
            />
          </div>

          {/* Color Filter */}
          <div className="flex gap-2 overflow-x-auto custom-scroll">
            {colors.map((clr) => (
              <button
                key={clr}
                onClick={() => {
                  setSelectedColor(clr);
                  setVisibleCount(20);
                }}
                className={`px-2 md:px-3 py-1 rounded-md text-xs font-medium transition border whitespace-nowrap ${
                  selectedColor === clr
                    ? "bg-amber-700 text-gray-900 border-amber-700"
                    : "border-gray-200 text-gray-700 hover:bg-gray-500"
                }`}
              >
                {clr}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.03] transition transform"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-semibold line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-600">{product.category}</p>
                  <p className="text-amber-700 font-bold mt-1 md:mt-2">
                    ${product.price}
                  </p>
                  <button className="mt-2 w-full bg-amber-700 text-gray-900 py-1.5 md:py-2 rounded-md hover:bg-amber-600 transition text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No products match your filters.
            </p>
          )}
        </div>

        {/* Show More Button */}
        {filteredProducts.length > visibleCount && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              disabled={loading}
              className="bg-amber-700 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Show More"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WomanClothsFilter;
