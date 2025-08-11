// components/Footer.tsx
import Image from "next/image";
import { FC } from "react";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white px-8 md:px-40 py-16 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        {/* Info Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10">
          {/* Logo + Text */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Image
              src="/footer/1.png"
              alt="Logo"
              width={64}
              height={24}
              className="object-contain"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              We are a residential interior design firm located in Portland.
              Our boutique studio offers more than
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-wrap gap-[50px]">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-2">Services</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
              </ul>
            </div>

            {/* Assistance */}
            <div>
              <h4 className="font-semibold text-white mb-2">
                Assistance to the buyer
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-gray-400 transition-colors duration-200" size={16} />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-gray-400 transition-colors duration-200" size={16} />
          </a>
          <a href="#" aria-label="Tiktok">
            <FaTiktok className="text-white hover:text-gray-400 transition-colors duration-200" size={16} />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-gray-400 transition-colors duration-200" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
