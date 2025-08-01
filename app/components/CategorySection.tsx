'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { label: 'Phones', icon: '/icons/phones.png' },
  { label: 'Smart Watches', icon: '/icons/smartWatches.png' },
  { label: 'Cameras', icon: '/icons/cameras.png' },
  { label: 'Headphones', icon: '/icons/headphones.png' },
  { label: 'Computers', icon: '/icons/computers.png' },
  { label: 'Gaming', icon: '/icons/gaming.png' },
];

export default function CategorySection() {
  return (
    <section className="flex flex-col items-start px-40 py-20 gap-8 w-full bg-[#FAFAFA]">
      {/* Header */}
      <div className="flex justify-between items-center w-[1120px]">
        <h2 className="text-[24px] font-medium leading-[32px] text-black">Browse By Category</h2>
        <div className="flex gap-4">
          <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-8 w-[1120px] overflow-x-auto scrollbar-hide">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center px-[52px] py-6 gap-2 w-[160px] h-[128px] bg-[#EDEDED] rounded-[15px] flex-shrink-0"
          >
            <img src={cat.icon} alt={cat.label} className="w-12 h-12" />
            <p className="text-[16px] font-medium text-center text-black">{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
