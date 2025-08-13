"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner2() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section 
      className="relative w-full h-[448px] flex items-center justify-center overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner2/1.png"
          alt="Banner background"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />
        
        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(0,0,0,0.2) 0%, 
              rgba(0,0,0,0.4) 30%, 
              rgba(0,0,0,0.7) 100%)`
          }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Content */}
      <div className={`relative z-10 flex flex-col items-center gap-10 text-center px-4 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Decorative Elements */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
        </div>

        {/* Enhanced Title */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-full scale-150"></div>
          
          <h1 className="relative font-inter font-thin text-[72px] leading-[72px] tracking-[-0.01em] text-white drop-shadow-2xl">
            <span className="inline-block animate-pulse">Big</span>{" "}
            <span 
              className="inline-block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent animate-pulse"
              style={{ animationDelay: '0.5s' }}
            >
              Summer
            </span>{" "}
            <span 
              className="inline-block animate-pulse"
              style={{ animationDelay: '1s' }}
            >
              Sale
            </span>
          </h1>
          
          {/* Glowing underline */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced Description */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p className="font-inter text-[16px] leading-[32px] text-white/90 max-w-[553px] mx-auto backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10 shadow-2xl">
            <span className="font-medium text-white">Commodo fames vitae vitae leo mauris in.</span> 
            <span className="text-white/80"> Eu consequat.</span>
          </p>
        </div>

        {/* Enhanced Button */}
        <div className={`transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <button className="group relative px-[56px] py-[16px] border-2 border-white rounded-[6px] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
            
            {/* Button background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Shop Now
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Button glow */}
            <div className="absolute inset-0 rounded-[6px] bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 blur-xl transition-all duration-300"></div>
          </button>
        </div>

        {/* Decorative bottom element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-32 right-32 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-6 h-6 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Enhanced Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"></div>
    </section>
  );
}