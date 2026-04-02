 type HelpContentType = {
  [template: string]: {
    [section: string]: {
      title: string;
      description: string;
      points: string[];
    };
  };
};

const helpContent: HelpContentType = {
  // ================= Lease Agreement =================
  "Lease/Rental Agreement": {
  "Agreement Details": {
    title: "📅 Agreement Details",
    description: "This section defines the type of tenancy and the duration of the lease agreement.",
    points: [
      "Agreement date is when the contract is signed",
      "Fixed term ends on a specific date",
      "Periodic leases renew automatically",
      "Ensure start and end dates are correct",
    ],
  },

  "Landlord Information": {
    title: "👤 Landlord Information",
    description: "Enter the landlord’s full legal name and contact details.",
    points: [
      "Use full legal name",
      "Address should be official correspondence address",
      "Phone and email are used for notices",
    ],
  },

  "Tenant Information": {
    title: "🧍 Tenant Information",
    description: "Enter the tenant details who will occupy the property.",
    points: [
      "Include full legal name",
      "Add contact details",
      "Include additional tenants if applicable",
    ],
  },

  "Property Information": {
    title: "🏠 Property Information",
    description: "Provide full details of the rental property.",
    points: [
      "Include full address",
      "Specify property type (house, flat, room)",
      "Enter number of bedrooms",
      "Specify if furnished or unfurnished",
    ],
  },

  "Rent Details": {
    title: "💵 Rent Details",
    description: "Specify rent amount, due date, late fees, and payment method.",
    points: [
      "Monthly rent should be clearly defined",
      "Rent is usually paid monthly in advance",
      "Late fee applies after due date",
      "Include bank details for payments",
    ],
  },

  "Deposit Information": {
    title: "🔒 Security Deposit",
    description: "Security deposit protects the landlord against damages or unpaid rent.",
    points: [
      "Usually equal to one month's rent",
      "Must be protected in a deposit scheme",
      "Returned after tenancy ends if no damages",
    ],
  },

  "Utilities & Bills": {
    title: "💡 Utilities & Bills",
    description: "Specify who is responsible for utility payments.",
    points: [
      "Electricity, water, gas may be landlord or tenant",
      "Council tax usually paid by tenant",
      "Clearly define responsibilities",
    ],
  },

  "Other Terms": {
    title: "📜 Additional Terms",
    description: "Define extra rules and special conditions for the property.",
    points: [
      "Specify if pets are allowed",
      "Specify smoking rules",
      "Mention parking availability",
      "Add any special conditions",
    ],
  },

  "Signatures": {
    title: "✍️ Signatures",
    description: "Final section where parties sign the agreement.",
    points: [
      "Landlord must sign",
      "Tenant must sign",
      "Witness is recommended",
    ],
  },
},

  // ================= Room Rental =================
  "Room Rental Agreement": {
    "Room Info": {
      title: "🛏️ Room Information",
      description: "Describe the room being rented.",
      points: [
        "Include property address",
        "Mention room size or features",
      ],
    },
    "Tenant Info": {
      title: "👤 Tenant Information",
      description: "Enter tenant personal details.",
      points: [
        "Full legal name required",
        "Phone number for contact",
      ],
    },
    Rent: {
      title: "💵 Rent",
      description: "Enter monthly rent and due date.",
      points: [
        "Rent is usually paid monthly",
        "Due date is day of month",
      ],
    },
    Deposit: {
      title: "🔒 Deposit",
      description: "Security deposit for room rental.",
      points: [
        "Protects against damages",
        "Refunded at end if no damage",
      ],
    },
    "Agreement Date": {
      title: "📅 Agreement Date",
      description: "Date when agreement is signed.",
      points: [
        "Usually today's date",
        "Both parties sign on this date",
      ],
    },
  },

  // ================= Automobile Bill of Sale =================
  "Automobile Bill of Sale": {
    "Vehicle Info": {
      title: "🚗 Vehicle Information",
      description: "Enter vehicle details being sold.",
      points: [
        "VIN number is very important",
        "Odometer shows mileage",
      ],
    },
    "Seller Info": {
      title: "👤 Seller Information",
      description: "Information about the vehicle seller.",
      points: [
        "Include full name",
        "Include address",
      ],
    },
    "Buyer Info": {
      title: "👤 Buyer Information",
      description: "Information about the buyer.",
      points: [
        "Full legal name required",
        "Address needed for record",
      ],
    },
    "Sale Details": {
      title: "💰 Sale Details",
      description: "Enter price, payment method and date.",
      points: [
        "Specify payment method",
        "Sale date is transfer date",
      ],
    },
  },

  // ================= Transcript Request =================
  "Transcript Request": {
    "Student Info": {
      title: "🎓 Student Information",
      description: "Enter student details for transcript.",
      points: [
        "Student ID required",
        "Use official name",
      ],
    },
    Institution: {
      title: "🏫 Institution",
      description: "Enter school or university details.",
      points: [
        "Include program name",
        "Use official institution name",
      ],
    },
    Delivery: {
      title: "📦 Delivery",
      description: "Where transcript will be sent.",
      points: [
        "Provide full address",
        "Choose delivery method",
      ],
    },
    "Request Date": {
      title: "📅 Request Date",
      description: "Date when transcript is requested.",
      points: [
        "Usually today's date",
      ],
    },
  },

  // ================= Child Travel Consent =================
  "Child Travel Consent Form": {
    "Child Info": {
      title: "🧒 Child Information",
      description: "Enter child details.",
      points: [
        "Use full legal name",
        "DOB must match passport",
      ],
    },
    "Parent Info": {
      title: "👨‍👩‍👧 Parent Information",
      description: "Parent or guardian information.",
      points: [
        "Phone number required",
      ],
    },
    "Travel Info": {
      title: "✈️ Travel Information",
      description: "Enter destination and travel dates.",
      points: [
        "Include travel start and end dates",
      ],
    },
  },

  // ================= Lease Termination =================
  "Lease Termination": {
    Parties: {
      title: "👥 Parties",
      description: "Landlord and tenant names.",
      points: [
        "Use legal names",
      ],
    },
    Property: {
      title: "🏠 Property",
      description: "Property being vacated.",
      points: [
        "Enter full address",
      ],
    },
    Termination: {
      title: "📄 Termination",
      description: "Reason and termination date.",
      points: [
        "Provide reason for record",
      ],
    },
  },

  // ================= Quitclaim Deed =================
  "Quitclaim Deed": {
    Parties: {
      title: "👥 Parties",
      description: "Grantor and grantee details.",
      points: [
        "Legal names required",
      ],
    },
    Property: {
      title: "🏠 Property",
      description: "Property being transferred.",
      points: [
        "Include county and state",
      ],
    },
    Transfer: {
      title: "📅 Transfer",
      description: "Transfer date of property.",
      points: [
        "Legal transfer date",
      ],
    },
  },

  // ================= Divorce Agreement =================
   "Divorce Agreement": {
  "Court Information": {
    title: "⚖️ Court Information",
    description: "Enter official court case details for filing.",
    points: [
      "Case number is assigned by the court",
      "Division is usually 'Family'",
    ],
  },

  "Spouse Information": {
    title: "👫 Spouse Information",
    description: "Details of both parties involved in the divorce.",
    points: [
      "Use full legal names (no abbreviations)",
      "Respondent address is required for summons",
    ],
  },

  "Residency": {
    title: "📍 Residency",
    description: "Confirms legal eligibility to file in Florida.",
    points: [
      "At least one party must live in Florida for 6 months",
      "Mention respondent residency if different",
    ],
  },

  "Marriage History": {
    title: "💍 Marriage History",
    description: "Basic details about the marriage timeline.",
    points: [
      "Include exact marriage and separation dates",
      "Place of marriage must be accurate",
    ],
  },

  "Minor Children": {
    title: "👶 Minor Children",
    description: "Information about children from the marriage.",
    points: [
      "Select only one: No Children or Has Children",
      "Provide child name and date of birth if applicable",
    ],
  },

  "Parental Responsibility & Time-Sharing": {
    title: "🧑‍⚖️ Parental Responsibility",
    description: "Defines custody and parenting arrangements.",
    points: [
      "Shared responsibility is most common",
      "Attach or plan to file a parenting plan",
    ],
  },

  "Marital Assets": {
    title: "💰 Marital Assets",
    description: "List all shared assets acquired during marriage.",
    points: [
      "Include property, bank accounts, vehicles",
      "Be transparent for fair distribution",
    ],
  },

  "Liabilities": {
    title: "📉 Liabilities",
    description: "List debts and financial obligations.",
    points: [
      "Include mortgages, credit cards, and loans",
      "Ensure accuracy to avoid disputes",
    ],
  },

  "Alimony": {
    title: "💵 Alimony",
    description: "Specify spousal support requests.",
    points: [
      "Select applicable type(s) of alimony",
      "Choose 'No Alimony' if none requested",
    ],
  },

  "Former Name Restoration": {
    title: "🔤 Former Name Restoration",
    description: "Option to restore a previous legal name.",
    points: [
      "Provide exact former name if restoring",
      "Leave unchecked if not applicable",
    ],
  },

  "Financial Information": {
    title: "📊 Financial Information",
    description: "Summary of income, expenses, assets, and debts.",
    points: [
      "Use monthly values for income and expenses",
      "Ensure numbers are realistic and complete",
    ],
  },

  "Contact Information": {
    title: "📞 Contact Information",
    description: "Petitioner’s contact and verification details.",
    points: [
      "Provide full mailing address and phone",
      "Dates must match document signing",
    ],
  },

  "Summons": {
    title: "📜 Summons",
    description: "Official notice sent to the respondent.",
    points: [
      "Summons date is usually filing date",
      "Respondent has 20 days to reply",
    ],
  },

  "Social Security Information": {
    title: "🔒 Social Security Information",
    description: "Confidential identification details.",
    points: [
      "Only last 4 digits are required",
      "Ensure accuracy for legal records",
    ],
  },

  "Service": {
    title: "📬 Service",
    description: "How the documents are delivered to respondent.",
    points: [
      "Choose mail or hand delivery",
      "Service date must be recorded",
    ],
  },

  "Parenting Plan": {
    title: "🗓️ Parenting Plan",
    description: "Defines child custody schedule and decisions.",
    points: [
      "Clearly define weekday and weekend schedules",
      "Indicate decision-making authority",
    ],
  },
},

  // ================= Business Contract =================
  "Business Contract": {
    Parties: {
      title: "🏢 Parties",
      description: "Business and client names.",
      points: [
        "Use registered business name",
      ],
    },
    "Contract Terms": {
      title: "📄 Contract Terms",
      description: "Describe services and payment.",
      points: [
        "Clearly define services",
      ],
    },
    Dates: {
      title: "📅 Dates",
      description: "Contract start and end dates.",
      points: [
        "Defines contract duration",
      ],
    },
  },
};

export default helpContent;