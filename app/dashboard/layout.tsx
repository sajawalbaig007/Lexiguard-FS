"use client";

import Navbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-[#f6f2ed]">
      
      {/* Navbar */}
      <div className="h-[64px] flex-shrink-0 w-full">
        <Navbar />
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-[15%] md:w-auto">
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="w-[85%] md:flex-1 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
}