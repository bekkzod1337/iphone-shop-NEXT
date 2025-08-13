'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-[#211C24] to-[#211C24] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center flex-wrap px-[160px] gap-y-[24px] gap-x-[213px] min-h-[632px] relative">
        {/* Left Content */}
        <div 
          className={`flex flex-col gap-6 max-w-[714px] min-w-[400px] transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          {/* Titles */}
          <div className="flex flex-col gap-6">
            <span 
              className={`text-white opacity-40 font-semibold text-[25px] leading-[32px] transition-all duration-1200 delay-200 ease-out ${
                isLoaded ? 'translate-y-0 opacity-40' : 'translate-y-5 opacity-0'
              }`}
            >
              Pro.Beyond.
            </span>
            <h1 
              className={`text-white font-thin text-[96px] leading-[72px] tracking-[-0.01em] transition-all duration-1200 delay-400 ease-out hover:scale-105 hover:text-blue-200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              IPhone 14 Pro
            </h1>
            <p 
              className={`text-[#919191] font-medium text-[18px] leading-[24px] transition-all duration-1200 delay-600 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              Created to change everything for the better. For everyone
            </p>
          </div>
          
          {/* Button */}
          <button 
            className={`border border-white rounded-md px-14 py-4 text-white text-[16px] font-medium transition-all duration-500 ease-out hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ 
              transitionDelay: isLoaded ? '800ms' : '0ms',
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative">
              Shop Now
              <span 
                className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-opacity duration-300 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
              >
                Shop Now
              </span>
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div 
          className={`absolute right-40 bottom-0 w-[406px] h-[632px] transition-all duration-1500 delay-300 ease-out hover:scale-105 ${
            isLoaded ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-20 opacity-0 rotate-12'
          }`}
        >
          <div className="relative w-full h-full">
            {/* Glow effect */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-2000 ${
                isLoaded ? 'scale-100 opacity-30' : 'scale-50 opacity-0'
              }`}
              style={{ filter: 'blur(60px)' }}
            />
            
            {/* Floating animation container */}
            <div 
              className="w-full h-full"
              style={{
                animation: isLoaded ? 'float 6s ease-in-out infinite' : 'none'
              }}
            >
              <Image
                src="/banner/1.png"
                alt="iPhone 14 Pro"
                fill
                className="object-contain transition-all duration-700 hover:filter hover:brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className={`absolute top-10 left-20 w-2 h-2 bg-white rounded-full transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-20 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            animation: isLoaded ? 'twinkle 3s ease-in-out infinite' : 'none'
          }}
        />
        <div 
          className={`absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 delay-1200 ${
            isLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            animation: isLoaded ? 'twinkle 4s ease-in-out infinite 1s' : 'none'
          }}
        />
        <div 
          className={`absolute bottom-20 left-32 w-1.5 h-1.5 bg-purple-400 rounded-full transition-all duration-1000 delay-1400 ${
            isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            animation: isLoaded ? 'twinkle 5s ease-in-out infinite 2s' : 'none'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
      `}</style>
    </section>
  );
}