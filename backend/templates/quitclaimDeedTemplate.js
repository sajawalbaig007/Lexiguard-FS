const quitclaimDeedQuestions = [
  {
    name: "grantorName",
    question:
      "Enter the full legal name of the Grantor (current owner transferring rights). Include first name, middle name (if any), and last name exactly as it appears on official documents. Avoid abbreviations. Length: 3–6 words.",
  },
  {
    name: "granteeName",
    question:
      "Enter the full legal name of the Grantee (recipient of the property rights). Include complete name as per legal identification. Avoid nicknames or short forms. Length: 3–6 words.",
  },
  {
    name: "propertyAddress",
    question:
      "Enter the complete property address, including house/building number, street name, city, state/province, and ZIP/postal code. Ensure accuracy as this is legally binding. Length: 10–25 words.",
  },
  {
    name: "legalDescription",
    question:
      "Enter the legal description of the property as found in official records (e.g., lot number, block, subdivision, survey details). If unavailable, write 'Not Available'. Length: 10–50 words.",
  },
  {
    name: "consideration",
    question:
      "Specify the consideration (value exchanged for the transfer). This can be a monetary amount (e.g., $10) or non-monetary (e.g., 'love and affection'). Keep it concise and legally appropriate. Length: 2–10 words.",
  },
  {
    name: "taxResponsibility",
    question:
      "Specify who will be responsible for paying applicable taxes and transfer fees. Choose one: 'Grantor', 'Grantee', or 'Shared'. Do not provide explanations. Length: 1 word.",
  },
  {
    name: "governingLaw",
    question:
      "Enter the state or jurisdiction whose laws will govern this deed (e.g., 'California, USA'). Use official jurisdiction names only. Length: 2–5 words.",
  },
];

export default quitclaimDeedQuestions;