"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown,Sparkles } from "lucide-react";

export default function Navbar() {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  return (
    <nav className="fixed top-4 w-full z-50 px-20 pt-4">
      <div className="max-w-7xl mx-auto bg-white backdrop-blur-md border border-gray-200 shadow-md rounded-2xl px-8 h-20 flex items-center justify-between">

<Link href="/" className="flex items-center gap-3">
  {/* Logo Image */}
  <div className="flex items-center justify-center">
    <Image
      src="/images/logo3.png"
      alt="LexiGuard"
      width={60}
      height={22}
      className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
      priority
    />
  </div>

  {/* Brand Name with logo color #B5A491 */}
 </Link>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">

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
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-5 space-y-4 animate-fadeIn">

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">Document Generator</p>
                  <p className="text-xs text-gray-500">
                    Create legal docs with guided flow
                  </p>
                </div>

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">Risk Detection</p>
                  <p className="text-xs text-gray-500">
                    Identify missing clauses
                  </p>
                </div>

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">Clause Library</p>
                  <p className="text-xs text-gray-500">
                    Pre-built legal clauses
                  </p>
                </div>

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">Plain English</p>
                  <p className="text-xs text-gray-500">
                    Easy explanations
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* Pricing */}
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
              Resources <ChevronDown size={16} />
            </div>

            {resourceOpen && (
              <div className="absolute top-10 left-0 w-64 bg-white border rounded-xl shadow-xl p-5 space-y-4">

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">Blog</p>
                  <p className="text-xs text-gray-500">
                    Legal guides & updates
                  </p>
                </div>

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">FAQs</p>
                  <p className="text-xs text-gray-500">
                    Common questions
                  </p>
                </div>

                <div className="hover:bg-gray-50 p-2 rounded">
                  <p className="font-semibold text-sm">Help Center</p>
                  <p className="text-xs text-gray-500">
                    Support & tutorials
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* Contact */}
          <Link href="#" className="hover:text-[#B5A491]">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">

            <Link
    href="/ai"
    className="flex items-center gap-2 bg-gradient-to-r from-[#B5A491] to-[#9c8c7c] text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    <Sparkles size={18} />
    Connect with AI
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
      </div>
    </nav>
  );
}