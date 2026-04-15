"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef, Suspense } from "react";
import { generateDocument, fetchQuestions } from "@/modules/api/contracts";
import DocumentPreviewModal from "@/components/DocumentPreviewModal";

type Question = {
  name: string;
  question: string;
};

type Message = {
  role: "ai" | "user";
  content: string;
};

function AIChatPage() {
  const router = useRouter();
  const params = useSearchParams();
  const rawTemplate = params.get("template");
  const templateName = rawTemplate ? decodeURIComponent(rawTemplate) : null;

  // ================= GLOBAL STATE =================
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const [document, setDocument] = useState("");
  const [loadingDoc, setLoadingDoc] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentQ = questions[currentIndex];

  // ================= FETCH QUESTIONS =================
  useEffect(() => {
    if (!templateName) {
      setError("Invalid template. Please go back and select one.");
      setLoading(false);
      return;
    }

    async function loadQuestions() {
      try {
        setLoading(true);

        const data = await fetchQuestions(templateName as string);

        // ✅ SAFE VALIDATION
        if (!Array.isArray(data)) {
          throw new Error("Invalid questions format");
        }

        setQuestions(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load AI assistant. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [templateName]);

  // ================= START CONVERSATION =================
  useEffect(() => {
    if (questions.length > 0 && templateName) {
      setMessages([
        {
          role: "ai",
          content: `👋 Hello! Let's create your ${templateName}.`,
        },
        {
          role: "ai",
          content: questions[0]?.question || "Let's get started.",
        },
      ]);
    }
  }, [questions, templateName]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================= HANDLERS =================
  const addMessage = (role: "ai" | "user", content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  const handleNext = async () => {
    // ✅ Prevent empty + prevent spam while generating
    if (!input.trim() || !currentQ || loadingDoc) return;

    const userInput = input.trim();

    addMessage("user", userInput);

    const updatedAnswers = {
      ...answers,
      [currentQ.name]: userInput,
    };

    setAnswers(updatedAnswers);
    setInput("");

    // ================= NEXT QUESTION =================
    if (currentIndex + 1 < questions.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      setTimeout(() => {
        addMessage("ai", questions[nextIndex]?.question || "");
      }, 300);
    }

    // ================= GENERATE DOCUMENT =================
    else {
      if (!templateName) return;

      setLoadingDoc(true);
      addMessage("ai", "📝 Generating your document...");

      try {
        const res = await generateDocument(
          templateName as string,
          updatedAnswers
        );

        setDocument(res?.document || "<p>Error generating document</p>");

        addMessage("ai", "✅ Document generated successfully!");
      } catch (err) {
        console.error(err);
        addMessage("ai", "❌ Error generating document");
      } finally {
        setLoadingDoc(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleNext();
  };

  const handleClose = () => {
    router.back();
  };

  // ================= RENDER =================
  return (
    <div className="min-h-screen bg-[#F4F6FA] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1F2A44]">
            AI Document Builder
          </h1>
          <p className="text-gray-500 text-sm">
            Answer a few questions to generate your document
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="min-h-[200px] flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#2F4EA1] mb-4"></div>
            <p className="text-gray-600 text-sm">
              Loading AI Assistant...
            </p>
          </div>
        )}

        {/* ERROR */}
        {error && !loading && (
          <div className="min-h-[200px] flex flex-col items-center justify-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => router.refresh()}
              className="bg-[#2F4EA1] text-white px-4 py-2 rounded-lg"
            >
              Retry
            </button>
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && questions.length === 0 && (
          <div className="min-h-[200px] flex items-center justify-center">
            <p className="text-gray-500">
              No questions found for this template.
            </p>
          </div>
        )}

        {/* DOCUMENT PREVIEW */}
       {document && templateName && (
  <DocumentPreviewModal
    document={document}
    templateName={templateName}
    onClose={() => setDocument("")}
  />
)}

        {/* CHAT UI */}
        {!loading && !error && questions.length > 0 && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] p-4 text-white flex justify-between items-center">
              <div>
                <h2 className="font-semibold">🤖 AI Assistant</h2>
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
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] text-white rounded-br-sm"
                        : "bg-white border shadow text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loadingDoc && (
                <div className="text-sm text-gray-500">
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
                  placeholder="Type your answer..."
                  className="flex-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2F4EA1]"
                />
                <button
                  onClick={handleNext}
                  disabled={loadingDoc}
                  className="bg-[#2F4EA1] text-white px-6 rounded-xl hover:bg-[#243d82] disabled:opacity-50"
                >
                  Send →
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-2 text-center">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F6FA] py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="min-h-[200px] flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#2F4EA1] mb-4"></div>
              <p className="text-gray-600 text-sm">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <AIChatPage />
    </Suspense>
  );
}