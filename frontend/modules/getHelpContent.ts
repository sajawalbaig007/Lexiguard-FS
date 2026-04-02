 import helpContent from "../data/helpContent";

export default function getHelpContent(
  template: string,
  section: string
) {
  const content = helpContent?.[template]?.[section];

  if (!content) {
    return {
      title: "Help",
      description: "No help content available for this section.",
      points: [],
    };
  }

  return content;
}