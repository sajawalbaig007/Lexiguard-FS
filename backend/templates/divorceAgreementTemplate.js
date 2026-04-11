const divorceAgreementTemplate = (data = {}) => {
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
      DIVORCE SETTLEMENT AGREEMENT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is executed on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document outlines the mutual settlement terms between parties following the dissolution of marriage.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Divorce Settlement Agreement ("Agreement") is entered into between
      <strong>{{partyOneName}}</strong> and <strong>{{partyTwoName}}</strong>,
      collectively referred to as the "Parties".
    </p>

    <!-- MARRIAGE DETAILS -->
    <h3>2. Marriage Background</h3>
    <p>
      The Parties confirm that they were legally married on:
      <strong>{{marriageDate}}</strong>
      <br/><br/>
      The Parties have mutually agreed to dissolve the marriage and settle all related matters amicably.
    </p>

    <!-- SEPARATION TERMS -->
    <h3>3. Separation Agreement</h3>
    <p>
      The Parties agree that they shall live separately and independently from the effective date of this Agreement:
      <br/><br/>
      Effective Date: <strong>{{separationDate}}</strong>
    </p>

    <!-- ASSETS -->
    <h3>4. Division of Assets</h3>
    <p>
      The Parties agree to the following division of marital assets:
      <br/><br/>
      {{assetDivision}}
    </p>

    <!-- PROPERTY -->
    <h3>5. Property Settlement</h3>
    <p>
      All jointly owned or individually owned property shall be distributed as follows:
      <br/><br/>
      {{propertySettlement}}
    </p>

    <!-- FINANCIAL SUPPORT -->
    <h3>6. Financial Support / Maintenance</h3>
    <p>
      Any spousal support, maintenance, or financial assistance shall be as follows:
      <br/><br/>
      {{financialSupport}}
    </p>

    <!-- CHILD CUSTODY -->
    <h3>7. Child Custody & Support (if applicable)</h3>
    <p>
      The Parties agree on the following arrangements regarding children:
      <br/><br/>
      {{childCustody}}
    </p>

    <!-- DEBTS -->
    <h3>8. Liabilities and Debts</h3>
    <p>
      All joint and individual debts shall be handled as follows:
      <br/><br/>
      {{debtDivision}}
    </p>

    <!-- MUTUAL RELEASE -->
    <h3>9. Mutual Release</h3>
    <p>
      Upon execution of this Agreement, both Parties release each other from any further claims, demands, or obligations except those expressly stated herein.
    </p>

    <!-- CONFIDENTIALITY -->
    <h3>10. Confidentiality</h3>
    <p>
      Both Parties agree to maintain confidentiality regarding the terms of this Agreement and personal matters related to the marriage dissolution.
    </p>

    <!-- GOVERNING LAW -->
    <h3>11. Governing Law</h3>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of
      <strong>{{governingLaw}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>12. Entire Agreement</h3>
    <p>
      This document constitutes the full and final settlement between the Parties and supersedes all prior agreements.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:40px;">
      <div class="doc-col">
        <p><strong>Party One Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Party Two Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default divorceAgreementTemplate;