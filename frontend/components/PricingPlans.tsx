 "use client";

import { X, Check, Star } from "lucide-react";

// Type for Plan
type Plan = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  current?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    features: ["1 Document per month", "Basic eSign", "Community Support"],
    current: true,
  },
  {
    name: "Pro",
    price: "$29",
    features: ["10 Documents per month", "Advanced eSign", "Priority Support", "Access to Templates"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Unlimited Documents", "All eSign features", "Dedicated Support", "Custom Branding"],
  },
];

type PricingPlansProps = {
  open: boolean;
  onClose: () => void;
};

export default function PricingPlans({ open, onClose }: PricingPlansProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-6xl bg-gray-900 rounded-3xl shadow-2xl p-10 overflow-y-auto max-h-[85vh] border border-gray-800">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Modal Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">
          Choose Your Plan
        </h2>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`
                relative flex flex-col justify-between rounded-2xl p-8 transition-transform transform hover:scale-105
                border ${plan.popular ? "border-transparent" : "border-gray-700"}
                ${plan.popular ? "bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-700 text-white shadow-2xl" : "bg-gray-800 text-gray-200"}
              `}
            >
              {/* Badges */}
              {plan.current && !plan.popular && (
                <span className="absolute top-5 left-5 bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full text-sm shadow-md">
                  Current Plan
                </span>
              )}

              {plan.popular && (
                <span className="absolute top-5 left-5 flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm text-white font-semibold shadow-md">
                  <Star className="w-4 h-4" /> Popular
                </span>
              )}

              {/* Plan Details */}
              <div className="space-y-6 mt-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-4xl font-extrabold">{plan.price}</p>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? "text-yellow-300" : "text-green-400"}`} />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select Button */}
              <button
                className={`
                  mt-8 py-3 rounded-xl font-semibold text-lg w-full transition
                  ${plan.popular 
                    ? "bg-white text-indigo-600 hover:opacity-90" 
                    : "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white hover:opacity-90"}
                `}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}