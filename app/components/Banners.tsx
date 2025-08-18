"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Play, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

export default function EnhancedBanners() {
  const [hoveredBanner, setHoveredBanner] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, playstation: true })), 100),
      setTimeout(() => setIsVisible(prev => ({ ...prev, airpods: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, vision: true })), 500),
      setTimeout(() => setIsVisible(prev => ({ ...prev, macbook: true })), 700),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const BannerButton = ({ children, variant = "primary", onClick }) => (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
        variant === "primary"
          ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          : "bg-white/10 text-white border border-white/30 hover:bg-white/20 dark:bg-black/20 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-black/30"
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );

  const InteractiveIcon = ({ Icon, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 dark:bg-black/30 dark:text-gray-200 dark:hover:bg-black/50 transition-all duration-300 transform hover:scale-110 ${className}`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );

  return (
    <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 h-auto overflow-hidden">
      {/* Left Banners */}
      <div className="flex flex-col">
        {/* PlayStation Banner */}
        <div
          className={`relative flex justify-end items-center px-12 pr-[334px] h-[328px] bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden cursor-pointer transform transition-all duration-700 ${
            isVisible.playstation ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          onMouseEnter={() => setHoveredBanner("playstation")}
          onMouseLeave={() => setHoveredBanner(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

          <div className={`absolute left-0 top-0 w-[343px] h-[343px] transform transition-all duration-500 ${
            hoveredBanner === "playstation" ? "scale-110 rotate-3" : "scale-100"
          }`}>
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center">
              <div className="text-white font-bold text-6xl">PS5</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-6 max-w-[338px] z-10">
            <div className="absolute top-6 right-6 flex gap-2">
              <InteractiveIcon Icon={Heart} onClick={() => console.log("Added to wishlist")} />
              <InteractiveIcon Icon={Play} onClick={() => console.log("Play video")} />
            </div>

            <div className="transform transition-all duration-500 hover:translate-y-[-4px]">
              <h2 className="text-[49px] leading-[40px] font-medium text-black dark:text-white mb-2 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
                PlayStation 5
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            </div>

            <p className="text-sm leading-6 font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-all duration-300">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>

            <div className="flex gap-3">
              <BannerButton onClick={() => console.log("Shop PlayStation")}>
                Shop Now
              </BannerButton>
            </div>
          </div>

          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity duration-300 ${
            hoveredBanner === "playstation" ? "opacity-100" : "opacity-0"
          }`} />
        </div>

        {/* AirPods & Vision Pro Banners */}
        <div className="grid grid-cols-2 h-[272px]">
          {/* AirPods */}
          <div
            className={`relative flex justify-end items-center px-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden cursor-pointer transform transition-all duration-700 ${
              isVisible.airpods ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            onMouseEnter={() => setHoveredBanner("airpods")}
            onMouseLeave={() => setHoveredBanner(null)}
          >
            <div className={`absolute left-[-60px] top-0 w-[200px] h-full flex items-center justify-center transform transition-all duration-500 ${
              hoveredBanner === "airpods" ? "scale-110 rotate-[-5deg]" : "scale-100"
            }`}>
              <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-100 dark:from-gray-600 dark:to-gray-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-gray-600 dark:text-gray-200 font-bold text-lg">🎧</div>
              </div>
            </div>

            <div className={`absolute top-4 right-4 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200 ${
              hoveredBanner === "airpods" ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0"
            }`}>
              $549
            </div>

            <div className="flex flex-col items-end gap-3 max-w-[140px] text-right z-10">
              <h3 className="text-[24px] leading-[28px] font-light text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                Apple AirPods Max
              </h3>
              <p className="text-xs leading-5 font-medium text-gray-500 dark:text-gray-300">
  Computational audio. Listen, it&apos;s powerful
</p>

              <div className="flex gap-2 mt-2">
                <InteractiveIcon 
                  Icon={ShoppingCart} 
                  onClick={() => console.log("Add to cart")}
                  className="bg-black/10 text-black hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                />
              </div>
            </div>
          </div>

          {/* Vision Pro */}
          <div
            className={`relative flex justify-end items-center px-6 bg-gradient-to-br from-gray-800 to-black overflow-hidden cursor-pointer transform transition-all duration-700 ${
              isVisible.vision ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            onMouseEnter={() => setHoveredBanner("vision")}
            onMouseLeave={() => setHoveredBanner(null)}
          >
            <div className={`absolute left-[-60px] top-0 w-[200px] h-full flex items-center justify-center transform transition-all duration-500 ${
              hoveredBanner === "vision" ? "scale-110 rotate-3" : "scale-100"
            }`}>
              <div className="w-32 h-20 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-gray-800 dark:text-white font-bold text-sm">👓</div>
              </div>
            </div>

            <div className={`absolute top-4 right-4 bg-white/10 dark:bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20 ${
              hoveredBanner === "vision" ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0"
            }`}>
              $3,499
            </div>

            <div className="flex flex-col items-end gap-3 max-w-[140px] text-right z-10">
              <h3 className="text-[24px] leading-[28px] font-light text-white hover:text-gray-200 transition-colors duration-300">
                Apple Vision Pro
              </h3>
              <p className="text-xs leading-5 font-medium text-gray-400 dark:text-gray-300">
                An immersive way to experience entertainment
              </p>

              <div className="flex gap-2 mt-2">
                <InteractiveIcon Icon={ShoppingCart} onClick={() => console.log("Add to cart")} />
              </div>
            </div>

            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Banner */}
      <div
        className={`relative flex items-center px-14 py-11 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden cursor-pointer transform transition-all duration-700 ${
          isVisible.macbook ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        onMouseEnter={() => setHoveredBanner("macbook")}
        onMouseLeave={() => setHoveredBanner(null)}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl" />

        <div className={`absolute top-10 right-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse ${
          hoveredBanner === "macbook" ? "scale-150" : "scale-100"
        }`} />
        <div className={`absolute bottom-20 right-32 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-200 ${
          hoveredBanner === "macbook" ? "scale-150" : "scale-100"
        }`} />

        <div className="flex flex-col gap-6 max-w-[360px] z-10">
          <div className="flex gap-2 mb-4">
            <InteractiveIcon Icon={Heart} className="bg-black/10 text-black hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" />
            <InteractiveIcon Icon={Play} className="bg-black/10 text-black hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" />
          </div>

          <div className="transform transition-all duration-500 hover:translate-y-[-4px]">
            <h2 className="text-[58px] leading-[52px] font-thin text-black dark:text-white mb-3">
              MacBook Air
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>

          <p className="text-sm leading-6 font-medium text-gray-600 dark:text-gray-300">
            The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>

          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold text-black dark:text-white">$1,299</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">$1,499</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
              Save $200
            </span>
          </div>

          <div className="flex gap-3">
            <BannerButton>
              <ShoppingCart className="w-4 h-4" /> Buy Now
            </BannerButton>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className={`absolute right-4 bottom-0 w-[292px] h-[502px] ${
          hoveredBanner === "macbook" ? "scale-105 rotate-1" : "scale-100"
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700 rounded-t-3xl flex items-center justify-center">
            <Image src="/bannersection/4.png" alt="MacBook Air" width={292} height={502} className="object-contain" />
          </div>
        </div>

        <div className={`absolute bottom-6 left-14 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg ${
          hoveredBanner === "macbook" ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
            <div>M3 Chip • 8GB RAM</div>
            <div>15.3" Liquid Retina</div>
            <div>18-hour battery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
