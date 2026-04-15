export type HelpContent = {
  title: string;
  description: string;
  points: string[];
};

type TemplateHelpMap = Record<string, Record<string, HelpContent>>;

const manualHelpContent: TemplateHelpMap = {
  "Lease Agreement": {
    "Agreement Details": {
      title: "Tenancy Dates & Agreement Setup",
      description:
        "Provide the official agreement and tenancy dates carefully. These dates define when the contract starts and ends.",
      points: [
        "Use the actual agreement signing date",
        "Set correct tenancy start and end dates",
        "Ensure dates match both parties' expectations",
      ],
    },
    "Landlord Information": {
      title: "Landlord Details",
      description:
        "Enter the landlord's legal identity and address exactly as they appear on official records.",
      points: [
        "Use full legal name",
        "Add complete residential or business address",
        "Avoid abbreviations where possible",
      ],
    },
    "Tenant Information": {
      title: "Tenant Details",
      description:
        "Provide accurate tenant information for identification and legal clarity.",
      points: [
        "Use full legal name",
        "Include current residential address",
        "Double-check spelling and address format",
      ],
    },
    "Property & Payment Details": {
      title: "Property and Rent Information",
      description:
        "Add complete tenancy property details and agreed payment terms to avoid future disputes.",
      points: [
        "Use full property address",
        "Enter exact monthly rent amount",
        "Mention deposit and due date clearly",
      ],
    },
  },

  NDA: {
    "Agreement Details": {
      title: "Agreement Purpose & Duration",
      description:
        "Clearly define why confidential information is being shared and how long the confidentiality obligations will apply.",
      points: [
        "State the project or business purpose clearly",
        "Mention realistic confidentiality period",
        "Use precise agreement date",
      ],
    },
    "First Party Details": {
      title: "First Party Information",
      description:
        "Enter the first party's legal name and address exactly as recorded officially.",
      points: [
        "Use full registered name",
        "Add full correspondence address",
        "Avoid short forms or nicknames",
      ],
    },
    "Second Party Details": {
      title: "Second Party Information",
      description:
        "Provide the second party's complete legal identity details.",
      points: [
        "Use accurate legal name",
        "Enter full business or residential address",
        "Check spelling before continuing",
      ],
    },
  },

  "Contractor Agreement": {
    "Agreement Details": {
      title: "Project Timeline Details",
      description:
        "Set clear agreement and project dates to establish when the services begin and when completion is expected.",
      points: [
        "Use the actual signing date",
        "Set realistic start and completion dates",
        "Avoid conflicting timelines",
      ],
    },
    "Client Details": {
      title: "Client Information",
      description:
        "Enter the client's legal or business details accurately.",
      points: [
        "Use full name or registered company name",
        "Add complete official address",
        "Ensure details are up to date",
      ],
    },
    "Contractor Details": {
      title: "Contractor Information",
      description:
        "Provide the contractor's full legal or business identity.",
      points: [
        "Use legal name or registered business name",
        "Include complete address",
        "Verify all contact details",
      ],
    },
    "Project & Payment Details": {
      title: "Scope of Work & Payment Terms",
      description:
        "Clearly define services, fee structure, payment milestones, and notice terms.",
      points: [
        "Describe services in simple but clear terms",
        "Mention total agreed payment",
        "Set notice period and payment schedule properly",
      ],
    },
  },

  // ✅ UPDATED: Employment Contract with exact step names from template questions
  "Employment Contract": {
    "Agreement Details": {
      title: "Employment Start & Agreement Date",
      description:
        "Define when the employment agreement is officially signed and when employment begins.",
      points: [
        "Use correct agreement signing date",
        "Set accurate employment start date",
        "Ensure dates are consistent with contract terms",
      ],
    },

    "Employer Information": {
      title: "Employer Details",
      description:
        "Enter the employer's legal name and address as officially registered.",
      points: [
        "Use full company or employer name",
        "Add complete business address",
        "Avoid abbreviations",
      ],
    },

    "Employee Information": {
      title: "Employee Details",
      description:
        "Provide full employee identification details for legal clarity.",
      points: [
        "Use full legal name",
        "Add complete residential address",
        "Double-check spelling accuracy",
      ],
    },

    "Job Details": {
      title: "Job Role & Responsibilities",
      description:
        "Define job title and core responsibilities clearly to avoid ambiguity.",
      points: [
        "Specify job title exactly as it will appear on records",
        "Describe responsibilities in simple, actionable terms",
        "Include reporting structure if relevant",
      ],
    },

    "Salary & Terms": {
      title: "Compensation & Employment Terms",
      description:
        "Define salary, payment cycle, and notice period clearly to prevent disputes.",
      points: [
        "Mention exact salary amount and currency",
        "Specify payment cycle (monthly, weekly, bi-weekly)",
        "Set clear notice period for termination",
        "Include any probation period if applicable",
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