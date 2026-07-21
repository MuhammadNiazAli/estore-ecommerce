import React from "react";

const contacts = [
  {
    type: "Email",
    value: "press@yourcompany.com",
    href: "mailto:press@yourcompany.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0L4 8m4 4l4 4" />
      </svg>
    ),
  },
  {
    type: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.28 3.84a1 1 0 01-.257 1.054l-2.768 2.768a11.042 11.042 0 005.516 5.516l2.768-2.768a1 1 0 011.054-.257l3.84 1.28a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 12V5z"
        />
      </svg>
    ),
  },
  {
    type: "Twitter",
    value: "@YourCompany",
    href: "https://twitter.com/YourCompany",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8 text-black"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 4.89a4.52 4.52 0 001.4 6.04 4.41 4.41 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.43 4.46 4.46 0 01-2.04.07 4.53 4.53 0 004.22 3.14A9.05 9.05 0 013 19.54a12.77 12.77 0 006.92 2.03c8.3 0 12.85-6.9 12.85-12.87 0-.2 0-.42-.02-.62A9.22 9.22 0 0023 3z" />
      </svg>
    ),
  },
];

const PressContacts = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 lg:px-8 py-16 mb-[-30px]">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Press Contacts
        </h2>
        <p className="mt-4 text-black text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          For press inquiries, please reach out to our media relations team using the contact
          information below.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map(({ type, value, href, icon }) => (
            <a
              key={type}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${type}: ${value}`}
              className="flex flex-col items-center justify-center bg-white hover:bg-gray-500 hover:ring-2 hover:ring-black rounded-2xl p-6 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black"
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-black font-semibold text-lg sm:text-xl">{type}</h3>
              <p className="text-black mt-1 text-sm sm:text-base break-words">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressContacts;
