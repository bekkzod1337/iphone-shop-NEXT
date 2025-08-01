'use client';

import Image from 'next/image';

const products = [
  {
    image: '/product/1.png',
    title: 'Airpods Pro MWP22TY/A',
    price: '$199.00',
  },
  {
    image: '/product/2.png',
    title: 'BMPCC 6K Pro Body',
    price: '$1,999.00',
  },
  {
    image: '/product/3.png',
    title: 'Galaxy Watch 5 Pro',
    price: '$349.99',
  },
  {
    image: '/product/4.png',
    title: 'Apple Watch Series 9',
    price: '$399.00',
  },
  {
    image: '/product/5.png',
    title: 'Galaxy Z Fold 5',
    price: '$1,799.99',
  },
  {
    image: '/product/6.png',
    title: 'iPhone 14 Pro Max',
    price: '$1,099.00',
  },
  {
    image: '/product/7.png',
    title: 'iPhone 14 Pro Max',
    price: '$1,099.00',
  },
  {
    image: '/product/8.png',
    title: 'iPhone 14 Pro Max',
    price: '$1,099.00',
  },
];

const tags = ['Smartphones', 'Audio', 'Watches', 'Cameras'];

export default function ProductsSection() {
  return (
    <section className="flex flex-col items-start px-40 py-14 gap-8 w-full bg-white">
      <h2 className="text-4xl font-bold text-black">Products</h2>

      {/* Tags */}
      <div className="flex flex-row gap-4 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            className="px-5 py-2.5 bg-[#F7F7F7] text-[#7C7C7C] text-sm font-medium rounded-md hover:bg-black hover:text-white transition"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Product cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 gap-4 bg-[#F7F7F7] rounded-lg w-full max-w-[268px] h-[432px]"
          >
            <div className="w-full h-8 flex justify-end">
              <div className="w-8 h-8 border border-gray-300 rounded-full"></div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="text-lg font-semibold text-black text-center">{product.title}</div>
            <div className="text-xl font-bold text-black">{product.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
