import React, { useState, useEffect, useRef } from "react";

const AccessoriesTrending = () => {
 const trendingAccessories = [
  {
    id: 1,
    name: "Luxury Gold Chain",
    price: 149.99,
    img: "https://images.unsplash.com/photo-1671513577010-4bd2f5c29ded?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant 18k gold plated chain, perfect for formal wear.",
  },
    {
    id: 101,
    name: "Luxury Gold Chain",
    price: 159.99,
    img: "https://images.unsplash.com/photo-1705872907488-1a7a35fdc2c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant 18k gold plated chain, perfect for formal wear.",
  },
   {
    id: 102,
    name: "Luxury Gold Chain",
    price: 139.99,
    img: "https://plus.unsplash.com/premium_photo-1708958117373-5d354f07a61a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant 18k gold plated chain, perfect for formal wear.",
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    price: 299.99,
    img: "https://images.unsplash.com/photo-1665159882686-3d4fc7b036a4?q=80&w=841&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sparkling diamond studs for any occasion.",
  },
  {
    id: 201,
    name: "Diamond Stud Earrings",
    price: 259.99,
    img: "https://plus.unsplash.com/premium_photo-1739548332624-399962d3a265?q=80&w=1307&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sparkling diamond studs for any occasion.",
  },
  {
    id: 202,
    name: "Diamond Stud Earrings",
    price: 289.99,
    img: "https://images.unsplash.com/photo-1720944518547-93ae4d5f90b7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sparkling diamond studs for any occasion.",
  },
  {
    id: 3,
    name: "Leather Wristband",
    price: 49.99,
    img: "https://plus.unsplash.com/premium_photo-1726769202190-ad2a3f2f360b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Handcrafted genuine leather wristband, rugged style.",
  },
  {
    id: 301,
    name: "Leather Wristband",
    price: 39.99,
    img: "https://media.istockphoto.com/id/1201365461/photo/leather-wristband-isolated-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=QZekZ-lWnUiraLOuGxlomfV3tdx1dN7CFSo9xWFYKfo=",
    description: "Handcrafted genuine leather wristband, rugged style.",
  },
  {
    id: 302,
    name: "Leather Wristband",
    price: 69.99,
    img: "https://images.unsplash.com/photo-1631160246898-58192f971b5f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Handcrafted genuine leather wristband, rugged style.",
  },
  {
    id: 4,
    name: "Classic Watch",
    price: 349.99,
    img: "https://images.unsplash.com/photo-1629551233896-f119552a5011?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Timeless classic watch with leather strap.",
  },
   {
    id: 401,
    name: "Classic Watch",
    price: 389.99,
    img: "https://images.unsplash.com/photo-1701696381251-f3a808be9a2d?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Timeless classic watch with leather strap.",
  },
   {
    id: 402,
    name: "Classic Watch",
    price: 499.99,
    img: "https://images.unsplash.com/photo-1670082379834-be7116cf7d70?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Timeless classic watch with leather strap.",
  },
  {
    id: 5,
    name: "Silver Ring",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1656010280162-772358d9f4ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sleek silver ring with minimalist design.",
  },
    {
    id: 501,
    name: "Silver Ring",
    price: 99.99,
    img: "https://media.istockphoto.com/id/172753313/photo/wedding-rings.webp?a=1&b=1&s=612x612&w=0&k=20&c=hlR8WuWZchHFobizljD2TVle_0O6RCVFY5lxcGDm5yo=",
    description: "Sleek silver ring with minimalist design.",
  },
    {
    id: 502,
    name: "Silver Ring",
    price: 119.99,
    img: "https://media.istockphoto.com/id/2188052447/photo/silver-smart-ring-showing-electronic-circuit-3d-illustration-of-the-concept-of-futuristic.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZMVfX7IULVUMM5GiblVSlnEbni-N1GoKx-fFCaTouGI=",
    description: "Sleek silver ring with minimalist design.",
  },
  {
    id: 6,
    name: "Gold Bracelet",
    price: 199.99,
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern gold bracelet for elegant style.",
  },
    {
    id: 601,
    name: "Gold Bracelet",
    price: 169.99,
    img: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern gold bracelet for elegant style.",
  },
    {
    id: 602,
    name: "Gold Bracelet",
    price: 299.99,
    img: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern gold bracelet for elegant style.",
  },
  {
    id: 7,
    name: "Pearl Necklace",
    price: 259.99,
    img: "https://images.unsplash.com/photo-1474585628895-4579822e21a8?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Freshwater pearl necklace, pure elegance.",
  },
  {
    id: 701,
    name: "Pearl Necklace",
    price: 159.99,
    img: "https://images.unsplash.com/photo-1708028868552-3800ce928ce3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Freshwater pearl necklace, pure elegance.",
  },
  {
    id: 702,
    name: "Pearl Necklace",
    price: 359.99,
    img: "https://images.unsplash.com/photo-1718312267033-a334b0a2720f?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Freshwater pearl necklace, pure elegance.",
  },
  {
    id: 8,
    name: "Black Sunglasses",
    price: 79.99,
    img: "https://images.unsplash.com/photo-1563146434-7d9ab85789d8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic aviator sunglasses with UV protection.",
  },
   {
    id: 801,
    name: "Black Sunglasses",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1653038282408-13b605af0ef7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic aviator sunglasses with UV protection.",
  },
   {
    id: 802,
    name: "Black Sunglasses",
    price: 99.99,
    img: "https://images.unsplash.com/photo-1511499602539-b3f6b9b79014?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic aviator sunglasses with UV protection.",
  },
  {
    id: 9,
    name: "Leather Wallet",
    price: 59.99,
    img: "https://media.istockphoto.com/id/180756294/photo/wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=TLaEknZrTHzhQpX1stxfNIn6EpMpdOkkXX6JfxOpuXI=",
    description: "Premium leather wallet with multiple compartments.",
  },
    {
    id: 901,
    name: "Leather Wallet",
    price: 159.99,
    img: "https://media.istockphoto.com/id/182880925/photo/plain-brown-leather-wallet-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EgtIEKMnpvxPl702JcEq27IPARqZLavu9AFMHgL2JS0=",
    description: "Premium leather wallet with multiple compartments.",
  },
    {
    id: 902,
    name: "Leather Wallet",
    price: 109.99,
    img: "https://images.unsplash.com/photo-1612023395494-1c4050b68647?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium leather wallet with multiple compartments.",
  },
  {
    id: 10,
    name: "Charm Bracelet",
    price: 129.99,
    img: "https://media.istockphoto.com/id/496989491/photo/adult-female-wearing-a-gold-charm-bracelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=UikNRFxV4q__bhyxVUY-V4uHySgmj8lGtmFs69aSP44=",
    description: "Stylish bracelet with customizable charms.",
  },
    {
    id: 1001,
    name: "Charm Bracelet",
    price: 229.99,
    img: "https://images.unsplash.com/photo-1681091637777-7b5c49bf9691?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish bracelet with customizable charms.",
  },
    {
    id: 1002,
    name: "Charm Bracelet",
    price: 329.99,
    img: "https://images.unsplash.com/photo-1626122738142-bbd66f671eca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish bracelet with customizable charms.",
  },
  {
    id: 11,
    name: "Smart Fitness Band",
    price: 99.99,
    img: "https://media.istockphoto.com/id/2219752563/photo/black-wristwatch-isolated-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOP15FQHWZe2-p6m74VY9IhxZV_h4GL78uKUncvKsUE=",
    description: "Track your fitness goals with this smart band.",
  },
  {
    id: 12,
    name: "Rose Gold Watch",
    price: 379.99,
    img: "https://media.istockphoto.com/id/1011263150/photo/rose-gold-clock-on-pastel-pink-and-grey-background-minimal-idea-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=kornVa2OqT5bPO14qY0pwP5kOis769ZKnf9At1FtcEg=",
    description: "Chic rose gold watch for a luxurious look.",
  },
  {
    id: 13,
    name: "Beaded Bracelet",
    price: 34.99,
    img: "https://media.istockphoto.com/id/1995483143/photo/child-wears-bracelets-on-his-hands-kids-handmade-beaded-jewelry-on-orange-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=SvqfbEYono9jmQRSQa6ByHnhkmfRWBQZ0Q7bDwJnniY=",
    description: "Handmade beaded bracelet for casual wear.",
  },
  {
    id: 14,
    name: "Studded Leather Belt",
    price: 69.99,
    img: "https://media.istockphoto.com/id/1078733750/photo/row-pyramid-belt.webp?a=1&b=1&s=612x612&w=0&k=20&c=rjS8tCCiF4qWH6HCYpIX2EKnS8iZgxAoYHtpWJzWBYU=",
    description: "Durable leather belt with metallic studs.",
  },
  {
    id: 15,
    name: "Gold Hoop Earrings",
    price: 119.99,
    img: "https://media.istockphoto.com/id/1372050719/photo/large-gold-hoop-earrings-with-rainbow-colored-gemstones-in-a-bright-setting-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=DhLIaJfHGGJubRD1jbJUNEO5b7dv_FaMM47BF5UYYLA=",
    description: "Trendy gold hoops for everyday elegance.",
  },
  {
    id: 16,
    name: "Minimalist Pendant",
    price: 59.99,
    img: "https://media.istockphoto.com/id/2197584401/photo/modern-living-room-with-wooden-stairs-and-gray-furniture.webp?a=1&b=1&s=612x612&w=0&k=20&c=ltD34ojE2CgS7tORA3GP7_cj9Xi26ea02z4wqAESo98=",
    description: "Simple pendant necklace with modern design.",
  },
  {
    id: 17,
    name: "Designer Brooch",
    price: 89.99,
    img: "https://media.istockphoto.com/id/2214553315/photo/fashion-designer-at-her-showroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=ezA2R9UXf_uHMe8Um_NgB0x5mUCP21_35tKUrwYcIQ0=",
    description: "Vintage-inspired brooch for special occasions.",
  },
  {
    id: 18,
    name: "Ankle Chain",
    price: 39.99,
    img: "https://media.istockphoto.com/id/2169672039/photo/bride-putting-on-wedding-high-heel-shoes-with-geometric-pattern-floor.webp?a=1&b=1&s=612x612&w=0&k=20&c=ppWuux4Fxpou7wrj05LyNLZcTGSY_jLfkXDHzkXM6OE=",
    description: "Delicate gold-plated anklet chain.",
  },
  {
    id: 19,
    name: "Luxury Tie Clip",
    price: 29.99,
    img: "https://media.istockphoto.com/id/2223697033/photo/golden-pins.webp?a=1&b=1&s=612x612&w=0&k=20&c=T_NfLvV_FYdeGSmFiPz10Knn7_2X1t-XtJyIsBfaXXI=",
    description: "Premium tie clip for a sharp formal look.",
  },
  {
    id: 20,
    name: "Cufflinks Set",
    price: 74.99,
    img: "https://media.istockphoto.com/id/2158355430/photo/cufflinks.webp?a=1&b=1&s=612x612&w=0&k=20&c=BsyhFRB0py0PS-P94TwR9fthAIHx9UufiyhBegNFHcg=",
    description: "Stylish cufflinks for professional attire.",
  },
  {
    id: 21,
    name: "Vintage Sunglasses",
    price: 89.99,
    img: "https://media.istockphoto.com/id/1152865943/photo/cat-eye-sunglasses-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=UnxPZNKnIfXTcaJPfI4D9NMyBr57gmJWQ8KpmeAa8lU=",
    description: "Retro-inspired sunglasses with a modern twist.",
  },
  {
    id: 22,
    name: "Gold Anklet",
    price: 49.99,
    img: "https://media.istockphoto.com/id/147087887/photo/my-heart.webp?a=1&b=1&s=612x612&w=0&k=20&c=xJIL-WHk0dnjudoZ98GzOVhFxgBytJTs__mB2VX2_us=",
    description: "Delicate anklet plated in 18k gold.",
  },
  {
    id: 23,
    name: "Silk Scarf",
    price: 79.99,
    img: "https://media.istockphoto.com/id/1083868870/photo/silk-scarf.webp?a=1&b=1&s=612x612&w=0&k=20&c=uPxW516Wgpk64bbiTJIuv1eGsiilx9PjOWQO-POUfrw=",
    description: "Luxurious silk scarf with floral print.",
  },
  {
    id: 24,
    name: "Gold Nose Pin",
    price: 29.99,
    img: "https://media.istockphoto.com/id/1258751130/photo/glamorous-antique-gold-ring-on-white-background-luxury-female-jewelry-indian-traditional.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qas3WjJbYVaS9KeWNHvqbf_9fS4tDYgTwYfmAWdGtUY=",
    description: "Minimal gold nose pin for an elegant look.",
  },
  {
    id: 25,
    name: "Statement Earrings",
    price: 99.99,
    img: "https://media.istockphoto.com/id/2209458029/photo/elegant-gold-droplet-earrings-resting-on-marble-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=GpUc5kVxqeJFeWr4kBhJrNM1w2vbOqvoXNM9G6rriw4=",
    description: "Bold statement earrings for parties.",
  },
  {
    id: 26,
    name: "Chain Belt",
    price: 69.99,
    img: "https://media.istockphoto.com/id/1281576416/photo/stylish-woman-in-black-clothes-on-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=9HuxEF2NjChuB9JnYWG-0ggjUSeHGUVegfocfBuQ6eY=",
    description: "Trendy chain belt for jeans and dresses.",
  },
  {
    id: 27,
    name: "Gemstone Ring",
    price: 149.99,
    img: "https://media.istockphoto.com/id/2161354881/photo/beautiful-yellow-gold-ring-with-diamonds-and-emerald-on-a-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HMuVgcGVx9m5x1oOFPrcdLrLy1ygzGYF-F-eiRDnIYM=",
    description: "Handcrafted ring with a natural gemstone.",
  },
  {
    id: 28,
    name: "Leather Keychain",
    price: 24.99,
    img: "https://media.istockphoto.com/id/2175895455/photo/keys-with-leather-keychain-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=UxXZezXmtRPl_lnlCIDb4PbFqKjIWycEPFBcKBA3jDw=",
    description: "Durable leather keychain with metal clip.",
  },
  {
    id: 29,
    name: "Crystal Hair Clip",
    price: 19.99,
    img: "https://media.istockphoto.com/id/2125119752/photo/silver-princess-crown.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBlvsw9B-Tm8Lw5FYAJOhbz_RKDm2hOxkw_FS01oBHs=",
    description: "Elegant crystal hair clip for a chic look.",
  },
  {
    id: 30,
    name: "Chain Necklace",
    price: 139.99,
    img: "https://images.unsplash.com/photo-1598009632415-1b42a2c686b6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Chunky chain necklace with bold design.",
  },
  {
    id: 31,
    name: "Luxury Tie",
    price: 59.99,
    img: "https://plus.unsplash.com/premium_photo-1723924810262-c67a0950f311?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Silk tie for a premium formal style.",
  },
  {
    id: 32,
    name: "Gold Choker",
    price: 129.99,
    img: "https://plus.unsplash.com/premium_photo-1683122039723-f2d9f46cf0db?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern gold choker for a bold look.",
  },
  {
    id: 33,
    name: "Fashion Brooch Pin",
    price: 44.99,
    img: "https://images.unsplash.com/photo-1588942458058-55beb017132c?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Unique brooch pin for jackets and blazers.",
  },
  {
    id: 34,
    name: "Beaded Necklace",
    price: 49.99,
    img: "https://images.unsplash.com/photo-1733241695152-2031fce2047e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Colorful beaded necklace for summer outfits.",
  },
  {
    id: 35,
    name: "Luxury Bracelet",
    price: 169.99,
    img: "https://images.unsplash.com/photo-1602751584581-2e0372975b46?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium bracelet with a gold finish.",
  },
  {
    id: 36,
    name: "Casual Cap",
    price: 29.99,
    img: "https://plus.unsplash.com/premium_photo-1690038784307-19fbbf7b248a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable cotton cap with adjustable strap.",
  },
  {
    id: 37,
    name: "Leather Gloves",
    price: 79.99,
    img: "https://images.unsplash.com/photo-1483118714900-540cf339fd46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic leather gloves for winter fashion.",
  },
  {
    id: 38,
    name: "Gold Pendant Set",
    price: 199.99,
    img: "https://images.unsplash.com/photo-1641457379940-2a6530925721?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gold pendant with matching earrings set.",
  },
  {
    id: 39,
    name: "Luxury Hair Band",
    price: 24.99,
    img: "https://images.unsplash.com/photo-1680055199184-5c60e894a05a?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish hair band with designer detail.",
  },
  {
    id: 40,
    name: "Vintage Watch",
    price: 399.99,
    img: "https://images.unsplash.com/photo-1493799582117-9a58bc07a8de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant vintage watch with leather strap.",
  },
  {
    id: 41,
    name: "Luxury Clutch",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1583573736485-4add9bc7ac0a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Designer clutch bag for parties and events.",
  },
  {
    id: 42,
    name: "Diamond Tennis Bracelet",
    price: 499.99,
    img: "https://images.unsplash.com/photo-1668619322826-c98b77b9c125?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Exquisite tennis bracelet with diamonds.",
  },
  {
    id: 43,
    name: "Leather Backpack",
    price: 129.99,
    img: "https://images.unsplash.com/photo-1575376653281-1632fc9c61f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish leather backpack for daily use.",
  },
  {
    id: 44,
    name: "Minimalist Wallet",
    price: 39.99,
    img: "https://images.unsplash.com/photo-1708422405606-3cf104a42173?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Compact wallet for cards and cash.",
  },
  {
    id: 45,
    name: "Gemstone Pendant",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1735480166632-38176b26f212?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant pendant featuring a precious gemstone.",
  },
  {
    id: 46,
    name: "Luxury Hat",
    price: 59.99,
    img: "https://images.unsplash.com/photo-1737666636073-f15d9762cf83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium quality hat for outdoor style.",
  },
  {
    id: 47,
    name: "Boho Bracelet Set",
    price: 34.99,
    img: "https://images.unsplash.com/photo-1704536917568-af87f9a87312?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Trendy boho-style bracelet set for summer.",
  },
  {
    id: 48,
    name: "Gold Plated Ring",
    price: 54.99,
    img: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sleek and stylish gold-plated finger ring.",
  },
  {
    id: 49,
    name: "Crystal Necklace",
    price: 109.99,
    img: "https://images.unsplash.com/photo-1682688591448-252d85b362c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Charming crystal necklace for festive looks.",
  },
  {
    id: 50,
    name: "Luxury Sunglasses",
    price: 139.99,
    img: "https://images.unsplash.com/photo-1589642380614-4a8c2147b857?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium sunglasses with polarized lenses.",
  }
];

  const [selected, setSelected] = useState(trendingAccessories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Swipe logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredProducts([]);
        setLoading(false);
        return;
      }

      const queryLower = searchQuery.toLowerCase();
      const results = trendingAccessories.filter((item) =>
        item.name.toLowerCase().includes(queryLower)
      );

      results.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(results);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    if (!searchQuery.trim()) setFilteredProducts([]);
  }, [searchQuery]);

  return (
    <>
      {/* ✅ Inline Custom CSS for Scrollbar */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.9); /* Dark gray like thumbnail bg */
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #b45309, #b45309); /* Golden gradient */
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #b45309, #b45309);
        }
      `}</style>

      <section className="w-full max-w-[1200px] mx-auto px-3 sm:px-4 py-8 bg-white rounded-lg text-amber-600 select-none">
        {/* Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          Trending Accessories
        </h1>

        {/* Main Image */}
        <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg mb-6">
          <img
            src={selected.img}
            alt={selected.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/80 p-3 sm:p-5 rounded-lg max-w-[85%] sm:max-w-[50%]">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold leading-snug">
              {selected.name}
            </h2>
            <p className="mt-1 sm:mt-2 text-amber-500 font-semibold text-base sm:text-lg md:text-2xl">
              ${selected.price.toFixed(2)}
            </p>
            <p className="mt-1 text-gray-700 text-xs sm:text-sm md:text-base">
              {selected.description}
            </p>
          </div>

          {/* Thumbnails with custom scrollbar */}
          <div
            ref={scrollRef}
            className="custom-scroll absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/80 rounded-lg p-2 flex gap-2 overflow-x-auto max-w-[75%] sm:max-w-[50%] snap-x cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {trendingAccessories.map((item) => (
              <button
                key={item.id}
                onClick={() => !isDragging && setSelected(item)}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  selected.id === item.id
                    ? "border-amber-600 scale-110"
                    : "border-transparent hover:border-amber-500"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
          <input
            type="text"
            placeholder="Search related products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            onClick={handleSearch}
            className="px-4 sm:px-6 py-2 bg-amber-600 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-6">
            <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Search Results */}
        {!loading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-2xl transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-amber-500 font-semibold text-lg sm:text-xl">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-3 sm:px-4 py-2 bg-amber-600 text-gray-900 rounded-lg font-semibold hover:bg-amber-500 transition">
                      Add to Cart
                    </button>
                    <button className="flex-1 px-3 sm:px-4 py-2 border border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-600 hover:text-gray-900 transition">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && searchQuery.trim() && filteredProducts.length === 0 && (
          <p className="text-center text-amber-500 font-semibold mt-8">
            No products found for "{searchQuery.trim()}"
          </p>
        )}
      </section>
    </>
  );
};

export default AccessoriesTrending;
