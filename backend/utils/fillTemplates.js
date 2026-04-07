export default function fillTemplate(template, data) {
  let output = template;

  // Replace provided variables
  Object.keys(data || {}).forEach((key) => {
    const value = data[key] ?? "";

    // Escape special regex characters in key
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`{{\\s*${escapedKey}\\s*}}`, "g");
    output = output.replace(regex, String(value));
  });

  // Remove any unreplaced variables
  output = output.replace(/{{\s*[\w]+\s*}}/g, "");

  return output;
}