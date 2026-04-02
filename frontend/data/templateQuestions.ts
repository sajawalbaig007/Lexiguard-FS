 type Field = {
  label: string;
  name: string;
  type: string;
};

type Section = {
  section: string;
  fields: Field[];
};

type TemplateQuestionsType = {
  [key: string]: Section[];
};

const templateQuestions: TemplateQuestionsType = {
  // ================= Lease Agreement =================
   "Lease/Rental Agreement": [
  {
    section: "Agreement Details",
    fields: [
      { label: "Agreement Date", name: "agreementDate", type: "date" },
      { label: "Lease Type (Fixed Term / Periodic)", name: "leaseType", type: "text" },
      { label: "Lease Start Date", name: "startDate", type: "date" },
      { label: "Lease End Date", name: "endDate", type: "date" },
    ],
  },
  {
    section: "Landlord Information",
    fields: [
      { label: "Landlord Full Name", name: "landlord", type: "text" },
      { label: "Landlord Address", name: "landlordAddress", type: "text" },
      { label: "Landlord Phone", name: "landlordPhone", type: "text" },
      { label: "Landlord Email", name: "landlordEmail", type: "text" },
    ],
  },
  {
    section: "Tenant Information",
    fields: [
      { label: "Tenant Full Name", name: "tenant", type: "text" },
      { label: "Tenant Phone", name: "tenantPhone", type: "text" },
      { label: "Tenant Email", name: "tenantEmail", type: "text" },
      { label: "Additional Tenant Name", name: "additionalTenant", type: "text" },
    ],
  },
  {
    section: "Property Information",
    fields: [
      { label: "Property Address", name: "address", type: "text" },
      { label: "City", name: "city", type: "text" },
      { label: "County/State", name: "state", type: "text" },
      { label: "Postal Code", name: "zip", type: "text" },
      { label: "Property Type (House/Flat/Room)", name: "propertyType", type: "text" },
      { label: "Number of Bedrooms", name: "bedrooms", type: "number" },
      { label: "Furnished (Yes/No)", name: "furnished", type: "text" },
    ],
  },
  {
    section: "Rent Details",
    fields: [
      { label: "Monthly Rent Amount (£)", name: "rent", type: "number" },
      { label: "Rent Due Day Each Month", name: "rentDue", type: "number" },
      { label: "Late Fee Amount (£)", name: "lateFee", type: "number" },
      { label: "Payment Method (Bank Transfer/Cash/etc.)", name: "paymentMethod", type: "text" },
      { label: "Bank Name", name: "bankName", type: "text" },
      { label: "Account Holder Name", name: "accountName", type: "text" },
      { label: "Account Number", name: "accountNumber", type: "text" },
      { label: "Sort Code", name: "sortCode", type: "text" },
    ],
  },
  {
    section: "Deposit Information",
    fields: [
      { label: "Security Deposit Amount (£)", name: "deposit", type: "number" },
      { label: "Deposit Scheme Name", name: "depositScheme", type: "text" },
    ],
  },
  {
    section: "Utilities & Bills",
    fields: [
      { label: "Electricity Paid By (Landlord/Tenant)", name: "electricity", type: "text" },
      { label: "Water Paid By", name: "water", type: "text" },
      { label: "Gas Paid By", name: "gas", type: "text" },
      { label: "Internet Paid By", name: "internet", type: "text" },
      { label: "Council Tax Paid By", name: "councilTax", type: "text" },
    ],
  },
  {
    section: "Other Terms",
    fields: [
      { label: "Pets Allowed (Yes/No)", name: "pets", type: "text" },
      { label: "Smoking Allowed (Yes/No)", name: "smoking", type: "text" },
      { label: "Parking Included (Yes/No)", name: "parking", type: "text" },
      { label: "Special Conditions", name: "specialConditions", type: "text" },
    ],
  },
  {
    section: "Signatures",
    fields: [
      { label: "Witness Name", name: "witnessName", type: "text" },
      { label: "Witness Address", name: "witnessAddress", type: "text" },
    ],
  },
],

  // ================= Room Rental =================
  "Room Rental Agreement": [
    {
      section: "Room Info",
      fields: [
        { label: "Property Address", name: "roomAddress", type: "text" },
        { label: "Room Description", name: "roomDesc", type: "text" },
      ],
    },
    {
      section: "Tenant Info",
      fields: [
        { label: "Tenant Name", name: "tenantName", type: "text" },
        { label: "Tenant Phone", name: "tenantPhone", type: "text" },
      ],
    },
    {
      section: "Rent",
      fields: [
        { label: "Monthly Rent", name: "rent", type: "number" },
        { label: "Rent Due Date", name: "rentDue", type: "number" },
      ],
    },
    {
      section: "Deposit",
      fields: [
        { label: "Security Deposit", name: "deposit", type: "number" },
      ],
    },
    {
      section: "Agreement Date",
      fields: [
        { label: "Agreement Date", name: "agreementDate", type: "date" },
      ],
    },
  ],

  // ================= Automobile Bill of Sale =================
  "Automobile Bill of Sale": [
    {
      section: "Vehicle Info",
      fields: [
        { label: "Vehicle Make", name: "make", type: "text" },
        { label: "Vehicle Model", name: "model", type: "text" },
        { label: "Year", name: "year", type: "number" },
        { label: "VIN Number", name: "vin", type: "text" },
        { label: "Odometer Reading", name: "odometer", type: "number" },
      ],
    },
    {
      section: "Seller Info",
      fields: [
        { label: "Seller Name", name: "sellerName", type: "text" },
        { label: "Seller Address", name: "sellerAddress", type: "text" },
      ],
    },
    {
      section: "Buyer Info",
      fields: [
        { label: "Buyer Name", name: "buyerName", type: "text" },
        { label: "Buyer Address", name: "buyerAddress", type: "text" },
      ],
    },
    {
      section: "Sale Details",
      fields: [
        { label: "Sale Price", name: "price", type: "number" },
        { label: "Payment Method", name: "paymentMethod", type: "text" },
        { label: "Sale Date", name: "saleDate", type: "date" },
      ],
    },
  ],

  // ================= Transcript Request =================
  "Transcript Request": [
    {
      section: "Student Info",
      fields: [
        { label: "Student Full Name", name: "studentName", type: "text" },
        { label: "Student ID", name: "studentId", type: "text" },
      ],
    },
    {
      section: "Institution",
      fields: [
        { label: "Institution Name", name: "institution", type: "text" },
        { label: "Program Name", name: "program", type: "text" },
      ],
    },
    {
      section: "Delivery",
      fields: [
        { label: "Delivery Method", name: "deliveryMethod", type: "text" },
        { label: "Recipient Address", name: "recipientAddress", type: "text" },
      ],
    },
    {
      section: "Request Date",
      fields: [
        { label: "Request Date", name: "requestDate", type: "date" },
      ],
    },
  ],

  // ================= Child Travel Consent =================
  "Child Travel Consent Form": [
    {
      section: "Child Info",
      fields: [
        { label: "Child Name", name: "childName", type: "text" },
        { label: "Child Date of Birth", name: "childDob", type: "date" },
      ],
    },
    {
      section: "Parent Info",
      fields: [
        { label: "Parent Name", name: "parentName", type: "text" },
        { label: "Parent Phone", name: "parentPhone", type: "text" },
      ],
    },
    {
      section: "Travel Info",
      fields: [
        { label: "Destination", name: "destination", type: "text" },
        { label: "Travel Start Date", name: "travelStart", type: "date" },
        { label: "Travel End Date", name: "travelEnd", type: "date" },
      ],
    },
  ],

  // ================= Lease Termination =================
  "Lease Termination": [
    {
      section: "Parties",
      fields: [
        { label: "Landlord Name", name: "landlord", type: "text" },
        { label: "Tenant Name", name: "tenant", type: "text" },
      ],
    },
    {
      section: "Property",
      fields: [
        { label: "Property Address", name: "address", type: "text" },
      ],
    },
    {
      section: "Termination",
      fields: [
        { label: "Termination Date", name: "terminationDate", type: "date" },
        { label: "Reason for Termination", name: "reason", type: "text" },
      ],
    },
  ],

  // ================= Quitclaim Deed =================
  "Quitclaim Deed": [
    {
      section: "Parties",
      fields: [
        { label: "Grantor Name", name: "grantor", type: "text" },
        { label: "Grantee Name", name: "grantee", type: "text" },
      ],
    },
    {
      section: "Property",
      fields: [
        { label: "Property Address", name: "propertyAddress", type: "text" },
        { label: "County", name: "county", type: "text" },
        { label: "State", name: "state", type: "text" },
      ],
    },
    {
      section: "Transfer",
      fields: [
        { label: "Transfer Date", name: "transferDate", type: "date" },
      ],
    },
  ],

  // ================= Divorce Agreement =================
  // ================= Divorce Agreement =================
"Divorce Agreement": [
  {
    section: "Court Information",
    fields: [
      { label: "Case Number", name: "caseNumber", type: "text" },
      { label: "Division", name: "division", type: "text" },
    ],
  },

  {
    section: "Spouse Information",
    fields: [
      { label: "Petitioner Full Name", name: "petitionerFullName", type: "text" },
      { label: "Respondent Full Name", name: "respondentFullName", type: "text" },
      { label: "Respondent Name & Address", name: "respondentNameAddress", type: "textarea" },
    ],
  },

  {
    section: "Residency",
    fields: [
      { label: "Respondent Residency Status", name: "respondentResidencyStatus", type: "text" },
    ],
  },

  {
    section: "Marriage History",
    fields: [
      { label: "Date of Marriage", name: "marriageDate", type: "date" },
      { label: "Place of Marriage", name: "marriagePlace", type: "text" },
      { label: "Date of Separation", name: "separationDate", type: "date" },
      { label: "With or Without Children", name: "withOrWithoutChildren", type: "text" },
    ],
  },

  {
    section: "Minor Children",
    fields: [
      { label: "No Children Checkbox", name: "noChildrenCheckbox", type: "checkbox" },
      { label: "Has Children Checkbox", name: "hasChildrenCheckbox", type: "checkbox" },
      { label: "Child Name", name: "childName", type: "text" },
      { label: "Child Date of Birth", name: "childDOB", type: "date" },
    ],
  },

  {
    section: "Parental Responsibility & Time-Sharing",
    fields: [
      { label: "Shared Parental Responsibility", name: "sharedParentalResponsibility", type: "checkbox" },
      { label: "Sole Parental Responsibility", name: "soleParentalResponsibility", type: "checkbox" },
      { label: "Parenting Plan Attached", name: "parentingPlanAttached", type: "checkbox" },
      { label: "Parenting Plan Will Be Filed Later", name: "parentingPlanWillBeFiled", type: "checkbox" },
    ],
  },

  {
    section: "Marital Assets",
    fields: [
      { label: "No Assets Checkbox", name: "noAssetsCheckbox", type: "checkbox" },
      { label: "Has Assets Checkbox", name: "hasAssetsCheckbox", type: "checkbox" },
      { label: "Real Property Details", name: "realPropertyDetails", type: "textarea" },
      { label: "Bank Accounts Details", name: "bankAccountsDetails", type: "textarea" },
      { label: "Vehicles Details", name: "vehiclesDetails", type: "textarea" },
      { label: "Other Assets Details", name: "otherAssetsDetails", type: "textarea" },
    ],
  },

  {
    section: "Liabilities",
    fields: [
      { label: "Mortgage Details", name: "mortgageDetails", type: "textarea" },
      { label: "Credit Card Details", name: "creditCardDetails", type: "textarea" },
      { label: "Loan Details", name: "loanDetails", type: "textarea" },
    ],
  },

  {
    section: "Alimony",
    fields: [
      { label: "Temporary Alimony", name: "temporaryAlimony", type: "checkbox" },
      { label: "Bridge-the-Gap Alimony", name: "bridgeGapAlimony", type: "checkbox" },
      { label: "Rehabilitative Alimony", name: "rehabilitativeAlimony", type: "checkbox" },
      { label: "Durational Alimony", name: "durationalAlimony", type: "checkbox" },
      { label: "Permanent Alimony", name: "permanentAlimony", type: "checkbox" },
      { label: "No Alimony", name: "noAlimony", type: "checkbox" },
    ],
  },

  {
    section: "Former Name Restoration",
    fields: [
      { label: "Restore Former Name", name: "restoreFormerNameCheckbox", type: "checkbox" },
      { label: "Former Name", name: "formerName", type: "text" },
    ],
  },

  {
  section: "Financial Information",
  fields: [
    { label: "Monthly Income", name: "monthlyIncome", type: "number" },
    { label: "Housing Expense", name: "housingExpense", type: "number" },
    { label: "Utilities Expense", name: "utilitiesExpense", type: "number" },
    { label: "Food Expense", name: "foodExpense", type: "number" },
    { label: "Cash / Bank Assets", name: "cashBank", type: "number" },
    { label: "Vehicle Assets", name: "vehicleAssets", type: "number" },
    { label: "Debts", name: "debts", type: "number" },
    { label: "Affidavit Date", name: "affidavitDate", type: "date" }, // ✅ FIXED
  ],
},

  {
    section: "Contact Information",
    fields: [
      { label: "Address", name: "address", type: "text" },
      { label: "City, State, ZIP", name: "cityStateZip", type: "text" },
      { label: "Phone", name: "phone", type: "text" },
      { label: "Dated", name: "dated", type: "date" },
      { label: "Verification Date", name: "verificationDate", type: "date" },
    ],
  },

  {
    section: "Summons",
    fields: [
      { label: "Summons Date", name: "summonsDate", type: "date" },
    ],
  },

  {
    section: "Social Security Information",
    fields: [
      { label: "Petitioner SSN Last 4 Digits", name: "petitionerSSNLast4", type: "text" },
      { label: "Respondent SSN Last 4 Digits", name: "respondentSSNLast4", type: "text" },
    ],
  },

  {
    section: "Service",
    fields: [
      { label: "Service by Mail", name: "serviceByMail", type: "checkbox" },
      { label: "Service by Hand", name: "serviceByHand", type: "checkbox" },
      { label: "Service Date", name: "serviceDate", type: "date" },
    ],
  },

  {
    section: "Parenting Plan",
    fields: [
      { label: "Weekday Schedule", name: "weekdaySchedule", type: "text" },
      { label: "Weekend Schedule", name: "weekendSchedule", type: "text" },
      { label: "Decision Shared", name: "decisionShared", type: "checkbox" },
      { label: "Decision Sole", name: "decisionSole", type: "checkbox" },
      { label: "Petitioner Signature", name: "petitionerSignature", type: "text" },
      { label: "Respondent Signature", name: "respondentSignature", type: "text" },
    ],
  },
],

  // ================= Business Contract =================
  "Business Contract": [
    {
      section: "Parties",
      fields: [
        { label: "Business Name", name: "businessName", type: "text" },
        { label: "Client Name", name: "clientName", type: "text" },
      ],
    },
    {
      section: "Contract Terms",
      fields: [
        { label: "Service Description", name: "service", type: "text" },
        { label: "Contract Amount", name: "amount", type: "number" },
      ],
    },
    {
      section: "Dates",
      fields: [
        { label: "Start Date", name: "startDate", type: "date" },
        { label: "End Date", name: "endDate", type: "date" },
      ],
    },
  ],
};

export default templateQuestions;