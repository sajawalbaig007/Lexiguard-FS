"use client";
import { useEffect, useState } from "react";
import { RotateCcw, Trash2 } from "lucide-react";

type DocumentType = {
  id: string;
  title: string;
  time: string;
};

export default function BinPage() {
  const [binDocs, setBinDocs] = useState<DocumentType[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("deletedDocuments");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("deletedDocuments", JSON.stringify(binDocs));
  }, [binDocs]);

  const restoreDoc = (doc: DocumentType) => {
    const updatedBin = binDocs.filter((d) => d.id !== doc.id);
    setBinDocs(updatedBin);

    const recentDocs = JSON.parse(
      localStorage.getItem("recentDocuments") || "[]"
    );

    localStorage.setItem(
      "recentDocuments",
      JSON.stringify([...recentDocs, doc])
    );
  };

  const deleteForever = (doc: DocumentType) => {
    const updatedBin = binDocs.filter((d) => d.id !== doc.id);
    setBinDocs(updatedBin);
  };

  return (
    <div className="p-4 md:p-8 bg-[#f6f2ed] min-h-screen">
      {/* Header */}
      <h1 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-[#3e2f1c]">
        Recycle Bin
      </h1>

      {/* Empty State */}
      {binDocs.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16 md:mt-20 text-gray-500">
          <div className="text-4xl md:text-5xl mb-3 md:mb-4 opacity-70">🗑️</div>
          <p className="text-xs md:text-sm">Recycle bin is empty</p>
        </div>
      ) : (
        <div className="space-y-2 md:space-y-4">
          {binDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-3 md:p-5 md:rounded-xl border flex justify-between items-center hover:shadow-sm transition"
            >
              {/* Left Side */}
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-[#F9FAFB] border text-base md:text-lg">
                  📄
                </div>

                <div>
                  <p className="font-medium text-gray-900 text-xs md:text-[15px]">
                    {doc.title}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                    {doc.time}
                  </p>
                </div>
              </div>

              {/* Right Side Buttons */}
              <div className="flex gap-2 md:gap-3">
                {/* Restore */}
                <button
                  onClick={() => restoreDoc(doc)}
                  className="flex items-center justify-center md:gap-2 px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-[#463826] text-white rounded-md hover:opacity-90 transition"
                >
                  <RotateCcw className="w-4 h-4 md:w-4 md:h-4" />
                  <span className="hidden md:inline">Restore</span>
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteForever(doc)}
                  className="flex items-center justify-center md:gap-2 px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  <Trash2 className="w-4 h-4 md:w-4 md:h-4" />
                  <span className="hidden md:inline">Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}