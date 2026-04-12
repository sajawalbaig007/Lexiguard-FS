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

    // Force clean PDF styling with better text handling
    clone.style.background = "#ffffff";
    clone.style.color = "#000000";
    clone.style.padding = "20px";
    clone.style.fontSize = "14px";
    clone.style.lineHeight = "1.6";
    clone.style.wordWrap = "break-word";
    clone.style.overflowWrap = "break-word";
    
    // Ensure all text content wraps properly
    const allElements = clone.querySelectorAll("*");
    allElements.forEach((el) => {
      (el as HTMLElement).style.maxWidth = "100%";
      (el as HTMLElement).style.wordWrap = "break-word";
      (el as HTMLElement).style.overflowWrap = "break-word";
    });

    const opt = {
      margin: [10, 10, 10, 10] as [number, number, number, number],
      filename: `${templateName
        .replace(/\s+/g, "_")
        .toLowerCase()}_document.pdf`,
      image: {
        type: "jpeg" as const,
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        logging: false,
      },
      jsPDF: {
        unit: "mm" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
      pagebreak: {
        mode: ["css", "legacy"] as ["css", "legacy"],
        before: ".page-break-before",
        after: ".page-break-after",
        avoid: ["h1", "h2", ".avoid-break"],
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
          className="bg-[#fffdf9] w-full max-w-[1100px] min-h-[1150px] shadow-xl border border-[#e8dccb]"
        >
          <div className="px-6 lg:px-20 py-10 lg:py-20">
            
            {/* CONTENT - Fixed word wrapping */}
            <div
              className="text-[15px] lg:text-[16px] text-[#2f2a24] font-serif text-justify"
              style={{ 
                lineHeight: "1.8",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal"
              }}
              dangerouslySetInnerHTML={{ __html: document }}
            />

            {/* IMAGE SAFETY STYLES */}
            <style jsx>{`
              img {
                max-width: 180px;
                height: auto;
                margin-top: 20px;
                border: 1px solid #ddd;
                padding: 4px;
                display: inline-block;
              }

              .logo-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                margin-top: 40px;
              }
              
              /* Ensure text wraps in PDF */
              div, p, span, h1, h2, h3, h4 {
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: normal;
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