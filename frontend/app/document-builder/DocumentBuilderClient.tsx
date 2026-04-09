 "use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Eye,
  Save,
  Download,
  ArrowLeft,
} from "lucide-react";

import { saveManualDocument } from "@/modules/api/contracts";
import getManualTemplateQuestions from "@/modules/manualTemplateQuestions";
import getManualHelpContent from "@/modules/manualHelpContent";
import manualGenerateDocument from "@/modules/manualGenerateDocument";

type Field = {
  name: string;
  label: string;
  type: string;
};

type Step = {
  step: string;
  fields: Field[];
};

type FormData = {
  [key: string]: string;
};

type Errors = {
  [key: string]: boolean;
};

export default function DocumentBuilderClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const template = searchParams.get("template") || "Document";

  const steps: Step[] = getManualTemplateQuestions(template);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [previewMode, setPreviewMode] = useState<null | "sidebar" | "final">(null);
  const [errors, setErrors] = useState<Errors>({});
  const [animateError, setAnimateError] = useState(false);
  const [showSkipPopup, setShowSkipPopup] = useState(false);
  const [skippedFields, setSkippedFields] = useState<string[]>([]);
  const [showHelpMobile, setShowHelpMobile] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const totalSteps = steps.length || 1;
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const stepName = steps[currentStep]?.step;
  const help = getManualHelpContent(template, stepName);

  const nextStep = () => {
    const fields = steps[currentStep]?.fields || [];
    const newErrors: Errors = {};

    fields.forEach((field) => {
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
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const confirmSkipStep = () => {
    const fields = steps[currentStep]?.fields || [];
    const fieldNames = fields.map((f) => f.name);

    setSkippedFields((prev) => [...prev, ...fieldNames]);
    setShowSkipPopup(false);

    if (currentStep === steps.length - 1) {
      setPreviewMode("final");
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const buildDocument = (mode: "sidebar" | "final") => {
    let documentText = manualGenerateDocument(template, formData);

    skippedFields.forEach((field) => {
      const regex = new RegExp(`.*{{${field}}}.*\\n?`, "g");
      documentText = documentText.replace(regex, "");
    });

    if (mode === "sidebar") {
      documentText = documentText.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        return `<span style="color:#b45309; font-weight:600;">${key}</span>`;
      });
    }

    if (mode === "final") {
      documentText = documentText.replace(/\{\{(.*?)\}\}/g, "");
    }

    return documentText;
  };

  const handleSaveDocument = async () => {
    if (saving) return;

    try {
      setSaving(true);
      setSaved(false);

      const documentHTML = buildDocument("final");

      const cleanedFormData: Record<string, string> = {
        ...formData,
        generatedDocument: documentHTML,
      };

      skippedFields.forEach((field) => {
        delete cleanedFormData[field];
      });

      const response = await saveManualDocument(template, documentHTML, cleanedFormData);

      if (!response) {
        alert("Failed to save document");
        return;
      }

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);
    } catch (err) {
      console.error("Save error:", err);
      alert("Error saving document");
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadPDF = async () => {
  await handleSaveDocument();

  const element = document.querySelector(".print-document") as HTMLElement | null;
  if (!element) return;

  // Temporarily hide bottom action bar to remove any borders/shadows
  const bottomBar = document.getElementById("bottomActionBar");
  if (bottomBar) bottomBar.style.display = "none";

  // Ensure element matches PDF width exactly
  element.style.width = "7.8in";
  element.style.maxWidth = "7.8in";
  element.style.margin = "0 auto";

  const html2pdf = (await import("html2pdf.js")).default;
 const opt = {
  margin: [0.2, 0.2, 0.2, 0.2] as [number, number, number, number],

  filename: `${template}.pdf`,

  image: {
    type: "jpeg" as const,
    quality: 0.98,
  },

  html2canvas: {
    scale: 2,
    useCORS: true,
    scrollX: 0,
    scrollY: 0,
    logging: true,
    backgroundColor: null, // ✅ IMPORTANT: removes unwanted white border effect
  },

  jsPDF: {
    unit: "in" as const,
    format: [8.5, 11] as [number, number], // Letter size
    orientation: "portrait" as const,
  },
};

  // Generate PDF
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .finally(() => {
      // Restore bottom bar after PDF is saved
      if (bottomBar) bottomBar.style.display = "flex";
    });
};

  if (previewMode) {
    const documentText = buildDocument(previewMode);

    return (
      <div className="w-screen h-screen bg-[#f5efe6] overflow-y-auto relative">
        <button
          onClick={() => setPreviewMode(null)}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-black transition"
        >
          ✕
        </button>

        <div className="flex justify-center py-8 lg:py-16">
          <div className="print-document bg-[#fffdf9] w-[95%] lg:w-[900px] min-h-[1150px] shadow-2xl px-6 lg:px-24 py-10 lg:py-20 mb-32 rounded-sm">
            <div dangerouslySetInnerHTML={{ __html: documentText }} />
          </div>
        </div>

     {previewMode === "final" && (
  <div
    style={{
      width: "7.8in",
      maxWidth: "100%",
      minHeight: "11in",
      margin: "0 auto",
      padding: "20px 40px",
      boxSizing: "border-box",
      backgroundColor: "#fffdf9",
      color: "#1a1a1a",
      fontFamily: "'Times New Roman', serif",
      position: "relative",
    }}
    className="print-document"
  >
    {/* Your document content goes here */}

    {/* Bottom Action Bar */}
    <div
      id="bottomActionBar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        border: "none",
        borderTop: "none", // <-- Remove border
        boxShadow: "none", // <-- Remove shadow
        padding: "12px 0",
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
      <button
        onClick={handleSaveDocument}
        disabled={saving}
        className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition disabled:opacity-50"
      >
        <Save />
        <span className="text-xs">
          {saving ? "Saving..." : saved ? "Saved" : "Save"}
        </span>
      </button>

      <button
        onClick={handleDownloadPDF}
        className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition"
      >
        <Download />
        <span className="text-xs">Download</span>
      </button>

      <button
        onClick={() => setPreviewMode(null)}
        className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition"
      >
        <ArrowLeft />
        <span className="text-xs">Edit</span>
      </button>
    </div>
  </div>
)}
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen bg-white overflow-hidden relative">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50 border-b p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-black">{template}</span>
          <button onClick={() => setShowHelpMobile(true)} className="text-xl">
            💡
          </button>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-[#2D4C8C] h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Mobile Help */}
      {showHelpMobile && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="w-[85%] bg-white h-full p-6 overflow-y-auto relative">
            <button
              onClick={() => setShowHelpMobile(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="font-semibold mb-3 text-gray-900">{help?.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{help?.description}</p>

            <ul className="text-sm text-gray-700 space-y-2">
              {help?.points?.map((point: string, i: number) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Skip Popup */}
      {showSkipPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] max-w-[90%]">
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

      {/* Sidebar */}
      <div className="w-[70px] lg:w-[260px] bg-gray-50 border-r p-3 lg:p-5 flex flex-col pt-[80px] lg:pt-5">
        <div className="space-y-2 flex-1 overflow-y-auto">
          {steps.map((s: Step, i: number) => (
            <div
              key={i}
              className={`p-2 rounded-md text-sm flex items-center gap-2 justify-center lg:justify-start ${
                i === currentStep
                  ? "bg-gray-200 font-semibold text-gray-900"
                  : i < currentStep
                  ? "text-gray-500"
                  : "text-gray-700"
              }`}
            >
              <span className="text-xs">{i + 1}</span>
              <span className="hidden lg:block">{s.step}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-4 border p-2 rounded-lg text-sm hover:bg-gray-100 text-gray-800"
        >
          Back
        </button>

        <button
          onClick={() => setPreviewMode("sidebar")}
          className="mt-2 border p-2 rounded-lg text-sm hover:bg-gray-100 text-gray-800"
        >
          Preview
        </button>
      </div>

      {/* Main Form */}
      <div className="flex-1 flex pt-[80px] lg:pt-0">
        <div className="flex-1 p-5 lg:p-10 flex flex-col overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
              {steps[currentStep]?.step}
            </h1>
          </div>

          <div className="bg-gray-50 border rounded-xl p-4 lg:p-6">
            {steps[currentStep]?.fields.map((field: Field) => (
              <div key={field.name} className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  className={`border p-3 w-full rounded-lg text-gray-800 transition ${
                    errors[field.name]
                      ? animateError
                        ? "border-red-500 bg-red-50"
                        : "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
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

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-5 py-2 rounded-lg bg-gray-200 disabled:opacity-50 text-gray-800 hidden sm:flex items-center gap-2"
            >
              Back
            </button>

            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-2 rounded-lg bg-gray-200 disabled:opacity-50 text-gray-800 sm:hidden"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSkipPopup(true)}
                className="px-6 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 hidden sm:flex"
              >
                Skip
              </button>

              <button
                onClick={() => setShowSkipPopup(true)}
                className="p-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 sm:hidden"
              >
                <SkipForward size={20} />
              </button>

              <button
                onClick={() => {
                  if (currentStep === steps.length - 1) {
                    setPreviewMode("final");
                  } else {
                    nextStep();
                  }
                }}
                className="px-6 py-2 bg-[#2D4C8C] text-white rounded-lg hover:bg-[#1f3563] hidden sm:flex"
              >
                {currentStep === steps.length - 1 ? "Preview" : "Next"}
              </button>

              <button
                onClick={() => {
                  if (currentStep === steps.length - 1) {
                    setPreviewMode("final");
                  } else {
                    nextStep();
                  }
                }}
                className="p-2 bg-[#2D4C8C] text-white rounded-lg hover:bg-[#1f3563] sm:hidden"
              >
                {currentStep === steps.length - 1 ? <Eye size={20} /> : <ChevronRight size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Help Sidebar */}
        <div className="w-[300px] border-l p-6 bg-gray-50 hidden lg:block overflow-y-auto">
          <h3 className="font-semibold mb-3 text-gray-900">{help?.title}</h3>
          <p className="text-sm text-gray-700 mb-3">{help?.description}</p>
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