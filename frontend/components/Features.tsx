"use client";

import { FileText, ShieldCheck, Book, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Document Generator",
      desc: "Create legal documents easily with a guided workflow.",
      icon: <FileText size={36} className="text-[#B5A491]" />,
    },
    {
      title: "Risk Detection",
      desc: "Identify missing clauses and potential legal risks.",
      icon: <ShieldCheck size={36} className="text-[#B5A491]" />,
    },
    {
      title: "Clause Library",
      desc: "Access pre-built legal clauses to save time.",
      icon: <Book size={36} className="text-[#B5A491]" />,
    },
    {
      title: "Plain English",
      desc: "Understand legal terms in simple, clear language.",
      icon: <BookOpen size={36} className="text-[#B5A491]" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Empowering Your Legal Workflow
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          LexiGuard provides intuitive tools for businesses to generate, review, 
          and manage legal documents efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-white/90 border rounded-2xl hover:shadow-xl transition backdrop-blur-sm"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}