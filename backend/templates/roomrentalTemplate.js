const roomRentalTemplate = (data = {}) => {
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
      ROOM RENTAL AGREEMENT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is made and entered into on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Agreement defines the terms under which a residential room is rented between the parties.
    </p>

    <!-- PARTIES -->
    <h3>Parties</h3>
    <p>
      This Room Rental Agreement ("Agreement") is entered into between
      <strong>{{landlordName}}</strong> ("Landlord") and
      <strong>{{tenantName}}</strong> ("Tenant").
      Both parties agree to be legally bound by the terms set out in this Agreement.
    </p>

    <!-- PROPERTY -->
    <h3>1. Property and Room</h3>
    <p>
      The Landlord agrees to rent a room located within the property at
      <strong>{{propertyAddress}}</strong>.
      <br/><br/>
      The rented room and access to shared facilities are described below:
      <br/><br/>
      {{roomDetails}}
    </p>

    <!-- TERM -->
    <h3>2. Term of Agreement</h3>
    <p>
      This Agreement shall remain in effect for a fixed period of
      <strong>{{duration}}</strong>, unless terminated earlier in accordance with the terms set out herein.
      <br/><br/>
      Any extension shall require mutual written agreement between both parties.
    </p>

    <!-- RENT -->
    <h3>3. Rent</h3>
    <p>
      The Tenant agrees to pay monthly rent of
      <strong>£{{rentAmount}}</strong>.
      <br/><br/>
      Payment terms:
      <br/><br/>
      {{paymentTerms}}
      <br/><br/>
      Late or missed payments may result in penalties or termination as permitted by law.
    </p>

    <!-- DEPOSIT -->
    <h3>4. Security Deposit</h3>
    <p>
      The Tenant shall pay a refundable security deposit of
      <strong>£{{depositAmount}}</strong>.
      <br/><br/>
      This deposit may be used to cover damages, unpaid rent, or violations of this Agreement beyond normal wear and tear.
    </p>

    <!-- USE -->
    <h3>5. Use of Premises</h3>
    <p>
      The rented room shall be used strictly for residential purposes only.
      The Tenant shall not engage in any unlawful, disruptive, or prohibited activities within the premises.
      <br/><br/>
      Shared areas must be used responsibly with respect toward other occupants.
    </p>

    <!-- UTILITIES -->
    <h3>6. Utilities and Expenses</h3>
    <p>
      Utilities and shared household expenses shall be divided or paid as mutually agreed between the parties unless otherwise stated in writing.
    </p>

    <!-- MAINTENANCE -->
    <h3>7. Maintenance and Cleanliness</h3>
    <p>
      The Tenant agrees to maintain cleanliness of the rented room and use shared areas responsibly.
      <br/><br/>
      The Landlord remains responsible for structural maintenance and essential services of the property.
    </p>

    <!-- HOUSE RULES -->
    <h3>8. House Rules</h3>
    <p>
      The Tenant agrees to comply with reasonable house rules, including but not limited to noise control, guest policies, and use of shared facilities.
    </p>

    <!-- TERMINATION -->
    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement by providing reasonable written notice as required by applicable law.
      <br/><br/>
      Upon termination, the Tenant shall vacate the premises and return any keys or property belonging to the Landlord.
    </p>

    <!-- GOVERNING LAW -->
    <h3>10. Governing Law</h3>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of
      <strong>{{governingLaw}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>11. Entire Agreement</h3>
    <p>
      This document represents the entire agreement between the parties and supersedes all prior discussions or agreements.
      <br/><br/>
      If any provision is found invalid, the remaining provisions shall remain fully enforceable.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:40px;">
      <div class="doc-col">
        <p><strong>Landlord Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Tenant Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default roomRentalTemplate;