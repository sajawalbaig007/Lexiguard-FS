const ndaQuestions = [
<<<<<<< HEAD
  {
    name: "discloserName",
    question: "Enter the full name or company name of the Disclosing Party.",
  },
  {
    name: "recipientName",
    question: "Enter the full name or company name of the Receiving Party.",
  },
  {
    name: "purpose",
    question: "What is the purpose of this NDA?",
  },
  {
    name: "confidentialScope",
    question: "Describe what information will be considered confidential.",
=======
  { name: "discloserName", question: "What is the Disclosing Party's full name or company name?" },
  { name: "recipientName", question: "What is the Receiving Party's full name or company name?" },

  { name: "purpose", question: "What is the purpose of this NDA (business collaboration, project, hiring, etc.)?" },

  {
    name: "confidentialScope",
    question: "What type of information is considered confidential? (e.g. code, business data, documents, strategies)"
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
  },

  {
    name: "obligationsSummary",
<<<<<<< HEAD
    question: "List the obligations the Recipient must follow.",
=======
    question: "What obligations must the receiving party follow? (e.g. no sharing, no copying, secure storage)"
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
  },

  {
    name: "duration",
<<<<<<< HEAD
    question: "How long should confidentiality last? (e.g., 2 years, 5 years)",
=======
    question: "How long should confidentiality remain in effect? (e.g. 2 years, 5 years, indefinite)"
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
  },

  {
    name: "consideration",
<<<<<<< HEAD
    question: "What consideration (if any) supports this agreement?",
=======
    question: "Is there any payment or consideration involved? If none, write 'No consideration'"
  },

  {
    name: "jurisdiction",
    question: "Which country's or state's law will govern this agreement? (e.g. United Kingdom law)"
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
  },

  {
    name: "nonCompete",
    question: "Should a non-compete clause be included? (Yes/No + details if yes)"
  },

  {
    name: "returnOfData",
    question: "What should happen to confidential data after termination? (return/delete/destruction)"
  },

  {
    name: "specialClauses",
<<<<<<< HEAD
    question: "Add any special terms or conditions (optional).",
  },
  {
    name: "governingLaw",
    question: "Which jurisdiction or law governs this agreement?",
  },
=======
    question: "Any additional special clauses or conditions? (optional)"
  }
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
];

export default ndaQuestions;