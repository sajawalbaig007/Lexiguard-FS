const billOfSaleTemplate = (data = {}) => {
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
      max-width: 800px; 
      margin: auto; 
      padding: 40px;
      line-height: 1.75; 
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
    <h1 style="text-align:center; font-size:28px; margin-bottom:10px;">
      BILL OF SALE
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is executed on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document serves as a legally binding proof of sale and transfer of ownership between the parties.
    </p>

    <!-- PARTIES -->
    <h3>Parties</h3>
    <p>
      This Bill of Sale ("Agreement") is entered into between
      <strong>{{sellerName}}</strong>, residing at {{sellerAddress}} ("Seller"),
      and <strong>{{buyerName}}</strong>, residing at {{buyerAddress}} ("Buyer").
      Both parties agree to be legally bound by the terms of this Agreement.
    </p>

    <!-- SALE -->
    <h3>1. Sale and Transfer of Ownership</h3>
    <p>
      The Seller hereby sells, transfers, and assigns all rights, title, and interest in the following item to the Buyer:
      <br/><br/>
      <strong>{{itemDescription}}</strong>
      <br/><br/>
      Ownership shall transfer to the Buyer upon full payment and delivery/hand-over of the item.
    </p>

    <!-- CONDITION -->
    <h3>2. Condition of Item</h3>
    <p>
      The Buyer acknowledges and accepts that the item is sold in the following condition:
      <br/><br/>
      {{itemCondition}}
      <br/><br/>
      The Buyer accepts the item on an “as-is” basis unless otherwise agreed in writing.
    </p>

    <!-- PRICE -->
    <h3>3. Purchase Price</h3>
    <p>
      The total agreed purchase price is:
      <strong>£{{saleAmount}}</strong>
      <br/><br/>
      This amount represents full and final consideration for the transfer of ownership.
    </p>

    <!-- PAYMENT -->
    <h3>4. Payment Terms</h3>
    <p>
      Payment shall be completed using the following method:
      <br/><br/>
      {{paymentMethod}}
      <br/><br/>
      Ownership shall not transfer until full payment has been received and cleared.
    </p>

    <!-- WARRANTIES -->
    <h3>5. Seller Warranties</h3>
    <p>
      The Seller confirms that:
      <br/>
      • They are the lawful owner of the item  
      • The item is free from liens, claims, or encumbrances  
      • They have full legal authority to sell and transfer the item  
    </p>

    <!-- RISK -->
    <h3>6. Risk Transfer</h3>
    <p>
      Risk of loss or damage shall pass to the Buyer upon completion of payment and delivery or hand-over of the item.
    </p>

    <!-- NO WARRANTY -->
    <h3>7. No Warranty</h3>
    <p>
      Except as expressly stated, the item is sold without any warranties, express or implied, including fitness for a particular purpose or merchantability.
    </p>

    <!-- GOVERNING LAW -->
    <h3>8. Governing Law</h3>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of
      <strong>{{governingLaw}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>9. Entire Agreement</h3>
    <p>
      This document constitutes the entire agreement between the parties and supersedes all prior discussions or agreements.
      <br/><br/>
      If any provision is found invalid, the remaining provisions shall remain enforceable.
    </p>

    <!-- SPECIAL TERMS -->
    <h3>10. Special Conditions</h3>
    <p>{{specialConditions}}</p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:40px;">
      <div class="doc-col">
        <p><strong>Seller Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Buyer Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default billOfSaleTemplate;