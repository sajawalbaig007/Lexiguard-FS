const leaseTemplate = (data) => {
  return `
========================================
          LEASE / RENTAL AGREEMENT
========================================

This Lease Agreement ("Agreement") is made on ${data.date || "____"} between:

Landlord (Party A): ${data.partyA}  
Tenant (Party B): ${data.partyB}  

----------------------------------------
1. Background
----------------------------------------
The Landlord and the Tenant agree to lease the property at [property address] (the "Premises") for residential/commercial use. Both parties shall follow the terms of this Agreement.

${data.purpose || "Property details here."}

----------------------------------------
2. TERM OF LEASE
----------------------------------------
The Lease shall commence on ${data.date || "____"} and continue for ${data.duration || "Specify duration"} unless terminated earlier in accordance with this Agreement.

----------------------------------------
3. RENT
----------------------------------------
The Tenant agrees to pay a total rent of ${data.amount || "Specify rent"} payable in installments as mutually agreed.

----------------------------------------
4. SECURITY DEPOSIT
----------------------------------------
The Tenant shall pay a security deposit of ${data.amount || "Specify deposit"}, refundable upon termination subject to property conditions.

----------------------------------------
5. UTILITIES AND EXPENSES
----------------------------------------
Tenant is responsible for utilities unless otherwise stated: Electricity, Water, Gas, Maintenance.

----------------------------------------
6. MAINTENANCE AND REPAIRS
----------------------------------------
- Tenant maintains the property in good condition.  
- Landlord handles major structural repairs.  
- Tenant notifies Landlord of any damage.

----------------------------------------
7. USE AND OCCUPANCY
----------------------------------------
- Premises not to be used for illegal activities.  
- Subleasing requires written consent.  
- Occupancy limits must be followed.

----------------------------------------
8. INSURANCE
----------------------------------------
- Tenant should obtain renter’s insurance.  
- Landlord maintains property insurance.

----------------------------------------
9. TERMINATION
----------------------------------------
- Either party may terminate with written notice.  
- Early termination penalties, if any, must be specified.

----------------------------------------
10. SPECIAL CLAUSES
----------------------------------------
${data.specialClauses || "None"}

----------------------------------------
11. GOVERNING LAW
----------------------------------------
This Lease Agreement shall be governed by ${data.jurisdiction || "UK"} law.

----------------------------------------
12. DISCLAIMER
----------------------------------------
This Lease Agreement is AI-generated for informational purposes and should be reviewed by a qualified legal professional before execution.

----------------------------------------
13. SIGNATURES
----------------------------------------
Landlord: _______________________  
Tenant: _______________________  

Date: ${data.date || "____"}



========================================
END OF LEASE AGREEMENT
========================================
`;
};

export default leaseTemplate;