"use client";

import { useState, useEffect } from "react";
import { getUserAgreements, deleteAgreement, getAgreement } from "../lib/agreementService";

interface Agreement {
  _id: string;
  title: string;
  templateName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function UserAgreements() {
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAgreements();
  }, []);

  const loadAgreements = async () => {
    try {
      setLoading(true);
      const userAgreements = await getUserAgreements();
      setAgreements(userAgreements);
      setError("");
    } catch (error) {
      console.error("Error loading agreements:", error);
      setError("Failed to load agreements. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this agreement?")) {
      return;
    }

    try {
      await deleteAgreement(id);
      setAgreements(agreements.filter(agreement => agreement._id !== id));
    } catch (error) {
      console.error("Error deleting agreement:", error);
      alert("Failed to delete agreement. Please try again.");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'saved':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={loadAgreements}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (agreements.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-4">No agreements found. Create your first agreement!</div>
        <button
          onClick={() => window.location.href = '/ai-builder'}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Agreement
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Agreements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agreements.map((agreement) => (
          <div key={agreement._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{agreement.title}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{agreement.templateName}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agreement.status)}`}>
                  {agreement.status}
                </span>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 mb-4">
              <div>Created: {formatDate(agreement.createdAt)}</div>
              <div>Updated: {formatDate(agreement.updatedAt)}</div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => window.location.href = `/ai-builder?agreementId=${agreement._id}`}
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(agreement._id)}
                className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
