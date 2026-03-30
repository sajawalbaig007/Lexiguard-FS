import templateQuestions from "../data/templateQuestions";

export default function getTemplateQuestions(templateName: string) {
  return templateQuestions[templateName as keyof typeof templateQuestions] || [];
}