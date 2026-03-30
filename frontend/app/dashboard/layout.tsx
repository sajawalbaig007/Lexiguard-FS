 "use client";

import Navbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar"; 
import SavedDocuments from "@/components/SavedDocuments";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-[#f6f2ed]">
      
      {/* ✅ Navbar (Full Width - fixed height) */}
      <div className="h-[64px] shrink-0">
        <Navbar />
      </div>

      {/* ✅ Bottom Section */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* ✅ Sidebar (Fixed / Sticky) */}
        <div className="w-[17%] min-w-[240px] bg-white border-r">
          <div className="h-full sticky top-0 overflow-y-hidden">
            <Sidebar />
          </div>
        </div>

        {/* ✅ Main Content (Scrollable ONLY) */}
        <div className="w-[83%] h-full overflow-y-auto p-6">
          {children}
        </div>
 

  
      </div>
    </div>
  );
}