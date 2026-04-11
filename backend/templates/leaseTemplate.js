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
      line-height: 1.7;
      padding: 40px 50px;
      color: #111827;
      background: #ffffff;
      box-sizing: border-box;
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
        .doc-container {
          padding: 12px !important;
        }
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
        This Lease Agreement is a legally binding contract between the parties named below.
      </p>
    </div>

    <!-- 1. Parties -->
    <h2 class="section-title">1. Parties</h2>
    <p class="text">
      This Agreement is made between <strong>{{landlordName}}</strong> ("Landlord") 
      and <strong>{{tenantName}}</strong> ("Tenant").
    </p>

    <!-- 2. Property -->
    <h2 class="section-title">2. Property</h2>
    <p class="text">
      Property Address: <strong>{{propertyAddress}}</strong>
    </p>

    <!-- 3. Term -->
    <h2 class="section-title">3. Term</h2>
    <p class="text">
      Duration: <strong>{{duration}}</strong>
    </p>

    <!-- 4. Rent -->
    <h2 class="section-title">4. Rent</h2>
    <p class="text">
      Monthly Rent: <strong>£{{rentAmount}}</strong>
    </p>

    <!-- 5. Deposit -->
    <h2 class="section-title">5. Security Deposit</h2>
    <p class="text">
      Deposit Amount: <strong>£{{depositAmount}}</strong>
    </p>

    <!-- 6. Use -->
    <h2 class="section-title">6. Use of Property</h2>
    <p class="text">
      Purpose: <strong>{{leasePurpose}}</strong>
    </p>

    <!-- 7. Utilities -->
    <h2 class="section-title">7. Utilities</h2>
    <p class="text">
      Tenant is responsible for all utility bills unless agreed otherwise.
    </p>

    <!-- 8. Maintenance -->
    <h2 class="section-title">8. Maintenance</h2>
    <p class="text">
      Tenant must maintain property. Landlord handles structural repairs.
    </p>

    <!-- 9. Termination -->
    <h2 class="section-title">9. Termination</h2>
    <p class="text">
      Either party may terminate with proper notice.
    </p>

    <!-- 10. Governing Law -->
    <h2 class="section-title">10. Governing Law</h2>
    <p class="text">
      Governed by laws of <strong>{{governingLaw}}</strong>
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