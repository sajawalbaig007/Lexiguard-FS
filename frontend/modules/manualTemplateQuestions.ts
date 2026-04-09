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
      step: "Property Details",
      fields: [
        {
          name: "propertyAddress",
          label: "Property Address",
          type: "text",
        },
        {
          name: "rentAmount",
          label: "Monthly Rent",
          type: "number",
        },
      ],
    },
  ],

  "NDA": [
    {
      step: "Party Information",
      fields: [
        {
          name: "partyA",
          label: "First Party Name",
          type: "text",
        },
        {
          name: "partyB",
          label: "Second Party Name",
          type: "text",
        },
      ],
    },
  ],

  "Contractor Agreement": [
    {
      step: "Contractor Details",
      fields: [
        {
          name: "contractorName",
          label: "Contractor Name",
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