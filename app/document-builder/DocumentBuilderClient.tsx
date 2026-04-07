"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import getTemplateQuestions from "@/modules/getTemplateQuestions";
import getHelpContent from "@/modules/getHelpContent";
import generateDocument from "@/modules/generateDocument";
import { ChevronLeft, ChevronRight, SkipForward, Eye, Save, Download, ArrowLeft } from "lucide-react";

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

export default function DocumentBuilderPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const template = searchParams.get("template") || "Document";

  const steps: Step[] = getTemplateQuestions(template);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [previewMode, setPreviewMode] = useState<null | "sidebar" | "final">(null);

  const [errors, setErrors] = useState<Errors>({});
  const [animateError, setAnimateError] = useState(false);

  const [showSkipPopup, setShowSkipPopup] = useState(false);
  const [skippedFields, setSkippedFields] = useState<string[]>([]);

  const [showHelpMobile, setShowHelpMobile] = useState(false);

  const totalSteps = steps.length || 1;
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const stepName = steps[currentStep]?.step;
  const help = getHelpContent(template, stepName);

  const nextStep = () => {
    const fields = steps[currentStep]?.fields || [];
    const newErrors: Errors = {};

    fields.forEach((field: Field) => {
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
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const confirmSkipStep = () => {
    const fields = steps[currentStep]?.fields || [];
    const fieldNames = fields.map((f: Field) => f.name);

    setSkippedFields((prev) => [...prev, ...fieldNames]);
    setShowSkipPopup(false);

    if (currentStep === steps.length - 1) {
      setPreviewMode("final");
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSaveDocument = () => {
    try {
      let documentText = generateDocument(template, formData);

      skippedFields.forEach((field) => {
        const regex = new RegExp(`.*{{${field}}}.*\\n?`, "g");
        documentText = documentText.replace(regex, "");
      });

      documentText = documentText.replace(/\{\{(.*?)\}\}/g, "");

      const newDoc = {
        id: Date.now(),
        title: template,
        time: "Just now",
        content: documentText,
        createdAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem("recentDocuments") || "[]");
      const updated = [newDoc, ...existing];

      localStorage.setItem("recentDocuments", JSON.stringify(updated));

      alert("Document saved successfully");
    } catch (err) {
      console.error(err);
      alert("Error saving document");
    }
  };

  const handleDownloadPDF = async () => {
    handleSaveDocument();

    const element = document.querySelector(".print-document") as HTMLElement | null;
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: 0.5,
      filename: `${template}.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in" as const, format: "letter" as const, orientation: "portrait" as const },
    };

    html2pdf().set(opt).from(element).save();
  };

  if (previewMode) {
    let documentText = generateDocument(template, formData);

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

    return (
      <div className="w-screen h-screen bg-[#f5efe6] overflow-y-auto relative">
        <div className="flex justify-center py-8 lg:py-16">
          <div className="print-document bg-[#fffdf9] w-[95%] lg:w-[850px] min-h-[1150px] shadow-2xl border border-[#e8dccb] px-6 lg:px-24 py-10 lg:py-20 mb-32">
            <div className="border-b border-[#d6c7b0] pb-8 mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-widest font-serif text-[#3e2f1c]">
                {template.toUpperCase()}
              </h1>
              <p className="text-sm text-[#8a7a64] mt-3 tracking-wide">
                Legal Agreement Document
              </p>
            </div>

            <div
              className="text-[15px] lg:text-[16px] text-[#2f2a24] font-serif text-justify"
              style={{ lineHeight: "2" }}
              dangerouslySetInnerHTML={{ __html: documentText }}
            />
          </div>
        </div>

        {/* Bottom Nav */}
        {previewMode === "final" && (
          <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-3 flex justify-center gap-6">
            <button
              onClick={handleSaveDocument}
              className="flex flex-col items-center text-gray-700 hover:text-black"
            >
              <Save />
              <span className="text-xs">Save</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex flex-col items-center text-gray-700 hover:text-black"
            >
              <Download />
              <span className="text-xs">Download</span>
            </button>

            <button
              onClick={() => setPreviewMode(null)}
              className="flex flex-col items-center text-gray-700 hover:text-black"
            >
              <ArrowLeft />
              <span className="text-xs">Edit</span>
            </button>
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
          <button onClick={() => setShowHelpMobile(true)} className="text-xl">💡</button>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div className="bg-[#2D4C8C] h-2 rounded" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* MOBILE HELP PANEL */}
      {showHelpMobile && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="w-[85%] bg-white h-full p-6 overflow-y-auto relative">
            <button
              onClick={() => setShowHelpMobile(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

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
      )}

      {/* Skip Popup */}
      {showSkipPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
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

      {/* Sidebar */}
      <div className="w-[70px] lg:w-[260px] bg-gray-50 border-r p-3 lg:p-5 flex flex-col pt-[80px] lg:pt-5">
        <div className="space-y-2 flex-1 overflow-y-auto">
          {steps.map((s: Step, i: number) => (
            <div
              key={i}
              className={`p-2 rounded-md text-sm flex items-center gap-2 justify-center lg:justify-start
              ${
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

      {/* Main */}
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
                  className={`border p-3 w-full rounded-lg text-gray-800
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
                {currentStep === steps.length - 1 ? (
                  <Eye size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

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