const serviceTemplate = (data) => {
  return `
  ================================
        SERVICE AGREEMENT
  ================================

  Service Provider: ${data.partyA}
  Client: ${data.partyB}

  SERVICES:
  ${data.purpose}

  PAYMENT:
  ${data.amount || "Not specified"}

  TIMELINE:
  ${data.duration || "Not specified"}

  TERMS:
  Services must be delivered professionally.

  SPECIAL CLAUSES:
  ${data.specialClauses || "None"}

  DISCLAIMER:
  AI-generated contract. Verify legally before use.

  SIGNATURES:
  ______________________
  `;
};

export default serviceTemplate;