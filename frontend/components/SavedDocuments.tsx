 "use client";

import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import DocumentPreviewModal from "./DocumentPreviewModal";
import {
  getDocuments,
  deleteDocument,
} from "@/modules/api/contracts";
import { useSearchParams } from "next/navigation";

// Types
type Document = {
  _id: string;
  title: string;
  time: string;
  content: string;
  createdAt: string;
  templateName?: string;
};

type ApiDocument = {
  _id: string;
  content: string;
  createdAt: string;
  templateName?: string;
};

type DeleteResponse = {
  success: boolean;
};

export default function SavedDocuments() {
  const [savedDocs, setSavedDocs] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const searchParams = useSearchParams();

  // ================= LOAD DOCUMENTS =================
  const loadDocuments = async () => {
    try {
      const mongoDocs: ApiDocument[] = await getDocuments();

      const formatted = mongoDocs.map((doc) => ({
        _id: doc._id,
        title: doc.templateName?.toUpperCase() || "DOCUMENT",
        time: new Date(doc.createdAt).toLocaleString(),
        content: doc.content,
        createdAt: doc.createdAt,
        templateName: doc.templateName,
      }));

      setSavedDocs(formatted);
    } catch (error) {
      console.error("Error loading documents:", error);
    }
  };

  // ✅ FIXED (no eslint warning)
  useEffect(() => {
    const init = async () => {
      await loadDocuments();
    };
    init();
  }, []);

  // ✅ FIXED (no eslint warning)
  useEffect(() => {
    const handleRefresh = async () => {
      const refresh = searchParams.get("refresh");

      if (refresh) {
        await loadDocuments();

        window.history.replaceState(
          {},
          "",
          "/dashboard/savedDocuments"
        );
      }
    };

    handleRefresh();
  }, [searchParams]);

  // ================= DELETE =================
  const handleDelete = async (doc: Document, e: React.MouseEvent) => {
    e.stopPropagation();

    const confirmDelete = confirm(`Delete "${doc.title}"?`);
    if (!confirmDelete) return;

    try {
      const res: DeleteResponse = await deleteDocument(doc._id);

      if (res.success) {
        setSavedDocs((prev) =>
          prev.filter((d) => d._id !== doc._id)
        );

        setTimeout(() => {
          loadDocuments();
        }, 200);
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // ================= PREVIEW =================
  if (selectedDoc) {
    return (
      <DocumentPreviewModal
        document={selectedDoc.content}
        templateName={selectedDoc.templateName || selectedDoc.title}
        onClose={() => setSelectedDoc(null)}
      />
    );
  }

  return (
    <div className="bg-white p-4 md:p-8 border border-gray-200 shadow-sm min-h-150">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
          Saved Documents
        </h2>
      </div>

      <div className="space-y-3 md:space-y-4">
        {savedDocs.length > 0 ? (
          savedDocs.map((doc) => (
            <div
              key={doc._id}
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
            <div className="text-4xl md:text-5xl mb-2 md:mb-3 opacity-70">
              📂
            </div>
            <p className="text-xs md:text-sm">No saved documents yet</p>
          </div>
        )}
      </div>
    </div>
  );
}