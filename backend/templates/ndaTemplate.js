const ndaTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
<<<<<<< HEAD
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
=======
  <div class="doc-container" style="
      font-family: Inter, system-ui, -apple-system, sans-serif;
      width: 100%;
      line-height: 1.8;
      padding: 40px 50px;
      color: #111827;
      background: #ffffff;
    ">
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0

    <style>
      .section-title {
        margin-top: 32px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 6px;
      }

      .text {
        color: #374151;
        font-size: 14px;
        margin-top: 10px;
      }

      .doc-flex {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-top: 40px;
      }

      .doc-col {
        width: 45%;
      }

      @media (max-width: 768px) {
<<<<<<< HEAD
        .doc-container { padding: 12px !important; }
        .doc-container h1 { font-size: 22px !important; text-align: center !important; }
        .doc-container h3 { font-size: 16px !important; }
        .doc-container p { font-size: 14px !important; }
        .doc-flex { flex-direction: column !important; gap: 30px; }
        .doc-col { width: 100% !important; }
=======
        .doc-container h1 {
          font-size: 20px !important;
        }
        .section-title {
          font-size: 15px !important;
        }
        .text {
          font-size: 13px !important;
        }
        .doc-flex {
          flex-direction: column !important;
        }
        .doc-col {
          width: 100% !important;
        }
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
      }
    </style>

    <!-- HEADER -->
<<<<<<< HEAD
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
=======
    <div style="text-align:center; margin-bottom:40px;">
      <h1 style="font-size:26px;font-weight:600;margin-bottom:8px;">
        NON-DISCLOSURE AGREEMENT (NDA)
      </h1>
      <p style="color:#6b7280;font-size:13px;">
        Date of Agreement: <strong>${today}</strong>
      </p>
      <p style="color:#6b7280;font-size:12px; margin-top:6px;">
        This Non-Disclosure Agreement ("Agreement") is a legally binding contract entered into under applicable confidentiality and contract laws.
      </p>
    </div>

    <!-- 1. Parties -->
    <h2 class="section-title">1. Parties</h2>
    <p class="text">
      This Agreement is made between <strong>{{discloserName}}</strong> ("Disclosing Party") 
      and <strong>{{recipientName}}</strong> ("Receiving Party").
    </p>

    <!-- 2. Purpose of Disclosure -->
    <h2 class="section-title">2. Purpose of Disclosure</h2>
    <p class="text">
      The purpose of this Agreement is:
      <strong>{{purpose}}</strong>
    </p>
    <p class="text">
      The Parties wish to exchange confidential information for the above purpose only.
    </p>

    <!-- 3. Definition of Confidential Information -->
    <h2 class="section-title">3. Definition of Confidential Information</h2>
    <p class="text">
      Confidential Information includes but is not limited to:
    </p>
    <p class="text">
      <strong>{{confidentialScope}}</strong>
    </p>
    <p class="text">
      This includes business data, technical data, financial information, trade secrets, and any information marked or reasonably understood as confidential.
    </p>

    <!-- 4. Obligations of Receiving Party -->
    <h2 class="section-title">4. Obligations of Receiving Party</h2>
    <p class="text">The Receiving Party agrees to:</p>
    <p class="text"><strong>{{obligationsSummary}}</strong></p>
    <p class="text">In addition, the Receiving Party shall:</p>
    <ul class="text" style="margin-top: 5px; padding-left: 20px;">
      <li>Protect confidential information using reasonable security measures</li>
      <li>Restrict access to authorised personnel only</li>
      <li>Not disclose information to any third party without written consent</li>
      <li>Use the information solely for the stated purpose</li>
    </ul>

    <!-- 5. Exclusions -->
    <h2 class="section-title">5. Exclusions</h2>
    <p class="text">Confidential Information does not include information that:</p>
    <ul class="text" style="margin-top: 5px; padding-left: 20px;">
      <li>Is publicly available without breach of this Agreement</li>
      <li>Was already known before disclosure</li>
      <li>Is independently developed without use of confidential data</li>
      <li>Is required to be disclosed by law or court order</li>
    </ul>

    <!-- 6. Term and Duration -->
    <h2 class="section-title">6. Term and Duration</h2>
    <p class="text">
      This Agreement shall remain in effect for <strong>{{duration}}</strong>.
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
    </p>
    <p class="text">
      Confidentiality obligations shall survive termination of this Agreement.
    </p>

<<<<<<< HEAD
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
=======
    <!-- 7. Consideration -->
    <h2 class="section-title">7. Consideration</h2>
    <p class="text">
      Any consideration or value exchanged under this Agreement:
      <strong>{{consideration}}</strong>
    </p>

    <!-- 8. Return or Destruction of Information -->
    <h2 class="section-title">8. Return or Destruction of Information</h2>
    <p class="text">
      Upon request or termination, the Receiving Party shall immediately return or destroy all confidential materials and certify the same in writing.
    </p>

    <!-- 9. Liability and Remedies -->
    <h2 class="section-title">9. Liability and Remedies</h2>
    <p class="text">
      Any breach of this Agreement may cause irreparable harm, and the Disclosing Party shall be entitled to legal remedies including injunctive relief and damages.
    </p>

    <!-- 10. No License -->
    <h2 class="section-title">10. No License</h2>
    <p class="text">
      Nothing in this Agreement grants any ownership, license, or rights to intellectual property except as expressly stated.
    </p>

    <!-- 11. Governing Law -->
    <h2 class="section-title">11. Governing Law</h2>
    <p class="text">
      This Agreement shall be governed by the laws of <strong>{{jurisdiction}}</strong>.
    </p>

    <!-- 12. Force Majeure -->
    <h2 class="section-title">12. Force Majeure</h2>
    <p class="text">
      Neither party shall be liable for delays or failure caused by events beyond reasonable control including natural disasters, war, or governmental actions.
    </p>

    <!-- 13. Entire Agreement -->
    <h2 class="section-title">13. Entire Agreement</h2>
    <p class="text">
      This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements.
    </p>

    <!-- SIGNATURES -->
    <h2 class="section-title">Signatures</h2>

    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>Disclosing Party</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
        <p class="text">{{discloserName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Receiving Party</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
        <p class="text">{{recipientName}}</p>
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default ndaTemplate;