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
      await auth.signOut(); // Logs out the user
      alert("You have been logged out ✅");
      router.push("/login"); // Redirect to login page
    } catch (error: unknown) {
      // Use a type-safe check
      if (error instanceof Error) {
        console.error("Logout Error:", error.message);
        alert("Logout Failed ❌");
      } else {
        console.error("Logout Error:", error);
        alert("Logout Failed ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[#B5A491] text-white px-4 py-2 rounded hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}