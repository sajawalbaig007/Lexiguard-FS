 export type TemplateType = Record<string, string>;

const documentTemplates: TemplateType = {
// ================= Lease/Rental Agreement =================
 "Lease/Rental Agreement": `
ASSURED SHORTHOLD TENANCY AGREEMENT (AST)
(Pursuant to the Housing Act 1988 (as amended) and the Housing Act 1996)

---

THIS AGREEMENT is made on {{agreementDate}}

---

PARTIES

(1) Landlord:
{{landlord}}
of {{landlordAddress}}
Phone: {{landlordPhone}}
Email: {{landlordEmail}}
(hereinafter referred to as the “Landlord”)

(2) Tenant:
{{tenant}}
Phone: {{tenantPhone}}
Email: {{tenantEmail}}
Additional Tenant: {{additionalTenant}}
(hereinafter referred to as the “Tenant”)

---

1. GRANT OF TENANCY

The Landlord hereby lets and the Tenant hereby takes the residential premises described below for a fixed term tenancy in accordance with the provisions of this Agreement.

---

2. TERM OF TENANCY

Type: {{leaseType}} Assured Shorthold Tenancy  
Commencement Date: {{startDate}}  
Expiry Date: {{endDate}}

The tenancy shall commence on the Commencement Date and shall continue for the fixed term stated above unless terminated earlier in accordance with this Agreement.

---

3. THE PROPERTY

The Landlord lets to the Tenant the property known as:

{{address}}, {{city}}, {{state}} {{zip}}

Property Type: {{propertyType}}  
Bedrooms: {{bedrooms}}  
Furnished: {{furnished}}

together with all fixtures, fittings, and appurtenances (hereinafter referred to as the “Property”).

The Property shall be used solely as a private residential dwelling.

---

4. RENT

4.1 The Tenant shall pay rent in the sum of:  
£{{rent}} per calendar month

4.2 Rent shall be payable in advance on the {{rentDue}} day of each month.

4.3 Payment Method: {{paymentMethod}}

Bank Details:  
Bank Name: {{bankName}}  
Account Name: {{accountName}}  
Account Number: {{accountNumber}}  
Sort Code: {{sortCode}}

4.4 If rent remains unpaid for more than fourteen (14) days, the Landlord reserves the right to charge a reasonable late payment fee of £{{lateFee}}, subject to applicable legislation.

---

5. TENANCY DEPOSIT

5.1 The Tenant shall pay a tenancy deposit of:  
£{{deposit}}

5.2 Deposit Protection Scheme: {{depositScheme}}

5.3 The deposit shall be held in accordance with the requirements of the Housing Act 2004 and protected within a government-authorised Tenancy Deposit Scheme.

5.4 The deposit may be applied at the end of the tenancy towards:

- Unpaid rent  
- Damage beyond fair wear and tear  
- Any other breach of this Agreement  

---

6. UTILITIES AND BILLS

Electricity: {{electricity}}  
Water: {{water}}  
Gas: {{gas}}  
Internet: {{internet}}  
Council Tax: {{councilTax}}  

---

7. TENANT’S OBLIGATIONS

The Tenant agrees:

- To pay rent in full and on time  
- To keep the Property clean and in good condition  
- Not to sublet, assign, or part with possession without prior written consent of the Landlord  
- Not to cause nuisance, annoyance, or disturbance to neighbours  
- Not to use the Property for any unlawful or immoral purposes  

---

8. LANDLORD’S OBLIGATIONS

The Landlord agrees:

- To maintain the structure and exterior of the Property  
- To ensure compliance with statutory obligations including gas, electrical, and safety regulations  
- To allow the Tenant quiet enjoyment of the Property without unlawful interruption  

---

9. REPAIRS AND MAINTENANCE

9.1 The Tenant shall promptly report any defects or required repairs.

9.2 The Tenant shall be responsible for minor day-to-day maintenance and keeping the Property in a tenant-like manner.

---

10. ACCESS AND INSPECTION

The Landlord or their authorised agent may enter the Property upon giving at least 24 hours’ written notice, except in cases of emergency.

---

11. ADDITIONAL TERMS

Pets Allowed: {{pets}}  
Smoking Allowed: {{smoking}}  
Parking: {{parking}}  

Special Conditions:
{{specialConditions}}

---

12. TERMINATION AND POSSESSION

12.1 This tenancy may be terminated in accordance with statutory provisions.

12.2 The Landlord may seek possession of the Property under the relevant provisions of the Housing Act 1988.

12.3 Upon termination, the Tenant shall:

- Vacate the Property  
- Return all keys  
- Leave the Property in a clean and tidy condition  

---

13. GOVERNING LAW

This Agreement shall be governed by and construed in accordance with the laws of England and Wales.

---

14. ENTIRE AGREEMENT

This document constitutes the entire agreement between the parties and supersedes any prior agreements or understandings.

---

SIGNATURES

The parties confirm that they have read, understood, and agree to be bound by the terms of this Agreement.

---

Landlord Signature: ___________________________  
Name: {{landlord}}  
Date: ___________________________

---

Tenant Signature: ___________________________  
Name: {{tenant}}  
Date: ___________________________

---

WITNESS (Optional but Recommended)

Witness Signature: ___________________________  
Name: {{witnessName}}  
Address: {{witnessAddress}}  
Date: ___________________________

---

DECLARATION

The parties acknowledge that this Agreement is intended to create a legally binding Assured Shorthold Tenancy and confirm that all information provided is true and accurate to the best of their knowledge.

---
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
# **IN THE CIRCUIT COURT OF THE ELEVENTH JUDICIAL CIRCUIT

IN AND FOR MIAMI-DADE COUNTY, FLORIDA**

**Case No.: {{caseNumber}}**
**Division: {{division}}**

---

# **IN RE: THE MARRIAGE OF**

**{{petitionerFullName}}**,
Petitioner,

and

**{{respondentFullName}}**,
Respondent.

---

# **PETITION FOR DISSOLUTION OF MARRIAGE

({{withOrWithoutChildren}})**

I, {{petitionerFullName}}, being sworn, certify that the following statements are true:

---

## **SECTION I. RESIDENCY**

1. Petitioner has resided in the State of Florida for at least six (6) months prior to filing this petition.
2. Respondent has resided in the State of Florida for at least six (6) months prior to filing this petition. {{respondentResidencyStatus}}

---

## **SECTION II. MARRIAGE HISTORY**

3. Date of Marriage: {{marriageDate}}
4. Place of Marriage: {{marriagePlace}}
5. Date of Separation: {{separationDate}}
6. The marriage is irretrievably broken.

---

## **SECTION III. MINOR CHILDREN (IF APPLICABLE)**

{{noChildrenCheckbox}}

{{hasChildrenCheckbox}}

* Name: {{childName}} | DOB: {{childDOB}}

7. The Court has jurisdiction over the minor child(ren) under the Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA).

---

## **SECTION IV. PARENTAL RESPONSIBILITY & TIME-SHARING**

Petitioner requests:

{{sharedParentalResponsibility}}
{{soleParentalResponsibility}}

A Parenting Plan:
{{parentingPlanAttached}}
{{parentingPlanWillBeFiled}}

Time-sharing schedule to be determined by the Court.

---

## **SECTION V. CHILD SUPPORT**

Petitioner requests:

* Child support pursuant to Florida Child Support Guidelines
* Health insurance for minor child(ren)
* Uncovered medical expenses divided equitably

---

## **SECTION VI. MARITAL ASSETS AND LIABILITIES**

{{noAssetsCheckbox}}

{{hasAssetsCheckbox}}

### Assets:

* Real Property: {{realPropertyDetails}}
* Bank Accounts: {{bankAccountsDetails}}
* Vehicles: {{vehiclesDetails}}
* Other: {{otherAssetsDetails}}

### Liabilities:

* Mortgages: {{mortgageDetails}}
* Credit Cards: {{creditCardDetails}}
* Loans: {{loanDetails}}

Petitioner requests equitable distribution.

---

## **SECTION VII. SPOUSAL SUPPORT (ALIMONY)**

Petitioner requests:

{{temporaryAlimony}}
{{bridgeGapAlimony}}
{{rehabilitativeAlimony}}
{{durationalAlimony}}
{{permanentAlimony}}
{{noAlimony}}

---

## **SECTION VIII. RESTORATION OF FORMER NAME**

{{restoreFormerNameCheckbox}} {{formerName}}

---

# **WHEREFORE, PETITIONER REQUESTS THAT THE COURT:**

1. Dissolve the marriage
2. Determine parental responsibility and time-sharing
3. Order child support
4. Equitably distribute assets and liabilities
5. Award alimony if appropriate
6. Grant any other relief deemed proper

---

# **Dated:** {{dated}}

Signature: __________________________  
Printed Name: {{petitionerFullName}}  
Address: {{address}}  
City/State/ZIP: {{cityStateZip}}  
Phone: {{phone}}  

---

# **VERIFICATION**

Under penalties of perjury, I declare that I have read this Petition and the facts stated are true.

Signature: __________________________  
Date: {{verificationDate}}

---

# ------------------------------------------------------

# **SUMMONS (PERSONAL SERVICE)**

**IN THE CIRCUIT COURT OF THE ELEVENTH JUDICIAL CIRCUIT  
IN AND FOR MIAMI-DADE COUNTY, FLORIDA**

TO: {{respondentNameAddress}}

YOU ARE HEREBY NOTIFIED that an action for dissolution of marriage has been filed against you. You are required to serve a written response within **20 days** after service.

If you fail to respond, a default may be entered against you.

DATED: {{summonsDate}}

CLERK OF COURT  
By: __________________ (Deputy Clerk)

---

# ------------------------------------------------------

# **FAMILY LAW FINANCIAL AFFIDAVIT (SHORT FORM – SUMMARY)**

I, {{petitionerFullName}}, certify:

### INCOME

* Monthly income: \${{monthlyIncome}}

### EXPENSES

* Housing: \${{housingExpense}}
* Utilities: \${{utilitiesExpense}}
* Food: \${{foodExpense}}

### ASSETS

* Cash/Bank: \${{cashBank}}
* Vehicles: \${{vehicleAssets}}

### LIABILITIES

* Debts: \${{debts}}

I swear this is true under penalty of perjury.

Signature: __________________  
Date: {{affidavitDate}}

---

# ------------------------------------------------------

# **NOTICE OF SOCIAL SECURITY NUMBER**

Petitioner: {{petitionerFullName}}  
SSN: XXX-XX-{{petitionerSSNLast4}}

Respondent: {{respondentFullName}}  
SSN: XXX-XX-{{respondentSSNLast4}}

---

# ------------------------------------------------------

# **CERTIFICATE OF SERVICE**

I certify that a copy of this document was furnished to:

{{respondentFullName}}

By:  
{{serviceByMail}}  
{{serviceByHand}}

On this date: {{serviceDate}}

Signature: __________________

---

# ------------------------------------------------------

# **PARENTING PLAN (SIMPLIFIED)** *(if applicable)*

### Daily Schedule:

* Weekdays: {{weekdaySchedule}}
* Weekends: {{weekendSchedule}}

### Holidays:

* تقسيم equally between parties

### Decision Making:

{{decisionShared}}  
{{decisionSole}}

### Communication:

Parents shall communicate respectfully regarding the child.

Signature (Petitioner): {{petitionerSignature}}  
Signature (Respondent): {{respondentSignature}}

---

# **END OF DOCUMENT PACKAGE**
`
,
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
