const leaseTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div class="doc-container" style="
      font-family: Inter, system-ui, -apple-system, sans-serif;
      width: 100%;
      line-height: 1.8;
      padding: 40px 50px;
<<<<<<< HEAD
      line-height: 1.75; 
      color: #222;
      box-sizing: border-box;
    "
  >
=======
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
        .doc-container {
          padding: 12px !important;
        }
=======
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
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
      }
    </style>

    <!-- HEADER -->
<<<<<<< HEAD
    <h1 style="text-align:center; font-size:28px; margin-bottom:10px;">
      LEASE AGREEMENT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is made and entered into on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Agreement is legally binding and sets out the terms and conditions between the Landlord and Tenant.
    </p>

    <!-- PARTIES -->
    <h3>Parties</h3>
    <p>
      This Lease Agreement ("Agreement") is entered into between 
      <strong>{{landlordName}}</strong> ("Landlord") and 
      <strong>{{tenantName}}</strong> ("Tenant").
      Both parties agree to be legally bound by the terms set out in this Agreement.
    </p>

    <!-- PROPERTY -->
    <h3>1. Property</h3>
    <p>
      The Landlord agrees to lease the property located at 
      <strong>{{propertyAddress}}</strong> (the "Premises"), including all fixtures, fittings, and associated rights attached to the property.
    </p>

    <!-- PURPOSE -->
    <h3>2. Permitted Use</h3>
    <p>
      The Premises shall be used strictly for the following purpose:
      <br /><br />
      {{leasePurpose}}
      <br /><br />
      The Tenant shall not use the Premises for any illegal, hazardous, or unauthorized activities.
    </p>

    <!-- TERM -->
    <h3>3. Term of Lease</h3>
    <p>
      This Lease shall remain in effect for a fixed term of 
      <strong>{{duration}}</strong>, unless terminated earlier in accordance with the provisions of this Agreement.
      <br /><br />
      Any extension or renewal shall require mutual written consent of both parties.
    </p>

    <!-- RENT -->
    <h3>4. Rent</h3>
    <p>
      The Tenant agrees to pay a rent of 
      <strong>£{{rentAmount}}</strong>, payable in advance as agreed between the parties.
      <br /><br />
      Late payments may result in penalties or interest charges in accordance with applicable law.
    </p>

    <!-- DEPOSIT -->
    <h3>5. Security Deposit</h3>
    <p>
      The Tenant shall pay a refundable security deposit of 
      <strong>£{{depositAmount}}</strong>, which may be used to cover damages, unpaid rent, or breach of terms beyond normal wear and tear.
    </p>

    <!-- UTILITIES -->
    <h3>6. Utilities and Charges</h3>
    <p>
      The Tenant shall be responsible for all utility bills, council taxes, and other services related to the Premises unless otherwise agreed in writing.
    </p>

    <!-- MAINTENANCE -->
    <h3>7. Maintenance and Repairs</h3>
    <p>
      The Tenant shall maintain the Premises in good condition and promptly report any damages.
      <br /><br />
      The Landlord remains responsible for structural repairs and compliance with statutory housing regulations.
    </p>

    <!-- RESTRICTIONS -->
    <h3>8. Restrictions</h3>
    <p>
      The Tenant shall not sublet, assign, or transfer possession of the Premises without prior written consent of the Landlord.
    </p>

    <!-- TERMINATION -->
    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement by providing reasonable written notice as required by applicable law.
      <br /><br />
      Upon termination, the Tenant must vacate the Premises and return it in a clean and good condition.
    </p>

    <!-- SPECIAL CLAUSES -->
    <h3>10. Special Conditions</h3>
    <p>{{specialClauses}}</p>

    <!-- GOVERNING LAW -->
    <h3>11. Governing Law</h3>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of 
      <strong>{{governingLaw}}</strong>.
      <br /><br />
      Both parties agree to submit to the jurisdiction of the appropriate courts.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>12. Entire Agreement</h3>
    <p>
      This document constitutes the entire agreement between the parties and replaces all prior discussions, negotiations, or agreements.
      <br /><br />
      If any provision is found invalid or unenforceable, the remaining provisions shall continue in full force and effect.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:40px;">
      <div class="doc-col">
        <p><strong>Landlord Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Tenant Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
