 import billOfSaleTemplate from "./templates/billOfSaleTemplate.js";
import businessContractTemplate from "./templates/businessContractTemplate.js";
import childTravelConsentTemplate from "./templates/childTravelConsentTemplate.js";
import contractorTemplate from "./templates/contractorTemplate.js";
import divorceAgreementTemplate from "./templates/divorceAgreementTemplate.js";
import evictionNoticeTemplate from "./templates/evictionNoticeTemplate.js";
import invoiceTemplate from "./templates/invoiceTemplate.js";
import leaseTemplate from "./templates/leaseTemplate.js";
import leaseTerminationTemplate from "./templates/leaseTerminationTemplate.js";
import ndaTemplate from "./templates/ndaTemplate.js";
import powerOfAttorneyTemplate from "./templates/powerOfAttorneyTemplate.js";
import propertyManagementTemplate from "./templates/propertyManagementTemplate.js";
import quitclaimDeedTemplate from "./templates/quitclaimDeedTemplate.js";
import resumeTemplate from "./templates/resumeTemplate.js";
import roomRentalTemplate from "./templates/roomrentalTemplate.js";
import transcriptRequestTemplate from "./templates/transcriptRequestTemplate.js";

import billOfSaleQuestions from "./templateQuestions/billOfSaleQuestions.js";
import businessContractQuestions from "./templateQuestions/businessContractQuestions.js";
import childTravelConsentQuestions from "./templateQuestions/childTravelConsentQuestions.js";
import contractorQuestions from "./templateQuestions/contractorQuestions.js";
import divorceAgreementQuestions from "./templateQuestions/divorceAgreementQuestions.js";
import evictionNoticeQuestions from "./templateQuestions/evictionNoticeQuestions.js";
import invoiceQuestions from "./templateQuestions/invoiceQuestions.js";
import leaseQuestions from "./templateQuestions/leaseQuestions.js";
import leaseTerminationQuestions from "./templateQuestions/leaseTerminationQuestions.js";
import ndaQuestions from "./templateQuestions/ndaQuestions.js";
import powerOfAttorneyQuestions from "./templateQuestions/powerOfAttorneyQuestions.js";
import propertyManagementQuestions from "./templateQuestions/propertyManagementQuestions.js";
import quitclaimDeedQuestions from "./templateQuestions/quitclaimDeedQuestions.js";
import resumeQuestions from "./templateQuestions/resumeQuestions.js";
import roomRentalQuestions from "./templateQuestions/roomrentalQuestions.js";
import transcriptRequestQuestions from "./templateQuestions/transcriptRequestQuestions.js";

const templateRegistry = {
  bill_of_sale: {
    name: "Bill of Sale",
    template: billOfSaleTemplate,
    questions: billOfSaleQuestions,
  },
  business_contract: {
    name: "Business Contract",
    template: businessContractTemplate,
    questions: businessContractQuestions,
  },
  child_travel_consent: {
    name: "Child Travel Consent",
    template: childTravelConsentTemplate,
    questions: childTravelConsentQuestions,
  },
  contractor_agreement: {
    name: "Independent Contractor Agreement",
    template: contractorTemplate,
    questions: contractorQuestions,
  },
  divorce_agreement: {
    name: "Divorce Agreement",
    template: divorceAgreementTemplate,
    questions: divorceAgreementQuestions,
  },
  eviction_notice: {
    name: "Eviction Notice",
    template: evictionNoticeTemplate,
    questions: evictionNoticeQuestions,
  },
  invoice: {
    name: "Invoice",
    template: invoiceTemplate,
    questions: invoiceQuestions,
  },
  lease_agreement: {
    name: "Lease Agreement",
    template: leaseTemplate,
    questions: leaseQuestions,
  },
  lease_termination: {
    name: "Lease Termination Agreement",
    template: leaseTerminationTemplate,
    questions: leaseTerminationQuestions,
  },
  nda: {
    name: "Non-Disclosure Agreement",
    template: ndaTemplate,
    questions: ndaQuestions,
  },
  power_of_attorney: {
    name: "Power of Attorney",
    template: powerOfAttorneyTemplate,
    questions: powerOfAttorneyQuestions,
  },
  property_management: {
    name: "Property Management Agreement",
    template: propertyManagementTemplate,
    questions: propertyManagementQuestions,
  },
  quitclaim_deed: {
    name: "Quitclaim Deed",
    template: quitclaimDeedTemplate,
    questions: quitclaimDeedQuestions,
  },
  resume: {
    name: "Resume",
    template: resumeTemplate,
    questions: resumeQuestions,
  },
  room_rental_agreement: {
    name: "Room Rental Agreement",
    template: roomRentalTemplate,
    questions: roomRentalQuestions,
  },
  transcript_request: {
    name: "Transcript Request",
    template: transcriptRequestTemplate,
    questions: transcriptRequestQuestions,
  },
};

Object.freeze(templateRegistry);

export default templateRegistry;