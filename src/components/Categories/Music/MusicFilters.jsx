"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// Example music product data (replace with your own actual data)
const musicData = [
  {
    id: 1,
    name: "Acoustic Guitar",
    brand: "StrumMaster",
    category: "Instruments",
    price: 499,
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/899308580/photo/musicians-on-a-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=YWU3c83LxTBayW_qYXc5jGObg0VbUnL-cE0aGwI9kvQ=",
    features: ["6 Strings", "Spruce Top", "Natural Finish"],
  },
  {
    id: 2,
    name: "Wireless Headphones",
    brand: "SoundWave",
    category: "Accessories",
    price: 149,
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1284319632/photo/black-female-singer-singing-into-microphone-in-recording-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=nzNOIsQVPOvcw8X03-Qi_dnT1msu7_uh20cSzYHJHac=",
    features: ["Noise Cancelling", "Bluetooth 5.0", "20h Battery"],
  },
  {
    id: 3,
    name: "Digital Piano",
    brand: "KeyMagic",
    category: "Instruments",
    price: 799,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    features: ["88 Keys", "Weighted Action", "Built-in Speakers"],
  },
  {
    id: 4,
    name: "Drum Set",
    brand: "BeatPro",
    category: "Instruments",
    price: 699,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    features: ["5 Piece", "Cymbals Included", "Adjustable Throne"],
  },
  {
    id: 5,
    name: "Studio Microphone",
    brand: "ClearVoice",
    category: "Accessories",
    price: 199,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    features: ["Cardioid", "Pop Filter", "Shock Mount"],
  },
  {
    id: 6,
    name: "Electric Bass",
    brand: "BassKing",
    category: "Instruments",
    price: 599,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1677545820818-f1639f3e5b65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    features: ["4 Strings", "Maple Neck", "Glossy Black"],
  },
  {
    id: 7,
    name: "Classical Guitar",
    brand: "Harmony",
    category: "Instruments",
    price: 429,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    features: ["Nylon Strings", "Rosewood Fretboard", "Natural Finish"],
  },
  {
    id: 8,
    name: "In-Ear Monitors",
    brand: "ClearSound",
    category: "Accessories",
    price: 129,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Noise Isolation", "Comfort Fit", "High Fidelity"],
  },
  {
    id: 9,
    name: "Keyboard Synthesizer",
    brand: "WaveForm",
    category: "Instruments",
    price: 899,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww",
    features: ["61 Keys", "Multiple Voices", "Built-in Effects"],
  },
  {
    id: 10,
    name: "Electric Violin",
    brand: "StringTech",
    category: "Instruments",
    price: 549,
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Solid Body", "Piezo Pickup", "Adjustable Chin Rest"],
  },
  {
    id: 11,
    name: "DJ Controller",
    brand: "MixMaster",
    category: "Accessories",
    price: 699,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8fHww",
    features: ["2 Decks", "Touch Jog Wheels", "Built-in Audio Interface"],
  },
  {
    id: 12,
    name: "Condenser Microphone",
    brand: "StudioPro",
    category: "Accessories",
    price: 249,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682125765650-8a7baa2d4bf4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Wide Frequency", "Low Noise", "Gold Plated"],
  },
  {
    id: 13,
    name: "Electric Keyboard",
    brand: "KeySound",
    category: "Instruments",
    price: 399,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG11c2ljfGVufDB8fDB8fHww",
    features: ["76 Keys", "Multiple Sounds", "USB MIDI"],
  },
  {
    id: 14,
    name: "Portable Bluetooth Speaker",
    brand: "BeatBox",
    category: "Accessories",
    price: 99,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1664699106229-1bc773380c35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Water Resistant", "12h Playtime", "Built-in Mic"],
  },
  {
    id: 15,
    name: "Electric Mandolin",
    brand: "FolkTone",
    category: "Instruments",
    price: 399,
    rating: 3,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG11c2ljfGVufDB8fDB8fHww",
    features: ["8 Strings", "Solid Body", "Maple Neck"],
  },
  {
    id: 16,
    name: "Guitar Amplifier",
    brand: "AmpPro",
    category: "Accessories",
    price: 299,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljfGVufDB8fDB8fHww",
    features: ["30W Power", "Clean & Distortion", "Reverb Effect"],
  },
  {
    id: 17,
    name: "Electric Drum Pads",
    brand: "BeatZone",
    category: "Instruments",
    price: 499,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1538402074774-8e624f3f7e5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG11c2ljfGVufDB8fDB8fHww",
    features: ["8 Pads", "Velocity Sensitive", "USB MIDI"],
  },
  {
    id: 18,
    name: "Wireless Earbuds",
    brand: "SoundBuds",
    category: "Accessories",
    price: 129,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682125519317-43a8d20dde37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Touch Controls", "Noise Reduction", "Charging Case"],
  },
  {
    id: 19,
    name: "Electric Accordion",
    brand: "ClassicTone",
    category: "Instruments",
    price: 649,
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1682125502633-bfe1762ce8df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG11c2ljfGVufDB8fDB8fHww",
    features: ["120 Bass Buttons", "LED Display", "Built-in Amp"],
  },
  {
    id: 20,
    name: "Bass Guitar Strings",
    brand: "StringPro",
    category: "Accessories",
    price: 29,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682125525374-fd0cfec8d845?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Nickel Plated", "Light Gauge", "Long Lasting"],
  },
  {
    id: 21,
    name: "Ukulele",
    brand: "IslandSounds",
    category: "Instruments",
    price: 119,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1526394931762-90052e97b376?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG11c2ljfGVufDB8fDB8fHww",
    features: ["4 Strings", "Mahogany Body", "Glossy Finish"],
  },
  {
    id: 22,
    name: "Synthesizer Module",
    brand: "ModuSynth",
    category: "Instruments",
    price: 699,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG11c2ljfGVufDB8fDB8fHww",
    features: ["Analog Synth", "Multiple Oscillators", "CV Inputs"],
  },
  {
    id: 23,
    name: "Mixing Console",
    brand: "ProMix",
    category: "Accessories",
    price: 999,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1524567248408-cbfd37e65e2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fG11c2ljfGVufDB8fDB8fHww",
    features: ["16 Channels", "Digital Effects", "USB Interface"],
  },
  {
    id: 24,
    name: "Electric Guitar Strings",
    brand: "StringLine",
    category: "Accessories",
    price: 19,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Stainless Steel", "Medium Gauge", "Corrosion Resistant"],
  },
  {
    id: 25,
    name: "Bass Guitar Amplifier",
    brand: "AmpKing",
    category: "Accessories",
    price: 399,
    rating: 5,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1476136236990-838240be4859?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["100W Power", "Overdrive", "EQ Controls"],
  },
  {
    id: 26,
    name: "Stage Monitor Speakers",
    brand: "SoundBlast",
    category: "Accessories",
    price: 499,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1669110299948-b469be9f8a1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Active Speakers", "Bi-Amplified", "XLR Inputs"],
  },
  {
    id: 27,
    name: "Electric Cello",
    brand: "CelloTech",
    category: "Instruments",
    price: 799,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681335986389-ea926859952f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Solid Body", "Piezo Pickup", "Adjustable Endpin"],
  },
  {
    id: 28,
    name: "Microphone Stand",
    brand: "StandPro",
    category: "Accessories",
    price: 49,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681335986389-ea926859952f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable Height", "Heavy Base", "Foldable"],
  },
  {
    id: 29,
    name: "Guitar Tuner Pedal",
    brand: "TuneMaster",
    category: "Accessories",
    price: 89,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681335986389-ea926859952f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Accurate", "LED Display", "True Bypass"],
  },
  {
    id: 30,
    name: "Orchestral Violin",
    brand: "Virtuoso",
    category: "Instruments",
    price: 899,
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1732550920315-4768b7ae7aee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Handcrafted", "Maple Wood", "Ebony Fingerboard"],
  },
  {
    id: 31,
    name: "Bass Drum Pedal",
    brand: "DrumX",
    category: "Accessories",
    price: 129,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1732727902100-0a93acd99b2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Chain Drive", "Adjustable Tension", "Non-slip Base"],
  },
  {
    id: 32,
    name: "Portable MIDI Controller",
    brand: "BeatLab",
    category: "Accessories",
    price: 229,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1599139894727-62676829679b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["25 Keys", "Velocity Sensitive", "USB Powered"],
  },
  {
    id: 33,
    name: "Electric Ukulele",
    brand: "UkeStar",
    category: "Instruments",
    price: 159,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1599139894727-62676829679b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["4 Strings", "Solid Body", "Built-in Pickup"],
  },
  {
    id: 34,
    name: "Bass Effects Pedal",
    brand: "FuzzTone",
    category: "Accessories",
    price: 99,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1631541312976-aeec5dddbf06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Overdrive", "Boost", "True Bypass"],
  },
  {
    id: 35,
    name: "Stage Lighting Kit",
    brand: "LightWave",
    category: "Accessories",
    price: 349,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1732727903777-bf6ca352292a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["DMX Controlled", "RGB LEDs", "Remote Control"],
  },
  {
    id: 36,
    name: "Electric Mandolin Case",
    brand: "CasePro",
    category: "Accessories",
    price: 59,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1548502632-6b93092aad0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Durable", "Lightweight", "Water Resistant"],
  },
  {
    id: 37,
    name: "Classic Harmonica",
    brand: "BluesMaster",
    category: "Instruments",
    price: 39,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1619961601639-36db55982cd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Rich Tone", "12 Holes", "Stainless Steel"],
  },
  {
    id: 38,
    name: "Electric Guitar Strap",
    brand: "StrapKing",
    category: "Accessories",
    price: 25,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1693895592595-9171d91a0f22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable", "Leather", "Comfort Padding"],
  },
  {
    id: 39,
    name: "Electric Piano Bench",
    brand: "ComfortSeat",
    category: "Accessories",
    price: 89,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1485278537138-4e8911a13c02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable Height", "Padded Seat", "Sturdy Frame"],
  },
  {
    id: 40,
    name: "Synthesizer Keyboard Stand",
    brand: "StandMaster",
    category: "Accessories",
    price: 69,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1452724931113-5ab6340ce080?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable Height", "Foldable", "Heavy Duty"],
  },
  {
    id: 41,
    name: "Electric Guitar Pickup",
    brand: "PickMaster",
    category: "Accessories",
    price: 129,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1625786682948-2168238883d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Humbucker", "Alnico Magnets", "Low Noise"],
  },
  {
    id: 42,
    name: "Acoustic Guitar Strings",
    brand: "StringTone",
    category: "Accessories",
    price: 15,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1682931319164-e22dd83a6095?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Phosphor Bronze", "Light Gauge", "Long Lasting"],
  },
  {
    id: 43,
    name: "Electric Violin Bow",
    brand: "BowPro",
    category: "Accessories",
    price: 59,
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681263751059-18111c2580a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Carbon Fiber", "Lightweight", "Balanced"],
  },
  {
    id: 44,
    name: "Drumsticks Set",
    brand: "StickMaster",
    category: "Accessories",
    price: 19,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1631541312571-e8c49a12962d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Hickory Wood", "16\" Length", "Medium Weight"],
  },
  {
    id: 45,
    name: "Electric Bass Strap",
    brand: "StrapKing",
    category: "Accessories",
    price: 29,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1594384115313-ff3436ba24bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Adjustable", "Leather", "Wide Padding"],
  },
];

const MusicFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 1200,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(musicData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    let result = musicData;

    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((p) => filters.brand.includes(p.brand));
    }

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.features.length > 0) {
      result = result.filter((p) =>
        filters.features.every((f) => p.features.includes(f))
      );
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.rating > 0) {
      result = result.filter((p) => p.rating >= filters.rating);
    }

    if (filters.stock !== null) {
      result = result.filter((p) => p.stock === filters.stock);
    }

    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts([...result]);
    setVisibleCount(8);
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
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 1200,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-amber-700 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
        >
          {/* Close Btn for Mobile */}
          <button
            className="absolute top-4 right-4 text-amber-600 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-amber-600 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search music products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Brand</h3>
            {["StrumMaster", "KeyTone", "SoundLab", "CablePro", "StandMaster", "BassKing", "SynthPro", "StickMaster"].map(
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

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Category</h3>
            {["Instruments", "Accessories"].map((cat) => (
              <label key={cat} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleFilter("category", cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Features</h3>
            {[
              "Wooden",
              "6 Strings",
              "Natural Finish",
              "88 Keys",
              "Weighted",
              "Black Finish",
              "Closed Back",
              "Over Ear",
              "High Fidelity",
              "Shielded",
              "Durable",
              "Adjustable Height",
              "Sturdy",
              "Lightweight",
              "Polyphonic",
              "61 Keys",
              "Built-in Effects",
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
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
            <input
              type="range"
              min="0"
              max="1200"
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
            <h3 className="font-semibold mb-2 text-amber-600">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-amber-600 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-amber-600">Availability</h3>
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

        {/* Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
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
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-amber-600">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
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

export default MusicFilters;
