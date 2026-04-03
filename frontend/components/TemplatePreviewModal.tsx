"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import jsPDF from "jspdf";

// ------------------------ Types ------------------------
type TemplatePreviewProps = {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
  onUseTemplate?: () => void;
};

type Message = { role: "ai" | "user"; content: string };

// ------------------------ AI Assistant ------------------------
function AIAssistant({ onClose, templateTitle }: { onClose: () => void; templateTitle: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [contractData, setContractData] = useState({
    partyA: "",
    partyB: "",
    purpose: "",
    amount: "",
    duration: "",
    jurisdiction: "UK",
    specialClauses: "",
    date: new Date().toLocaleDateString(),
  });
  const [generatedContract, setGeneratedContract] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const questions = [
    { field: "partyA", question: "Enter Party A (Landlord/Employer/Discloser) full name:", placeholder: "John Doe" },
    { field: "partyB", question: "Enter Party B (Tenant/Employee/Recipient) full name:", placeholder: "Jane Smith" },
    { field: "purpose", question: "Describe the purpose/property/job role/confidential info:", placeholder: "Apartment at XYZ Street" },
    { field: "amount", question: "Enter amount/rent/salary (if applicable):", placeholder: "PKR 50,000" },
    { field: "duration", question: "Enter duration/term:", placeholder: "12 months" },
    { field: "specialClauses", question: "Any special clauses?", placeholder: "None" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, generatedContract]);

  const addMessage = (role: "ai" | "user", content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const startConversation = useCallback(async () => {
    addMessage("ai", `👋 Hello! I'm your AI Assistant. Let's create a ${templateTitle} contract.`);
    await delay(500);
    addMessage("ai", questions[0].question);
  }, [templateTitle]);

  useEffect(() => {
    startConversation();
    inputRef.current?.focus();
  }, [startConversation]);

  const handleSendMessage = async () => {
    if (!currentInput.trim() || loading) return;

    const userMessage = currentInput.trim();
    addMessage("user", userMessage);
    setContractData((prev) => ({ ...prev, [questions[step].field]: userMessage }));
    setCurrentInput("");

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep < questions.length) {
      await delay(300);
      addMessage("ai", questions[nextStep].question);
    } else {
      setLoading(true);
      addMessage("ai", "📝 Generating your professional contract...");
      try {
        const requestData = { contractType: templateTitle.toLowerCase(), ...contractData };
        const response = await fetch("https://lexiguard-fs.onrender.com/api/contracts/ai/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });
        const data = await response.json();
        if (data.success) {
          // Add bold headings
          const boldContract = data.contract.replace(
            /(={2,}\n\s*)(.*)(\n={2,})/g,
            (_: string, pre: string, title: string, post: string) => `${pre}**${title}**${post}`
          );
          setGeneratedContract(boldContract);
          addMessage("ai", "✅ Contract generated successfully!");
        } else {
          addMessage("ai", `❌ ${data.error || "Failed to generate contract"}`);
        }
      } catch (err) {
        console.error(err);
        addMessage("ai", "❌ Network error. Please check backend.");
      } finally {
        setLoading(false);
      }
    }
  };

  const copyContract = () => {
    navigator.clipboard.writeText(generatedContract);
    alert("✅ Contract copied!");
  };

  const downloadTXT = () => {
    const blob = new Blob([generatedContract], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${templateTitle.replace(/\s/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    doc.setFont("times", "normal");
    doc.setFontSize(12);

    let y = 40;
    const lineHeight = 16;

    generatedContract.split("\n").forEach((line) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        doc.setFont("times", "bold");
        doc.text(line.replace(/\*\*/g, ""), 40, y);
      } else if (line.match(/^\s*[-0-9]*\./)) {
        doc.setFont("times", "normal");
        doc.text(line, 60, y);
      } else {
        doc.setFont("times", "normal");
        doc.text(line, 40, y);
      }
      y += lineHeight;
      if (y > 800) {
        doc.addPage();
        y = 40;
      }
    });

    doc.save(`${templateTitle.replace(/\s/g, "_")}.pdf`);
  };

  const restartSession = () => {
    setMessages([]);
    setStep(0);
    setContractData({
      partyA: "",
      partyB: "",
      purpose: "",
      amount: "",
      duration: "",
      jurisdiction: "UK",
      specialClauses: "",
      date: new Date().toLocaleDateString(),
    });
    setGeneratedContract("");
    setLoading(false);
    startConversation();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[12000]">
      <div className="bg-white rounded-2xl w-[90%] max-w-3xl h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] p-4 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <div>
              <h2 className="text-white font-semibold">AI Contract Assistant</h2>
              <p className="text-white/80 text-xs">Creating: {templateTitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white text-2xl">&times;</button>
        </div>

        {/* Chat / Contract */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {!generatedContract ? (
            <>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user" ? "bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"}`}>
                    <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          ) : (
            <div className="font-serif text-gray-800 whitespace-pre-wrap">
              {generatedContract.split("\n").map((line, idx) => {
                if (line.startsWith("**") && line.endsWith("**")) return <h3 key={idx} className="font-bold my-2">{line.replace(/\*\*/g, "")}</h3>;
                if (line.match(/^\s*[-0-9]*\./)) return <li key={idx} className="ml-6">{line}</li>;
                return <p key={idx}>{line}</p>;
              })}
            </div>
          )}
        </div>

        {/* Input / Actions */}
        {!generatedContract ? (
          <div className="border-t bg-white p-4 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={questions[step]?.placeholder}
                className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2F4EA1]"
                disabled={loading}
              />
              <button onClick={handleSendMessage} className="bg-[#2F4EA1] text-white px-6 rounded-xl hover:bg-[#243d82] disabled:opacity-50 transition">Send →</button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Question {step + 1} of {questions.length}</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 p-4 border-t bg-white">
            <button onClick={copyContract} className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">📋 Copy</button>
            <button onClick={downloadTXT} className="flex-1 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">💾 TXT</button>
            <button onClick={downloadPDF} className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">📄 PDF</button>
            <button onClick={restartSession} className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition">🔄 New</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ------------------------ Template Preview Modal ------------------------
export default function TemplatePreviewModal({ title, description, image, onClose, onUseTemplate }: TemplatePreviewProps) {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[10000]">
        <div className="bg-white w-full h-full md:w-[80vw] md:h-[90vh] md:rounded-xl shadow-lg flex flex-col md:flex-row relative text-gray-900">
          <button onClick={onClose} className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10">×</button>
          <div className="w-full md:w-[90%] h-[40%] md:h-full bg-gray-100 flex items-center justify-center">
            <img src={image} alt={title} className="shadow-lg md:rounded-md w-full h-full object-contain" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-6 md:py-0">
            <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-[#1F2A44]">{title}</h1>
            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">{description}</p>
            <button onClick={() => setShowCreatePopup(true)} className="bg-[#2F4EA1] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg w-full md:w-[200px] hover:bg-[#243d82] transition">Create document</button>
          </div>
        </div>
      </div>

      {showCreatePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-[11000]">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 w-[90%] md:w-[380px] text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#1F2A44]">Create Document</h2>
            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">Choose how you want to create your document</p>
            <div className="flex gap-3 md:gap-5 justify-center">
              <button onClick={() => { onUseTemplate?.(); setShowCreatePopup(false); }} className="px-4 py-2 md:px-6 md:py-3 rounded-xl border border-gray-300 text-gray-700 text-sm md:text-base font-medium hover:bg-gray-100 transition">✍️ Manually</button>
              <button onClick={() => { setShowCreatePopup(false); setShowAIAssistant(true); }} className="px-4 py-2 md:px-6 md:py-3 rounded-xl text-white text-sm md:text-base font-medium bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] transition shadow-md">🤖 Use AI</button>
            </div>
            <button onClick={() => setShowCreatePopup(false)} className="mt-6 md:mt-8 text-xs md:text-sm text-gray-400 hover:text-gray-600">Cancel</button>
          </div>
        </div>
      )}

      {showAIAssistant && <AIAssistant onClose={() => setShowAIAssistant(false)} templateTitle={title} />}
    </>
  );
}