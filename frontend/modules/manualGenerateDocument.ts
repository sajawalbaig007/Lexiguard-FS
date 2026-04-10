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
    line-height: 2;
    font-size: 16px;
    padding: 40px;
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
  ">

  <style>
    @media (max-width: 600px) {
      .doc-container {
        padding: 0px !important;
        font-size: 14px !important;
        line-height: 1.7 !important;
      }

      .doc-title {
        font-size: 26px !important;
        letter-spacing: 2px !important;
      }

      .doc-subtitle {
        font-size: 12px !important;
      }

      .signature-wrapper {
        flex-direction: column !important;
        gap: 30px !important;
      }

      .signature-box {
        width: 100% !important;
      }
    }
  </style>

    <div class="doc-container" style="
      text-align: center;
      border-bottom: 1px solid #d6c7b0;
      padding-bottom: 20px;
      margin-bottom: 40px;
    ">
      <h1 class="doc-title" style="
        margin: 0;
        font-size: 34px;
        letter-spacing: 3px;
        color: #3e2f1c;
      ">
        ${title.toUpperCase()}
      </h1>

      <p class="doc-subtitle" style="
        margin-top: 10px;
        font-size: 14px;
        color: #8a7a64;
        letter-spacing: 1px;
      ">
        Formal Legal Agreement Document
      </p>
    </div>

    <div style="
      text-align: justify;
      font-size: 16px;
      overflow-wrap: anywhere;
      word-break: break-word;
      hyphens: auto;
    ">
      ${body}
    </div>

    <div style="
      margin-top: 80px;
      text-align: center;
      font-size: 15px;
      color: #555;
    ">
      <p>
        Executed and agreed by the parties on
        <strong>${new Date().toLocaleDateString('en-GB')}</strong>.
      </p>
    </div>

    <div class="signature-wrapper" style="
      margin-top: 70px;
      display: flex;
      justify-content: space-between;
      gap: 60px;
    ">
      <div class="signature-box" style="flex: 1; text-align: center;">
        <div style="
          border-top: 1px solid #444;
          margin-top: 50px;
          padding-top: 8px;
          font-size: 14px;
          color: #555;
        ">
          Landlord / Disclosing Party / Client Signature
        </div>
      </div>

      <div class="signature-box" style="flex: 1; text-align: center;">
        <div style="
          border-top: 1px solid #444;
          margin-top: 50px;
          padding-top: 8px;
          font-size: 14px;
          color: #555;
        ">
          Tenant / Receiving Party / Contractor Signature
        </div>
      </div>
    </div>
  </div>
