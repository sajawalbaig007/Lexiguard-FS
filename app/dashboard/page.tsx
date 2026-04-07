 "use client";
import { useState } from "react";
import {
  FileText,
  Folder,
  PenTool,
  ShieldCheck,
  Layers,
  Trash2,
} from "lucide-react";
import PricingPlans from "@/components/PricingModal";

// ---------------- TYPES ----------------
type DocumentType = "doc" | "esign" | "notary";
type TabKey = "all" | "documents" | "esignatures" | "notarizations";

interface Document {
  id: number;
  title: string;
  time: string;
  content?: string;
}

interface Item extends Document {
  type: DocumentType;
}

// ---------------- HELPERS ----------------
const getLocalStorageData = (key: string): Document[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// ---------------- COMPONENT ----------------
export default function DashboardPage() {
  const data: Record<Exclude<TabKey, "all">, Document[]> = {
    documents: [],
    esignatures: [],
    notarizations: [],
  };

  // Tabs with icons
  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "all", label: "All", icon: <Layers className="w-4 h-4" /> },
    {
      key: "documents",
      label: "Documents",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      key: "esignatures",
      label: "eSign",
      icon: <PenTool className="w-4 h-4" />,
    },
    {
      key: "notarizations",
      label: "Notary",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  const [activeTab, setActiveTab] = useState<TabKey>("all");

  // ✅ FIXED: Lazy initialization (no useEffect needed)
  const [savedDocs, setSavedDocs] = useState<Document[]>(() =>
    typeof window !== "undefined"
      ? getLocalStorageData("recentDocuments")
      : []
  );

  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  // -------- DELETE --------
  const handleDelete = (doc: Document, e: React.MouseEvent) => {
    e.stopPropagation();

    const confirmDelete = confirm(`Do you want to delete "${doc.title}"?`);
    if (!confirmDelete) return;

    const updatedDocs = savedDocs.filter((d) => d.id !== doc.id);
    setSavedDocs(updatedDocs);
    localStorage.setItem("recentDocuments", JSON.stringify(updatedDocs));

    const deletedDocs: Document[] = getLocalStorageData("deletedDocuments");
    deletedDocs.push(doc);
    localStorage.setItem("deletedDocuments", JSON.stringify(deletedDocs));
  };

  // Merge items based on active tab
  const getItems = (): Item[] => {
    const mergedDocuments: Item[] = [
      ...savedDocs.map((d) => ({ ...d, type: "doc" as const })),
    ];

    if (activeTab === "all") {
      return [
        ...mergedDocuments,
        ...data.esignatures.map((d) => ({ ...d, type: "esign" as const })),
        ...data.notarizations.map((d) => ({ ...d, type: "notary" as const })),
      ];
    }

    if (activeTab === "documents") return mergedDocuments;

    if (activeTab === "esignatures") {
      return data.esignatures.map((d) => ({
        ...d,
        type: "esign" as const,
      }));
    }

    return data.notarizations.map((d) => ({
      ...d,
      type: "notary" as const,
    }));
  };

  const items = getItems();

  // ---------------- DASHBOARD ----------------
  return (
    <div className="p-4 md:p-6 bg-[#f6f2ed] min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8">
        Welcome to LexiGuard
      </h1>

      {/* Top Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-10">
        {[
          { icon: <FileText />, text: "New Document", action: "templates" },
          { icon: <Folder />, text: "My Documents" },
          { icon: <PenTool />, text: "eSign", action: "pricing" },
          { icon: <ShieldCheck />, text: "Notarize", action: "pricing" },
        ].map((item, i) => (
          <div
            key={i}
            onClick={() => {
              if (item.action === "pricing") setShowPricing(true);
              if (item.action === "templates") setShowTemplates(true);
            }}
            className="group flex items-center gap-3 bg-white rounded-xl p-3 md:p-4 border border-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-[#463826]/20 text-[#B5A491] group-hover:scale-110 transition">
              {item.icon}
            </div>
            <span className="font-medium text-xs md:text-base text-gray-700 group-hover:text-[#665339] transition">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm min-h-125 flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
          <h2 className="text-base md:text-xl font-semibold text-gray-900">
            Recent Activity
          </h2>

          <div className="flex gap-1 text-sm bg-[#F9FAFB] p-1 rounded-lg border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center justify-center md:gap-2 px-2 md:px-4 py-2 rounded-md transition font-medium ${
                  activeTab === tab.key
                    ? "bg-linear-to-r from-[#F3EED9] via-[#F5F1E1] to-[#F3EED9] text-[#463826] shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white"
                }`}
              >
                {tab.icon}
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-2 md:space-y-4 overflow-y-auto pr-1">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                onClick={() => item.content && setSelectedDoc(item)}
                className="group flex justify-between items-center rounded-xl p-3 md:p-5 bg-[#F9FAFB] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-white border text-lg md:text-xl">
                    📄
                  </div>

                  <div>
                    <p className="text-gray-900 font-medium text-xs md:text-[15px]">
                      {item.title}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                      {item.time}
                    </p>
                  </div>
                </div>

                <button
                  onClick={(e) => handleDelete(item, e)}
                  className="p-1 md:p-2 rounded-md hover:bg-gray-100 transition"
                >
                  <Trash2 className="w-3 h-3 md:w-4 md:h-4 text-gray-500 hover:text-red-500" />
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
              <div className="text-4xl md:text-5xl mb-3 opacity-70 z-0">
                📂
              </div>
              <p className="text-xs md:text-sm">
                No{" "}
                <span className="capitalize text-[#B5A491] font-medium">
                  {activeTab !== "all" ? activeTab : "activity"}
                </span>{" "}
                yet
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 md:pt-6 mt-4 md:mt-6 border-t">
          <button className="text-xs md:text-sm text-[#B5A491] hover:underline font-medium">
            View All Documents
          </button>

          <button
            onClick={() => setShowTemplates(true)}
            className="px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm rounded-lg text-white font-medium bg-linear-to-r from-[#463826] via-[#ad8b5e] to-[#463826] hover:opacity-90 transition"
          >
            Create New
          </button>
        </div>
      </div>

      <PricingPlans
        open={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </div>
  );
}