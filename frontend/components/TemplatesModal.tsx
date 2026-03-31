"use client";

import { useState } from "react";
import TemplatePreviewModal from "./TemplatePreviewModal";
import DocumentBuilder from "./DocumentBuilder";

type Category = "Popular" | "Business" | "Real Estate" | "Personal";

// Define template type
type Template = {
  title: string;
  emoji: string;
  desc: string;
  image: string;
};

const templates: Record<Category, Template[]> = {
  Popular: [
    {
      title: "Lease/Rental Agreement",
      emoji: "🏠",
      desc: "Create a lease agreement to clearly outline rent terms, rules, and responsibilities for landlords and tenants.",
      image: "/images/rental.jpg",
    },
    {
      title: "Room Rental Agreement",
      emoji: "🛏️",
      desc: "A Room Rental Agreement is a contract used when renting a single room in a shared property.",
      image: "/templates/room.png",
    },
    {
      title: "Automobile Bill of Sale",
      emoji: "🚗",
      desc: "Use an Automobile Bill of Sale to record the sale of a car or other vehicle.",
      image: "/templates/car.png",
    },
    {
      title: "Transcript Request",
      emoji: "📜",
      desc: "Use this form to request your academic transcripts from educational institutions.",
      image: "/templates/transcript.png",
    },
    {
      title: "Child Travel Consent Form",
      emoji: "✈️",
      desc: "Confirms that a child has written permission or legal authorization to travel.",
      image: "/templates/child-travel.png",
    },
    {
      title: "Lease Termination",
      emoji: "🔑",
      desc: "A Landlord or Tenant can use this document to end an existing lease.",
      image: "/templates/lease-termination.png",
    },
    {
      title: "Quitclaim Deed",
      emoji: "🏡",
      desc: "A Quitclaim Deed is a legal document where the owner releases ownership.",
      image: "/templates/quitclaim.png",
    },
    {
      title: "Divorce Agreement",
      emoji: "🧩",
      desc: "Use this document to outline the division of assets and responsibilities.",
      image: "/templates/divorce.png",
    },
  ],
  Business: [
    {
      title: "Business Contract",
      emoji: "📄",
      desc: "Create a business contract between two parties.",
      image: "/templates/business.png",
    },
    {
      title: "Invoice Template",
      emoji: "🧾",
      desc: "Professional invoice template for businesses.",
      image: "/templates/invoice.png",
    },
    {
      title: "NDA Agreement",
      emoji: "🤝",
      desc: "Non-disclosure agreement template.",
      image: "/templates/nda.png",
    },
  ],
  "Real Estate": [
    {
      title: "Property Management Agreement",
      emoji: "🏢",
      desc: "Agreement between property owner and manager.",
      image: "/templates/property.png",
    },
    {
      title: "Eviction Notice",
      emoji: "📢",
      desc: "Notice to vacate property.",
      image: "/templates/eviction.png",
    },
  ],
  Personal: [
    {
      title: "Resume Template",
      emoji: "📄",
      desc: "Professional resume template.",
      image: "/templates/resume.png",
    },
    {
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

  const [showBuilder, setShowBuilder] = useState(false);
  const [builderTemplate, setBuilderTemplate] = useState<string>("");

  const filteredTemplates = templates[category].filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* ================= MAIN MODAL ================= */}
      {!showBuilder && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-9999">
          <div className="bg-white w-[80vw] h-[90vh] rounded-xl shadow-lg flex relative text-gray-900">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ×
            </button>

            {/* Sidebar */}
            <div className="w-65 border-r border-gray-300 p-4">
              <input
                placeholder="Search Documents"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="space-y-3">
                {(Object.keys(templates) as Category[]).map((cat) => (
                  <div
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`cursor-pointer p-2 rounded-lg transition ${
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

            {/* Content */}
            <div className="flex-1 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200">
              <h1 className="text-2xl font-semibold mb-6 text-gray-900">
                {category} Templates
              </h1>

              <div className="grid grid-cols-2 gap-6">
                {filteredTemplates.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedTemplate(item)}
                    className="group flex items-start gap-4 p-4 border border-gray-300 rounded-xl bg-[#F9FAFB] hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-25 h-12 flex items-center justify-center rounded-lg bg-[#B5A491]/20 text-2xl group-hover:scale-110 transition">
                      {item.emoji}
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900 group-hover:text-[#B5A491] transition">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= PREVIEW MODAL ================= */}
      {!showBuilder && selectedTemplate && (
        <TemplatePreviewModal
          title={selectedTemplate.title}
          description={selectedTemplate.desc}
          image={selectedTemplate.image}
          onClose={() => setSelectedTemplate(null)}
          onUseTemplate={() => {
            setBuilderTemplate(selectedTemplate.title);
            setSelectedTemplate(null);
            setShowBuilder(true);
          }}
        />
      )}

      {/* ================= DOCUMENT BUILDER ================= */}
      {showBuilder && (
        <div className="fixed inset-0 z-12000">
          <DocumentBuilder template={builderTemplate} />
        </div>
      )}
    </>
  );
}