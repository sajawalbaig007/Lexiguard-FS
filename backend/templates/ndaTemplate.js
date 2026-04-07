const ndaTemplate = (data = {}) => {
  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Georgia, 'Times New Roman', serif; 
      max-width: 800px; 
      margin: auto; 
      padding: 40px; 
      line-height: 1.7; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container {
          padding: 8px !important; /* ✅ remove padding on mobile */
        }
        .doc-container h1 {
          font-size: 22px !important;
          text-align: center !important;
        }
        .doc-container h3 {
          font-size: 16px !important;
        }
        .doc-container p {
          font-size: 14px !important;
        }
        .doc-flex {
          flex-direction: column !important;
          gap: 30px;
        }
        .doc-col {
          width: 100% !important;
        }
      }
    </style>

    <h1 style="text-align: center; font-size: 28px;">
      NON-DISCLOSURE AGREEMENT (NDA)
    </h1>

    <p style="text-align: center;">Date: {{date}}</p>

    <h3>Parties</h3>
    <p>
      This Agreement is made between <strong>{{discloserName}}</strong> (the "Discloser") 
      and <strong>{{recipientName}}</strong> (the "Recipient").
    </p>

    <h3>1. Purpose</h3>
    <p>{{purpose}}</p>
    <p>
      In connection with this purpose, confidential information may be disclosed
      between the parties.
    </p>

    <h3>2. Confidential Information</h3>
    <p>
      "Confidential Information" includes, but is not limited to:
    </p>
    <p>{{confidentialScope}}</p>

    <h3>3. Obligations of Recipient</h3>
    <p>
      The Recipient agrees to:
    </p>
    <p>{{obligationsSummary}}</p>
    <p>
      In all cases, the Recipient shall protect Confidential Information with
      reasonable care and not disclose it to third parties without consent.
    </p>

    <h3>4. Exclusions</h3>
    <p>
      Confidential Information does not include information that is publicly
      available or independently developed without breach of this Agreement.
    </p>

    <h3>5. Term</h3>
    <p>
      This Agreement shall remain in effect for <strong>{{duration}}</strong>.
    </p>

    <h3>6. Consideration</h3>
    <p>
      Any applicable consideration or value exchanged under this Agreement:
      <strong>{{consideration}}</strong>
    </p>

    <h3>7. Governing Law</h3>
    <p>
      This Agreement shall be governed by the laws of {{jurisdiction}}.
    </p>

    <h3>8. Special Clauses</h3>
    <p>{{specialClauses}}</p>

    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement with written notice,
      subject to ongoing confidentiality obligations.
    </p>

    <h3>10. Entire Agreement</h3>
    <p>
      This document constitutes the entire agreement between the parties.
    </p>

    <h3>Signatures</h3>

    <div class="doc-flex" style="display: flex; justify-content: space-between; margin-top: 40px;">
      <div class="doc-col">
        <p><strong>Discloser</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{discloserName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Recipient</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{recipientName}}</p>
      </div>
    </div>

    <p style="margin-top: 40px;">Date: {{date}}</p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default ndaTemplate;