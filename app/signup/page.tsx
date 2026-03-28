"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      alert(`Signup Success 🎉\nWelcome ${user.displayName}`);
      router.push("/dashboard");

    } catch (error) {
      console.error("Google Signup Error:", error.message);
      alert("Signup Failed ❌");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAF9F7] px-4 relative">

      {/* 🔙 Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-[#B5A491] transition"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="w-full max-w-sm bg-white p-7 rounded-2xl shadow-lg border border-gray-100">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/logo2.png" alt="logo" width={42} height={42} />
          <h2 className="text-lg font-semibold text-[#B5A491] mt-2 tracking-wide">
            LEXIGUARD
          </h2>
        </div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border py-2.5 rounded-full hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          <div className="flex items-center border rounded-full px-4 py-2.5 focus-within:border-[#B5A491]">
            <User size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2.5 focus-within:border-[#B5A491]">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2.5 focus-within:border-[#B5A491]">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-sm"
            />
          </div>

          <button className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm hover:opacity-90 transition">
            Create Account
          </button>
        </div>

        {/* Login */}
        <p className="text-center text-xs mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-[#B5A491] font-medium">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}