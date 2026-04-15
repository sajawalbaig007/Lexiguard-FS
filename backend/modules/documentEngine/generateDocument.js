import templateRegistry from "../../templateRegistry.js";

export function generateDocumentHTML(templateKey, data) {
  const template = templateRegistry[templateKey];

  if (!template || !template.template) {
    throw new Error(`Template not found: ${templateKey}`);
  }

  return template.template(data);
}