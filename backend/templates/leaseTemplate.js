 const leaseTemplate = (data = {}) => {
  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Georgia, 'Times New Roman', serif; 
      max-width: 800px; 
      margin: auto; 
      padding: 40px 50px;
      line-height: 1.7; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container {
          padding: 8px !important; /* ✅ remove padding on mobile */
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
      LEASE AGREEMENT
    </h1>

    <p style="text-align: center;">Date: {{date}}</p>

    <h3>Parties</h3>
    <p>
      This Lease Agreement is made between <strong>{{landlordName}}</strong> (the "Landlord") 
      and <strong>{{tenantName}}</strong> (the "Tenant").
    </p>

    <h3>1. Property</h3>
    <p>
      The Landlord hereby leases to the Tenant the property located at 
      <strong>{{propertyAddress}}</strong> (the "Premises").
    </p>

    <h3>2. Purpose</h3>
    <p>{{leasePurpose}}</p>

    <h3>3. Term</h3>
    <p>
      This Agreement shall commence on {{date}} and continue for {{duration}},
      unless terminated earlier in accordance with this Agreement.
    </p>

    <h3>4. Rent</h3>
    <p>
      The Tenant agrees to pay rent of <strong>£ {{rentAmount}}</strong>.
      Payment shall be made in accordance with standard rental practices.
    </p>

    <h3>5. Security Deposit</h3>
    <p>
      A security deposit of <strong>£ {{depositAmount}}</strong> shall be paid
      and may be withheld for damages beyond normal wear and tear.
    </p>

    <h3>6. Utilities and Expenses</h3>
    <p>
      The Tenant shall be responsible for utilities and routine maintenance
      unless otherwise agreed in writing.
    </p>

    <h3>7. Maintenance</h3>
    <p>
      The Tenant shall maintain the Premises in good condition.
      The Landlord remains responsible for structural repairs.
    </p>

    <h3>8. Use of Property</h3>
    <p>
      The Premises shall not be used for unlawful purposes.
      Subleasing requires prior written consent from the Landlord.
    </p>

    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement with reasonable written notice,
      subject to applicable laws and agreed conditions.
    </p>

    <h3>10. Special Clauses</h3>
    <p>{{specialClauses}}</p>

    <h3>11. Governing Law</h3>
    <p>
      This Agreement shall be governed by the laws of {{jurisdiction}}.
    </p>

    <h3>12. Entire Agreement</h3>
    <p>
      This document constitutes the entire agreement between the parties.
    </p>

    <h3>Signatures</h3>

    <div class="doc-flex" style="display: flex; justify-content: space-between; margin-top: 40px;">
      <div class="doc-col">
        <p><strong>Landlord</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{landlordName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Tenant</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{tenantName}}</p>
      </div>
    </div>

    <p style="margin-top: 40px;">Date: {{date}}</p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default leaseTemplate;