`;

function leaseAgreementTemplate(data: FormData) {
  return wrapper(
    "Lease Agreement",
    `
      <p>
        This Tenancy Agreement is made on 
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.landlordName || "{{landlordName}}"}</strong>,
        of <strong>${data.landlordAddress || "{{landlordAddress}}"}</strong>
        (the “Landlord”), and 
        <strong>${data.tenantName || "{{tenantName}}"}</strong>,
        of <strong>${data.tenantAddress || "{{tenantAddress}}"}</strong>
        (the “Tenant”).
      </p>

      <p>
        The Landlord agrees to let the residential premises situated at
        <strong>${data.propertyAddress || "{{propertyAddress}}"}</strong>
        (the “Property”) to the Tenant for a fixed term commencing on
        <strong>${data.startDate || "{{startDate}}"}</strong>
        and ending on
        <strong>${data.endDate || "{{endDate}}"}</strong>.
      </p>

      <p>
        The Tenant shall pay rent in the sum of
        <strong>${data.rentAmount || "{{rentAmount}}"}</strong>
        per calendar month, payable in advance on or before the
        <strong>${data.rentDueDate || "{{rentDueDate}}"}</strong>
        day of each month.
      </p>

      <p>
        A security deposit of 
        <strong>${data.depositAmount || "{{depositAmount}}"}</strong>
        shall be paid prior to occupation. Such deposit may be used to cover
        unpaid rent, damage beyond fair wear and tear, or other lawful losses.
      </p>

      <p>
        The Tenant shall use the Property solely as a private dwelling,
        shall keep the premises in a clean and tenantable condition,
        and shall not carry out structural alterations without prior written consent.
      </p>

      <p>
        The Tenant shall not assign, sublet, or part with possession
        of the Property without the Landlord’s prior written approval.
      </p>

      <p>
        The Landlord shall remain responsible for major structural repairs,
        maintenance of essential services, and ensuring that the Property
        complies with applicable housing and safety standards.
      </p>

      <p>
        In the event of breach, either party may exercise remedies available
        under applicable law, including notice, recovery of losses,
        or termination in accordance with legal procedure.
      </p>

      <p>
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
      <p>
        This Non-Disclosure Agreement (“Agreement”) is entered into on
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.partyA || "{{partyA}}"}</strong>,
        located at <strong>${data.partyAAddress || "{{partyAAddress}}"}</strong>,
        and <strong>${data.partyB || "{{partyB}}"}</strong>,
        located at <strong>${data.partyBAddress || "{{partyBAddress}}"}</strong>.
      </p>

      <p>
        The purpose of this Agreement is to protect confidential information
        disclosed in connection with 
        <strong>${data.projectPurpose || "{{projectPurpose}}"}</strong>.
      </p>

      <p>
        Confidential Information shall include, without limitation,
        trade secrets, technical processes, software systems, pricing structures,
        customer information, business strategies, reports, and other proprietary data.
      </p>

      <p>
        The Receiving Party agrees to use the Confidential Information solely
        for the agreed purpose and shall not disclose such information to any third party
        without prior written consent from the Disclosing Party.
      </p>

      <p>
        The Receiving Party shall take all reasonable measures to protect
        the confidentiality of the information, including secure storage,
        restricted access, and protection against unauthorised use.
      </p>

      <p>
        This Agreement shall remain in force for a term of
        <strong>${data.confidentialityPeriod || "{{confidentialityPeriod}}"}</strong>,
        and obligations of confidentiality shall survive termination where required.
      </p>

      <p>
        Confidential Information shall not include information that is publicly available,
        independently developed without breach, or lawfully obtained from third parties.
      </p>

      <p>
        Upon written request, all confidential materials shall be returned,
        deleted, or destroyed, subject to lawful retention obligations.
      </p>

      <p>
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
      <p>
        This Contractor Agreement is entered into on
        <strong>${data.agreementDate || "{{agreementDate}}"}</strong>
        between <strong>${data.clientName || "{{clientName}}"}</strong>,
        of <strong>${data.clientAddress || "{{clientAddress}}"}</strong>
        (the “Client”), and
        <strong>${data.contractorName || "{{contractorName}}"}</strong>,
        of <strong>${data.contractorAddress || "{{contractorAddress}}"}</strong>
        (the “Contractor”).
      </p>

      <p>
        The Contractor agrees to provide the following services:
        <strong>${data.services || "{{services}}"}</strong>,
        in accordance with professional standards and reasonable skill and care.
      </p>

      <p>
        The services shall commence on
        <strong>${data.startDate || "{{startDate}}"}</strong>
        and are expected to be completed by
        <strong>${data.endDate || "{{endDate}}"}</strong>,
        subject to any agreed extensions in writing.
      </p>

      <p>
        The Client shall pay the Contractor a total fee of
        <strong>${data.paymentAmount || "{{paymentAmount}}"}</strong>,
        payable in accordance with the following schedule:
        <strong>${data.paymentSchedule || "{{paymentSchedule}}"}</strong>.
      </p>

      <p>
        The Contractor shall perform the services diligently,
        keep the Client reasonably informed of progress,
        and promptly notify the Client of any issues affecting delivery.
      </p>

      <p>
        The Client shall provide all necessary instructions,
        access, approvals, and information reasonably required
        for the proper performance of the services.
      </p>

      <p>
        Any intellectual property created during the performance
        of the services shall be dealt with in accordance with
        the terms agreed between the parties.
      </p>

      <p>
        The Contractor shall maintain confidentiality in relation to
        all business, technical, and commercial information received.
      </p>

      <p>
        Either party may terminate this Agreement by giving
        <strong>${data.noticePeriod || "{{noticePeriod}}"}</strong>
        written notice, subject to settlement of any outstanding obligations.
      </p>

      <p>
        Both parties acknowledge that this Agreement represents
        the full understanding between them and shall be binding in law.
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

    default:
      return "<p>Template not found</p>";
  }
}