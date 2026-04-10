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
          padding: 8px !important;
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
      This Non-Disclosure Agreement ("Agreement") is made between 
      <strong>{{discloserName}}</strong> (the "Discloser") and 
      <strong>{{recipientName}}</strong> (the "Recipient").
    </p>

    <h3>1. Purpose</h3>
    <p>
      The parties wish to explore the following purpose:
      <br /><br />
      {{purpose}}
      <br /><br />
      In connection with this purpose, the Discloser may disclose Confidential Information to the Recipient.
    </p>

    <h3>2. Definition of Confidential Information</h3>
    <p>
      "Confidential Information" shall include all information disclosed by the Discloser, whether in writing, orally, or otherwise, including but not limited to:
      <br /><br />
      {{confidentialScope}}
    </p>

    <h3>3. Obligations of the Recipient</h3>
    <p>
      The Recipient undertakes to:
      <br /><br />
      {{obligationsSummary}}
      <br /><br />
      The Recipient shall exercise reasonable care to protect such information and shall not disclose it to any third party without prior written consent of the Discloser.
    </p>

    <h3>4. Exclusions</h3>
    <p>
      Confidential Information shall not include information which:
      <br /><br />
      (a) is or becomes publicly available other than through breach of this Agreement;  
      (b) is lawfully obtained from a third party; or  
      (c) is independently developed without use of Confidential Information.
    </p>

    <h3>5. Term</h3>
    <p>
      This Agreement shall remain in force for a period of <strong>{{duration}}</strong>, unless terminated earlier in accordance with its terms.
    </p>

    <h3>6. Consideration</h3>
    <p>
      The parties acknowledge the following consideration supporting this Agreement:
      <br /><br />
      <strong>{{consideration}}</strong>
    </p>

    <h3>7. Governing Law</h3>
    <p>
      This Agreement shall be governed by and construed in accordance with the laws of {{governingLaw}}.
      <br /><br />
      The parties submit to the jurisdiction of the courts of England and Wales.
    </p>

    <h3>8. Special Conditions</h3>
    <p>{{specialClauses}}</p>

    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement by giving written notice.
      <br /><br />
      Notwithstanding termination, the obligations of confidentiality shall survive and remain binding.
    </p>

    <h3>10. Entire Agreement</h3>
    <p>
      This Agreement constitutes the entire agreement between the parties and supersedes all prior arrangements.
      <br /><br />
      If any provision is held invalid, the remaining provisions shall remain in full force and effect.
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