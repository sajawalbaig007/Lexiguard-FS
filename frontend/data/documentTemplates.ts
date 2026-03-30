 export type TemplateType = Record<string, string>;

const documentTemplates: TemplateType = {
// ================= Lease/Rental Agreement =================
"Lease/Rental Agreement": `
LEASE AGREEMENT

This Lease Agreement ("Agreement") is entered into on {{startDate}} by and between {{landlord}} ("Landlord") and {{tenant}} ("Tenant").

1. LEASE TERM
   The lease is a {{leaseType}} lease, commencing on {{startDate}} and ending on {{endDate}}.

2. PROPERTY DETAILS
   The property located at:
   {{address}}, {{city}}, {{state}} {{zip}}
   shall be leased to the Tenant.

3. RENT
   Tenant agrees to pay a monthly rent of $ {{rent}}, due on the {{rentDue}} day of each month.
   A late fee of $ {{lateFee}} will be charged for overdue payments.

4. SECURITY DEPOSIT
   Tenant shall pay a security deposit of $ {{deposit}} prior to occupancy.

5. SIGNATURES
   Landlord Signature: ______________________
   Tenant Signature: ______________________
   Date: ______________________
   `,

// ================= Room Rental Agreement =================
"Room Rental Agreement": `
ROOM RENTAL AGREEMENT

This Agreement is made on {{agreementDate}} between the landlord and {{tenantName}}.

Property Address: {{roomAddress}}
Room Description: {{roomDesc}}

Monthly Rent: $ {{rent}}
Due Date: {{rentDue}}
Security Deposit: $ {{deposit}}

Landlord Signature: ______________________
Tenant Signature: ______________________
`,

// ================= Automobile Bill of Sale =================
"Automobile Bill of Sale": `
AUTOMOBILE BILL OF SALE

This Bill of Sale is made on {{saleDate}} by and between {{sellerName}} and {{buyerName}}.

Vehicle Information:
Make: {{make}}
Model: {{model}}
Year: {{year}}
VIN: {{vin}}
Odometer Reading: {{odometer}}

Sale Price: $ {{price}}
Payment Method: {{paymentMethod}}

Seller Address: {{sellerAddress}}
Buyer Address: {{buyerAddress}}

Seller Signature: ______________________
Buyer Signature: ______________________
`,

// ================= Transcript Request =================
"Transcript Request": `
TRANSCRIPT REQUEST FORM

Date of Request: {{requestDate}}

Student Name: {{studentName}}
Student ID: {{studentId}}

Institution: {{institution}}
Program: {{program}}

Delivery Method: {{deliveryMethod}}
Recipient Address: {{recipientAddress}}

Signature: ______________________
`,

// ================= Child Travel Consent Form =================
"Child Travel Consent Form": `
CHILD TRAVEL CONSENT FORM

I, {{parentName}}, as parent/legal guardian of {{childName}}, born on {{childDob}}, authorize travel.

Destination: {{destination}}
Travel Dates: From {{travelStart}} to {{travelEnd}}

Parent Contact: {{parentPhone}}

Signature: ______________________
`,

// ================= Lease Termination =================
"Lease Termination": `
LEASE TERMINATION NOTICE

This notice serves to terminate the lease agreement between {{landlord}} (Landlord) and {{tenant}} (Tenant).

Property Address: {{address}}

Termination Date: {{terminationDate}}
Reason for Termination: {{reason}}

Landlord Signature: ______________________
Tenant Signature: ______________________
`,

// ================= Quitclaim Deed =================
"Quitclaim Deed": `
QUITCLAIM DEED

This Deed is made between {{grantor}} ("Grantor") and {{grantee}} ("Grantee").

Property Address:
{{propertyAddress}}, {{county}}, {{state}}

Transfer Date: {{transferDate}}

Grantor Signature: ______________________
Grantee Signature: ______________________
`,

// ================= Divorce Agreement =================
"Divorce Agreement": `
DIVORCE AGREEMENT

Husband: {{husband}}
Wife: {{wife}}

Marriage Date: {{marriageDate}}
Separation Date: {{separationDate}}

Children: {{children}}
Custody Arrangement: {{custody}}

Husband Signature: ______________________
Wife Signature: ______________________
`,

// ================= Business Contract =================
"Business Contract": `
BUSINESS CONTRACT AGREEMENT

This Contract is entered into between {{businessName}} and {{clientName}}.

Services Provided: {{service}}
Contract Amount: $ {{amount}}

Start Date: {{startDate}}
End Date: {{endDate}}

Business Signature: ______________________
Client Signature: ______________________
`,

// ================= Invoice Template =================
"Invoice Template": `
INVOICE

Business Name: {{businessName}}
Business Address: {{businessAddress}}

Client Name: {{clientName}}

Invoice Number: {{invoiceNumber}}
Invoice Date: {{invoiceDate}}
Amount Due: $ {{amount}}

Authorized Signature: ______________________
`,

// ================= NDA Agreement =================
"NDA Agreement": `
NON-DISCLOSURE AGREEMENT (NDA)

Disclosing Party: {{disclosingParty}}
Receiving Party: {{receivingParty}}

Purpose: {{purpose}}
Effective Period: {{startDate}} to {{endDate}}

Signature (Disclosing Party): ______________________
Signature (Receiving Party): ______________________
`,

// ================= Property Management Agreement =================
"Property Management Agreement": `
PROPERTY MANAGEMENT AGREEMENT

Property Owner: {{owner}}
Property Manager: {{manager}}

Property Address: {{propertyAddress}}

Management Fee: {{fee}}%
Start Date: {{startDate}}

Owner Signature: ______________________
Manager Signature: ______________________
`,

// ================= Eviction Notice =================
"Eviction Notice": `
EVICTION NOTICE

To: {{tenant}}
From: {{landlord}}

Property Address: {{address}}

Reason for Eviction: {{reason}}
Notice Date: {{noticeDate}}
Vacate Date: {{vacateDate}}

Landlord Signature: ______________________
`,

// ================= Resume Template =================
"Resume Template": `
RESUME

Name: {{fullName}}
Phone: {{phone}}
Email: {{email}}

EDUCATION
{{education}}

EXPERIENCE
{{experience}}

SKILLS
{{skills}}
`,

// ================= Power of Attorney =================
"Power of Attorney": `
POWER OF ATTORNEY

Principal: {{principal}}
Agent: {{agent}}

Powers Granted:
{{powers}}

Effective Date: {{effectiveDate}}
Expiration Date: {{expirationDate}}

Principal Signature: ______________________
Agent Signature: ______________________
`,
};

export default documentTemplates;
