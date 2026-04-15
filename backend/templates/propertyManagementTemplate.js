const propertyManagementTemplate = (data = {}) => {
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
      PROPERTY MANAGEMENT AGREEMENT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is made effective as of <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Agreement establishes the terms between a Property Owner and a Property Manager for management of real estate assets.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Property Management Agreement ("Agreement") is entered into between:
      <br/><br/>
      <strong>{{ownerName}}</strong> ("Property Owner")
      <br/>
      and
      <br/>
      <strong>{{managerName}}</strong> ("Property Manager").
      <br/><br/>
      Both parties confirm they are legally capable of entering into this Agreement and agree to be bound by its terms.
    </p>

    <!-- PROPERTY DETAILS -->
    <h3>2. Property Details</h3>
    <p>
      The Property covered under this Agreement is located at:
      <br/><br/>
      <strong>{{propertyAddress}}</strong>
      <br/><br/>
      Property Type: {{propertyType}}<br/>
      Number of Units (if applicable): {{units}}
    </p>

    <!-- APPOINTMENT -->
    <h3>3. Appointment of Property Manager</h3>
    <p>
      The Property Owner hereby appoints the Property Manager to manage, operate, and oversee the property described above.
      <br/><br/>
      The Property Manager agrees to act in the best interest of the Property Owner at all times.
    </p>

    <!-- SERVICES -->
    <h3>4. Scope of Management Services</h3>
    <p>
      The Property Manager shall provide the following services:
      <br/><br/>
      {{managementServices}}
      <br/><br/>
      Any additional services must be agreed in writing.
    </p>

    <!-- RENT COLLECTION -->
    <h3>5. Rent Collection & Financial Handling</h3>
    <p>
      The Property Manager is authorized to collect rent on behalf of the Property Owner.
      <br/><br/>
      Collected rent shall be handled as follows:
      <br/><br/>
      {{rentHandling}}
      <br/><br/>
      The Property Manager must provide monthly financial statements upon request.
    </p>

    <!-- FEES -->
    <h3>6. Management Fees</h3>
    <p>
      The Property Owner agrees to pay the Property Manager:
      <br/><br/>
      {{managementFees}}
      <br/><br/>
      Fees may be deducted from collected rent unless otherwise agreed.
    </p>

    <!-- MAINTENANCE -->
    <h3>7. Maintenance Responsibilities</h3>
    <p>
      The Property Manager shall coordinate repairs, maintenance, and inspections as required.
      <br/><br/>
      Emergency repairs may be authorized without prior approval up to:
      <br/>
      {{maintenanceLimit}}
    </p>

    <!-- TENANTS -->
    <h3>8. Tenant Management</h3>
    <p>
      The Property Manager is responsible for:
      <br/><br/>
      - Tenant screening and selection<br/>
      - Lease administration<br/>
      - Handling tenant complaints<br/>
      - Rent arrears management
      <br/><br/>
      {{tenantManagementDetails}}
    </p>

    <!-- LEGAL COMPLIANCE -->
    <h3>9. Legal Compliance</h3>
    <p>
      The Property Manager shall ensure compliance with all applicable housing laws, safety regulations, and local authority requirements.
    </p>

    <!-- LIABILITY -->
    <h3>10. Liability</h3>
    <p>
      The Property Manager shall not be held liable for tenant damages, non-payment of rent, or external property market conditions.
      <br/><br/>
      Liability is limited to gross negligence or willful misconduct.
    </p>

    <!-- TERM -->
    <h3>11. Term of Agreement</h3>
    <p>
      This Agreement shall commence on the effective date and continue for:
      <br/><br/>
      {{contractDuration}}
    </p>

    <!-- TERMINATION -->
    <h3>12. Termination</h3>
    <p>
      Either party may terminate this Agreement by providing written notice.
      <br/><br/>
      Immediate termination may occur in case of breach of contract or misconduct.
    </p>

    <!-- CONFIDENTIALITY -->
    <h3>13. Confidentiality</h3>
    <p>
      Both parties agree to keep financial, tenant, and property-related information strictly confidential.
    </p>

    <!-- GOVERNING LAW -->
    <h3>14. Governing Law</h3>
    <p>
      This Agreement shall be governed under the laws of:
      <strong>{{governingLaw}}</strong>
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>15. Entire Agreement</h3>
    <p>
      This document represents the entire Agreement between the parties and supersedes all prior agreements.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:50px;">
      <div class="doc-col">
        <p><strong>Property Owner</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Property Manager</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default propertyManagementTemplate;