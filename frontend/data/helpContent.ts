 type HelpContentType = {
  [template: string]: {
    [step: string]: {
      title: string;
      description: string;
      points: string[];
    };
  };
};

const helpContent: HelpContentType = {
  // ================= Lease Agreement =================
  "Lease/Rental Agreement": {
    "Lease Term": {
      title: "💡 Lease Term",
      description: "This section defines how long the lease will last and when it begins and ends.",
      points: [
        "Fixed leases end on a specific date",
        "Month-to-month renew automatically",
        "Always ensure dates are correct",
      ],
    },
    "Property Info": {
      title: "🏠 Property Information",
      description: "Enter the full address and location of the rental property.",
      points: [
        "Include street address",
        "Add city, state, and zip",
      ],
    },
    "Rent Details": {
      title: "💵 Rent Details",
      description: "Specify rent amount, due date, and late fees.",
      points: [
        "Monthly rent should be clearly defined",
        "Late fee applies after due date",
      ],
    },
    "Deposit": {
      title: "🔒 Security Deposit",
      description: "Security deposit protects landlord against damages.",
      points: [
        "Usually equals one month's rent",
        "Refunded after lease ends",
      ],
    },
    "Landlord & Tenant": {
      title: "👥 Parties Information",
      description: "Enter landlord and tenant contact details.",
      points: [
        "Use full legal names",
        "Phone number is important",
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
    "Rent": {
      title: "💵 Rent",
      description: "Enter monthly rent and due date.",
      points: [
        "Rent is usually paid monthly",
        "Due date is day of month",
      ],
    },
    "Deposit": {
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
    "Spouse Info": {
      title: "👫 Spouse Information",
      description: "Husband and wife details.",
      points: [
        "Use legal names",
      ],
    },
    Marriage: {
      title: "💍 Marriage",
      description: "Marriage and separation dates.",
      points: [
        "Important for legal record",
      ],
    },
    Children: {
      title: "👶 Children",
      description: "Children and custody arrangement.",
      points: [
        "List all children",
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

  // ================= Invoice Template =================
  "Invoice Template": {
    "Business Info": {
      title: "🏢 Business Info",
      description: "Your business details.",
      points: [
        "Include address",
      ],
    },
    "Client Info": {
      title: "👤 Client Info",
      description: "Client details.",
      points: [
        "Client name required",
      ],
    },
    Invoice: {
      title: "🧾 Invoice",
      description: "Invoice number, date and amount.",
      points: [
        "Invoice number must be unique",
      ],
    },
  },

  // ================= NDA =================
  "NDA Agreement": {
    Parties: {
      title: "👥 Parties",
      description: "Disclosing and receiving party.",
      points: [
        "Both parties must sign",
      ],
    },
    Agreement: {
      title: "📄 Agreement",
      description: "Purpose and duration of NDA.",
      points: [
        "Defines confidentiality period",
      ],
    },
  },

  // ================= Property Management =================
  "Property Management Agreement": {
    Parties: {
      title: "👥 Parties",
      description: "Owner and manager info.",
      points: [
        "Include full names",
      ],
    },
    Property: {
      title: "🏠 Property",
      description: "Property being managed.",
      points: [
        "Enter full address",
      ],
    },
    "Management Terms": {
      title: "📄 Management Terms",
      description: "Management fee and start date.",
      points: [
        "Fee usually percentage",
      ],
    },
  },

  // ================= Eviction Notice =================
  "Eviction Notice": {
    Parties: {
      title: "👥 Parties",
      description: "Landlord and tenant.",
      points: [
        "Use legal names",
      ],
    },
    Property: {
      title: "🏠 Property",
      description: "Property address.",
      points: [
        "Full address required",
      ],
    },
    Eviction: {
      title: "⚠️ Eviction",
      description: "Reason and notice dates.",
      points: [
        "Provide valid reason",
      ],
    },
  },

  // ================= Resume =================
  "Resume Template": {
    "Personal Info": {
      title: "👤 Personal Info",
      description: "Your contact details.",
      points: [
        "Use professional email",
      ],
    },
    Education: {
      title: "🎓 Education",
      description: "Your education history.",
      points: [
        "List latest first",
      ],
    },
    Experience: {
      title: "💼 Experience",
      description: "Work experience.",
      points: [
        "Add achievements",
      ],
    },
    Skills: {
      title: "🛠 Skills",
      description: "Your skills.",
      points: [
        "List relevant skills",
      ],
    },
  },

  // ================= Power of Attorney =================
  "Power of Attorney": {
    Parties: {
      title: "👥 Parties",
      description: "Principal and agent.",
      points: [
        "Agent acts on behalf of principal",
      ],
    },
    Authority: {
      title: "📄 Authority",
      description: "Powers granted to agent.",
      points: [
        "Specify powers clearly",
      ],
    },
    Dates: {
      title: "📅 Dates",
      description: "Effective and expiration dates.",
      points: [
        "Defines validity period",
      ],
    },
  },
};

export default helpContent;