=======
    <div style="text-align:center; margin-bottom:40px;">
      <h1 style="font-size:26px;font-weight:600;margin-bottom:8px;">
        LEASE AGREEMENT
      </h1>
      <p style="color:#6b7280;font-size:13px;">
        Date of Agreement: <strong>${today}</strong>
      </p>
      <p style="color:#6b7280;font-size:12px; margin-top:6px;">
        This Lease Agreement is a legally binding contract made under applicable property laws between the parties named below.
      </p>
    </div>

    <!-- 1. Parties -->
    <h2 class="section-title">1. Parties</h2>
    <p class="text">
      This Agreement is made between <strong>{{landlordName}}</strong> ("Landlord") 
      and <strong>{{tenantName}}</strong> ("Tenant").
    </p>

    <!-- 2. Property Details -->
    <h2 class="section-title">2. Property Details</h2>
    <p class="text">
      The Landlord agrees to lease the residential/commercial property located at:
      <strong>{{propertyAddress}}</strong>.
    </p>

    <!-- 3. Term of Tenancy -->
    <h2 class="section-title">3. Term of Tenancy</h2>
    <p class="text">
      This tenancy shall begin on <strong>${today}</strong> and shall continue for 
      <strong>{{duration}}</strong>, unless terminated earlier under this Agreement.
    </p>

    <!-- 4. Rent Payment Terms -->
    <h2 class="section-title">4. Rent Payment Terms</h2>
    <p class="text">
      Tenant agrees to pay monthly rent of <strong>£{{rentAmount}}</strong>.
    </p>
    <p class="text">
      Rent must be paid on or before the due date each month via agreed payment method.
    </p>

    <!-- 5. Security Deposit -->
    <h2 class="section-title">5. Security Deposit</h2>
    <p class="text">
      A refundable deposit of <strong>£{{depositAmount}}</strong> shall be held by the Landlord.
    </p>
    <p class="text">
      The deposit may be used for damages, unpaid rent, or breach of contract.
    </p>

    <!-- 6. Use of Property -->
    <h2 class="section-title">6. Use of Property</h2>
    <p class="text">
      The Tenant agrees to use the property strictly for 
      <strong>{{leasePurpose}}</strong> purposes only.
    </p>

    <!-- 7. Utilities and Bills -->
    <h2 class="section-title">7. Utilities and Bills</h2>
    <p class="text">
      The Tenant shall be responsible for utilities including electricity, gas, water, internet, and council tax unless otherwise agreed in writing.
    </p>

    <!-- 8. Maintenance Responsibilities -->
    <h2 class="section-title">8. Maintenance Responsibilities</h2>
    <p class="text">
      The Tenant must keep the property clean and in good condition.
      The Landlord is responsible for structural repairs and major maintenance issues.
    </p>

    <!-- 9. Inspection Rights -->
    <h2 class="section-title">9. Inspection Rights</h2>
    <p class="text">
      The Landlord may inspect the property with at least 24 hours notice except in emergencies.
    </p>

    <!-- 10. Alterations -->
    <h2 class="section-title">10. Alterations</h2>
    <p class="text">
      The Tenant shall not make any structural or permanent changes to the property without written consent of the Landlord.
    </p>

    <!-- 11. Subletting -->
    <h2 class="section-title">11. Subletting</h2>
    <p class="text">
      Subletting or assignment of the property is strictly prohibited unless agreed in writing.
    </p>

    <!-- 12. Termination -->
    <h2 class="section-title">12. Termination</h2>
    <p class="text">
      Either party may terminate this Agreement by providing reasonable written notice in accordance with UK tenancy law.
    </p>

    <!-- 13. Breach of Agreement -->
    <h2 class="section-title">13. Breach of Agreement</h2>
    <p class="text">
      If either party breaches this Agreement, the non-breaching party may terminate the contract and seek legal remedies.
    </p>

    <!-- 14. Liability -->
    <h2 class="section-title">14. Liability</h2>
    <p class="text">
      The Landlord is not responsible for personal belongings of the Tenant in case of theft, fire, or damage unless caused by negligence.
    </p>

    <!-- 15. Force Majeure -->
    <h2 class="section-title">15. Force Majeure</h2>
    <p class="text">
      Neither party shall be liable for failure due to events beyond reasonable control including natural disasters, war, or government restrictions.
    </p>

    <!-- 16. Governing Law -->
    <h2 class="section-title">16. Governing Law</h2>
    <p class="text">
      This Agreement shall be governed under the laws of 
      <strong>{{jurisdiction}}</strong>.
    </p>

    <!-- 17. Entire Agreement -->
    <h2 class="section-title">17. Entire Agreement</h2>
    <p class="text">
      This document represents the complete agreement between both parties and overrides any prior verbal or written agreements.
    </p>

    <!-- SIGNATURES -->
    <h2 class="section-title">Signatures</h2>

    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>Landlord</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
        <p class="text">{{landlordName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Tenant</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
        <p class="text">{{tenantName}}</p>
>>>>>>> 9759c9bc000f5e6fe621cbaa4fe61274d8c744e0
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default leaseTemplate;