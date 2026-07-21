import React, { useState } from "react";

const brands = [
  { id: 1, name: "Gucci", img: "https://www.vectorkhazana.com/assets/images/products/Gucci_logo_svg.png" },
  { id: 2, name: "Louis Vuitton", img: "https://static.vecteezy.com/system/resources/previews/027/127/446/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png" },
  { id: 3, name: "Prada", img: "https://1000logos.net/wp-content/uploads/2017/05/Prada-Logo.png" },
  { id: 4, name: "Chanel", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/800px-Chanel_logo_interlocking_cs.svg.png" },
  { id: 5, name: "Rolex", img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Logo_da_Rolex.png" },
  { id: 6, name: "Cartier", img: "https://logos-world.net/wp-content/uploads/2020/06/Cartier-Logo.png" },
  { id: 7, name: "Hermès", img: "https://images.seeklogo.com/logo-png/32/2/hermes-logo-png_seeklogo-321332.png" },
  { id: 8, name: "Dior", img: "https://www.africansalescompany.co.za/wp-content/uploads/2016/05/DIOR-COUTURE-LOGO-BLACK-PNG.png" },
  { id: 9, name: "Tiffany & Co.", img: "https://cdn.shopify.com/s/files/1/0014/0728/7359/collections/TiffanyCo.png?v=1559574550" },
  { id: 10, name: "Versace", img: "https://www.pngall.com/wp-content/uploads/15/Versace-PNG-Image-HD.png" },
];

const AccessoriesBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 py-10">
      {/* Header */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-10 tracking-wide">
        Luxury Accessories Brands
      </h2>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => setSelectedBrand(brand)}
            className={`relative flex flex-col items-center justify-center rounded-xl backdrop-blur-md bg-white/5 border border-gray-200/10 p-6 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] ${
              selectedBrand?.id === brand.id ? "ring-2 ring-amber-600 shadow-[0_0_30px_rgba(255,215,0,0.5)]" : ""
            }`}
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-gray-900 font-semibold text-lg">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Selected Brand Info */}
      {selectedBrand && (
        <div className="mt-12 flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-gray-200/20 rounded-2xl p-6 max-w-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold text-amber-600">
              {selectedBrand.name}
            </h3>
            <p className="text-gray-700 mt-3 text-base leading-relaxed">
              Discover exquisite collections by {selectedBrand.name} — from
              elegant watches to premium jewelry, crafted for true luxury.
            </p>
            <button className="mt-5 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-800 text-gray-900 font-semibold rounded-full hover:opacity-90 transition-all">
              Explore Collection
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessoriesBrands;
