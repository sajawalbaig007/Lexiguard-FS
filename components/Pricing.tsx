"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "£29/mo",
      features: [
        "Up to 5 documents per month",
        "Access to templates",
        "Basic risk detection",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "£79/mo",
      features: [
        "Unlimited documents",
        "Advanced risk detection",
        "Clause library access",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Growth",
      price: "£149/mo",
      features: [
        "Team access",
        "Custom templates",
        "Dedicated account manager",
        "Full API access",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Flexible subscription plans for businesses of all sizes. Find the right plan for your needs and get started with LexiGuard today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className={`flex flex-col p-8 rounded-2xl border ${
              plan.highlight
                ? "bg-[#B5A491] border-[#B5A491] text-white shadow-lg scale-105"
                : "bg-gray-50 border-gray-200"
            } transition hover:shadow-xl`}
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

            {/* Price */}
            <p
              className={`text-3xl font-extrabold mb-6 ${
                plan.highlight ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.price}
            </p>

            {/* Features */}
            <ul className="flex-1 mb-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`${
                    plan.highlight ? "text-white/90" : "text-gray-700"
                  }`}
                >
                  • {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="#get-started"
              className={`text-center font-semibold px-8 py-3 rounded-full transition ${
                plan.highlight
                  ? "bg-white text-[#B5A491] hover:opacity-90"
                  : "bg-[#B5A491] text-white hover:bg-[#9e8f74]"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}