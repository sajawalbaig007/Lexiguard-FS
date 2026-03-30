"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await auth.signOut(); // logs out user + removes token
      alert("You have been logged out ✅");
      router.push("/login"); // redirect to login
    } catch (error: any) {
      console.error("Logout Error:", error.message);
      alert("Logout Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[#B5A491] text-white px-4 py-2 rounded hover:opacity-90 transition"
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}