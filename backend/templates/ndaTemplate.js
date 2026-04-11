const ndaTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Georgia, 'Times New Roman', serif; 
      max-width: 800px; 
      margin: auto; 
      padding: 40px;
      line-height: 1.75; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container { padding: 12px !important; }
        .doc-container h1 { font-size: 22px !important; text-align: center !important; }
        .doc-container h3 { font-size: 16px !important; }
        .doc-container p { font-size: 14px !important; }
        .doc-flex { flex-direction: column !important; gap: 30px; }
        .doc-col { width: 100% !important; }
      }
    </style>

    <!-- HEADER -->
    <h1 style="text-align:center; font-size:28px; margin-bottom:10px;">
      NON-DISCLOSURE AGREEMENT (NDA)
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is made and entered into on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Agreement is intended to protect confidential information shared between parties.
    </p>

    <!-- PARTIES -->
    <h3>Parties</h3>
    <p>
      This Non-Disclosure Agreement ("Agreement") is entered into between
      <strong>{{discloserName}}</strong> ("Discloser") and
      <strong>{{recipientName}}</strong> ("Recipient").
      Both parties agree to be legally bound by the terms of this Agreement.
    </p>

    <!-- PURPOSE -->
    <h3>1. Purpose</h3>
    <p>
      The purpose of this Agreement is to allow the parties to engage in discussions and evaluate a potential business relationship regarding the following:
      <br /><br />
      {{purpose}}
      <br /><br />
      In connection with this purpose, the Discloser may share confidential and sensitive information.
    </p>

    <!-- CONFIDENTIAL INFO -->
    <h3>2. Definition of Confidential Information</h3>
    <p>
      Confidential Information includes any data or information disclosed by the Discloser, whether written, oral, digital, or otherwise, including but not limited to:
      <br /><br />
      {{confidentialScope}}
      <br /><br />
      Such information shall be treated as strictly confidential regardless of form or format.
    </p>

    <!-- OBLIGATIONS -->
    <h3>3. Obligations of the Recipient</h3>
    <p>
      The Recipient agrees to:
      <br /><br />
      {{obligationsSummary}}
      <br /><br />
      The Recipient shall take all reasonable steps to protect Confidential Information from unauthorized access, use, or disclosure.
    </p>

    <!-- EXCLUSIONS -->
    <h3>4. Exclusions</h3>
    <p>
      Confidential Information shall not include information that:
      <br /><br />
      (a) is publicly available without breach of this Agreement;  
      (b) is lawfully received from a third party without restriction; or  
      (c) is independently developed without use of Confidential Information.
    </p>

    <!-- TERM -->
    <h3>5. Term</h3>
    <p>
      This Agreement shall remain in effect for a period of <strong>{{duration}}</strong>.
      Confidentiality obligations shall survive termination as required under this Agreement.
    </p>

    <!-- CONSIDERATION -->
    <h3>6. Consideration</h3>
    <p>
      The parties acknowledge that the exchange of confidential information and mutual obligations constitute sufficient legal consideration.
      <br /><br />
      Additional consideration (if any):
      <strong>{{consideration}}</strong>
    </p>

    <!-- GOVERNING LAW -->
    <h3>7. Governing Law</h3>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of
      <strong>{{governingLaw}}</strong>.
      <br /><br />
      The parties agree to submit to the jurisdiction of the competent courts.
    </p>

    <!-- SPECIAL TERMS -->
    <h3>8. Special Conditions</h3>
    <p>{{specialClauses}}</p>

    <!-- TERMINATION -->
    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement by providing written notice.
      <br /><br />
      All confidentiality obligations shall survive termination indefinitely unless otherwise agreed.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>10. Entire Agreement</h3>
    <p>
      This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements or discussions.
      <br /><br />
      If any provision is found invalid, the remaining provisions shall remain fully enforceable.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:40px;">
      <div class="doc-col">
        <p><strong>Discloser Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Recipient Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default ndaTemplate;