// employmentContractTemplate.ts
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
      font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; 
      max-width: 1000px; 
      margin: auto; 
      padding: 50px 60px;
      line-height: 1.6; 
      color: #2c2418;
      background: #ffffff;
      box-sizing: border-box;
      border: 1px solid #e0cfb5;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    "
  >
    <style>
      .section-title {
        margin-top: 32px;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 700;
        color: #8b5a2b;
        border-bottom: 1.5px solid #c4a57b;
        padding-bottom: 6px;
        letter-spacing: 0.5px;
      }
      .sub-section {
        margin-top: 18px;
        font-weight: 600;
        font-size: 15px;
        color: #5c3d1a;
      }
      .text {
        color: #2c2418;
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .clause-number {
        font-weight: 700;
        display: inline-block;
        width: 28px;
        color: #8b5a2b;
      }
      .doc-flex {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        margin-top: 40px;
        margin-bottom: 30px;
      }
      .doc-col {
        width: 45%;
      }
      .signature-line {
        border-bottom: 1px solid #2c2418;
        height: 50px;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .print-name {
        font-size: 12px;
        color: #6b5a48;
        margin-top: 5px;
        font-style: italic;
      }
      .disclaimer-box {
        margin-top: 40px;
        padding: 18px 22px;
        background: #fefaf5;
        border-left: 4px solid #b87c4a;
        font-size: 12px;
        color: #5c4b34;
        font-family: inherit;
        border-radius: 0 8px 8px 0;
      }
      .disclaimer-box strong {
        color: #8b5a2b;
        font-weight: 700;
      }
      @media (max-width: 768px) {
        .doc-container { padding: 25px !important; }
        .doc-container h1 { font-size: 24px !important; text-align: center !important; }
        .doc-flex { flex-direction: column !important; gap: 30px; }
        .doc-col { width: 100% !important; }
      }
    </style>

    <!-- HEADER -->
    <div style="text-align:center; margin-bottom: 35px;">
      <h1 style="font-size: 32px; margin-bottom: 8px; letter-spacing: 2px; color: #5c3d1a; font-weight: 600;">EMPLOYMENT CONTRACT</h1>
      <div style="height: 2px; width: 70px; background: #c4a57b; margin: 12px auto;"></div>
      <p style="font-size: 13px; color: #8a7a64; margin-top: 8px;">Legally binding agreement</p>
    </div>

    <!-- DATE AND PARTIES -->
    <p style="font-size: 14px;">This Agreement is made on <strong>${today}</strong> between:</p>
    <p style="margin-left: 20px; font-size: 14px;"><strong>{{companyName}}</strong> ("the Company") with address at <strong>{{companyAddress}}</strong></p>
    <p style="margin-left: 20px; font-size: 14px;"><strong>{{employeeName}}</strong> ("the Employee") with address at <strong>{{employeeAddress}}</strong></p>

    <p style="margin-top: 20px; font-size: 13px; color: #6b5a48; font-style: italic;">
      <strong>Important Note:</strong> This contract works alongside company policies ({{policyReference}}) which cover details like holidays, sickness, and bonuses. These are separate documents.<br>
      This agreement outlines the terms of your employment with the Company.
    </p>

    <!-- SECTION 1 -->
    <div class="section-title">1. COMPANY POLICIES</div>
    <p class="text">{{policyDetails}} contain information about your job, but they aren't considered part of this contract unless mentioned here. You'll receive a copy of these policies, which the Company may update from time to time.</p>

    <!-- SECTION 2 -->
    <div class="section-title">2. START DATE</div>
    <p class="text">Your employment with the Company starts <strong>{{startDate}}</strong>. Your continuous employment starts on the same date (previous jobs don't count).</p>

    <!-- SECTION 3 -->
    <div class="section-title">3. PROBATIONARY PERIOD (OPTIONAL)</div>
    <p class="text">The first <strong>{{probationPeriod}}</strong> of your employment are considered probationary. The Company can extend this period if needed to properly assess your performance. During probation, either side can terminate your employment with one week's written notice.</p>

    <!-- SECTION 4 -->
    <div class="section-title">4. JOB TITLE AND DUTIES</div>
    <p class="text">Your job title is <strong>{{jobTitle}}</strong>. Your job description and duties are included in this Agreement. The Company may ask you to perform other tasks as needed for business purposes.</p>

    <!-- SECTION 5 -->
    <div class="section-title">5. WORK LOCATION</div>
    <p class="text">Your primary workplace will be <strong>{{workLocation}}</strong> (or the Company's main office) {{workLocationAlternative}}. You may be required to travel within the UK {{internationalTravel}} for work.</p>

    <!-- SECTION 6 -->
    <div class="section-title">6. SALARY</div>
    <p class="text">Your annual salary is <strong>£{{salary}}</strong>. You'll be paid in equal <strong>{{paymentFrequency}}</strong> installments, in arrears, on or before the <strong>{{paymentDay}}</strong> by direct deposit to your bank account.</p>

    <!-- SECTION 7 -->
    <div class="section-title">7. OVERTIME</div>
    <p class="text">{{overtimeTerms}}</p>

    <!-- SECTION 8 -->
    <div class="section-title">8. PERFORMANCE REVIEWS (OPTIONAL)</div>
    <p class="text">The Company will review your performance annually. Performance reviews are entirely at the Company's discretion, and the frequency may vary. Positive reviews may be used for pay raises, but don't guarantee them.</p>

    <!-- SECTION 9 -->
    <div class="section-title">9. PENSION & RETIREMENT</div>
    <p class="text">{{pensionTerms}}</p>

    <!-- SECTION 10 -->
    <div class="section-title">10. WORK HOURS</div>
    <p class="text">Your usual work hours are <strong>{{workHours}}</strong> Monday to Friday with a lunch break of at least <strong>{{lunchBreakMinutes}}</strong> minutes between <strong>{{lunchStart}}</strong> and <strong>{{lunchEnd}}</strong>. These hours may change to meet business needs. You may also be required to work additional hours to fulfill your job duties. The exact duration of these extra hours won't be predetermined.</p>

    <!-- SECTION 11 -->
    <div class="section-title">11. HOLIDAYS</div>
    <p class="text">The Company's holiday year runs from <strong>{{holidayYearStart}}</strong> to <strong>{{holidayYearEnd}}</strong>. Full-time staff get <strong>{{holidayDays}}</strong> paid holidays per year, including public and bank holidays (explained in clause 10.2 below). Part-time staff receive a pro-rated amount of holiday entitlement.</p>

    <!-- SECTION 12 -->
    <div class="section-title">12. PUBLIC & BANK HOLIDAYS</div>
    <p class="text">The Company requires you to use some of your holiday entitlement (up to 8 days per year) for public and bank holidays that fall on your normal working days. Employees who work on public and bank holidays won't be required to use additional holiday time (subject to clause 10.3).</p>

    <!-- SECTION 13 -->
    <div class="section-title">13. TAKING HOLIDAYS</div>
    <p class="text">Holidays can only be taken at times convenient to the Company and according to the rules in the {{holidayPolicyReference}}.</p>

    <!-- SECTION 14 -->
    <div class="section-title">14. HOLIDAY PAYOUT ON TERMINATION</div>
    <p class="text">When your employment ends, you'll be paid for any unused holidays at a rate of 1/260th of your <strong>{{fteReference}}</strong> salary for each untaken day.</p>

    <!-- SECTION 15 -->
    <div class="section-title">15. FURTHER DETAILS</div>
    <p class="text">There are no terms applying to this Agreement which relate to the following:</p>
    <ul style="margin-top: 0; margin-bottom: 10px;">
      <li class="text">The period for which the employment is intended to continue or the date when it is to end;</li>
      <li class="text">Any collective agreements which directly affect the terms and conditions of employment;</li>
      <li class="text">Work outside the United Kingdom.</li>
    </ul>

    <!-- DISCLAIMER -->
    <div class="disclaimer-box">
      <strong>⚠️ Disclaimer:</strong> This document is a sample employment contract template provided for informational purposes only and does not constitute legal advice. Employment laws vary by jurisdiction and are subject to change. You are strongly advised to consult with a qualified solicitor or legal professional to ensure that this contract complies with all applicable laws and meets your specific requirements. Neither the template provider nor the Company assumes any legal liability arising from the use of this document.
    </div>

    <!-- SIGNATURES -->
    <div class="section-title" style="margin-top: 35px;">16. EXECUTION OF AGREEMENT</div>
    <p class="text">IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first written above.</p>

    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>For and on behalf of the Company</strong></p>
        <div class="signature-line"></div>
        <p class="print-name">Signature</p>
        <div class="signature-line" style="margin-top: 15px;"></div>
        <p class="print-name">Print Name: <strong>{{companySignatory}}</strong></p>
        <div class="signature-line" style="margin-top: 15px;"></div>
        <p class="print-name">Title: <strong>{{companySignatoryTitle}}</strong></p>
      </div>
      <div class="doc-col">
        <p><strong>Employee</strong></p>
        <div class="signature-line"></div>
        <p class="print-name">Signature</p>
        <div class="signature-line" style="margin-top: 15px;"></div>
        <p class="print-name">Print Name: <strong>{{employeeName}}</strong></p>
        <div class="signature-line" style="margin-top: 15px;"></div>
        <p class="print-name">Date: <strong>${today}</strong></p>
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