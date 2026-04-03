import contractorTemplate from "../templates/contractorTemplate.js";
import ndaTemplate from "../templates/ndaTemplate.js";
import employmentTemplate from "../templates/employmentTemplate.js";
import leaseTemplate from "../templates/leaseTemplate.js"; // new template

export const generateContract = (req, res) => {
  try {
    const { contractType } = req.body;
    let contract = "";

    switch (contractType.toLowerCase()) {
      case "independent contractor agreement":
        contract = contractorTemplate(req.body);
        break;

      case "nda":
      case "non disclosure agreement":
        contract = ndaTemplate(req.body);
        break;

      case "employment contract":
        contract = employmentTemplate(req.body);
        break;

      case "lease/rental agreement":
        contract = leaseTemplate(req.body);
        break;

      default:
        return res.status(400).json({ success: false, error: "Invalid contract type" });
    }

    res.json({ success: true, contract });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};