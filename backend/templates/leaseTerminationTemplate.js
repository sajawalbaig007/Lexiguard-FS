const leaseTerminationTemplate = (data = {}) => {
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
      line-height: 1.75; 
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
      LEASE TERMINATION AGREEMENT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is executed on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document confirms mutual termination of a lease agreement between the parties.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Lease Termination Agreement ("Agreement") is entered into between
      <strong>{{landlordName}}</strong> ("Landlord") and
      <strong>{{tenantName}}</strong> ("Tenant").
      Both parties mutually agree to terminate the existing lease agreement under the terms stated herein.
    </p>

    <!-- ORIGINAL LEASE -->
    <h3>2. Original Lease Agreement</h3>
    <p>
      This termination applies to the property located at:
      <strong>{{propertyAddress}}</strong>
      <br/><br/>
      Original Lease Start Date: {{leaseStartDate}}<br/>
      Original Lease End Date: {{leaseEndDate}}
    </p>

    <!-- TERMINATION -->
    <h3>3. Termination of Lease</h3>
    <p>
      The parties hereby mutually agree to terminate the lease agreement effective from
      <strong>{{terminationDate}}</strong>.
      <br/><br/>
      From this date onward, the Tenant shall no longer have any right to occupy the premises.
    </p>

    <!-- VACATION -->
    <h3>4. Vacation of Property</h3>
    <p>
      The Tenant agrees to vacate the property on or before the termination date and return all keys, access cards, and property belonging to the Landlord.
    </p>

    <!-- FINANCIAL SETTLEMENT -->
    <h3>5. Financial Settlement</h3>
    <p>
      Any outstanding rent, utilities, or charges shall be settled as follows:
      <br/><br/>
      {{settlementDetails}}
    </p>

    <!-- SECURITY DEPOSIT -->
    <h3>6. Security Deposit</h3>
    <p>
      The security deposit shall be handled as follows:
      <br/><br/>
      {{depositReturnDetails}}
    </p>

    <!-- CONDITION -->
    <h3>7. Property Condition</h3>
    <p>
      The Tenant agrees to return the property in a clean and good condition, subject to fair wear and tear.
      <br/><br/>
      Additional condition notes:
      <br/><br/>
      {{propertyCondition}}
    </p>

    <!-- RELEASE -->
    <h3>8. Release of Liability</h3>
    <p>
      Upon completion of this termination, both parties release each other from any further obligations under the original lease agreement, except those expressly stated in this document.
    </p>

    <!-- CONFIDENTIALITY -->
    <h3>9. Mutual Agreement</h3>
    <p>
      Both parties confirm that this termination is entered into voluntarily and without coercion or undue pressure.
    </p>

    <!-- GOVERNING LAW -->
    <h3>10. Governing Law</h3>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of
      <strong>{{governingLaw}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>11. Entire Agreement</h3>
    <p>
      This document represents the full and final termination agreement between the parties and supersedes all prior discussions.
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

export default leaseTerminationTemplate;