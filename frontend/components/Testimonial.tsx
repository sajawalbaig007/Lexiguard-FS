"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, BrightTech",
    feedback:
      "LexiGuard simplified our legal process tremendously. We can now generate contracts quickly without worrying about missing clauses.",
    avatar: "/images/testimonial1.png",
  },
  {
    name: "Michael Lee",
    role: "CEO, FinServe Inc.",
    feedback:
      "The guided workflows and risk detection saved us a lot of time. Highly recommended for SMEs!",
    avatar: "/images/testimonial1.png",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, LegalEase",
    feedback:
      "LexiGuard’s platform is intuitive and professional. Our team loves using it for everyday contracts.",
    avatar: "/images/testimonial1.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear from businesses that have streamlined their legal workflow with LexiGuard.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 mb-4">{t.feedback}</p>
            <h3 className="text-gray-900 font-semibold">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}