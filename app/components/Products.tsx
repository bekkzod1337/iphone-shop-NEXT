'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Eye, Star, TrendingUp, Zap, Crown } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  discount?: number;
  badge?: 'bestseller' | 'new' | 'featured' | 'limited';
  isLiked?: boolean;
}

const products: Product[] = [
  { 
    id: 1, 
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple', 
    price: 1399, 
    originalPrice: 1499,
    image: '/product/1.png',
    rating: 4.8,
    reviewCount: 324,
    discount: 7,
    badge: 'new'
  },
  { 
    id: 2, 
    title: 'BMPCC 6K Camera', 
    price: 2499, 
    image: '/product/2.png',
    rating: 4.9,
    reviewCount: 128,
    badge: 'featured'
  },
  { 
    id: 3, 
    title: 'Apple Watch Series 9', 
    price: 499, 
    originalPrice: 549,
    image: '/product/3.png',
    rating: 4.7,
    reviewCount: 892,
    discount: 9,
    badge: 'bestseller'
  },
  { 
    id: 4, 
    title: 'AirPods Pro (2nd generation)', 
    price: 199, 
    image: '/product/4.png',
    rating: 4.6,
    reviewCount: 567,
    badge: 'bestseller'
  },
  { 
    id: 5, 
    title: 'Samsung Galaxy Watch', 
    price: 299, 
    originalPrice: 349,
    image: '/product/5.png',
    rating: 4.4,
    reviewCount: 234,
    discount: 14
  },
  { 
    id: 6, 
    title: 'Samsung Galaxy Z Fold 5', 
    price: 1799, 
    image: '/product/6.png',
    rating: 4.5,
    reviewCount: 89,
    badge: 'limited'
  },
  { 
    id: 7, 
    title: 'Samsung Galaxy Buds2 Pro', 
    price: 149, 
    originalPrice: 179,
    image: '/product/7.png',
    rating: 4.3,
    reviewCount: 445,
    discount: 17
  },
  { 
    id: 8, 
    title: 'Apple iPad 9th Gen 10.2"', 
    price: 149, 
    originalPrice: 199,
    image: '/product/8.png',
    rating: 4.6,
    reviewCount: 678,
    discount: 25,
    badge: 'featured'
  },
];

export default function EnhancedProductsSection() {
  const [selectedTag, setSelectedTag] = useState('New Arrival');
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<boolean[]>(new Array(products.length).fill(true));
  
  const tags = [
    { name: 'New Arrival', icon: Zap, color: 'from-green-500 to-green-600' },
    { name: 'Bestseller', icon: Crown, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Featured Products', icon: Star, color: 'from-blue-500 to-blue-600' }
  ];

  useEffect(() => {
    // Reset visibility first
    setVisibleProducts(new Array(products.length).fill(false));
    
    // Animate products in sequence
    const timeouts = products.map((_, index) => 
      setTimeout(() => {
        setVisibleProducts(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 150)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [selectedTag]);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const getBadgeConfig = (badge: string) => {
    switch (badge) {
      case 'new':
        return { color: 'from-green-400 to-green-500', text: 'NEW', icon: Zap };
      case 'bestseller':
        return { color: 'from-yellow-400 to-yellow-500', text: 'BESTSELLER', icon: Crown };
      case 'featured':
        return { color: 'from-blue-400 to-blue-500', text: 'FEATURED', icon: Star };
      case 'limited':
        return { color: 'from-red-400 to-red-500', text: 'LIMITED', icon: TrendingUp };
      default:
        return null;
    }
  };

  const ProductCard = ({ product, index }: { product: Product; index: number }) => {
    const isHovered = hoveredProduct === product.id;
    const isLiked = likedProducts.has(product.id);
    const isVisible = visibleProducts[index];
    const badgeConfig = product.badge ? getBadgeConfig(product.badge) : null;

    return (
      <div
        className={`group relative flex flex-col p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 cursor-pointer transition-all duration-700 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
        } ${
          isHovered ? 'scale-105 -translate-y-2 shadow-2xl shadow-blue-500/10 border-blue-200' : 'hover:shadow-lg hover:scale-[1.02]'
        }`}
      >
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
        
        {/* Badge */}
        {badgeConfig && (
          <div className={`absolute -top-2 -left-2 bg-gradient-to-r ${badgeConfig.color} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10 transition-all duration-300 ${
            isHovered ? 'scale-110 -rotate-3' : 'scale-100'
          }`}>
            <badgeConfig.icon className="w-3 h-3" />
            {badgeConfig.text}
          </div>
        )}

        {/* Discount Badge */}
        {product.discount && (
          <div className={`absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg z-10 transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-6' : 'scale-100'
          }`}>
            -{product.discount}%
          </div>
        )}

        {/* Action Buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ease-out ${
          isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}>
          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleLike(product.id);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              isLiked 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
                : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500 shadow-md'
            }`}
          >
            <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-current scale-110' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 flex items-center justify-center hover:bg-white hover:text-blue-500 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md">
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-50">
          <div className={`w-full h-full transition-all duration-700 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          
          {/* Floating Elements */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-3 left-3 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" 
                 style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-2 w-1 h-1 bg-pink-400 rounded-full animate-bounce" 
                 style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-3 flex-1">
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-all duration-300 ${
                      i < Math.floor(product.rating!) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className={`text-base font-semibold text-gray-800 line-clamp-2 transition-all duration-300 ${
            isHovered ? 'text-gray-900' : ''
          }`}>
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-gray-900 transition-colors duration-300">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Buy Button */}
          <button className={`group relative overflow-hidden px-6 py-3 bg-black text-white rounded-xl font-medium transition-all duration-300 transform active:scale-95 ${
            isHovered ? 'scale-105 shadow-xl shadow-black/20' : 'hover:scale-[1.02] hover:shadow-lg'
          }`}>
            <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300">
              <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              Add to Cart
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
          </button>
        </div>

        {/* Click Ripple Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-white transform scale-0 group-active:scale-100 transition-transform duration-200 opacity-20 rounded-2xl" />
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-start px-6 lg:px-40 py-16 gap-10 w-full 
  bg-gradient-to-br from-gray-50 via-white to-gray-50 
  dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 
  relative overflow-hidden">

  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br 
    from-blue-200/20 to-purple-200/20 
    dark:from-blue-500/10 dark:to-purple-500/10 
    rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br 
    from-pink-200/20 to-yellow-200/20 
    dark:from-pink-500/10 dark:to-yellow-500/10 
    rounded-full blur-3xl animate-pulse" 
    style={{ animationDelay: '2s' }} />

  {/* Tag buttons */}
  <div className="flex gap-8 relative z-10 flex-wrap">
    {tags.map((tag) => {
      const isSelected = selectedTag === tag.name;
      return (
        <div key={tag.name} className="flex flex-col items-center group cursor-pointer">
          <div
            onClick={() => setSelectedTag(tag.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 ease-out 
              ${isSelected 
                ? `bg-gradient-to-r ${tag.color} text-white shadow-lg transform scale-105` 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105'
              }`}
          >
            <tag.icon className="w-5 h-5" />
            <span className="text-lg font-semibold">{tag.name}</span>
          </div>
          <div className={`mt-2 h-1 bg-gradient-to-r ${tag.color} rounded-full transition-all duration-500 ease-out 
            ${isSelected 
              ? 'w-full opacity-100' 
              : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60'
            }`} />
        </div>
      );
    })}
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full relative z-10">
    {products.map((product, index) => (
      <ProductCard key={`${product.id}-${selectedTag}`} product={product} index={index} />
    ))}
  </div>
</section>

  );
}