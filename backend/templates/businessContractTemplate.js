const businessContractTemplate = (data = {}) => {
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
      line-height: 1.85; 
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
      BUSINESS CONTRACT AGREEMENT
    </h1>

    <p style="text-align:center; color:#555;">
      This Agreement is executed on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This Agreement is a legally binding contract establishing rights, duties, and obligations between the Parties.
    </p>

    <!-- PARTIES -->
    <h3>1. Parties</h3>
    <p>
      This Business Contract Agreement ("Agreement") is entered into by and between:
      <br/><br/>
      <strong>{{partyOneName}}</strong> ("Party A")  
      <br/>
      and  
      <br/>
      <strong>{{partyTwoName}}</strong> ("Party B").
      <br/><br/>
      Both Parties acknowledge that they have full legal capacity to enter into this Agreement and voluntarily agree to be bound by its terms.
    </p>

    <!-- PURPOSE -->
    <h3>2. Purpose of Agreement</h3>
    <p>
      The purpose of this Agreement is to define the terms and conditions under which the Parties will collaborate, cooperate, or conduct business activities.
      <br/><br/>
      <strong>Business Objective:</strong>
      <br/>
      {{businessPurpose}}
    </p>

    <!-- SCOPE -->
    <h3>3. Scope of Work</h3>
    <p>
      The Parties agree that the following services, deliverables, or business activities will be included under this Agreement:
      <br/><br/>
      {{scopeOfWork}}
      <br/><br/>
      Any additional work outside this scope must be mutually agreed upon in writing by both Parties.
    </p>

    <!-- RESPONSIBILITIES -->
    <h3>4. Roles and Responsibilities</h3>
    <p>
      Each Party shall perform their obligations in a professional, timely, and workmanlike manner. The responsibilities are defined as follows:
      <br/><br/>
      {{responsibilities}}
      <br/><br/>
      Failure to meet agreed responsibilities may constitute a breach of this Agreement.
    </p>

    <!-- PAYMENT -->
    <h3>5. Payment Terms and Compensation</h3>
    <p>
      The Parties agree to the following payment structure:
      <br/><br/>
      {{paymentTerms}}
      <br/><br/>
      All payments shall be made in accordance with agreed milestones, invoices, or schedules.
      Late payments may incur penalties as mutually agreed or as permitted by law.
    </p>

    <!-- EXPENSES -->
    <h3>6. Expenses</h3>
    <p>
      Unless otherwise stated in writing, each Party shall bear their own operational expenses incurred in the performance of this Agreement.
    </p>

    <!-- CONFIDENTIALITY -->
    <h3>7. Confidentiality</h3>
    <p>
      Both Parties agree to maintain strict confidentiality regarding all business information, strategies, financial data, client information, and proprietary knowledge shared during the term of this Agreement.
      <br/><br/>
      This obligation shall survive termination of this Agreement.
    </p>

    <!-- INTELLECTUAL PROPERTY -->
    <h3>8. Intellectual Property Rights</h3>
    <p>
      All intellectual property, including but not limited to designs, code, content, or business materials created under this Agreement shall be owned by:
      <br/><br/>
      {{intellectualProperty}}
      <br/><br/>
      No Party shall claim ownership unless expressly stated in writing.
    </p>

    <!-- LIABILITY -->
    <h3>9. Limitation of Liability</h3>
    <p>
      Neither Party shall be liable for indirect, incidental, special, or consequential damages.
      <br/><br/>
      Total liability under this Agreement shall not exceed the total amount paid or payable under this Agreement.
    </p>

    <!-- TERM -->
    <h3>10. Term and Duration</h3>
    <p>
      This Agreement shall commence on the date of execution and remain in effect until:
      <br/><br/>
      {{contractDuration}}
      <br/><br/>
      unless terminated earlier in accordance with this Agreement.
    </p>

    <!-- TERMINATION -->
    <h3>11. Termination</h3>
    <p>
      Either Party may terminate this Agreement by providing reasonable written notice.
      <br/><br/>
      In case of breach of contract, immediate termination may apply.
      <br/><br/>
      Upon termination, both Parties shall settle all outstanding obligations.
    </p>

    <!-- RELATIONSHIP -->
    <h3>12. Independent Contractor Relationship</h3>
    <p>
      Nothing in this Agreement shall be interpreted to create a partnership, joint venture, employment relationship, or agency between the Parties.
    </p>

    <!-- FORCE MAJEURE -->
    <h3>13. Force Majeure</h3>
    <p>
      Neither Party shall be held responsible for failure to perform due to unforeseen events such as natural disasters, war, government restrictions, or other circumstances beyond reasonable control.
    </p>

    <!-- GOVERNING LAW -->
    <h3>14. Governing Law</h3>
    <p>
      This Agreement shall be governed by and construed in accordance with the laws of:
      <br/><br/>
      <strong>{{governingLaw}}</strong>
    </p>

    <!-- ENTIRE AGREEMENT -->
    <h3>15. Entire Agreement</h3>
    <p>
      This document constitutes the entire Agreement between the Parties and supersedes all prior negotiations, discussions, or agreements.
    </p>

    <!-- SIGNATURES -->
    <h3>Signatures</h3>

    <div class="doc-flex" style="display:flex; justify-content:space-between; margin-top:50px;">
      <div class="doc-col">
        <p><strong>Party A Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Party B Signature</strong></p>
        <div style="border-bottom:1px solid #000;height:50px;margin-top:10px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default businessContractTemplate;