"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-4 w-full z-50 px-4 md:px-20">
      <div className="max-w-7xl mx-auto bg-white border shadow-md rounded-2xl px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo3.png"
            alt="LexiGuard"
            width={40} // smaller for mobile
            height={20}
            className="object-contain hover:scale-110 transition"
          />
        </Link>

        {/* Menu (VISIBLE ON MOBILE TOO) */}
        <div className="flex items-center gap-2 md:gap-10 overflow-x-auto whitespace-nowrap text-[13px] md:text-[15px] font-medium text-gray-700 scrollbar-hide">

          {/* Features */}
          <div
            className="relative"
            onMouseEnter={() => setFeatureOpen(true)}
            onMouseLeave={() => setFeatureOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#B5A491]">
              Features <ChevronDown size={14} />
            </div>

            {/* Desktop Dropdown */}
            <div className="hidden md:block">
              {featureOpen && (
                <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-5 space-y-3">
                  {[
                    "Document Generator",
                    "Risk Detection",
                    "Clause Library",
                    "Plain English",
                  ].map((item) => (
                    <div key={item} className="hover:bg-gray-50 p-2 rounded cursor-pointer">
                      <p className="font-semibold text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link href="#" className="hover:text-[#B5A491]">
            Pricing
          </Link>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => setResourceOpen(true)}
            onMouseLeave={() => setResourceOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#B5A491]">
              Resources <ChevronDown size={14} />
            </div>

            {/* Desktop Dropdown */}
            <div className="hidden md:block">
              {resourceOpen && (
                <div className="absolute top-10 left-0 w-64 bg-white border rounded-xl shadow-xl p-5 space-y-3">
                  {["Blog", "FAQs", "Help Center"].map((item) => (
                    <div key={item} className="hover:bg-gray-50 p-2 rounded cursor-pointer">
                      <p className="font-semibold text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>
           <Link href="#" className="hover:text-[#B5A491]">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/ai"
            className="flex items-center gap-2 bg-gradient-to-r from-[#B5A491] to-[#9c8c7c] text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            <Sparkles size={18} />
            Generate Template
          </Link>

          <Link href="/login" className="hover:text-[#B5A491]">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-[#B5A491] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (ONLY BUTTONS) */}
      {mobileMenu && (
        <div className="md:hidden mt-3 bg-white rounded-2xl shadow-lg border p-5 space-y-4">

          <Link
            href="/ai"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#B5A491] to-[#9c8c7c] text-white px-5 py-2 rounded-full"
          >
            <Sparkles size={18} />
            Connect with AI
          </Link>

          <Link href="/login" className="block text-center">
            Login
          </Link>

          <Link
            href="/signup"
            className="block bg-[#B5A491] text-white text-center px-5 py-2 rounded-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}