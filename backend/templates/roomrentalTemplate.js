const roomRentalTemplate = (data = {}) => {
  const template = `
  <div 
    class="doc-container"
    style="
      font-family: Georgia, 'Times New Roman', serif; 
      max-width: 800px; 
      margin: auto; 
      padding: 40px; 
      line-height: 1.7; 
      color: #222;
      box-sizing: border-box;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container {
          padding: 8px !important;
        }
        .doc-container h1 {
          font-size: 22px !important;
          text-align: center !important;
        }
        .doc-container h3 {
          font-size: 16px !important;
        }
        .doc-container p {
          font-size: 14px !important;
        }
        .doc-flex {
          flex-direction: column !important;
          gap: 30px;
        }
        .doc-col {
          width: 100% !important;
        }
      }
    </style>

    <h1 style="text-align: center; font-size: 28px;">
      ROOM RENTAL AGREEMENT
    </h1>

    <p style="text-align: center;">Date: {{date}}</p>

    <h3>Parties</h3>
    <p>
      This Room Rental Agreement ("Agreement") is made between 
      <strong>{{landlordName}}</strong> (the "Landlord") and 
      <strong>{{tenantName}}</strong> (the "Tenant").
    </p>

    <h3>1. Property and Room</h3>
    <p>
      The Landlord agrees to rent to the Tenant a room within the property located at 
      <strong>{{propertyAddress}}</strong>.
      <br /><br />
      The specific room and shared areas are described as follows:
      <br /><br />
      {{roomDetails}}
    </p>

    <h3>2. Term</h3>
    <p>
      This Agreement shall commence on <strong>{{date}}</strong> and continue for 
      <strong>{{duration}}</strong>, unless terminated earlier in accordance with this Agreement.
    </p>

    <h3>3. Rent</h3>
    <p>
      The Tenant agrees to pay rent in the amount of <strong>£ {{rentAmount}}</strong>.
      <br /><br />
      Payment shall be made as follows:
      <br /><br />
      {{paymentTerms}}
    </p>

    <h3>4. Deposit</h3>
    <p>
      The Tenant shall pay a security deposit of <strong>£ {{depositAmount}}</strong>.
      <br /><br />
      The deposit may be used to cover damages, unpaid rent, or breaches of this Agreement, subject to fair wear and tear.
    </p>

    <h3>5. Use of Premises</h3>
    <p>
      The Tenant shall use the room for residential purposes only and shall not engage in any unlawful activity.
      <br /><br />
      Shared areas shall be used responsibly and with respect for other occupants.
    </p>

    <h3>6. Utilities</h3>
    <p>
      Utilities and household expenses shall be handled as agreed between the parties, unless otherwise specified in writing.
    </p>

    <h3>7. Maintenance and Cleanliness</h3>
    <p>
      The Tenant agrees to keep the room clean and in good condition.
      <br /><br />
      The Landlord shall be responsible for maintaining the structure and essential services of the property.
    </p>

    <h3>8. House Rules</h3>
    <p>
      The Tenant agrees to comply with any reasonable house rules set by the Landlord, including rules regarding noise, guests, and shared facilities.
    </p>

    <h3>9. Termination</h3>
    <p>
      Either party may terminate this Agreement by giving reasonable written notice.
      <br /><br />
      Upon termination, the Tenant shall vacate the room and return any keys provided.
    </p>

    <h3>10. Governing Law</h3>
    <p>
      This Agreement shall be governed by and construed in accordance with the laws of {{governingLaw}}.
      <br /><br />
      The parties submit to the jurisdiction of the courts of England and Wales.
    </p>

    <h3>Signatures</h3>

    <div class="doc-flex" style="display: flex; justify-content: space-between; margin-top: 40px;">
      <div class="doc-col">
        <p><strong>Landlord</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{landlordName}}</p>
      </div>

      <div class="doc-col">
        <p><strong>Tenant</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;"></div>
        <p>{{tenantName}}</p>
      </div>
    </div>

    <p style="margin-top: 40px;">Date: {{date}}</p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default roomRentalTemplate;