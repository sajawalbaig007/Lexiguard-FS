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
      color: #111827;
      background: #ffffff;
    ">

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
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default leaseTemplate;