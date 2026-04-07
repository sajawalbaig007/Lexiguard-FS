"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F7] text-gray-700 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & tagline */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border">
              <Image
                src="/images/logo2.png"
                alt="LexiGuard"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            {/* Brand Name like navbar */}
            <div className="leading-tight">
               <p
      className="font-extrabold text-lg"
      style={{ color: '#B5A491', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      LEXIGUARD
    </p>
    <p
      className="text-xs italic tracking-wide"
      style={{ color: '#8C7D63', fontFamily: "'Georgia', serif" }}
    >
      Legal Tech Services
    </p>
            </div>
          </Link>

          <div className="flex items-center gap-4 mt-4">
            <Link href="#" aria-label="Facebook" className="hover:text-[#B5A491]">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#B5A491]">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#B5A491]">
              <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-[#B5A491]">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
          <Link href="#" className="hover:text-[#B5A491]">Features</Link>
          <Link href="#" className="hover:text-[#B5A491]">Pricing</Link>
          <Link href="#" className="hover:text-[#B5A491]">Resources</Link>
          <Link href="#" className="hover:text-[#B5A491]">Contact</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
          <Link href="#" className="hover:text-[#B5A491]">FAQs</Link>
          <Link href="#" className="hover:text-[#B5A491]">Help Center</Link>
          <Link href="#" className="hover:text-[#B5A491]">Terms & Conditions</Link>
          <Link href="#" className="hover:text-[#B5A491]">Privacy Policy</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
          <p className="text-gray-600 text-sm">support@lexiguard.com</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LexiGuard. All rights reserved.
      </div>
    </footer>
  );
}