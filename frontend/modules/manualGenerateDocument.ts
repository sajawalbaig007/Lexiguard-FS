type FormData = {
  [key: string]: string;
};

const wrapper = (title: string, body: string) => `
  <div style="
    font-family: Georgia, 'Times New Roman', serif;
    max-width: 850px;
    margin: 0 auto;
    background: #fffdf9;
    color: #2f2a24;
    line-height: 1.8;
    font-size: 16px;
    padding: 40px;
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
  ">

  <style>
    /* Page break controls */
    @media print {
      body {
        margin: 0;
        padding: 0;
      }
      .doc-main {
        margin: 0;
        padding: 0.5in;
      }
      h1, h2, h3, h4 {
        page-break-after: avoid;
        break-after: avoid;
      }
      p, li, .signature-wrapper, .execution-date {
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .signature-wrapper {
        page-break-before: avoid;
        break-before: avoid;
      }
      .no-break {
        page-break-inside: avoid;
        break-inside: avoid;
      }
    }
    
    /* Screen responsive */
    @media (max-width: 600px) {
      .doc-main {
        padding: 20px !important;
      }
      .doc-title {
        font-size: 24px !important;
        letter-spacing: 1px !important;
      }
      .doc-subtitle {
        font-size: 11px !important;
      }
      .signature-wrapper {
        flex-direction: column !important;
        gap: 30px !important;
      }
      .signature-box {
        width: 100% !important;
      }
      .doc-body p {
        font-size: 14px !important;
        line-height: 1.7 !important;
        margin-bottom: 16px !important;
      }
    }
    
    /* Avoid page breaks inside paragraphs */
    p {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  </style>

  <div class="doc-main">
    <!-- HEADER - No page break after -->
    <div style="
      text-align: center;
      border-bottom: 2px solid #d6c7b0;
      padding-bottom: 25px;
      margin-bottom: 35px;
      page-break-after: avoid;
      break-after: avoid;
    ">
      <h1 class="doc-title" style="
        margin: 0;
        font-size: 32px;
        letter-spacing: 2px;
        color: #3e2f1c;
        font-weight: 600;
      ">
        ${title.toUpperCase()}
      </h1>
      <p class="doc-subtitle" style="
        margin-top: 12px;
        font-size: 13px;
        color: #8a7a64;
        letter-spacing: 0.5px;
      ">
        Formal Legal Agreement Document
      </p>
    </div>

    <!-- BODY - Each paragraph will avoid page break -->
    <div class="doc-body" style="
      text-align: justify;
      font-size: 16px;
      line-height: 1.8;
      overflow-wrap: anywhere;
      word-break: break-word;
      hyphens: auto;
    ">
      ${body}
    </div>

    <!-- EXECUTION DATE - Avoid page break before -->
    <div class="execution-date" style="
      margin-top: 60px;
      text-align: center;
      font-size: 14px;
      color: #6b5a44;
      border-top: 1px solid #e0d5c5;
      padding-top: 30px;
      page-break-before: avoid;
      break-before: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
    ">
      <p style="margin: 0;">
        Executed and agreed by the parties on
        <strong>${new Date().toLocaleDateString('en-GB')}</strong>.
      </p>
    </div>

    <!-- SIGNATURES - Will always stay together on same page -->
    <div class="signature-wrapper" style="
      margin-top: 50px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      gap: 50px;
      page-break-before: avoid;
      break-before: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
    ">
      <div class="signature-box" style="flex: 1;">
        <div style="
          border-top: 1px solid #2f2a24;
          margin-top: 50px;
          padding-top: 12px;
          font-size: 13px;
          color: #6b5a44;
          text-align: center;
        ">
          Landlord / Disclosing Party / Client Signature
        </div>
      </div>

      <div class="signature-box" style="flex: 1;">
        <div style="
          border-top: 1px solid #2f2a24;
          margin-top: 50px;
          padding-top: 12px;
          font-size: 13px;
          color: #6b5a44;
          text-align: center;
        ">
          Tenant / Receiving Party / Contractor Signature
        </div>
      </div>
    </div>
  </div>
</div>
`;

