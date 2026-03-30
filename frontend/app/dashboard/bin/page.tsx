"use client";
import { useEffect, useState } from "react";

export default function BinPage() {
  const [binDocs, setBinDocs] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("binDocuments") || "[]"
    );
    setBinDocs(stored);
  }, []);

  const restoreDoc = (doc: any) => {
    const updatedBin = binDocs.filter((d) => d.id !== doc.id);
    setBinDocs(updatedBin);
    localStorage.setItem("binDocuments", JSON.stringify(updatedBin));

    const recentDocs = JSON.parse(
      localStorage.getItem("recentDocuments") || "[]"
    );

    localStorage.setItem(
      "recentDocuments",
      JSON.stringify([...recentDocs, doc])
    );
  };

  const deleteForever = (doc: any) => {
    const updatedBin = binDocs.filter((d) => d.id !== doc.id);
    setBinDocs(updatedBin);
    localStorage.setItem("binDocuments", JSON.stringify(updatedBin));
  };

  return (
    <div className="p-8 bg-[#f6f2ed] min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Recycle Bin</h1>

      {binDocs.length === 0 ? (
        <p className="text-gray-500">Bin is empty</p>
      ) : (
        <div className="space-y-4">
          {binDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-5 rounded-xl border flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{doc.title}</p>
                <p className="text-xs text-gray-400">{doc.time}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => restoreDoc(doc)}
                  className="px-4 py-2 bg-[#463826] text-white rounded-md"
                >
                  Restore
                </button>

                <button
                  onClick={() => deleteForever(doc)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete Forever
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}