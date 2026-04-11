 const quitclaimDeedQuestions = [
  {
    name: "grantorName",
    question: "Who currently owns the property and is transferring it?",
    example: "e.g., John Michael Smith",
    recommendation:
      "Write the full legal name exactly as it appears on official documents like ID cards or property records. Avoid nicknames or short forms to prevent legal issues later.",
  },
  {
    name: "grantorAddress",
    question: "What is the current owner's full home address?",
    example: "e.g., 123 Main Street, Lahore, Punjab, Pakistan",
    recommendation:
      "Provide the complete and accurate residential address, including street, city, and country. This helps clearly identify the person transferring the property.",
  },
  {
    name: "granteeName",
    question: "Who will receive the property ownership?",
    example: "e.g., Sarah Ahmed Khan",
    recommendation:
      "Enter the full legal name of the person receiving the property. Make sure spelling matches their official identification documents to avoid disputes.",
  },
  {
    name: "granteeAddress",
    question: "What is the receiver’s full home address?",
    example: "e.g., 45 Garden Avenue, Karachi, Sindh, Pakistan",
    recommendation:
      "Include full and correct address details of the new owner. This ensures proper identification and helps in legal and official record keeping.",
  },
  {
    name: "propertyType",
    question: "What type of property is being transferred?",
    options: ["Residential", "Commercial", "Land", "Apartment", "Other"],
    recommendation:
      "Select the type that best matches the property. If unsure, choose the closest option. Correct classification helps avoid confusion in legal processing.",
  },
  {
    name: "propertyAddress",
    question: "Where is the property located?",
    example: "e.g., House #12, Block B, DHA Phase 6, Lahore",
    recommendation:
      "Write the full and exact property address, including house number, street, and city. This is crucial for identifying the correct property in official records.",
  },
  {
    name: "titleNumber",
    question: "Do you have a title or registration number for the property?",
    example: "e.g., TN-458732 (leave blank if not available)",
    recommendation:
      "If available, include the official property registration or title number. This helps uniquely identify the property, but you can leave it blank if unknown.",
  },
  {
    name: "legalDescription",
    question: "Do you have a legal description of the property?",
    example: "e.g., Plot 45, Block B, measuring 10 Marla (optional)",
    recommendation:
      "This is usually found in official property papers. If you don’t have it, don’t worry—just leave it blank, but including it improves legal clarity.",
  },
  {
    name: "consideration",
    question: "What is being given in exchange for the property?",
    options: ["Money", "Gift (love and affection)", "Family transfer", "Other"],
    example: "e.g., PKR 500,000 or 'Gift'",
    recommendation:
      "Clearly mention whether money is involved or if it is a gift. Even if no payment is made, writing 'love and affection' or 'gift' is important legally.",
  },
  {
    name: "encumbrances",
    question: "Are there any loans, disputes, or restrictions on the property?",
    options: ["None", "Loan/Mortgage", "Legal Dispute", "Other"],
    recommendation:
      "Be honest about any existing issues like loans or disputes. If there are none, simply write 'None'. This protects both parties from future legal problems.",
  },
  {
    name: "taxResponsibility",
    question: "Who will pay the taxes and transfer fees?",
    options: ["Grantor (Current Owner)", "Grantee (New Owner)", "Shared"],
    recommendation:
      "Choose clearly who will handle taxes and fees. This avoids confusion or arguments later. Discuss and agree before selecting an option.",
  },
  {
    name: "governingLaw",
    question: "Which country's or region’s law will apply?",
    example: "e.g., Pakistan, England and Wales, California (USA)",
    recommendation:
      "Enter the correct legal jurisdiction where the property exists. This determines which laws will be followed if any dispute arises in the future.",
  },
  {
    name: "executionDate",
    question: "When will this agreement be signed?",
    example: "e.g., 15 March 2026 (leave blank to use today’s date)",
    recommendation:
      "Provide the date when both parties sign the document. If unsure, leave it blank and the system can automatically use the current date.",
  },
  {
    name: "witnessName",
    question: "Who will witness the signing?",
    example: "e.g., Ali Raza",
    recommendation:
      "Choose a neutral third person (not directly involved in the deal). The witness helps confirm that both parties signed the document willingly.",
  },
  {
    name: "witnessAddress",
    question: "What is the witness’s address?",
    example: "e.g., 78 Model Town, Lahore",
    recommendation:
      "Provide the full address of the witness. This is important in case verification is needed later for legal purposes.",
  },

 
];

export default quitclaimDeedQuestions;