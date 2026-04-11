const ndaTemplate = (data = {}) => {

  // ✅ AUTO DATE
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = today.toLocaleString("en-GB", { month: "long" });
  const year = today.getFullYear();

  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Inter, system-ui, -apple-system, sans-serif;
      max-width: 800px;
      margin: auto;
      padding: 40px 50px;
      line-height: 1.8;
      color: #111827;
      background: #ffffff;
    "
  >

    <style>
      .section-title {
        margin-top: 28px;
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
        .doc-container { padding: 12px !important; }
        .doc-flex { flex-direction: column !important; }
        .doc-col { width: 100% !important; }
      }
    </style>

    <!-- HEADER -->
    <div style="text-align:center; margin-bottom:30px;">
      <h1 style="font-size:26px;font-weight:600;">
        NON-DISCLOSURE AGREEMENT (NDA)
      </h1>
    </div>

    <p class="text">
      This Agreement is made and entered into as of this 
      <strong>${day}</strong> day of <strong>${month}</strong>, 
      <strong>${year}</strong> ("Effective Date") between 
      <strong>{{discloserName}}</strong> ("Discloser") and 
      <strong>{{recipientName}}</strong> ("Recipient").
    </p>

    <h2 class="section-title">I. BACKGROUND</h2>
    <p class="text">
      The Discloser and the Recipient wish to disclose certain confidential information to each other for the purpose of 
      <strong>{{purpose}}</strong> (the "Purpose"). 
      The parties agree to protect this information as set out below.
    </p>

    <h2 class="section-title">II. AGREEMENT</h2>

    <h3 class="section-title">1. Confidential Information</h3>
    <p class="text">
      "Confidential Information" means any information (including, without limitation, data, documents, images, prototypes, designs, plans, drawings, trade secrets, business strategies, financial data, or other materials, including combinations of individual items of information) disclosed by the Discloser to the Recipient before, on, or after the Effective Date, whether in written, oral, visual, electronic, or other form, and whether or not explicitly designated as "confidential" at the time of disclosure.
    </p>

    <p class="text">
      Confidential Information may also include information of a third party that is in the Discloser's possession and disclosed to the Recipient under this Agreement.
    </p>

    <p class="text">
      Confidential Information does not include information that the Recipient can establish:
      <br>(a) was publicly known and made generally available in the public domain prior to the time of disclosure;
      <br>(b) becomes publicly known and made generally available after disclosure through no action or inaction of the Recipient;
      <br>(c) is in the possession of the Recipient, without confidentiality obligations, prior to the time of disclosure;
      <br>(d) is disclosed to the Recipient by a third party without breaching any obligations of confidentiality; or
      <br>(e) is independently developed by the Recipient without the use of or reference to the Discloser's Confidential Information.
    </p>

    <p class="text">
      If the Recipient becomes legally compelled to disclose any Confidential Information, the Recipient shall provide the Discloser with prompt written notice and assist the Discloser in seeking a protective order or another appropriate remedy.
    </p>

    <h3 class="section-title">2. Non-Use and Non-Disclosure & Non-Solicitation</h3>
    <p class="text">
      The Recipient agrees not to use the Confidential Information for any purpose other than evaluating and discussing the potential business relationship with the Discloser.
    </p>

    <p class="text">
      The Recipient agrees not to solicit any employees, customers, or suppliers of the Discloser for a period of 
      <strong>{{nonSolicitPeriod}}</strong>.
    </p>

    <h3 class="section-title">3. Maintenance of Confidentiality</h3>
    <p class="text">
      The Recipient agrees to take all reasonable measures to protect the secrecy of the Confidential Information.
    </p>

    <h3 class="section-title">4. No Obligation</h3>
    <p class="text">
      Nothing in this Agreement obligates either party to proceed with any transaction.
    </p>

    <h3 class="section-title">5. No Warranty</h3>
    <p class="text">
      All Confidential Information is provided "AS IS".
    </p>

    <h3 class="section-title">6. Return of Materials</h3>
    <p class="text">
      All materials must be returned or destroyed upon request.
    </p>

    <h3 class="section-title">7. No Licence</h3>
    <p class="text">
      Nothing grants rights to intellectual property.
    </p>

    <h3 class="section-title">8. Term</h3>
    <p class="text">
      This Agreement shall remain in effect until information becomes public.
    </p>

    <h3 class="section-title">9. Remedies</h3>
    <p class="text">
      Breach may result in legal remedies including injunction.
    </p>

    <h3 class="section-title">10. Recipient Information</h3>
    <p class="text">
      Feedback related to <strong>{{product}}</strong> becomes property of Discloser.
    </p>

    <h3 class="section-title">11. Binding Agreement</h3>
    <p class="text">
      This Agreement binds successors.
    </p>

    <h3 class="section-title">12. Governing Law</h3>
    <p class="text">
      Governed by England and Wales courts in <strong>{{city}}</strong>.
    </p>

    <h3 class="section-title">13. Entire Agreement</h3>
    <p class="text">
      This is the complete agreement.
    </p>

    <h3 class="section-title">14. Disclosure of Illegal Acts</h3>
    <p class="text">
      This Agreement does not restrict lawful disclosures.
    </p>

    <h3 class="section-title">15. Data Protection Compliance</h3>
    <p class="text">
      The Recipient agrees to comply with GDPR and data protection laws.
    </p>

    <!-- SIGNATURE (UPDATED UI) -->
    <div class="doc-flex" style="margin-top:60px;">
      <div class="doc-col">
        <p><strong>COMPANY</strong></p>

        <div style="border-bottom:1px solid #000; height:40px; margin-top:25px;"></div>
        <p style="font-size:12px; color:#6b7280;">Signature</p>

       
      </div>

      <div class="doc-col">
        <p><strong>RECIPIENT</strong></p>

        <div style="border-bottom:1px solid #000; height:40px; margin-top:25px;"></div>
        <p style="font-size:12px; color:#6b7280;">Signature</p>

       
      </div>
    </div>

    <p class="text" style="margin-top:30px; font-size:12px; color:#6b7280;">
      Disclaimer: This document is intended as a template and does not constitute legal advice.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default ndaTemplate;