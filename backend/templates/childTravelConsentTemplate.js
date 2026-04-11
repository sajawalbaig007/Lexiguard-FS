const childTravelConsentTemplate = (data = {}) => {
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
      line-height: 1.8; 
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
      CHILD TRAVEL CONSENT FORM
    </h1>

    <p style="text-align:center; color:#555;">
      This consent is issued on <strong>${today}</strong>
    </p>

    <p style="text-align:center; font-size:12px; color:#666;">
      This document grants permission for a minor to travel under specified conditions and supervision.
    </p>

    <!-- PARENT / GUARDIAN -->
    <h3>1. Parent / Legal Guardian Details</h3>
    <p>
      Full Name: <strong>{{parentName}}</strong><br/>
      Address: {{parentAddress}}<br/>
      Contact Number: {{parentContact}}<br/>
      Email: {{parentEmail}}
    </p>

    <!-- CHILD INFO -->
    <h3>2. Child Information</h3>
    <p>
      Child Full Name: <strong>{{childName}}</strong><br/>
      Date of Birth: {{childDOB}}<br/>
      Nationality: {{childNationality}}<br/>
      Passport Number: {{childPassport}}<br/>
      ID Number (if applicable): {{childIdNumber}}
    </p>

    <!-- TRAVEL DETAILS -->
    <h3>3. Travel Authorization</h3>
    <p>
      I hereby authorize the travel of my child <strong>{{childName}}</strong> under the conditions outlined in this document.
      <br/><br/>
      Destination: <strong>{{destination}}</strong><br/>
      Departure Date: {{departureDate}}<br/>
      Return Date: {{returnDate}}<br/>
      Purpose of Travel: {{travelPurpose}}
    </p>

    <!-- ACCOMPANYING PERSON -->
    <h3>4. Accompanying Adult</h3>
    <p>
      Name: <strong>{{accompanyingPerson}}</strong><br/>
      Relationship: {{relationship}}<br/>
      Contact Number: {{accompanyingContact}}<br/>
      ID/Passport Number: {{accompanyingId}}
    </p>

    <!-- CONSENT -->
    <h3>5. Consent Statement</h3>
    <p>
      I, <strong>{{parentName}}</strong>, confirm that I am the legal parent or guardian of the child named above.
      <br/><br/>
      I hereby grant full permission for my child to travel as described and acknowledge full understanding of the travel arrangements and responsibilities.
    </p>

    <!-- MEDICAL AUTHORIZATION -->
    <h3>6. Medical Authorization</h3>
    <p>
      In case of medical emergency during travel, I authorize the accompanying adult and relevant authorities to obtain and approve necessary medical treatment.
      <br/><br/>
      Medical Conditions: {{medicalConditions}}<br/>
      Allergies: {{allergies}}
    </p>

    <!-- EMERGENCY CONTACT -->
    <h3>7. Emergency Contact Information</h3>
    <p>
      Name: {{emergencyContactName}}<br/>
      Contact Number: {{emergencyContactNumber}}<br/>
      Alternate Contact: {{alternateContact}}
    </p>

    <!-- RESPONSIBILITY -->
    <h3>8. Responsibility Declaration</h3>
    <p>
      I acknowledge that the accompanying adult shall be responsible for the safety, supervision, and welfare of the child during travel.
      <br/><br/>
      I understand that transportation providers and related parties are not liable except in cases of proven negligence or legal violation.
    </p>

    <!-- REVOCATION -->
    <h3>9. Revocation Clause</h3>
    <p>
      This consent remains valid for the stated travel period unless revoked in writing prior to departure.
    </p>

    <!-- FINAL DECLARATION -->
    <h3>10. Declaration</h3>
    <p>
      I confirm that all information provided in this document is true, accurate, and complete to the best of my knowledge.
    </p>

    <!-- SIGNATURE -->
    <h3>Signature</h3>

    <div style="margin-top:40px;">
      <p><strong>Parent / Guardian Signature</strong></p>
      <div style="border-bottom:1px solid #000;height:45px;margin-top:10px;"></div>

      <p style="margin-top:20px;">
        Name: <strong>{{parentName}}</strong>
      </p>
    </div>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default childTravelConsentTemplate;