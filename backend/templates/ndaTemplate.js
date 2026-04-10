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
      line-height: 1.8; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container { padding: 10px !important; }
        .doc-container h1 { font-size: 22px !important; text-align:center; }
        .doc-container h3 { font-size: 16px !important; }
        .doc-container p { font-size: 14px !important; }
      }
    </style>

    <!-- HEADER -->
    <h1 style="text-align:center;font-size:28px;">
      NON-DISCLOSURE AGREEMENT (NDA)
    </h1>

    <p style="text-align:center;color:#555;">
      Date of Agreement: <strong>${today}</strong>
    </p>

    <p style="margin-top:20px;">
      This Non-Disclosure Agreement ("Agreement") is a legally binding contract entered into under applicable confidentiality and contract laws.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Agreement is made between <strong>{{discloserName}}</strong> ("Disclosing Party") 
      and <strong>{{recipientName}}</strong> ("Receiving Party").
    </p>

    <!-- PURPOSE -->
    <h3>2. Purpose of Disclosure</h3>
    <p>
      The purpose of this Agreement is:
      <strong>{{purpose}}</strong>
    </p>

    <p>
      The Parties wish to exchange confidential information for the above purpose only.
    </p>

    <!-- CONFIDENTIAL INFO -->
    <h3>3. Definition of Confidential Information</h3>
    <p>
      Confidential Information includes but is not limited to:
    </p>
    <p>
      <strong>{{confidentialScope}}</strong>
    </p>

    <p>
      This includes business data, technical data, financial information, trade secrets, and any information marked or reasonably understood as confidential.
    </p>

    <!-- OBLIGATIONS -->
    <h3>4. Obligations of Receiving Party</h3>
    <p>The Receiving Party agrees to:</p>
    <p><strong>{{obligationsSummary}}</strong></p>

    <p>In addition, the Receiving Party shall:</p>
    <ul>
      <li>Protect confidential information using reasonable security measures</li>
      <li>Restrict access to authorised personnel only</li>
      <li>Not disclose information to any third party without written consent</li>
      <li>Use the information solely for the stated purpose</li>
    </ul>

    <!-- EXCLUSIONS -->
    <h3>5. Exclusions</h3>
    <p>Confidential Information does not include information that:</p>
    <ul>
      <li>Is publicly available without breach of this Agreement</li>
      <li>Was already known before disclosure</li>
      <li>Is independently developed without use of confidential data</li>
      <li>Is required to be disclosed by law or court order</li>
    </ul>

    <!-- TERM -->
    <h3>6. Term and Duration</h3>
    <p>
      This Agreement shall remain in effect for <strong>{{duration}}</strong>.
    </p>
    <p>
      Confidentiality obligations shall survive termination of this Agreement.
    </p>

    <!-- CONSIDERATION -->
    <h3>7. Consideration</h3>
    <p>
      Any consideration or value exchanged under this Agreement:
      <strong>{{consideration}}</strong>
    </p>

    <!-- RETURN/DESTRUCTION -->
    <h3>8. Return or Destruction of Information</h3>
    <p>
      Upon request or termination, the Receiving Party shall immediately return or destroy all confidential materials and certify the same in writing.
    </p>

    <!-- LIABILITY -->
    <h3>9. Liability and Remedies</h3>
    <p>
      Any breach of this Agreement may cause irreparable harm, and the Disclosing Party shall be entitled to legal remedies including injunctive relief and damages.
    </p>

    <!-- NO LICENSE -->
    <h3>10. No License</h3>
    <p>
      Nothing in this Agreement grants any ownership, license, or rights to intellectual property except as expressly stated.
    </p>

    <!-- GOVERNING LAW -->
    <h3>11. Governing Law</h3>
    <p>
      This Agreement shall be governed by the laws of <strong>{{jurisdiction}}</strong>.
    </p>

    <!-- FORCE MAJEURE -->
    <h3>12. Force Majeure</h3>
    <p>
      Neither party shall be liable for delays or failure caused by events beyond reasonable control including natural disasters, war, or governmental actions.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>13. Entire Agreement</h3>
    <p>
      This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div style="display:flex;justify-content:space-between;margin-top:50px;">
      <div>
        <p><strong>Disclosing Party</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{discloserName}}</p>
      </div>

      <div>
        <p><strong>Receiving Party</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{recipientName}}</p>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default ndaTemplate;