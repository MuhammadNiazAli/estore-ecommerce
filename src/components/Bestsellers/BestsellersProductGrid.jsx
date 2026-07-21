import React, { useState } from 'react'

const products = [
  {
    id: 1,
    title: 'Classic Leather Jacket',
    price: 249,
    oldPrice: 349,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
  {
    id: 2,
    title: 'Stylish Sneakers',
    price: 129,
    oldPrice: 199,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1610132835946-cecdd132ee0b?q=80&w=376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'New',
  },
  {
    id: 3,
    title: 'Elegant Wristwatch',
    price: 399,
    oldPrice: 499,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1720496074567-73e8ce14d5f9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Trendy Backpack',
    price: 89,
    oldPrice: 129,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1622560481979-f5b0174242a0?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
  {
    id: 5,
    title: 'Modern Sunglasses',
    price: 59,
    oldPrice: 89,
    rating: 4.5,
    image:
      'https://plus.unsplash.com/premium_photo-1692809752457-e7ba096b9b19?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Cozy Winter Scarf',
    price: 39,
    oldPrice: 59,
    rating: 4.3,
    image:
      'https://plus.unsplash.com/premium_photo-1695604461350-70d97106483a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'New',
  },
  {
    id: 7,
    title: 'Casual Denim Jeans',
    price: 79,
    oldPrice: 99,
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1752617815086-6ef8f772d841?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
  {
    id: 8,
    title: 'Comfortable Hoodie',
    price: 59,
    oldPrice: 79,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1578470507807-3fc541d5f544?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: 'Elegant Dress Shoes',
    price: 199,
    oldPrice: 249,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1718932441485-749b3f7ce6dc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'New',
  },
  {
    id: 10,
    title: 'Luxury Perfume',
    price: 120,
    oldPrice: 150,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1635006991398-2a86afc3e0f7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // 30 new products below
  {
    id: 11,
    title: 'Vintage Fedora Hat',
    price: 49,
    oldPrice: 69,
    rating: 4.4,
    image:
      'https://plus.unsplash.com/premium_photo-1693011410171-39d2fc309a6f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
  {
    id: 12,
    title: 'Leather Wallet',
    price: 35,
    oldPrice: 50,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    title: 'Sports Running Shoes',
    price: 140,
    oldPrice: 180,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1746206673199-5b75dcec1018?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'New',
  },
  {
    id: 14,
    title: 'Wireless Earbuds',
    price: 99,
    oldPrice: 129,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1648447272271-1c2292144c50?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 15,
    title: 'Classic Baseball Cap',
    price: 25,
    oldPrice: 35,
    rating: 4.3,
    image:
      'https://plus.unsplash.com/premium_photo-1677405099651-53669fdee9df?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    title: 'Elegant Silk Tie',
    price: 45,
    oldPrice: 60,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    title: 'Casual Canvas Shoes',
    price: 70,
    oldPrice: 90,
    rating: 4.0,
    image:
      'https://images.unsplash.com/photo-1567159572707-964d744246f7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
  {
    id: 18,
    title: 'Travel Duffel Bag',
    price: 110,
    oldPrice: 140,
    rating: 4.6,
    image:
      'https://plus.unsplash.com/premium_photo-1680371258078-348a156edc10?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 19,
    title: 'Elegant Gold Necklace',
    price: 250,
    oldPrice: 300,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1742627032795-1dfb552448ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    title: 'Soft Cotton T-Shirt',
    price: 22,
    oldPrice: 30,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1651761179569-4ba2aa054997?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 21,
    title: 'Leather Belt',
    price: 40,
    oldPrice: 55,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1664286074176-5206ee5dc878?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 22,
    title: 'Bluetooth Speaker',
    price: 85,
    oldPrice: 110,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 23,
    title: 'Modern Office Chair',
    price: 299,
    oldPrice: 350,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1750306957357-bf6e1f8e7da8?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 24,
    title: 'Elegant Wristband Watch',
    price: 180,
    oldPrice: 220,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1690343430066-d4634276895d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 25,
    title: 'Casual Slip-On Shoes',
    price: 65,
    oldPrice: 80,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1588568033848-dc3f331234b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 26,
    title: 'Designer Handbag',
    price: 450,
    oldPrice: 520,
    rating: 4.9,
    image:
      'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 27,
    title: 'Winter Leather Gloves',
    price: 55,
    oldPrice: 70,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1733652220367-367b63bd68fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
  {
    id: 28,
    title: 'Classic Fedora Hat',
    price: 45,
    oldPrice: 60,
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1650532826306-c08cb1c7638b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 29,
    title: 'Luxury Silk Scarf',
    price: 70,
    oldPrice: 85,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'New',
  },
  {
    id: 30,
    title: 'Smart Fitness Tracker',
    price: 110,
    oldPrice: 140,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1598717873798-1b78ebe04fc2?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 31,
    title: 'Travel Sunglasses',
    price: 60,
    oldPrice: 75,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1595599698835-77ecebc243af?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 32,
    title: 'Portable Charger',
    price: 40,
    oldPrice: 50,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1706275399524-813e89914e43?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 33,
    title: 'Men’s Running Shorts',
    price: 30,
    oldPrice: 40,
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1695918427235-2d6faaae356a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 34,
    title: 'Women’s Casual Blouse',
    price: 45,
    oldPrice: 60,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1623052760790-9605a8579730?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 35,
    title: 'Kids Running Shoes',
    price: 50,
    oldPrice: 65,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1567709816966-a1f1d1af8a3f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 36,
    title: 'Outdoor Camping Tent',
    price: 180,
    oldPrice: 220,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1695918435048-1e48dab0c4e5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 37,
    title: 'Luxury Leather Boots',
    price: 220,
    oldPrice: 280,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1725387023639-28e9a42a83b1?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 38,
    title: 'Minimalist Backpack',
    price: 95,
    oldPrice: 130,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1591534577302-1696205bb2bc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 39,
    title: 'Casual White Sneakers',
    price: 120,
    oldPrice: 150,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 40,
    title: 'Summer Beach Hat',
    price: 35,
    oldPrice: 50,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1745284504844-7979176dc29b?q=80&w=364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Sale',
  },
];


const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating - fullStars >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="flex items-center space-x-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-4 h-4 text-black"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1
            1 0 00.95.69h4.162c.969 0 1.371 1.24.588
            1.81l-3.37 2.448a1 1 0 00-.364
            1.118l1.287 3.955c.3.922-.755
            1.688-1.54 1.118l-3.37-2.448a1
            1 0 00-1.175 0l-3.37
            2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.955a1
            1 0 00-.364-1.118L2.03
            9.382c-.783-.57-.38-1.81.588-1.81h4.162a1
            1 0 00.95-.69l1.286-3.955z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="url(#half-gradient)"
          viewBox="0 0 20 20"
          className="w-4 h-4 text-black"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1
            1 0 00.95.69h4.162c.969 0 1.371 1.24.588
            1.81l-3.37 2.448a1 1 0 00-.364
            1.118l1.287 3.955c.3.922-.755
            1.688-1.54 1.118l-3.37-2.448a1
            1 0 00-1.175 0l-3.37
            2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.955a1
            1 0 00-.364-1.118L2.03
            9.382c-.783-.57-.38-1.81.588-1.81h4.162a1
            1 0 00.95-.69l1.286-3.955z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-4 h-4 text-black"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902
              0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0
              1.371 1.24.588 1.81l-3.37
              2.448a1 1 0 00-.364 1.118l1.287
              3.955c.3.922-.755
              1.688-1.54 1.118l-3.37-2.448a1
              1 0 00-1.175 0l-3.37
              2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.955a1
              1 0 00-.364-1.118L2.03
              9.382c-.783-.57-.38-1.81.588-1.81h4.162a1
              1 0 00.95-.69l1.286-3.955z"
          />
        </svg>
      ))}
    </div>
  )
}

const IconButton = ({ title, onClick, children }) => (
  <button
    onClick={onClick}
    aria-label={title}
    className="bg-black/90 hover:bg-black/90 text-gray-900 p-2 rounded-full shadow-md transition-colors"
    type="button"
  >
    {children}
  </button>
)

const BestsellersProductGrid = () => {
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(false)

  const handleShowMore = () => {
    setLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, products.length))
      setLoading(false)
    }, 1000) // 1 second loading animation
  }

  const visibleProducts = products.slice(0, visibleCount)

  return (
    <section className="max-w-7xl mx-auto p-6 sm:p-10 bg-white rounded-2xl">
      <h2 className="text-black text-3xl font-extrabold mb-10 select-none text-center tracking-wide my-15">
        Bestselling Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProducts.map(({ id, title, price, oldPrice, rating, image, badge }) => (
          <article
            key={id}
            tabIndex={0}
            className="relative bg-gradient-to-b from-black/10 to-transparent rounded-2xl shadow-xl overflow-hidden cursor-pointer
              transform transition duration-400 hover:scale-[1.05] focus:scale-[1.05] focus:outline-none group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-2xl h-72 bg-white">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
              />
              {/* Badge */}
              {badge && (
                <span className="absolute top-4 left-4 bg-black text-gray-900 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-lg select-none z-10">
                  {badge}
                </span>
              )}

              {/* Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0
                  flex flex-col justify-between p-6 transition-opacity duration-500
                  group-hover:opacity-100 group-focus:opacity-100"
              >
                {/* Top Icons */}
                <div className="flex justify-end space-x-3">
                  <IconButton
                    title="View details"
                    onClick={() => alert(`Viewing details for ${title}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    title="Add to favorites"
                    onClick={() => alert(`Added ${title} to favorites!`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </IconButton>
                  <IconButton
                    title="Share product"
                    onClick={() => alert(`Sharing ${title}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.59 15.5L15 12m0 0l-6.41-3.5M15 12v6"
                      />
                    </svg>
                  </IconButton>
                </div>

                {/* Bottom Quick Info */}
                <div className="mt-auto text-black">
                  <h3
                    title={title}
                    className="font-semibold text-lg mb-1 truncate"
                  >
                    {title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-2xl">${price}</span>{' '}
                      {oldPrice && (
                        <span className="line-through text-black ml-3">${oldPrice}</span>
                      )}
                    </div>

                    <StarRating rating={rating} />
                  </div>
                </div>
              </div>
            </div>

            {/* Details below image */}
            <div className="p-6 flex flex-col justify-between h-[210px]">
              <h3
                title={title}
                className="text-black font-semibold text-lg mb-2 truncate hover:text-black transition-colors duration-300"
              >
                {title}
              </h3>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-black font-extrabold text-2xl">${price}</span>{' '}
                  {oldPrice && (
                    <span className="line-through text-black ml-3">${oldPrice}</span>
                  )}
                </div>

                <StarRating rating={rating} />
              </div>

              <button
                aria-label={`Add ${title} to cart`}
                className="mt-6 bg-black hover:bg-black text-gray-900 font-semibold rounded-full px-6 py-3 shadow-lg transition-colors select-none"
                type="button"
                onClick={() => alert(`Added ${title} to cart`)}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            disabled={loading}
            className="bg-black hover:bg-black text-gray-900 font-semibold rounded-full px-8 py-3 shadow-lg transition-colors flex items-center space-x-3 select-none disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            <span>{loading ? 'Loading...' : 'Show More'}</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default BestsellersProductGrid
