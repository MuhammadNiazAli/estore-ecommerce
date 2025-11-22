'use client'
import React, { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";

export const musicData = [
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
  {
    id: 46,
    name: "Studio Headphones",
    brand: "SoundLab",
    category: "Accessories",
    price: 199,
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1742829737874-ba18f815af4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Closed Back", "Over Ear", "High Fidelity"],
  },
  {
    id: 47,
    name: "Digital Audio Interface",
    brand: "AudioLink",
    category: "Accessories",
    price: 349,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1666209932712-28f136a4e979?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["2 Inputs", "48V Phantom Power", "USB Powered"],
  },
  {
    id: 48,
    name: "Electric Guitar Cable",
    brand: "CablePro",
    category: "Accessories",
    price: 19,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1677533606085-f01c472408e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["6ft Length", "Shielded", "Durable"],
  },
  {
    id: 49,
    name: "Synthesizer Patch Cables",
    brand: "PatchMaster",
    category: "Accessories",
    price: 29,
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1593697723906-3cee77328711?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["1ft Length", "Flexible", "Shielded"],
  },
  {
    id: 50,
    name: "Keyboard Sustain Pedal",
    brand: "PedalPro",
    category: "Accessories",
    price: 39,
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1705784034059-08e6554ba633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["Polarized", "Non-slip Base", "Durable"],
  },
];


const MusicProductGrid = () => {
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [products, setProducts] = useState(musicData.slice(0, 6));
  const [hoveredId, setHoveredId] = useState(null);

  const handleLoadMore = () => {
    const newCount = visibleCount + 6;
    setVisibleCount(newCount);
    setProducts(musicData.slice(0, newCount));
  };

  const handleSort = (value) => {
    setSortOption(value);
    let sortedProducts = [...products];
    if (value === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else {
      sortedProducts = musicData.slice(0, visibleCount);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Music Products Collection</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-yellow-400 font-semibold">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700"
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                    <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
                      <FaCartPlus /> Add to Cart
                    </button>
                    <div className="flex gap-4 text-xl text-white">
                      <FaHeart className="cursor-pointer hover:text-yellow-400" />
                      <FaEye className="cursor-pointer hover:text-yellow-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-yellow-400">${item.price}</p>
                  <span className="text-sm text-gray-300">{item.rating}★</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-2">
                  {(item.features || []).slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-gray-700 px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <p
                  className={`text-sm font-semibold mt-2 ${
                    item.stock ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          {visibleCount < musicData.length && (
            <button
              onClick={handleLoadMore}
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MusicProductGrid;
