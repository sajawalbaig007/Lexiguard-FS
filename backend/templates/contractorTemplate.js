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
        This document is intended to create legally binding obligations between the parties under applicable contract law.
      </p>
    </div>

    <!-- INTRO -->
    <p class="text">
      This Independent Contractor Agreement ("Agreement") is entered into by and between 
      <strong>{{clientName}}</strong>, located at {{clientAddress}} ("Client"), 
      and <strong>{{contractorName}}</strong>, located at {{contractorAddress}} ("Contractor").
      Both parties agree to be bound by the terms and conditions set forth herein.
    </p>

    <p class="text">
      The parties acknowledge that they have read, understood, and voluntarily accept this Agreement, and that they have had the opportunity to seek independent legal advice prior to execution.
    </p>

    <!-- 1 -->
    <h2 class="section-title">1. Scope of Work</h2>
    <p class="text">
      The Contractor agrees to perform the services described below in a professional and workmanlike manner, in accordance with industry standards:
      <br /><br />
      {{servicesSummary}}
      <br /><br />
      Any additional services not expressly included in this Agreement shall require written consent from the Client.
    </p>

    <!-- 2 -->
    <h2 class="section-title">2. Term and Duration</h2>
    <p class="text">
      This Agreement shall commence on <strong>{{startDate}}</strong> and shall remain in effect until 
      <strong>{{endDate}}</strong>, unless terminated earlier in accordance with this Agreement.
      <br /><br />
      Any extension of the term shall be mutually agreed in writing by both parties.
    </p>

    <!-- 3 -->
    <h2 class="section-title">3. Compensation and Payment Terms</h2>
    <p class="text">
      The Client agrees to pay the Contractor a total amount of <strong>{{paymentAmount}}</strong>.
      <br /><br />
      Payment shall be made in accordance with the following terms:
      <br /><br />
      {{paymentTerms}}
      <br /><br />
      The Contractor shall be responsible for any applicable taxes arising from payments received under this Agreement.
    </p>

    <!-- 4 -->
    <h2 class="section-title">4. Independent Contractor Relationship</h2>
    <p class="text">
      The Contractor is engaged as an independent contractor and nothing in this Agreement shall be construed as creating an employer-employee relationship, partnership, or joint venture.
      <br /><br />
      The Contractor shall have full control over the manner and means of performing the services, subject to the final deliverables agreed with the Client.
    </p>

    <!-- 5 -->
    <h2 class="section-title">5. Confidentiality and Non-Disclosure</h2>
    <p class="text">
      The Contractor agrees to maintain strict confidentiality regarding all confidential information received from the Client.
      <br /><br />
      Such obligation shall survive termination of this Agreement. Confidential information shall not be disclosed to any third party without prior written consent.
    </p>

    <!-- 6 -->
    <h2 class="section-title">6. Intellectual Property Rights</h2>
    <p class="text">
      All deliverables, documents, designs, or work products created under this Agreement shall be the exclusive property of the Client upon full payment, unless otherwise agreed in writing.
      <br /><br />
      The Contractor hereby waives any moral rights to such work to the extent permitted by law.
    </p>

    <!-- 7 -->
    <h2 class="section-title">7. Termination</h2>
    <p class="text">
      Either party may terminate this Agreement by providing {{terminationNotice}} written notice to the other party.
      <br /><br />
      Upon termination, the Contractor shall be compensated for all work completed up to the termination date.
    </p>

    <!-- 8 -->
    <h2 class="section-title">8. Liability and Indemnity</h2>
    <p class="text">
      The Contractor shall not be liable for any indirect, incidental, or consequential damages arising from this Agreement.
      <br /><br />
      The Contractor’s total liability under this Agreement shall not exceed the total amount paid by the Client.
      <br /><br />
      The Contractor agrees to indemnify the Client against any claims arising from negligence or breach of contract.
    </p>

    <!-- 9 -->
    <h2 class="section-title">9. Governing Law</h2>
    <p class="text">
      This Agreement shall be governed and construed in accordance with the laws of {{governingLaw}}, without regard to conflict of law principles.
    </p>

    <!-- 10 -->
    <h2 class="section-title">10. Force Majeure</h2>
    <p class="text">
      Neither party shall be liable for failure or delay in performance caused by circumstances beyond reasonable control, including but not limited to acts of God, war, strikes, or governmental restrictions.
    </p>

    <!-- 11 -->
    <h2 class="section-title">11. Severability</h2>
    <p class="text">
      If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
    </p>

    <!-- 12 -->
    <h2 class="section-title">12. Entire Agreement</h2>
    <p class="text">
      This Agreement constitutes the entire understanding between the parties and supersedes all prior discussions, agreements, or representations, whether written or oral.
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