"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, User, AtSign, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

// ========== FULL PAGE OVERLAY SPINNER COMPONENT ==========
const FullPageSpinner = ({ message = "Please wait..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 min-w-[200px]">
        {/* Animated dots - rounded moving */}
        <div className="flex gap-2">
          <div 
            className="w-3 h-3 bg-[#B5A491] rounded-full animate-bounce" 
            style={{ animationDelay: "0s" }}
          />
          <div 
            className="w-3 h-3 bg-[#B5A491] rounded-full animate-bounce" 
            style={{ animationDelay: "0.15s" }}
          />
          <div 
            className="w-3 h-3 bg-[#B5A491] rounded-full animate-bounce" 
            style={{ animationDelay: "0.3s" }}
          />
        </div>
        
        {/* Loading text with pulse animation */}
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
};

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Clear messages after 3 seconds
  const clearMessages = () => {
    setTimeout(() => {
      setMessage("");
      setSuccessMessage("");
    }, 3000);
  };

  // ------------------ GOOGLE SIGNUP ------------------
  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      setMessage("");
      setSuccessMessage("");
      
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await axios.post("https://lexiguard-fs.onrender.com/api/auth/google", {
        fullName: user.displayName,
        email: user.email,
        googleId: user.uid,
        profilePic: user.photoURL,
      });

      setSuccessMessage("✅ Signup successful! Redirecting to login...");
      clearMessages();
      
      setTimeout(() => router.push("/login"), 800);
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      setMessage(error.response?.data?.message || "Google signup failed. Please try again.");
      clearMessages();
      setLoading(false);
    }
  };

  // ------------------ EMAIL/PASSWORD SIGNUP ------------------
  const handleSignup = async () => {
    // Validation
    if (!fullName.trim() || !username.trim() || !email.trim() || !password.trim()) {
      setMessage("All fields are required.");
      clearMessages();
      return;
    }
    
    if (fullName.trim().length < 2) {
      setMessage("Full name must be at least 2 characters.");
      clearMessages();
      return;
    }
    
    if (username.trim().length < 3) {
      setMessage("Username must be at least 3 characters.");
      clearMessages();
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      clearMessages();
      return;
    }
    
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      clearMessages();
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setSuccessMessage("");

      await axios.post(
        "https://lexiguard-fs.onrender.com/api/auth/register",
        {
          fullName: fullName.trim(),
          username: username.trim().toLowerCase(),
          email: email.trim().toLowerCase(),
          password,
        },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccessMessage("✅ Account created successfully! Redirecting to login...");
      clearMessages();
      
      setTimeout(() => router.push("/login"), 800);
      
    } catch (err: unknown) {
      setLoading(false);
      const error = err as AxiosError<{ message: string }>;
      
      if (error.code === "ECONNABORTED") {
        setMessage("Connection timeout. Please try again.");
      } else if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else if (error.request) {
        setMessage("Network error. Please check your connection.");
      } else {
        setMessage("Signup failed. Please try again.");
      }
      clearMessages();
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleSignup();
    }
  };

  return (
    <>
      {/* Full Page Overlay Spinner */}
      {loading && <FullPageSpinner message="Creating your account..." />}

      <section className="min-h-[100dvh] overflow-y-auto flex items-center justify-center px-4 py-6 bg-[#FAF9F7] dark:bg-[#FAF9F7]">
        
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-[#B5A491] transition z-10"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Back</span>
        </button>

        {/* Card - Same colors in both modes */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-7 border border-gray-100">
          
          {/* Logo - using logo1.png */}
          <div className="flex flex-col items-center mb-6">
            <Image src="/images/logo1.png" alt="logo" width={60} height={60} className="object-contain" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-full hover:bg-gray-50 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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

          {/* Inputs */}
          <div className="space-y-3">
            
            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 bg-white">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
                autoComplete="name"
                disabled={loading}
              />
            </div>

            {/* Username */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 bg-white">
              <AtSign size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
                autoComplete="username"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 bg-white">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
                autoComplete="email"
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 bg-white">
              <Lock size={16} className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
                autoComplete="new-password"
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {message && (
              <div className="flex items-center gap-2 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <p className="text-red-500 text-sm text-center">{message}</p>
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="flex items-center gap-2 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-green-600 text-sm text-center font-medium">
                  {successMessage}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSignup}
              disabled={loading}
              className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#a3907a] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs mt-5 text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-[#B5A491] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}