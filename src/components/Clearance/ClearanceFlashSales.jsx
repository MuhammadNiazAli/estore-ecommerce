import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  {
    id: 1,
    title: "Premium Leather Jacket",
    image: "https://images.unsplash.com/photo-1646300487473-e08ec57be6cd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
    oldPrice: 180,
    discount: "-30%",
    timeLeft: 3600,
  },
  {
    id: 2,
    title: "Smart Watch Series 7",
    image: "https://images.unsplash.com/photo-1642101373432-a9c683c34902?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 220,
    oldPrice: 299,
    discount: "-25%",
    timeLeft: 5400,
  },
  {
    id: 3,
    title: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1632835746204-22f652dac3af?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 150,
    oldPrice: 199,
    discount: "-20%",
    timeLeft: 7200,
  },
  {
    id: 4,
    title: "Sport Sneakers",
    image: "https://images.unsplash.com/photo-1709258228137-19a8c193be39?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 90,
    oldPrice: 120,
    discount: "-25%",
    timeLeft: 4000,
  },
  {
    id: 5,
    title: "Classic Sunglasses",
    image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
    oldPrice: 75,
    discount: "-33%",
    timeLeft: 5200,
  },
  {
    id: 6,
    title: "Luxury Leather Wallet",
    image: "https://images.unsplash.com/photo-1651928692943-5d837fccf061?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45,
    oldPrice: 75,
    discount: "-40%",
    timeLeft: 2600,
  },
  {
    id: 7,
    title: "Gaming Laptop",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1036&auto=format&fit=crop",
    price: 1100,
    oldPrice: 1499,
    discount: "-27%",
    timeLeft: 8600,
  },
  {
    id: 8,
    title: "Noise Cancelling Earbuds",
    image: "https://media.istockphoto.com/id/1662728241/photo/wireless-silver-headphones-background-on-isolated-background-with-noise-cancelling-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=m-jblzOk2XiHBNeQOenz9Bl0CWiUJw-SmhYzPdF7OJo=",
    price: 75,
    oldPrice: 150,
    discount: "-50%",
    timeLeft: 3800,
  },
  {
    id: 9,
    title: "4K Ultra HD TV",
    image: "https://images.unsplash.com/photo-1615210230840-69c07c13b4d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 599,
    oldPrice: 799,
    discount: "-25%",
    timeLeft: 9600,
  },
  {
    id: 10,
    title: "Minimalist Backpack",
    image: "https://media.istockphoto.com/id/1019859458/photo/pastel-pink-school-bag-floating-on-sky-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=_uHLlrNfYQ0M_9hsok1UzB1DTYTq_HkvzhvFGycJ6jA=",
    price: 65,
    oldPrice: 99,
    discount: "-34%",
    timeLeft: 3000,
  },
  {
    id: 11,
    title: "Bluetooth Speaker",
    image: "https://media.istockphoto.com/id/1059154330/photo/boombox.webp?a=1&b=1&s=612x612&w=0&k=20&c=hjfiUYsBprkQFp4IG6G74pHifyLalVnaNlJ5QQsUHXk=",
    price: 80,
    oldPrice: 120,
    discount: "-33%",
    timeLeft: 6200,
  },
  {
    id: 12,
    title: "Designer Handbag",
    image: "https://images.unsplash.com/photo-1596552639068-99bd471b579c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 250,
    oldPrice: 400,
    discount: "-37%",
    timeLeft: 4500,
  },
  {
    id: 13,
    title: "Portable Coffee Maker",
    image: "https://media.istockphoto.com/id/618455446/photo/home-automation-control-by-smart-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=tBqiTfOVMrJO4g7mgTiiDN9y6tP8vjO28Y9cfmNQTxI=",
    price: 55,
    oldPrice: 99,
    discount: "-44%",
    timeLeft: 5400,
  },
  {
    id: 14,
    title: "Ergonomic Office Chair",
    image: "https://images.unsplash.com/photo-1750306956140-616c5153918e?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199,
    oldPrice: 299,
    discount: "-33%",
    timeLeft: 8800,
  },
  {
    id: 15,
    title: "Gaming Headset",
    image: "https://images.unsplash.com/photo-1629429407756-4a7703614972?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
    oldPrice: 180,
    discount: "-33%",
    timeLeft: 6200,
  },
  {
    id: 16,
    title: "Stylish Denim Jacket",
    image: "https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.webp?a=1&b=1&s=612x612&w=0&k=20&c=iVux2-NqF3u3_G0fna0i4cVNLR0-RYTk88lB7UI33t0=",
    price: 85,
    oldPrice: 150,
    discount: "-43%",
    timeLeft: 3200,
  },
  {
    id: 17,
    title: "Modern Table Lamp",
    image: "https://images.unsplash.com/photo-1676318813569-569623e88339?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 49,
    oldPrice: 90,
    discount: "-45%",
    timeLeft: 3800,
  },
  {
    id: 18,
    title: "Smartphone Gimbal",
    image: "https://media.istockphoto.com/id/2169043603/photo/influencer-taking-interview-of-celebrity.webp?a=1&b=1&s=612x612&w=0&k=20&c=xZEaAFKjxVMQusQ8mHo7JqPI7BZGt-UadAlY7JHCEoU=",
    price: 89,
    oldPrice: 159,
    discount: "-44%",
    timeLeft: 4900,
  },
  {
    id: 19,
    title: "Running Shoes",
    image: "https://media.istockphoto.com/id/2157391232/photo/a-young-woman-runner-is-outside-in-the-morning-preparing-for-a-jog-she-is-seen-bending-down.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q1d52-kxmtFfPz94hZCH13Vp7ARJX9qnFPi2_377zyI=",
    price: 70,
    oldPrice: 120,
    discount: "-42%",
    timeLeft: 3000,
  },
  {
    id: 20,
    title: "Luxury Watch",
    image: "https://media.istockphoto.com/id/118803311/photo/mens-wristwatch.webp?a=1&b=1&s=612x612&w=0&k=20&c=GlqRtjHew3c_AMhGpNIKGAjW6hsl4L-xQBeTu8Grnoc=",
    price: 499,
    oldPrice: 799,
    discount: "-38%",
    timeLeft: 7900,
  },
  {
    id: 21,
    title: "Portable Air Purifier",
    image: "https://media.istockphoto.com/id/2078157944/photo/woman-use-smartphone-with-app-for-air-purificator-and-ultrasonic-humidifier-control.webp?a=1&b=1&s=612x612&w=0&k=20&c=LmlZYy1B4OyA_enjzo7vvDNV6CJTKFi47oSQGEgt8GY=",
    price: 130,
    oldPrice: 200,
    discount: "-35%",
    timeLeft: 4200,
  },
  {
    id: 22,
    title: "Fitness Smart Band",
    image: "https://images.unsplash.com/photo-1638536534782-6c7cf0802d1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45,
    oldPrice: 79,
    discount: "-43%",
    timeLeft: 3100,
  },
  {
    id: 23,
    title: "Waterproof Action Camera",
    image: "https://media.istockphoto.com/id/1329676937/photo/waterproof-camera-floating-in-bubbly-water-on-pink-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=-cPVqc7r8g8FwAzFhwqal_mYntD0n1NBUqydNNhrxEE=",
    price: 180,
    oldPrice: 260,
    discount: "-31%",
    timeLeft: 6000,
  },
  {
    id: 24,
    title: "Electric Toothbrush",
    image: "https://media.istockphoto.com/id/502893534/photo/electric-toothbrush.webp?a=1&b=1&s=612x612&w=0&k=20&c=5uW9H3QB96aJPsqMmVvhJalVpNoPcx8lHIRDv7i5u7U=",
    price: 39,
    oldPrice: 69,
    discount: "-43%",
    timeLeft: 2700,
  },
  {
    id: 25,
    title: "Foldable Drone Camera",
    image: "https://images.unsplash.com/photo-1556537902-16b47f40c55c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 299,
    oldPrice: 499,
    discount: "-40%",
    timeLeft: 7500,
  },
  {
    id: 26,
    title: "Kitchen Stand Mixer",
    image: "https://plus.unsplash.com/premium_photo-1718186096324-474ac487bcc3?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 220,
    oldPrice: 349,
    discount: "-37%",
    timeLeft: 6400,
  },
  {
    id: 27,
    title: "Noise Reduction Microphone",
    image: "https://media.istockphoto.com/id/2173978641/photo/megaphone-with-smoke-on-podium.webp?a=1&b=1&s=612x612&w=0&k=20&c=4Iglec96HCUEcZ53CwG_SoncmXEaGXZJQLkW_MsdP1I=",
    price: 65,
    oldPrice: 110,
    discount: "-41%",
    timeLeft: 4300,
  },
  {
    id: 28,
    title: "Portable Power Bank 20,000mAh",
    image: "https://images.unsplash.com/photo-1653732426595-e387bde30c9f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 49,
    oldPrice: 89,
    discount: "-45%",
    timeLeft: 3400,
  },
  {
    id: 29,
    title: "Home Projector 1080p",
    image: "https://media.istockphoto.com/id/906631716/photo/multimedia-projector-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=l7IHHs0KvAk7TJMs2UfF2wn6Z_3qMWyhEYhrIIzxED0=",
    price: 150,
    oldPrice: 249,
    discount: "-40%",
    timeLeft: 7000,
  },
  {
    id: 30,
    title: "Compact Hair Dryer",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 30,
    oldPrice: 60,
    discount: "-50%",
    timeLeft: 2500,
  },
  {
    id: 31,
    title: "Smart LED Light Bulb",
    image: "https://media.istockphoto.com/id/510784830/photo/led-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=QIHehbNqn-9UhJkHqDVj22VbBeTlTbRZNHx7bJjZpAA=",
    price: 19,
    oldPrice: 39,
    discount: "-51%",
    timeLeft: 2800,
  },
  {
    id: 32,
    title: "Portable Camping Stove",
    image: "https://media.istockphoto.com/id/497509673/photo/gas-stove-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=UpAAz_4zp6N7DcM86x7FQdQtR3CZPeikPxNG5z6MHYo=",
    price: 59,
    oldPrice: 99,
    discount: "-40%",
    timeLeft: 4600,
  },
  {
    id: 33,
    title: "Wireless Charging Pad",
    image: "https://media.istockphoto.com/id/2032500465/photo/wireless-charger-under-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=TDhPRQl7zO-tUxboOcEFoT2mJpTPOyKtmm7X59YHF1E=",
    price: 25,
    oldPrice: 49,
    discount: "-49%",
    timeLeft: 3000,
  },
  {
    id: 34,
    title: "Adjustable Laptop Stand",
    image: "https://media.istockphoto.com/id/1125614886/photo/standing-laptop-holder-set-up-with-notebook-on-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qw3Rj8VNc76nNOaACTeb0ehQw2WApktlq-dyfxWPuoI=",
    price: 39,
    oldPrice: 69,
    discount: "-43%",
    timeLeft: 3800,
  },
  {
    id: 35,
    title: "Compact DSLR Camera",
    image: "https://plus.unsplash.com/premium_photo-1687989478462-f21931633791?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 450,
    oldPrice: 699,
    discount: "-36%",
    timeLeft: 8700,
  },
  {
    id: 36,
    title: "Travel Duffel Bag",
    image: "https://media.istockphoto.com/id/1257455876/photo/duffel-bag-travel-case-leather-holdall-valise-fashion-modern.webp?a=1&b=1&s=612x612&w=0&k=20&c=jPnW36SSfQdnAI5T664d8mQC9-MgXjIQLirjTH8S-V8=",
    price: 70,
    oldPrice: 120,
    discount: "-41%",
    timeLeft: 3400,
  },
  {
    id: 37,
    title: "HD Webcam with Mic",
    image: "https://images.unsplash.com/photo-1626581795188-8efb9a00eeec?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59,
    oldPrice: 99,
    discount: "-40%",
    timeLeft: 3900,
  },
  {
    id: 38,
    title: "Smart Robot Vacuum",
    image: "https://images.unsplash.com/photo-1629248242719-c4d8b35fc3c9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 299,
    oldPrice: 499,
    discount: "-40%",
    timeLeft: 8000,
  },
  {
    id: 39,
    title: "VR Gaming Headset",
    image: "https://media.istockphoto.com/id/618761378/photo/man-using-virtual-reality-simulator-headset.webp?a=1&b=1&s=612x612&w=0&k=20&c=g-G9uKI3fUQ837nJN-jUI5YPMraBd5k_MrkylkTOX0Q=",
    price: 349,
    oldPrice: 599,
    discount: "-42%",
    timeLeft: 8800,
  },
  {
    id: 40,
    title: "Electric Kettle",
    image: "https://images.unsplash.com/photo-1738520420652-0c47cea3922b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25,
    oldPrice: 49,
    discount: "-49%",
    timeLeft: 2600,
  },
  {
    id: 41,
    title: "Smart Door Lock",
    image: "https://media.istockphoto.com/id/2155387682/photo/guest-utilizes-smartphone-to-unlock-door-for-easy-and-secure-entry.webp?a=1&b=1&s=612x612&w=0&k=20&c=U2gXzRtFk0Uk79xPG2NI9NJE6-VbKFxqOUYzDaR1mBw=",
    price: 199,
    oldPrice: 329,
    discount: "-39%",
    timeLeft: 6500,
  },
  {
    id: 42,
    title: "Gaming Mouse RGB",
    image: "https://media.istockphoto.com/id/1051243766/photo/gamer-workspace-concept-top-view-a-gaming-gear-mouse-keyboard-with-rgb-color-joystick-headset.webp?a=1&b=1&s=612x612&w=0&k=20&c=_lmxxhtopgX-MZ1uMKKgPfxDd6Hlqw-E_ed487n9LIU=",
    price: 35,
    oldPrice: 69,
    discount: "-49%",
    timeLeft: 3100,
  },
  {
    id: 43,
    title: "Smart Wi-Fi Plug",
    image: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 18,
    oldPrice: 35,
    discount: "-49%",
    timeLeft: 2200,
  },
  {
    id: 44,
    title: "Luxury Bedding Set",
    image: "https://media.istockphoto.com/id/157375233/photo/hotel-luxury.webp?a=1&b=1&s=612x612&w=0&k=20&c=3X0Nl136Wv1ArhmphLWmlKxaMjLC934rHL4oUIHIWuQ=",
    price: 180,
    oldPrice: 299,
    discount: "-40%",
    timeLeft: 7400,
  },
  {
    id: 45,
    title: "Stainless Steel Cookware Set",
    image: "https://media.istockphoto.com/id/612630426/photo/cooking-and-frying-pans-set-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=axpCyOba_Z9nBFLyQ0OBoeGYZBHlyHyKuYMhiHnEbyk=",
    price: 150,
    oldPrice: 259,
    discount: "-42%",
    timeLeft: 7100,
  },
  {
    id: 46,
    title: "Noise Reduction Curtain",
    image: "https://media.istockphoto.com/id/2170308206/photo/interior-design-in-a-patient-room-in-a-private-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=fXq9DCTed__7MFQQgDHNyMcGEZLVRyRuVnuavQSmbck=",
    price: 85,
    oldPrice: 139,
    discount: "-39%",
    timeLeft: 5000,
  },
  {
    id: 47,
    title: "Ceramic Dinnerware Set",
    image: "https://media.istockphoto.com/id/1312663211/photo/stack-of-ceramic-dishware-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jvCFnTO3SeTg-Bk-X-3JUyVE1jMPoEFdvEX9vrY_JOg=",
    price: 110,
    oldPrice: 189,
    discount: "-42%",
    timeLeft: 5900,
  },
  {
    id: 48,
    title: "Portable Car Vacuum Cleaner",
    image: "https://media.istockphoto.com/id/916789444/photo/cleaning-car-interior-with-portable-vacuum-cleaner.webp?a=1&b=1&s=612x612&w=0&k=20&c=BnSRb-GZ4vj0-xN-4YFD6boSKh39oEbi1jxHxymMKDg=",
    price: 40,
    oldPrice: 79,
    discount: "-49%",
    timeLeft: 2800,
  },
  {
    id: 49,
    title: "Compact Blender",
    image: "https://media.istockphoto.com/id/2219678394/photo/several-makeup-brushes-are-neatly-arranged-on-a-white-shelf.webp?a=1&b=1&s=612x612&w=0&k=20&c=I8GHky5sO88uMkZJBpudF3N1KxlUr4Dc1jFrCWcotHU=",
    price: 60,
    oldPrice: 109,
    discount: "-45%",
    timeLeft: 3300,
  },
  {
    id: 50,
    title: "Smart Baby Monitor",
    image: "https://media.istockphoto.com/id/2148305435/photo/wireless-smart-camera-on-a-blue-background-monitoring-the-house-and-children-via-the-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=GENZhpp4Q6rl73aQpH35hJmjzPZv4l-DAtVVJKjRWHI=",
    price: 120,
    oldPrice: 199,
    discount: "-39%",
    timeLeft: 6800,
  },
  {
    id: 51,
    title: "Portable Ice Maker",
    image: "https://media.istockphoto.com/id/2155731742/photo/a-portable-automatic-ice-maker-with-the-lid-open-showing-an-ice-cube-tray-full-of-ice-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=u0Cl79HAUA_PSfQ78rf6um2g6rE6PdyvAsAWpQU5CvI=",
    price: 180,
    oldPrice: 299,
    discount: "-40%",
    timeLeft: 5600,
  },
  {
    id: 52,
    title: "Luxury Bath Towel Set",
    image: "https://media.istockphoto.com/id/183876244/photo/spa-treatment.webp?a=1&b=1&s=612x612&w=0&k=20&c=iaFDW8DPyY9DEoqTWqrvJCLRKHCRBiXr4ntmek_Qg5E=",
    price: 75,
    oldPrice: 129,
    discount: "-41%",
    timeLeft: 3100,
  },
  {
    id: 53,
    title: "Foldable Treadmill",
    image: "https://media.istockphoto.com/id/2207319491/photo/friont-view-of-tapis-roulant-on-white-png-transparent-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cEUVV2TOGoDUxw8Cos1MB2tY1nki3Z7rljRIdOlgEIY=",
    price: 450,
    oldPrice: 699,
    discount: "-36%",
    timeLeft: 8100,
  },
  {
    id: 54,
    title: "Smart LED Strip Lights",
    image: "https://images.unsplash.com/photo-1539460769596-bd6da7743293?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29,
    oldPrice: 59,
    discount: "-51%",
    timeLeft: 2600,
  },
  {
    id: 55,
    title: "Electric Massage Gun",
    image: "https://media.istockphoto.com/id/2209683349/photo/modern-massage-gun-with-four-interchangeable-heads-displayed-on-a-grey-textured-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=IZIkw9U_iof2H9x1DbpwOZkF59JSAinztZKGdpLYQgM=",
    price: 95,
    oldPrice: 169,
    discount: "-44%",
    timeLeft: 3900,
  },
  {
    id: 56,
    title: "Mini Projector",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 129,
    oldPrice: 229,
    discount: "-44%",
    timeLeft: 5300,
  },
  {
    id: 57,
    title: "Smart Refrigerator",
    image: "https://media.istockphoto.com/id/1366732881/photo/smart-home-operating-system-concept-of-future.webp?a=1&b=1&s=612x612&w=0&k=20&c=77uphVnEofb8_z6HIMoKMxIGCjiCnudBcdnGODLRxaI=",
    price: 999,
    oldPrice: 1499,
    discount: "-33%",
    timeLeft: 10800,
  },
  {
    id: 58,
    title: "Cordless Vacuum Cleaner",
    image: "https://media.istockphoto.com/id/2158841201/photo/vacuum-cleaner-for-cleaning-the-sofa-in-the-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=aDg9ssquBD8WjKNzC6Xrm-ii-kzXDVPzJBficNztBDQ=",
    price: 220,
    oldPrice: 399,
    discount: "-45%",
    timeLeft: 6800,
  },
  {
    id: 59,
    title: "Wireless Security Camera",
    image: "https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 79,
    oldPrice: 139,
    discount: "-43%",
    timeLeft: 4500,
  },
  {
    id: 60,
    title: "Portable Bluetooth Keyboard",
    image: "https://images.unsplash.com/photo-1681140045438-2f24dfb93d2f?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 39,
    oldPrice: 69,
    discount: "-43%",
    timeLeft: 3200,
  },
  {
    id: 61,
    title: "Smart Thermostat",
    image: "https://media.istockphoto.com/id/2185000069/photo/woman-adjusting-temperature-on-digital-thermostat.webp?a=1&b=1&s=612x612&w=0&k=20&c=52H6Uq5OObWDbdQ_Tx0sQCaVRsjJIW_ucJMX62VHeAA=",
    price: 149,
    oldPrice: 249,
    discount: "-40%",
    timeLeft: 5600,
  },
  {
    id: 62,
    title: "Luxury Men’s Shoes",
    image: "https://media.istockphoto.com/id/840465046/photo/close-up-on-mens-leather-shoes-in-the-row.webp?a=1&b=1&s=612x612&w=0&k=20&c=09wO_Y3It4Nuh8tEPqVsmztVXD_z0_lBM8vOj0JcDVU=",
    price: 129,
    oldPrice: 199,
    discount: "-35%",
    timeLeft: 4200,
  },
  {
    id: 63,
    title: "Women’s Designer Dress",
    image: "https://media.istockphoto.com/id/1943201229/photo/rack-with-different-stylish-womens-clothes-near-white-wall-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=lABtbiVBk4PV_gLODgsA7Zg1sCfooVMHsBXyF51_0gs=",
    price: 179,
    oldPrice: 299,
    discount: "-40%",
    timeLeft: 6200,
  },
  {
    id: 64,
    title: "High-End Gaming Chair",
    image: "https://media.istockphoto.com/id/2194130894/photo/computer-gamer-chair.webp?a=1&b=1&s=612x612&w=0&k=20&c=-scjfDliJriYQBAmJRkzfaE9HXSpIocl41iT30iFbmU=",
    price: 299,
    oldPrice: 499,
    discount: "-40%",
    timeLeft: 8700,
  },
  {
    id: 65,
    title: "Leather Travel Backpack",
    image: "https://images.unsplash.com/photo-1622560257067-108402fcedc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhdGhlciUyMFRyYXZlbCUyMEJhY2twYWNrfGVufDB8fDB8fHww",
    price: 149,
    oldPrice: 249,
    discount: "-40%",
    timeLeft: 4900,
  },
  {
    id: 67,
    title: "Smart Air Conditioner",
    image: "https://media.istockphoto.com/id/1211458525/photo/woman-using-smart-home-application-on-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=53M4TJhNGFph_Su0VDxSuBC4N8g16pf-DrxCwVoyCko=",
    price: 699,
    oldPrice: 999,
    discount: "-30%",
    timeLeft: 9700,
  },
  {
    id: 68,
    title: "Digital Drawing Tablet",
    image: "https://media.istockphoto.com/id/2193791990/photo/digital-tablet-mockup-in-white-screen-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=lOrc8bQbJKuQobJLcmxqRBN6CqxaLZXcReHIIZUnqgA=",
    price: 199,
    oldPrice: 329,
    discount: "-39%",
    timeLeft: 5600,
  },
  {
    id: 69,
    title: "Smart Garden Kit",
    image: "https://images.unsplash.com/photo-1657049016252-d81f230fbef7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89,
    oldPrice: 159,
    discount: "-44%",
    timeLeft: 3500,
  },
  {
    id: 70,
    title: "Luxury Wall Clock",
    image: "https://images.unsplash.com/photo-1556453903-3c0d9dcd09d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwV2FsbCUyMENsb2NrfGVufDB8fDB8fHww",
    price: 75,
    oldPrice: 129,
    discount: "-42%",
    timeLeft: 3100,
  },
  {
    id: 71,
    title: "Smart Fitness Scale",
    image: "https://media.istockphoto.com/id/2223400687/photo/heart-and-brain-pair-on-seesaw-before-gray-defocused-background-mental-wellbeing-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=6SsNuYzqSE_LiKMfQWPLShO6FMF_CguVK6_P6anax9g=",
    price: 49,
    oldPrice: 89,
    discount: "-45%",
    timeLeft: 3000,
  },
  {
    id: 72,
    title: "Luxury Bed Mattress",
    image: "https://media.istockphoto.com/id/1396593401/photo/furniture-showroom-with-different-bed-furnitures-potted-plants-and-side-tables-cityscape-from.webp?a=1&b=1&s=612x612&w=0&k=20&c=w-HCq7eoEYIXw500QKnYrU98j8mDPeMhsu4Yd6WhcqM=",
    price: 499,
    oldPrice: 799,
    discount: "-38%",
    timeLeft: 9200,
  },
  {
    id: 73,
    title: "Portable Camping Tent",
    image: "https://media.istockphoto.com/id/892770978/photo/i-dont-need-therapy-i-just-need-camping.webp?a=1&b=1&s=612x612&w=0&k=20&c=R5lv7wNKRqFq6wf5Syt-nURbwZRICF8M3qkaw_2oJNE=",
    price: 129,
    oldPrice: 229,
    discount: "-44%",
    timeLeft: 4700,
  },
  {
    id: 74,
    title: "Bluetooth Car Kit",
    image: "https://media.istockphoto.com/id/1027682982/photo/bluetooth-hands-free-car-kit-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=zMn0P2CTyp5XPkAzVM5zMQ7PYK_74O4NpzH8mw_4kUI=",
    price: 35,
    oldPrice: 69,
    discount: "-49%",
    timeLeft: 2400,
  },
  {
    id: 75,
    title: "Smartphone Tripod Stand",
    image: "https://media.istockphoto.com/id/1272455037/photo/mobile-phone-on-a-stabilizer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wx5hUSi2jt7j1tYaa57lI_N8JcVwlnkziAoRMBu4B_Q=",
    price: 29,
    oldPrice: 59,
    discount: "-51%",
    timeLeft: 2800,
  },
  {
    id: 76,
    title: "Luxury Sofa Set",
    image: "https://plus.unsplash.com/premium_photo-1686167993412-6e5dfafdc1f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 899,
    oldPrice: 1499,
    discount: "-40%",
    timeLeft: 10800,
  },
  {
    id: 77,
    title: "Ceramic Cookware Kit",
    image: "https://media.istockphoto.com/id/2188893276/photo/cute-frog-cup-made-from-clay-by-child.webp?a=1&b=1&s=612x612&w=0&k=20&c=4lM29ORHzsoTENPbzfTxBPWD3zGqKC-EPxusP4n0eHE=",
    price: 149,
    oldPrice: 249,
    discount: "-40%",
    timeLeft: 5100,
  },
  {
    id: 80,
    title: "Wireless Charging Mouse Pad",
    image: "https://images.unsplash.com/photo-1568246387285-527f42cd0833?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyME1vdXNlJTIwUGFkfGVufDB8fDB8fHww",
    price: 45,
    oldPrice: 89,
    discount: "-49%",
    timeLeft: 3200,
  },
];

