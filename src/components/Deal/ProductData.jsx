import {
  FaHeadphonesAlt,
  FaBatteryFull,
  FaBluetoothB,
  FaThermometerHalf,
  FaClock,
  FaPowerOff,
  FaCogs,
  FaUsb,
  FaPlug,
  FaRobot,
  FaMicrophoneAlt,
  FaMagnet,
} from "react-icons/fa";

import {
  FiBox,
  FiSmartphone,
  FiBell,
  FiActivity,
  FiCpu,
  FiSun,
  FiRotateCcw,
  FiGrid,
  FiClock, // ✅ Added missing import
} from "react-icons/fi";

import {
  MdAccessibility,
  MdOutlineCable,
  MdSensors,
  MdNightlight,
} from "react-icons/md";

import {
  TbHeartRateMonitor,
  TbDeviceMobileMessage,
  TbAdjustmentsHorizontal,
  TbUsb,
} from "react-icons/tb";

import {
  BsFillMoonStarsFill,
  BsLightningFill,
  BsDisplay,
  BsFillPlugFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";

import {
  IoHeadsetSharp,
  IoNotificationsOutline,
} from "react-icons/io5";

import {
  AiOutlineFundProjectionScreen,
  AiOutlineAppstoreAdd,
  AiOutlineUsb,
} from "react-icons/ai";

import {
  RiSoundModuleLine,
  RiHomeWifiFill,
  RiComputerLine,
  RiInboxArchiveFill,
  RiUserSettingsLine,
  RiFolderSettingsFill,
  RiSettings3Fill,
} from "react-icons/ri";



export const allProducts = [
  {
    id: 1,
    title: 'Noise-Canceling Headphones',
    price: 89,
    oldPrice: 139,
    image: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop',
    description: 'Experience immersive audio with active noise cancellation and rich bass. Ideal for travelers, remote workers, and music lovers.',
    features: [
      { icon: FaHeadphonesAlt, label: 'Active Noise Cancellation' },
      { icon: FaBatteryFull, label: '30-Hour Battery' },
      { icon: FaBluetoothB, label: 'Bluetooth 5.2' },
      { icon: IoHeadsetSharp, label: 'Foldable & Portable' }
    ],
    reviews: 124,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Smart Fitness Tracker',
    price: 59,
    oldPrice: 99,
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=859&auto=format&fit=crop',
    description: 'Monitor your health with real-time heart rate tracking, sleep analysis, and step counting.',
    features: [
      { icon: TbHeartRateMonitor, label: 'Heart Rate Monitor' },
      { icon: FiActivity, label: 'Activity Tracker' },
      { icon: BsFillMoonStarsFill, label: 'Sleep Analysis' },
      { icon: FiBell, label: 'Smart Notifications' }
    ],
    reviews: 89,
    rating: 4.2,
  },
  {
    id: 3,
    title: 'Compact Bluetooth Speaker',
    price: 45,
    oldPrice: 79,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1031&auto=format&fit=crop',
    description: 'Enjoy crisp, room-filling sound with a portable speaker designed for indoor and outdoor use.',
    features: [
      { icon: RiSoundModuleLine, label: 'Deep Bass' },
      { icon: FaThermometerHalf, label: 'IPX7 Waterproof' },
      { icon: FaBatteryFull, label: '12-Hour Playtime' },
      { icon: AiOutlineAppstoreAdd, label: 'Stereo Pairing' }
    ],
    reviews: 143,
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Wireless Charging Pad',
    price: 29,
    oldPrice: 59,
    image: 'https://plus.unsplash.com/premium_photo-1671017712452-92d279cb3363?q=80&w=423&auto=format&fit=crop',
    description: 'Fast charge your phone without cables. Built-in safety mechanisms ensure safe charging.',
    features: [
      { icon: BsLightningFill, label: '15W Fast Charge' },
      { icon: MdSensors, label: 'Safety Sensors' },
      { icon: FaPowerOff, label: 'Qi-Compatible' },
      { icon: FaClock, label: 'LED Indicator' }
    ],
    reviews: 75,
    rating: 4.0,
  },
  {
    id: 5,
    title: 'Smart LED Table Lamp',
    price: 39,
    oldPrice: 69,
    image: 'https://plus.unsplash.com/premium_photo-1672166939591-b2547bd18fca?q=80&w=327&auto=format&fit=crop',
    description: 'A minimalistic smart lamp with adjustable brightness, color temperature, and app control.',
    features: [
      { icon: FiSun, label: 'Dimmable Light' },
      { icon: FiSmartphone, label: 'App & Voice Control' },
      { icon: MdNightlight, label: 'Night Mode' },
      { icon: FiRotateCcw, label: '360° Rotation' }
    ],
    reviews: 58,
    rating: 4.3,
  },
  {
    id: 6,
    title: 'Gaming Mouse RGB',
    price: 25,
    oldPrice: 45,
    image: 'https://images.unsplash.com/photo-1627745212312-e399f57157ea?q=80&w=387&auto=format&fit=crop',
    description: 'Designed for competitive gamers with ultra-fast response and RGB lighting.',
    features: [
      { icon: FiGrid, label: '8 Programmable Buttons' },
      { icon: BsLightningFill, label: 'RGB Backlight' },
      { icon: FiCpu, label: '16,000 DPI Sensor' },
      { icon: AiOutlineFundProjectionScreen, label: 'Ergonomic Grip' }
    ],
    reviews: 98,
    rating: 4.6,
  },
  {
    id: 7,
    title: 'Ergonomic Office Chair',
    price: 149,
    oldPrice: 199,
    image: 'https://images.unsplash.com/photo-1750306957077-b74e45fe1819?q=80&w=464&auto=format&fit=crop',
    description: 'Built for long hours of work or gaming, with lumbar support and breathable mesh.',
    features: [
      { icon: RiUserSettingsLine, label: 'Lumbar Support' },
      { icon: FiRotateCcw, label: '360° Swivel' },
      { icon: TbAdjustmentsHorizontal, label: 'Adjustable Height' },
      { icon: RiInboxArchiveFill, label: 'Breathable Mesh Back' }
    ],
    reviews: 67,
    rating: 4.1,
  },
  {
    id: 8,
    title: 'Portable Tripod Stand',
    price: 19,
    oldPrice: 29,
    image: 'https://images.unsplash.com/photo-1669255344189-fc6a34d42f3a?q=80&w=327&auto=format&fit=crop',
    description: 'Compact and foldable tripod for smartphones and cameras.',
    features: [
      { icon: TbDeviceMobileMessage, label: 'Universal Mount' },
      { icon: TbAdjustmentsHorizontal, label: 'Adjustable Height' },
      { icon: FiSmartphone, label: 'Lightweight Build' },
      { icon: FiRotateCcw, label: '360° Rotation' }
    ],
    reviews: 40,
    rating: 4.0,
  },
  {
    id: 9,
    title: 'Laptop Cooling Pad',
    price: 34,
    oldPrice: 59,
    image: 'https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?q=80&w=870&auto=format&fit=crop',
    description: 'Prevent overheating and improve laptop performance.',
    features: [
      { icon: FiCpu, label: 'Dual Silent Fans' },
      { icon: TbAdjustmentsHorizontal, label: '5 Tilt Levels' },
      { icon: BsFillCameraVideoFill, label: 'Blue LED Indicators' },
      { icon: TbUsb, label: 'USB-Powered' }
    ],
    reviews: 52,
    rating: 4.2,
  },
  {
  id: 10,
  title: 'Adjustable Phone Stand',
  price: 14,
  oldPrice: 24,
  image: 'https://images.unsplash.com/photo-1669255344177-dc55f537acc9?q=80&w=327&auto=format&fit=crop',
  description: 'Stable and compact phone holder that supports both vertical and horizontal orientations.',
  features: [
    { icon: MdAccessibility, label: 'Universal Fit' }, // ✅ Fixed: used correct imported icon
    { icon: TbAdjustmentsHorizontal, label: 'Angle Adjustment' },
    { icon: MdOutlineCable, label: 'Anti-Slip Base' },
    { icon: FiRotateCcw, label: 'Foldable Design' }
  ],
  reviews: 83,
  rating: 4.4,
},
  {
    id: 11,
    title: 'Wireless Security Camera',
    price: 99,
    oldPrice: 149,
    image: 'https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=774&auto=format&fit=crop',
    description: 'Secure your home with night vision, motion detection, and remote viewing.',
    features: [
      { icon: RiHomeWifiFill, label: 'Motion Alerts' },
      { icon: MdNightlight, label: 'Night Vision' },
      { icon: BsDisplay, label: '1080p HD' },
      { icon: IoNotificationsOutline, label: 'Two-Way Audio' }
    ],
    reviews: 64,
    rating: 4.5,
  },
  {
    id: 12,
    title: 'Stylish Digital Alarm Clock',
    price: 22,
    oldPrice: 39,
    image: 'https://images.unsplash.com/photo-1595001918824-83250c5f0599?q=80&w=870&auto=format&fit=crop',
    description: 'A sleek alarm clock with LED time display, temperature, and USB ports.',
    features: [
      { icon: FiClock, label: 'Dual Alarms' },
      { icon: BsFillPlugFill, label: 'Snooze Function' },
      { icon: FaUsb, label: 'USB Charging' },
      { icon: FaThermometerHalf, label: 'Temperature Display' }
    ],
    reviews: 39,
    rating: 3.9,
  },
  {
    id: 13,
    title: 'Noise Reduction Microphone',
    price: 79,
    oldPrice: 119,
    image: 'https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?q=80&w=870&auto=format&fit=crop',
    description: 'Capture clear audio with a condenser mic, ideal for podcasting or calls.',
    features: [
      { icon: FaMicrophoneAlt, label: 'Cardioid Pickup Pattern' },
      { icon: AiOutlineUsb, label: 'Plug & Play USB' },
      { icon: RiFolderSettingsFill, label: 'Built-in Pop Filter' },
      { icon: TbAdjustmentsHorizontal, label: 'Adjustable Boom Stand' }
    ],
    reviews: 101,
    rating: 4.3,
  },
  {
    id: 14,
    title: 'High-Speed USB Hub',
    price: 18,
    oldPrice: 29,
    image: 'https://images.unsplash.com/photo-1632017261554-7c6712cb0a09?q=80&w=870&auto=format&fit=crop',
    description: 'Expand your laptop connectivity with a sleek USB hub.',
    features: [
      { icon: TbUsb, label: 'USB 3.0 Speeds' },
      { icon: AiOutlineUsb, label: '4 USB Ports' },
      { icon: RiComputerLine, label: 'Mac & Windows Compatible' },
      { icon: FaPowerOff, label: 'Surge Protection' }
    ],
    reviews: 47,
    rating: 4.1,
  },
  {
    id: 15,
    title: 'Wireless Presentation Remote',
    price: 35,
    oldPrice: 59,
    image: 'https://images.unsplash.com/photo-1595756630832-848909a39597?q=80&w=870&auto=format&fit=crop',
    description: 'Deliver presentations with a red laser pointer and long-range wireless control.',
    features: [
      { icon: AiOutlineUsb, label: 'USB Receiver Included' },
      { icon: BsFillCameraVideoFill, label: 'Red Laser Pointer' },
      { icon: FaBluetoothB, label: '50ft Range' },
      { icon: FaBatteryFull, label: 'Long Battery Life' }
    ],
    reviews: 72,
    rating: 4.4,
  },
  {
    id: 16,
    title: 'Creative Desk Organizer',
    price: 27,
    oldPrice: 39,
    image: 'https://images.unsplash.com/photo-1455994972514-4624f7f224a7?q=80&w=774&auto=format&fit=crop',
    description: 'Declutter your workspace with a stylish organizer.',
    features: [
      { icon: AiOutlineAppstoreAdd, label: 'Multi-Compartment' },
      { icon: FaCogs, label: 'Eco-Friendly Bamboo' },
      { icon: BsDisplay, label: 'Book & Tablet Slot' },
      { icon: RiSettings3Fill, label: 'Modern Design' }
    ],
    reviews: 56,
    rating: 4.0,
  },
  {
    id: 17,
    title: 'Magnetic Cable Holder',
    price: 9,
    oldPrice: 15,
    image: 'https://images.unsplash.com/photo-1635179885954-c778885a1197?q=80&w=464&auto=format&fit=crop',
    description: 'Keep your desk cable-free with this magnetic organizer.',
    features: [
      { icon: FaMagnet, label: 'Strong Magnetic Hold' },
      { icon: AiOutlineUsb, label: 'Cable Clips Included' },
      { icon: MdOutlineCable, label: 'Anti-Slip Base' },
      { icon: FiGrid, label: 'Minimal Footprint' }
    ],
    reviews: 93,
    rating: 4.5,
  },
  {
    id: 18,
    title: 'Compact Power Bank 10000mAh',
    price: 32,
    oldPrice: 49,
    image: 'https://images.unsplash.com/photo-1554941071-34ae1db151e9?w=400&auto=format&fit=crop&q=60',
    description: 'Stay charged on-the-go with fast charging, USB-C, and LED indicators.',
    features: [
      { icon: FaBatteryFull, label: '10000mAh Capacity' },
      { icon: BsLightningFill, label: 'Fast Charging' },
      { icon: FaUsb, label: 'USB-C & USB-A Output' },
      { icon: FaClock, label: 'LED Battery Indicator' }
    ],
    reviews: 110,
    rating: 4.7,
  },
  {
    id: 19,
    title: 'Smart Thermostat Controller',
    price: 119,
    oldPrice: 179,
    image: 'https://images.unsplash.com/photo-1685660477695-73713eaf512a?q=80&w=756&auto=format&fit=crop',
    description: 'Automate your climate control with Wi-Fi and app scheduling.',
    features: [
      { icon: FaThermometerHalf, label: 'Auto Temperature Adjust' },
      { icon: FiSmartphone, label: 'Mobile App Control' },
      { icon: FaRobot, label: 'Voice Assistant Ready' },
      { icon: FaPowerOff, label: 'Energy Saving Mode' }
    ],
    reviews: 38,
    rating: 4.2,
  },
  {
    id: 20,
    title: 'USB-C Multiport Adapter',
    price: 44,
    oldPrice: 69,
    image: 'https://images.unsplash.com/photo-1668435074918-3dc9e1694b84?w=400&auto=format&fit=crop&q=60',
    description: 'Connect more with HDMI, USB 3.0, SD card, and charging via USB-C hub.',
    features: [
      { icon: FiGrid, label: '6-in-1 Port Access' },
      { icon: BsDisplay, label: '4K HDMI Output' },
      { icon: AiOutlineUsb, label: 'SD/TF Card Reader' },
      { icon: BsFillPlugFill, label: 'PD Charging Support' }
    ],
    reviews: 55,
    rating: 4.3,
  },
];


// Preview component (optional)
const ProductDataPreview = () => (
  <div>
    <h1>Total Products: {allProducts.length}</h1>
    {allProducts.map(product => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} width={200} />
        <ul>
          {product.features.map((f, index) => (
            <li key={index}>{f.label}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default ProductDataPreview;
