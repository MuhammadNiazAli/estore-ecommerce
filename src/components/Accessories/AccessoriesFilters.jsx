'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Dummy Product Data
const allProducts = [
  {
    id: 1,
    name: 'Luxury Leather Belt',
    category: 'Belts',
    brand: 'Gucci',
    color: 'Brown',
    material: 'Leather',
    price: 120,
    discount: 10,
    rating: 4.5,
    available: true,
    image:
      'https://images.unsplash.com/photo-1631160246898-58192f971b5f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Aviator Sunglasses',
    category: 'Sunglasses',
    brand: 'Ray-Ban',
    color: 'Black',
    material: 'Metal',
    price: 180,
    discount: 20,
    rating: 4.8,
    available: true,
    image:
      'https://images.unsplash.com/photo-1606196480588-43eaeb825006?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Gold Watch',
    category: 'Watches',
    brand: 'Rolex',
    color: 'Gold',
    material: 'Metal',
    price: 500,
    discount: 15,
    rating: 5,
    available: false,
    image:
      'https://media.istockphoto.com/id/182879100/photo/womens-crystal-accented-gold-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=rCfxD3fRY3IZ_BeIUDMF-1aCUP6QQDjm9otEeUX4_4I=',
  },
  {
    id: 4,
    name: 'Classic Leather Gloves',
    category: 'Gloves',
    brand: 'Prada',
    color: 'Black',
    material: 'Leather',
    price: 90,
    discount: 12,
    rating: 4.3,
    available: true,
    image: 'https://images.unsplash.com/photo-1617118602199-d3c05ae37ed8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Silk Neck Scarf',
    category: 'Scarves',
    brand: 'Hermès',
    color: 'Red',
    material: 'Silk',
    price: 250,
    discount: 18,
    rating: 4.9,
    available: true,
    image: 'https://media.istockphoto.com/id/182839301/photo/silk-scarf.webp?a=1&b=1&s=612x612&w=0&k=20&c=p3QojeTLTuoHD-_BvfXhNaEYrCZf36YTECYnPTtzpnI=',
  },
  {
    id: 6,
    name: 'Metal Frame Reading Glasses',
    category: 'Glasses',
    brand: 'Oakley',
    color: 'Silver',
    material: 'Metal',
    price: 150,
    discount: 15,
    rating: 4.4,
    available: true,
    image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Cotton Baseball Cap',
    category: 'Caps',
    brand: 'Nike',
    color: 'White',
    material: 'Cotton',
    price: 45,
    discount: 5,
    rating: 4.1,
    available: true,
    image: 'https://media.istockphoto.com/id/474219511/photo/red-baseball-cap.webp?a=1&b=1&s=612x612&w=0&k=20&c=qfVBNyOThpLxhPD6sesMu6VwXaT9h4pfvbFxl7wDlb4=',
  },
  {
    id: 8,
    name: 'Classic Leather Wallet',
    category: 'Wallets',
    brand: 'Fossil',
    color: 'Brown',
    material: 'Leather',
    price: 70,
    discount: 8,
    rating: 4.2,
    available: true,
    image: 'https://images.unsplash.com/photo-1624538000860-24716b9050f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Stainless Steel Bracelet',
    category: 'Bracelets',
    brand: 'Michael Kors',
    color: 'Silver',
    material: 'Metal',
    price: 130,
    discount: 10,
    rating: 4.6,
    available: true,
    image: 'https://images.unsplash.com/photo-1681091639096-a7b2eb1d4990?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'Knitted Wool Beanie',
    category: 'Caps',
    brand: 'The North Face',
    color: 'Grey',
    material: 'Wool',
    price: 35,
    discount: 7,
    rating: 4.0,
    available: true,
    image: 'https://images.unsplash.com/photo-1743959130672-395a27ec6949?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    name: 'Luxury Gold Ring',
    category: 'Rings',
    brand: 'Tiffany & Co.',
    color: 'Gold',
    material: 'Metal',
    price: 400,
    discount: 20,
    rating: 4.9,
    available: false,
    image: 'https://images.unsplash.com/photo-1727784635912-6f6e95d2f66a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    name: 'Elegant Pearl Necklace',
    category: 'Necklaces',
    brand: 'Cartier',
    color: 'White',
    material: 'Pearl',
    price: 700,
    discount: 18,
    rating: 5,
    available: true,
    image: 'https://media.istockphoto.com/id/113583445/photo/string-of-pearls-cut-out-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1QxppQ8sJftbK08VxvAPBVOdad7rWhefGa92ydyH1k=',
  },
  {
    id: 13,
    name: 'Silk Tie',
    category: 'Ties',
    brand: 'Burberry',
    color: 'Blue',
    material: 'Silk',
    price: 120,
    discount: 15,
    rating: 4.5,
    available: true,
    image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    name: 'Leather Keychain',
    category: 'Keychains',
    brand: 'Gucci',
    color: 'Black',
    material: 'Leather',
    price: 35,
    discount: 5,
    rating: 4.2,
    available: true,
    image: 'https://media.istockphoto.com/id/1311197729/photo/bunch-of-keys-with-leather-key-ring-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=fBqylIsf0UHkxIEaCdMtc8adel7e7DQ5UPiqpCKbFDo=',
  },
  {
    id: 15,
    name: 'Silver Cufflinks',
    category: 'Cufflinks',
    brand: 'Prada',
    color: 'Silver',
    material: 'Metal',
    price: 150,
    discount: 12,
    rating: 4.6,
    available: true,
    image: 'https://images.unsplash.com/photo-1628785517892-dbcd2f2719ed?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    name: 'Casual Canvas Backpack',
    category: 'Bags',
    brand: 'Nike',
    color: 'Green',
    material: 'Canvas',
    price: 130,
    discount: 10,
    rating: 4.3,
    available: true,
    image: 'https://images.unsplash.com/photo-1622560481979-f5b0174242a0?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    name: 'Leather Camera Strap',
    category: 'Straps',
    brand: 'Fujifilm',
    color: 'Brown',
    material: 'Leather',
    price: 85,
    discount: 8,
    rating: 4.4,
    available: true,
    image: 'https://images.unsplash.com/photo-1604527039309-8044c298ba46?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    name: 'Classic Fedora Hat',
    category: 'Hats',
    brand: 'Borsalino',
    color: 'Beige',
    material: 'Wool',
    price: 220,
    discount: 12,
    rating: 4.7,
    available: true,
    image: 'https://media.istockphoto.com/id/161861954/photo/black-felt-hat.webp?a=1&b=1&s=612x612&w=0&k=20&c=jzBLdTl9xA2E7LQTcsvPycvAChGjQUr-uzupA3HUic0=',
  },
  {
    id: 19,
    name: 'Sports Wristband',
    category: 'Wristbands',
    brand: 'Adidas',
    color: 'Red',
    material: 'Cotton',
    price: 25,
    discount: 5,
    rating: 4.0,
    available: true,
    image: 'https://media.istockphoto.com/id/525217710/photo/blank-white-wristband-mockup-on-hand-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=xEQsJF9qYFXAPgWFIqprjp-Ovpy_bH-E_5tJatjgx-4=',
  },
  {
    id: 20,
    name: 'Leather Passport Holder',
    category: 'Wallets',
    brand: 'Montblanc',
    color: 'Black',
    material: 'Leather',
    price: 95,
    discount: 10,
    rating: 4.5,
    available: true,
    image: 'https://images.unsplash.com/photo-1553699357-b327e0878f79?q=80&w=1078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 21,
    name: 'Silver Hoop Earrings',
    category: 'Earrings',
    brand: 'Swarovski',
    color: 'Silver',
    material: 'Metal',
    price: 120,
    discount: 15,
    rating: 4.7,
    available: true,
    image: 'https://images.unsplash.com/photo-1713004539634-a6694a83f3d9?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 22,
    name: 'Leather Briefcase',
    category: 'Bags',
    brand: 'Tumi',
    color: 'Brown',
    material: 'Leather',
    price: 450,
    discount: 20,
    rating: 4.8,
    available: false,
    image: 'https://media.istockphoto.com/id/182817886/photo/briefcase.webp?a=1&b=1&s=612x612&w=0&k=20&c=BWunEBitCAE15kLpGjuIC69s7cJPAg0-j9jdgcsbfyA=',
  },
  {
    id: 23,
    name: 'Wool Shawl',
    category: 'Scarves',
    brand: 'Burberry',
    color: 'Grey',
    material: 'Wool',
    price: 300,
    discount: 17,
    rating: 4.6,
    available: true,
    image: 'https://media.istockphoto.com/id/637237414/photo/wool-gray-white-striped-scarf-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=i3ve8_sWwZUHBZi83k80V5tMF_FGnEj8oo4PMxthHLE=',
  },
  {
    id: 24,
    name: 'Designer Sunglasses',
    category: 'Sunglasses',
    brand: 'Prada',
    color: 'Brown',
    material: 'Plastic',
    price: 230,
    discount: 15,
    rating: 4.5,
    available: true,
    image: 'https://images.unsplash.com/photo-1722842529114-f2d851f91597?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 25,
    name: 'Leather Dog Collar',
    category: 'Pet Accessories',
    brand: 'Coach',
    color: 'Black',
    material: 'Leather',
    price: 55,
    discount: 5,
    rating: 4.3,
    available: true,
    image: 'https://media.istockphoto.com/id/184402383/photo/a-colored-dog-collar-with-blank-id-tag.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Bl6zX4u-9GXgQFcNqFjz0UHQx70ZLy6GO5562FVlDc=',
  },
  {
    id: 26,
    name: 'Sporty Digital Watch',
    category: 'Watches',
    brand: 'Casio',
    color: 'Black',
    material: 'Plastic',
    price: 140,
    discount: 10,
    rating: 4.4,
    available: true,
    image: 'https://images.unsplash.com/photo-1600683159910-9230bb2ecce3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 27,
    name: 'Casual Canvas Tote Bag',
    category: 'Bags',
    brand: 'Herschel',
    color: 'Beige',
    material: 'Canvas',
    price: 75,
    discount: 8,
    rating: 4.3,
    available: true,
    image: 'https://media.istockphoto.com/id/2195956444/photo/isolated-mens-bag.webp?a=1&b=1&s=612x612&w=0&k=20&c=JIkvTLr9J0R76Pa9Udr8WesR3FLa8KOjCTQdZOIbe4I=',
  },
  {
    id: 28,
    name: 'Leather Belt with Buckle',
    category: 'Belts',
    brand: 'Calvin Klein',
    color: 'Black',
    material: 'Leather',
    price: 85,
    discount: 10,
    rating: 4.2,
    available: true,
    image: 'https://media.istockphoto.com/id/523818848/photo/brown-leather-belt.webp?a=1&b=1&s=612x612&w=0&k=20&c=ivBqhQ1_VC2Hcap-RL6QGaeG463drrh7uwa5KWJHK0M=',
  },
  {
    id: 29,
    name: 'Gold Plated Necklace',
    category: 'Necklaces',
    brand: 'Chanel',
    color: 'Gold',
    material: 'Metal',
    price: 850,
    discount: 25,
    rating: 5,
    available: false,
    image: 'https://media.istockphoto.com/id/183341838/photo/gold-chain.webp?a=1&b=1&s=612x612&w=0&k=20&c=VqSzzecCX9MppLeWEnhw3T6lZbaE9HlZFQgdF8PztN8=',
  },
  {
    id: 30,
    name: 'Knitted Wool Gloves',
    category: 'Gloves',
    brand: 'North Face',
    color: 'Black',
    material: 'Wool',
    price: 40,
    discount: 6,
    rating: 4.1,
    available: true,
    image: 'https://media.istockphoto.com/id/1131405622/photo/knitted-winter-glove-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=nD8LDWSP_ncRQPV2n36Lev8-sfqB5QrNRaJSsUBWOG8=',
  },
  {
    id: 31,
    name: 'Sport Sunglasses',
    category: 'Sunglasses',
    brand: 'Oakley',
    color: 'Black',
    material: 'Plastic',
    price: 160,
    discount: 15,
    rating: 4.5,
    available: true,
    image: 'https://media.istockphoto.com/id/173552297/photo/sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=0vbX3_ssE7AnOgbc5RmnmJdvCOlhWXhuKyt5Rvtz4bg=',
  },
  {
    id: 32,
    name: 'Leather Wallet with RFID',
    category: 'Wallets',
    brand: 'Tommy Hilfiger',
    color: 'Brown',
    material: 'Leather',
    price: 80,
    discount: 10,
    rating: 4.3,
    available: true,
    image: 'https://media.istockphoto.com/id/1336157118/photo/smart-minimalistic-wallet-card-ejector-3-close-up-mans-hand-holding-black-leather-wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=kRxfS53yPGJ8m-0MD5v5zagxnmMj3rFdfSVG0mOoQpo=',
  },
  {
    id: 33,
    name: 'Vintage Leather Satchel',
    category: 'Bags',
    brand: 'Fossil',
    color: 'Brown',
    material: 'Leather',
    price: 220,
    discount: 15,
    rating: 4.6,
    available: true,
    image: 'https://media.istockphoto.com/id/135695565/photo/old-leather-bag.webp?a=1&b=1&s=612x612&w=0&k=20&c=0NfEjJgFI1H_jSqCjtMvZSiARZ0IejjBPGoIkix-sLw=',
  },
  {
    id: 34,
    name: 'Silk Pocket Square',
    category: 'Scarves',
    brand: 'Hermès',
    color: 'Blue',
    material: 'Silk',
    price: 65,
    discount: 7,
    rating: 4.4,
    available: true,
    image: 'https://media.istockphoto.com/id/873283510/photo/hot-pink-suit-hanky.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Ze0ZL5dRXlqlhYtNx3JzZDlecSD5I6VanYdotEXfGg=',
  },
  {
    id: 35,
    name: 'Leather Phone Case',
    category: 'Phone Accessories',
    brand: 'Apple',
    color: 'Black',
    material: 'Leather',
    price: 120,
    discount: 10,
    rating: 4.5,
    available: true,
    image: 'https://media.istockphoto.com/id/1306034212/photo/leather-flip-cover-of-smartphone-isolated-on-white-background-with-clipping-path-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=PxOv6aAZmVH61lHPBa9Y7YjyizV54qM-IRn5NhA1akg=',
  },
  {
    id: 36,
    name: 'Gold Charm Bracelet',
    category: 'Bracelets',
    brand: 'Pandora',
    color: 'Gold',
    material: 'Metal',
    price: 350,
    discount: 18,
    rating: 4.8,
    available: true,
    image: 'https://media.istockphoto.com/id/92037959/photo/gold-charm-bracelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=9oiwkAxUCOYFsmtjFbFI8SI82JmWXGXdb_gI9PKF4tE=',
  },
  {
    id: 37,
    name: 'Cotton Baseball Cap',
    category: 'Caps',
    brand: 'Adidas',
    color: 'Blue',
    material: 'Cotton',
    price: 30,
    discount: 5,
    rating: 4.1,
    available: true,
    image: 'https://media.istockphoto.com/id/526131500/photo/hat-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=nli8F_166tKReUxEKnMSEcQSVXZU5w2jDqq3VVkGPmI=',
  },
  {
    id: 38,
    name: 'Leather Camera Bag',
    category: 'Bags',
    brand: 'Canon',
    color: 'Brown',
    material: 'Leather',
    price: 180,
    discount: 15,
    rating: 4.5,
    available: true,
    image: 'https://media.istockphoto.com/id/531009298/photo/35mm-photograpy-equipment.webp?a=1&b=1&s=612x612&w=0&k=20&c=pXFWDHWeMMtBoVtHfDTQiz3s0rrsn8oULdp8G7BMWJA=',
  },
  {
    id: 39,
    name: 'Silver Pendant Necklace',
    category: 'Necklaces',
    brand: 'Swarovski',
    color: 'Silver',
    material: 'Metal',
    price: 220,
    discount: 12,
    rating: 4.7,
    available: true,
    image: 'https://images.unsplash.com/photo-1598009632415-1b42a2c686b6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 40,
    name: 'Leather Sports Watch',
    category: 'Watches',
    brand: 'Fossil',
    color: 'Black',
    material: 'Leather',
    price: 210,
    discount: 14,
    rating: 4.6,
    available: true,
    image: 'https://media.istockphoto.com/id/2222646352/photo/wristwatch.webp?a=1&b=1&s=612x612&w=0&k=20&c=a6xKe8mNNRV65Y7G2udZMNutOirRv8Dy83ntHDB0I4o=',
  },
  {
    id: 41,
    name: 'Classic Fedora Hat',
    category: 'Hats',
    brand: 'Stetson',
    color: 'Black',
    material: 'Wool',
    price: 230,
    discount: 16,
    rating: 4.5,
    available: true,
    image: 'https://images.unsplash.com/photo-1752466927753-9ffee11e9b41?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 42,
    name: 'Leather Briefcase',
    category: 'Bags',
    brand: 'Coach',
    color: 'Brown',
    material: 'Leather',
    price: 400,
    discount: 20,
    rating: 4.7,
    available: true,
    image: 'https://images.unsplash.com/photo-1603219527847-24c87f552a77?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 43,
    name: 'Knitted Wool Scarf',
    category: 'Scarves',
    brand: 'Burberry',
    color: 'Beige',
    material: 'Wool',
    price: 120,
    discount: 8,
    rating: 4.4,
    available: true,
    image: 'https://images.unsplash.com/photo-1737061556837-02be1a83e665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 44,
    name: 'Gold Plated Earrings',
    category: 'Earrings',
    brand: 'Tiffany & Co.',
    color: 'Gold',
    material: 'Metal',
    price: 380,
    discount: 15,
    rating: 4.8,
    available: true,
    image: 'https://media.istockphoto.com/id/1415774738/photo/golden-earrings-with-gemstone-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=pRZgmO1645Z-rwtW1HfqPKF7TWLYqrqYNfndng6tl9M=',
  },
  {
    id: 45,
    name: 'Leather Gloves',
    category: 'Gloves',
    brand: 'Prada',
    color: 'Brown',
    material: 'Leather',
    price: 95,
    discount: 10,
    rating: 4.3,
    available: true,
    image: 'https://media.istockphoto.com/id/2154156155/photo/old-worn-leather-work-gloves-workgloves.webp?a=1&b=1&s=612x612&w=0&k=20&c=_EQms5B16qOtPvtGQCj9i7QZCgRU39TarAACFCeetHg=',
  },
  {
    id: 46,
    name: 'Silk Hairband',
    category: 'Hair Accessories',
    brand: 'Chanel',
    color: 'Pink',
    material: 'Silk',
    price: 45,
    discount: 5,
    rating: 4.2,
    available: true,
    image: 'https://images.unsplash.com/photo-1677319378211-06f6a50b49bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 47,
    name: 'Canvas Duffel Bag',
    category: 'Bags',
    brand: 'Herschel',
    color: 'Navy',
    material: 'Canvas',
    price: 150,
    discount: 10,
    rating: 4.5,
    available: true,
    image: 'https://media.istockphoto.com/id/121678183/photo/red-duffle.webp?a=1&b=1&s=612x612&w=0&k=20&c=LBWzbXEtbX5j6Htasn5ngpQdCDsqANQupKxiLIqEe8Q=',
  },
  {
    id: 48,
    name: 'Leather Watch Strap',
    category: 'Straps',
    brand: 'Rolex',
    color: 'Black',
    material: 'Leather',
    price: 200,
    discount: 15,
    rating: 4.8,
    available: true,
    image: 'https://media.istockphoto.com/id/165853320/photo/wristwatch.webp?a=1&b=1&s=612x612&w=0&k=20&c=-HQG-DDEFE84b3WVsayJ9u2AHpBS7dBQVVwsQWdjsFc=',
  },
  {
    id: 49,
    name: 'Sport Running Cap',
    category: 'Caps',
    brand: 'Under Armour',
    color: 'Red',
    material: 'Polyester',
    price: 40,
    discount: 7,
    rating: 4.3,
    available: true,
    image: 'https://images.unsplash.com/photo-1627268964245-c2fa8e72fe56?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 50,
    name: 'Vintage Leather Belt',
    category: 'Belts',
    brand: 'Calvin Klein',
    color: 'Brown',
    material: 'Leather',
    price: 110,
    discount: 12,
    rating: 4.4,
    available: true,
    image: 'https://media.istockphoto.com/id/2193570022/photo/mens-accessories.webp?a=1&b=1&s=612x612&w=0&k=20&c=LnQMiEWsd5AdCL2CYZVL2aZ7CkSnN9TkAfgqBbYpku8=',
  },
  {
    id: 51,
    name: 'Diamond Stud Earrings',
    category: 'Earrings',
    brand: 'Tiffany & Co.',
    color: 'Silver',
    material: 'Diamond',
    price: 1500,
    discount: 30,
    rating: 5,
    available: false,
    image: 'https://media.istockphoto.com/id/1245974839/photo/close-up-of-earrings-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=GAgP2GDdYIgRe7VQaqD9BbsIiEVQKMSpOjNqfB2Xv4c=',
  },
  {
    id: 52,
    name: 'Leather Messenger Bag',
    category: 'Bags',
    brand: 'Coach',
    color: 'Tan',
    material: 'Leather',
    price: 350,
    discount: 18,
    rating: 4.7,
    available: true,
    image: 'https://media.istockphoto.com/id/1191044042/photo/men-fashion-hand-bag-or-sling-bag-with-nubuck-brown-leather-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=uF_B16i3Ys9FaKHBmsyWxtxO2dMkFftjFV7I9M0Oh2o=',
  },
  {
    id: 53,
    name: 'Modern Leather Backpack',
    category: 'Bags',
    brand: 'Tumi',
    color: 'Black',
    material: 'Leather',
    price: 420,
    discount: 20,
    rating: 4.6,
    available: true,
    image: 'https://media.istockphoto.com/id/1767285252/photo/black-leather-casual-backpack.webp?a=1&b=1&s=612x612&w=0&k=20&c=EX3bRI2ZFS4wc0SfdrewmlI-b5yvyxB2_juu_J1q0xA=',
  },
  {
    id: 54,
    name: 'Classic Aviator Sunglasses',
    category: 'Sunglasses',
    brand: 'Ray-Ban',
    color: 'Gold',
    material: 'Metal',
    price: 170,
    discount: 15,
    rating: 4.7,
    available: true,
    image: 'https://media.istockphoto.com/id/157404280/photo/isolated-shot-of-sunglasses-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DMMefZkUhK7uk4ADcW_97U4g3mxoOb0crCa_AadFRhQ=',
  },
  {
    id: 55,
    name: 'Elegant Pearl Necklace',
    category: 'Necklaces',
    brand: 'Mikimoto',
    color: 'White',
    material: 'Pearl',
    price: 1200,
    discount: 25,
    rating: 4.9,
    available: false,
    image: 'https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 56,
    name: 'Sports Wristband',
    category: 'Wristbands',
    brand: 'Nike',
    color: 'Red',
    material: 'Cotton',
    price: 25,
    discount: 5,
    rating: 4.3,
    available: true,
    image: 'https://images.unsplash.com/photo-1598733591130-46d133f8ae9e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const categories = ['Watches', 'Belts', 'Sunglasses', 'Scarves', 'Bags', 'Caps'];
const brands = ['Gucci', 'Ray-Ban', 'Rolex', 'Prada', 'Nike'];
const colors = ['Black', 'Brown', 'Gold', 'White'];
const materials = ['Leather', 'Metal', 'Silk', 'Cotton'];

export default function AccessoriesFilters() {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    brand: '',
    color: '',
    material: '',
    price: 1000,
    discount: 0,
    rating: 0,
    available: false,
    sort: '',
  });
  const [visibleCount, setVisibleCount] = useState(10);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      category: '',
      brand: '',
      color: '',
      material: '',
      price: 1000,
      discount: 0,
      rating: 0,
      available: false,
      sort: '',
    });
  };

  const filteredProducts = allProducts
    .filter((item) => item.name.toLowerCase().includes(filters.search.toLowerCase()))
    .filter((item) => (filters.category ? item.category === filters.category : true))
    .filter((item) => (filters.brand ? item.brand === filters.brand : true))
    .filter((item) => (filters.color ? item.color === filters.color : true))
    .filter((item) => (filters.material ? item.material === filters.material : true))
    .filter((item) => item.price <= filters.price)
    .filter((item) => item.discount >= filters.discount)
    .filter((item) => item.rating >= filters.rating)
    .filter((item) => (filters.available ? item.available : true))
    .sort((a, b) => {
      if (filters.sort === 'price-asc') return a.price - b.price;
      if (filters.sort === 'price-desc') return b.price - a.price;
      if (filters.sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const sidebarContent = (
    <div className="p-4 sm:p-6 space-y-5 text-gray-900 text-sm sm:text-base">
      <h2 className="text-xl sm:text-2xl font-bold text-amber-600">Filters</h2>

      <input
        type="text"
        placeholder="Search Accessories..."
        value={filters.search}
        onChange={(e) => handleFilterChange('search', e.target.value)}
        className="w-full p-2 sm:p-3 rounded-lg text-gray-800 bg-white text-sm"
      />

      {[{ name: 'category', options: categories, label: 'All Categories' },
        { name: 'brand', options: brands, label: 'All Brands' },
        { name: 'color', options: colors, label: 'All Colors' },
        { name: 'material', options: materials, label: 'All Materials' },
      ].map(({ name, options, label }) => (
        <select
          key={name}
          className="w-full p-2 rounded-lg text-gray-800 bg-white text-sm"
          value={filters[name]}
          onChange={(e) => handleFilterChange(name, e.target.value)}
        >
          <option value="">{label}</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ))}

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-1">Price: <span className="text-amber-600">${filters.price}</span></h3>
        <input
          type="range"
          min="50"
          max="1000"
          value={filters.price}
          onChange={(e) => handleFilterChange('price', e.target.value)}
          className="w-full"
        />
      </div>

      {/* Discount */}
      <div>
        <h3 className="font-semibold mb-1">Discount: <span className="text-amber-600">{filters.discount}%</span></h3>
        <input
          type="range"
          min="0"
          max="50"
          value={filters.discount}
          onChange={(e) => handleFilterChange('discount', e.target.value)}
          className="w-full"
        />
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-1">Rating: <span className="text-amber-600">{filters.rating}★</span></h3>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={(e) => handleFilterChange('rating', e.target.value)}
          className="w-full"
        />
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.available}
          onChange={(e) => handleFilterChange('available', e.target.checked)}
        />
        <span>In Stock Only</span>
      </div>

      {/* Sort */}
      <select
        className="w-full p-2 rounded-lg text-gray-800 bg-white text-sm"
        value={filters.sort}
        onChange={(e) => handleFilterChange('sort', e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price Low to High</option>
        <option value="price-desc">Price High to Low</option>
        <option value="rating">Rating</option>
      </select>

      {/* Reset */}
      <button
        onClick={resetFilters}
        className="w-full bg-amber-600 text-gray-900 font-bold py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <section className="w-full bg-white text-gray-900 relative">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-6 px-4 py-10 relative">
        
        {/* Sticky toggle button only inside section */}
        {!mobileOpen && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="bg-amber-600 text-gray-900 w-10 h-10 flex items-center justify-center rounded-full shadow-md ml-[-35px]"
            >
              ➤
            </button>
          </div>
        )}

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-xl lg:hidden overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-amber-600">Filters</h2>
                <button onClick={() => setMobileOpen(false)} className="text-gray-900 text-3xl">&times;</button>
              </div>
              {sidebarContent}
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-1/3 bg-white rounded-xl shadow-lg overflow-y-auto custom-scrollbar sticky top-6" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
          {sidebarContent}
        </aside>

        {/* Products Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col max-w-sm w-full"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 object-cover rounded-t-xl" />
              <div className="p-3 sm:p-4 text-sm sm:text-base">
                <h4 className="text-lg font-semibold text-amber-600">{product.name}</h4>
                <p className="text-gray-900 mt-1">${product.price}</p>
                <p className="text-gray-600">{product.brand} | {product.rating}★</p>
                <div className="flex gap-2 mt-3">
                  <button className="bg-amber-600 text-gray-900 px-3 py-2 rounded-lg font-semibold hover:bg-amber-700 text-sm">
                    Add to Cart
                  </button>
                  <button className="border border-amber-600 text-amber-600 px-3 py-2 rounded-lg font-semibold hover:bg-amber-700 hover:text-gray-900 text-sm">
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {visibleCount < filteredProducts.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="col-span-full bg-amber-600 text-gray-900 font-bold py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Show More
            </button>
          )}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #b45309 #ffffff;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #ffffff;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #b45309;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
