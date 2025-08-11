// components/Categories.tsx
"use client";

import { FC, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Phones", icon: "/icons/Phones.png" },
  { name: "Smart Watches", icon: "/icons/Smartwatches.png" },
  { name: "Cameras", icon: "/icons/Cameras.png" },
  { name: "Headphones", icon: "/icons/Headphones.png" },
  { name: "Computers", icon: "/icons/Computers.png" },
  { name: "Gaming", icon: "/icons/Gaming.png" },
  { name: "Drones", icon: "/icons/Drones.png" },
  { name: "Speakers", icon: "/icons/Speakers.png" },
];

const Categories: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] px-40 py-20 flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-between items-center max-w-[1120px] mx-auto">
        <h2 className="text-[24px] font-medium tracking-[0.01em]">
          Browse By Category
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex gap-8 max-w-[1120px] mx-auto overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-2 min-w-[160px] h-[128px] bg-[#EDEDED] rounded-[15px] p-6 hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Image src={cat.icon} alt={cat.name} width={48} height={48} />
            <span className="text-[16px] font-medium text-center">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
