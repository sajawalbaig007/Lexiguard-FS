"use client";

import { Lora } from "next/font/google"; // ✅ updated import

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 md:px-12 
      bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl text-white mt-40`}>
        <h1
          className={`text-5xl md:text-7xl font-bold md:leading-tight mb-8 drop-shadow-lg ${lora.className}`}
        >
          Simplify Your{" "}
          <span className="text-white drop-shadow-xl">Legal Documents</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light drop-shadow-md">
          Generate, review, and understand contracts, agreements, and other
          business documents effortlessly. LexiGuard makes legal easy and
          professional for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 -mt-6">
          <a
            href="#get-started"
            className="bg-[#B5A491] hover:bg-[#9e8f74] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition text-lg md:text-xl"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="text-white border border-white hover:bg-white hover:text-[#B5A491] font-semibold px-10 py-4 rounded-full shadow-lg transition text-lg md:text-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}