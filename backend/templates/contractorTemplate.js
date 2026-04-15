 const contractorTemplate = (data = {}) => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const template = `
  <div class="doc-container" style="
      font-family: Inter, system-ui, -apple-system, sans-serif;
      width: 100%;
      line-height: 1.8;
      padding: 40px 50px;
      color: #111827;
      background: #ffffff;
    ">

    <style>
      .section-title {
        margin-top: 32px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 6px;
      }

      .text {
        color: #374151;
        font-size: 14px;
        margin-top: 10px;
      }

      .doc-flex {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-top: 40px;
      }

      .doc-col {
        width: 45%;
      }

      @media (max-width: 768px) {
        .doc-container h1 {
          font-size: 20px !important;
        }
        .section-title {
          font-size: 15px !important;
        }
        .text {
          font-size: 13px !important;
        }
        .doc-flex {
          flex-direction: column !important;
        }
        .doc-col {
          width: 100% !important;
        }
      }
    </style>

    <!-- HEADER -->
    <div style="text-align:center; margin-bottom:40px;">
      <h1 style="font-size:26px;font-weight:600;margin-bottom:8px;">
        INDEPENDENT CONTRACTOR AGREEMENT
      </h1>
      <p style="color:#6b7280;font-size:13px;">
        This Agreement is made on <strong>${today}</strong>
      </p>
      <p style="color:#6b7280;font-size:12px; margin-top:6px;">
        This Agreement is intended to create legally binding obligations in accordance with the laws of England and Wales.
      </p>
    </div>

    <!-- INTRO -->
    <p class="text">
      This Independent Contractor Agreement ("Agreement") is entered into between 
      <strong>{{clientName}}</strong>, of {{clientAddress}} ("Client"), 
      and <strong>{{contractorName}}</strong>, of {{contractorAddress}} ("Contractor").
    </p>

    <p class="text">
      The parties hereby agree as follows, intending to be legally bound and acknowledging that they have had the opportunity to obtain independent legal advice prior to entering into this Agreement.
    </p>

    <!-- 1 -->
    <h2 class="section-title">1. Scope of Work</h2>
    <p class="text">
      The Contractor shall provide the following services ("Services") with reasonable skill, care, and diligence in accordance with generally accepted industry standards:
      <br /><br />
      {{servicesSummary}}
      <br /><br />
      Any variation to the Services must be agreed in writing by both parties.
    </p>

    <!-- 2 -->
    <h2 class="section-title">2. Term</h2>
    <p class="text">
      This Agreement shall commence on <strong>{{startDate}}</strong> and shall continue until 
      <strong>{{endDate}}</strong>, unless terminated earlier in accordance with its terms.
      <br /><br />
      The parties may agree in writing to extend the duration of this Agreement.
    </p>

    <!-- 3 -->
    <h2 class="section-title">3. Fees and Payment</h2>
    <p class="text">
      In consideration for the Services, the Client shall pay the Contractor the sum of <strong>{{paymentAmount}}</strong>.
      <br /><br />
      Payment shall be made in accordance with the following terms:
      <br /><br />
      {{paymentTerms}}
      <br /><br />
      The Contractor shall be responsible for all taxes, national insurance contributions, and any other statutory obligations arising from payments made under this Agreement.
    </p>

    <!-- 4 -->
    <h2 class="section-title">4. Status of Contractor</h2>
    <p class="text">
      The Contractor is engaged as an independent contractor. Nothing in this Agreement shall render the Contractor an employee, worker, agent, or partner of the Client.
      <br /><br />
      The Contractor shall have full control over the manner in which the Services are performed.
    </p>

    <!-- 5 -->
    <h2 class="section-title">5. Confidentiality</h2>
    <p class="text">
      The Contractor shall keep confidential all information of a confidential nature obtained from the Client and shall not disclose such information without prior written consent.
      <br /><br />
      This obligation shall survive termination of this Agreement.
    </p>

    <!-- 6 -->
    <h2 class="section-title">6. Intellectual Property</h2>
    <p class="text">
      All intellectual property rights in any work produced under this Agreement shall vest in the Client upon full payment.
      <br /><br />
      The Contractor agrees to assign such rights and execute any necessary documents to give effect to this clause.
    </p>

    <!-- 7 -->
    <h2 class="section-title">7. Termination</h2>
    <p class="text">
      Either party may terminate this Agreement by giving reasonable written notice.
      <br /><br />
      Upon termination, the Contractor shall be entitled to payment for all work completed up to the termination date.
    </p>

    <!-- 8 -->
    <h2 class="section-title">8. Liability</h2>
    <p class="text">
      Nothing in this Agreement shall limit or exclude liability for death or personal injury caused by negligence.
      <br /><br />
      Subject to the above, the Contractor’s total liability shall not exceed the total fees paid under this Agreement.
    </p>

    <!-- 9 -->
    <h2 class="section-title">9. Governing Law</h2>
    <p class="text">
      This Agreement shall be governed by and construed in accordance with the laws of {{governingLaw}}.
      <br /><br />
      The parties submit to the exclusive jurisdiction of the courts of England and Wales.
    </p>

    <!-- 10 -->
    <h2 class="section-title">10. General</h2>
    <p class="text">
      This Agreement constitutes the entire agreement between the parties and supersedes any prior agreements or understandings.
      <br /><br />
      If any provision is held to be invalid, the remaining provisions shall remain in full force and effect.
    </p>

    <!-- SIGNATURES -->
    <h2 class="section-title">Signatures</h2>

    <div class="doc-flex">
      <div class="doc-col">
        <p><strong>Client</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
      </div>

      <div class="doc-col">
        <p><strong>Contractor</strong></p>
        <div style="border-bottom:1px solid #111;height:30px;margin-top:20px;"></div>
      </div>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default contractorTemplate;