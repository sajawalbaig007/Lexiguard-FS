const ndaQuestions = [
  {
    name: "discloserName",
    question: "What is the Disclosing Party's full name or company name?",
  },
  {
    name: "recipientName",
    question: "What is the Receiving Party's full name or company name?",
  },
  {
    name: "purpose",
    question: "What is the purpose of this NDA (business collaboration, project, hiring, etc.)?",
  },
  {
    name: "confidentialScope",
    question: "What type of information is considered confidential? (e.g. code, business data, documents, strategies)",
  },
  {
    name: "obligationsSummary",
    question: "What obligations must the receiving party follow? (e.g. no sharing, no copying, secure storage)",
  },
  {
    name: "duration",
    question: "How long should confidentiality remain in effect? (e.g. 2 years, 5 years, indefinite)",
  },
  {
    name: "consideration",
    question: "Is there any payment or consideration involved? If none, write 'No consideration'",
  },
  {
    name: "jurisdiction",
    question: "Which country's or state's law will govern this agreement? (e.g. United Kingdom law)",
  },
  {
    name: "nonCompete",
    question: "Should a non-compete clause be included? (Yes/No + details if yes)",
  },
  {
    name: "returnOfData",
    question: "What should happen to confidential data after termination? (return/delete/destruction)",
  },
  {
    name: "specialClauses",
    question: "Any additional special clauses or conditions? (optional)",
  },
];

export default ndaQuestions;