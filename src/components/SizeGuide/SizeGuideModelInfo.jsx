import React from 'react';

const models = [
  {
    name: 'Alex',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    height: "6'1\" (185 cm)",
    chest: '38"',
    waist: '30"',
    hips: '40"',
    sizeWorn: 'M',
  },
  {
    name: 'Emma',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    height: "5'8\" (173 cm)",
    bust: '34"',
    waist: '26"',
    hips: '36"',
    sizeWorn: 'S',
  },
];

const SizeGuideModelInfo = () => {
  return (
    <section className="w-full bg-white text-gray-800 flex justify-center py-12 px-4 sm:px-6 md:py-16">
      <div className="max-w-[1000px] w-full grid gap-12 md:grid-cols-2">
        {models.map((model, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-black transition-shadow duration-300"
          >
            <img
              src={model.image}
              alt={`${model.name} model`}
              className="w-48 h-64 sm:w-56 sm:h-72 object-cover rounded-md mb-6"
              loading="lazy"
            />
            <h3 className="text-black text-2xl sm:text-3xl font-extrabold mb-4 select-none">
              {model.name}
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm sm:text-base max-w-xs">
              <li>
                <strong>Height:</strong> {model.height}
              </li>
              <li>
                <strong>{model.bust ? 'Bust' : 'Chest'}:</strong>{' '}
                {model.bust || model.chest}
              </li>
              <li>
                <strong>Waist:</strong> {model.waist}
              </li>
              <li>
                <strong>Hips:</strong> {model.hips}
              </li>
              <li>
                <strong>Size Worn:</strong>{' '}
                <span className="text-black font-semibold">{model.sizeWorn}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SizeGuideModelInfo;
