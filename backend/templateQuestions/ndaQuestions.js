const ndaQuestions = [
  {
    name: "day",
    question: "Enter the day of the agreement",
    example: "e.g., 11",
    recommendation:
      "Enter only the numeric day (1–31). Make sure it matches the actual signing date of the agreement.",
  },
  {
    name: "month",
    question: "Enter the month of the agreement",
    example: "e.g., April",
    recommendation:
      "Write the full month name (e.g., January, February). Avoid short forms like 'Apr' to maintain a formal legal format.",
  },
  {
    name: "year",
    question: "Enter the year of the agreement",
    example: "e.g., 2026",
    recommendation:
      "Use the full 4-digit year. This ensures clarity and avoids ambiguity in legal interpretation.",
  },
  {
    name: "discloserName",
    question: "What is the Disclosing Party's full name or company name?",
    example: "e.g., ABC Technologies Ltd.",
    recommendation:
      "Enter the full legal name exactly as registered or shown on official documents. Avoid abbreviations unless they are part of the legal name.",
  },
  {
    name: "recipientName",
    question: "What is the Receiving Party's full name or company name?",
    example: "e.g., John Michael Smith",
    recommendation:
      "Ensure the name matches official identification or business registration records to avoid legal disputes.",
  },
  {
    name: "purpose",
    question: "What is the purpose of this NDA?",
    example: "e.g., Exploring a potential business partnership",
    recommendation:
      "Clearly describe why confidential information is being shared. Keep it concise but specific.",
  },
  {
    name: "nonSolicitPeriod",
    question: "Enter the non-solicitation period",
    example: "e.g., 12 months, 2 years",
    recommendation:
      "Specify how long the recipient is restricted from contacting employees, clients, or partners. Use clear time units like months or years.",
  },
  {
    name: "product",
    question: "Enter the relevant product or technology (for feedback clause)",
    example: "e.g., AI SaaS Platform, Mobile App, Fintech Software",
    recommendation:
      "Mention the product, service, or technology related to the confidential discussions. This clarifies ownership of feedback.",
  },
  {
    name: "city",
    question: "Enter the city for jurisdiction",
    example: "e.g., London",
    recommendation:
      "Provide the city where legal disputes will be handled. This should match the governing law mentioned in the agreement.",
  },
  {
    name: "discloserRep",
    question: "Enter the name of the Discloser's authorised representative",
    example: "e.g., Ahmed Khan",
    recommendation:
      "This should be a person legally authorised to sign on behalf of the disclosing party (e.g., director, manager).",
  },
  {
    name: "discloserTitle",
    question: "Enter the title of the Discloser's representative",
    example: "e.g., CEO, Managing Director",
    recommendation:
      "Include the official job title to show signing authority and strengthen legal validity.",
  },
  {
    name: "recipientRep",
    question: "Enter the name of the Recipient's authorised representative",
    example: "e.g., Sarah Ali",
    recommendation:
      "Ensure this person is authorised to act on behalf of the receiving party.",
  },
  {
    name: "recipientTitle",
    question: "Enter the title of the Recipient's representative",
    example: "e.g., CTO, Business Owner",
    recommendation:
      "Clearly mention the role to confirm authority and responsibility in the agreement.",
  },
];

export default ndaQuestions;