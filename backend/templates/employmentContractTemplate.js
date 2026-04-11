const employmentContractTemplate = (data = {}) => {
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
        .doc-container { padding: 12px !important; }
        .doc-container h1 { font-size: 22px !important; text-align: center !important; }
        .doc-container h3 { font-size: 16px !important; }
        .doc-container p { font-size: 14px !important; }
        .doc-flex { flex-direction: column !important; gap: 30px; }
        .doc-col { width: 100% !important; }
        .section-title { font-size: 15px !important; }
        .text { font-size: 13px !important; }
      }
    </style>

    <!-- HEADER -->
    <h1 style="text-align:center; font-size:28px; margin-bottom:10px;">
      EMPLOYMENT CONTRACT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is made and entered into on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Employment Contract sets out the terms and conditions of employment.
    </p>

    <!-- PARTIES -->
    <h3>Parties</h3>
    <p>
      This Employment Contract is entered into between 
      <strong>{{employerName}}</strong> ("Employer") and 
      <strong>{{employeeName}}</strong> ("Employee").
    </p>

    <!-- POSITION -->
    <h3>1. Position</h3>
    <p>
      The Employee is employed as <strong>{{jobTitle}}</strong>.
      The Employee agrees to perform duties as assigned by the Employer.
    </p>

    <!-- START DATE -->
    <h3>2. Start Date</h3>
    <p>
      Employment shall commence on <strong>{{startDate}}</strong>.
    </p>

    <!-- COMPENSATION -->
    <h3>3. Compensation</h3>
    <p>
      The Employee shall be paid <strong>{{salary}}</strong>.
      Payment shall be made on a <strong>{{paymentFrequency}}</strong> basis.
    </p>

    <!-- WORK HOURS -->
    <h3>4. Working Hours</h3>
    <p>
      The Employee is expected to work <strong>{{workingHours}}</strong>.
    </p>

    <!-- DUTIES -->
    <h3>5. Duties and Responsibilities</h3>
    <p>
      The Employee shall:
      <br /><br />
      {{duties}}
    </p>

    <!-- CONFIDENTIALITY -->
    <h3>6. Confidentiality</h3>
    <p>
      The Employee agrees not to disclose any confidential information obtained during employment.
    </p>

    <!-- TERM -->
    <h3>7. Term</h3>
    <p>
      This Agreement shall continue for <strong>{{employmentType}}</strong>.
    </p>

    <!-- TERMINATION -->
    <h3>8. Termination</h3>
    <p>
      Either party may terminate this Agreement by giving <strong>{{noticePeriod}}</strong> notice.
    </p>

    <!-- GOVERNING LAW -->
    <h3>9. Governing Law</h3>
    <p>
      This Agreement shall be governed by the laws of 
      <strong>{{governingLaw}}</strong>.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>Employer Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
        <p class="text">{{employerName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Employee Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
        <p class="text">{{employeeName}}</p>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default employmentContractTemplate;