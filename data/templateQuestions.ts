type Field = {
  label: string;
  name: string;
  type: string;
};

type Step = {
  step: string;
  fields: Field[];
};

type TemplateQuestionsType = {
  [key: string]: Step[];
};

const templateQuestions: TemplateQuestionsType = {
  // ================= Lease Agreement =================
  "Lease/Rental Agreement": [
    {
      step: "Lease Term",
      fields: [
        { label: "Lease Type (Fixed / Month-to-Month)", name: "leaseType", type: "text" },
        { label: "Lease Start Date", name: "startDate", type: "date" },
        { label: "Lease End Date", name: "endDate", type: "date" },
      ],
    },
    {
      step: "Property Info",
      fields: [
        { label: "Property Address", name: "address", type: "text" },
        { label: "City", name: "city", type: "text" },
        { label: "State", name: "state", type: "text" },
        { label: "Zip Code", name: "zip", type: "text" },
      ],
    },
    {
      step: "Rent Details",
      fields: [
        { label: "Monthly Rent", name: "rent", type: "number" },
        { label: "Rent Due Date (Day of Month)", name: "rentDue", type: "number" },
        { label: "Late Fee Amount", name: "lateFee", type: "number" },
      ],
    },
    {
      step: "Deposit",
      fields: [
        { label: "Security Deposit", name: "deposit", type: "number" },
      ],
    },
    {
      step: "Landlord & Tenant",
      fields: [
        { label: "Landlord Name", name: "landlord", type: "text" },
        { label: "Tenant Name", name: "tenant", type: "text" },
        { label: "Tenant Phone", name: "tenantPhone", type: "text" },
      ],
    },
  ],

  // ================= Room Rental =================
  "Room Rental Agreement": [
    {
      step: "Room Info",
      fields: [
        { label: "Property Address", name: "roomAddress", type: "text" },
        { label: "Room Description", name: "roomDesc", type: "text" },
      ],
    },
    {
      step: "Tenant Info",
      fields: [
        { label: "Tenant Name", name: "tenantName", type: "text" },
        { label: "Tenant Phone", name: "tenantPhone", type: "text" },
      ],
    },
    {
      step: "Rent",
      fields: [
        { label: "Monthly Rent", name: "rent", type: "number" },
        { label: "Rent Due Date", name: "rentDue", type: "number" },
      ],
    },
    {
      step: "Deposit",
      fields: [
        { label: "Security Deposit", name: "deposit", type: "number" },
      ],
    },
    {
      step: "Agreement Date",
      fields: [
        { label: "Agreement Date", name: "agreementDate", type: "date" },
      ],
    },
  ],

  // ================= Automobile Bill of Sale =================
  "Automobile Bill of Sale": [
    {
      step: "Vehicle Info",
      fields: [
        { label: "Vehicle Make", name: "make", type: "text" },
        { label: "Vehicle Model", name: "model", type: "text" },
        { label: "Year", name: "year", type: "number" },
        { label: "VIN Number", name: "vin", type: "text" },
        { label: "Odometer Reading", name: "odometer", type: "number" },
      ],
    },
    {
      step: "Seller Info",
      fields: [
        { label: "Seller Name", name: "sellerName", type: "text" },
        { label: "Seller Address", name: "sellerAddress", type: "text" },
      ],
    },
    {
      step: "Buyer Info",
      fields: [
        { label: "Buyer Name", name: "buyerName", type: "text" },
        { label: "Buyer Address", name: "buyerAddress", type: "text" },
      ],
    },
    {
      step: "Sale Details",
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
      step: "Student Info",
      fields: [
        { label: "Student Full Name", name: "studentName", type: "text" },
        { label: "Student ID", name: "studentId", type: "text" },
      ],
    },
    {
      step: "Institution",
      fields: [
        { label: "Institution Name", name: "institution", type: "text" },
        { label: "Program Name", name: "program", type: "text" },
      ],
    },
    {
      step: "Delivery",
      fields: [
        { label: "Delivery Method", name: "deliveryMethod", type: "text" },
        { label: "Recipient Address", name: "recipientAddress", type: "text" },
      ],
    },
    {
      step: "Request Date",
      fields: [
        { label: "Request Date", name: "requestDate", type: "date" },
      ],
    },
  ],

  // ================= Child Travel Consent =================
  "Child Travel Consent Form": [
    {
      step: "Child Info",
      fields: [
        { label: "Child Name", name: "childName", type: "text" },
        { label: "Child Date of Birth", name: "childDob", type: "date" },
      ],
    },
    {
      step: "Parent Info",
      fields: [
        { label: "Parent Name", name: "parentName", type: "text" },
        { label: "Parent Phone", name: "parentPhone", type: "text" },
      ],
    },
    {
      step: "Travel Info",
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
      step: "Parties",
      fields: [
        { label: "Landlord Name", name: "landlord", type: "text" },
        { label: "Tenant Name", name: "tenant", type: "text" },
      ],
    },
    {
      step: "Property",
      fields: [
        { label: "Property Address", name: "address", type: "text" },
      ],
    },
    {
      step: "Termination",
      fields: [
        { label: "Termination Date", name: "terminationDate", type: "date" },
        { label: "Reason for Termination", name: "reason", type: "text" },
      ],
    },
  ],

  // ================= Quitclaim Deed =================
  "Quitclaim Deed": [
    {
      step: "Parties",
      fields: [
        { label: "Grantor Name", name: "grantor", type: "text" },
        { label: "Grantee Name", name: "grantee", type: "text" },
      ],
    },
    {
      step: "Property",
      fields: [
        { label: "Property Address", name: "propertyAddress", type: "text" },
        { label: "County", name: "county", type: "text" },
        { label: "State", name: "state", type: "text" },
      ],
    },
    {
      step: "Transfer",
      fields: [
        { label: "Transfer Date", name: "transferDate", type: "date" },
      ],
    },
  ],

  // ================= Divorce Agreement =================
  "Divorce Agreement": [
    {
      step: "Spouse Info",
      fields: [
        { label: "Husband Name", name: "husband", type: "text" },
        { label: "Wife Name", name: "wife", type: "text" },
      ],
    },
    {
      step: "Marriage",
      fields: [
        { label: "Marriage Date", name: "marriageDate", type: "date" },
        { label: "Separation Date", name: "separationDate", type: "date" },
      ],
    },
    {
      step: "Children",
      fields: [
        { label: "Children Names", name: "children", type: "text" },
        { label: "Custody Arrangement", name: "custody", type: "text" },
      ],
    },
  ],

  // ================= Business Contract =================
  "Business Contract": [
    {
      step: "Parties",
      fields: [
        { label: "Business Name", name: "businessName", type: "text" },
        { label: "Client Name", name: "clientName", type: "text" },
      ],
    },
    {
      step: "Contract Terms",
      fields: [
        { label: "Service Description", name: "service", type: "text" },
        { label: "Contract Amount", name: "amount", type: "number" },
      ],
    },
    {
      step: "Dates",
      fields: [
        { label: "Start Date", name: "startDate", type: "date" },
        { label: "End Date", name: "endDate", type: "date" },
      ],
    },
  ],

  // ================= Invoice Template =================
  "Invoice Template": [
    {
      step: "Business Info",
      fields: [
        { label: "Business Name", name: "businessName", type: "text" },
        { label: "Business Address", name: "businessAddress", type: "text" },
      ],
    },
    {
      step: "Client Info",
      fields: [
        { label: "Client Name", name: "clientName", type: "text" },
      ],
    },
    {
      step: "Invoice",
      fields: [
        { label: "Invoice Number", name: "invoiceNumber", type: "text" },
        { label: "Invoice Date", name: "invoiceDate", type: "date" },
        { label: "Amount", name: "amount", type: "number" },
      ],
    },
  ],

  // ================= NDA =================
  "NDA Agreement": [
    {
      step: "Parties",
      fields: [
        { label: "Disclosing Party", name: "disclosingParty", type: "text" },
        { label: "Receiving Party", name: "receivingParty", type: "text" },
      ],
    },
    {
      step: "Agreement",
      fields: [
        { label: "Purpose of NDA", name: "purpose", type: "text" },
        { label: "Start Date", name: "startDate", type: "date" },
        { label: "End Date", name: "endDate", type: "date" },
      ],
    },
  ],

  // ================= Property Management =================
  "Property Management Agreement": [
    {
      step: "Parties",
      fields: [
        { label: "Property Owner Name", name: "owner", type: "text" },
        { label: "Property Manager Name", name: "manager", type: "text" },
      ],
    },
    {
      step: "Property",
      fields: [
        { label: "Property Address", name: "propertyAddress", type: "text" },
      ],
    },
    {
      step: "Management Terms",
      fields: [
        { label: "Management Fee %", name: "fee", type: "number" },
        { label: "Start Date", name: "startDate", type: "date" },
      ],
    },
  ],

  // ================= Eviction Notice =================
  "Eviction Notice": [
    {
      step: "Parties",
      fields: [
        { label: "Landlord Name", name: "landlord", type: "text" },
        { label: "Tenant Name", name: "tenant", type: "text" },
      ],
    },
    {
      step: "Property",
      fields: [
        { label: "Property Address", name: "address", type: "text" },
      ],
    },
    {
      step: "Eviction",
      fields: [
        { label: "Reason for Eviction", name: "reason", type: "text" },
        { label: "Notice Date", name: "noticeDate", type: "date" },
        { label: "Vacate Date", name: "vacateDate", type: "date" },
      ],
    },
  ],

  // ================= Resume =================
  "Resume Template": [
    {
      step: "Personal Info",
      fields: [
        { label: "Full Name", name: "fullName", type: "text" },
        { label: "Phone", name: "phone", type: "text" },
        { label: "Email", name: "email", type: "text" },
      ],
    },
    {
      step: "Education",
      fields: [
        { label: "Education", name: "education", type: "text" },
      ],
    },
    {
      step: "Experience",
      fields: [
        { label: "Work Experience", name: "experience", type: "text" },
      ],
    },
    {
      step: "Skills",
      fields: [
        { label: "Skills", name: "skills", type: "text" },
      ],
    },
  ],

  // ================= Power of Attorney =================
  "Power of Attorney": [
    {
      step: "Parties",
      fields: [
        { label: "Principal Name", name: "principal", type: "text" },
        { label: "Agent Name", name: "agent", type: "text" },
      ],
    },
    {
      step: "Authority",
      fields: [
        { label: "Powers Granted", name: "powers", type: "text" },
      ],
    },
    {
      step: "Dates",
      fields: [
        { label: "Effective Date", name: "effectiveDate", type: "date" },
        { label: "Expiration Date", name: "expirationDate", type: "date" },
      ],
    },
  ],
};

export default templateQuestions;