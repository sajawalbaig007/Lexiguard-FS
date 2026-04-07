 const API_BASE = "https://lexiguard-fs.onrender.com/api/contracts";


// ================= Fetch Questions =================
export async function fetchQuestions(templateName: string) {
  try {
    // ✅ NO encoding needed anymore
    const res = await fetch(`${API_BASE}/questions/${templateName}`);

    if (!res.ok) {
      throw new Error("Failed to fetch questions");
    }

    return await res.json();
  } catch (error) {
    console.error("fetchQuestions error:", error);
    return [];
  }
}

// ================= Generate Document =================
export async function generateDocument(
  templateName: string,
  answers: any
) {
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

    if (!res.ok) {
      throw new Error("Failed to generate document");
    }

    return await res.json();
  } catch (error) {
    console.error("generateDocument error:", error);
    return { document: "<p>Error generating document</p>" };
  }
}