import documentTemplates from "../data/documentTemplates";

export default function generateDocument(template: string, formData: any) {
  let templateString = (documentTemplates as any)[template];
  if (!templateString) return "Template not found.";

  // Replace {{variables}}
  Object.keys(formData).forEach((key) => {
    const value = formData[key] || "";
    templateString = templateString.replace(new RegExp(`{{${key}}}`, "g"), value);
  });

  // Wrap in professional container
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

// Format content for headings, paragraphs, and signature lines
function formatDocument(content: string) {
  const lines = content.split("\n").filter((l) => l.trim() !== "");
  return lines
    .map((line) => {
      const trimmed = line.trim();

      if (/^\d+\./.test(trimmed)) return `<p style="font-weight:600; margin:16px 0 8px 0;">${trimmed}</p>`;
      if (trimmed === trimmed.toUpperCase() && trimmed.length < 80)
        return `<p style="text-align:center; font-weight:600; margin:16px 0; letter-spacing:1px;">${trimmed}</p>`;
      if (trimmed.includes("Signature") || trimmed.includes("Date"))
        return `<div style="margin-top:40px; display:flex; justify-content:space-between;"><div><br/>${trimmed}</div></div>`;
      
      return `<p style="text-align:justify; margin-bottom:10px;">${trimmed}</p>`;
    })
    .join("");
}