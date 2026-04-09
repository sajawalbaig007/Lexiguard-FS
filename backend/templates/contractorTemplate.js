const contractorTemplate = (data = {}) => {
  const template = `
  <div class="doc-container" style="
      font-family: Inter, system-ui, -apple-system, sans-serif;
      width: 100%;
      line-height: 1.8;
      padding: 200px;
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
        INDEPENDENT CONTRACTOR AGREEMENT
      </h1>
      <p style="color:#6b7280;font-size:13px;">
        This Agreement is made on <strong>{{date}}</strong>
      </p>
    </div>

    <!-- INTRO -->
    <p class="text">
      This Independent Contractor Agreement ("Agreement") is entered into by and between 
      <strong>{{clientName}}</strong>, located at {{clientAddress}} ("Client"), 
      and <strong>{{contractorName}}</strong>, located at {{contractorAddress}} ("Contractor").
    </p>

    <!-- 1 -->
    <h2 class="section-title">1. Scope of Work</h2>
    <p class="text">
      The Contractor agrees to perform the following services:
      <br /><br />
      {{servicesSummary}}
    </p>

    <!-- 2 -->
    <h2 class="section-title">2. Term</h2>
    <p class="text">
      This Agreement shall begin on <strong>{{startDate}}</strong> and continue until 
      <strong>{{endDate}}</strong>, unless terminated earlier in accordance with this Agreement.
    </p>

    <!-- 3 -->
    <h2 class="section-title">3. Compensation</h2>
    <p class="text">
      The Client agrees to pay the Contractor <strong>{{paymentAmount}}</strong> 
      under the following terms:
      <br /><br />
      {{paymentTerms}}
    </p>

    <!-- 4 -->
    <h2 class="section-title">4. Independent Contractor Status</h2>
    <p class="text">
      The Contractor is an independent contractor and not an employee of the Client. 
      The Contractor shall be solely responsible for taxes, insurance, and benefits.
    </p>

    <!-- 5 -->
    <h2 class="section-title">5. Confidentiality</h2>
    <p class="text">
      The Contractor agrees not to disclose any confidential or proprietary information 
      belonging to the Client during or after the term of this Agreement.
    </p>

    <!-- 6 -->
    <h2 class="section-title">6. Intellectual Property</h2>
    <p class="text">
      Any work product created under this Agreement shall be the exclusive property of the Client, 
      unless otherwise agreed in writing.
    </p>

    <!-- 7 -->
    <h2 class="section-title">7. Termination</h2>
    <p class="text">
      Either party may terminate this Agreement with {{terminationNotice}} written notice.
    </p>

    <!-- 8 -->
    <h2 class="section-title">8. Liability</h2>
    <p class="text">
      The Contractor shall not be liable for indirect or consequential damages. 
      Total liability shall not exceed the total fees paid under this Agreement.
    </p>

    <!-- 9 -->
    <h2 class="section-title">9. Governing Law</h2>
    <p class="text">
      This Agreement shall be governed by the laws of {{governingLaw}}.
    </p>

    <!-- 10 -->
    <h2 class="section-title">10. Entire Agreement</h2>
    <p class="text">
      This Agreement constitutes the entire agreement between the parties and supersedes 
      all prior agreements or understandings.
    </p>

    <!-- SIGNATURES -->
    <h2 class="section-title">Signatures</h2>

    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>Client</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
        <p style="margin-top:10px;">{{clientName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Contractor</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
        <p style="margin-top:10px;">{{contractorName}}</p>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default contractorTemplate;