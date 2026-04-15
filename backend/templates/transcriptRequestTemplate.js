const transcriptRequestTemplate = (data = {}) => {
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
      }
    </style>

    <!-- HEADER -->
    <h1 style="text-align:center; font-size:28px; margin-bottom:10px;">
      OFFICIAL TRANSCRIPT REQUEST
    </h1>

    <p style="text-align:center; color:#555;">
      Request submitted on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document serves as an official request for the issuance of an academic transcript.
    </p>

    <!-- STUDENT INFO -->
    <h3>1. Student Information</h3>
    <p>
      This request is submitted by <strong>{{studentName}}</strong>,
      holding Student ID <strong>{{studentId}}</strong>,
      currently enrolled in <strong>{{program}}</strong>.
    </p>

    <!-- INSTITUTION -->
    <h3>2. Institution Details</h3>
    <p>
      Institution Name: <strong>{{institutionName}}</strong><br/>
      Institution Address: {{institutionAddress}}
    </p>

    <!-- TRANSCRIPT TYPE -->
    <h3>3. Transcript Type</h3>
    <p>
      The applicant requests the following type of transcript:
      <strong>{{transcriptType}}</strong>.
    </p>

    <!-- PURPOSE -->
    <h3>4. Purpose of Request</h3>
    <p>
      The transcript is required for the following purpose:
      <br/><br/>
      {{reason}}
    </p>

    <!-- DELIVERY -->
    <h3>5. Delivery Method</h3>
    <p>
      Preferred method of delivery:
      <br/><br/>
      {{deliveryMethod}}
    </p>

    <!-- INSTRUCTIONS -->
    <h3>6. Special Instructions</h3>
    <p>
      {{specialInstructions}}
    </p>

    <!-- DECLARATION -->
    <h3>7. Declaration</h3>
    <p>
      I hereby declare that all information provided in this request is accurate and complete to the best of my knowledge and belief.
    </p>

    <!-- AUTHORIZATION -->
    <h3>8. Authorization</h3>
    <p>
      I authorize the institution to release my academic transcript in accordance with institutional policies and the details provided in this request.
    </p>

    <!-- CONFIRMATION -->
    <h3>9. Student Confirmation</h3>
    <p>
      Student Name: <strong>{{studentName}}</strong><br/>
      Student ID: <strong>{{studentId}}</strong>
    </p>

    <!-- FINAL NOTE -->
    <h3>10. Final Acknowledgment</h3>
    <p>
      This request is formally submitted on <strong>${today}</strong> for official processing by the institution.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default transcriptRequestTemplate;