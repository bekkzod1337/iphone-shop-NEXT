'use client';
import { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function EnhancedHeader() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(1);

  return (
    <>
      <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-[160px] h-[88px]">
          
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg p-2 transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
              <div className="w-[65px] h-[23px] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <Image src={"/logo.png"} alt="Logo" width={65} height={23} className="object-contain" />
              </div>
            </div>
          </div>

          {/* Search Field */}
          <div
            className={`hidden lg:flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 h-[56px] w-[372px] border-2 transition-all duration-300 ${
              isSearchFocused
                ? 'border-blue-500 bg-white shadow-lg dark:bg-gray-900'
                : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Search
              className={`w-6 h-6 transition-colors duration-300 ${
                isSearchFocused ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'
              }`}
              strokeWidth={1.5}
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 flex-1"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[52px] text-[16px] font-medium">
            {[
              { name: 'Home', active: true },
              { name: 'About', active: false },
              { name: 'Contact Us', active: false },
              { name: 'Blog', active: false }
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`relative transition-all duration-300 group ${
                  item.active
                    ? 'text-black dark:text-white'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    item.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button className="relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 group">
              <Heart className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-red-500" strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 group">
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-500" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User */}
            <button className="relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 group">
              <User className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-green-500" strokeWidth={1.5} />
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-75" />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300 transform transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-4">
          <div
            className={`flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 h-[48px] border-2 transition-all duration-300 ${
              isSearchFocused ? 'border-blue-500 bg-white dark:bg-gray-900 shadow-lg' : 'border-transparent'
            }`}
          >
            <Search
              className={`w-5 h-5 transition-colors duration-300 ${
                isSearchFocused ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'
              }`}
              strokeWidth={1.5}
            />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 flex-1"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg z-40 transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav className="px-4 py-6 space-y-4">
          {[
            { name: 'Home', active: true },
            { name: 'About', active: false },
            { name: 'Contact Us', active: false },
            { name: 'Blog', active: false }
          ].map((item, index) => (
            <a
              key={item.name}
              href="#"
              className={`block py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                item.active
                  ? 'text-black dark:text-white bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 top-[88px]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
