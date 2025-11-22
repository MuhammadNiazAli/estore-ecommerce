import React, { useState, useRef, useEffect } from "react";
import { FiChevronRight, FiX } from "react-icons/fi";

const productsData = [
  {
    id: 1,
    name: "Urban Explorer",
    price: 249,
    oldPrice: 349,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["black", "brown"],
    rating: 4.8,
    img: "https://plus.unsplash.com/premium_photo-1670623042512-1a5ecebc3f42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VXJiYW4lMjBFeHBsb3JlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Luxury Wool Coat",
    price: 399,
    oldPrice: 499,
    category: "Coat",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["gray", "beige"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1614252368727-99517bc90d7b?w=600",
  },
  {
    id: 3,
    name: "Classic Denim Shirt",
    price: 129,
    oldPrice: 179,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M"],
    colors: ["blue", "black"],
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1713881649391-a1c8ddaf83cd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Modern Bomber Jacket",
    price: 219,
    oldPrice: 289,
    category: "Jacket",
    type: "Man",
    feature: "Casual",
    size: ["M", "L", "XL"],
    colors: ["black", "green"],
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1548883354-d056ab7b441f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Slim Fit Blazer",
    price: 349,
    oldPrice: 429,
    category: "Coat",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["navy", "gray"],
    rating: 4.7,
    img: "https://plus.unsplash.com/premium_photo-1739699781720-29ec3e8e0db2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Casual Plaid Shirt",
    price: 99,
    oldPrice: 139,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["red", "blue"],
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1622383129027-0f7f544b8abe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Leather Moto Jacket",
    price: 429,
    oldPrice: 529,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["black"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Wool Overcoat",
    price: 399,
    oldPrice: 499,
    category: "Coat",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["camel", "gray"],
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Denim Button-up",
    price: 119,
    oldPrice: 159,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M"],
    colors: ["blue"],
    rating: 4.4,
    img: "https://media.istockphoto.com/id/931173966/photo/relaxed-young-man-wearing-blue-denim-shirt-with-hands-in-pockets-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=yM_nkNCoBEIGKbdXtWVIc0a754NWwnWzrsHkhETrld4=",
  },
  {
    id: 10,
    name: "Formal Suit Jacket",
    price: 499,
    oldPrice: 599,
    category: "Suit",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["black", "navy"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1592878849122-facb97520f9e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Casual Hoodie",
    price: 79,
    oldPrice: 99,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["gray", "black"],
    rating: 4.1,
    img: "https://images.unsplash.com/photo-1609558593662-50c873dca4ee?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Classic Trench Coat",
    price: 379,
    oldPrice: 459,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["beige"],
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1750586403232-ddc60c0e34aa?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Leather Vest",
    price: 199,
    oldPrice: 249,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["black", "brown"],
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Formal Dress Shirt",
    price: 139,
    oldPrice: 179,
    category: "Shirt",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["white", "blue"],
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Winter Parka",
    price: 329,
    oldPrice: 399,
    category: "Jacket",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["navy", "black"],
    rating: 4.7,
    img: "https://media.istockphoto.com/id/1759033360/photo/womens-black-warm-winter-jacket-coat-parka-on-a-light-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=PPYntm0Nw2UXMd6JkRrpspplLkBh_gdhQaVCYJtxFUg=",
  },
  {
    id: 16,
    name: "Casual Polo Shirt",
    price: 89,
    oldPrice: 119,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["red", "white", "blue"],
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1604006852563-e8b846baca6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fENhc3VhbCUyMFBvbG8lMjBTaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 17,
    name: "Double-breasted Coat",
    price: 449,
    oldPrice: 549,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["gray", "black"],
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1660776864454-628551d83a2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fERvdWJsZSUyMGJyZWFzdGVkJTIwQ29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 18,
    name: "Fitted Leather Jacket",
    price: 459,
    oldPrice: 559,
    category: "Jacket",
    type: "Man",
    feature: "Premium",
    size: ["M", "L"],
    colors: ["black"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1727524366429-27de8607d5f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rml0dGVkJTIwTGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 19,
    name: "Casual Chambray Shirt",
    price: 109,
    oldPrice: 139,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["blue", "white"],
    rating: 4.4,
    img: "https://media.istockphoto.com/id/1189728198/photo/smiling-boy-standing-with-arms-crossed-against-a-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=gNkJjFNFdSuP0zdvvQqHSELGCmc_NzQC0P4lY2JDiaM=",
  },
  {
    id: 20,
    name: "Formal Tuxedo Jacket",
    price: 599,
    oldPrice: 699,
    category: "Suit",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["black"],
    rating: 4.9,
    img: "https://plus.unsplash.com/premium_photo-1661308219954-a8035fbeb546?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9ybWFsJTIwVHV4ZWRvJTIwSmFja2V0fGVufDB8fDB8fHww",
  },
  {
    id: 21,
    name: "Zip-up Hoodie",
    price: 69,
    oldPrice: 89,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["gray", "black", "blue"],
    rating: 4.2,
    img: "https://images.unsplash.com/photo-1638417286482-9a9389ee6dd4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFppcCUyMHVwJTIwSG9vZGllJTIwYmx1ZSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 22,
    name: "Classic Pea Coat",
    price: 389,
    oldPrice: 479,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["navy", "gray"],
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1737508945707-ebdccee97cc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENsYXNzaWMlMjBQZWElMjBDb2F0fGVufDB8fDB8fHww",
  },
  {
    id: 23,
    name: "Suede Moto Jacket",
    price: 449,
    oldPrice: 549,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["brown"],
    rating: 4.8,
    img: "https://plus.unsplash.com/premium_photo-1744395627439-d55355978356?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN1ZWRlJTIwTW90byUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 24,
    name: "Formal Dress Shirt",
    price: 139,
    oldPrice: 179,
    category: "Shirt",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["white", "blue"],
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZvcm1hbCUyMERyZXNzJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 25,
    name: "Thermal Winter Coat",
    price: 339,
    oldPrice: 399,
    category: "Coat",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["black", "navy"],
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1700168077358-692db90c8b7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGhlcm1hbCUyMFdpbnRlciUyMENvYXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    name: "Casual V-neck Sweater",
    price: 89,
    oldPrice: 119,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["gray", "white"],
    rating: 4.3,
    img: "https://media.istockphoto.com/id/2225501106/photo/classic-brown-v-neck-sweater-on-white-background-stylish-and-versatile-knitwear-fashion.webp?a=1&b=1&s=612x612&w=0&k=20&c=hhk2c_2-_3sdJ_RHgw1ncbjWRLZYsv06n8Dd50juXME=",
  },
  {
    id: 27,
    name: "Double-breasted Blazer",
    price: 449,
    oldPrice: 549,
    category: "Suit",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["gray", "black"],
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1672595798619-b287d7cdde70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fERvdWJsZSUyMGJyZWFzdGVkJTIwQmxhemVyJTIwbWFuJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 28,
    name: "Faux Leather Jacket",
    price: 299,
    oldPrice: 359,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["black"],
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1562037171-59d5986730fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fERvdWJsZSUyMGJyZWFzdGVkJTIwQmxhemVyJTIwbWFuJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 29,
    name: "Casual Flannel Shirt",
    price: 109,
    oldPrice: 139,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["red", "blue"],
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1592961659807-88f71d4acd3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhc3VhbCUyMEZsYW5uZWwlMjBTaGlydCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 30,
    name: "Formal Suit Trousers",
    price: 249,
    oldPrice: 299,
    category: "Suit",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["black", "gray"],
    rating: 4.7,
    img: "https://plus.unsplash.com/premium_photo-1661425828618-f48a8beb4f6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZvcm1hbCUyMFN1aXQlMjBUcm91c2VycyUyMGJsYWNrfGVufDB8fDB8fHww",
  },
  {
    id: 31,
    name: "Casual Sweatshirt",
    price: 79,
    oldPrice: 99,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["gray", "black"],
    rating: 4.1,
    img: "https://plus.unsplash.com/premium_photo-1727967189498-fb2c7d0a1e30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENhc3VhbCUyMFN3ZWF0c2hpcnQlMjBib3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 32,
    name: "Classic Wool Coat",
    price: 389,
    oldPrice: 479,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["navy", "gray"],
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1675408824613-27a7e7b8d475?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENsYXNzaWMlMjBXb29sJTIwQ29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 33,
    name: "Denim Trucker Jacket",
    price: 259,
    oldPrice: 299,
    category: "Jacket",
    type: "Man",
    feature: "Casual",
    size: ["M", "L"],
    colors: ["blue"],
    rating: 4.5,
    img: "https://media.istockphoto.com/id/2207502035/photo/denim-jacket-isolated-on-white-nobody-trendy-fashion-denim-clothing-single-object.webp?a=1&b=1&s=612x612&w=0&k=20&c=_wKUaSPuMKAUS-oRHzfHyybHrxzRbLDgLzc4QgLrwgE=",
  },
  {
    id: 34,
    name: "Striped Dress Shirt",
    price: 129,
    oldPrice: 169,
    category: "Shirt",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["white", "blue"],
    rating: 4.6,
    img: "https://media.istockphoto.com/id/136795052/photo/blue-pajama-top-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EEaiD-rMK4d3u92oGz2WtqlTO5m96XIfiGlYCz-BGv0=",
  },
  {
    id: 35,
    name: "Thermal Down Jacket",
    price: 349,
    oldPrice: 429,
    category: "Jacket",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["black", "gray"],
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1609721819476-2732253de75a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlcm1hbCUyMERvd24lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 36,
    name: "Casual Henley Shirt",
    price: 89,
    oldPrice: 119,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["red", "white", "blue"],
    rating: 4.3,
    img: "https://plus.unsplash.com/premium_photo-1747643595799-331fabe5dc9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FzdWFsJTIwSGVubGV5JTIwU2hpcnQlMjByZWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 37,
    name: "Wool Blend Overcoat",
    price: 459,
    oldPrice: 559,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["camel", "gray"],
    rating: 4.8,
    img: "https://media.istockphoto.com/id/184330267/photo/womans-coat-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=vbSBOS4PGfN6ifD61iVB_-n7t2gDXlcGZpH2-fIFYNs=",
  },
  {
    id: 38,
    name: "Leather Biker Jacket",
    price: 499,
    oldPrice: 599,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["black"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1591216089766-cc5f26b8d447?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExlYXRoZXIlMjBCaWtlciUyMEphY2tldCUyMGJsYWNrJTIwY29sb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 39,
    name: "Casual Chambray Shirt",
    price: 119,
    oldPrice: 149,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["blue", "white"],
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1671438118257-cefa6c86fd50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhc3VhbCUyMENoYW1icmF5JTIwU2hpcnQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 40,
    name: "Formal Black Suit",
    price: 599,
    oldPrice: 699,
    category: "Suit",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["black"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9ybWFsJTIwQmxhY2slMjBTdWl0JTIwYmxhY2slMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 41,
    name: "Striped Sweatshirt",
    price: 79,
    oldPrice: 99,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["gray", "black"],
    rating: 4.1,
    img: "https://media.istockphoto.com/id/2190177703/photo/striped-sweatshirt-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=L0exwUtvb964hdw80UlG2xVGO3hvG2XXHBthIDItz-w=",
  },
  {
    id: 42,
    name: "Classic Tweed Coat",
    price: 389,
    oldPrice: 479,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["brown", "gray"],
    rating: 4.7,
    img: "https://media.istockphoto.com/id/183234621/photo/male-warm-winter-jacket-with-hood-made-of-wool.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nex5T4esA28UCXS5_T07S2k5Kg1MPYFw1nTw0yh0XQY=",
  },
  {
    id: 43,
    name: "Denim Jacket",
    price: 259,
    oldPrice: 299,
    category: "Jacket",
    type: "Man",
    feature: "Casual",
    size: ["M", "L"],
    colors: ["blue"],
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1624548140129-74786c5f1279?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fERlbmltJTIwSmFja2V0JTIwYmx1ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 44,
    name: "Formal White Shirt",
    price: 129,
    oldPrice: 169,
    category: "Shirt",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["white"],
    rating: 4.6,
    img: "https://media.istockphoto.com/id/157567639/photo/close-up-of-a-white-mens-shirts.webp?a=1&b=1&s=612x612&w=0&k=20&c=2q_24-Rqi9uKITDObzaEgNe_RDRxXHC-3crd_WQBjTs=",
  },
  {
    id: 45,
    name: "Down Filled Jacket",
    price: 349,
    oldPrice: 429,
    category: "Jacket",
    type: "Man",
    feature: "Premium",
    size: ["L", "XL"],
    colors: ["black", "gray"],
    rating: 4.7,
    img: "https://media.istockphoto.com/id/1790818964/photo/winter-jacket-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=C-s_5TWjT1tKX27UJ6xp7XdJ7GXyvAjpHfmm3hgTl9c=",
  },
  {
    id: 46,
    name: "Casual Henley Shirt",
    price: 89,
    oldPrice: 119,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["red", "white", "blue"],
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1674664248599-a3c1828bcd27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fENhc3VhbCUyMEhlbmxleSUyMFNoaXJ0JTIwcmVkfGVufDB8fDB8fHww",
  },
  {
    id: 47,
    name: "Wool Blend Overcoat",
    price: 459,
    oldPrice: 559,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["camel", "gray"],
    rating: 4.8,
    img: "https://media.istockphoto.com/id/1169899398/photo/beige-wool-coat-hanging-on-clothes-hanger-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kn275zKw97VPD0ri01fG4NBzCwBOREN_StBlJCXqKJg=",
  },
  {
    id: 48,
    name: "Leather Biker Jacket",
    price: 499,
    oldPrice: 599,
    category: "Jacket",
    type: "Man",
    feature: "Classic",
    size: ["M", "L"],
    colors: ["black"],
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1646300915380-1d3180458cde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fExlYXRoZXIlMjBCaWtlciUyMEphY2tldCUyMGJsYWNrfGVufDB8fDB8fHww",
  },
  {
    id: 49,
    name: "Casual Flannel Shirt",
    price: 109,
    oldPrice: 139,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["red", "blue"],
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1717241607355-67ac8d3eb7c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzdWFsJTIwRmxhbm5lbCUyMFNoaXJ0JTIwcmVkfGVufDB8fDB8fHww",
  },
  {
    id: 50,
    name: "Formal Suit Trousers",
    price: 249,
    oldPrice: 299,
    category: "Suit",
    type: "Man",
    feature: "Premium",
    size: ["M", "L", "XL"],
    colors: ["black", "gray"],
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1697811599461-38124b3decc9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9ybWFsJTIwU3VpdCUyMFRyb3VzZXJzJTIwZ3JheXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 51,
    name: "Casual Sweatshirt",
    price: 79,
    oldPrice: 99,
    category: "Shirt",
    type: "Boy",
    feature: "Casual",
    size: ["S", "M", "L"],
    colors: ["gray", "black"],
    rating: 4.1,
    img: "https://images.unsplash.com/photo-1644568722968-c21549419c4c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhc3VhbCUyMFN3ZWF0c2hpcnQlMjBncmF5fGVufDB8fDB8fHww",
  },
  {
    id: 52,
    name: "Classic Wool Coat",
    price: 389,
    oldPrice: 479,
    category: "Coat",
    type: "Man",
    feature: "Classic",
    size: ["L", "XL"],
    colors: ["navy", "gray"],
    rating: 4.7,
    img: "https://media.istockphoto.com/id/1162850119/photo/quilted-jacket-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=4pqwFSWsHb38R73FfuWTAGONZnwMDe0yt8uTfHqdrdI=",
  },
  {
    id: 53,
    name: "Denim Trucker Jacket",
    price: 259,
    oldPrice: 299,
    category: "Jacket",
    type: "Man",
    feature: "Casual",
    size: ["M", "L"],
    colors: ["blue"],
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1740710748146-a15d840d6f40?q=80&w=498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
  id: 54,
  name: "Modern Urban Bomber",
  brand: "EliteWear",
  price: 299,
  oldPrice: 379,
  category: "Jacket",
  type: "Man",
  feature: "Premium",
  size: ["M", "L", "XL"],
  colors: ["black", "olive", "navy"],
  rating: 4.9,
  img: "https://images.unsplash.com/photo-1682317056294-1970c953cfd7?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}

];;

const ManClothesFilter = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    colors: [],
    size: [],
    feature: [],
    type: [],
    priceRange: [0, 600],
  });
  const [visibleCount, setVisibleCount] = useState(10);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Ref to the product list container to measure its height
  const productsContainerRef = useRef(null);
  const [productsHeight, setProductsHeight] = useState(0);

  // Measure products container height after render and on visibleCount or filters change
  useEffect(() => {
    if (productsContainerRef.current) {
      setProductsHeight(productsContainerRef.current.offsetHeight);
    }
  }, [visibleCount, filters]);

  const handleCheckbox = (filterType, value) => {
    setFilters((prev) => {
      const newValues = prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value];
      return { ...prev, [filterType]: newValues };
    });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, priceRange: [0, Number(e.target.value)] });
  };

  const filteredProducts = productsData.filter((product) => {
    const { search, category, colors, size, feature, type, priceRange } = filters;

    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category.length === 0 || category.includes(product.category);
    const matchesColors = colors.length === 0 || colors.some((c) => product.colors.includes(c));
    const matchesSize = size.length === 0 || size.some((s) => product.size.includes(s));
    const matchesFeature = feature.length === 0 || feature.includes(product.feature);
    const matchesType = type.length === 0 || type.includes(product.type);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesSearch &&
      matchesCategory &&
      matchesColors &&
      matchesSize &&
      matchesFeature &&
      matchesType &&
      matchesPrice
    );
  });

  const productsToShow = filteredProducts.slice(0, visibleCount);

  const renderSidebar = () => (
    <div
      className={`w-64 bg-gray-800 p-6 shadow-lg h-full overflow-y-auto custom-scrollbar`}
    >
      <h2 className="text-xl font-bold mb-4 text-yellow-400 flex justify-between items-center">
        Filters
        <button
          className="block md:hidden text-white text-2xl"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Filters Sidebar"
        >
          <FiX />
        </button>
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded mb-4 bg-gray-700 text-white"
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        aria-label="Search products"
      />

      {/* Filters */}
      {[
        { title: "Category", list: ["Jacket", "Coat", "Shirt", "Suit"], type: "category" },
        { title: "Colors", list: ["black", "brown", "gray", "beige", "blue", "white"], type: "colors" },
        { title: "Sizes", list: ["S", "M", "L", "XL"], type: "size" },
        { title: "Features", list: ["Classic", "Premium", "Casual"], type: "feature" },
        { title: "Type", list: ["Man", "Boy"], type: "type" },
      ].map((section) => (
        <div key={section.title} className="mb-4">
          <h3 className="font-semibold mb-2 text-yellow-300">{section.title}</h3>
          {section.list.map((item) => (
            <label key={item} className="block text-sm capitalize cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-400"
                onChange={() => handleCheckbox(section.type, item)}
                checked={filters[section.type].includes(item)}
                aria-checked={filters[section.type].includes(item)}
              />
              {item}
            </label>
          ))}
        </div>
      ))}

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-yellow-300">Price (Max)</h3>
        <input
          type="range"
          min="0"
          max="600"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-yellow-400"
          aria-valuemin={0}
          aria-valuemax={600}
          aria-valuenow={filters.priceRange[1]}
          aria-label="Maximum price filter"
        />
        <p className="text-sm text-yellow-400">Up to ${filters.priceRange[1]}</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-900 min-h-screen text-white relative my-10">
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900/90 z-50 transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        style={{ width: "70%" }}
      >
        {renderSidebar()}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block md:w-64 md:sticky md:top-6 self-start max-h-[90vh] overflow-x-hidden overflow-y-auto custom-scrollbar">
        {renderSidebar()}
      </aside>

      {/* Mobile Sidebar Toggle Button */}
  {!sidebarOpen && (
  <button
    onClick={() => setSidebarOpen(true)}
    className="fixed left-2 z-50 bg-gray-950/60 text-white lg:bg-gray-900/0 lg:text-white/0 p-3 shadow-lg md:hidden ml-[-45px]"
    style={{
      position: "sticky",
      top: "6rem", // approx 96px from top (adjust as needed)
      maxHeight: productsHeight ? `${productsHeight}px` : "auto",
      borderRadius: "100%",  // full circle
      width: "40px",         // narrower width (adjust if needed)
      height: "40px",        // keep height equal to width for perfect circle
      padding: 0,            // remove padding to keep circle shape intact
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    aria-label="Open Filters Sidebar"
  >
    <FiChevronRight size={24} />
  </button>
)}


      {/* Products Grid */}
      <main className="flex-1" ref={productsContainerRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsToShow.length > 0 ? (
            productsToShow.map((p) => (
              <div
                key={p.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full"
              >
                <img src={p.img} alt={p.name} className="w-full h-60 object-cover" />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-gray-400">{p.category}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400 text-lg font-bold">${p.price}</span>
                      <span className="text-gray-500 line-through text-sm">${p.oldPrice}</span>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">No products match your filters.</p>
          )}
        </div>

        {/* Show More Button */}
        {filteredProducts.length > 9 && filteredProducts.length > visibleCount && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount(visibleCount + 9)}
              className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 font-semibold"
            >
              Show More
            </button>
          </div>
        )}
      </main>

      {/* Custom Scrollbar CSS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #facc15; /* yellow-400 */
          border-radius: 10px;
        }
        @media (min-width: 768px) {
          /* Reset sticky for desktop */
          button[aria-label="Open Filters Sidebar"] {
            position: static !important;
            max-height: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ManClothesFilter;
