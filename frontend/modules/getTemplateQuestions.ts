import templateQuestions from "./manualTemplateQuestions";

export default function getTemplateQuestions(templateName: string) {
  return templateQuestions[templateName as keyof typeof templateQuestions] || [];
}