"use client";
import { FC, useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

interface Category {
  name: string;
  icon: string;
  count?: number;
  isPopular?: boolean;
  isTrending?: boolean;
  color?: string;
}

const categories: Category[] = [
  { 
    name: "Phones", 
    icon: "/icons/Phones.png", 
    count: 1247, 
    isPopular: true,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "Smart Watches", 
    icon: "/icons/Smartwatches.png", 
    count: 892, 
    isTrending: true,
    color: "from-green-400 to-green-600"
  },
  { 
    name: "Cameras", 
    icon: "/icons/Cameras.png", 
    count: 634,
    color: "from-purple-400 to-purple-600"
  },
  { 
    name: "Headphones", 
    icon: "/icons/Headphones.png", 
    count: 756, 
    isPopular: true,
    color: "from-pink-400 to-pink-600"
  },
  { 
    name: "Computers", 
    icon: "/icons/Computers.png", 
    count: 445,
    color: "from-indigo-400 to-indigo-600"
  },
  { 
    name: "Gaming", 
    icon: "/icons/Gaming.png", 
    count: 923, 
    isTrending: true,
    color: "from-red-400 to-red-600"
  },
  { 
    name: "Drones", 
    icon: "/icons/Drones.png", 
    count: 298,
    color: "from-orange-400 to-orange-600"
  },
  { 
    name: "Speakers", 
    icon: "/icons/Speakers.png", 
    count: 567,
    color: "from-teal-400 to-teal-600"
  },
];

const Categories: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const timeouts = categories.map((_, index) => 
      setTimeout(() => {
        setVisibleItems(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 150)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateScrollButtons, 300);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFAFA] via-[#FEFEFE] to-[#F5F5F5] dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 px-4 md:px-20 lg:px-40 py-20 flex flex-col gap-10 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl animate-pulse dark:from-blue-500/20 dark:to-purple-500/20" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000 dark:from-pink-500/20 dark:to-yellow-400/20" />
      
      {/* Header */}
      <div className="flex justify-between items-center max-w-[1120px] mx-auto w-full">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent tracking-tight">
            Browse By Category
          </h2>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`group w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
              canScrollLeft 
                ? 'hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 hover:shadow-xl cursor-pointer' 
                : 'opacity-40 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
              canScrollLeft ? 'text-gray-700 dark:text-gray-200 group-hover:text-blue-600 group-hover:-translate-x-0.5' : 'text-gray-400'
            }`} />
          </button>
          
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`group w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
              canScrollRight 
                ? 'hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 hover:shadow-xl cursor-pointer' 
                : 'opacity-40 cursor-not-allowed'
            }`}
          >
            <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
              canScrollRight ? 'text-gray-700 dark:text-gray-200 group-hover:text-blue-600 group-hover:translate-x-0.5' : 'text-gray-400'
            }`} />
          </button>
        </div>
      </div>

      {/* Scrollable categories */}
      <div className="relative max-w-[1120px] mx-auto w-full">
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />
        )}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />
        )}
        
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          onScroll={updateScrollButtons}
        >
          {categories.map((cat, idx) => {
            const isHovered = hoveredIndex === idx;
            const isVisible = visibleItems[idx];
            
            return (
              <div
                key={idx}
                className={`group relative flex flex-col items-center justify-center gap-3 min-w-[140px] md:min-w-[160px] h-[120px] md:h-[140px] rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                  isHovered ? 'scale-105 -translate-y-2 shadow-2xl' : 'scale-100 shadow-md hover:shadow-lg'
                }`}
                style={{
                  background: isHovered 
                    ? 'linear-gradient(135deg, var(--tw-gradient-stops))'
                    : '#EDEDED',
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {cat.isPopular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3" />
                    <span className="hidden sm:inline">Popular</span>
                  </div>
                )}
                
                {cat.isTrending && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <TrendingUp className="w-3 h-3" />
                    <span className="hidden sm:inline">Hot</span>
                  </div>
                )}

                {cat.color && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                )}

                <div className={`relative w-12 h-12 md:w-14 md:h-14 transform transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-3' : 'scale-100'
                }`}>
                  <Image 
                    src={cat.icon} 
                    alt={cat.name} 
                    width={56} 
                    height={56} 
                    className="object-contain filter transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                </div>

                <div className="text-center space-y-1">
                  <span className={`text-sm md:text-base font-semibold transition-all duration-300 ${
                    isHovered ? 'text-gray-800 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {cat.name}
                  </span>
                  
                  {cat.count && (
                    <div className={`text-xs font-medium transition-all duration-300 ${
                      isHovered ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-500'
                    }`}>
                      {cat.count.toLocaleString()}
                    </div>
                  )}
                </div>

                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  isHovered ? 'border-gray-200 dark:border-gray-700 shadow-inner' : 'border-transparent'
                }`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1120px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-4">
        {[
          { value: "5,000+", label: "Products" },
          { value: categories.length, label: "Categories" },
          { value: "24/7", label: "Support" },
          { value: "Free", label: "Shipping" },
        ].map((stat, i) => (
          <div key={i} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">{stat.value}</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
