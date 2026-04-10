const leaseTemplate = (data = {}) => {
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
      padding: 40px 50px;
      line-height: 1.8; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container { padding: 10px !important; }
        .doc-container h1 { font-size: 22px !important; }
        .doc-container h3 { font-size: 16px !important; }
        .doc-container p { font-size: 14px !important; }
      }
    </style>

    <!-- HEADER -->
    <h1 style="text-align:center;font-size:28px;">
      LEASE AGREEMENT
    </h1>

    <p style="text-align:center;color:#555;">
      Date of Agreement: <strong>${today}</strong>
    </p>

    <p style="margin-top:20px;">
      This Lease Agreement is a legally binding contract made under applicable property laws between the parties named below.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Agreement is made between <strong>{{landlordName}}</strong> ("Landlord") 
      and <strong>{{tenantName}}</strong> ("Tenant").
    </p>

    <!-- PROPERTY -->
    <h3>2. Property Details</h3>
    <p>
      The Landlord agrees to lease the residential/commercial property located at:
      <strong>{{propertyAddress}}</strong>.
    </p>

    <!-- TERM -->
    <h3>3. Term of Tenancy</h3>
    <p>
      This tenancy shall begin on <strong>${today}</strong> and shall continue for 
      <strong>{{duration}}</strong>, unless terminated earlier under this Agreement.
    </p>

    <!-- RENT -->
    <h3>4. Rent Payment Terms</h3>
    <p>
      Tenant agrees to pay monthly rent of <strong>£{{rentAmount}}</strong>.
    </p>
    <p>
      Rent must be paid on or before the due date each month via agreed payment method.
    </p>

    <!-- DEPOSIT -->
    <h3>5. Security Deposit</h3>
    <p>
      A refundable deposit of <strong>£{{depositAmount}}</strong> shall be held by the Landlord.
    </p>
    <p>
      The deposit may be used for damages, unpaid rent, or breach of contract.
    </p>

    <!-- PURPOSE -->
    <h3>6. Use of Property</h3>
    <p>
      The Tenant agrees to use the property strictly for 
      <strong>{{leasePurpose}}</strong> purposes only.
    </p>

    <!-- UTILITIES -->
    <h3>7. Utilities and Bills</h3>
    <p>
      The Tenant shall be responsible for utilities including electricity, gas, water, internet, and council tax unless otherwise agreed in writing.
    </p>

    <!-- MAINTENANCE -->
    <h3>8. Maintenance Responsibilities</h3>
    <p>
      The Tenant must keep the property clean and in good condition.
      The Landlord is responsible for structural repairs and major maintenance issues.
    </p>

    <!-- INSPECTION -->
    <h3>9. Inspection Rights</h3>
    <p>
      The Landlord may inspect the property with at least 24 hours notice except in emergencies.
    </p>

    <!-- ALTERATIONS -->
    <h3>10. Alterations</h3>
    <p>
      The Tenant shall not make any structural or permanent changes to the property without written consent of the Landlord.
    </p>

    <!-- SUBLETTING -->
    <h3>11. Subletting</h3>
    <p>
      Subletting or assignment of the property is strictly prohibited unless agreed in writing.
    </p>

    <!-- TERMINATION -->
    <h3>12. Termination</h3>
    <p>
      Either party may terminate this Agreement by providing reasonable written notice in accordance with UK tenancy law.
    </p>

    <!-- BREACH -->
    <h3>13. Breach of Agreement</h3>
    <p>
      If either party breaches this Agreement, the non-breaching party may terminate the contract and seek legal remedies.
    </p>

    <!-- LIABILITY -->
    <h3>14. Liability</h3>
    <p>
      The Landlord is not responsible for personal belongings of the Tenant in case of theft, fire, or damage unless caused by negligence.
    </p>

    <!-- FORCE MAJEURE -->
    <h3>15. Force Majeure</h3>
    <p>
      Neither party shall be liable for failure due to events beyond reasonable control including natural disasters, war, or government restrictions.
    </p>

    <!-- GOVERNING LAW -->
    <h3>16. Governing Law</h3>
    <p>
      This Agreement shall be governed under the laws of 
      <strong>{{jurisdiction}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>17. Entire Agreement</h3>
    <p>
      This document represents the complete agreement between both parties and overrides any prior verbal or written agreements.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div style="display:flex;justify-content:space-between;margin-top:50px;">
      <div>
        <p><strong>Landlord</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{landlordName}}</p>
      </div>

      <div>
        <p><strong>Tenant</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{tenantName}}</p>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default leaseTemplate;