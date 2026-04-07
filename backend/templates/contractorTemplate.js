 const contractorTemplate = (data = {}) => {
  const template = `
  <div style="
      font-family: Georgia, 'Times New Roman', serif; 
      max-width: 1000px;
      width: 100%;
      margin: auto; 
      padding: 60px; 
      line-height: 1.85; 
      color: #1a1a1a; 
      background: #ffffff; 
      border: 1px solid #e5e5e5; 
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      box-sizing: border-box;
    " class="doc-container">

    <style>
      @media (max-width: 768px) {
        .doc-container {
          padding: 8px !important; /* ✅ removed all padding on mobile */
        }
        .doc-container h1 {
          font-size: 22px !important;
          text-align: center !important;
        }
        .doc-container h2 {
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

    <div>

    <!-- HEADER -->
    <div style="text-align:center; margin-bottom:40px;">
      <h1 style="
        font-size: 34px; 
        letter-spacing: 1px; 
        text-transform: uppercase; 
        margin-bottom: 10px;
      ">
        Independent Contractor Agreement
      </h1>
      <p style="color:#555;">Date: {{date}}</p>
    </div>

    <!-- INTRO -->
    <p>
      This Independent Contractor Agreement ("Agreement") is entered into on 
      <strong>{{date}}</strong> by and between:
    </p>

    <p>
      <strong>{{clientName}}</strong>, having its principal place of business at 
      {{clientAddress}} (hereinafter referred to as the "Client"), and
      <strong>{{contractorName}}</strong>, having its principal place of business at 
      {{contractorAddress}} (hereinafter referred to as the "Contractor").
    </p>

    <p>
      The Client and Contractor may collectively be referred to as the "Parties"
      and individually as a "Party".
    </p>

    <!-- SECTION -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      1. Engagement and Scope of Services
    </h2>
    <p>
      The Client hereby engages the Contractor to perform professional services,
      and the Contractor agrees to perform such services in accordance with the
      terms of this Agreement.
    </p>
    <p>
      Scope of Services:
    </p>
    <p style="margin-left:20px;"><em>{{servicesSummary}}</em></p>
    <p>
      The Contractor shall exercise a high standard of professional skill, care,
      and diligence consistent with industry best practices.
    </p>

    <!-- PAYMENT -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      2. Fees and Payment Terms
    </h2>
    <p>
      In consideration for the Services, the Client agrees to pay the Contractor
      a total fee of <strong>{{paymentAmount}}</strong>.
    </p>
    <p>
      Payment shall be made in accordance with the following terms:
      <strong>{{paymentTerms}}</strong>.
    </p>
    <p>
      Any late payments may be subject to interest in accordance with applicable
      laws and standard commercial practices.
    </p>

    <!-- TERM -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      3. Term and Duration
    </h2>
    <p>
      This Agreement shall commence on <strong>{{date}}</strong> and shall remain
      in effect for a period of <strong>{{duration}}</strong>, unless earlier
      terminated in accordance with this Agreement.
    </p>

    <!-- TERMINATION -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      4. Termination
    </h2>
    <p>
      Either Party may terminate this Agreement by providing written notice
      to the other Party.
    </p>
    <p>
      Immediate termination may occur in the event of a material breach that
      remains uncured within a reasonable time.
    </p>
    <p>
      Upon termination, the Contractor shall cease all work and deliver any
      completed materials to the Client.
    </p>

    <!-- STATUS -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      5. Independent Contractor Status
    </h2>
    <p>
      The Contractor is engaged as an independent contractor and not as an
      employee, partner, or agent of the Client.
    </p>
    <p>
      The Contractor retains full control over the manner and means of
      performing the Services and shall be solely responsible for all taxes,
      insurance, and statutory obligations.
    </p>

    <!-- CONFIDENTIALITY -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      6. Confidentiality
    </h2>
    <p>
      The Contractor agrees to maintain strict confidentiality regarding all
      proprietary and confidential information obtained from the Client.
    </p>
    <p>
      This obligation shall survive the termination of this Agreement.
    </p>

    <!-- IP -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      7. Intellectual Property
    </h2>
    <p>
      All work product, materials, and intellectual property developed under
      this Agreement shall become the sole property of the Client upon full
      payment, unless otherwise agreed in writing.
    </p>

    <!-- LIABILITY -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      8. Limitation of Liability
    </h2>
    <p>
      The Contractor shall perform the Services with reasonable care and skill.
      Neither Party shall be liable for indirect, incidental, or consequential
      damages arising out of this Agreement.
    </p>

    <!-- LAW -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      9. Governing Law
    </h2>
    <p>
      This Agreement shall be governed by and construed in accordance with
      the laws of <strong>{{jurisdiction}}</strong>.
    </p>

    <!-- ENTIRE -->
    <h2 style="margin-top:40px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      10. Entire Agreement
    </h2>
    <p>
      This Agreement constitutes the entire understanding between the Parties
      and supersedes all prior agreements, negotiations, or representations.
    </p>

    <!-- SIGNATURES -->
    <h2 style="margin-top:50px;">Signatures</h2>

    <div class="doc-flex" style="display:flex;justify-content:space-between;margin-top:60px;">
      <div class="doc-col" style="width:45%;">
        <p><strong>Client</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;margin-top:30px;"></div>
        <p style="margin-top:10px;">{{clientName}}</p>
      </div>

      <div class="doc-col" style="width:45%;">
        <p><strong>Contractor</strong></p>
        <div style="border-bottom:1px solid #000;height:40px;margin-top:30px;"></div>
        <p style="margin-top:10px;">{{contractorName}}</p>
      </div>
    </div>

    <p style="text-align:right;margin-top:50px;">Date: {{date}}</p>

    </div>
  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default contractorTemplate;