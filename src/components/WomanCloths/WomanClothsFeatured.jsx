import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";

// ✅ Sample Data (You can replace this with your API data)
const featuredProducts = [
  // ✅ Dresses
  {
    id: 1,
    title: "Elegant Red Dress",
    category: "Tops",
    price: 120,
    color: "Red",
    img: "https://images.unsplash.com/photo-1657740034790-f860d612d1b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlZ2FudCUyMFJlZCUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "White Maxi Dress",
    category: "Dresses",
    price: 140,
    color: "White",
    img: "https://images.unsplash.com/photo-1746730921745-5f6afa4c56c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hpdGUlMjBNYXhpJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Black Cocktail Dress",
    category: "Dresses",
    price: 180,
    color: "Black",
    img: "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxhY2slMjBDb2NrdGFpbCUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Blue Wrap Dress",
    category: "Dresses",
    price: 155,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1599445997715-55c4d8853c48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmx1ZSUyMFdyYXAlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Beige Summer Dress",
    category: "Dresses",
    price: 165,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1689834570065-c018c5ada259?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVpZ2UlMjBTdW1tZXIlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Gray Bodycon Dress",
    category: "Dresses",
    price: 175,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1752794674929-e541cd3a008e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R3JheSUyMEJvZHljb24lMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  // ✅ Tops
  {
    id: 7,
    title: "Classic White Shirt",
    category: "Tops",
    price: 45,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xhc3NpYyUyMFdoaXRlJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Red Crop Top",
    category: "Tops",
    price: 50,
    color: "Red",
    img: "https://images.unsplash.com/photo-1541820936806-cacd476e440d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVkJTIwQ3JvcCUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Black Off-Shoulder Top",
    category: "Tops",
    price: 65,
    color: "Black",
    img: "https://plus.unsplash.com/premium_photo-1690038783640-960d24344604?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJsYWNrJTIwT2ZmJTIwU2hvdWxkZXIlMjBUb3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    title: "Blue Halter Top",
    category: "Tops",
    price: 60,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1606941060060-3d317be9947c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWUlMjBIYWx0ZXIlMjBUb3AlMjBjbG90aHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    title: "Beige V-Neck Top",
    category: "Tops",
    price: 55,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1730339023436-edfb94f4b98b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVpZ2UlMjBWJTIwTmVjayUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    title: "Gray Knit Top",
    category: "Tops",
    price: 58,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1737056207697-7f54e58d8d5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JheSUyMEtuaXQlMjBUb3B8ZW58MHx8MHx8fDA%3D",
  },

  // ✅ Jackets
  {
    id: 13,
    title: "Chic Black Blazer",
    category: "Jackets",
    price: 150,
    color: "Black",
    img: "https://images.unsplash.com/photo-1696451202957-87b4fab05e37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpYyUyMEJsYWNrJTIwQmxhemVyfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    title: "Red Varsity Jacket",
    category: "Jackets",
    price: 220,
    color: "Red",
    img: "https://images.unsplash.com/photo-1620082683941-078a275786d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlZCUyMFZhcnNpdHklMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 15,
    title: "White Denim Jacket",
    category: "Jackets",
    price: 210,
    color: "White",
    img: "https://images.unsplash.com/photo-1627067039495-db03f1d27874?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2hpdGUlMjBEZW5pbSUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    title: "Blue Quilted Jacket",
    category: "Jackets",
    price: 230,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1546249042-831d1214e1ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qmx1ZSUyMFF1aWx0ZWQlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    title: "Beige Trench Coat",
    category: "Jackets",
    price: 250,
    color: "Beige",
    img: "https://plus.unsplash.com/premium_photo-1673384389458-08c7e13b65c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVpZ2UlMjBUcmVuY2glMjBDb2F0fGVufDB8fDB8fHww",
  },
  {
    id: 18,
    title: "Gray Bomber Jacket",
    category: "Jackets",
    price: 195,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1715408153725-186c6c77fb45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JheSUyMEJvbWJlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },

  // ✅ Skirts
  {
    id: 19,
    title: "Summer Floral Skirt",
    category: "Skirts",
    price: 70,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1718737654958-9b49716693bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN1bW1lciUyMEZsb3JhbCUyMFNraXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 20,
    title: "Red Pencil Skirt",
    category: "Skirts",
    price: 90,
    color: "Red",
    img: "https://images.unsplash.com/photo-1508829298730-713792c22189?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJlZCUyMFBlbmNpbCUyMFNraXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 21,
    title: "White Pleated Skirt",
    category: "Skirts",
    price: 85,
    color: "White",
    img: "https://images.unsplash.com/photo-1615453590051-9cc24146d6ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdoaXRlJTIwUGxlYXRlZCUyMFNraXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 22,
    title: "Black Mini Skirt",
    category: "Skirts",
    price: 100,
    color: "Black",
    img: "https://images.unsplash.com/photo-1604728716030-dbe6f830336a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2slMjBNaW5pJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 23,
    title: "Beige High Waist Skirt",
    category: "Skirts",
    price: 88,
    color: "Beige",
    img: "https://plus.unsplash.com/premium_photo-1673977132898-0deb4b659935?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlaWdlJTIwSGlnaCUyMFdhaXN0JTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 24,
    title: "Gray A-Line Skirt",
    category: "Skirts",
    price: 85,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1551607939-46fc8ac00815?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JheSUyMEElMjBMaW5lJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },

  // ✅ Extra Variants to Make 50+
  {
    id: 25,
    title: "Luxury Red Gown",
    category: "Dresses",
    price: 250,
    color: "Red",
    img: "https://images.unsplash.com/photo-1508742345712-0656a285ac27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEx1eHVyeSUyMFJlZCUyMEdvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    title: "Casual White Blouse",
    category: "Tops",
    price: 55,
    color: "White",
    img: "https://plus.unsplash.com/premium_photo-1690034979146-59a98168f27e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FzdWFsJTIwV2hpdGUlMjBCbG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 27,
    title: "Black Wool Coat",
    category: "Jackets",
    price: 280,
    color: "Black",
    img: "https://images.unsplash.com/photo-1697920941403-710063a21376?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2slMjBXb29sJTIwQ29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 28,
    title: "Blue Satin Dress",
    category: "Dresses",
    price: 190,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1697635418896-4d2eef658123?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJsdWUlMjBTYXRpbiUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 29,
    title: "Beige Casual Skirt",
    category: "Skirts",
    price: 92,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1649899240929-a19a0dcf02fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJlaWdlJTIwQ2FzdWFsJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 30,
    title: "Gray Oversized Top",
    category: "Tops",
    price: 68,
    color: "Gray",
    img: "https://plus.unsplash.com/premium_photo-1693161218188-03b25face555?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JheSUyME92ZXJzaXplZCUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 31,
    title: "Black Slim Dress",
    category: "Dresses",
    price: 230,
    color: "Black",
    img: "https://plus.unsplash.com/premium_photo-1674327105078-5b2cdcc86929?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmxhY2slMjBTbGltJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 32,
    title: "Red Casual Jacket",
    category: "Jackets",
    price: 240,
    color: "Red",
    img: "https://images.unsplash.com/photo-1602562887763-851fa56061e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJlZCUyMENhc3VhbCUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 33,
    title: "White Short Skirt",
    category: "Skirts",
    price: 78,
    color: "White",
    img: "https://images.unsplash.com/photo-1590400516695-36708d3f964a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdoaXRlJTIwU2hvcnQlMjBTa2lydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 34,
    title: "Blue Printed Dress",
    category: "Dresses",
    price: 175,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1635695583654-6ca4e41a93e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsdWUlMjBQcmludGVkJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 35,
    title: "Beige Elegant Top",
    category: "Tops",
    price: 64,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1638396637969-956ca903df87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVpZ2UlMjBFbGVnYW50JTIwVG9wfGVufDB8fDB8fHww",
  },
  {
    id: 36,
    title: "Gray Trench Coat",
    category: "Jackets",
    price: 260,
    color: "Gray",
    img: "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JheSUyMFRyZW5jaCUyMENvYXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 37,
    title: "Red A-Line Dress",
    category: "Dresses",
    price: 190,
    color: "Red",
    img: "https://images.unsplash.com/photo-1694452242667-c7a9e276fc3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVkJTIwQSUyMExpbmUlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 38,
    title: "Black Crop Top",
    category: "Tops",
    price: 62,
    color: "Black",
    img: "https://images.unsplash.com/photo-1631492210747-6be6acde5dfa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmxhY2slMjBDcm9wJTIwVG9wfGVufDB8fDB8fHww",
  },
  {
    id: 39,
    title: "Blue Denim Jacket",
    category: "Jackets",
    price: 200,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1582225295589-18fca734d523?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJsdWUlMjBEZW5pbSUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 40,
    title: "Beige Midi Skirt",
    category: "Skirts",
    price: 94,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1591176134674-87e8f7c73ce9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVpZ2UlMjBNaWRpJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 41,
    title: "White Satin Dress",
    category: "Dresses",
    price: 220,
    color: "White",
    img: "https://images.unsplash.com/photo-1571402104000-0967ca8acfed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2hpdGUlMjBTYXRpbiUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 42,
    title: "Gray Knit Skirt",
    category: "Skirts",
    price: 86,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1597586594450-df1370a4aacd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdyYXklMjBLbml0JTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 43,
    title: "Red Slim Blazer",
    category: "Jackets",
    price: 230,
    color: "Red",
    img: "https://plus.unsplash.com/premium_photo-1739841787961-10545da5616b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVkJTIwU2xpbSUyMEJsYXplcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 44,
    title: "Beige Casual Blazer",
    category: "Jackets",
    price: 245,
    color: "Beige",
    img: "https://images.unsplash.com/photo-1592645946522-1b166cfc18c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJlaWdlJTIwQ2FzdWFsJTIwQmxhemVyfGVufDB8fDB8fHww",
  },
  {
    id: 45,
    title: "Blue Layered Skirt",
    category: "Skirts",
    price: 96,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1565406074930-ac3ae876f182?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJsdWUlMjBMYXllcmVkJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 46,
    title: "Black Party Dress",
    category: "Dresses",
    price: 250,
    color: "Black",
    img: "https://images.unsplash.com/photo-1741816219305-827580cab505?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJsYWNrJTIwUGFydHklMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 47,
    title: "Gray Wrap Dress",
    category: "Dresses",
    price: 200,
    color: "Gray",
    img: "https://images.unsplash.com/photo-1704627363852-484e95695411?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JheSUyMFdyYXAlMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 48,
    title: "White Bodycon Dress",
    category: "Dresses",
    price: 240,
    color: "White",
    img: "https://images.unsplash.com/photo-1750231211674-287f833561b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2hpdGUlMjBCb2R5Y29uJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
  },
];

const WomanClothsFeatured = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Dresses", "Tops", "Jackets", "Skirts"];

  const filteredProducts =
    activeFilter === "All"
      ? featuredProducts
      : featuredProducts.filter((item) => item.category === activeFilter);

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10 my-[-30px]">
      {/* ✅ Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Collection
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our top picks for the season with premium styles.
        </p>
      </div>

      {/* ✅ Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-amber-600 text-black"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ✅ Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative group"
          >
            {/* ✅ Product Image */}
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* ✅ Hover Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all">
                <button className="bg-white/90 p-2 rounded-full hover:bg-amber-600 text-gray-900">
                  <FiHeart />
                </button>
                <button className="bg-white/90 p-2 rounded-full hover:bg-amber-600 text-gray-900">
                  <FiEye />
                </button>
              </div>
            </div>

            {/* ✅ Product Details */}
            <div className="p-4">
              <p className="text-gray-600 text-sm">{product.category}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-amber-600 font-bold text-lg">
                  ${product.price}
                </span>
                <button className="bg-amber-600 text-black px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-amber-700 transition-all">
                  <FiShoppingCart /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomanClothsFeatured;
