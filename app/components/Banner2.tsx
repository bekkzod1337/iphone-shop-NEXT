"use client";

import Image from "next/image";

export default function Banner2() {
  return (
    <section className="relative w-full h-[448px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/banner2/1.png"
        alt="Banner background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (matn va button) */}
      <div className="relative z-10 flex flex-col items-center gap-10 text-center px-4">
        {/* Title */}
        <div>
          <h1 className="font-inter font-thin text-[72px] leading-[72px] tracking-[-0.01em] text-white">
            Big Summer Sale
          </h1>
          <p className="mt-2 font-inter text-[16px] leading-[32px] text-[#787878] max-w-[553px] mx-auto">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
        </div>

        {/* Button */}
        <button className="px-[56px] py-[16px] border border-white rounded-[6px] text-white hover:bg-white hover:text-black transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
