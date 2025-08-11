"use client";

import Image from "next/image";

export default function Banners() {
  return (
    <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 h-auto">
      {/* Left Banners */}
      <div className="flex flex-col">
        {/* Playstation Banner */}
        <div className="relative flex justify-end items-center px-12 pr-[334px] h-[328px] bg-white">
          <Image
            src="/bannersection/1.png"
            alt="PlayStation"
            width={343}
            height={343}
            className="absolute left-0 top-0 object-contain"
          />
          <div className="flex flex-col justify-center items-end gap-4 max-w-[338px] z-10">
            <h2 className="text-[49px] leading-[40px] font-medium text-black">
              Playstation 5
            </h2>
            <p className="text-sm leading-6 font-medium text-[#919191]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* Two Small Banners */}
        <div className="grid grid-cols-2 h-[272px]">
          {/* AirPods */}
          <div className="relative flex justify-end items-center px-12 pl-[156px] bg-[#EDEDED]">
            <Image
              src="/bannersection/2.png"
              alt="AirPods Max"
              fill
              className="absolute left-0 top-0 object-contain -ml-32"
            />
            <div className="flex flex-col items-center gap-2 max-w-[160px] text-center z-10">
              <h3 className="text-[29px] leading-[40px] font-light text-black">
                Apple AirPods Max
              </h3>
              <p className="text-sm leading-6 font-medium text-[#919191]">
                Computational audio. Listen, its powerful
              </p>
            </div>
          </div>

          {/* Vision Pro */}
          <div className="relative flex justify-end items-center px-12 pl-[156px] bg-[#353535]">
            <Image
              src="/bannersection/3.png"
              alt="Apple Vision Pro"
              fill
              className="absolute left-0 top-0 object-contain -ml-21"
            />
            <div className="flex flex-col items-center gap-2 max-w-[160px] text-center z-10">
              <h3 className="text-[29px] leading-[40px] font-light text-white">
                Apple Vision Pro
              </h3>
              <p className="text-sm leading-6 font-medium text-[#919191]">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Banner */}
      <div className="relative flex items-center px-14 pr-[264px] py-11 bg-[#EDEDED]">
        <div className="flex flex-col gap-4 max-w-[360px]">
          <h2 className="text-[64px] leading-[56px] font-thin text-black">
            Macbook Air
          </h2>
          <p className="text-sm leading-6 font-medium text-[#919191]">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="px-[56px] py-4 border border-black rounded-md text-black font-medium text-base">
            Buy Now
          </button>
        </div>
        <Image
          src="/bannersection/4.png"
          alt="MacBook Air"
          width={292}
          height={502}
          className="absolute right-0 bottom-[49px]"
        />
      </div>
    </section>
  );
}