function leaseAgreementTemplate(data: FormData) {
  return wrapper(
    "Lease Agreement",
    `
      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        This Tenancy Agreement is made on 
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.landlordName || "{{landlordName}}"}</strong>,
        of <strong>${data.landlordAddress || "{{landlordAddress}}"}</strong>
        (the "Landlord"), and 
        <strong>${data.tenantName || "{{tenantName}}"}</strong>,
        of <strong>${data.tenantAddress || "{{tenantAddress}}"}</strong>
        (the "Tenant").
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Landlord agrees to let the residential premises situated at
        <strong>${data.propertyAddress || "{{propertyAddress}}"}</strong>
        (the "Property") to the Tenant for a fixed term commencing on
        <strong>${data.startDate || "{{startDate}}"}</strong>
        and ending on
        <strong>${data.endDate || "{{endDate}}"}</strong>.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Tenant shall pay rent in the sum of
        <strong>${data.rentAmount || "{{rentAmount}}"}</strong>
        per calendar month, payable in advance on or before the
        <strong>${data.rentDueDate || "{{rentDueDate}}"}</strong>
        day of each month.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        A security deposit of 
        <strong>${data.depositAmount || "{{depositAmount}}"}</strong>
        shall be paid prior to occupation. Such deposit may be used to cover
        unpaid rent, damage beyond fair wear and tear, or other lawful losses.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Tenant shall use the Property solely as a private dwelling,
        shall keep the premises in a clean and tenantable condition,
        and shall not carry out structural alterations without prior written consent.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Tenant shall not assign, sublet, or part with possession
        of the Property without the Landlord's prior written approval.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Landlord shall remain responsible for major structural repairs,
        maintenance of essential services, and ensuring that the Property
        complies with applicable housing and safety standards.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        In the event of breach, either party may exercise remedies available
        under applicable law, including notice, recovery of losses,
        or termination in accordance with legal procedure.
      </p>

      <p style="margin-bottom: 0; page-break-inside: avoid; break-inside: avoid;">
        Both parties confirm that they have read and understood this Agreement
        and agree to be legally bound by its terms.
      </p>
    `
  );
}

function ndaTemplate(data: FormData) {
  return wrapper(
    "Non-Disclosure Agreement",
    `
      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        This Non-Disclosure Agreement ("Agreement") is entered into on
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.partyA || "{{partyA}}"}</strong>,
        located at <strong>${data.partyAAddress || "{{partyAAddress}}"}</strong>,
        and <strong>${data.partyB || "{{partyB}}"}</strong>,
        located at <strong>${data.partyBAddress || "{{partyBAddress}}"}</strong>.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The purpose of this Agreement is to protect confidential information
        disclosed in connection with 
        <strong>${data.projectPurpose || "{{projectPurpose}}"}</strong>.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        Confidential Information shall include, without limitation,
        trade secrets, technical processes, software systems, pricing structures,
        customer information, business strategies, reports, and other proprietary data.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Receiving Party agrees to use the Confidential Information solely
        for the agreed purpose and shall not disclose such information to any third party
        without prior written consent from the Disclosing Party.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Receiving Party shall take all reasonable measures to protect
        the confidentiality of the information, including secure storage,
        restricted access, and protection against unauthorised use.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        This Agreement shall remain in force for a term of
        <strong>${data.confidentialityPeriod || "{{confidentialityPeriod}}"}</strong>,
        and obligations of confidentiality shall survive termination where required.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        Confidential Information shall not include information that is publicly available,
        independently developed without breach, or lawfully obtained from third parties.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        Upon written request, all confidential materials shall be returned,
        deleted, or destroyed, subject to lawful retention obligations.
      </p>

      <p style="margin-bottom: 0; page-break-inside: avoid; break-inside: avoid;">
        In the event of breach, the Disclosing Party shall be entitled
        to seek injunctive relief, damages, and any other remedies available at law.
      </p>
    `
  );
}

