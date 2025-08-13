// components/Footer.tsx
'use client'
import Image from "next/image";
import { FC, useState } from "react";

const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      color: "hover:bg-blue-500" 
    },
    { 
      name: "Facebook", 
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      color: "hover:bg-blue-600" 
    },
    { 
      name: "Tiktok", 
      icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
      color: "hover:bg-pink-500" 
    },
    { 
      name: "Instagram", 
      icon: "M12.017 0C8.396 0 7.932.013 7.03.052 2.695.14.014 2.821 0 7.156v9.688c.014 4.335 2.695 7.016 7.03 7.104.902.039 1.366.052 4.987.052s4.085-.013 4.987-.052c4.335-.088 7.016-2.769 7.03-7.104V7.156C23.986 2.821 21.305.14 16.97.052 16.068.013 15.604 0 12.017 0zM12 5.351A6.648 6.648 0 1018.649 12 6.648 6.648 0 0012 5.351zm0 10.976A4.328 4.328 0 117.672 12 4.328 4.328 0 0112 16.327zM18.908 4.14a1.54 1.54 0 101.54 1.54 1.54 1.54 0 00-1.54-1.54z",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500" 
    }
  ];

  const quickLinks = [
    "About Us", "Contact", "Privacy Policy", "Terms of Service", "Careers"
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white px-8 md:px-40 py-16 w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/5 to-yellow-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-12">
          
          {/* Top Section - Logo, Description, Newsletter */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12">
            
            {/* Company Info */}
            <div className="flex flex-col gap-6 max-w-md">
              <div className="group cursor-pointer">
                <Image
                  src="/footer/1.png"
                  alt="Logo"
                  width={64}
                  height={24}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                We are a residential interior design firm located in Portland.
                Our boutique studio offers more than exceptional design solutions.
              </p>

              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Stay Updated</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="flex flex-wrap gap-[50px] lg:gap-[80px]">
              
              {/* Services */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-4 text-lg relative">
                  Services
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {["Bonus program", "Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"].map((item, index) => (
                    <li key={index} className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Assistance */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-4 text-lg relative">
                  Customer Support
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {["Find an order", "Terms of delivery", "Exchange and return", "Guarantee", "FAQ", "Terms of use"].map((item, index) => (
                    <li key={index} className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-4 text-lg relative">
                  Contact Info
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                </h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Portland, Oregon
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +1 (555) 123-4567
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    hello@company.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800"></div>

          {/* Bottom Section */}
          <div className="flex flex-wrap justify-between items-center gap-6">
            
            {/* Copyright and Quick Links */}
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-gray-400 text-sm">
                © 2024 Company Name. All rights reserved.
              </p>
              
              {/* Quick Links */}
              <div className="hidden md:flex items-center gap-4">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.name}
                  className="group relative p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                  
                  {/* Tooltip */}
                  {hoveredIcon === social.name && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                      {social.name}
                    </div>
                  )}
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${social.color.replace('hover:', '')}`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-500 rounded-full text-gray-400 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;