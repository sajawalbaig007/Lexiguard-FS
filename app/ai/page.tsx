"use client";

import React, { useState } from "react";
import { contractTemplates } from "@/data/contracts";
import { useRouter } from "next/navigation";

type ContractType = keyof typeof contractTemplates;

const contractFields: Record<
  ContractType,
  { name: string; placeholder: string; type?: string; label?: string }[]
> = {
  Employment: [
    { name: "date", placeholder: "Contract Date", type: "date", label: "Contract Date" },
    { name: "companyName", placeholder: "Company Name", label: "Company Name" },
    { name: "employeeName", placeholder: "Employee Name", label: "Employee Name" },
    { name: "position", placeholder: "Position", label: "Position" },
    { name: "startDate", placeholder: "Start Date", type: "date", label: "Employment Start Date" },
    { name: "probationMonths", placeholder: "Probation Period (Months)", type: "number", label: "Probation Period" },
    { name: "workLocation", placeholder: "Work Location", label: "Work Location" },
    { name: "salary", placeholder: "Salary (£)", type: "number", label: "Salary" },
    { name: "paymentFrequency", placeholder: "Payment Frequency (e.g. Monthly)", label: "Payment Frequency" },
    { name: "holidayDays", placeholder: "Holiday Days", type: "number", label: "Holiday Days" },
  ],
  NDA: [
    { name: "date", placeholder: "Contract Date", type: "date", label: "Contract Date" },
    { name: "discloser", placeholder: "Discloser Name", label: "Discloser" },
    { name: "recipient", placeholder: "Recipient Name", label: "Recipient" },
    { name: "purpose", placeholder: "Purpose", label: "Purpose" },
    { name: "ndaTerm", placeholder: "Term (Years)", type: "number", label: "Term (Years)" },
  ],
  Loan: [
    { name: "date", placeholder: "Contract Date", type: "date", label: "Contract Date" },
    { name: "lender", placeholder: "Lender Name", label: "Lender" },
    { name: "borrower", placeholder: "Borrower Name", label: "Borrower" },
    { name: "loanAmount", placeholder: "Loan Amount (£)", type: "number", label: "Loan Amount" },
    { name: "repaymentStart", placeholder: "Repayment Start Date", type: "date", label: "Repayment Start Date" },
    { name: "repaymentFrequency", placeholder: "Repayment Frequency", label: "Repayment Frequency" },
    { name: "interestRate", placeholder: "Interest Rate (%)", type: "number", label: "Interest Rate" },
    { name: "lateFee", placeholder: "Late Payment Fee (£)", type: "number", label: "Late Fee" },
  ],
  Service: [
    { name: "date", placeholder: "Contract Date", type: "date", label: "Contract Date" },
    { name: "provider", placeholder: "Service Provider Name", label: "Service Provider" },
    { name: "client", placeholder: "Client Name", label: "Client" },
    { name: "services", placeholder: "Services Description", label: "Services Description" },
    { name: "serviceFee", placeholder: "Service Fee (£)", type: "number", label: "Service Fee" },
    { name: "startDate", placeholder: "Start Date", type: "date", label: "Service Start Date" },
    { name: "endDate", placeholder: "End Date", type: "date", label: "Service End Date" },
  ],
  Separation: [
    { name: "date", placeholder: "Contract Date", type: "date", label: "Contract Date" },
    { name: "employer", placeholder: "Employer Name", label: "Employer" },
    { name: "employee", placeholder: "Employee Name", label: "Employee" },
    { name: "reason", placeholder: "Reason for Separation", label: "Reason for Separation" },
    { name: "noticePeriod", placeholder: "Notice Period", label: "Notice Period" },
    { name: "finalPay", placeholder: "Final Pay (£)", type: "number", label: "Final Pay" },
  ],
};

export default function Page() {
  const [type, setType] = useState<ContractType>("Employment");
  const [data, setData] = useState<Record<string, string>>({});
  const [contract, setContract] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generate = () => {
    let template = contractTemplates[type];

    contractFields[type].forEach((field) => {
      template = template.replaceAll(`{{${field.name}}}`, data[field.name] || "");
    });

    // Bold top fields
    const topFields = ["date", "companyName", "employeeName", "lender", "borrower", "provider", "client", "employer"];
    topFields.forEach((key) => {
      if (data[key]) {
        const regex = new RegExp(`(${data[key]})`, "g");
        template = template.replace(regex, `<strong style="font-size:20px;">$1</strong>`);
      }
    });

    setContract(template);
    setStep(2);
  };

  const downloadPDF = async () => {
    setLoading(true);
    const element = document.getElementById("contract");
    const html2pdf = (await import("html2pdf.js")).default;

    if (!element) return;

    html2pdf()
      .set({
        margin: 10,
        filename: `${type}_Contract.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4" },
      })
      .from(element)
      .save()
      .finally(() => setLoading(false));
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setContract("");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">LexiGuard Contracts ⚖️</h1>

      {/* Step 1 */}
      {step === 1 && (
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative">
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 text-gray-600 dark:text-gray-300 hover:text-[#B5A491] flex items-center gap-1"
          >
            ← Back
          </button>

          <span className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-sm">Step 1 / 2</span>

          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Generate Your Contract</h2>

          <select
            className="border p-3 rounded w-full mb-6 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            value={type}
            onChange={(e) => { setType(e.target.value as ContractType); setData({}); }}
          >
            {Object.keys(contractTemplates).map((ct) => (
              <option key={ct}>{ct}</option>
            ))}
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contractFields[type].map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">{field.label}</label>
                {["services", "purpose", "reason"].includes(field.name) ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    value={data[field.name] || ""}
                    onChange={handleChange}
                    className="border p-3 rounded h-24 resize-none col-span-1 md:col-span-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-400"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={data[field.name] || ""}
                    onChange={handleChange}
                    className="border p-3 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-400"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={generate}
            className="mt-6 w-full bg-black dark:bg-[#B5A491] text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Generate Contract 🚀
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between mb-4">
            <button
              onClick={handleBack}
              className="text-sm text-gray-600 dark:text-gray-300 hover:underline flex items-center gap-1"
            >
              ← Back
            </button>
            <button
              onClick={downloadPDF}
              className="bg-green-600 text-white px-5 py-2 rounded hover:opacity-90"
            >
              {loading ? "Downloading..." : "Download PDF"}
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 border border-gray-300 dark:border-gray-700 max-w-3xl mx-auto">
            <div
              id="contract"
              className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: contract }}
            />
          </div>
        </div>
      )}
    </div>
  );
}