 import documentTemplates from "../data/documentTemplates";

export default function generateDocument(template: string, formData: any) {
  let templateString = (documentTemplates as Record<string, string>)[template];

  if (!templateString) {
    return "Template not found.";
  }

  // ================= REPLACE {{variables}} =================
  Object.keys(formData).forEach((key) => {
    const rawValue = formData[key];
    let value = "";

    // Handle checkbox values
    if (typeof rawValue === "boolean") {
      value = rawValue ? "✔" : "";
    }
    // Handle dates
    else if (isDate(rawValue)) {
      value = formatDate(rawValue);
    }
    // Handle numbers
    else if (typeof rawValue === "number") {
      value = rawValue.toString();
    }
    // Handle normal text
    else {
      value = rawValue ?? "";
    }

    const regex = new RegExp(`{{${escapeRegExp(key)}}}`, "g");
    templateString = templateString.replace(regex, value);
  });

  // Remove unreplaced variables like {{something}}
  templateString = templateString.replace(/{{(.*?)}}/g, "");

  // ================= PROFESSIONAL DOCUMENT WRAPPER =================
  return `
    <div style="
      max-width: 700px;
      margin: 40px auto;
      padding: 40px;
      font-family: 'Times New Roman', serif;
      font-size: 15px;
      line-height: 1.8;
      color: #111;
      background: white;
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

      // Headings starting with #
      if (trimmed.startsWith("#")) {
        const text = trimmed.replace(/^#+\s*/, "");
        return `
          <h2 style="
            text-align: center;
            margin-top: 24px;
            margin-bottom: 16px;
          ">
            ${text}
          </h2>
        `;
      }

      // Numbered sections
      if (/^\d+\./.test(trimmed)) {
        return `
          <p style="
            font-weight: bold;
            margin-top: 18px;
            margin-bottom: 8px;
          ">
            ${trimmed}
          </p>
        `;
      }

      // Signature / Date lines
      if (trimmed.includes("Signature") || trimmed.includes("Date")) {
        return `
          <div style="
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
          ">
            <div>${trimmed}</div>
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

// ================= HELPERS =================
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isDate(value: any) {
  if (typeof value !== "string") return false;
  return !isNaN(Date.parse(value));
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}