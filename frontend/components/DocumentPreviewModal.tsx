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

  // ================= DOWNLOAD =================
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#f5efe6] overflow-y-auto">
      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center z-50 no-print">
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
      <div className="pt-20 pb-32">
        <div className="flex justify-center">
          <div
            id="print-area"
            style={{
              width: "200mm", // 🔥 thora chhota for right margin feel
              minHeight: "297mm",
              padding: "20mm 25mm 20mm 20mm", // 🔥 RIGHT SIDE EXTRA SPACE
              background: "#fffdf9",
              color: "#2f2a24",
              boxSizing: "border-box",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                borderBottom: "1px solid #d6c7b0",
                paddingBottom: "20px",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "28px",
                  letterSpacing: "3px",
                  fontFamily: "serif",
                  color: "#3e2f1c",
                  margin: 0,
                }}
              >
                DOCUMENT
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  color: "#8a7a64",
                  marginTop: "10px",
                }}
              >
                Legal Agreement Document
              </p>
            </div>

            {/* CONTENT */}
            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                textAlign: "justify",
                fontFamily: "Times New Roman, serif",
                paddingRight: "20px", // 🔥 CONTENT RIGHT GAP (px-5 approx)
              }}
              dangerouslySetInnerHTML={{ __html: document }}
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      {!hideActions && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-3 flex justify-center gap-10 no-print">
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

      {/* PRINT FIX */}
      <style jsx global>{`
        @media print {
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white;
          }

          body * {
            visibility: hidden;
          }

          #print-area,
          #print-area * {
            visibility: visible;
          }

          #print-area {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);

            width: 200mm;
            min-height: 297mm;

            padding: 20mm 25mm 20mm 20mm; /* 🔥 RIGHT SPACE */

            background: #fffdf9;
            box-sizing: border-box;
          }

          .no-print {
            display: none !important;
          }

          p {
            page-break-inside: avoid;
            margin-bottom: 12px;
          }

          h1,
          h2,
          h3 {
            page-break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
}