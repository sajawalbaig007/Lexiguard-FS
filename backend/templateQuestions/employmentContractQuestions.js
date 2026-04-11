const employmentContractQuestions = [
  {
    name: "companyName",
    question: "What is the company's full legal name?",
    example: "e.g., ABC Solutions Ltd",
    recommendation: "Enter the official registered company name as it appears on the contract.",
  },
  {
    name: "companyAddress",
    question: "What is the company's registered address?",
    example: "e.g., 123 Business Street, London, UK",
    recommendation: "Provide the full official registered address of the company.",
  },
  {
    name: "employeeName",
    question: "What is the employee's full legal name?",
    example: "e.g., John Smith",
    recommendation: "Use the employee's full legal name as shown on official documents.",
  },
  {
    name: "employeeAddress",
    question: "What is the employee's residential address?",
    example: "e.g., 45 Park Avenue, Manchester, UK",
    recommendation: "Enter the employee's complete home address for correspondence.",
  },
  {
    name: "startDate",
    question: "What is the employment start date?",
    example: "e.g., 15 March 2026",
    recommendation: "This date starts both employment and continuous employment period.",
  },
  {
    name: "probationPeriod",
    question: "What is the probation period?",
    example: "e.g., 3 months or 6 months",
    recommendation: "Standard probation is 3 months. Leave as '3 months' if unsure.",
  },
  {
    name: "jobTitle",
    question: "What is the employee's job title?",
    example: "e.g., Marketing Manager",
    recommendation: "Use the official job title that reflects the role and responsibilities.",
  },
  {
    name: "workLocation",
    question: "What is the primary workplace address?",
    example: "e.g., 123 Business Street, London, UK",
    recommendation: "Enter the main office location where employee will primarily work.",
  },
  {
    name: "salary",
    question: "What is the annual salary amount?",
    example: "e.g., 35000",
    recommendation: "Enter numeric amount only (e.g., 35000 for £35,000).",
  },
  {
    name: "paymentFrequency",
    question: "How often will the employee be paid?",
    example: "e.g., monthly",
    recommendation: "Standard is monthly. Other options: weekly, bi-weekly.",
  },
  {
    name: "paymentDay",
    question: "What day of the month is payday?",
    example: "e.g., last day of each month",
    recommendation: "Common options: last day of each month, 28th, or 30th.",
  },
  {
    name: "overtimeTerms",
    question: "What is the overtime policy?",
    example: "e.g., You won't receive extra pay for working overtime.",
    recommendation: "Option 1: No overtime pay. Option 2: Overtime with prior approval paid at current rate.",
  },
  {
    name: "pensionTerms",
    question: "What is the pension policy?",
    example: "e.g., After three months of service, you can join the Company's pension scheme.",
    recommendation: "Choose one: joining scheme, no scheme, complies with duties, specific scheme, or no retirement age.",
  },
  {
    name: "workHours",
    question: "What are the standard working hours?",
    example: "e.g., 9 am to 5.30 pm",
    recommendation: "Specify start and end times including lunch break details.",
  },
  {
    name: "holidayDays",
    question: "How many paid holiday days per year?",
    example: "e.g., 28",
    recommendation: "Standard full-time UK entitlement is 28 days including bank holidays.",
  },
];

export default employmentContractQuestions;