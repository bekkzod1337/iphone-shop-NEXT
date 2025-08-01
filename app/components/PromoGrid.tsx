'use client'

import Image from 'next/image'

const promoItems = [
  {
    title: 'Popular Products',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: '/spotlight/1.png',
    bg: 'bg-white',
    textColor: 'text-black',
    buttonColor: 'border-black text-black',
  },
  {
    title: 'iPad Pro',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: '/spotlight/2.png',
    bg: 'bg-[#F9F9F9]',
    textColor: 'text-black',
    buttonColor: 'border-black text-black',
  },
  {
    title: 'Samsung Galaxy',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: '/spotlight/3.png',
    bg: 'bg-[#EAEAEA]',
    textColor: 'text-black',
    buttonColor: 'border-black text-black',
  },
  {
    title: 'Macbook Pro',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: '/spotlight/4.png',
    bg: 'bg-[#2C2C2C]',
    textColor: 'text-white',
    buttonColor: 'border-white text-white',
  },
]

export default function PromoGrid() {
  return (
    <section className="flex flex-row flex-wrap w-[1440px]">
      {promoItems.map((item, idx) => (
        <div
          key={idx}
          className={`relative flex flex-col justify-end px-8 py-14 gap-6 min-w-[280px] w-full sm:w-[360px] h-[640px] ${item.bg} isolate`}
        >
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain z-[1]"
          />

          {/* Overlay content */}
          <div className="z-[2] flex flex-col gap-4 max-w-[296px]">
            <h3 className={`text-[33px] leading-[48px] font-light ${item.textColor}`}>{item.title}</h3>
            <p className={`text-sm font-medium leading-6 text-[#919191]`}>{item.text}</p>
            <button
              className={`w-[191px] h-[56px] border rounded-md flex items-center justify-center ${item.buttonColor}`}
            >
              <span className="text-base font-medium">Shop Now</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