function contractorTemplate(data: FormData) {
  return wrapper(
    "Contractor Agreement",
    `
      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        This Contractor Agreement is entered into on
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.clientName || "{{clientName}}"}</strong>,
        of <strong>${data.clientAddress || "{{clientAddress}}"}</strong>
        (the "Client"), and
        <strong>${data.contractorName || "{{contractorName}}"}</strong>,
        of <strong>${data.contractorAddress || "{{contractorAddress}}"}</strong>
        (the "Contractor").
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Contractor agrees to provide the following services:
        <strong>${data.services || "{{services}}"}</strong>,
        in accordance with professional standards and reasonable skill and care.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The services shall commence on
        <strong>${data.startDate || "{{startDate}}"}</strong>
        and are expected to be completed by
        <strong>${data.endDate || "{{endDate}}"}</strong>,
        subject to any agreed extensions in writing.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Client shall pay the Contractor a total fee of
        <strong>${data.paymentAmount || "{{paymentAmount}}"}</strong>,
        payable in accordance with the following schedule:
        <strong>${data.paymentSchedule || "{{paymentSchedule}}"}</strong>.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Contractor shall perform the services diligently,
        keep the Client reasonably informed of progress,
        and promptly notify the Client of any issues affecting delivery.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Client shall provide all necessary instructions,
        access, approvals, and information reasonably required
        for the proper performance of the services.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        Any intellectual property created during the performance
        of the services shall be dealt with in accordance with
        the terms agreed between the parties.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        The Contractor shall maintain confidentiality in relation to
        all business, technical, and commercial information received.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        Either party may terminate this Agreement by giving
        <strong>${data.noticePeriod || "{{noticePeriod}}"}</strong>
        written notice, subject to settlement of any outstanding obligations.
      </p>

      <p style="margin-bottom: 0; page-break-inside: avoid; break-inside: avoid;">
        Both parties acknowledge that this Agreement represents
        the full understanding between them and shall be binding in law.
      </p>
    `
  );
}

function employmentContractTemplate(data: FormData) {
  return wrapper(
    "Employment Contract",
    `
      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        This Employment Contract is made on
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.employerName || "{{employerName}}"}</strong>
        of <strong>${data.employerAddress || "{{employerAddress}}"}</strong>
        (the "Employer"), and
        <strong>${data.employeeName || "{{employeeName}}"}</strong>
        of <strong>${data.employeeAddress || "{{employeeAddress}}"}</strong>
        (the "Employee").
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        The Employee is hereby employed as
        <strong>${data.jobTitle || "{{jobTitle}}"}</strong>,
        and shall perform duties including:
        <strong>${data.responsibilities || "{{responsibilities}}"}</strong>.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        The employment shall commence on
        <strong>${data.startDate || "{{startDate}}"}</strong>
        and shall continue unless terminated in accordance with this Agreement.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        The Employee shall receive a salary of
        <strong>${data.salary || "{{salary}}"}</strong>,
        payable on a
        <strong>${data.paymentCycle || "{{paymentCycle}}"}</strong>
        basis.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        The Employee agrees to perform duties diligently,
        follow company policies, and act in the best interest of the Employer.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        The Employer reserves the right to terminate employment with
        <strong>${data.noticePeriod || "{{noticePeriod}}"}</strong>
        written notice, subject to applicable labor laws.
      </p>

      <p style="margin-bottom: 20px; page-break-inside: avoid;">
        All confidential information accessed during employment
        shall remain strictly protected even after termination.
      </p>

      <p style="margin-bottom: 0; page-break-inside: avoid;">
        Both parties agree that this contract represents the full agreement
        between them and is legally binding.
      </p>
    `
  );
}

export default function manualGenerateDocument(
  template: string,
  formData: FormData
) {
  switch (template) {
    case "Lease Agreement":
      return leaseAgreementTemplate(formData);

    case "NDA":
      return ndaTemplate(formData);

    case "Contractor Agreement":
      return contractorTemplate(formData);

    // ✅ NEW ADDED
    case "Employment Contract":
      return employmentContractTemplate(formData);

    default:
      return "<p>Template not found</p>";
  }
}                                                                         