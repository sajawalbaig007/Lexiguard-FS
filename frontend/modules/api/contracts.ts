 const API_BASE = "https://lexiguard-fs.onrender.com/api/contracts";

// ✅ force TypeScript to treat this as a module
export {};

// ================= TYPES =================
type Question = {
  name: string;
  question: string;
};

type GenerateResponse = {
  document: string;
  documentId: string;
};

type ApiDocument = {
  _id: string;
  content: string;
  createdAt: string;
  templateName?: string;
};

type SuccessResponse = {
  success: boolean;
};

// ================= HELPER =================
async function safeParseJSON(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

// ================= Fetch Questions =================
export async function fetchQuestions(
  templateName: string
): Promise<Question[]> {
  try {
    const res = await fetch(`${API_BASE}/questions/${templateName}`);
    const text = await res.text();
    const data = await safeParseJSON(text);

    if (!res.ok || !Array.isArray(data)) {
      console.error("❌ Questions API Error:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("fetchQuestions error:", error);
    return [];
  }
}

// ================= Generate Document (AI FLOW) =================
export async function generateDocument(
  templateName: string,
  answers: Record<string, string>
): Promise<GenerateResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateName,
        formData: answers,
      }),
    });

    const text = await res.text();
    const data = await safeParseJSON(text);

    if (!res.ok || !data) {
      console.error("❌ Generate failed:", data);
      return null;
    }

    return {
      document: data.document,
      documentId: data.documentId,
    };
  } catch (error) {
    console.error("generateDocument error:", error);
    return null;
  }
}

// ================= SAVE MANUAL DOCUMENT =================
export async function saveManualDocument(
  templateName: string,
  documentHTML: string,
  formData: Record<string, string>
): Promise<{ documentId: string } | null> {
  try {
    const res = await fetch(`${API_BASE}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateName,
        formData: {
          ...formData,
          __manualHTML: documentHTML,
        },
      }),
    });

    const text = await res.text();
    const data = await safeParseJSON(text);

    if (!res.ok || !data?.documentId) {
      console.error("❌ Manual save failed:", data);
      return null;
    }

    return {
      documentId: data.documentId,
    };
  } catch (error) {
    console.error("saveManualDocument error:", error);
    return null;
  }
}

// ================= GET ALL SAVED DOCUMENTS =================
export async function getDocuments(): Promise<ApiDocument[]> {
  try {
    const res = await fetch(`${API_BASE}/documents`, {
      cache: "no-store",
    });

    const text = await res.text();
    const data = await safeParseJSON(text);

    if (!res.ok || !Array.isArray(data)) {
      console.error("❌ Fetch docs failed:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("getDocuments error:", error);
    return [];
  }
}

// ================= DELETE DOCUMENT =================
export async function deleteDocument(id: string): Promise<SuccessResponse> {
  try {
    const res = await fetch(`${API_BASE}/documents/${id}`, {
      method: "DELETE",
    });

    const text = await res.text();
    const data = await safeParseJSON(text);

    if (!res.ok || !data) {
      console.error("❌ Delete failed:", data);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("deleteDocument error:", error);
    return { success: false };
  }
}