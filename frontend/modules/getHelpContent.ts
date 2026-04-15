import helpContent, { HelpContent } from "./manualHelpContent";

export default function getHelpContent(
  template: string,
  step: string
): HelpContent | null {
  const templateData = helpContent[template as keyof typeof helpContent];

  if (!templateData) return null;

  return templateData[step] || null;
}