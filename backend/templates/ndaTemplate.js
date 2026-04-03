const ndaTemplate = (data) => {
  return `
<div class="contract">
  <h1 style="text-align:center; font-weight:bold;">NON-DISCLOSURE AGREEMENT (NDA)</h1>

  <p>This Agreement is made on <strong>${data.date || "____"}</strong> between:</p>
  <p><strong>Party A (Discloser):</strong> ${data.partyA}</p>
  <p><strong>Party B (Recipient):</strong> ${data.partyB}</p>

  <h2>BACKGROUND</h2>
  <p>The parties wish to explore a business relationship for the following purpose:</p>
  <p>${data.purpose}</p>
  <p>In connection with this purpose, confidential information may be shared.</p>

  <h2>1. CONFIDENTIAL INFORMATION</h2>
  <ul>
    <li>Business strategies</li>
    <li>Technical data</li>
    <li>Financial information</li>
    <li>Client data</li>
    <li>Trade secrets</li>
  </ul>

  <h2>2. OBLIGATIONS OF RECIPIENT</h2>
  <ul>
    <li>Not to disclose confidential information</li>
    <li>Not to copy or misuse it</li>
    <li>To protect it with reasonable care</li>
  </ul>

  <h2>3. EXCLUSIONS</h2>
  <ul>
    <li>Publicly available information</li>
    <li>Independently developed data</li>
  </ul>

  <h2>4. TERM</h2>
  <p>This Agreement shall remain valid for: <strong>${data.duration}</strong></p>

  <h2>5. PAYMENT / VALUE</h2>
  <p>Amount (if applicable): <strong>${data.amount}</strong></p>

  <h2>6. GOVERNING LAW</h2>
  <p>This Agreement shall be governed by: <strong>${data.jurisdiction}</strong></p>

  <h2>7. SPECIAL CLAUSES</h2>
  <p>${data.specialClauses || "None"}</p>

  <h2>8. TERMINATION</h2>
  <p>Either party may terminate with written notice.</p>

  <h2>9. DISCLAIMER</h2>
  <p>This document is a general template and does not constitute legal advice. Parties are advised to consult a qualified legal professional.</p>

  <h2>10. SIGNATURES</h2>
  <p>Party A: _______________________</p>
  <p>Party B: _______________________</p>
  <p>Date: ${data.date || "____"}</p>

  <p style="text-align:center; font-weight:bold; margin-top:20px;">END OF AGREEMENT</p>
</div>
`;
};

export default ndaTemplate;