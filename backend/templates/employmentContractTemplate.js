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

    <h1 style="text-align:center; font-size:28px; margin-bottom:10px;">
      CONTRACT OF EMPLOYMENT
    </h1>

    <p style="text-align:center;">
      This Agreement is made on <strong>${today}</strong> between:<br />
      <strong>{{companyName}}</strong> ("the Company") with address at <strong>{{companyAddress}}</strong><br />
      <strong>{{employeeName}}</strong> ("you") with address at <strong>{{employeeAddress}}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      Important Note: This contract works alongside company policies ({{policyReference}}) which cover details like holidays, sickness, and bonuses. These are separate documents.
      This agreement outlines the terms of your employment with the Company.
    </p>

    <h3>Company policies</h3>
    <p>
      {{policyDetails}} contain information about your job, but they aren't considered part of this contract unless mentioned here. You'll receive a copy of these policies, which the Company may update from time to time.
    </p>

    <h3>Start date</h3>
    <p>
      Your employment with the Company starts <strong>{{startDate}}</strong>. Your continuous employment starts on the same date (previous jobs don't count).
    </p>

    <h3>Probationary period (Optional)</h3>
    <p>
      The first <strong>{{probationPeriod}}</strong> of your employment are considered probationary. The Company can extend this period if needed to properly assess your performance. During probation, either side can terminate your employment with one week's written notice.
    </p>

    <h3>Job Title and duties</h3>
    <p>
      Your job title is <strong>{{jobTitle}}</strong>. Your job description and duties are included in this Agreement. The Company may ask you to perform other tasks as needed for business purposes.
    </p>

    <h3>Work location</h3>
    <p>
      Your primary workplace will be <strong>{{workLocation}}</strong> (or the Company's main office) {{workLocationAlternative}}. You may be required to travel within the UK {{internationalTravel}} for work.
    </p>

    <h3>Salary</h3>
    <p>
      Your annual salary is <strong>£{{salary}}</strong>. You'll be paid in equal <strong>{{paymentFrequency}}</strong> installments, in arrears, on or before the <strong>{{paymentDay}}</strong> by direct deposit to your bank account.
    </p>

    <h3>Overtime</h3>
    <p>
      {{overtimeTerms}}
    </p>

    <h3>Performance reviews (Optional)</h3>
    <p>
      The Company will review your performance annually. Performance reviews are entirely at the Company's discretion, and the frequency may vary. Positive reviews may be used for pay raises, but don't guarantee them.
    </p>

    <h3>Pension & retirement</h3>
    <p>
      {{pensionTerms}}
    </p>

    <h3>Work hours</h3>
    <p>
      Your usual work hours are <strong>{{workHours}}</strong> Monday to Friday with a lunch break of at least <strong>{{lunchBreakMinutes}}</strong> minutes between <strong>{{lunchStart}}</strong> and <strong>{{lunchEnd}}</strong>. These hours may change to meet business needs. You may also be required to work additional hours to fulfill your job duties. The exact duration of these extra hours won't be predetermined.
    </p>

    <h3>Holidays</h3>
    <p>
      The Company's holiday year runs from <strong>{{holidayYearStart}}</strong> to <strong>{{holidayYearEnd}}</strong>. Full-time staff get <strong>{{holidayDays}}</strong> paid holidays per year, including public and bank holidays (explained in clause 10.2 below). Part-time staff receive a pro-rated amount of holiday entitlement.
    </p>

    <h3>Public & bank holidays</h3>
    <p>
      The Company requires you to use some of your holiday entitlement (up to 8 days per year) for public and bank holidays that fall on your normal working days. Employees who work on public and bank holidays won't be required to use additional holiday time (subject to clause 10.3).
    </p>

    <h3>Taking holidays</h3>
    <p>
      Holidays can only be taken at times convenient to the Company and according to the rules in the {{holidayPolicyReference}}.
    </p>

    <h3>Holiday payout on termination</h3>
    <p>
      When your employment ends, you'll be paid for any unused holidays at a rate of 1/260th of your <strong>{{fteReference}}</strong> salary for each untaken day.
    </p>

    <h3>Further details</h3>
    <p>
      There are no terms applying to this Agreement which relate to the following:
      <br />• The period for which the employment is intended to continue or the date when it is to end;
      <br />• Any collective agreements which directly affect the terms and conditions of employment;
      <br />• Work outside the United Kingdom.
    </p>

    <p style="margin-top: 40px; font-size: 12px; color: #666; border-top: 1px solid #ccc; padding-top: 20px;">
      <strong>Disclaimer:</strong> This document is intended as a sample employment contract template and should not be taken as legal advice. We recommend that you consult with a solicitor to ensure this contract meets your specific needs and complies with all relevant UK employment laws.
    </p>

    <h3>Signatures</h3>
    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>For and on behalf of the Company</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
        <p class="text">{{companySignatory}}</p>
      </div>
      <div class="doc-col">
        <p><strong>Employee Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
        <p class="text">{{employeeName}}</p>
      </div>
    </div>
  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => {
    const trimmedKey = key.trim();
    return data[trimmedKey] !== undefined ? data[trimmedKey] : `[${trimmedKey}]`;
  });
};

export default employmentContractTemplate;