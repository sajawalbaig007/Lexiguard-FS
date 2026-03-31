"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login"); // redirect if no token
      } else {
        // set state asynchronously to avoid synchronous setState in effect
        setTimeout(() => setLoading(false), 0);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
        <p className="text-gray-400">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">

      {/* 🔝 Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-sm border-b border-gray-700">
        <h1 className="text-xl font-bold text-[#B5A491]">
          LexiGuard Dashboard ⚖️
        </h1>
      </div>

      {/* 📊 Content */}
      <div className="p-6 max-w-6xl mx-auto">

        {/* 👋 Welcome */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md mb-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Welcome back 👋
          </h2>
          <p className="text-gray-400">
            Manage your contracts and legal documents easily.
          </p>
        </div>

        {/* ⚡ Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Generate Contract */}
          <div
            onClick={() => router.push("/contracts")}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition border border-gray-700 hover:border-[#B5A491]"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#B5A491]">
              📄 Generate Contract
            </h3>
            <p className="text-gray-400 text-sm">
              Create new legal contracts easily.
            </p>
          </div>

          {/* View Contracts */}
          <div
            onClick={() => alert("Coming Soon 🚀")}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition border border-gray-700 hover:border-[#B5A491]"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#B5A491]">
              📁 My Contracts
            </h3>
            <p className="text-gray-400 text-sm">
              View your saved contracts.
            </p>
          </div>

          {/* Profile */}
          <div
            onClick={() => alert("Profile Page Coming Soon 👤")}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition border border-gray-700 hover:border-[#B5A491]"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#B5A491]">
              👤 Profile
            </h3>
            <p className="text-gray-400 text-sm">
              Manage your account settings.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}