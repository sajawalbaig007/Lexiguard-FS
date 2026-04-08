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

  // ✅ FIXED (safe null handling)
  const rawTemplate = params.get("template");
  const templateName = rawTemplate ? decodeURIComponent(rawTemplate) : null;

  // ================= STATE =================
  const [questions, setQuestions] = useState<Question[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const [document, setDocument] = useState("");
  const [loadingDoc, setLoadingDoc] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentQ = questions[currentIndex];

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

        console.time("fetchQuestions");
        const data = await fetchQuestions(templateName as string);
        console.timeEnd("fetchQuestions");

        if (!Array.isArray(data)) {
          throw new Error("Invalid questions format");
        }

        setQuestions(data);

        setMessages((prev) => [
          prev[0],
          {
            role: "ai",
            content: data[0]?.question || "Let's begin.",
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
  const addMessage = (role: "ai" | "user", content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  // ================= NEXT =================
  const handleNext = async () => {
    if (!input.trim() || !currentQ || loadingDoc) return;

    const userInput = input.trim();

    addMessage("user", userInput);

    const updatedAnswers = {
      ...answers,
      [currentQ.name]: userInput,
    };

    setAnswers(updatedAnswers);
    setInput("");

    // NEXT QUESTION
    if (currentIndex + 1 < questions.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      setTimeout(() => {
        addMessage("ai", questions[nextIndex]?.question || "");
      }, 300);
    }

    // GENERATE DOCUMENT
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
              {msg.content}
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