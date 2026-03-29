"use client";

import React, { useState } from "react";
import { contractTemplates } from "@/data/contracts";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";

type ContractType = keyof typeof contractTemplates;

// ✅ Dynamic Fields (MATCH TEMPLATE)
const contractFields: Record<
  ContractType,
  { name: string; label: string; type?: string }[]
> = {
  Employment: [
    { name: "date", label: "Date", type: "date" },
    { name: "companyName", label: "Company Name" },
    { name: "employeeName", label: "Employee Name" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "position", label: "Position" },
    { name: "salary", label: "Salary", type: "number" },
    { name: "paymentFrequency", label: "Payment Frequency" },
    { name: "holidayDays", label: "Holiday Days", type: "number" },
    { name: "probationMonths", label: "Probation (Months)", type: "number" },
  ],

  NDA: [
    { name: "date", label: "Date", type: "date" },
    { name: "discloser", label: "Discloser" },
    { name: "recipient", label: "Recipient" },
    { name: "purpose", label: "Purpose" },
    { name: "ndaTerm", label: "Term (Years)", type: "number" },
  ],

  Loan: [
    { name: "date", label: "Date", type: "date" },
    { name: "lender", label: "Lender" },
    { name: "borrower", label: "Borrower" },
    { name: "loanAmount", label: "Loan Amount", type: "number" },
    { name: "repaymentStart", label: "Repayment Start", type: "date" },
    { name: "repaymentFrequency", label: "Repayment Frequency" },
    { name: "interestRate", label: "Interest Rate (%)", type: "number" },
  ],

  Service: [
    { name: "date", label: "Date", type: "date" },
    { name: "provider", label: "Service Provider" },
    { name: "client", label: "Client" },
    { name: "services", label: "Services" },
    { name: "payment", label: "Payment", type: "number" },
  ],

  Separation: [
    { name: "date", label: "Date", type: "date" },
    { name: "employee", label: "Employee" },
    { name: "employer", label: "Employer" },
    { name: "separationDate", label: "Separation Date", type: "date" },
    { name: "finalPayment", label: "Final Payment", type: "number" },
    { name: "nonCompeteMonths", label: "Non-compete Months", type: "number" },
  ],
};

export default function Page() {
  const [type, setType] = useState<ContractType>("Employment");
  const [data, setData] = useState<Record<string, string>>({});
  const [contract, setContract] = useState("");
  const [step, setStep] = useState(1);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // ✅ Generate Contract
  const generate = () => {
    let template = contractTemplates[type];

    Object.keys(data).forEach((key) => {
      template = template.replaceAll(`{{${key}}}`, data[key] || "");
    });

    setContract(template);
    setStep(2);
  };

  // ✅ Download PDF (KEEP DESIGN)
  const downloadContract = async () => {
    const element = document.getElementById("contract-preview");
    if (!element) return;

    const pdf = new jsPDF("p", "pt", "a4");

    await pdf.html(element, {
      x: 20,
      y: 20,
      width: 555,
      windowWidth: 900,
    });

    pdf.save(`${type}_Contract.pdf`);
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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        LexiGuard Contracts ⚖️
      </h1>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
          <button onClick={handleBack}>← Back</button>

          <h2 className="text-2xl text-center mb-6">
            Generate Your Contract
          </h2>

          {/* Contract Type */}
          <select
            className="border p-3 rounded w-full mb-6"
            value={type}
            onChange={(e) => {
              setType(e.target.value as ContractType);
              setData({});
            }}
          >
            {Object.keys(contractTemplates).map((ct) => (
              <option key={ct}>{ct}</option>
            ))}
          </select>

          {/* Dynamic Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contractFields[type].map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  {field.label}
                </label>

                {["services", "purpose"].includes(field.name) ? (
                  <textarea
                    name={field.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={generate}
            className="mt-6 w-full bg-black text-white py-3 rounded"
          >
            Generate Contract 🚀
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 mb-4">
            <button onClick={handleBack}>← Back</button>

            <button
              onClick={downloadContract}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Download PDF
            </button>
          </div>

          {/* CONTRACT PREVIEW */}
          <div className="flex justify-center">
            <div
              id="contract-preview"
              className="bg-white p-10 shadow-lg"
              style={{
                width: "210mm",
                minHeight: "297mm",
              }}
              dangerouslySetInnerHTML={{ __html: contract }}
            />
          </div>
        </div>
      )}
    </div>
  );
}