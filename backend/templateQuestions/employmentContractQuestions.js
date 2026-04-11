const employmentContractQuestions = [
  {
    name: "employerName",
    question: "What is the employer's full name or company name?",
    example: "e.g., ABC Solutions Pvt Ltd or John Ahmed",
    recommendation:
      "Enter the full legal name of the employer or company. Avoid abbreviations unless they are officially registered.",
  },
  {
    name: "employeeName",
    question: "What is the employee’s full name?",
    example: "e.g., Sarah Khan",
    recommendation:
      "Write the employee’s full legal name exactly as it appears on official documents like CNIC or passport.",
  },
  {
    name: "jobTitle",
    question: "What position is the employee being hired for?",
    example: "e.g., Software Engineer",
    recommendation:
      "Clearly define the job title. This helps avoid confusion about responsibilities and expectations.",
  },
  {
    name: "startDate",
    question: "When will the employee start working?",
    example: "e.g., 01 May 2026",
    recommendation:
      "Enter the official joining date. This is important for salary, benefits, and legal records.",
  },
  {
    name: "salary",
    question: "What is the employee’s salary?",
    example: "e.g., PKR 120,000 per month",
    recommendation:
      "Clearly mention the salary amount and currency. Include whether it is monthly or yearly to avoid misunderstandings.",
  },
  {
    name: "paymentFrequency",
    question: "How often will the employee be paid?",
    options: ["Monthly", "Bi-weekly", "Weekly", "Annually"],
    recommendation:
      "Select how frequently the salary will be paid. Monthly is the most common option.",
  },
  {
    name: "workingHours",
    question: "What are the working hours?",
    example: "e.g., 9 AM to 5 PM, Monday to Friday",
    recommendation:
      "Clearly define working hours and days. This prevents disputes about overtime or availability.",
  },
  {
    name: "duties",
    question: "What are the employee’s main duties and responsibilities?",
    example:
      "e.g., Develop web applications, maintain systems, collaborate with team members",
    recommendation:
      "List key responsibilities in simple terms. Be clear but not overly complex.",
  },
  {
    name: "employmentType",
    question: "What type of employment is this?",
    options: ["Full-time", "Part-time", "Contract", "Temporary"],
    recommendation:
      "Choose the correct employment type. This affects benefits, job security, and legal obligations.",
  },
  {
    name: "noticePeriod",
    question: "What notice period is required to terminate the contract?",
    example: "e.g., 30 days",
    recommendation:
      "Specify how much notice either party must give before ending employment. This avoids sudden disruptions.",
  },
  {
    name: "governingLaw",
    question: "Which country's or region’s law will apply?",
    example: "e.g., Pakistan, England and Wales, California (USA)",
    recommendation:
      "Enter the correct legal jurisdiction. This determines which laws apply in case of disputes.",
  },
];

export default employmentContractQuestions;