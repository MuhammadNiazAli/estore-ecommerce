import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing clearance deals! I saved over 50% on my purchase. Highly recommend shopping here.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Great quality products even during clearance sales. Delivery was quick too!",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Williams",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Super happy with my purchase. The discounts were unbeatable and the process was smooth.",
    rating: 5,
  },
];

const ClearanceTestimonials = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 py-12">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          What Our Customers Say
        </h2>
        <p className="text-gray-300 text-center mb-10 text-sm md:text-base">
          Real feedback from happy shoppers who grabbed amazing clearance deals.
        </p>

        {/* Responsive Testimonials */}
        <div className="flex flex-col md:flex-row md:gap-6 gap-4 md:overflow-x-auto scrollbar-hide">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 w-full md:min-w-[300px] rounded-xl shadow-lg p-6 transition"
            >
              {/* User Image */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                />
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {item.name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < item.rating ? "currentColor" : "none"}
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClearanceTestimonials;
