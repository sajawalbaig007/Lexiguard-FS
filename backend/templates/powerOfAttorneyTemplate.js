const powerOfAttorneyTemplate = (data = {}) => {
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
      max-width: 950px; 
      margin: auto; 
      padding: 40px;
      line-height: 1.85; 
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
    <h1 style="text-align:center; font-size:30px; margin-bottom:10px;">
      POWER OF ATTORNEY
    </h1>

    <p style="text-align:center; color:#555;">
      Effective Date: <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Power of Attorney is a legally binding document granting authority from a Principal to an appointed Attorney-in-Fact.
    </p>

    <!-- PRINCIPAL -->
    <h3>1. Principal (Grantor)</h3>
    <p>
      I, the undersigned:
      <br/><br/>
      <strong>{{principalName}}</strong>
      <br/>
      Address: {{principalAddress}}
      <br/><br/>
      hereby appoint the following person as my lawful Attorney-in-Fact.
    </p>

    <!-- ATTORNEY -->
    <h3>2. Attorney-in-Fact</h3>
    <p>
      Full Name:
      <strong>{{attorneyName}}</strong>
      <br/>
      Address: {{attorneyAddress}}
      <br/>
      Contact: {{attorneyContact}}
    </p>

    <!-- AUTHORITY -->
    <h3>3. Grant of Authority</h3>
    <p>
      I hereby grant my Attorney-in-Fact full authority to act on my behalf in relation to the following matters:
      <br/><br/>
      {{authorityScope}}
      <br/><br/>
      This authority includes the power to sign documents, make decisions, and perform acts as if I were personally present.
    </p>

    <!-- FINANCIAL AUTHORITY -->
    <h3>4. Financial Powers</h3>
    <p>
      The Attorney-in-Fact is authorized to:
      <br/><br/>
      {{financialPowers}}
      <br/><br/>
      This may include handling bank accounts, transactions, investments, and financial agreements.
    </p>

    <!-- PROPERTY AUTHORITY -->
    <h3>5. Property & Legal Matters</h3>
    <p>
      The Attorney-in-Fact may manage, sell, purchase, lease, or otherwise deal with real or personal property, including:
      <br/><br/>
      {{propertyPowers}}
    </p>

    <!-- LIMITATIONS -->
    <h3>6. Limitations of Authority</h3>
    <p>
      The Attorney-in-Fact shall NOT have authority to:
      <br/><br/>
      {{limitations}}
    </p>

    <!-- DURATION -->
    <h3>7. Duration</h3>
    <p>
      This Power of Attorney shall remain valid until:
      <br/><br/>
      <strong>{{duration}}</strong>
      <br/><br/>
      unless revoked earlier in writing by the Principal.
    </p>

    <!-- REVOCATION -->
    <h3>8. Revocation Clause</h3>
    <p>
      The Principal reserves the right to revoke this Power of Attorney at any time by providing written notice.
      <br/><br/>
      Upon revocation, all authority granted herein shall immediately cease.
    </p>

    <!-- THIRD PARTY RELIANCE -->
    <h3>9. Third Party Reliance</h3>
    <p>
      Any third party may rely on this document as proof of authority granted to the Attorney-in-Fact until officially revoked.
    </p>

    <!-- LIABILITY -->
    <h3>10. Liability</h3>
    <p>
      The Attorney-in-Fact shall act in good faith and within the scope of authority granted.
      <br/><br/>
      The Principal shall not hold the Attorney-in-Fact liable for actions performed in good faith under this document.
    </p>

    <!-- GOVERNING LAW -->
    <h3>11. Governing Law</h3>
    <p>
      This Power of Attorney shall be governed by the laws of:
      <strong>{{governingLaw}}</strong>
    </p>

    <!-- FINAL DECLARATION -->
    <h3>12. Declaration</h3>
    <p>
      I confirm that I am of sound mind and voluntarily execute this Power of Attorney without coercion or undue influence.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:50px;">
      <div class="doc-col">
        <p><strong>Principal</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Attorney-in-Fact</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>
    </div>

    <p style="margin-top:40px; text-align:center; font-size:12px; color:#666;">
      This document grants legal authority and should be used in accordance with applicable law.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default powerOfAttorneyTemplate;