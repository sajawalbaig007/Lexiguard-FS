"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      alert(`Login Success ✅\nWelcome ${user.displayName}`);

      // optional redirect
      router.push("/dashboard");

    } catch (error) {
      console.error("Google Login Error:", error.message);
      alert("Login Failed ❌");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAF9F7] px-4">
      
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg border">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/logo2.png" alt="logo" width={45} height={45} />
          <h2 className="text-lg font-bold text-[#B5A491] mt-2">
            LEXIGUARD
          </h2>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-2.5 rounded-full hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email Login */}
        <div className="space-y-3">
          <div className="flex items-center border rounded-full px-4 py-2.5">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2.5">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-sm"
            />
          </div>

          <button className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm hover:opacity-90">
            Sign In
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-xs mt-5">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#B5A491] font-medium">
            Create one
          </Link>
        </p>

      </div>
    </section>
  );
}