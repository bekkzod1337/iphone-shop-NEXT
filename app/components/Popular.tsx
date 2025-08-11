'use client';
import Image from 'next/image';

interface Banner {
  id: number;
  title: string;
  text: string;
  img: string;
  bg: string;
  textColor: string;
  btnBorder: string;
  btnTextColor: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: 'Popular Products',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    img: '/popular/1.png',
    bg: 'bg-white',
    textColor: 'text-black',
    btnBorder: 'border-black',
    btnTextColor: 'text-black',
  },
  {
    id: 2,
    title: 'iPad Pro',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    img: '/popular/2.png',
    bg: 'bg-[#F9F9F9]',
    textColor: 'text-black',
    btnBorder: 'border-black',
    btnTextColor: 'text-black',
  },
  {
    id: 3,
    title: 'Samsung Galaxy',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    img: '/popular/3.png',
    bg: 'bg-[#EAEAEA]',
    textColor: 'text-black',
    btnBorder: 'border-black',
    btnTextColor: 'text-black',
  },
  {
    id: 4,
    title: 'Macbook Pro',
    text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    img: '/popular/4.png',
    bg: 'bg-[#2C2C2C]',
    textColor: 'text-white',
    btnBorder: 'border-white',
    btnTextColor: 'text-white',
  },
];

export default function Popular() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-[1440px] mx-auto">
      {banners.map((b) => (
        <div
          key={b.id}
          className={`relative flex flex-col justify-end px-6 pb-8 pt-[300px] gap-4 h-[500px] ${b.bg} isolate`}
        >
          {/* Image */}
          <div className="absolute top-0 left-0 w-full h-[300px]">
            <Image
              src={b.img}
              alt={b.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-3 z-10">
            <h2 className={`text-2xl font-light ${b.textColor}`}>{b.title}</h2>
            <p className="text-sm font-medium leading-6 text-[#919191]">
              {b.text}
            </p>
            <button
              className={`flex justify-center items-center px-8 py-3 border rounded-md ${b.btnBorder} ${b.btnTextColor}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
