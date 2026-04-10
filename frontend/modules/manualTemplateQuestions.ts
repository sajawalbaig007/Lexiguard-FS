 type Field = {
  name: string;
  label: string;
  type: string;
};

type Step = {
  step: string;
  fields: Field[];
};

const manualTemplateQuestions: Record<string, Step[]> = {
  "Lease Agreement": [
    {
      step: "Agreement Details",
      fields: [
        {
          name: "agreementDate",
          label: "Agreement Date",
          type: "date",
        },
        {
          name: "startDate",
          label: "Tenancy Start Date",
          type: "date",
        },
        {
          name: "endDate",
          label: "Tenancy End Date",
          type: "date",
        },
      ],
    },
    {
      step: "Landlord Information",
      fields: [
        {
          name: "landlordName",
          label: "Landlord Full Name",
          type: "text",
        },
        {
          name: "landlordAddress",
          label: "Landlord Address",
          type: "text",
        },
      ],
    },
    {
      step: "Tenant Information",
      fields: [
        {
          name: "tenantName",
          label: "Tenant Full Name",
          type: "text",
        },
        {
          name: "tenantAddress",
          label: "Tenant Address",
          type: "text",
        },
      ],
    },
    {
      step: "Property & Payment Details",
      fields: [
        {
          name: "propertyAddress",
          label: "Property Address",
          type: "text",
        },
        {
          name: "rentAmount",
          label: "Monthly Rent Amount",
          type: "number",
        },
        {
          name: "rentDueDate",
          label: "Rent Due Day (e.g. 5th)",
          type: "text",
        },
        {
          name: "depositAmount",
          label: "Security Deposit Amount",
          type: "number",
        },
      ],
    },
  ],

  NDA: [
    {
      step: "Agreement Details",
      fields: [
        {
          name: "agreementDate",
          label: "Agreement Date",
          type: "date",
        },
        {
          name: "projectPurpose",
          label: "Purpose of NDA / Project",
          type: "text",
        },
        {
          name: "confidentialityPeriod",
          label: "Confidentiality Period (e.g. 3 years)",
          type: "text",
        },
      ],
    },
    {
      step: "First Party Details",
      fields: [
        {
          name: "partyA",
          label: "First Party Name",
          type: "text",
        },
        {
          name: "partyAAddress",
          label: "First Party Address",
          type: "text",
        },
      ],
    },
    {
      step: "Second Party Details",
      fields: [
        {
          name: "partyB",
          label: "Second Party Name",
          type: "text",
        },
        {
          name: "partyBAddress",
          label: "Second Party Address",
          type: "text",
        },
      ],
    },
  ],

  "Contractor Agreement": [
    {
      step: "Agreement Details",
      fields: [
        {
          name: "agreementDate",
          label: "Agreement Date",
          type: "date",
        },
        {
          name: "startDate",
          label: "Project Start Date",
          type: "date",
        },
        {
          name: "endDate",
          label: "Project End Date",
          type: "date",
        },
      ],
    },
    {
      step: "Client Details",
      fields: [
        {
          name: "clientName",
          label: "Client Full Name / Company",
          type: "text",
        },
        {
          name: "clientAddress",
          label: "Client Address",
          type: "text",
        },
      ],
    },
    {
      step: "Contractor Details",
      fields: [
        {
          name: "contractorName",
          label: "Contractor Full Name",
          type: "text",
        },
        {
          name: "contractorAddress",
          label: "Contractor Address",
          type: "text",
        },
      ],
    },
    {
      step: "Project & Payment Details",
      fields: [
        {
          name: "services",
          label: "Services to be Provided",
          type: "text",
        },
        {
          name: "paymentAmount",
          label: "Total Payment Amount",
          type: "number",
        },
        {
          name: "paymentSchedule",
          label: "Payment Schedule / Milestones",
          type: "text",
        },
        {
          name: "noticePeriod",
          label: "Notice Period",
          type: "text",
        },
      ],
    },
  ],
};

export default function getManualTemplateQuestions(
  template: string
): Step[] {
  return manualTemplateQuestions[template] || [];
}