"use client";

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
  // Save document
  const saveDocument = async () => {
    try {
      const response = await fetch("https://lexiguard-fs.onrender.com/api/contracts/save-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateName,
          content: document,
        }),
      });

      if (response.ok) {
        alert("Document saved successfully!");
      } else {
        alert("Failed to save document.");
      }
    } catch (error) {
      console.error("Error saving document:", error);
      alert("An error occurred while saving the document.");
    }
  };

  // ✅ FIXED download function// Download PDF function
  const downloadPDF = async () => {
    const element = window.document.getElementById("print-area");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: 0,
      filename: `${templateName}.pdf`,
      image: { type: "jpeg" as const, quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "pt",
        format: "a4",
        orientation: "portrait" as const,
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#f5efe6] overflow-y-auto">

      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center z-50">
        <h2 className="text-sm font-medium text-gray-800">
          📄 Document Preview
        </h2>

        <button
          onClick={onClose}
          className="text-xl hover:scale-110 transition"
        >
          ✖
        </button>
      </div>

      {/* Page */}
      <div className="flex justify-center pt-20 pb-32 px-4">
        <div
          id="print-area"
          className="print-document bg-[#fffdf9] w-[95%] lg:w-[850px] min-h-[1150px] shadow-2xl border border-[#e8dccb] px-6 lg:px-24 py-10 lg:py-20"
        >

          {/* Header */}
          <div className="border-b border-[#d6c7b0] pb-8 mb-12 text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
              DOCUMENT
            </h1>
            <p className="text-sm text-[#8a7a64] mt-3 tracking-wide">
              Legal Agreement Document
            </p>
          </div>

          {/* Content */}
          <div
            className="text-[15px] lg:text-[16px] text-[#2f2a24] font-serif text-justify"
            style={{ lineHeight: "2" }}
            dangerouslySetInnerHTML={{ __html: document }}
          />
        </div>
      </div>

      {!hideActions && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-3 flex justify-center gap-8">
          <button
            onClick={downloadPDF}
            className="flex flex-col items-center justify-center text-gray-700 hover:text-black hover:bg-gray-100 transition rounded-lg px-4 py-2 shadow-sm"
          >
            ⬇
            <span className="text-xs mt-1 font-medium">Download</span>
          </button>

          <button
            onClick={saveDocument}
            className="flex flex-col items-center justify-center text-gray-700 hover:text-black hover:bg-gray-100 transition rounded-lg px-4 py-2 shadow-sm"
          >
            💾
            <span className="text-xs mt-1 font-medium">Save</span>
          </button>

          <button
            onClick={onClose}
            className="flex flex-col items-center justify-center text-gray-700 hover:text-black hover:bg-gray-100 transition rounded-lg px-4 py-2 shadow-sm"
          >
            ←
            <span className="text-xs mt-1 font-medium">Back</span>
          </button>
        </div>
      )}

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }

          .print-document,
          .print-document * {
            visibility: visible;
          }

          .print-document {
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