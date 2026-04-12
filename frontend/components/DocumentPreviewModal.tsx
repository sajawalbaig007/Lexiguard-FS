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

  // ================= SAVE =================
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

    // Clone to avoid messing with live UI
    const clone = element.cloneNode(true) as HTMLElement;

    // Remove unwanted UI elements if any exist
    const removeSelectors = [
      ".no-print",
      "button",
      "input",
      "textarea",
      "select",
    ];

    removeSelectors.forEach((selector) => {
      clone.querySelectorAll(selector).forEach((el) => el.remove());
    });

    // Force clean PDF styling for single page
    clone.style.background = "#ffffff";
    clone.style.color = "#000000";
    clone.style.padding = "20px";
    clone.style.fontSize = "12px";
    clone.style.lineHeight = "1.4";
    clone.style.maxHeight = "277mm"; // A4 page height
    clone.style.overflow = "hidden";

    const opt = {
      margin: [5, 5, 5, 5] as [number, number, number, number], // Very small margins
      filename: `${templateName
        .replace(/\s+/g, "_")
        .toLowerCase()}_document.pdf`,
      image: {
        type: "jpeg" as const,
        quality: 0.95,
      },
      html2canvas: {
        scale: 2, // Balanced for single page
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
      },
      jsPDF: {
        unit: "mm" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
      pagebreak: {
        mode: "avoid-all" as any, // Force everything on one page
      },
    };

    await html2pdf().set(opt).from(clone).save();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#f5efe6] overflow-y-auto">
      {/* HEADER */}
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

      {/* DOCUMENT */}
      <div className="flex justify-center pt-20 pb-32 px-2 lg:px-6">
        <div
          id="print-area"
          className="bg-white w-full max-w-[900px] shadow-xl border border-gray-200"
          style={{ pageBreakInside: "avoid", pageBreakAfter: "avoid" }}
        >
          <div className="px-8 py-8">
            {/* HEADER */}
            <div className="border-b-2 border-gray-300 pb-4 mb-6 text-center">
              <h1 className="text-2xl font-bold tracking-wider text-gray-800 uppercase">
                EMPLOYMENT CONTRACT
              </h1>
              <p className="text-xs text-gray-500 mt-2 tracking-wide">
                Formal Legal Agreement Document
              </p>
            </div>

            {/* CONTENT - Compact for single page */}
            <div
              className="text-gray-700"
              style={{
                fontSize: "11px",
                lineHeight: "1.5",
                fontFamily: "serif",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
              dangerouslySetInnerHTML={{ __html: document }}
            />

            {/* Signature line */}
            <div className="mt-8 pt-4 border-t border-gray-300 text-right">
              <p className="text-xs text-gray-500 mt-4">
                Executed and agreed by the parties
              </p>
            </div>

            {/* PDF-specific styles */}
            <style>{`
              #print-area, #print-area * {
                word-wrap: break-word !important;
                overflow-wrap: break-word !important;
                white-space: normal !important;
                page-break-inside: avoid !important;
                page-break-after: avoid !important;
                break-inside: avoid !important;
              }
              
              #print-area p, #print-area div, #print-area li {
                margin-bottom: 6px;
                text-align: left;
              }
              
              #print-area ul, #print-area ol {
                margin-top: 4px;
                margin-bottom: 8px;
                padding-left: 20px;
              }
              
              #print-area h1 {
                font-size: 18px !important;
                margin-bottom: 8px !important;
              }
              
              #print-area h2 {
                font-size: 16px !important;
                margin-bottom: 6px !important;
              }
              
              #print-area h3 {
                font-size: 14px !important;
                margin-bottom: 4px !important;
              }
              
              img {
                max-width: 120px;
                height: auto;
                margin: 10px 0;
                border: 1px solid #ddd;
                padding: 2px;
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
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
    </div>
  );
}