const quitclaimDeedTemplate = (data = {}) => {
  const today = data.executionDate || new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div 
    style="
      font-family: 'Cambria', 'Times New Roman', Georgia, serif;
      max-width: 850px;
      margin: auto;
      padding: 65px;
      line-height: 2;
      color: #111;
      background: #fff;
      font-size: 16px;
    "
  >

    <!-- HEADER -->
    <h1 style="text-align:center; font-size:28px; margin-bottom:25px; font-weight:700; letter-spacing:1px;">
      QUITCLAIM DEED
    </h1>

    <p style="text-align:center; margin-bottom:40px;">
      This Deed is made and executed on this <strong>${today}</strong>.
    </p>

    <!-- RECITAL -->
    <p>
      THIS DEED WITNESSES as follows, that the Grantor, being desirous of transferring whatever right, title, or interest 
      may be vested in the property described herein, has agreed to convey the same to the Grantee upon the terms and 
      conditions set forth in this instrument.
    </p>

    <!-- PARTIES -->
    <h3 style="margin-top:35px; font-weight:700;">1. PARTIES</h3>
    <p>
      This Quitclaim Deed is made between <strong>{{grantorName}}</strong>, residing at <strong>{{grantorAddress}}</strong>, 
      (hereinafter referred to as the “Grantor”), and <strong>{{granteeName}}</strong>, residing at 
      <strong>{{granteeAddress}}</strong>, (hereinafter referred to as the “Grantee”).
    </p>

    <p>
      The expressions “Grantor” and “Grantee” shall, where the context admits, include their respective heirs, successors, 
      assigns, legal representatives, and any persons deriving title under them.
    </p>

    <!-- PROPERTY -->
    <h3 style="margin-top:35px; font-weight:700;">2. PROPERTY DESCRIPTION</h3>
    <p>
      The property forming the subject matter of this Deed is a <strong>{{propertyType}}</strong> situated at 
      <strong>{{propertyAddress}}</strong>, bearing Title Number <strong>{{titleNumber}}</strong>, together with all 
      buildings, fixtures, improvements, rights, easements, liberties, privileges, and appurtenances whatsoever attached thereto.
    </p>

    <p>
      The legal description of the said property is as follows:
      <br/><br/>
      {{legalDescription}}
    </p>

    <!-- TRANSFER -->
    <h3 style="margin-top:35px; font-weight:700;">3. CONVEYANCE AND QUITCLAIM</h3>
    <p>
      The Grantor, for and in consideration of the sum of <strong>{{consideration}}</strong>, the receipt and sufficiency 
      of which is hereby acknowledged, does hereby remise, release, and forever quitclaim unto the Grantee all estate, 
      right, title, interest, use, trust, property, claim, and demand whatsoever, both at law and in equity, which the 
      Grantor now has or may at any time hereafter have in the said property.
    </p>

    <p>
      It is expressly declared that this conveyance is made without any covenant or warranty of title, whether express 
      or implied, and shall operate solely to pass such interest as the Grantor may possess at the time of execution 
      of this Deed.
    </p>

    <!-- ENCUMBRANCES -->
    <h3 style="margin-top:35px; font-weight:700;">4. EXISTING ENCUMBRANCES</h3>
    <p>
      The property is conveyed subject to the following encumbrances, restrictions, covenants, and matters affecting title:
      <br/><br/>
      {{encumbrances}}
    </p>

    <!-- NO WARRANTY -->
    <h3 style="margin-top:35px; font-weight:700;">5. ABSENCE OF WARRANTIES</h3>
    <p>
      The Grantor makes no representation or warranty whatsoever as to the condition of the property, the state of title, 
      or the existence or absence of any encumbrances. The Grantee expressly agrees to accept the property in its present 
      condition and at the Grantee’s sole risk.
    </p>

    <!-- POSSESSION -->
    <h3 style="margin-top:35px; font-weight:700;">6. POSSESSION</h3>
    <p>
      Vacant possession of the property shall be delivered to the Grantee upon execution of this Deed unless otherwise 
      agreed in writing. Any existing occupancies or tenancies shall remain subject to their respective terms.
    </p>

    <!-- TAXES -->
    <h3 style="margin-top:35px; font-weight:700;">7. TAXES AND CHARGES</h3>
    <p>
      All taxes, duties, stamp duties, registration fees, and other outgoings relating to the execution and registration 
      of this Deed shall be borne and discharged by:
      <br/><br/>
      {{taxResponsibility}}
    </p>

    <!-- LAW -->
    <h3 style="margin-top:35px; font-weight:700;">8. GOVERNING LAW</h3>
    <p>
      This Deed shall be governed by and construed in accordance with the laws of <strong>{{governingLaw}}</strong>, 
      and the Parties hereby submit to the exclusive jurisdiction of the courts thereof.
    </p>

    <!-- ENTIRE -->
    <h3 style="margin-top:35px; font-weight:700;">9. ENTIRE AGREEMENT</h3>
    <p>
      This Deed constitutes the entire agreement between the Parties relating to the subject matter herein and supersedes 
      all prior agreements, negotiations, representations, or understandings, whether written or oral.
    </p>

    <!-- EXECUTION -->
    <h3 style="margin-top:50px; font-weight:700;">10. EXECUTION</h3>
    <p>
      IN WITNESS WHEREOF, the Parties hereto have executed this Quitclaim Deed on the date first above written.
    </p>

    <div style="margin-top:60px;">
      <p><strong>Signed by the Grantor:</strong></p>
      <div style="border-bottom:1px solid #000;height:50px;margin-top:20px;"></div>
    </div>

    <div style="margin-top:50px;">
      <p><strong>Signed by the Grantee:</strong></p>
      <div style="border-bottom:1px solid #000;height:50px;margin-top:20px;"></div>
    </div>

    <!-- WITNESS -->
    <div style="margin-top:60px;">
      <p><strong>Witness Signature:</strong></p>
      <div style="border-bottom:1px solid #000;height:50px;margin-top:20px;"></div>

      <p style="margin-top:20px;">
        Name: <strong>{{witnessName}}</strong><br/>
        Address: <strong>{{witnessAddress}}</strong>
      </p>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default quitclaimDeedTemplate;