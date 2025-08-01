'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <section className="flex flex-wrap justify-between items-center px-40 py-0 gap-y-6 gap-x-[213px] w-full h-[632px] bg-gradient-to-r from-[#211C24] to-[#211C24] relative">
      {/* Left Content */}
      <div className="flex flex-col gap-6 w-[714px] min-w-[400px] h-[256px]">
        {/* Titles */}
        <div className="flex flex-col gap-6">
          <span className="text-white text-[25px] font-semibold leading-[32px] opacity-40">
            Pro.Beyond.
          </span>
          <h1 className="text-white text-[96px] font-thin leading-[72px] tracking-[-0.01em]">
            IPhone 14 Pro
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[#919191] text-[18px] font-medium leading-[24px]">
          Created to change everything for the better. For everyone
        </p>

        {/* Button */}
        <button className="flex justify-center items-center px-14 py-4 gap-2 w-[191px] h-[56px] border border-white rounded-md">
          <span className="text-white text-[16px] font-medium leading-[24px] text-center">
            Shop Now
          </span>
        </button>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 bottom-0 w-[406px] h-[632px]">
        <Image
          src="/banner/1.png" // rasm `public/` papkada bo'lishi kerak
          alt="iPhone Banner"
          width={406}
          height={632}
          className="object-contain"
        />
      </div>
    </section>
  );
}
