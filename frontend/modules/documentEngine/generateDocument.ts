import templateRegistry from "../../../backend/templateRegistry";

type TemplateKey =
  | "lease_agreement"
  | "nda"
  | "contractor_agreement";

/**
 * GLOBAL DOCUMENT ENGINE
 * SINGLE SOURCE OF TRUTH
 */
export function generateDocumentHTML(
  templateKey: TemplateKey,
  data: Record<string, any>
) {
  const template = templateRegistry[templateKey];

  if (!template || !template.template) {
    throw new Error(`Template not found: ${templateKey}`);
  }

  // IMPORTANT FIX HERE 👇
  return template.template(data);
}