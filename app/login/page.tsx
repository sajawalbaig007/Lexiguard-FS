"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ArrowLeft } from "lucide-react";
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
      router.push("/dashboard");

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Google Login Error:", error.message);
        alert(`Login Failed ❌\n${error.message}`);
      } else {
        console.error("Google Login Error:", error);
        alert("Login Failed ❌");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative bg-[#FAF9F7] dark:bg-gray-900">

      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#B5A491] transition"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/logo2.png" alt="logo" width={42} height={42} />
          <h2 className="text-lg font-semibold text-[#B5A491] mt-2 tracking-wide">
            LEXIGUARD
          </h2>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border dark:border-gray-600 py-2.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm dark:text-gray-200"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="px-3 text-gray-400 dark:text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          <div className="flex items-center border rounded-full px-4 py-2.5 focus-within:border-[#B5A491] border-gray-300 dark:border-gray-600 dark:bg-gray-700">
            <Mail size={16} className="text-gray-400 dark:text-gray-300 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm dark:bg-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-400"
            />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2.5 focus-within:border-[#B5A491] border-gray-300 dark:border-gray-600 dark:bg-gray-700">
            <Lock size={16} className="text-gray-400 dark:text-gray-300 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-sm dark:bg-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-400"
            />
          </div>

          <button className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm hover:opacity-90 transition">
            Sign In
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-xs mt-5 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#B5A491] font-medium">
            Create one
          </Link>
        </p>

      </div>
    </section>
  );
}