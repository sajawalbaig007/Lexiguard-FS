"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef, Suspense } from "react";
import { generateDocument, fetchQuestions } from "@/modules/api/contracts";
import DocumentPreviewModal from "@/components/DocumentPreviewModal";

type Question = {
  name: string;
  question: string;
  example?: string;
  recommendation?: string;
  options?: string[];
};

type Message = {
  role: "ai" | "user";
  content: string;
  meta?: Question;
};

function AIChatPage() {
  const router = useRouter();
  const params = useSearchParams();

  const rawTemplate = params.get("template");
  const templateName = rawTemplate ? decodeURIComponent(rawTemplate) : null;

  // ================= STATE =================
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [logoStep, setLogoStep] = useState(0);
  const [logoCount, setLogoCount] = useState<1 | 2 | null>(null);
  const [logoFiles, setLogoFiles] = useState<(File | null)[]>([]);

  const [showLogoPopup, setShowLogoPopup] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [input, setInput] = useState("");
  const [document, setDocument] = useState("");
  const [loadingDoc, setLoadingDoc] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const [openTipIndex, setOpenTipIndex] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentQ = questions[currentIndex];

  const convertLogoToBase64 = async (files: (File | null)[]) => {
    const validFiles = files.filter(Boolean) as File[];

    return Promise.all(
      validFiles.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
          })
      )
    );
  };

  

  // ================= RESET LOGIC (NEW - NO UI CHANGE) =================
  const resetLogoFlow = () => {
    setLogoStep(0);
    setLogoCount(null);
    setLogoFiles([]);
    setShowLogoPopup(false);
  };

  // ================= INIT CHAT =================
  useEffect(() => {
    if (!templateName) return;

    setMessages([
      {
        role: "ai",
        content: `👋 Hello! Let's create your ${templateName}.`,
      },
      {
        role: "ai",
        content: "🤖 Preparing your questions...",
      },
    ]);
  }, [templateName]);

  // ================= FETCH QUESTIONS =================
  useEffect(() => {
    if (!templateName) return;

    async function loadQuestions() {
      try {
        setLoadingQuestions(true);

        const data = await fetchQuestions(templateName as string);

        if (!Array.isArray(data)) {
          throw new Error("Invalid questions format");
        }

        setQuestions(data);

        setMessages((prev) => [
          prev[0],
          {
            role: "ai",
            content: data[0]?.question || "Let's begin.",
            meta: data[0],
          },
        ]);
      } catch (err) {
        console.error(err);
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: "❌ Failed to load questions. Please retry.",
          },
        ]);
      } finally {
        setLoadingQuestions(false);
      }
    }

    loadQuestions();
  }, [templateName]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================= MESSAGE HANDLER =================
  const addMessage = (
    role: "ai" | "user",
    content: string,
    meta?: Question
  ) => {
    setMessages((prev) => [...prev, { role, content, meta }]);
  };

  // ================= NEXT =================
  const handleNext = async () => {
    if (!currentQ || loadingDoc) return;

    if (!input.trim()) return;

    const userInput = input.trim();
    addMessage("user", userInput);

    const updatedAnswers = {
      ...answers,
      [currentQ.name]: userInput,
    };

    setAnswers(updatedAnswers);
    setInput("");

    if (currentIndex + 1 < questions.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      setTimeout(() => {
        addMessage(
          "ai",
          questions[nextIndex]?.question || "",
          questions[nextIndex]
        );
      }, 300);
    } else {
      setAnswers(updatedAnswers);
      setShowLogoPopup(true);
    }
  };

  // ================= FINAL DOC =================
  const generateFinalDocument = async (updatedAnswers: any) => {
    if (!templateName) return;

    setLoadingDoc(true);
    addMessage("ai", "📝 Generating your document...");

    try {
      const res = await generateDocument(templateName, updatedAnswers);

      setDocument(res?.document || "<p>Error generating document</p>");

      addMessage("ai", "✅ Document generated successfully!");
    } catch (err) {
      console.error(err);
      addMessage("ai", "❌ Error generating document");
    } finally {
      setLoadingDoc(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleNext();
  };

  const handleClose = () => {
    router.back();
  };

   const handleFinalSubmit = async () => {
     
       console.log("LOGO COUNT:", logoCount);
  console.log("LOGO FILES:", logoFiles);


  setShowLogoPopup(false);

  const processedAnswers = { ...answers };

  const finalFiles = Array.from({ length: logoCount || 0 }).map(
    (_, i) => logoFiles[i]
  );

  if (finalFiles.length > 0) {
    const base64Logos = await convertLogoToBase64(finalFiles);
    processedAnswers["logos"] = base64Logos;
  }

  await generateFinalDocument(processedAnswers);
};

  // ================= LOGO VALIDATION (FIXED) =================
  const isLogoValid =
  logoCount !== null &&
  logoFiles.filter(Boolean).length === logoCount;

  // ================= UI =================
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] p-4 text-white flex justify-between items-center shadow">
        <div>
          <h2 className="font-semibold text-lg">🤖 AI Assistant</h2>
          <p className="text-xs opacity-80">{templateName}</p>
        </div>
        <button
          onClick={handleClose}
          className="text-white text-xl font-bold hover:opacity-70"
        >
          ✕
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] text-white rounded-br-sm"
                  : "bg-white border shadow text-gray-800 rounded-bl-sm"
              }`}
            >
              <div>{msg.content}</div>

              {msg.meta && (msg.meta.example || msg.meta.recommendation) && (
                <button
                  onClick={() =>
                    setOpenTipIndex(openTipIndex === idx ? null : idx)
                  }
                  className="mt-2 text-xs text-blue-500 hover:underline"
                >
                  💡 View help
                </button>
              )}

              {openTipIndex === idx && msg.meta && (
                <div className="mt-2 text-xs text-gray-600 border-t pt-2 space-y-1">
                  {msg.meta.example && <div>💡 {msg.meta.example}</div>}
                  {msg.meta.recommendation && (
                    <div>📌 {msg.meta.recommendation}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {loadingQuestions && (
          <div className="text-sm text-gray-500 animate-pulse">
            ⏳ Loading questions...
          </div>
        )}

        {loadingDoc && (
          <div className="text-sm text-gray-500 animate-pulse">
            ⏳ Generating document...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="p-4 border-t bg-white sticky bottom-0">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              loadingQuestions
                ? "Waiting for questions..."
                : "Type your answer..."
            }
            disabled={loadingQuestions}
            className="flex-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2F4EA1]"
          />

          <button
            onClick={handleNext}
            disabled={loadingQuestions || loadingDoc}
            className="bg-[#2F4EA1] text-white px-6 rounded-xl hover:bg-[#243d82] disabled:opacity-50"
          >
            Send →
          </button>
        </div>

        {!loadingQuestions && (
          <p className="text-xs text-gray-400 mt-2 text-center">
            Question {currentIndex + 1} of {questions.length}
          </p>
        )}
      </div>

      {/* LOGO POPUP */}
      {showLogoPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={resetLogoFlow}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {logoStep === 0 && (
              <>
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">🎉</div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Do you want to add a logo?
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Make your document look professional
                  </p>
                </div>

                <div className="flex justify-between gap-3">
                  <button onClick={resetLogoFlow} className="flex-1 py-2 rounded-xl border text-gray-600 hover:bg-gray-100">
                    No
                  </button>

                  <button
                    onClick={() => setLogoStep(1)}
                    className="flex-1 py-2 rounded-xl bg-[#2F4EA1] text-white hover:bg-[#243d82]"
                  >
                    Yes
                  </button>
                </div>
              </>
            )}

            {logoStep === 1 && (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    How many logos?
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Choose number of logos to upload
                  </p>
                </div>

                <div className="flex justify-between gap-3">
                  <button
                    onClick={() => {
                      setLogoCount(1);
                      setLogoStep(2);
                    }}
                    className="flex-1 py-2 rounded-xl border hover:bg-gray-100"
                  >
                    1 Logo
                  </button>

                  <button
                    onClick={() => {
                      setLogoCount(2);
                      setLogoStep(2);
                    }}
                    className="flex-1 py-2 rounded-xl border hover:bg-gray-100"
                  >
                    2 Logos
                  </button>
                </div>
              </>
            )}

            {logoStep === 2 && (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Upload your logo{logoCount === 2 ? "s" : ""}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Required field{logoCount === 2 ? "s" : ""}
                  </p>
                </div>

                <div className="flex justify-center gap-4 mb-6">
                  {Array.from({ length: logoCount || 1 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="relative w-24 h-24 rounded-full border-2 border-dashed border-gray-300 hover:border-[#2F4EA1] cursor-pointer overflow-hidden flex items-center justify-center"
                      onClick={() => fileInputRefs.current[idx]?.click()}
                    >
                      <input
  ref={(el) => {
    fileInputRefs.current[idx] = el;
  }}
  id={`logo-upload-${idx}`}
  type="file"
  accept="image/*"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoFiles((prev) => {
      // 🔥 ensure array is always correct size (1 or 2)
      const updated = Array.from({ length: logoCount || 0 }).map(
        (_, i) => prev[i] || null
      );

      updated[idx] = file;

      return updated;
    });
  }}
/>

                      {logoFiles[idx] ? (
                        <img
                          src={URL.createObjectURL(logoFiles[idx])}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-gray-400">
                          <span className="text-2xl">+</span>
                          <span className="text-[10px]">Upload</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      setLogoStep(1);
                      setLogoFiles([]);
                    }}
                    className="text-sm text-gray-500 hover:text-gray-800"
                  >
                    Back
                  </button>

                  <button
                    disabled={!isLogoValid}
                    onClick={handleFinalSubmit}
                    className="bg-[#2F4EA1] text-white px-6 py-2 rounded-xl hover:bg-[#243d82] disabled:opacity-40"
                  >
                    Generate →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* PREVIEW */}
      {document && templateName && (
        <DocumentPreviewModal
          document={document}
          templateName={templateName}
          onClose={() => setDocument("")}
        />
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AIChatPage />
    </Suspense>
  );
}