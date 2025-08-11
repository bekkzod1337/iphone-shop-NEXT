'use client';

import Image from 'next/image';

export default function DiscountProducts() {
  const products = [
    {
      id: 1,
      image: '/discount/1.png',
      title: 'Wireless Headphones',
      oldPrice: '$120',
      newPrice: '$90',
      discount: '-25%',
    },
    {
      id: 2,
      image: '/discount/2.png',
      title: 'Smart Watch',
      oldPrice: '$200',
      newPrice: '$150',
      discount: '-25%',
    },
    {
      id: 3,
      image: '/discount/3.png',
      title: 'Gaming Mouse',
      oldPrice: '$50',
      newPrice: '$35',
      discount: '-30%',
    },
    {
      id: 4,
      image: '/discount/4.png',
      title: 'Bluetooth Speaker',
      oldPrice: '$80',
      newPrice: '$60',
      discount: '-25%',
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6 md:px-20">
      {/* Title */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold">Discount Products</h2>
        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(({ id, image, title, oldPrice, newPrice, discount }) => (
          <div
            key={id}
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {discount}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>

            {/* Prices */}
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-green-600">{newPrice}</span>
              <span className="text-gray-400 line-through">{oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
