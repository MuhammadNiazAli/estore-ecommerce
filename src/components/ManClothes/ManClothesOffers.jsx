import React, { useEffect, useState } from "react";

const offers = [
  {
    id: 1,
    title: "Summer Sale - Up to 50% Off",
    subtitle: "On all men’s jackets & coats",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60",
    discount: "50%",
    dealEnds: "2025-08-01T23:59:59",
  },
  {
    id: 2,
    title: "Exclusive Watch Deals",
    subtitle: "Luxury watches starting at $199",
    img: "https://images.unsplash.com/photo-1589553529769-f288638c4848?w=600&auto=format&fit=crop&q=60",
    discount: "30%",
    dealEnds: "2025-07-31T23:59:59",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free",
    subtitle: "On select men’s accessories",
    img: "https://plus.unsplash.com/premium_photo-1713820010572-b8c4b2ecbd55?w=600&auto=format&fit=crop&q=60",
    discount: "BOGO",
    dealEnds: "2025-08-15T23:59:59",
  },
];

function getTimeLeft(endDate) {
  const difference = new Date(endDate) - new Date();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const ManClothesOffers = () => {
  const [timeLefts, setTimeLefts] = useState(
    offers.map((offer) => getTimeLeft(offer.dealEnds))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLefts(offers.map((offer) => getTimeLeft(offer.dealEnds)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide drop-shadow-lg">
          Hot Offers & Deals
        </h2>
        <p className="mt-3 text-gray-900 text-sm sm:text-base md:text-lg font-medium">
          Grab these exclusive offers before they end!
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offers.map((offer, idx) => {
          const timeLeft = timeLefts[idx];

          return (
            <div
              key={offer.id}
              className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 md:h-60 lg:h-64 overflow-hidden">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-yellow-500 text-white font-semibold px-3 py-1 rounded-full shadow-md uppercase tracking-wide text-xs sm:text-sm">
                  {offer.discount} OFF
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {offer.title}
                  </h3>
                  <p className="text-gray-700 mt-1 text-sm sm:text-base">
                    {offer.subtitle}
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="mt-4 flex justify-between sm:justify-start sm:gap-6 text-gray-900 font-semibold text-xs sm:text-sm">
                  {timeLeft ? (
                    <>
                      <div className="flex flex-col items-center">
                        <span>{timeLeft.days}</span>
                        <small className="text-gray-500">Days</small>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>{timeLeft.hours}</span>
                        <small className="text-gray-500">Hrs</small>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>{timeLeft.minutes}</span>
                        <small className="text-gray-500">Min</small>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>{timeLeft.seconds}</span>
                        <small className="text-gray-500">Sec</small>
                      </div>
                    </>
                  ) : (
                    <span className="text-red-600 font-bold">Deal Ended</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  className="mt-6 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 rounded-xl py-3.5 text-white font-extrabold text-base shadow-lg shadow-yellow-400/60 hover:shadow-yellow-500/80"
                >
                  🛒 Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ManClothesOffers;
