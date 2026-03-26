"use client";

import { User, FileText, CheckCircle, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Sign Up Securely",
      desc: "Create your account safely and start your legal journey with LexiGuard.",
      icon: <User size={36} className="text-[#B5A491]" />,
    },
    {
      title: "Choose Document Type",
      desc: "Select contracts, agreements, policies, or other business documents.",
      icon: <FileText size={36} className="text-[#B5A491]" />,
    },
    {
      title: "Fill Guided Questions",
      desc: "Provide your business information through an intuitive guided workflow.",
      icon: <CheckCircle size={36} className="text-[#B5A491]" />,
    },
    {
      title: "Generate & Download",
      desc: "Get a professional legal document, identify risks, and download securely.",
      icon: <Download size={36} className="text-[#B5A491]" />,
    },
  ];

  return (
    <section className="py-28 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How LexiGuard Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Follow a simple 4-step process to generate, review, and understand legal documents for your business.
        </p>
      </div>

      {/* Grid Wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative">

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="h-full flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-2xl transition"
            >
              {/* Step Number */}
              <div className="absolute -top-5 bg-[#B5A491] text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                {`0${idx + 1}`}
              </div>

              {/* Icon */}
              <div className="mb-5 mt-4 bg-[#B5A491]/10 p-4 rounded-full">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>

            {/* Arrow (perfect center between cards) */}
            {idx !== steps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                <ArrowRight size={28} className="text-[#B5A491]" />
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}