"use client";

import { useState } from "react";

type Props = {
  document: string;
  templateName: string;
  onClose: () => void;
  hideActions?: boolean;
};

export default function DocumentPreviewModal({
  document,
  templateName,
  onClose,
  hideActions = false,
}: Props) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // ================= SAVE (UI ONLY) =================
  const handleSave = async () => {
    if (saving) return;

    setSaving(true);
    setSaved(false);

    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 600);
  };

  // ================= DOWNLOAD PDF =================
  const handleDownload = async () => {
  const element = window.document.getElementById("print-area");
  if (!element) return;

  const html2pdf = (await import("html2pdf.js")).default;

  const pdf: any = html2pdf(); // 🔥 FIX: bypass TS limitation

  pdf
    .set({
      margin: 0,
      filename: `${templateName}.pdf`,

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
      },

      jsPDF: {
        unit: "pt",
        format: "a4",
        orientation: "portrait",
      },

      // 🔥 IMPORTANT: prevents cut content & broken sections
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: [
          "h1",
          "h2",
          ".text",
          ".doc-flex",
          ".section-title",
        ],
      },
    })
    .from(element)
    .save();
};
  return (
    <div className="fixed inset-0 z-[9999] bg-[#f5efe6] overflow-y-auto">

      {/* ================= HEADER ================= */}
      <div className="fixed top-0 left-0 w-full bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center z-50">
        <h2 className="text-sm font-medium text-gray-800">
          📄 Document Preview
        </h2>

        <button
          onClick={onClose}
          className="text-lg hover:scale-110 transition"
        >
          ✖
        </button>
      </div>

      {/* ================= DOCUMENT ================= */}
      <div className="flex justify-center pt-20 pb-32 px-2 lg:px-6">
        <div
          id="print-area"
          className="bg-[#fffdf9] w-full max-w-[1100px] min-h-[1150px] shadow-xl border border-[#e8dccb]"
        >
          {/* Inner Padding Layer (IMPORTANT for PDF consistency) */}
          <div className="px-6 lg:px-20 py-10 lg:py-20">

            {/* Fancy Header */}
            <div className="border-b border-[#d6c7b0] pb-8 mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
                DOCUMENT
              </h1>
              <p className="text-sm text-[#8a7a64] mt-3 tracking-wide">
                Legal Agreement Document
              </p>
            </div>

            {/* Actual Template Content */}
            <div
              className="text-[15px] lg:text-[16px] text-[#2f2a24] font-serif text-justify"
              style={{ lineHeight: "2" }}
              dangerouslySetInnerHTML={{ __html: document }}
            />
          </div>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      {!hideActions && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-3 flex justify-center gap-10">

          <button
            onClick={handleDownload}
            className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition"
          >
            ⬇
            <span className="text-xs mt-1">Download</span>
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            {saved ? "✅" : "💾"}
            <span className="text-xs mt-1">
              {saving ? "Saving..." : saved ? "Saved" : "Save"}
            </span>
          </button>

          <button
            onClick={onClose}
            className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition"
          >
            ←
            <span className="text-xs mt-1">Back</span>
          </button>

        </div>
      )}

      {/* ================= PRINT FIX ================= */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }

          #print-area,
          #print-area * {
            visibility: visible;
          }

          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
            border: none;
          }
        }
      `}</style>
    </div>
  );
}