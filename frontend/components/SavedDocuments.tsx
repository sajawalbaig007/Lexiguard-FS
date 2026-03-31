"use client";
import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";

// Define types
type Document = {
  id: number;
  title: string;
  time: string;
  content: string;
  createdAt: string;
};

export default function SavedDocuments() {
  const [savedDocs, setSavedDocs] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("recentDocuments") || "[]"
    );
    setSavedDocs(stored);
  }, []);

  // PDF Download - FIXED
  const handleDownloadPDF = async () => {
    const element = document.querySelector(".print-document") as HTMLElement | null;
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: 0.5,
      filename: `${selectedDoc?.title || "document"}.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in" as const, format: "letter" as const, orientation: "portrait" as const },
    };

    html2pdf().set(opt).from(element).save();
  };

  // Preview Mode
  if (selectedDoc) {
    return (
      <div className="fixed inset-0 z-99999 bg-[#f8f6f1] flex flex-col overflow-hidden">
        <div className="sticky top-0 z-1000 bg-white/80 backdrop-blur border-b border-[#e6dccf] px-8 py-4 flex items-center justify-between shadow-sm">
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

        <div className="flex-1 overflow-y-auto flex justify-center px-6 py-10">
          <div className="w-full max-w-225">
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
                style={{ lineHeight: "1.9", wordSpacing: "1.2px" }}
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

  // Saved Documents List
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm min-h-150">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Saved Documents
      </h2>

      <div className="space-y-4">
        {savedDocs.length > 0 ? (
          savedDocs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className="group flex justify-between items-center rounded-xl p-5 bg-[#F9FAFB] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border text-xl">
                  📄
                </div>

                <div>
                  <p className="text-gray-900 font-medium text-[15px]">
                    {doc.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {doc.time}
                  </p>
                </div>
              </div>

              <button className="p-2 rounded-md hover:bg-gray-100 transition">
                <Pencil className="w-4 h-4 text-gray-500 hover:text-[#B5A491]" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
            <div className="text-5xl mb-3 opacity-70">📂</div>
            <p className="text-sm">No saved documents yet</p>
          </div>
        )}
      </div>
    </div>
  );
}