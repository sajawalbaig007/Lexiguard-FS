const employmentContractTemplate = (data = {}) => {

  // ✅ AUTO DATE (same as your NDA)
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = today.toLocaleString("en-GB", { month: "long" });
  const year = today.getFullYear();

  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Inter, system-ui, -apple-system, sans-serif;
      max-width: 800px;
      margin: auto;
      padding: 40px 50px;
      line-height: 1.8;
      color: #111827;
      background: #ffffff;
    "
  >

    <style>
      .section-title {
        margin-top: 28px;
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
        .doc-flex { flex-direction: column !important; }
        .doc-col { width: 100% !important; }
      }
    </style>

    <!-- HEADER -->
    <div style="text-align:center; margin-bottom:30px;">
      <h1 style="font-size:26px;font-weight:600;">
        CONTRACT OF EMPLOYMENT
      </h1>
    </div>

    <p class="text">
      This Agreement is made on 
      <strong>${day} ${month} ${year}</strong> between:
    </p>

    <p class="text">
      <strong>{{companyName}}</strong> ("the Company") with address at <strong>{{companyAddress}}</strong><br>
      <strong>{{employeeName}}</strong> ("you") with address at <strong>{{employeeAddress}}</strong>
    </p>

    <p class="text">
      <strong>Important Note:</strong> This contract works alongside company policies (and/or Employee Handbook) which cover details like holidays, sickness, and bonuses. These are separate documents.
      This agreement outlines the terms of your employment with the Company.
    </p>

    <h2 class="section-title">Company policies</h2>
    <p class="text">
      Company policies (and/or Employee Handbook) contain information about your job, but they aren't considered part of this contract unless mentioned here. You'll receive a copy of these policies, which the Company may update from time to time.
    </p>

    <h2 class="section-title">Start date</h2>
    <p class="text">
      Your employment with the Company starts <strong>{{startDate}}</strong>. Your continuous employment starts on the same date (previous jobs don't count).
    </p>

    <h2 class="section-title">Probationary period (Optional)</h2>
    <p class="text">
      The first <strong>{{probationPeriod}}</strong> of your employment are considered probationary. The Company can extend this period if needed to properly assess your performance. During probation, either side can terminate your employment with one week's written notice.
    </p>

    <h2 class="section-title">Job Title and duties</h2>
    <p class="text">
      Your job title is <strong>{{jobTitle}}</strong>. Your job description and duties are included in this Agreement. The Company may ask you to perform other tasks as needed for business purposes.
    </p>

    <h2 class="section-title">Work location</h2>
    <p class="text">
      Your primary workplace will be <strong>{{workLocation}}</strong>. You may be required to travel within the UK and abroad for work.
    </p>

    <h2 class="section-title">Salary</h2>
    <p class="text">
      Your annual salary is £<strong>{{salary}}</strong>. You'll be paid in equal monthly installments, in arrears, on or before the last day of each month by direct deposit to your bank account.
    </p>

    <h2 class="section-title">Overtime</h2>
    <p class="text">
      Overtime policy: <strong>{{overtimePolicy}}</strong>
    </p>

    <h2 class="section-title">Work hours</h2>
    <p class="text">
      Your usual work hours are <strong>{{workHours}}</strong>. These hours may change to meet business needs. You may also be required to work additional hours to fulfill your job duties.
    </p>

    <h2 class="section-title">Holidays</h2>
    <p class="text">
      The Company's holiday year runs as defined by company policy. Full-time staff get standard paid holidays including public and bank holidays.
    </p>

    <h2 class="section-title">Further details</h2>
    <p class="text">
      There are no terms applying to this Agreement which relate to the following:
      <br>• The period for which the employment is intended to continue or the date when it is to end;
      <br>• Any collective agreements which directly affect the terms and conditions of employment;
      <br>• Work outside the United Kingdom.
    </p>

    <!-- SIGNATURE -->
    <div class="doc-flex" style="margin-top:60px;">
      <div class="doc-col">
        <p><strong>COMPANY</strong></p>
        <div style="border-bottom:1px solid #000; height:40px; margin-top:25px;"></div>
        <p style="font-size:12px; color:#6b7280;">Signature</p>
      </div>

      <div class="doc-col">
        <p><strong>EMPLOYEE</strong></p>
        <div style="border-bottom:1px solid #000; height:40px; margin-top:25px;"></div>
        <p style="font-size:12px; color:#6b7280;">Signature</p>
      </div>
    </div>

    <p class="text" style="margin-top:30px; font-size:12px; color:#6b7280;">
      Disclaimer: This document is intended as a sample employment contract template and should not be taken as legal advice. We recommend that you consult with a solicitor to ensure this contract meets your specific needs and complies with all relevant UK employment laws.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default employmentContractTemplate;