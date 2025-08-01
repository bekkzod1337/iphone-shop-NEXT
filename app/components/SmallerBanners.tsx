'use client';

import Image from 'next/image';

export default function SmallerBanners() {
  return (
    <div className="flex flex-row items-start w-[1440px] h-[600px]">
      {/* Left Banners */}
      <div className="flex flex-col justify-center items-end w-[720px] h-[600px]">
        {/* Wide Square */}
        <div className="relative flex justify-end items-center px-[48px] pr-[48px] pl-[334px] w-[720px] h-[328px] bg-white">
          {/* PlayStation Image */}
          <div className="absolute left-0 right-[360px] top-0 h-[343px] bg-[url('/bannersection/1.png')] z-0" />

          {/* Title+Text */}
          <div className="flex flex-col justify-center items-end gap-4 w-[338px] h-[128px] z-10">
            <h2 className="text-[49px] font-medium leading-[40px] text-black">PlayStation 5</h2>
            <p className="text-sm leading-6 text-[#919191]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* Squares */}
        <div className="flex flex-row items-start w-[720px] h-[272px]">
          {/* Square Banner - AirPods */}
          <div className="relative flex justify-end items-center px-[48px] pl-[156px] w-[360px] h-[272px] bg-[#EDEDED]">
            {/* Image */}
            <div className="absolute left-0 right-[256px] top-0 h-[272px] bg-[url('/bannersection/2.png')] z-10" />

            {/* Title+Text */}
            <div className="flex flex-col justify-center items-center gap-2 w-[160px] h-[143px] z-0">
              <h3 className="text-[29px] font-light leading-[40px] text-black">Apple AirPods Max</h3>
              <p className="text-sm font-medium leading-6 text-[#919191]">Computational audio. Listen, it's powerful</p>
            </div>
          </div>

          {/* Square Banner - Vision Pro */}
          <div className="relative flex justify-end items-center px-[48px] pl-[156px] w-[360px] h-[272px] bg-[#353535]">
            {/* Image */}
            <div className="absolute left-0 top-[15%] h-[272px] transform -scale-x-100 bg-[url('/bannersection/4.png')] z-9999" />

            {/* Title+Text */}
            <div className="flex flex-col justify-center items-center gap-2 w-[160px] h-[144px] z-0">
              <h3 className="text-[29px] font-light leading-[40px] text-white">Apple Vision Pro</h3>
              <p className="text-sm font-medium leading-6 text-[#919191]">An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Banner - Macbook */}
      <div className="relative flex items-center px-[56px] pr-[264px] gap-[1px] w-[720px] h-[600px] bg-[#EDEDED]">
        {/* Content */}
        <div className="flex flex-col items-start gap-4 w-[360px] h-[272px] z-0">
          {/* Title+Text */}
          <div className="flex flex-col items-start gap-4 h-[200px]">
            <h2 className="text-[64px] font-thin leading-[56px] text-black">Macbook Air</h2>
            <p className="text-sm font-medium leading-6 text-[#919191]">
              The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>
          </div>

          {/* Button */}
          <button className="flex justify-center items-center px-[56px] py-[16px] gap-2 w-[191px] h-[56px] border border-black rounded-[6px]">
            <span className="text-base font-medium leading-6 text-black text-center">Buy now</span>
          </button>
        </div>

        {/* MacBook Pro Image */}
        <div className="absolute bottom-[49px] left-[calc(50%+107px)] w-[292px] h-[502px] bg-[url('/bannersection/4.png')] bg-contain bg-no-repeat z-10" />
      </div>
    </div>
  );
}
