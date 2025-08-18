'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function DiscountProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      image: '/discount/1.png',
      title: 'Wireless Headphones',
      oldPrice: '$120',
      newPrice: '$90',
      discount: '-25%',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      image: '/discount/2.png',
      title: 'Smart Watch',
      oldPrice: '$200',
      newPrice: '$150',
      discount: '-25%',
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 3,
      image: '/discount/3.png',
      title: 'Gaming Mouse',
      oldPrice: '$50',
      newPrice: '$35',
      discount: '-30%',
      rating: 4.9,
      reviews: 456,
    },
    {
      id: 4,
      image: '/discount/4.png',
      title: 'Bluetooth Speaker',
      oldPrice: '$80',
      newPrice: '$60',
      discount: '-25%',
      rating: 4.7,
      reviews: 321,
    },
  ];

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-200/20 to-yellow-200/20 dark:from-pink-500/10 dark:to-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Title */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-gray-100 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                Discount Products
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-7">Limited time offers you dont want to miss</p>
          </div>
          <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
            <span className="relative z-10">View All</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(({ id, image, title, oldPrice, newPrice, discount, rating, reviews }) => (
            <div
              key={id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col border border-white/50 dark:border-gray-700 hover:border-blue-200/50 dark:hover:border-blue-500/30 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image */}
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-3 left-3">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg">
                      {discount}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-50"></div>
                  </div>
                </div>

                {/* Buttons */}
                <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>

                {/* Add to Cart */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  hoveredProduct === id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button 
                    onClick={() => handleAddToCart(id)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">({reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {title}
                </h3>

                {/* Prices */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {newPrice}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 line-through text-lg">
                    {oldPrice}
                  </span>
                </div>

                {/* Savings */}
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  You save ${parseInt(oldPrice.slice(1)) - parseInt(newPrice.slice(1))}
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
