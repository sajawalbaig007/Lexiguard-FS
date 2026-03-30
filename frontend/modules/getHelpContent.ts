import helpContent from "../data/helpContent";

export default function getHelpContent(
  template: string,
  step: string
) {
  return helpContent?.[template]?.[step] || null;
}