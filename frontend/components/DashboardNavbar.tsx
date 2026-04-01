"use client";

import { useState, useRef, useEffect } from "react";
import PricingSection from "./Pricing";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dpRef.current && !dpRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dpRef]);

  return (
    <>
      <div className="flex justify-between items-center bg-white px-4 md:px-8 py-3 border-b border-gray-200 shadow-sm sticky top-0 z-50">
        
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 max-h-10 cursor-pointer">
            <img
              src="/images/logo3.png"
              alt="logo"
              className="w-10 h-10 md:w-13 md:h-13 object-contain"
            />
          </div>
        </Link>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setPlansOpen(true)}
            className="px-5 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#665339] hover:opacity-90 transition shadow-md"
          >
            Upgrade Plan
          </button>

          <span className="text-gray-700 font-medium cursor-pointer hover:text-[#665339] transition">
            My Plans
          </span>

          {/* DP Dropdown */}
          <div className="relative" ref={dpRef}>
            <button
              className="w-10 h-10 rounded-full bg-[#463826] text-white flex items-center justify-center font-medium text-sm shadow-md hover:scale-105 transition"
              onClick={() => setOpen(!open)}
            >
              FN
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                <ul className="flex flex-col">
                  <li className="px-4 py-3 cursor-pointer text-sm text-gray-800 font-medium hover:bg-[#F3EED9]">
                    Profile
                  </li>
                  <li className="px-4 py-3 cursor-pointer text-sm text-gray-800 font-medium hover:bg-[#F3EED9]">
                    Edit Profile
                  </li>
                  <li className="px-4 py-3 cursor-pointer text-sm text-red-500 font-medium hover:bg-[#FFEDEE]">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-40">
            <div className="flex flex-col p-4 gap-4">
              
              <button
                onClick={() => {
                  setPlansOpen(true);
                  setMobileOpen(false);
                }}
                className="w-full px-5 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#665339]"
              >
                Upgrade Plan
              </button>

              <span className="text-gray-700 font-medium">
                My Plans
              </span>

              <div className="border-t pt-3 flex flex-col gap-2">
                <span className="text-sm text-gray-800 font-medium">
                  Profile
                </span>
                <span className="text-sm text-gray-800 font-medium">
                  Edit Profile
                </span>
                <span className="text-sm text-red-500 font-medium">
                  Logout
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pricing Modal Popup */}
      {plansOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-end">
          <div className="bg-white w-full md:w-[90%] h-[90%] rounded-t-3xl overflow-y-auto relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setPlansOpen(false)}
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Pricing Component */}
            <PricingSection />
          </div>
        </div>
      )}
    </>
  );
}