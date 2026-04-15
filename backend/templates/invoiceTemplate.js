const invoiceTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Georgia, 'Times New Roman', serif; 
      max-width: 900px; 
      margin: auto; 
      padding: 40px;
      line-height: 1.8; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container { padding: 12px !important; }
        .doc-container h1 { font-size: 22px !important; text-align: center !important; }
        .doc-container h3 { font-size: 16px !important; }
        .doc-container p { font-size: 14px !important; }
        .doc-flex { flex-direction: column !important; gap: 30px; }
        .doc-col { width: 100% !important; }
      }
    </style>

    <!-- HEADER -->
    <h1 style="text-align:center; font-size:30px; margin-bottom:10px;">
      INVOICE
    </h1>

    <p style="text-align:center; color:#555;">
      Invoice Date: <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This is a legally valid invoice issued for goods/services rendered.
    </p>

    <!-- INVOICE INFO -->
    <h3>1. Invoice Details</h3>
    <p>
      Invoice Number: <strong>{{invoiceNumber}}</strong><br/>
      Due Date: <strong>{{dueDate}}</strong><br/>
      Payment Status: <strong>{{paymentStatus}}</strong>
    </p>

    <!-- BILL TO -->
    <h3>2. Bill To</h3>
    <p>
      <strong>{{clientName}}</strong><br/>
      {{clientAddress}}<br/>
      Email: {{clientEmail}}<br/>
      Phone: {{clientPhone}}
    </p>

    <!-- FROM -->
    <h3>3. From (Service Provider)</h3>
    <p>
      <strong>{{providerName}}</strong><br/>
      {{providerAddress}}<br/>
      Email: {{providerEmail}}<br/>
      Phone: {{providerPhone}}
    </p>

    <!-- SERVICE DESCRIPTION -->
    <h3>4. Description of Services</h3>
    <p>
      The following services were provided:
      <br/><br/>
      {{serviceDescription}}
    </p>

    <!-- LINE ITEMS -->
    <h3>5. Invoice Breakdown</h3>
    <p>
      Itemized details of charges:
      <br/><br/>
      {{invoiceItems}}
    </p>

    <!-- TOTAL -->
    <h3>6. Total Amount</h3>
    <p style="font-size:18px;">
      Total Payable Amount: <strong>£{{totalAmount}}</strong>
    </p>

    <!-- TAX -->
    <h3>7. Taxes & Additional Charges</h3>
    <p>
      Applicable taxes, VAT, or service charges are included/excluded as follows:
      <br/><br/>
      {{taxDetails}}
    </p>

    <!-- PAYMENT TERMS -->
    <h3>8. Payment Terms</h3>
    <p>
      Payment must be completed according to the following terms:
      <br/><br/>
      {{paymentTerms}}
      <br/><br/>
      Late payments may incur penalties or service suspension.
    </p>

    <!-- BANK DETAILS -->
    <h3>9. Payment Instructions</h3>
    <p>
      Payment should be made via the following method:
      <br/><br/>
      {{paymentMethod}}
    </p>

    <!-- NOTES -->
    <h3>10. Additional Notes</h3>
    <p>
      {{notes}}
    </p>

    <!-- TERMS -->
    <h3>11. Terms & Conditions</h3>
    <p>
      This invoice is governed by the agreed service contract. Failure to pay on time may result in legal or financial action.
    </p>

    <!-- GOVERNING LAW -->
    <h3>12. Governing Law</h3>
    <p>
      This invoice is governed by the laws of:
      <strong>{{governingLaw}}</strong>
    </p>

    <!-- SIGNATURES -->
    <h3>Authorisation</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:50px;">
      <div class="doc-col">
        <p><strong>Issued By</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Client Approval</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>
    </div>

    <!-- FOOTER -->
    <p style="margin-top:40px; text-align:center; font-size:12px; color:#666;">
      This invoice was generated electronically and is valid without signature unless required by law.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default invoiceTemplate;