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

    const pdf: any = html2pdf();

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
        pagebreak: {
          mode: ["css", "legacy"],
          avoid: ["h1", "h2", ".text", ".doc-flex", ".section-title"],
        },
      })
      .from(element)
      .save();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#f5efe6] overflow-y-auto">

      {/* ================= HEADER ================= */}
      <div className="fixed top-0 left-0 w-full bg-white border-b shadow-sm px-4 lg:px-6 py-3 flex justify-between items-center z-50">
        <h2 className="text-xs sm:text-sm font-medium text-gray-800">
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
      <div className="flex justify-center pt-16 sm:pt-20 pb-28 sm:pb-32 px-2 lg:px-6">
        <div
          id="print-area"
          className="bg-[#fffdf9] w-full max-w-[1100px] min-h-[100vh] sm:min-h-[1150px] shadow-xl border border-[#e8dccb] rounded-md sm:rounded-none"
        >
          {/* Inner Padding Layer */}
          <div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-10 lg:py-20">

            {/* Fancy Header */}
            <div className="border-b border-[#d6c7b0] pb-6 sm:pb-8 mb-8 sm:mb-12 relative">

              {/* 🔥 COMPANY LOGO */}
              <div className="absolute left-0 top-0">
                <img
                  src="/images/logo1.png"
                  alt="Company Logo"
                  className="h-10 sm:h-12 lg:h-16 object-contain"
                />
              </div>

              {/* CENTER TITLE */}
              <div className="text-center px-6 sm:px-0">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
                  DOCUMENT
                </h1>
                <p className="text-[11px] sm:text-sm text-[#8a7a64] mt-2 sm:mt-3 tracking-wide">
                  Legal Agreement Document
                </p>
              </div>
            </div>

            {/* Actual Template Content */}
            <div
              className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#2f2a24] font-serif text-justify"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: document }}
            />
          </div>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      {!hideActions && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-2 sm:p-3 flex justify-around sm:justify-center gap-2 sm:gap-10">

          <button
            onClick={handleDownload}
            className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-3 sm:px-4 py-2 rounded-lg transition"
          >
            ⬇
            <span className="text-[10px] sm:text-xs mt-1">Download</span>
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-3 sm:px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            {saved ? "✅" : "💾"}
            <span className="text-[10px] sm:text-xs mt-1">
              {saving ? "Saving..." : saved ? "Saved" : "Save"}
            </span>
          </button>

          <button
            onClick={onClose}
            className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-3 sm:px-4 py-2 rounded-lg transition"
          >
            ←
            <span className="text-[10px] sm:text-xs mt-1">Back</span>
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