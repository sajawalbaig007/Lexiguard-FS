 "use client";
import { useState, useEffect } from "react";

import {
  FileText,
  Folder,
  PenTool,
  ShieldCheck,
  Pencil,
} from "lucide-react";

import PricingPlans from "@/components/PricingPlans"; // ✅ ADDED

export default function DashboardPage() {
  const data = {
    documents: [
      { id: 1, title: "Power of Attorney", time: "24 minutes ago" },
    ],
    esignatures: [],
    notarizations: [],
  };

  const [activeTab, setActiveTab] = useState("all");

  // ----------- NEW STATE -----------
  const [savedDocs, setSavedDocs] = useState<any[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<any>(null);

  const [showPricing, setShowPricing] = useState(false); // ✅ ADDED

  // ----------- LOAD FROM LOCALSTORAGE -----------
  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("recentDocuments") || "[]"
    );
    setSavedDocs(stored);
  }, []);

  const getItems = () => {
    const mergedDocuments = [
      ...savedDocs.map((d) => ({ ...d, type: "doc" })),
      ...data.documents.map((d) => ({ ...d, type: "doc" })),
    ];

    if (activeTab === "all") {
      return [
        ...mergedDocuments,
        ...data.esignatures.map((d) => ({ ...d, type: "esign" })),
        ...data.notarizations.map((d) => ({ ...d, type: "notary" })),
      ];
    }

    if (activeTab === "documents") {
      return mergedDocuments;
    }

    return (data[activeTab] || []).map((d) => ({
      ...d,
      type:
        activeTab === "documents"
          ? "doc"
          : activeTab === "esignatures"
          ? "esign"
          : "notary",
    }));
  };

  const items = getItems();

  const tabs = [
    { key: "all", label: "All" },
    { key: "documents", label: "Documents" },
    { key: "esignatures", label: "eSignatures" },
    { key: "notarizations", label: "Notarizations" },
  ];

  // ----------- DOWNLOAD PDF -----------
  const handleDownloadPDF = async () => {
    const element = document.querySelector(".print-document");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: 0.5,
      filename: `${selectedDoc?.title || "document"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  // ----------- PREVIEW MODE -----------
  if (selectedDoc) {
    return (
      <div className="fixed inset-0 z-[99999] bg-[#f8f6f1] flex flex-col overflow-hidden">

        {/* Top Header */}
        <div className="sticky top-0 z-[1000] bg-white/80 backdrop-blur border-b border-[#e6dccf] px-8 py-4 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-lg font-semibold text-[#3e2f1c] tracking-wide">
              {selectedDoc.title}
            </h1>
            <p className="text-xs text-[#8a7a64]">
              Legal Agreement Document
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2 bg-[#3e2f1c] text-white rounded-md hover:bg-[#2c2115] transition shadow"
            >
              Download PDF
            </button>

            <button
              onClick={() => setSelectedDoc(null)}
              className="px-5 py-2 border border-[#d6c7b0] rounded-md hover:bg-[#f3eee6] transition"
            >
              Back
            </button>
          </div>
        </div>

        {/* Document Area */}
        <div className="flex-1 overflow-y-auto flex justify-center px-6 py-10">
          <div className="w-full max-w-[900px]">

            <div className="print-document bg-[#fffdf9] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#e8dccb] rounded-sm px-20 py-16">

              <div className="border-b border-[#d6c7b0] pb-6 mb-10 text-center">
                <h1 className="text-3xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
                  {selectedDoc.title?.toUpperCase()}
                </h1>
                <p className="text-sm text-[#8a7a64] mt-2 tracking-wide">
                  Official Legal Agreement
                </p>
              </div>

              <div
                className="text-[16px] text-[#2f2a24] font-serif text-justify"
                style={{
                  lineHeight: "1.9",
                  wordSpacing: "1.2px",
                }}
                dangerouslySetInnerHTML={{ __html: selectedDoc.content }}
              />

              <div className="mt-20 pt-6 border-t border-[#eee3d3] text-xs text-center text-[#a89a86] tracking-wide">
                Generated Document — Verified Legal Template
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#f6f2ed] min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Welcome to LexiGuard
      </h1>

      {/* Top Actions */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { icon: <FileText />, text: "New Document" },
          { icon: <Folder />, text: "My Documents" },
          { icon: <PenTool />, text: "eSign", action: "pricing" }, // ✅ UPDATED
          { icon: <ShieldCheck />, text: "Notarize", action: "pricing" }, // ✅ UPDATED
        ].map((item, i) => (
          <div
            key={i}
            onClick={() => {
              if (item.action === "pricing") {
                setShowPricing(true);
              }
            }}
            className="group flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-[#463826]/20 text-[#B5A491] group-hover:scale-110 transition">
              {item.icon}
            </div>
            <span className="font-medium text-gray-700 group-hover:text-[#665339] transition">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm min-h-[500px] flex flex-col">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Activity
          </h2>

          <div className="flex gap-1 text-sm bg-[#F9FAFB] p-1 rounded-lg border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-md transition font-medium
                  ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-[#F3EED9] via-[#F5F1E1] to-[#F3EED9]  text-[#463826] font-medium  shadow-sm"
                      : "text-gray-500 hover:text-gray-700 hover:bg-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                onClick={() => item.content && setSelectedDoc(item)}
                className="group flex justify-between items-center rounded-xl p-5 bg-[#F9FAFB] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border text-xl group-hover:scale-105 transition">
                    {item.type === "doc" && "📄"}
                    {item.type === "esign" && "✍️"}
                    {item.type === "notary" && "🪪"}
                  </div>

                  <div>
                    <p className="text-gray-900 font-medium text-[15px]">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.time}
                    </p>
                  </div>
                </div>

                <button className="p-2 rounded-md hover:bg-gray-100 transition">
                  <Pencil className="w-4 h-4 text-gray-500 hover:text-[#B5A491]" />
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
              <div className="text-5xl mb-3 opacity-70">📂</div>
              <p className="text-sm">
                No{" "}
                <span className="capitalize text-[#B5A491] font-medium">
                  {activeTab !== "all" ? activeTab : "activity"}
                </span>{" "}
                yet
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-6 mt-6 border-t">
          <button className="text-sm text-[#B5A491] hover:underline font-medium">
            View All Documents
          </button>

          <button className="px-5 py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] hover:opacity-90 transition">
            Create New
          </button>
        </div>
      </div>

      {/* ✅ PRICING MODAL */}
      <PricingPlans
        open={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </div>
  );
}