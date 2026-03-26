"use client";

import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const contractTypes = ["NDA", "Employment", "Loan", "Property"];

export default function AIContractPage() {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    discloser: "",
    recipient: "",
    purpose: "",
    notes: "",
    contractType: "NDA",
  });

  const [generatedContract, setGeneratedContract] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedContract("");

    const res = await fetch("/api/generateContract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setGeneratedContract(data.contract || "Failed to generate contract.");
    setLoading(false);
  };

  const handleDownload = () => {
    if (!generatedContract) return;
    const element = document.getElementById("contractText");
    if (!element) return;

    html2pdf().from(element).save(`${formData.contractType}_Contract.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Contract Generator</h1>

      <form className="space-y-4 mb-8">
        <div>
          <label className="block font-semibold mb-1">Contract Type</label>
          <select
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            {contractTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Effective Date</label>
          <div className="flex gap-2">
            <input
              name="day"
              placeholder="DD"
              value={formData.day}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-20"
            />
            <input
              name="month"
              placeholder="MM"
              value={formData.month}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-32"
            />
            <input
              name="year"
              placeholder="YYYY"
              value={formData.year}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-20"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Discloser</label>
          <input
            name="discloser"
            placeholder="Discloser Name"
            value={formData.discloser}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Recipient</label>
          <input
            name="recipient"
            placeholder="Recipient Name"
            value={formData.recipient}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Purpose</label>
          <input
            name="purpose"
            placeholder="Purpose (e.g., business relationship)"
            value={formData.purpose}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any extra instructions"
            value={formData.notes}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full h-20"
          />
        </div>
      </form>

      <button
        onClick={handleGenerate}
        className="bg-[#B5A491] text-white px-6 py-3 rounded hover:opacity-90 transition mb-4"
      >
        {loading ? "Generating..." : "Generate Contract"}
      </button>

      {generatedContract && (
        <>
          <div
            id="contractText"
            className="border p-6 rounded bg-white shadow max-h-[80vh] overflow-y-auto mt-6 whitespace-pre-line"
          >
            {generatedContract}
          </div>

          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-6 py-3 rounded mt-4 hover:opacity-90 transition"
          >
            Download PDF
          </button>
        </>
      )}
    </div>
  );
}