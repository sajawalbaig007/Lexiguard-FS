const quitclaimDeedTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // ================= LOGO SECTION (NEW - SAFE ADDITION) =================
  const logos = Array.isArray(data.logos) ? data.logos : [];

  const logoHtml =
    logos.length > 0
      ? `
    <div style="
      display:flex;
      justify-content:center;
      gap:20px;
      margin-bottom:40px;
      flex-wrap:wrap;
    ">
      ${logos
        .map(
          (logo) => `
        <img 
          src="${logo}" 
          style="
            max-height:80px;
            max-width:160px;
            object-fit:contain;
          "
        />
      `
        )
        .join("")}
    </div>
  `
      : "";

  const template = `
  <div 
    style="
      font-family: 'Cambria', 'Times New Roman', Georgia, serif;
      max-width: 850px;
      margin: auto;
      padding: 60px;
      line-height: 1.95;
      color: #111;
      background: #fff;
      font-size: 16px;
    "
  >

    <!-- LOGOS (NEW INSERTION - NO OTHER CHANGES) -->
    ${logoHtml}

    <!-- HEADER -->
    <h1 style="
      text-align:center;
      font-size:28px;
      margin-bottom:30px;
      font-weight:700;
      letter-spacing:1px;
    ">
      QUITCLAIM DEED
    </h1>

    <p style="text-align:center; margin-bottom:40px;">
      This Quitclaim Deed is made and executed on this <strong>${today}</strong>.
    </p>

    <!-- PARTIES -->
    <h3 style="margin-top:30px; font-weight:700;">1. PARTIES</h3>
    <p>
      This Quitclaim Deed is entered into by and between <strong>{{grantorName}}</strong>, hereinafter referred to as the “Grantor”, 
      and <strong>{{granteeName}}</strong>, hereinafter referred to as the “Grantee”. The Grantor and Grantee may hereinafter collectively 
      be referred to as the “Parties” and individually as a “Party”, where the context so requires.
    </p>

    <!-- PROPERTY -->
    <h3 style="margin-top:35px; font-weight:700;">2. PROPERTY DESCRIPTION</h3>
    <p>
      The immovable property which is the subject matter of this Deed is situated at <strong>{{propertyAddress}}</strong>, together with 
      all rights, easements, privileges, and appurtenances whatsoever to the said property belonging or in any way appertaining thereto.
    </p>

    <p>
      The legal description of the aforesaid property, insofar as the same is known or has been provided, is set out as follows:
      <br/><br/>
      {{legalDescription}}
    </p>

    <!-- TRANSFER -->
    <h3 style="margin-top:35px; font-weight:700;">3. CONVEYANCE AND TRANSFER</h3>
    <p>
      The Grantor, for and in consideration of the sum stated herein and for other good and valuable consideration, the receipt and sufficiency 
      of which is hereby acknowledged, does hereby remise, release, and forever quitclaim unto the Grantee all rights, title, interests, claims, 
      and demands whatsoever, both at law and in equity, which the Grantor has or may have in and to the above-described property.
    </p>

    <p>
      It is expressly understood and agreed that this conveyance transfers only such interest, if any, as the Grantor presently holds in the 
      property, and shall not be construed as a representation that the Grantor possesses valid or marketable title thereto.
    </p>

    <!-- NO WARRANTY -->
    <h3 style="margin-top:35px; font-weight:700;">4. ABSENCE OF WARRANTIES</h3>
    <p>
      This Deed is executed and delivered without any covenant, warranty, or representation, express or implied, as to title, possession, 
      encumbrances, or otherwise. The Grantee hereby accepts the property in its present condition, subject to all existing liens, charges, 
      encumbrances, restrictions, easements, and other matters affecting title, whether known or unknown.
    </p>

    <!-- CONSIDERATION -->
    <h3 style="margin-top:35px; font-weight:700;">5. CONSIDERATION</h3>
    <p>
      The consideration for this conveyance is stated as follows:
      <br/><br/>
      <strong>{{consideration}}</strong>
    </p>

    <!-- POSSESSION -->
    <h3 style="margin-top:35px; font-weight:700;">6. POSSESSION</h3>
    <p>
      Vacant and peaceful possession of the property shall pass to the Grantee upon the execution and delivery of this Deed, unless otherwise 
      agreed in writing between the Parties.
    </p>

    <!-- TAXES -->
    <h3 style="margin-top:35px; font-weight:700;">7. TAXES AND EXPENSES</h3>
    <p>
      All taxes, duties, registration fees, stamp duties, and any other governmental or administrative charges arising out of or in connection 
      with this transaction shall be borne and paid by:
      <br/><br/>
      {{taxResponsibility}}
    </p>

    <!-- LAW -->
    <h3 style="margin-top:35px; font-weight:700;">8. GOVERNING LAW</h3>
    <p>
      This Deed shall be governed by, and construed in accordance with, the laws of <strong>{{governingLaw}}</strong>, and the Parties hereby 
      submit to the jurisdiction of the competent courts thereof.
    </p>

    <!-- ENTIRE -->
    <h3 style="margin-top:35px; font-weight:700;">9. ENTIRE AGREEMENT</h3>
    <p>
      This Deed constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior 
      negotiations, understandings, representations, and agreements, whether written or oral.
    </p>

    <!-- SIGNATURES -->
    <h3 style="margin-top:50px; font-weight:700;">EXECUTION</h3>

    <div style="display:flex; justify-content:space-between; margin-top:60px;">
      <div style="width:45%;">
        <p><strong>Grantor</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:25px;"></div>
      </div>

      <div style="width:45%;">
        <p><strong>Grantee</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:25px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default quitclaimDeedTemplate;