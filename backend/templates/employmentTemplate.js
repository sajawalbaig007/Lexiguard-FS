const employmentTemplate = (data) => {
  return `
<div class="contract">
  <h1 style="text-align:center; font-weight:bold;">EMPLOYMENT AGREEMENT</h1>

  <p>This Agreement is made on <strong>${data.date || "____"}</strong> between:</p>
  <p><strong>Employer:</strong> ${data.partyA}</p>
  <p><strong>Employee:</strong> ${data.partyB}</p>

  <h2>BACKGROUND</h2>
  <p>The Employer agrees to hire the Employee for:</p>
  <p>${data.purpose}</p>

  <h2>1. POSITION & DUTIES</h2>
  <p>The Employee will perform duties related to the role described above.</p>

  <h2>2. COMPENSATION</h2>
  <p>Salary / Payment: <strong>${data.amount}</strong></p>

  <h2>3. DURATION</h2>
  <p>Employment Duration: <strong>${data.duration}</strong></p>

  <h2>4. WORK CONDITIONS</h2>
  <ul>
    <li>Perform duties professionally</li>
    <li>Follow company policies</li>
    <li>Maintain confidentiality</li>
  </ul>

  <h2>5. CONFIDENTIALITY</h2>
  <p>The Employee shall not disclose any company information.</p>

  <h2>6. TERMINATION</h2>
  <p>Either party may terminate employment with notice.</p>

  <h2>7. GOVERNING LAW</h2>
  <p>This Agreement is governed by: <strong>${data.jurisdiction}</strong></p>

  <h2>8. SPECIAL CLAUSES</h2>
  <p>${data.specialClauses || "None"}</p>

  <h2>9. DISCLAIMER</h2>
  <p>This contract is a general employment template and may not cover all legal requirements.</p>

  <h2>10. SIGNATURES</h2>
  <p>Employer: _______________________</p>
  <p>Employee: _______________________</p>
  <p>Date: ${data.date || "____"}</p>

  <p style="text-align:center; font-weight:bold; margin-top:20px;">END OF AGREEMENT</p>
</div>
`;
};

export default employmentTemplate;