export const contractTemplates = {

  Employment: `
<div style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.8; font-size: 18px;">

<h1 style="text-align:center; font-weight:bold; margin-bottom:40px;">CONTRACT OF EMPLOYMENT</h1>

<p><strong>Date:</strong> {{date}} &nbsp;&nbsp;&nbsp; </p>
<p><strong>Company:</strong> {{companyName}} &nbsp;&nbsp;&nbsp;</p>
<p><strong>Employee:</strong> {{employeeName}} &nbsp;&nbsp;&nbsp; </p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">1. Start Date</h2>
<p>Employment begins on <strong>{{startDate}}</strong>. Continuous service starts on this date in accordance with UK law.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">2. Job Title & Duties</h2>
<p>Your position is <strong>{{position}}</strong>. Duties will be performed professionally, acting in the best interest of the company.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">3. Salary & Benefits</h2>
<p>Your annual salary is <strong>£{{salary}}</strong> paid <strong>{{paymentFrequency}}</strong>. You may also receive benefits as agreed in writing.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">4. Working Hours</h2>
<p>Standard hours: Monday to Friday, 9:00–17:30. Flexible hours may be required depending on business needs.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">5. Holidays</h2>
<p>You are entitled to <strong>{{holidayDays}}</strong> days annual leave, plus public holidays in accordance with UK regulations.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">6. Probation</h2>
<p>Probation period of <strong>{{probationMonths}} months</strong>. Performance will be reviewed at end of period.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">7. Confidentiality</h2>
<p>You must not disclose company confidential information during or after employment.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">8. Termination</h2>
<p>Termination will follow company policy and UK statutory notice periods.</p>

<div style="margin-top:80px;">
<p>Employee Signature: ____________________________</p>
<p style="margin-top:30px;">Company Signature: ____________________________</p>
</div>
</div>
  `,

  NDA: `
<div style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.8; font-size: 16px;">

<h1 style="text-align:center; font-weight:bold; margin-bottom:40px;">NON-DISCLOSURE AGREEMENT (NDA)</h1>

<p><strong>Date:</strong> {{date}} &nbsp;&nbsp;&nbsp; </p>
<p><strong>Discloser:</strong> {{discloser}} &nbsp;&nbsp;&nbsp; </p>
<p><strong>Recipient:</strong> {{recipient}} &nbsp;&nbsp;&nbsp; </p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">1. Purpose</h2>
<p>This NDA protects confidential information shared between parties for <strong>{{purpose}}</strong>.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">2. Confidential Information</h2>
<p>All disclosed information must remain confidential and not be shared without written consent.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">3. Term</h2>
<p>This NDA remains valid for <strong>{{ndaTerm}}</strong> year(s) from the date above.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">4. Obligations</h2>
<p>The Recipient must take all reasonable steps to protect the confidential information.</p>

<div style="margin-top:80px;">
<p>Discloser Signature: ____________________________</p>
<p style="margin-top:30px;">Recipient Signature: ____________________________</p>
</div>
</div>
  `,

  Loan: `
<div style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.8; font-size: 16px;">

<h1 style="text-align:center; font-weight:bold; margin-bottom:40px;">LOAN AGREEMENT</h1>

<p><strong>Date:</strong> {{date}} &nbsp;&nbsp;&nbsp;</p>
<p><strong>Lender:</strong> {{lender}} &nbsp;&nbsp;&nbsp;</p>
<p><strong>Borrower:</strong> {{borrower}} &nbsp;&nbsp;&nbsp;</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">1. Loan Amount</h2>
<p>The principal loan amount is <strong>£{{loanAmount}}</strong> to be disbursed as agreed.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">2. Repayment</h2>
<p>Repayment begins on <strong>{{repaymentStart}}</strong> with <strong>{{repaymentFrequency}}</strong> installments.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">3. Interest Rate</h2>
<p>Interest is <strong>{{interestRate}}%</strong> per annum. Late payments may incur fees.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">4. Governing Law</h2>
<p>This agreement follows UK law and courts have jurisdiction in England & Wales.</p>

<div style="margin-top:80px;">
<p>Lender Signature: ____________________________</p>
<p style="margin-top:30px;">Borrower Signature: ____________________________</p>
</div>
</div>
  `,

  Service: `
<div style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.8; font-size: 16px;">

<h1 style="text-align:center; font-weight:bold; margin-bottom:40px;">SERVICE AGREEMENT</h1>

<p><strong>Date:</strong> {{date}} &nbsp;&nbsp;&nbsp; </p>
<p><strong>Service Provider:</strong> {{provider}} &nbsp;&nbsp;&nbsp; </p>
<p><strong>Client:</strong> {{client}} &nbsp;&nbsp;&nbsp; </p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">1. Services</h2>
<p>The Provider will deliver the following services: <strong>{{services}}</strong>.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">2. Payment Terms</h2>
<p>Client will pay <strong>£{{payment}}</strong> as per agreed schedule.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">3. Confidentiality</h2>
<p>All client information shared will be kept confidential.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">4. Termination</h2>
<p>Agreement may be terminated by either party with written notice as per UK law.</p>

<div style="margin-top:80px;">
<p>Service Provider Signature: ____________________________</p>
<p style="margin-top:30px;">Client Signature: ____________________________</p>
</div>
</div>
  `,

  Separation: `
<div style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.8; font-size: 16px;">

<h1 style="text-align:center; font-weight:bold; margin-bottom:40px;">SEPARATION AGREEMENT</h1>

<p><strong>Date:</strong> {{date}} &nbsp;&nbsp;&nbsp; </p>
<p><strong>Employee:</strong> {{employee}} &nbsp;&nbsp;&nbsp;</p>
<p><strong>Employer:</strong> {{employer}} &nbsp;&nbsp;&nbsp;</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">1. Separation Date</h2>
<p>Employment ends on <strong>{{separationDate}}</strong>. All UK statutory requirements will be followed.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">2. Final Payment</h2>
<p>Employee will receive <strong>£{{finalPayment}}</strong> including all accrued benefits.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">3. Confidentiality</h2>
<p>Employee agrees to maintain confidentiality post-separation.</p>

<h2 style="font-weight:bold; margin-top:40px; margin-bottom:10px;">4. Non-Compete</h2>
<p>Employee shall not compete with Employer for <strong>{{nonCompeteMonths}} months</strong> post-separation.</p>

<div style="margin-top:80px;">
<p>Employee Signature: ____________________________</p>
<p style="margin-top:30px;">Employer Signature: ____________________________</p>
</div>
</div>
  `,

};