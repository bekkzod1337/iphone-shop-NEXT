'use client';
import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, title: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: 1399, image: '/product/1.png' },
  { id: 2, title: 'BMPCC 6K Camera', price: 2499, image: '/product/2.png' },
  { id: 3, title: 'Apple Watch', price: 499, image: '/product/3.png' },
  { id: 4, title: 'AirPods', price: 199, image: '/product/4.png' },
  { id: 5, title: 'Galaxy Watch', price: 299, image: '/product/5.png' },
  { id: 6, title: 'Galaxy Z Fold', price: 1799, image: '/product/6.png' },
  { id: 7, title: 'Galaxy Buds', price: 149, image: '/product/7.png' },
  { id: 8, title: 'Apple iPad 9 10.2', price: 149, image: '/product/8.png' },
];

export default function ProductsSection() {
  const [selectedTag, setSelectedTag] = useState('New Arrival');
  const tags = ['New Arrival', 'Bestseller', 'Featured Products'];

  return (
    <section className="flex flex-col items-start px-6 lg:px-40 py-14 gap-8 w-full bg-white">
      {/* Tags */}
      <div className="flex gap-8">
        {tags.map((tag) => (
          <div key={tag} className="flex flex-col items-center">
            <span
              onClick={() => setSelectedTag(tag)}
              className={`text-lg font-medium cursor-pointer ${
                selectedTag === tag ? 'text-black' : 'text-gray-500'
              }`}
            >
              {tag}
            </span>
            {selectedTag === tag && <div className="w-full h-0 border-b-2 border-black"></div>}
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-6 gap-4 bg-[#F7F7F7] rounded-lg"
          >
            {/* Like Icon */}
            <div className="flex justify-end w-full">
              <button className="w-8 h-8 border border-gray-400 rounded-full"></button>
            </div>

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={160}
              height={160}
              className="object-contain"
            />

            {/* Info */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-center text-base font-medium">{product.title}</h3>
              <p className="text-center text-2xl font-semibold">${product.price}</p>
              <button className="px-16 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
