'use client';
import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#211C24] to-[#211C24]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center flex-wrap px-[160px] gap-y-[24px] gap-x-[213px] min-h-[632px] relative">

        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-[714px] min-w-[400px]">
          
          {/* Titles */}
          <div className="flex flex-col gap-6">
            <span className="text-white opacity-40 font-semibold text-[25px] leading-[32px]">
              Pro.Beyond.
            </span>
            <h1 className="text-white font-thin text-[96px] leading-[72px] tracking-[-0.01em]">
              IPhone 14 Pro
            </h1>
            <p className="text-[#919191] font-medium text-[18px] leading-[24px]">
              Created to change everything for the better. For everyone
            </p>
          </div>

          {/* Button */}
          <button className="border border-white rounded-md px-14 py-4 text-white text-[16px] font-medium">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="absolute right-40 bottom-0 w-[406px] h-[632px]">
          <Image
            src="/banner/1.png" // public ichida joylashgan rasm
            alt="iPhone 14 Pro"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
