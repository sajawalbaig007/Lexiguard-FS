const evictionNoticeTemplate = (data = {}) => {
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
      EVICTION NOTICE
    </h1>

    <p style="text-align:center; color:#555;">
      Date of Notice: <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document serves as a formal legal notice requiring the tenant to vacate the premises under applicable tenancy laws.
    </p>

    <!-- LANDLORD / TENANT -->
    <h3>1. Parties</h3>
    <p>
      This Eviction Notice is issued by:
      <br/><br/>
      <strong>{{landlordName}}</strong> ("Landlord")
      <br/><br/>
      To:
      <br/><br/>
      <strong>{{tenantName}}</strong> ("Tenant")
    </p>

    <!-- PROPERTY -->
    <h3>2. Property Details</h3>
    <p>
      The property subject to this notice is located at:
      <br/><br/>
      <strong>{{propertyAddress}}</strong>
    </p>

    <!-- NOTICE TYPE -->
    <h3>3. Type of Eviction Notice</h3>
    <p>
      This notice is issued under the following grounds:
      <br/><br/>
      <strong>{{evictionType}}</strong>
      <br/><br/>
      (e.g., Non-payment of rent, Lease violation, End of tenancy, Property damage, Illegal use)
    </p>

    <!-- REASON -->
    <h3>4. Reason for Eviction</h3>
    <p>
      The Tenant is hereby notified of the following reason(s) for eviction:
      <br/><br/>
      {{evictionReason}}
      <br/><br/>
      The Tenant is required to address or remedy the above issues within the stipulated notice period, if applicable.
    </p>

    <!-- NOTICE PERIOD -->
    <h3>5. Notice Period</h3>
    <p>
      The Tenant is required to vacate the premises within:
      <br/><br/>
      <strong>{{noticePeriod}}</strong>
      <br/><br/>
      Failure to comply within this period may result in legal proceedings and enforcement action.
    </p>

    <!-- OUTSTANDING PAYMENTS -->
    <h3>6. Outstanding Amounts (If Any)</h3>
    <p>
      The following outstanding dues are currently payable:
      <br/><br/>
      {{outstandingAmount}}
    </p>

    <!-- TENANT RIGHTS -->
    <h3>7. Tenant Rights & Compliance</h3>
    <p>
      The Tenant is advised that they may seek independent legal advice regarding this notice.
      <br/><br/>
      This notice is issued in accordance with applicable tenancy laws and does not waive any legal rights of the Landlord.
    </p>

    <!-- PROPERTY CONDITION -->
    <h3>8. Condition of Property Upon Vacating</h3>
    <p>
      The Tenant is required to return the property in a clean, undamaged condition, subject to fair wear and tear.
      <br/><br/>
      All keys, access cards, and property items must be returned to the Landlord upon vacating.
    </p>

    <!-- FAILURE TO VACATE -->
    <h3>9. Failure to Vacate</h3>
    <p>
      If the Tenant fails to vacate within the specified notice period, the Landlord reserves the right to initiate:
      <br/><br/>
      - Legal eviction proceedings  
      - Court orders for possession  
      - Recovery of unpaid rent and damages  
    </p>

    <!-- SETTLEMENT -->
    <h3>10. Settlement Instructions</h3>
    <p>
      The Tenant is encouraged to settle all outstanding matters before vacating, including rent arrears and utility bills.
    </p>

    <!-- GOVERNING LAW -->
    <h3>11. Governing Law</h3>
    <p>
      This Notice shall be governed by the laws of:
      <strong>{{governingLaw}}</strong>
    </p>

    <!-- FINAL DECLARATION -->
    <h3>12. Final Declaration</h3>
    <p>
      This Eviction Notice is issued in good faith and in accordance with applicable tenancy regulations.
      <br/><br/>
      The Landlord reserves all legal rights.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:50px;">
      <div class="doc-col">
        <p><strong>Landlord</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Tenant Acknowledgment</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>
    </div>

    <p style="margin-top:40px; text-align:center; font-size:12px; color:#666;">
      This document is intended as a formal notice and may be used in legal proceedings if required.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default evictionNoticeTemplate;