import React, { useRef, useState, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Elegant Red Dress",
    price: 120,
    rating: 4.8,
    reviews: 112,
    img: "https://images.unsplash.com/photo-1657740034790-f860d612d1b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlZ2FudCUyMFJlZCUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "White Maxi Dress",
    price: 140,
    rating: 4.6,
    reviews: 95,
    img: "https://images.unsplash.com/photo-1746730921745-5f6afa4c56c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hpdGUlMjBNYXhpJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Black Cocktail Dress",
    price: 180,
    rating: 4.9,
    reviews: 124,
    img: "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxhY2slMjBDb2NrdGFpbCUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Blue Wrap Dress",
    price: 155,
    rating: 4.5,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1599445997715-55c4d8853c48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmx1ZSUyMFdyYXAlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Beige Summer Dress",
    price: 165,
    rating: 4.4,
    reviews: 75,
    img: "https://images.unsplash.com/photo-1689834570065-c018c5ada259?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVpZ2UlMjBTdW1tZXIlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Gray Bodycon Dress",
    price: 175,
    rating: 4.7,
    reviews: 102,
    img: "https://images.unsplash.com/photo-1752794674929-e541cd3a008e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R3JheSUyMEJvZHljb24lMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  // Tops
  {
    id: 7,
    title: "Classic White Shirt",
    price: 45,
    rating: 4.3,
    reviews: 65,
    img: "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xhc3NpYyUyMFdoaXRlJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Red Crop Top",
    price: 50,
    rating: 4.2,
    reviews: 50,
    img: "https://images.unsplash.com/photo-1541820936806-cacd476e440d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVkJTIwQ3JvcCUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Black Off-Shoulder Top",
    price: 65,
    rating: 4.6,
    reviews: 78,
    img: "https://plus.unsplash.com/premium_photo-1690038783640-960d24344604?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJsYWNrJTIwT2ZmJTIwU2hvdWxkZXIlMjBUb3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    title: "Blue Halter Top",
    price: 60,
    rating: 4.4,
    reviews: 70,
    img: "https://images.unsplash.com/photo-1606941060060-3d317be9947c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWUlMjBIYWx0ZXIlMjBUb3AlMjBjbG90aHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    title: "Beige V-Neck Top",
    price: 55,
    rating: 4.1,
    reviews: 55,
    img: "https://images.unsplash.com/photo-1730339023436-edfb94f4b98b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVpZ2UlMjBWJTIwTmVjayUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    title: "Gray Knit Top",
    price: 58,
    rating: 4.3,
    reviews: 60,
    img: "https://images.unsplash.com/photo-1737056207697-7f54e58d8d5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JheSUyMEtuaXQlMjBUb3B8ZW58MHx8MHx8fDA%3D",
  },

  // Jackets
  {
    id: 13,
    title: "Chic Black Blazer",
    price: 150,
    rating: 4.7,
    reviews: 80,
    img: "https://images.unsplash.com/photo-1696451202957-87b4fab05e37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpYyUyMEJsYWNrJTIwQmxhemVyfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    title: "Red Varsity Jacket",
    price: 220,
    rating: 4.8,
    reviews: 110,
    img: "https://images.unsplash.com/photo-1620082683941-078a275786d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlZCUyMFZhcnNpdHklMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 15,
    title: "White Denim Jacket",
    price: 210,
    rating: 4.6,
    reviews: 95,
    img: "https://images.unsplash.com/photo-1627067039495-db03f1d27874?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2hpdGUlMjBEZW5pbSUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    title: "Blue Quilted Jacket",
    price: 230,
    rating: 4.5,
    reviews: 85,
    img: "https://images.unsplash.com/photo-1546249042-831d1214e1ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qmx1ZSUyMFF1aWx0ZWQlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    title: "Beige Trench Coat",
    price: 250,
    rating: 4.7,
    reviews: 90,
    img: "https://plus.unsplash.com/premium_photo-1673384389458-08c7e13b65c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVpZ2UlMjBUcmVuY2glMjBDb2F0fGVufDB8fDB8fHww",
  },
  {
    id: 18,
    title: "Gray Bomber Jacket",
    price: 195,
    rating: 4.6,
    reviews: 70,
    img: "https://images.unsplash.com/photo-1715408153725-186c6c77fb45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JheSUyMEJvbWJlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Skirts
  {
    id: 19,
    title: "Summer Floral Skirt",
    price: 70,
    rating: 4.4,
    reviews: 68,
    img: "https://images.unsplash.com/photo-1718737654958-9b49716693bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN1bW1lciUyMEZsb3JhbCUyMFNraXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 20,
    title: "Red Pencil Skirt",
    price: 90,
    rating: 4.5,
    reviews: 59,
    img: "https://images.unsplash.com/photo-1508829298730-713792c22189?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJlZCUyMFBlbmNpbCUyMFNraXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 21,
    title: "White Pleated Skirt",
    price: 85,
    rating: 4.3,
    reviews: 61,
    img: "https://images.unsplash.com/photo-1615453590051-9cc24146d6ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdoaXRlJTIwUGxlYXRlZCUyMFNraXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 22,
    title: "Black Mini Skirt",
    price: 100,
    rating: 4.6,
    reviews: 80,
    img: "https://images.unsplash.com/photo-1604728716030-dbe6f830336a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2slMjBNaW5pJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 23,
    title: "Beige High Waist Skirt",
    price: 88,
    rating: 4.2,
    reviews: 62,
    img: "https://plus.unsplash.com/premium_photo-1673977132898-0deb4b659935?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlaWdlJTIwSGlnaCUyMFdhaXN0JTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 24,
    title: "Gray A-Line Skirt",
    price: 85,
    rating: 4.3,
    reviews: 57,
    img: "https://images.unsplash.com/photo-1551607939-46fc8ac00815?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JheSUyMEElMjBMaW5lJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },

  // Extra Variants to Make 50+
  {
    id: 25,
    title: "Luxury Red Gown",
    price: 250,
    rating: 4.9,
    reviews: 130,
    img: "https://images.unsplash.com/photo-1508742345712-0656a285ac27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEx1eHVyeSUyMFJlZCUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    title: "Casual White Blouse",
    price: 55,
    rating: 4.4,
    reviews: 72,
    img: "https://plus.unsplash.com/premium_photo-1690034979146-59a98168f27e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FzdWFsJTIwV2hpdGUlMjBCbG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 27,
    title: "Black Wool Coat",
    price: 280,
    rating: 4.8,
    reviews: 230,
    img: "https://images.unsplash.com/photo-1697920941403-710063a21376?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2slMjBXb29sJTIwQ29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 28,
    title: "Blue Satin Dress",
    price: 190,
    rating: 4.6,
    reviews: 145,
    img: "https://images.unsplash.com/photo-1697635418896-4d2eef658123?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJsdWUlMjBTYXRpbiUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 29,
    title: "Beige Casual Skirt",
    price: 92,
    rating: 4.3,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1649899240929-a19a0dcf02fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJlaWdlJTIwQ2FzdWFsJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 30,
    title: "Gray Oversized Top",
    price: 68,
    rating: 4.5,
    reviews: 102,
    img: "https://plus.unsplash.com/premium_photo-1693161218188-03b25face555?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JheSUyME92ZXJzaXplZCUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 31,
    title: "Black Slim Dress",
    price: 230,
    rating: 4.9,
    reviews: 190,
    img: "https://plus.unsplash.com/premium_photo-1674327105078-5b2cdcc86929?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmxhY2slMjBTbGltJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 32,
    title: "Red Casual Jacket",
    price: 240,
    rating: 4.7,
    reviews: 160,
    img: "https://images.unsplash.com/photo-1602562887763-851fa56061e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJlZCUyMENhc3VhbCUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 33,
    title: "White Short Skirt",
    price: 78,
    rating: 4.2,
    reviews: 75,
    img: "https://images.unsplash.com/photo-1590400516695-36708d3f964a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdoaXRlJTIwU2hvcnQlMjBTa2lydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 34,
    title: "Blue Printed Dress",
    price: 175,
    rating: 4.4,
    reviews: 130,
    img: "https://images.unsplash.com/photo-1635695583654-6ca4e41a93e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsdWUlMjBQcmludGVkJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 35,
    title: "Beige Elegant Top",
    price: 64,
    rating: 4.6,
    reviews: 98,
    img: "https://images.unsplash.com/photo-1638396637969-956ca903df87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVpZ2UlMjBFbGVnYW50JTIwVG9wfGVufDB8fDB8fHww",
  },
  {
    id: 36,
    title: "Gray Trench Coat",
    price: 260,
    rating: 4.7,
    reviews: 180,
    img: "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JheSUyMFRyZW5jaCUyMENvYXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 37,
    title: "Red A-Line Dress",
    price: 190,
    rating: 4.5,
    reviews: 120,
    img: "https://images.unsplash.com/photo-1694452242667-c7a9e276fc3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVkJTIwQSUyMExpbmUlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 38,
    title: "Black Crop Top",
    price: 62,
    rating: 4.3,
    reviews: 110,
    img: "https://images.unsplash.com/photo-1631492210747-6be6acde5dfa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmxhY2slMjBDcm9wJTIwVG9wfGVufDB8fDB8fHww",
  },
  {
    id: 39,
    title: "Blue Denim Jacket",
    price: 200,
    rating: 4.6,
    reviews: 140,
    img: "https://images.unsplash.com/photo-1582225295589-18fca734d523?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJsdWUlMjBEZW5pbSUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 40,
    title: "Beige Midi Skirt",
    price: 94,
    rating: 4.4,
    reviews: 115,
    img: "https://images.unsplash.com/photo-1591176134674-87e8f7c73ce9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVpZ2UlMjBNaWRpJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 41,
    title: "White Satin Dress",
    price: 220,
    rating: 4.8,
    reviews: 175,
    img: "https://images.unsplash.com/photo-1571402104000-0967ca8acfed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2hpdGUlMjBTYXRpbiUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 42,
    title: "Gray Knit Skirt",
    price: 86,
    rating: 4.1,
    reviews: 80,
    img: "https://images.unsplash.com/photo-1597586594450-df1370a4aacd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdyYXklMjBLbml0JTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 43,
    title: "Red Slim Blazer",
    price: 230,
    rating: 4.5,
    reviews: 145,
    img: "https://plus.unsplash.com/premium_photo-1739841787961-10545da5616b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVkJTIwU2xpbSUyMEJsYXplcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 44,
    title: "Beige Casual Blazer",
    price: 245,
    rating: 4.3,
    reviews: 100,
    img: "https://images.unsplash.com/photo-1592645946522-1b166cfc18c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJlaWdlJTIwQ2FzdWFsJTIwQmxhemVyfGVufDB8fDB8fHww",
  },
  {
    id: 45,
    title: "Blue Layered Skirt",
    price: 96,
    rating: 4.6,
    reviews: 120,
    img: "https://images.unsplash.com/photo-1565406074930-ac3ae876f182?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJsdWUlMjBMYXllcmVkJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 46,
    title: "Black Party Dress",
    price: 250,
    rating: 4.9,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1741816219305-827580cab505?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJsYWNrJTIwUGFydHklMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 47,
    title: "Gray Wrap Dress",
    price: 200,
    rating: 4.5,
    reviews: 140,
    img: "https://images.unsplash.com/photo-1704627363852-484e95695411?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JheSUyMFdyYXAlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 48,
    title: "White Bodycon Dress",
    price: 240,
    rating: 4.7,
    reviews: 165,
    img: "https://images.unsplash.com/photo-1750231211674-287f833561b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2hpdGUlMjBCb2R5Y29uJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5111,
    title: "Black Off-Shoulder Dress",
    price: 180,
    rating: 4.8,
    reviews: 245,
    img: "https://images.unsplash.com/photo-1613005346461-81cfd2696eeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5222,
    title: "Blue Luxury Dress",
    price: 220,
    rating: 4.7,
    reviews: 320,
    img: "https://images.unsplash.com/photo-1587155471946-9e8d4d1132fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTUyfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5333,
    title: "Beige Off-Shoulder Dress",
    price: 210,
    rating: 4.6,
    reviews: 198,
    img: "https://images.unsplash.com/photo-1621390878576-571eca088f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQzfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5444,
    title: "Gray Party Dress",
    price: 185,
    rating: 4.5,
    reviews: 176,
    img: "https://images.unsplash.com/photo-1664894626606-283ad185a726?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDk0fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },

  // ===== More Tops =====
  {
    id: 5555,
    title: "Red Cropped Hoodie",
    price: 85,
    rating: 4.4,
    reviews: 134,
    img: "https://plus.unsplash.com/premium_photo-1708275295686-29b030c5bf3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTE3fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5666,
    title: "White Silk Blouse",
    price: 92,
    rating: 4.6,
    reviews: 152,
    img: "https://images.unsplash.com/photo-1635814930732-0e0f8fbbfec5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDk5fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5777,
    title: "Black Oversized Tee",
    price: 70,
    rating: 4.3,
    reviews: 95,
    img: "https://images.unsplash.com/photo-1747707499012-684390664060?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTA3fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5888,
    title: "Blue Sleeveless Top",
    price: 75,
    rating: 4.2,
    reviews: 120,
    img: "https://plus.unsplash.com/premium_photo-1677678803324-2c6180a1a00d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTYxfHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5999,
    title: "Beige Button-Up Shirt",
    price: 78,
    rating: 4.5,
    reviews: 110,
    img: "https://images.unsplash.com/photo-1747321754355-8c8bdfac12b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTY2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6000,
    title: "Gray Round-Neck Tee",
    price: 62,
    rating: 4.3,
    reviews: 80,
    img: "https://images.unsplash.com/photo-1622625841997-dfbffc98f4c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTg2fHxjbG90aGVzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7999,
    title: "Red Slim Blouse",
    price: 72,
    rating: 4.4,
    reviews: 140,
    img: "https://plus.unsplash.com/premium_photo-1708275303014-c9d5f5d572e1?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 8000,
    title: "White Cropped Top",
    price: 65,
    rating: 4.5,
    reviews: 98,
    img: "https://images.unsplash.com/photo-1684225358843-54b1132537b6?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 8111,
    title: "Black Off-Shoulder Top",
    price: 90,
    rating: 4.6,
    reviews: 150,
    img: "https://images.unsplash.com/photo-1750032376213-8bf309af1a9f?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 8222,
    title: "Blue Halter Top",
    price: 78,
    rating: 4.4,
    reviews: 130,
    img: "https://images.unsplash.com/photo-1679136340201-e9742dae1faa?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 8333,
    title: "Beige V-Neck Top",
    price: 70,
    rating: 4.3,
    reviews: 112,
    img: "https://images.unsplash.com/photo-1705784443622-6580144d9c9e?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 8444,
    title: "Gray Casual Tee",
    price: 68,
    rating: 4.2,
    reviews: 102,
    img: "https://images.unsplash.com/photo-1634588946349-f0799e47a19d?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 100000,
    title: "Elegant Red Dress",
    price: 150,
    rating: 4.7,
    reviews: 120,
    img: "https://images.unsplash.com/photo-1739773375426-880a10bea9a9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 200000,
    title: "Classic White Gown",
    price: 180,
    rating: 4.8,
    reviews: 98,
    img: "https://images.unsplash.com/photo-1735553817415-34af90cf7645?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 300000,
    title: "Luxury Black Dress",
    price: 210,
    rating: 4.9,
    reviews: 142,
    img: "https://images.unsplash.com/photo-1735553816869-9ebc8b1a17ef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 400000,
    title: "Blue Evening Dress",
    price: 190,
    rating: 4.6,
    reviews: 110,
    img: "https://images.unsplash.com/photo-1733310925418-7566070e6d9d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 500000,
    title: "Elegant Beige Dress",
    price: 160,
    rating: 4.5,
    reviews: 87,
    img: "https://images.unsplash.com/photo-1733310925430-667f8ece82ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 600000,
    title: "Chic Gray Dress",
    price: 175,
    rating: 4.7,
    reviews: 101,
    img: "https://images.unsplash.com/photo-1735553816813-f7640e8e521c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // === Tops ===
  {
    id: 788,
    title: "Red Casual Top",
    price: 60,
    rating: 4.3,
    reviews: 76,
    img: "https://images.unsplash.com/photo-1693988505632-ff65ec0e320b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 888,
    title: "White Cotton Blouse",
    price: 70,
    rating: 4.4,
    reviews: 89,
    img: "https://plus.unsplash.com/premium_photo-1682965453758-9978b45a560a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 999,
    title: "Black Crop Top",
    price: 55,
    rating: 4.5,
    reviews: 65,
    img: "https://images.unsplash.com/photo-1618400219178-578c3368882e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1000,
    title: "Blue Denim Shirt",
    price: 85,
    rating: 4.6,
    reviews: 92,
    img: "https://images.unsplash.com/photo-1693988105039-a8458df83845?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1111,
    title: "Beige Linen Top",
    price: 65,
    rating: 4.2,
    reviews: 54,
    img: "https://images.unsplash.com/photo-1693988504628-6c8eefbce574?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1222,
    title: "Gray Polo Shirt",
    price: 75,
    rating: 4.3,
    reviews: 61,
    img: "https://images.unsplash.com/photo-1693989240286-f5c5176cba12?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    // === Jackets ===
  {
    id: 1333,
    title: "Red Bomber Jacket",
    price: 190,
    rating: 4.6,
    reviews: 80,
    img: "https://plus.unsplash.com/premium_photo-1673757103441-2571045781d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1444,
    title: "White Leather Jacket",
    price: 230,
    rating: 4.8,
    reviews: 95,
    img: "https://plus.unsplash.com/premium_photo-1727967193973-2132b6ff3a80?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1555,
    title: "Black Winter Jacket",
    price: 210,
    rating: 4.9,
    reviews: 120,
    img: "https://plus.unsplash.com/premium_photo-1661409439834-84856fcfeebd?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1666,
    title: "Blue Sports Jacket",
    price: 170,
    rating: 4.5,
    reviews: 75,
    img: "https://plus.unsplash.com/premium_photo-1737370659011-3de25cbb6322?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1777,
    title: "Beige Trench Coat",
    price: 200,
    rating: 4.7,
    reviews: 82,
    img: "https://plus.unsplash.com/premium_photo-1737370659217-b39a989a6264?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1888,
    title: "Gray Zip Jacket",
    price: 180,
    rating: 4.4,
    reviews: 64,
    img: "https://plus.unsplash.com/premium_photo-1737093820544-aad0af6b8538?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // === Skirts ===
  {
    id: 1999,
    title: "Red Pleated Skirt",
    price: 70,
    rating: 4.3,
    reviews: 58,
    img: "https://images.unsplash.com/photo-1521511189395-b82252213754?q=80&w=395&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2000,
    title: "White Mini Skirt",
    price: 90,
    rating: 4.5,
    reviews: 69,
    img: "https://images.unsplash.com/photo-1605084198811-7a358b91dc15?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2111,
    title: "Black Leather Skirt",
    price: 100,
    rating: 4.6,
    reviews: 83,
    img: "https://images.unsplash.com/photo-1666932521022-3514c9fc441f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2222,
    title: "Blue Denim Skirt",
    price: 85,
    rating: 4.4,
    reviews: 66,
    img: "https://plus.unsplash.com/premium_photo-1674273915213-18d0c1f056b9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2333,
    title: "Beige Pencil Skirt",
    price: 75,
    rating: 4.2,
    reviews: 52,
    img: "https://plus.unsplash.com/premium_photo-1725914369469-0c8fbd81277c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2444,
    title: "Gray A-Line Skirt",
    price: 80,
    rating: 4.3,
    reviews: 59,
    img: "https://plus.unsplash.com/premium_photo-1727427850092-5874f7c7b075?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ===== Dresses More Variants =====
  {
    id: 2555,
    title: "Elegant Red Gown",
    price: 220,
    rating: 4.8,
    reviews: 130,
    img: "https://images.unsplash.com/photo-1623609163887-ce62bb3baad1?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2666,
    title: "White Satin Dress",
    price: 200,
    rating: 4.7,
    reviews: 115,
    img: "https://images.unsplash.com/photo-1718871828963-450573c7b76f?q=80&w=317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2777,
    title: "Classic Black Midi Dress",
    price: 175,
    rating: 4.6,
    reviews: 100,
    img: "https://images.unsplash.com/photo-1734944688814-84e2c89c48a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2888,
    title: "Blue Party Dress",
    price: 190,
    rating: 4.5,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1693987648230-1c6bc9f86067?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2999,
    title: "Beige Bodycon Dress",
    price: 165,
    rating: 4.4,
    reviews: 82,
    img: "https://plus.unsplash.com/premium_photo-1708276235167-7405b7fd2e93?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3000,
    title: "Gray Modern Dress",
    price: 180,
    rating: 4.6,
    reviews: 97,
    img: "https://images.unsplash.com/photo-1693988501009-2eded870a6a8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // === Tops ===
  {
    id: 3111,
    title: "White Cotton T-Shirt",
    price: 45,
    rating: 4.3,
    reviews: 55,
    img: "https://images.unsplash.com/photo-1618354691543-63f55988f059?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3222,
    title: "Black Casual Blouse",
    price: 60,
    rating: 4.4,
    reviews: 68,
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3333,
    title: "Blue Striped Shirt",
    price: 55,
    rating: 4.2,
    reviews: 59,
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3444,
    title: "Red Crop Top",
    price: 40,
    rating: 4.5,
    reviews: 74,
    img: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3555,
    title: "Beige Summer Tank",
    price: 35,
    rating: 4.3,
    reviews: 52,
    img: "https://images.unsplash.com/photo-1530982011892-ef44ed8e3a4d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3666,
    title: "Gray Long Sleeve Shirt",
    price: 50,
    rating: 4.4,
    reviews: 63,
    img: "https://images.unsplash.com/photo-1603252110481-72f333d46c2e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // === Pants ===
  {
    id: 3777,
    title: "Classic Blue Jeans",
    price: 95,
    rating: 4.6,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1530107973768-581951e62d4f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3888,
    title: "Black Skinny Pants",
    price: 85,
    rating: 4.5,
    reviews: 76,
    img: "https://images.unsplash.com/photo-1620799139338-62efc34d4383?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3999,
    title: "White Straight Pants",
    price: 90,
    rating: 4.3,
    reviews: 64,
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12f0a2c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4001,
    title: "Beige Casual Trousers",
    price: 88,
    rating: 4.4,
    reviews: 69,
    img: "https://images.unsplash.com/photo-1618354691310-d8c1f57109f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4111,
    title: "Gray Formal Pants",
    price: 100,
    rating: 4.6,
    reviews: 82,
    img: "https://images.unsplash.com/photo-1598032895372-53f4b9909335?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // === Shoes ===
  {
    id: 4222,
    title: "White Sneakers",
    price: 120,
    rating: 4.8,
    reviews: 140,
    img: "https://images.unsplash.com/photo-1618354691310-465e893bdfdd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4333,
    title: "Black Leather Boots",
    price: 150,
    rating: 4.7,
    reviews: 118,
    img: "https://images.unsplash.com/photo-1618354691310-97cf5d321b17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4444,
    title: "Brown Suede Loafers",
    price: 140,
    rating: 4.5,
    reviews: 90,
    img: "https://images.unsplash.com/photo-1606813908371-8d31d4b78569?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4555,
    title: "Gray Running Shoes",
    price: 130,
    rating: 4.6,
    reviews: 102,
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4666,
    title: "Beige High Heels",
    price: 110,
    rating: 4.4,
    reviews: 77,
    img: "https://images.unsplash.com/photo-1528701800489-20be9c1cc812?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }

];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div
      className="flex items-center space-x-0.5"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={"full" + i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-4 h-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={"empty" + i}
          className="w-4 h-4 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
    </div>
  );
};

const ManClothesCarousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardWidth = isMobile ? 220 : 280;
  // gap array for desktop, in pixels (aap yahan apne hisaab se values badal sakte hain)
  const gaps = [10, 10, 10, 10, 10];

  const maxIndex = products.length > 0 ? products.length - 1 : 0;

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const gap = isMobile ? 16 : gaps[index % gaps.length];
    // scrollLeft calculation with variable gaps
    let scrollLeft = 0;
    for (let i = 0; i < index; i++) {
      scrollLeft += cardWidth + (isMobile ? 16 : gaps[i % gaps.length]);
    }
    containerRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <section className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-10 my-[-10px]">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-50 mb-6 text-center tracking-tight">
        Trending Men’s Fashion
      </h2>

      <div className="relative">
        {/* Left Arrow - desktop only */}
        {!isMobile && (
          <button
            aria-label="Scroll left"
            onClick={handleScrollLeft}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 -left-6 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition
              ${currentIndex === 0 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
            `}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Right Arrow - desktop only */}
        {!isMobile && (
          <button
            aria-label="Scroll right"
            onClick={handleScrollRight}
            disabled={currentIndex === maxIndex}
            className={`absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition
              ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
            `}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}

        {/* Scroll container */}
        <div
          ref={containerRef}
          tabIndex={0}
          className={`flex overflow-x-auto scroll-smooth px-2 py-2 no-scrollbar snap-x snap-mandatory ml-[-23px] lg:ml-0`}
          style={{
            scrollPaddingLeft: 16,
            scrollPaddingRight: 16,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {products.length === 0 && (
            <p className="text-center text-gray-500 py-10 w-full">
              No products available yet.
            </p>
          )}

          {products.map((product, index) => {
            const marginRight = isMobile
              ? 16
              : index === products.length - 1
              ? 0
              : gaps[index % gaps.length];
          const cardWidth = isMobile ? 220 : 270;

            return (
              <article
                key={product.id}
                role="listitem"
                className="snap-center flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                style={{
                  scrollSnapAlign: "center",
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                  marginRight: `${marginRight}px`,
                }}
              >
                <div
                  className={`relative h-${isMobile ? "48" : "64"} overflow-hidden rounded-t-xl`}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3">
                  <h3
                    title={product.title}
                    className="text-sm sm:text-lg font-semibold text-gray-900 line-clamp-2"
                  >
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <StarRating rating={product.rating} />
                    <span className="text-xs sm:text-sm text-gray-800">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl font-extrabold text-yellow-600">
                      ${Number(product.price).toFixed(2)}
                    </span>
                    {product.oldPrice !== undefined && (
                      <span className="text-xs sm:text-sm line-through text-gray-400">
                        ${Number(product.oldPrice).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    aria-label={`Add ${product.title} to cart`}
                    className="mt-3 w-full py-2 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Global CSS for hiding scrollbar */}
      <style>{`
        /* Hide scrollbar for all browsers */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ManClothesCarousel;
