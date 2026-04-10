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
      LEASE AGREEMENT
    </h1>

    <p style="text-align: center;">Date: {{date}}</p>

    <h3>Parties</h3>
    <p>
      This Lease Agreement ("Agreement") is made between 
      <strong>{{landlordName}}</strong> (the "Landlord") and 
      <strong>{{tenantName}}</strong> (the "Tenant").
    </p>

    <h3>1. Property</h3>
    <p>
      The Landlord hereby lets to the Tenant the property situated at 
      <strong>{{propertyAddress}}</strong> (the "Premises"), together with all fixtures and fittings.
    </p>

    <h3>2. Permitted Use</h3>
    <p>
      The Premises shall be used solely for the following purpose:
      <br /><br />
      {{leasePurpose}}
      <br /><br />
      The Tenant shall not use the Premises for any unlawful or prohibited purpose.
    </p>

    <h3>3. Term</h3>
    <p>
      The tenancy shall commence on <strong>{{date}}</strong> and shall continue for a period of 
      <strong>{{duration}}</strong>, unless terminated earlier in accordance with this Agreement.
    </p>

    <h3>4. Rent</h3>
    <p>
      The Tenant agrees to pay rent in the sum of <strong>£ {{rentAmount}}</strong>, payable in advance in accordance with standard rental practice.
      <br /><br />
      Any late payments may be subject to reasonable charges as permitted by law.
    </p>

    <h3>5. Tenancy Deposit</h3>
    <p>
      The Tenant shall pay a security deposit of <strong>£ {{depositAmount}}</strong>, which shall be held and may be applied towards any damages, losses, or unpaid rent beyond fair wear and tear.
    </p>

    <h3>6. Utilities and Outgoings</h3>
    <p>
      The Tenant shall be responsible for the payment of all utilities, council tax, and other outgoings relating to the Premises unless otherwise agreed in writing.
    </p>

    <h3>7. Repairs and Maintenance</h3>
    <p>
      The Tenant shall keep the Premises in good and tenantable condition.
      <br /><br />
      The Landlord shall remain responsible for structural repairs and compliance with statutory obligations.
    </p>

    <h3>8. Restrictions</h3>
    <p>
      The Tenant shall not assign, sublet, or part with possession of the Premises without the prior written consent of the Landlord.
    </p>

    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement by giving reasonable written notice in accordance with applicable law.
      <br /><br />
      Upon termination, the Tenant shall vacate the Premises and return it in good condition.
    </p>

    <h3>10. Special Conditions</h3>
    <p>{{specialClauses}}</p>

    <h3>11. Governing Law</h3>
    <p>
      This Agreement shall be governed by and construed in accordance with the laws of {{governingLaw}}.
      <br /><br />
      The parties submit to the jurisdiction of the courts of England and Wales.
    </p>

    <h3>12. Entire Agreement</h3>
    <p>
      This Agreement constitutes the entire agreement between the parties and supersedes all prior discussions or agreements.
      <br /><br />
      If any provision is held invalid, the remaining provisions shall remain in full force and effect.
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