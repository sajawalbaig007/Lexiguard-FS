import documentTemplates from "./manualGenerateDocument";

// ---------------- TYPES ----------------
type TemplateMap = Record<string, string>;
type FormData = Record<string, unknown>;

// 👇 FIX: explicitly tell TS this is a template object
const templates = documentTemplates as unknown as TemplateMap;

export default function generateDocument(
  template: string,
  formData: FormData
) {
  let templateString = templates[template];

  if (!templateString) {
    return "Template not found.";
  }

  Object.keys(formData).forEach((key) => {
    const value = String(formData[key] ?? "");
    const regex = new RegExp(`{{${key}}}`, "g");
    templateString = templateString.replace(regex, value);
  });

  return `
    <div style="
      max-width: 650px;
      margin: 0 auto;
      font-family: serif;
      font-size: 15px;
      line-height: 1.7;
      color: #111;
    ">
      ${formatDocument(templateString)}
    </div>
  `;
}

// ================= FORMAT FUNCTION =================
function formatDocument(content: string) {
  const lines = content.split("\n").filter((line) => line.trim() !== "");

  return lines
    .map((line) => {
      const trimmed = line.trim();

      // Detect numbered headings like "1. RENT"
      if (/^\d+\./.test(trimmed)) {
        return `
          <p style="
            font-weight: 600;
            margin-top: 16px;
            margin-bottom: 8px;
          ">
            ${trimmed}
          </p>
        `;
      }

      // Detect ALL CAPS headings (short ones)
      if (trimmed === trimmed.toUpperCase() && trimmed.length < 80) {
        return `
          <p style="
            text-align: center;
            font-weight: 600;
            margin-top: 16px;
            margin-bottom: 16px;
            letter-spacing: 1px;
          ">
            ${trimmed}
          </p>
        `;
      }

      // Detect signature lines
      if (trimmed.includes("Signature") || trimmed.includes("Date")) {
        return `
          <div style="
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
          ">
            <div>
              <br/>
              ${trimmed}
            </div>
          </div>
        `;
      }

      // Normal paragraph
      return `
        <p style="
          text-align: justify;
          margin-bottom: 10px;
        ">
          ${trimmed}
        </p>
      `;
    })
    .join("");
}