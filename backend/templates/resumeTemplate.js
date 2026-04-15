const resumeTemplate = (data = {}) => {
  const updated = new Date().toLocaleDateString("en-GB", {
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
      line-height: 1.7; 
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
    <h1 style="text-align:center; font-size:30px; margin-bottom:5px;">
      {{fullName}}
    </h1>

    <p style="text-align:center; color:#555; font-size:14px;">
      {{jobTitle}} | {{location}} | {{email}} | {{phone}}
    </p>

    <p style="text-align:center; font-size:12px; color:#777;">
      LinkedIn: {{linkedin}} | Portfolio: {{portfolio}} | GitHub: {{github}}
    </p>

    <p style="text-align:center; font-size:11px; color:#999;">
      Last Updated: ${updated}
    </p>

    <!-- SUMMARY -->
    <h3>Professional Summary</h3>
    <p>
      {{summary}}
    </p>

    <!-- SKILLS -->
    <h3>Skills</h3>
    <p>
      {{skills}}
    </p>

    <!-- EXPERIENCE -->
    <h3>Work Experience</h3>
    <p>
      {{experience}}
    </p>

    <!-- EDUCATION -->
    <h3>Education</h3>
    <p>
      {{education}}
    </p>

    <!-- PROJECTS -->
    <h3>Projects</h3>
    <p>
      {{projects}}
    </p>

    <!-- CERTIFICATIONS -->
    <h3>Certifications</h3>
    <p>
      {{certifications}}
    </p>

    <!-- ACHIEVEMENTS -->
    <h3>Achievements</h3>
    <p>
      {{achievements}}
    </p>

    <!-- LANGUAGES -->
    <h3>Languages</h3>
    <p>
      {{languages}}
    </p>

    <!-- INTERESTS -->
    <h3>Interests</h3>
    <p>
      {{interests}}
    </p>

    <!-- ADDITIONAL SECTIONS -->
    <h3>Additional Information</h3>
    <p>
      {{additionalInfo}}
    </p>

    <!-- DECLARATION -->
    <h3>Declaration</h3>
    <p>
      I hereby declare that the information provided above is true and correct to the best of my knowledge.
    </p>

  </div>
  `;

  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
};

export default resumeTemplate;