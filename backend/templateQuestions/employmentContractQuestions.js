const employmentContractQuestions = [
  {
    name: "companyName",
    question: "What is the company's full legal name?",
    example: "e.g., ABC Solutions Pvt Ltd",
    recommendation:
      "Enter the official registered company name. Avoid abbreviations unless legally registered.",
  },
  {
    name: "companyAddress",
    question: "What is the company's registered address?",
    example: "e.g., 123 Business Street, London, UK",
    recommendation:
      "Provide the full official business address where the company is registered.",
  },
  {
    name: "employeeName",
    question: "What is the employee’s full legal name?",
    example: "e.g., Sarah Khan",
    recommendation:
      "Use the employee’s legal name exactly as shown on CNIC or passport.",
  },
  {
    name: "employeeAddress",
    question: "What is the employee’s residential address?",
    example: "e.g., House 12, Street 5, Lahore",
    recommendation:
      "Enter the employee’s complete home address for legal identification.",
  },
  {
    name: "startDate",
    question: "When will the employment start?",
    example: "e.g., 01 January 2026",
    recommendation:
      "Enter the official joining date. This is also used as the continuous employment start date.",
  },
  {
    name: "probationPeriod",
    question: "What is the probation period?",
    options: ["3 months", "6 months", "None"],
    recommendation:
      "Select probation duration. 3 months is most common for standard employment.",
  },
  {
    name: "jobTitle",
    question: "What is the employee’s job title?",
    example: "e.g., Software Engineer",
    recommendation:
      "Clearly define the official job title used in HR records.",
  },
  {
    name: "workLocation",
    question: "Where is the employee's primary workplace?",
    example: "e.g., Head Office, Karachi or Remote",
    recommendation:
      "Specify the main work location. You can also mention remote or hybrid if applicable.",
  },
  {
    name: "salary",
    question: "What is the employee’s annual salary?",
    example: "e.g., 120000",
    recommendation:
      "Enter numeric salary amount only. Currency is assumed in contract context.",
  },
  {
    name: "overtimePolicy",
    question: "What is the overtime policy?",
    options: ["No overtime pay", "Paid overtime with approval"],
    recommendation:
      "Select whether overtime is compensated or not. Keep it clear to avoid disputes.",
  },
  {
    name: "workHours",
    question: "What are the standard working hours?",
    example: "e.g., 9 AM to 5 PM, Monday to Friday",
    recommendation:
      "Define working hours and working days clearly to avoid confusion.",
  },
];

export default employmentContractQuestions;