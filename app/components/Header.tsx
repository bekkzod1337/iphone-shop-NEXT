'use client';
import Image from 'next/image';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-[#B5B5B5] bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-[160px] h-[88px]">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={65}
            height={23}
          />
        </div>

        {/* Search Field */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-lg px-4 h-[56px] w-[372px]">
          <Search className="w-6 h-6 text-[#989898]" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-[#656565] placeholder-[#656565]/50 flex-1"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-[52px] text-[16px] font-medium">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black/30">About</a>
          <a href="#" className="text-black/30">Contact Us</a>
          <a href="#" className="text-black/30">Blog</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Heart className="w-8 h-8 text-black" strokeWidth={1.5} />
          <ShoppingCart className="w-8 h-8 text-black" strokeWidth={1.5} />
          <User className="w-8 h-8 text-black" strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
}
