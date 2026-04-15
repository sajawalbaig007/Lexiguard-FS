const evictionNoticeQuestions = [
  {
    name: "landlordName",
    question: "Enter the full name of the Landlord.",
  },
  {
    name: "tenantName",
    question: "Enter the full name of the Tenant.",
  },
  {
    name: "propertyAddress",
    question: "Enter the full property address.",
  },
  {
    name: "evictionType",
    question: "What is the reason type for eviction? (Non-payment, Lease breach, etc.)",
  },
  {
    name: "evictionReason",
    question: "Describe the detailed reason for eviction.",
  },
  {
    name: "noticePeriod",
    question: "What is the notice period given to the tenant? (e.g., 14 days, 30 days)",
  },
  {
    name: "outstandingAmount",
    question: "List any outstanding rent or dues (if none, write 'None').",
  },
  {
    name: "governingLaw",
    question: "Which law governs this eviction notice?",
  },
];

export default evictionNoticeQuestions;