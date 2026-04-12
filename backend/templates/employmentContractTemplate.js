const employmentContractTemplate = (data = {}) => {
  const today = new Date().toDateLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div 
    class="doc-container"
    style="
      font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; 
      width: 100%;
      margin: 0;
      padding: 40px 50px;
      line-height: 1.6; 
      color: #2c2418;
      background: #ffffff;
      box-sizing: border-box;
    "
  >
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .doc-container {
        width: 100%;
        max-width: none;
        overflow-x: visible;
      }
      .section-title {
        margin-top: 40px;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 700;
        color: #4a2c14;
        border-bottom: 2px solid #b87c4a;
        padding-bottom: 6px;
        letter-spacing: 0.5px;
        width: 100%;
        page-break-after: avoid;
        break-inside: avoid;
      }
      .text {
        color: #2c2418;
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        line-height: 1.7;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .clause-number {
        font-weight: 700;
        display: inline-block;
        width: 28px;
        color: #4a2c14;
      }
      .doc-flex {
        display: flex;
        justify-content: space-between;
        gap: 60px;
        margin-top: 45px;
        margin-bottom: 35px;
        flex-wrap: wrap;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .doc-col {
        width: 45%;
        min-width: 200px;
      }
      .signature-line {
        border-bottom: 1px solid #2c2418;
        height: 55px;
        margin-top: 12px;
        margin-bottom: 5px;
        width: 100%;
      }
      .print-name {
        font-size: 13px;
        color: #6b5a48;
        margin-top: 5px;
        font-style: italic;
      }
      .disclaimer-box {
        margin-top: 55px;
        margin-bottom: 45px;
        padding: 20px 25px;
        background: #fefaf5;
        border-left: 5px solid #b87c4a;
        font-size: 13px;
        color: #5c4b34;
        font-family: inherit;
        border-radius: 0 10px 10px 0;
        width: 100%;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .disclaimer-box strong {
        color: #4a2c14;
        font-weight: 700;
      }
      hr {
        border: none;
        height: 1px;
        background: #b87c4a;
        margin: 35px 0;
        width: 100%;
      }
      h1 {
        font-size: 36px;
        margin-bottom: 10px;
        letter-spacing: 2px;
        color: #4a2c14;
        font-weight: 700;
      }
      p, li, div {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      ul, ol {
        padding-left: 30px;
        margin: 10px 0 20px 0;
      }
      li {
        margin: 5px 0;
      }

      /* Extra spacing before page ends naturally */
      .section-break {
        margin-bottom: 45px;
        page-break-after: avoid;
        break-inside: avoid;
      }
      
      /* Desktop/Laptop */
      @media (min-width: 1024px) {
        .doc-container {
          padding: 50px 70px;
        }
        .section-title {
          margin-top: 50px;
          margin-bottom: 18px;
        }
        .text {
          margin-bottom: 18px;
        }
        hr {
          margin: 45px 0;
        }
      }
      
      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        .doc-container {
          padding: 40px 50px;
        }
        .section-title {
          margin-top: 45px;
        }
      }
      
      /* Mobile */
      @media (max-width: 767px) {
        .doc-container {
          padding: 25px 20px !important;
        }
        h1 {
          font-size: 24px !important;
          text-align: center !important;
        }
        .doc-flex {
          flex-direction: column !important;
          gap: 35px !important;
        }
        .doc-col {
          width: 100% !important;
        }
        .section-title {
          margin-top: 35px !important;
          font-size: 16px !important;
        }
        .text {
          font-size: 13px !important;
          margin-bottom: 14px !important;
        }
        .disclaimer-box {
          padding: 15px !important;
          font-size: 11px !important;
          margin-top: 40px !important;
          margin-bottom: 35px !important;
        }
        hr {
          margin: 30px 0 !important;
        }
      }
    </style>

    <!-- HEADER -->
    <div style="text-align:center; margin-bottom: 50px; width: 100%;">
      <h1 style="font-size: 36px; margin-bottom: 10px; letter-spacing: 2px; color: #4a2c14; font-weight: 700;">CONTRACT OF EMPLOYMENT</h1>
      <div style="height: 2px; width: 80px; background: #b87c4a; margin: 15px auto;"></div>
      <p style="font-size: 14px; color: #8a7a64; margin-top: 10px;">Legally binding agreement</p>
    </div>

    <!-- DATE AND PARTIES -->
    <p style="font-size: 15px; margin-bottom: 8px;">This Agreement is made on <strong>${today}</strong> between:</p>
    <p style="margin-left: 25px; font-size: 15px; margin-top: 5px;"><strong>{{companyName}}</strong> ("the Company") with address at <strong>{{companyAddress}}</strong></p>
    <p style="margin-left: 25px; font-size: 15px; margin-top: 5px;"><strong>{{employeeName}}</strong> ("the Employee") with address at <strong>{{employeeAddress}}</strong></p>

    <hr />

    <p style="margin-top: 25px; font-size: 14px; color: #6b5a48; font-style: italic; margin-bottom: 25px;">
      <strong>Important Note:</strong> This contract works alongside company policies ({{policyReference}}) which cover details like holidays, sickness, and bonuses. These are separate documents.<br>
      This agreement outlines the terms of your employment with the Company.
    </p>

    <div class="section-title">1. COMPANY POLICIES</div>
    <p class="text">{{policyDetails}} contain information about your job, but they aren't considered part of this contract unless mentioned here. You'll receive a copy of these policies, which the Company may update from time to time.</p>

    <div class="section-title">2. START DATE</div>
    <p class="text">Your employment with the Company starts <strong>{{startDate}}</strong>. Your continuous employment starts on the same date (previous jobs don't count).</p>

    <div class="section-title">3. PROBATIONARY PERIOD (OPTIONAL)</div>
    <p class="text">The first <strong>{{probationPeriod}}</strong> of your employment are considered probationary. The Company can extend this period if needed to properly assess your performance. During probation, either side can terminate your employment with one week's written notice.</p>

    <div class="section-title">4. JOB TITLE AND DUTIES</div>
    <p class="text">Your job title is <strong>{{jobTitle}}</strong>. Your job description and duties are included in this Agreement. The Company may ask you to perform other tasks as needed for business purposes.</p>

    <div class="section-title">5. WORK LOCATION</div>
    <p class="text">Your primary workplace will be <strong>{{workLocation}}</strong> (or the Company's main office) {{workLocationAlternative}}. You may be required to travel within the UK {{internationalTravel}} for work.</p>

    <div class="section-title">6. SALARY</div>
    <p class="text">Your annual salary is <strong>£{{salary}}</strong>. You'll be paid in equal <strong>{{paymentFrequency}}</strong> installments, in arrears, on or before the <strong>{{paymentDay}}</strong> by direct deposit to your bank account.</p>

    <div class="section-title">7. OVERTIME</div>
    <p class="text">{{overtimeTerms}}</p>

    <div class="section-title">8. PERFORMANCE REVIEWS (OPTIONAL)</div>
    <p class="text">The Company will review your performance annually. Performance reviews are entirely at the Company's discretion, and the frequency may vary. Positive reviews may be used for pay raises, but don't guarantee them.</p>

    <div class="section-title">9. PENSION &amp; RETIREMENT</div>
    <p class="text">{{pensionTerms}}</p>

    <div class="section-title">10. WORK HOURS</div>
    <p class="text">Your usual work hours are <strong>{{workHours}}</strong> Monday to Friday with a lunch break of at least <strong>{{lunchBreakMinutes}}</strong> minutes between <strong>{{lunchStart}}</strong> and <strong>{{lunchEnd}}</strong>. These hours may change to meet business needs. You may also be required to work additional hours to fulfill your job duties. The exact duration of these extra hours won't be predetermined.</p>

    <div class="section-title">11. HOLIDAYS</div>
    <p class="text">The Company's holiday year runs from <strong>{{holidayYearStart}}</strong> to <strong>{{holidayYearEnd}}</strong>. Full-time staff get <strong>{{holidayDays}}</strong> paid holidays per year, including public and bank holidays (explained in clause 10.2 below). Part-time staff receive a pro-rated amount of holiday entitlement.</p>

    <div class="section-title">12. PUBLIC &amp; BANK HOLIDAYS</div>
    <p class="text">The Company requires you to use some of your holiday entitlement (up to 8 days per year) for public and bank holidays that fall on your normal working days. Employees who work on public and bank holidays won't be required to use additional holiday time (subject to clause 10.3).</p>

    <div class="section-title">13. TAKING HOLIDAYS</div>
    <p class="text">Holidays can only be taken at times convenient to the Company and according to the rules in the {{holidayPolicyReference}}.</p>

    <div class="section-title">14. HOLIDAY PAYOUT ON TERMINATION</div>
    <p class="text">When your employment ends, you'll be paid for any unused holidays at a rate of 1/260th of your <strong>{{fteReference}}</strong> salary for each untaken day.</p>

    <div class="section-title">15. FURTHER DETAILS</div>
    <p class="text">There are no terms applying to this Agreement which relate to the following:</p>
    <ul>
      <li class="text">The period for which the employment is intended to continue or the date when it is to end;</li>
      <li class="text">Any collective agreements which directly affect the terms and conditions of employment;</li>
      <li class="text">Work outside the United Kingdom.</li>
    </ul>

    <!-- SIGNATURES -->
    <div class="section-title">16. EXECUTION OF AGREEMENT</div>
    <p class="text" style="margin-bottom: 30px;">IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first written above.</p>

    <div class="doc-flex">
      <div class="doc-col">
        <p style="font-weight: 600; margin-bottom: 8px;"><strong>For and on behalf of the Company</strong></p>
        <div class="signature-line"></div>
        <p class="print-name">Signature</p>
      </div>
      <div class="doc-col">
        <p style="font-weight: 600; margin-bottom: 8px;"><strong>Employee</strong></p>
        <div class="signature-line"></div>
        <p class="print-name">Signature</p>
      </div>
    </div>

    <!-- extra bottom spacing so last page never feels cut -->
    <div style="height: 60px;"></div>
  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => {
    const trimmedKey = key.trim();
    return data[trimmedKey] !== undefined ? data[trimmedKey] : `[${trimmedKey}]`;
  });
};

export default employmentContractTemplate;