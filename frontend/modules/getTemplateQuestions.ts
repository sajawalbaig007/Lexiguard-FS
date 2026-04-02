 import templateQuestions from "../data/templateQuestions";

export default function getTemplateQuestions(templateName: string) {
  if (!templateName) return [];

  const questions = templateQuestions[templateName];

  if (!questions) {
    console.warn(`No questions found for template: ${templateName}`);
    return [];
  }

  return questions;
}