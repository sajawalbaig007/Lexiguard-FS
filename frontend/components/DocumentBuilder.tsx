 "use client";

import { useState } from "react";
import getTemplateQuestions from "../modules/getTemplateQuestions";
import getHelpContent from "../modules/getHelpContent";
import generateDocument from "../modules/generateDocument";

export default function DocumentBuilder({ template }: { template: string }) {
  const steps = getTemplateQuestions(template);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [previewMode, setPreviewMode] = useState<null | "sidebar" | "final">(null);

  const [errors, setErrors] = useState<any>({});
  const [animateError, setAnimateError] = useState(false);

  // Skip feature states
  const [showSkipPopup, setShowSkipPopup] = useState(false);
  const [skippedFields, setSkippedFields] = useState<string[]>([]);

  const totalSteps = steps.length || 1;
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const stepName = steps[currentStep]?.step;
  const help = getHelpContent(template, stepName);

  const nextStep = () => {
    const fields = steps[currentStep]?.fields || [];
    let newErrors: any = {};

    fields.forEach((field: any) => {
      if (!formData[field.name] && !skippedFields.includes(field.name)) {
        newErrors[field.name] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setAnimateError(true);

      setTimeout(() => {
        setAnimateError(false);
        setErrors({});
      }, 500);

      return;
    }

    setErrors({});
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Skip entire step fields
  const confirmSkipStep = () => {
    const fields = steps[currentStep]?.fields || [];
    const fieldNames = fields.map((f: any) => f.name);

    setSkippedFields([...skippedFields, ...fieldNames]);
    setShowSkipPopup(false);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // ----------- NEW FUNCTION 1 -----------
 // ----------- NEW FUNCTION 1 (UPDATED) -----------
const handleSaveDocument = () => {
  try {
    let documentText = generateDocument(template, formData);

    // Remove skipped fields (same logic as preview)
    skippedFields.forEach((field) => {
      const regex = new RegExp(`.*{{${field}}}.*\\n?`, "g");
      documentText = documentText.replace(regex, "");
    });

    // Clean placeholders
    documentText = documentText.replace(/\{\{(.*?)\}\}/g, "");

    const newDoc = {
      id: Date.now(),
      title: template,
      time: "Just now",
      content: documentText,
      createdAt: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("recentDocuments") || "[]");

    const updated = [newDoc, ...existing];

    localStorage.setItem("recentDocuments", JSON.stringify(updated));

    alert("Document saved successfully");
  } catch (err) {
    console.error(err);
    alert("Error saving document");
  }
};

  // ----------- NEW FUNCTION 2 -----------
  const handleDownloadPDF = async () => {
    const element = document.querySelector(".print-document");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: 0.5,
      filename: `${template}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  if (previewMode) {
    let documentText = generateDocument(template, formData);

    // Remove skipped fields from template
    skippedFields.forEach((field) => {
      const regex = new RegExp(`.*{{${field}}}.*\\n?`, "g");
      documentText = documentText.replace(regex, "");
    });

    if (previewMode === "sidebar") {
      documentText = documentText.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        return `<span class="text-amber-700">${key}</span>`;
      });
    }

    if (previewMode === "final") {
      documentText = documentText.replace(/\{\{(.*?)\}\}/g, "");
    }

    const handlePrint = () => {
      window.print();
    };

    if (previewMode === "sidebar") {
      return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[12000]">
          <div className="bg-white w-[800px] h-[90vh] shadow-2xl border relative p-16 overflow-y-auto">
            <button
              onClick={() => setPreviewMode(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <div className="text-center mb-10 border-b pb-6">
              <h1 className="text-3xl font-semibold tracking-widest font-serif">
                {template.toUpperCase()}
              </h1>
              <p className="text-xs text-gray-500 mt-2">
                Legal Agreement Document
              </p>
            </div>

            <div
              className="text-[15px] text-gray-900 font-serif text-justify"
              style={{
                lineHeight: "1.9",
                wordSpacing: "1px",
              }}
              dangerouslySetInnerHTML={{ __html: documentText }}
            />
          </div>
        </div>
      );
    }

   
  return (
  <div className="w-screen h-screen bg-[#f5efe6] overflow-y-auto relative">

    <div className="flex justify-center py-16">
       <div className="print-document bg-[#fffdf9] w-[850px] min-h-[1150px] shadow-2xl border border-[#e8dccb] px-24 py-20 mb-32 print:shadow-none print:border-none">

        {/* Header */}
        <div className="border-b border-[#d6c7b0] pb-8 mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
            {template.toUpperCase()}
          </h1>
          <p className="text-sm text-[#8a7a64] mt-3 tracking-wide">
            Legal Agreement Document
          </p>
        </div>

        {/* Document Body */}
        <div
          className="text-[16px] text-[#2f2a24] font-serif text-justify"
          style={{
            lineHeight: "2",
            wordSpacing: "1.5px",
          }}
          dangerouslySetInnerHTML={{ __html: documentText }}
        />

        {/* Footer */}
        <div className="mt-24 text-xs text-center text-[#a89a86] tracking-wide">
          Generated Document — Verified Legal Template
        </div>
      </div>
    </div>

    {/* Fixed Bottom Navbar */}
    <div className="fixed bottom-0 left-0 w-full bg-[#3e2f1c] text-white flex justify-center py-4 shadow-2xl z-[12000]">
      <div className="flex gap-8">

        <button
          onClick={handleSaveDocument}
          className="px-6 py-2 bg-[#5a4630] rounded-md hover:bg-[#6b543a] transition"
        >
          Save Document
        </button>

        <button
          onClick={handleDownloadPDF}
          className="px-6 py-2 bg-[#7a5c3a] rounded-md hover:bg-[#8b6a45] transition"
        >
          Download PDF
        </button>

        <button
          onClick={() => setPreviewMode(null)}
          className="px-6 py-2 bg-black rounded-md hover:bg-gray-800 transition"
        >
          Return to Edit
        </button>

      </div>
    </div>

  </div>
);
  }
  return (
    <div className="flex w-screen h-screen bg-white overflow-hidden">

      {/* Skip Confirmation Popup */}
      {showSkipPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[13000]">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">
            <h2 className="text-lg font-semibold mb-4">
              Do you want to skip this step?
            </h2>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSkipPopup(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmSkipStep}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Skip Step
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-[260px] bg-gray-50 border-r p-5 flex flex-col">
        <div className="mb-6">
          <h2 className="font-semibold text-lg text-gray-800">{template}</h2>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-700 text-xs bg-green-100 px-2 py-1 rounded-full">
              ✓ Verified
            </span>
          </div>

          <div className="mt-4">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-[#2D4C8C] h-2 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">{progress}% completed</p>
          </div>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto">
          {steps.map((s: any, i: number) => (
            <div
              key={i}
              className={`p-2 rounded-md text-sm flex items-center gap-2
              ${
                i === currentStep
                  ? "bg-gray-200 font-semibold text-gray-900"
                  : i < currentStep
                  ? "text-gray-500"
                  : "text-gray-700"
              }`}
            >
              <span className="text-xs">{i + 1}</span>
              {s.step}
            </div>
          ))}
        </div>

        <button
          onClick={() => setPreviewMode("sidebar")}
          className="mt-4 border p-2 rounded-lg text-sm hover:bg-gray-100 text-gray-800"
        >
          Preview ↗
        </button>
      </div>

      <div className="flex-1 flex">
        <div className="flex-1 p-10 flex flex-col overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {steps[currentStep]?.step}
            </h1>
          </div>

          <div className="bg-gray-50 border rounded-xl p-6">
            {steps[currentStep]?.fields.map((field: any) => (
              <div
                key={field.name}
                className={`mb-5 transition-transform duration-200 ease-out ${
                  animateError && errors[field.name] ? "scale-[1.03]" : ""
                }`}
              >
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  className={`border p-3 w-full rounded-lg text-gray-800 transition-all duration-200
                  ${errors[field.name] ? "border-red-500 bg-red-50" : ""}`}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.name]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-5 py-2 rounded-lg bg-gray-200 disabled:opacity-50 text-gray-800"
            >
              Back
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSkipPopup(true)}
                className="px-6 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
              >
                Skip
              </button>

              <button
                onClick={() => {
                  if (currentStep === steps.length - 1) {
                    setPreviewMode("final");
                  } else {
                    nextStep();
                  }
                }}
                className="px-6 py-2 bg-[#2D4C8C] text-white rounded-lg hover:bg-[#1f3563]"
              >
                {currentStep === steps.length - 1 ? "Preview" : "Next"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-[300px] border-l p-6 bg-gray-50 hidden lg:block overflow-y-auto">
          <h3 className="font-semibold mb-3 text-gray-900">
            {help?.title}
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            {help?.description}
          </p>

          <ul className="text-sm text-gray-700 space-y-2">
            {help?.points?.map((point: string, i: number) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}