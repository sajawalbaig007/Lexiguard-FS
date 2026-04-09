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
  ">
    <div style="
      text-align: center;
      border-bottom: 1px solid #d6c7b0;
      padding-bottom: 20px;
      margin-bottom: 40px;
    ">
      <h1 style="
        margin: 0;
        font-size: 34px;
        letter-spacing: 3px;
        color: #3e2f1c;
      ">
        ${title.toUpperCase()}
      </h1>

      <p style="
        margin-top: 10px;
        font-size: 14px;
        color: #8a7a64;
        letter-spacing: 1px;
      ">
        Legal Agreement Document
      </p>
    </div>

    <div style="
      text-align: justify;
      font-size: 16px;
    ">
      ${body}
    </div>

    <div style="
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      gap: 40px;
    ">
      <div style="flex: 1;">
        <div style="
          border-top: 1px solid #444;
          margin-top: 40px;
          padding-top: 8px;
          font-size: 14px;
          color: #555;
        ">
          Signature
        </div>
      </div>

      <div style="flex: 1;">
        <div style="
          border-top: 1px solid #444;
          margin-top: 40px;
          padding-top: 8px;
          font-size: 14px;
          color: #555;
        ">
          Date
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
        This Lease Agreement is entered into between
        <strong>${data.landlordName || "{{landlordName}}"}</strong>,
        residing at
        <strong>${data.landlordAddress || "{{landlordAddress}}"}</strong>
        (hereinafter referred to as the “Landlord”),
        and
        <strong>${data.tenantName || "{{tenantName}}"}</strong>,
        residing at
        <strong>${data.tenantAddress || "{{tenantAddress}}"}</strong>
        (hereinafter referred to as the “Tenant”).
      </p>

      <p>
        The Landlord hereby agrees to lease the property located at
        <strong>${data.propertyAddress || "{{propertyAddress}}"}</strong>
        to the Tenant.
      </p>

      <p>
        The Tenant agrees to pay a monthly rent of
        <strong>${data.rentAmount || "{{rentAmount}}"}</strong>
        in accordance with the terms agreed upon by both parties.
      </p>

      <p>
        Both parties acknowledge that they have read, understood, and agreed
        to the terms and conditions stated in this agreement.
      </p>
    `
  );
}

function ndaTemplate(data: FormData) {
  return wrapper(
    "Non-Disclosure Agreement",
    `
      <p>
        This Non-Disclosure Agreement (“Agreement”) is entered into between
        <strong>${data.partyA || "{{partyA}}"}</strong>
        and
        <strong>${data.partyB || "{{partyB}}"}</strong>.
      </p>

      <p>
        Both parties agree to maintain strict confidentiality regarding all
        proprietary, sensitive, or confidential information shared during the
        course of their relationship.
      </p>

      <p>
        This obligation shall remain in effect for the period agreed between
        the parties and shall survive termination of this Agreement.
      </p>
    `
  );
}

function contractorTemplate(data: FormData) {
  return wrapper(
    "Contractor Agreement",
    `
      <p>
        This Contractor Agreement is entered into with
        <strong>${data.contractorName || "{{contractorName}}"}</strong>.
      </p>

      <p>
        The Contractor agrees to perform the services described under this
        agreement in a professional and timely manner.
      </p>

      <p>
        Both parties agree to fulfill their obligations in good faith and in
        accordance with the agreed project terms.
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