"use client";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

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

  // PDF Download
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

  // DELETE DOCUMENT
  const handleDelete = (doc: Document, e: React.MouseEvent) => {
    e.stopPropagation();

    const confirmDelete = confirm(
      `Do you want to delete "${doc.title}"?`
    );

    if (!confirmDelete) return;

    const updatedDocs = savedDocs.filter((d) => d.id !== doc.id);
    setSavedDocs(updatedDocs);
    localStorage.setItem("recentDocuments", JSON.stringify(updatedDocs));

    const deletedDocs = JSON.parse(
      localStorage.getItem("deletedDocuments") || "[]"
    );
    deletedDocs.push(doc);
    localStorage.setItem("deletedDocuments", JSON.stringify(deletedDocs));
  };

  // Preview Mode
  if (selectedDoc) {
    return (
      <div className="fixed inset-0 z-99999 bg-[#f8f6f1] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="sticky top-0 z-1000 bg-white/80 backdrop-blur border-b border-[#e6dccf] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-base md:text-lg font-semibold text-[#3e2f1c] tracking-wide">
              {selectedDoc.title}
            </h1>
            <p className="text-[10px] md:text-xs text-[#8a7a64]">
              Legal Agreement Document
            </p>
          </div>

          <div className="flex gap-2 md:gap-3">
            <button
              onClick={handleDownloadPDF}
              className="px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base bg-[#3e2f1c] text-white rounded-md hover:bg-[#2c2115] transition shadow"
            >
              Download
            </button>

            <button
              onClick={() => setSelectedDoc(null)}
              className="px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base border border-[#d6c7b0] rounded-md hover:bg-[#f3eee6] transition"
            >
              Back
            </button>
          </div>
        </div>

        {/* Document */}
        <div className="flex-1 overflow-y-auto flex justify-center px-2 md:px-6 py-4 md:py-10">
          <div className="w-full max-w-225">
            <div className="print-document bg-[#fffdf9] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#e8dccb] md:rounded-sm px-4 md:px-20 py-6 md:py-16">
              
              <div className="border-b border-[#d6c7b0] pb-4 md:pb-6 mb-6 md:mb-10 text-center">
                <h1 className="text-xl md:text-3xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
                  {selectedDoc.title?.toUpperCase()}
                </h1>
                <p className="text-xs md:text-sm text-[#8a7a64] mt-1 md:mt-2 tracking-wide">
                  Official Legal Agreement
                </p>
              </div>

              <div
                className="text-[14px] md:text-[16px] text-[#2f2a24] font-serif text-justify"
                style={{ lineHeight: "1.9", wordSpacing: "1.2px" }}
                dangerouslySetInnerHTML={{ __html: selectedDoc.content }}
              />

              <div className="mt-10 md:mt-20 pt-4 md:pt-6 border-t border-[#eee3d3] text-[10px] md:text-xs text-center text-[#a89a86] tracking-wide">
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
    <div className="bg-white  p-4 md:p-8 border border-gray-200 shadow-sm min-h-150">
      
      <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
        Saved Documents
      </h2>

      <div className="space-y-3 md:space-y-4">
        {savedDocs.length > 0 ? (
          savedDocs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className="group flex justify-between items-center md:rounded-xl p-3 md:p-5 bg-[#F9FAFB] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-white border text-lg md:text-xl">
                  📄
                </div>

                <div>
                  <p className="text-gray-900 font-medium text-sm md:text-[15px]">
                    {doc.title}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                    {doc.time}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => handleDelete(doc, e)}
                className="p-1.5 md:p-2 rounded-md hover:bg-gray-100 transition"
              >
                <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-10 md:mt-20">
            <div className="text-4xl md:text-5xl mb-2 md:mb-3 opacity-70">📂</div>
            <p className="text-xs md:text-sm">No saved documents yet</p>
          </div>
        )}
      </div>
    </div>
  );
}