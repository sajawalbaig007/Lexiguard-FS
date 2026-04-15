"use client";

import { useState } from "react";
import TemplatePreviewModal from "./TemplatePreviewModal";

type Category = "Popular" | "Business" | "Real Estate" | "Personal";

type Template = {
  id: string;
  title: string;
  emoji: string;
  desc: string;
  image: string;
};

const templates: Record<Category, Template[]> = {
  Popular: [
        {
      id: "employment_contract",
      title: "Employment Contract",
      emoji: "💼",
      desc: "Create an employment contract outlining roles, salary, and terms of employment.",
      image: "/templates/employment.png",
    },
    {
      id: "nda",
      title: "Non-Disclosure Agreement",
      emoji: "🤝",
      desc: "Non-disclosure agreement template.",
      image: "/templates/nda.png",
    },
    {
      id: "uk_service_agreement",
      title: "UK Service Agreement",
      emoji: "🇬🇧",
      desc: "Service agreement tailored for UK-based businesses and clients.",
      image: "/templates/uk-service.png",
    },
    {
      id: "contractor_agreement",
      title: "Independent Contractor Agreement",
      emoji: "🛠️",
      desc: "Create a contractor agreement outlining scope of work, payment terms, and responsibilities.",
      image: "/templates/contractor.png",
    },
    {
      id: "loan_agreement",
      title: "Loan Agreement",
      emoji: "💰",
      desc: "Document the terms of a loan between a lender and borrower.",
      image: "/templates/loan.png",
    },
    {
      id: "separation_agreement",
      title: "Separation Agreement",
      emoji: "📑",
      desc: "Outline terms when two parties agree to separate responsibilities or relationship.",
      image: "/templates/separation.png",
    },

    {
      id: "lease_agreement",
      title: "Lease Agreement",
      emoji: "🏠",
      desc: "Create a lease agreement to clearly outline rent terms, rules, and responsibilities for landlords and tenants.",
      image: "/images/rental.jpg",
    },
    {
      id: "room_rental",
      title: "Room Rental Agreement",
      emoji: "🛏️",
      desc: "A Room Rental Agreement is a contract used when renting a single room in a shared property.",
      image: "/templates/room.png",
    },
    {
      id: "car_sale",
      title: "Automobile Bill of Sale",
      emoji: "🚗",
      desc: "Use an Automobile Bill of Sale to record the sale of a car or other vehicle.",
      image: "/templates/car.png",
    },
    {
      id: "transcript_request",
      title: "Transcript Request",
      emoji: "📜",
      desc: "Use this form to request your academic transcripts from educational institutions.",
      image: "/templates/transcript.png",
    },
    {
      id: "child_travel_consent",
      title: "Child Travel Consent Form",
      emoji: "✈️",
      desc: "Confirms that a child has written permission or legal authorization to travel.",
      image: "/templates/child-travel.png",
    },
    {
      id: "lease_termination",
      title: "Lease Termination",
      emoji: "🔑",
      desc: "A Landlord or Tenant can use this document to end an existing lease.",
      image: "/templates/lease-termination.png",
    },
    {
      id: "quitclaim_deed",
      title: "Quitclaim Deed",
      emoji: "🏡",
      desc: "A Quitclaim Deed is a legal document where the owner releases ownership.",
      image: "/templates/quitclaim.png",
    },
    {
      id: "divorce_agreement",
      title: "Divorce Agreement",
      emoji: "🧩",
      desc: "Use this document to outline the division of assets and responsibilities.",
      image: "/templates/divorce.png",
    },
  ],

  Business: [
    {
      id: "business_contract",
      title: "Business Contract",
      emoji: "📄",
      desc: "Create a business contract between two parties.",
      image: "/templates/business.png",
    },
    {
      id: "invoice_template",
      title: "Invoice Template",
      emoji: "🧾",
      desc: "Professional invoice template for businesses.",
      image: "/templates/invoice.png",
    },
    {
      id: "nda",
      title: "Non-Disclosure Agreement",
      emoji: "🤝",
      desc: "Non-disclosure agreement template.",
      image: "/templates/nda.png",
    },
  ],

  "Real Estate": [
    {
      id: "property_management",
      title: "Property Management Agreement",
      emoji: "🏢",
      desc: "Agreement between property owner and manager.",
      image: "/templates/property.png",
    },
    {
      id: "eviction_notice",
      title: "Eviction Notice",
      emoji: "📢",
      desc: "Notice to vacate property.",
      image: "/templates/eviction.png",
    },
  ],

  Personal: [
    {
      id: "resume",
      title: "Resume Template",
      emoji: "📄",
      desc: "Professional resume template.",
      image: "/templates/resume.png",
    },
    {
      id: "power_of_attorney",
      title: "Power of Attorney",
      emoji: "✍️",
      desc: "Legal authorization document.",
      image: "/templates/power.png",
    },
  ],
};

export default function TemplatesModal({ onClose }: { onClose: () => void }) {
  const [category, setCategory] = useState<Category>("Popular");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates[category].filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-9999">
        <div className="bg-white w-full h-full md:w-[80vw] md:h-[90vh] md:rounded-xl shadow-lg flex flex-col md:flex-row relative text-gray-900">
          
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl md:text-xl font-bold z-10"
          >
            ×
          </button>

          <div className="md:w-65 border-b md:border-b-0 md:border-r border-gray-300 p-3 md:p-4">
            <input
              placeholder="Search Documents"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 md:mb-6 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex md:block gap-2 overflow-x-auto md:space-y-3">
              {(Object.keys(templates) as Category[]).map((cat) => (
                <div
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`cursor-pointer px-3 py-2 rounded-lg whitespace-nowrap transition ${
                    category === cat
                      ? "bg-gray-200 font-semibold text-gray-900"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4 md:p-8 overflow-y-auto">
            <h1 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-gray-900">
              {category} Templates
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {filteredTemplates.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedTemplate(item)}
                  className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 border border-gray-300 rounded-xl bg-[#F9FAFB] hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-12 h-12 md:w-25 md:h-12 flex items-center justify-center rounded-lg bg-[#B5A491]/20 text-xl md:text-2xl group-hover:scale-110 transition">
                    {item.emoji}
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-[#B5A491] transition">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 text-xs md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedTemplate && (
        <TemplatePreviewModal
          id={selectedTemplate.id}
          title={selectedTemplate.title}
          description={selectedTemplate.desc}
          image={selectedTemplate.image}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </>
  );
}