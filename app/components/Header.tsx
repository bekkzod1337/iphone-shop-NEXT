'use client';

import Image from 'next/image';
import { Search, Heart, ShoppingCart, User } from 'lucide-react'; // yoki o'zing yoqtirgan ikon kutubxonasi

export default function Header() {
  return (
    <header className="flex justify-between items-center px-40 py-4 gap-8 w-full h-[88px] bg-white border-b border-[#B5B5B5]">
      {/* Logo */}
      <div className="flex items-center w-[65.4px] h-[22.87px]">
        <Image src="/Logo.png" alt="Logo" width={65.4} height={22.87} />
      </div>

      {/* Search Field */}
      <div className="flex items-center gap-2 w-[372px] h-[56px] bg-[#F5F5F5] rounded-lg px-4">
        <Search className="w-6 h-6 text-[#989898]" />
        <span className="text-sm text-[#656565] opacity-50 font-medium">Search</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-[52px] w-[369px] h-[19px]">
        <a href="#" className="text-black text-[16px] font-medium">Home</a>
        <a href="#" className="text-black text-[16px] font-medium opacity-30">About</a>
        <a href="#" className="text-black text-[16px] font-medium opacity-30">Contact Us</a>
        <a href="#" className="text-black text-[16px] font-medium opacity-30">Blog</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center justify-center gap-6 w-[144px] h-[32px]">
        <Heart className="w-8 h-8 text-black" />
        <ShoppingCart className="w-8 h-8 text-black" />
        <User className="w-8 h-8 text-black" />
      </div>
    </header>
  );
}
