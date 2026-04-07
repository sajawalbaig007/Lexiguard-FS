"use client";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import DocumentPreviewModal from "./DocumentPreviewModal"; // ✅ NEW

// Define types
type Document = {
  id?: number;
  _id?: string; // ✅ Mongo support
  title: string;
  time: string;
  content: string;
  createdAt: string;
  templateName?: string; // ✅ Mongo
};

export default function SavedDocuments() {
  const [savedDocs, setSavedDocs] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        // Local docs (unchanged)
        const localDocs = typeof window !== "undefined" 
          ? JSON.parse(localStorage.getItem("recentDocuments") || "[]")
          : [];

        // Mongo docs
        const res = await fetch("/api/contracts/documents");
        const mongoDocs = await res.json();

        // Format Mongo → UI
        const formattedMongoDocs = mongoDocs.map((doc: any) => ({
          _id: doc._id,
          title: doc.templateName.toUpperCase(),
          time: new Date(doc.createdAt).toLocaleString(),
          content: doc.content,
          createdAt: doc.createdAt,
          templateName: doc.templateName,
        }));

        // ✅ Merge both
        setSavedDocs([...formattedMongoDocs, ...localDocs]);
      } catch (error) {
        console.error("Error loading documents:", error);
      }
    };

    loadDocuments();
  }, []);

  // PDF Download (unchanged)
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

  // DELETE DOCUMENT (unchanged for local only)
  const handleDelete = (doc: Document, e: React.MouseEvent) => {
    e.stopPropagation();

    const confirmDelete = confirm(
      `Do you want to delete "${doc.title}"?`
    );

    if (!confirmDelete) return;

    const updatedDocs = savedDocs.filter(
      (d) => (d.id || d._id) !== (doc.id || doc._id)
    );

    setSavedDocs(updatedDocs);
    if (typeof window !== "undefined") {
      localStorage.setItem("recentDocuments", JSON.stringify(updatedDocs));

      const deletedDocs = JSON.parse(
        localStorage.getItem("deletedDocuments") || "[]"
      );
      deletedDocs.push(doc);
      localStorage.setItem("deletedDocuments", JSON.stringify(deletedDocs));
    }
  };

  // ✅ NEW PREVIEW USING YOUR MODAL
  if (selectedDoc) {
    return (
      <DocumentPreviewModal
        document={selectedDoc.content}
        templateName={selectedDoc.templateName || selectedDoc.title}
        onClose={() => setSelectedDoc(null)}
      />
    );
  }

  // Saved Documents List (UNCHANGED UI)
  return (
    <div className="bg-white  p-4 md:p-8 border border-gray-200 shadow-sm min-h-150">
      
      <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
        Saved Documents
      </h2>

      <div className="space-y-3 md:space-y-4">
        {savedDocs.length > 0 ? (
          savedDocs.map((doc) => (
            <div
              key={doc.id || doc._id} // ✅ FIXED
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