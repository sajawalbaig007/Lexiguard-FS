"use client";

import { useState, useRef, useEffect } from "react";
import PricingPlans from "./PricingPlans";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
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
    <div className="flex justify-between items-center bg-white px-8 py-3 border-b border-gray-200 shadow-sm sticky top-0 ">
      
      {/* Logo */}
      <div className="flex items-center gap-3 max-h-10">
        <img
          src="/images/logo3.png"
          alt="logo"
          className="w-13 h-13 object-contain"
        />
        <h1 className="font-bold text-xl text-gray-800">LexiGuard</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setPlansOpen(true)}
          className="px-5 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#665339] hover:opacity-90 transition shadow-md"
        >
          Upgrade Plan
        </button>

        <span className="text-gray-700 font-medium cursor-pointer hover:text-[#665339] transition">
          My Plans
        </span>

        {/* DP with Dropdown */}
        <div className="relative" ref={dpRef}>
          <button
            className="w-10 h-10 rounded-full bg-[#463826] text-white flex items-center justify-center font-medium text-sm shadow-md hover:scale-105 transition"
            onClick={() => setOpen(!open)}
          >
            FN
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 animate-slide-down">
              <ul className="flex flex-col">
                <li className="px-4 py-3 cursor-pointer text-sm text-gray-800 font-medium hover:bg-[#F3EED9] hover:text-[#463826] transition">
                  Profile
                </li>
                <li className="px-4 py-3 cursor-pointer text-sm text-gray-800 font-medium hover:bg-[#F3EED9] hover:text-[#463826] transition">
                  Edit Profile
                </li>
                <li className="px-4 py-3 cursor-pointer text-sm text-red-500 font-medium hover:bg-[#FFEDEE] hover:text-red-600 transition">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <PricingPlans open={plansOpen} onClose={() => setPlansOpen(false)} />
    </div>
  );
}