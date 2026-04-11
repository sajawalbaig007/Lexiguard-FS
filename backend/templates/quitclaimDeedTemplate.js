 const quitclaimDeedTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div 
    class="doc-container"
    style="
      font-family: 'Times New Roman', Georgia, serif;
      max-width: 820px;
      margin: auto;
      padding: 60px 50px;
      line-height: 1.9;
      color: #111;
      background: #fff;
      box-sizing: border-box;
      font-size: 15.5px;
    "
  >

    <style>
      @media (max-width: 768px) {
        .doc-container { padding: 20px !important; }
        .doc-container h1 { font-size: 22px !important; }
        .doc-container h3 { font-size: 15px !important; }
        .doc-container p { font-size: 14px !important; }
        .doc-flex { flex-direction: column !important; gap: 40px; }
        .doc-col { width: 100% !important; }
      }
    </style>

    <!-- HEADER -->
    <h1 style="
      text-align:center;
      font-size:30px;
      letter-spacing:1.5px;
      margin-bottom:20px;
      font-weight:600;
    ">
      QUITCLAIM DEED
    </h1>

    <p style="
      text-align:center;
      margin-bottom:30px;
      font-size:14px;
    ">
      This Deed is executed on <strong>${today}</strong>
    </p>

    <p style="
      text-align:center;
      font-size:13px;
      color:#444;
      margin-bottom:50px;
    ">
      This instrument transfers any interest the Grantor may have in the property without warranties of title.
    </p>

    <!-- PARTIES -->
    <h3 style="
      font-size:15px;
      margin-top:30px;
      margin-bottom:10px;
      font-weight:600;
    ">
      1. PARTIES
    </h3>
    <p>
      This Quitclaim Deed is made between <strong>{{grantorName}}</strong> (the “Grantor”) 
      and <strong>{{granteeName}}</strong> (the “Grantee”).
    </p>

    <!-- PROPERTY -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      2. PROPERTY DESCRIPTION
    </h3>
    <p>
      The property which is the subject of this Deed is situated at:
      <br/><br/>
      <strong>{{propertyAddress}}</strong>
      <br/><br/>
      <span style="display:block; margin-top:10px;">
        Legal Description (if applicable):
      </span>
      <br/>
      {{legalDescription}}
    </p>

    <!-- TRANSFER -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      3. TRANSFER OF INTEREST
    </h3>
    <p>
      The Grantor hereby releases, remises, and forever quitclaims unto the Grantee all rights, title, interest, and claim whatsoever in the above-described property.
      <br/><br/>
      This conveyance is made without any covenant, warranty, or representation of title.
    </p>

    <!-- NO WARRANTY -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      4. NO WARRANTY
    </h3>
    <p>
      This Deed is made on an “as is” basis. The Grantor provides no assurance as to the validity or marketability of title.
      The Grantee accepts the property subject to all existing matters including, without limitation, liens, charges, and encumbrances.
    </p>

    <!-- CONSIDERATION -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      5. CONSIDERATION
    </h3>
    <p>
      The consideration for this transfer is stated as follows:
      <br/><br/>
      <strong>{{consideration}}</strong>
    </p>

    <!-- POSSESSION -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      6. POSSESSION
    </h3>
    <p>
      Possession of the property shall pass to the Grantee upon execution of this Deed unless otherwise agreed in writing between the parties.
    </p>

    <!-- TAXES / FEES -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      7. TAXES AND FEES
    </h3>
    <p>
      All applicable taxes, duties, registration fees, and associated charges arising from this conveyance shall be borne by:
      <br/><br/>
      {{taxResponsibility}}
    </p>

    <!-- GOVERNING LAW -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      8. GOVERNING LAW
    </h3>
    <p>
      This Deed shall be governed by and construed in accordance with the laws of <strong>{{governingLaw}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3 style="
      font-size:15px;
      margin-top:35px;
      margin-bottom:10px;
      font-weight:600;
    ">
      9. ENTIRE AGREEMENT
    </h3>
    <p>
      This document constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements, whether written or oral.
    </p>

    <!-- SIGNATURES -->
    <h3 style="
      font-size:15px;
      margin-top:50px;
      margin-bottom:25px;
      font-weight:600;
    ">
      EXECUTION
    </h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:60px;">
      <div class="doc-col" style="width:45%;">
        <p><strong>Signed by the Grantor:</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:25px;"></div>
      </div>

      <div class="doc-col" style="width:45%;">
        <p><strong>Signed by the Grantee:</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:25px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default quitclaimDeedTemplate;