import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Johnson",
    role: "Verified Buyer",
    photo:
      "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Absolutely loved the products! The quality and attention to detail is unmatched. Highly recommend to anyone looking for premium items.",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Frequent Shopper",
    photo:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Fast shipping and excellent customer service. The sale prices made it even better. Will definitely shop here again!",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Fashion Enthusiast",
    photo:
      "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The best online store I've come across. The testimonials and real reviews convinced me, and I wasn't disappointed.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Satisfied Customer",
    photo:
      "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Quality products at unbeatable prices. The UI is sleek and shopping is a breeze. Highly recommended.",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Loyal Client",
    photo:
      "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Customer support is super responsive and helpful. The overall experience feels very premium and trustworthy.",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Verified Buyer",
    photo:
      "https://randomuser.me/api/portraits/men/54.jpg",
    text: "I appreciate the attention to detail in both product and design. Definitely my go-to store from now on.",
  },
];

const SaleTestimonials = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-semibold text-black text-center mb-10 tracking-wide">
        What Our Customers Say
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ id, name, role, photo, text }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                src={photo}
                alt={name}
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-black"
              />
              <div>
                <h3 className="text-black font-semibold text-lg">{name}</h3>
                <p className="text-black text-sm">{role}</p>
              </div>
            </div>

            <p className="text-gray-700 flex-grow leading-relaxed text-sm">
              <span className="text-black text-2xl mr-2 select-none">“</span>
              {text}
              <span className="text-black text-2xl ml-2 select-none">”</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaleTestimonials;
