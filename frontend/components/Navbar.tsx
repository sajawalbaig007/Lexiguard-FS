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
  <div className="max-w-7xl mx-auto 
                  bg-white
                  border dark:border-gray-700 
                  shadow-md rounded-2xl px-6 h-16 md:h-20 
                  flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo3.png"
        alt="LexiGuard"
        width={50}
        height={16}
        className="object-contain hover:scale-110 h-14 md:h-17 transition"
      />
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700 dark:text-gray-300">
      {/* Features */}
      <div
        className="relative"
        onMouseEnter={() => setFeatureOpen(true)}
        onMouseLeave={() => setFeatureOpen(false)}
      >
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#B5A491]">
          Features <ChevronDown size={16} />
        </div>
        {featureOpen && (
          <div className="absolute top-10 left-0 w-72 
                          bg-white dark:bg-gray-800 
                          border dark:border-gray-700 
                          rounded-xl shadow-xl p-5 space-y-3">
            {["Document Generator", "Risk Detection", "Clause Library", "Plain English"].map((item) => (
              <div key={item} className="hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded cursor-pointer">
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link href="#" className="hover:text-[#B5A491]">Pricing</Link>

      {/* Resources */}
      <div
        className="relative"
        onMouseEnter={() => setResourceOpen(true)}
        onMouseLeave={() => setResourceOpen(false)}
      >
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#B5A491]">
          Resources <ChevronDown size={16} />
        </div>
        {resourceOpen && (
          <div className="absolute top-10 left-0 w-64 
                          bg-white dark:bg-gray-800 
                          border dark:border-gray-700 
                          rounded-xl shadow-xl p-5 space-y-3">
            {["Blog", "FAQs", "Help Center"].map((item) => (
              <div key={item} className="hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded cursor-pointer">
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link href="#" className="hover:text-[#B5A491]">Contact</Link>
    </div>

    {/* Desktop Right */}
    <div className="hidden md:flex items-center gap-5">
      <Link
        href="/ai"
        className="flex items-center gap-2 bg-[#B5A491] text-white px-5 py-2 rounded-full hover:scale-105 transition"
      >
        <Sparkles size={18} />
        Connect
      </Link>

      <Link href="/login" className="text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100">Login</Link>

      <Link href="/signup" className="bg-[#B5A491] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
        Get Started
      </Link>
    </div>

    {/* Mobile Hamburger */}
    <div className="md:hidden">
      <button onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <X size={26} className="text-gray-900 dark:text-gray-200"/> : <Menu size={26} className="text-gray-900 dark:text-gray-200"/>}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenu && (
    <div className="md:hidden mt-3 
                    bg-white dark:bg-gray-800 
                    rounded-2xl shadow-lg border dark:border-gray-700 p-6 space-y-4">
      {/* Features */}
      <div>
        <div
          onClick={() => setFeatureOpen(!featureOpen)}
          className="flex justify-between items-center cursor-pointer py-2 text-gray-900 dark:text-gray-200"
        >
          <span>Features</span>
          <ChevronDown size={16} />
        </div>
        {featureOpen && (
          <div className="mt-2 pl-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>Document Generator</p>
            <p>Risk Detection</p>
            <p>Clause Library</p>
            <p>Plain English</p>
          </div>
        )}
      </div>

      <Link href="#" className="block py-2 text-gray-900 dark:text-gray-200">Pricing</Link>

      {/* Resources */}
      <div>
        <div
          onClick={() => setResourceOpen(!resourceOpen)}
          className="flex justify-between items-center cursor-pointer py-2 text-gray-900 dark:text-gray-200"
        >
          <span>Resources</span>
          <ChevronDown size={16} />
        </div>
        {resourceOpen && (
          <div className="mt-2 pl-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>Blog</p>
            <p>FAQs</p>
            <p>Help Center</p>
          </div>
        )}
      </div>

      <Link href="#" className="block py-2 text-gray-900 dark:text-gray-200">Contact</Link>

      {/* Buttons */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3">
        <Link
          href="/ai"
          className="flex items-center justify-center gap-2 bg-[#B5A491] text-white px-5 py-2 rounded-full"
        >
          <Sparkles size={18} />
          Connect 
        </Link>

        <Link href="/login" className="text-gray-900 dark:text-gray-200 text-center">Login</Link>

        <Link
          href="/signup"
          className="bg-bg-[#B5A491] text-white text-center px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  )}
</nav>
  );
}