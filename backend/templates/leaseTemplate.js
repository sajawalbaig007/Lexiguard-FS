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
      line-height: 1.75; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container {
          padding: 12px !important;
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

    <!-- HEADER -->
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
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default leaseTemplate;