 "use client";

import { useState } from "react";
import TemplatesModal from "@/components/TemplatesModal";
import Link from "next/link";
import { FiFileText, FiSettings, FiTrash2, FiHome } from "react-icons/fi";

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // state for modal

  const menuItems = [
    { name: "Home", link: "/dashboard", icon: <FiHome size={20} /> },
    { name: "Saved Documents", link: "/dashboard/savedDocuments", icon: <FiFileText size={20} /> },
    { name: "Settings", link: "/dashboard/settings", icon: <FiSettings size={20} /> },
    { name: "Bin", link: "/dashboard/bin", icon: <FiTrash2 size={20} /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#F9FAFB] p-6 flex flex-col gap-6 overflow-y-auto">
      
      {/* Create Button */}
      <button
        className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
        onClick={() => setIsModalOpen(true)} // open modal
      >
        + Create Document
      </button>

      {/* Conditional Modal */}
      {isModalOpen && (
        <TemplatesModal onClose={() => setIsModalOpen(false)} />
      )}

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.link || "#"}
            className="group flex items-center gap-3 p-3 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-[2px] text-[#3D2F1D] font-medium transition-all duration-200"
          >
            <span className="text-[#3D2F1D] group-hover:scale-110 transition">
              {item.icon}
            </span>
            <span className="group-hover:text-[#B5A491] transition">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}