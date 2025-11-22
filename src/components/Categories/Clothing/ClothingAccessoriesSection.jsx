"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessories = [
 {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 25,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1726862967949-46eb133fa25c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkxfHx8ZW58MHx8fHx8"
  },
  {
    id: 2,
    name: "Denim Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 79,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Running Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 99,
    rating: 4,
    stock: false,
    image: "https://images.unsplash.com/photo-1721637245920-4073818252b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 4,
    name: "Hooded Sweatshirt",
    brand: "CozyFit",
    category: "Hoodies",
    price: 49,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    brand: "UrbanWear",
    category: "Jeans",
    price: 59,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 6,
    name: "Leather Bomber Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 149,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1727516299214-c4d54704b045?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 7,
    name: "Oversized Hoodie",
    brand: "CozyFit",
    category: "Hoodies",
    price: 55,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
  },
  {
    id: 8,
    name: "Graphic Print T-Shirt",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 29,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623609163863-157d0cfdfc8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
  },
  {
    id: 9,
    name: "Classic Chinos",
    brand: "EliteStyle",
    category: "Pants",
    price: 45,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1693443688057-85f57b872a3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
  },
  {
    id: 10,
    name: "Linen Casual Shirt",
    brand: "UrbanWear",
    category: "Shirts",
    price: 39,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8"
  },
  {
    id: 11,
    name: "Puffer Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 129,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1661308219954-a8035fbeb546?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8"
  },
  {
    id: 12,
    name: "Casual Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 75,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1713881649391-a1c8ddaf83cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
  },
  {
    id: 13,
    name: "Cropped Hoodie",
    brand: "CozyFit",
    category: "Hoodies",
    price: 52,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8"
  },
  {
    id: 14,
    name: "Cargo Pants",
    brand: "EliteStyle",
    category: "Pants",
    price: 49,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1665615837850-99bfaf83bab8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8"
  },
  {
    id: 15,
    name: "Slim Fit Polo Shirt",
    brand: "UrbanWear",
    category: "Shirts",
    price: 32,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1727519366940-fd9b926e362e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8"
  },
  {
    id: 16,
    name: "High Waist Jeans",
    brand: "UrbanWear",
    category: "Jeans",
    price: 69,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1564438259159-32c208873398?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8"
  },
  {
    id: 17,
    name: "Running Track Pants",
    brand: "Sportify",
    category: "Pants",
    price: 59,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1747221079482-95eb1a2d3396?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8"
  },
  {
    id: 18,
    name: "Logo Baseball Cap",
    brand: "StreetEdge",
    category: "Accessories",
    price: 19,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1713881587420-113c1c43e28a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8"
  },
  {
    id: 19,
    name: "Wool Overcoat",
    brand: "StyleHub",
    category: "Jackets",
    price: 199,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1611312449297-a69dc9c3987b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8"
  },
  {
    id: 20,
    name: "Classic Cardigan",
    brand: "CozyFit",
    category: "Sweaters",
    price: 55,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1727515192207-3dc860bfd773?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8"
  },
  {
    id: 21,
    name: "Vintage Graphic Tee",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 28,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 22,
    name: "Cotton Hoodie",
    brand: "CozyFit",
    category: "Hoodies",
    price: 50,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1620799139652-715e4d5b232d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 23,
    name: "Stretch Fit Jeans",
    brand: "UrbanWear",
    category: "Jeans",
    price: 65,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 24,
    name: "Lightweight Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 120,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1625517527341-1e57d526612d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 25,
    name: "Performance Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 89,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1716951923523-0c76b14d4852?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 26,
    name: "Crew Neck T-Shirt",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 30,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1623052760790-9605a8579730?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 27,
    name: "Premium Denim",
    brand: "EliteStyle",
    category: "Jeans",
    price: 70,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
  },
  {
    id: 28,
    name: "Windbreaker Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 115,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1671438118097-479e63198629?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
  },
  {
    id: 29,
    name: "Classic Sweatpants",
    brand: "CozyFit",
    category: "Pants",
    price: 44,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1625910513394-ea511bed44ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
  },
  {
    id: 30,
    name: "Striped Casual Shirt",
    brand: "UrbanWear",
    category: "Shirts",
    price: 37,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
  },
    {
    id: 31,
    name: "Oversized Flannel Shirt",
    brand: "UrbanWear",
    category: "Shirts",
    price: 42,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1687275160744-ef140bf5529c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
  },
  {
    id: 32,
    name: "Quilted Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 135,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1666358068151-0b4b541cd778?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8"
  },
  {
    id: 33,
    name: "Basic V-Neck T-Shirt",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 27,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1687275161342-8699c61e4364?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
  },
  {
    id: 34,
    name: "Zip-Up Hoodie",
    brand: "CozyFit",
    category: "Hoodies",
    price: 58,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8"
  },
  {
    id: 35,
    name: "Skinny Fit Jeans",
    brand: "UrbanWear",
    category: "Jeans",
    price: 72,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1687275160744-6cb5bb16544a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8"
  },
  {
    id: 36,
    name: "Classic Wool Sweater",
    brand: "CozyFit",
    category: "Sweaters",
    price: 62,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8"
  },
  {
    id: 37,
    name: "Polo Neck Sweater",
    brand: "EliteStyle",
    category: "Sweaters",
    price: 68,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675186049297-035b3f692c04?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 38,
    name: "Bomber Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 155,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1747222306573-876064b8558c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 39,
    name: "Ripped Slim Jeans",
    brand: "UrbanWear",
    category: "Jeans",
    price: 66,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 40,
    name: "Round Neck Sweatshirt",
    brand: "CozyFit",
    category: "Sweaters",
    price: 53,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723759498770-2778a01cdd97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
  },
  {
    id: 41,
    name: "Lightweight Rain Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 125,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
  },
  {
    id: 42,
    name: "Fitted Dress Shirt",
    brand: "EliteStyle",
    category: "Shirts",
    price: 55,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
  },
  {
    id: 43,
    name: "Sleeveless Tank Top",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1683121990966-0535d150615f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
  },
  {
    id: 44,
    name: "Basic Crew Neck Tee",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 24,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1683121990966-0535d150615f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
  },
  {
    id: 45,
    name: "Drawstring Sweatpants",
    brand: "CozyFit",
    category: "Pants",
    price: 47,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1683121990966-0535d150615f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
  },
  {
    id: 46,
    name: "Formal Blazer",
    brand: "EliteStyle",
    category: "Jackets",
    price: 180,
    rating: 5,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723874637772-312f7726c1d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8"
  },
  {
    id: 47,
    name: "Classic Hoodie Dress",
    brand: "CozyFit",
    category: "Hoodies",
    price: 63,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1663100940306-d9d419fe7cfa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8"
  },
  {
    id: 48,
    name: "Basic Crew Socks (Pack of 3)",
    brand: "StreetEdge",
    category: "Accessories",
    price: 15,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1669659065009-5995350ae2ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8"
  },
  {
    id: 49,
    name: "Wool Beanie",
    brand: "StreetEdge",
    category: "Accessories",
    price: 18,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1723662277377-41d88486f6f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8"
  },
  {
    id: 50,
    name: "Faux Leather Belt",
    brand: "StreetEdge",
    category: "Accessories",
    price: 22,
    rating: 4,
    stock: true,
    image: "https://plus.unsplash.com/premium_photo-1752533865958-21ee8633718c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8"
  }
];

const ClothingAccessoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleAccessories = accessories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(accessories.length);
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-4 my-[-30px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Clothing Accessories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleAccessories.map(({ id, name, price, rating, image }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg border border-yellow-500 flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_15px_3px_rgba(202,138,4,0.7)]"
              style={{ willChange: "transform, box-shadow" }}
            >
              {/* Image */}
              <img
                src={image}
                alt={name}
                className="rounded-t-lg w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-600" />
                    )
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xl font-bold">{price}</p>

                  <button
                    aria-label={`Add ${name} to cart`}
                    className="bg-yellow-500 text-gray-900 p-2 rounded-md hover:bg-yellow-400 transition"
                  >
                    <FaCartPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < accessories.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClothingAccessoriesSection;
