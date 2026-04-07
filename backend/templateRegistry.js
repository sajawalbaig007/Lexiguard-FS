import leaseTemplate from "./templates/leaseTemplate.js";
import ndaTemplate from "./templates/ndaTemplate.js";
import contractorTemplate from "./templates/contractorTemplate.js";

import leaseQuestions from "./templateQuestions/leaseQuestions.js";
import ndaQuestions from "./templateQuestions/ndaQuestions.js";
import contractorQuestions from "./templateQuestions/contractorQuestions.js";

const templateRegistry = {
  lease_agreement: {
    name: "Lease Agreement",
    template: leaseTemplate,
    questions: leaseQuestions,
  },
  nda: {
    name: "Non-Disclosure Agreement",
    template: ndaTemplate,
    questions: ndaQuestions,
  },
  contractor_agreement: {
    name: "Independent Contractor Agreement",
    template: contractorTemplate,
    questions: contractorQuestions,
  },
};

Object.freeze(templateRegistry);

export default templateRegistry;