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
      QUITCLAIM DEED
    </h1>

    <p style="text-align:center; color:#555;">
      This Deed is executed on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document transfers any interest the Grantor may have in the property without warranties.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Quitclaim Deed is made between
      <strong>{{grantorName}}</strong> ("Grantor")
      and <strong>{{granteeName}}</strong> ("Grantee").
    </p>

    <!-- PROPERTY -->
    <h3>2. Property Description</h3>
    <p>
      The property subject to this Quitclaim Deed is located at:
      <br/><br/>
      <strong>{{propertyAddress}}</strong>
      <br/><br/>
      Legal Description (if any):
      <br/><br/>
      {{legalDescription}}
    </p>

    <!-- TRANSFER -->
    <h3>3. Transfer of Interest</h3>
    <p>
      The Grantor hereby releases, remises, and quitclaims all right, title, interest, and claim in the above-described property to the Grantee.
      <br/><br/>
      This transfer is made without any warranties or guarantees of ownership.
    </p>

    <!-- NO WARRANTY -->
    <h3>4. No Warranty</h3>
    <p>
      This Quitclaim Deed is provided "as-is" and does not guarantee that the Grantor holds valid or marketable title.
      The Grantee accepts the property subject to all existing conditions, liens, or encumbrances (if any).
    </p>

    <!-- CONSIDERATION -->
    <h3>5. Consideration</h3>
    <p>
      The consideration for this transfer is:
      <br/><br/>
      <strong>{{consideration}}</strong>
    </p>

    <!-- POSSESSION -->
    <h3>6. Possession</h3>
    <p>
      Possession of the property shall transfer to the Grantee upon execution of this Deed, unless otherwise agreed in writing.
    </p>

    <!-- TAXES / FEES -->
    <h3>7. Taxes and Fees</h3>
    <p>
      Any applicable taxes, recording fees, or transfer charges shall be the responsibility of:
      <br/><br/>
      {{taxResponsibility}}
    </p>

    <!-- GOVERNING LAW -->
    <h3>8. Governing Law</h3>
    <p>
      This Deed shall be governed by and construed in accordance with the laws of
      <strong>{{governingLaw}}</strong>.
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>9. Entire Agreement</h3>
    <p>
      This document represents the entire agreement between the parties and supersedes all prior understandings.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:40px;">
      <div class="doc-col">
        <p><strong>Grantor Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Grantee Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default quitclaimDeedTemplate;