type HelpContent = {
  title: string;
  description: string;
  points: string[];
};

const manualHelpContent: Record<
  string,
  Record<string, HelpContent>
> = {
  "Lease Agreement": {
    "Landlord Information": {
      title: "Landlord Details",
      description:
        "Enter the landlord’s legal details exactly as they appear on official documents.",
      points: [
        "Use full legal name",
        "Include complete address",
        "Avoid abbreviations if possible",
      ],
    },

    "Tenant Information": {
      title: "Tenant Details",
      description:
        "Provide the tenant’s complete and accurate information.",
      points: [
        "Use full legal name",
        "Ensure address is correct",
        "Match CNIC or ID if needed",
      ],
    },

    "Property Details": {
      title: "Property Information",
      description:
        "Add the correct property and rental details for legal clarity.",
      points: [
        "Use full property address",
        "Mention exact monthly rent",
        "Double-check values before continuing",
      ],
    },
  },

  NDA: {
    "Party Information": {
      title: "Parties Involved",
      description:
        "Mention both parties entering into the agreement.",
      points: [
        "Use legal names",
        "Avoid nicknames",
        "Check spelling carefully",
      ],
    },
  },

  "Contractor Agreement": {
    "Contractor Details": {
      title: "Contractor Information",
      description:
        "Provide the contractor’s business or legal details.",
      points: [
        "Use registered business name if applicable",
        "Add complete address",
        "Check details carefully",
      ],
    },
  },
};

export default function getManualHelpContent(
  template: string,
  step: string
): HelpContent | null {
  return manualHelpContent[template]?.[step] || null;
}