const ClearanceFlashSales = () => {
  const [timers, setTimers] = useState(products.map((p) => p.timeLeft));
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update timers
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => prev.map((t) => (t > 0 ? t - 1 : 0)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`;
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-white text-amber-600 py-10 px-4">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Flash Clearance Sales
        </h2>
        {/* ✅ Desktop (Swiper) */}
        {isDesktop ? (
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            style={{ paddingBottom: "1rem" }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-xl shadow-md relative select-none w-full max-w-[95%] mx-auto">
                  {/* Discount Badge */}
                  <span className="absolute top-3 left-3 bg-amber-700 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase z-10">
                    {product.discount}
                  </span>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />

                  {/* Product Info */}
                  <div className="p-4">
                    <h3
                      className="text-gray-900 font-semibold text-lg truncate"
                      title={product.title}
                    >
                      {product.title}
                    </h3>

                    {/* Prices */}
                    <div className="mt-2">
                      <span className="text-amber-600 font-bold text-lg">
                        ${product.price}
                      </span>
                      <span className="text-gray-500 line-through ml-2">
                        ${product.oldPrice}
                      </span>
                    </div>

                    {/* Countdown */}
                    <div className="mt-3 text-gray-700 text-sm bg-white py-1 px-2 rounded-lg inline-block select-none">
                      {formatTime(timers[index])}
                    </div>

                    {/* Add to Cart */}
                    <button className="w-full mt-4 bg-amber-700 text-gray-900 py-2 rounded-lg font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-2">
                      <ShoppingCart size={18} /> Add to Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* ✅ Mobile Grid */
          <div className="grid grid-cols-1 gap-6">
            {products.slice(0, visibleCount).map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md relative w-full"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-amber-700 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase z-10">
                  {product.discount}
                </span>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                {/* Product Info */}
                <div className="p-4">
                  <h3
                    className="text-gray-900 font-semibold text-base truncate"
                    title={product.title}
                  >
                    {product.title}
                  </h3>

                  {/* Prices */}
                  <div className="mt-2">
                    <span className="text-amber-600 font-bold text-lg">
                      ${product.price}
                    </span>
                    <span className="text-gray-500 line-through ml-2 text-sm">
                      ${product.oldPrice}
                    </span>
                  </div>

                  {/* Countdown */}
                  <div className="mt-3 text-gray-700 text-sm bg-white py-1 px-2 rounded-lg inline-block">
                    {formatTime(timers[index])}
                  </div>

                  {/* Add to Cart */}
                  <button className="w-full mt-4 bg-amber-700 text-gray-900 py-2 rounded-lg font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-2">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}

            {/* Show More Button */}
            {visibleCount < products.length && (
              <button
                onClick={handleShowMore}
                className="w-full mt-4 bg-amber-700 text-gray-900 py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
              >
                Show More
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClearanceFlashSales;
