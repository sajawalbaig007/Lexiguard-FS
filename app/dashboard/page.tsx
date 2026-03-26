"use client";

import LogoutButton from "@/components/Logoutbutton";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F7] p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard!</h1>
      <LogoutButton />
    </div>
  );
}
export default Dashboard;