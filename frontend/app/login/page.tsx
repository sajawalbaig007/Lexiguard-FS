"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import axios from "axios";

// ========== FULL PAGE OVERLAY SPINNER COMPONENT ==========
const FullPageSpinner = ({ message = "Please wait..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white dark:bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 min-w-[200px]">
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

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // EMAIL/USERNAME LOGIN
  const handleLogin = async () => {
    if (!login.trim() || !password.trim()) {
      setErrorMessage("Please enter email/username and password");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const res = await axios.post(
        "https://lexiguard-fs.onrender.com/api/auth/login",
        {
          login: login.trim(),
          password: password.trim(),
        },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      } else {
        setErrorMessage("Invalid response from server");
        setLoading(false);
      }

    } catch (err: unknown) {
      setLoading(false);
      if (axios.isAxiosError(err)) {
        if (err.code === "ECONNABORTED") {
          setErrorMessage("Connection timeout. Please try again.");
        } else if (err.response) {
          setErrorMessage(
            err.response.data?.message || "Invalid email/username or password"
          );
        } else if (err.request) {
          setErrorMessage("Network error. Please check your connection.");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleLogin();
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await axios.post("https://lexiguard-fs.onrender.com/api/auth/google", {
        fullName: user.displayName,
        email: user.email,
        googleId: user.uid,
        profilePic: user.photoURL,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
      
    } catch (err: unknown) {
      setLoading(false);
      console.error("Google Login Error:", err);
      setErrorMessage("Google login failed. Please try again.");
    }
  };

  return (
    <>
      {/* Full Page Overlay Spinner */}
      {loading && <FullPageSpinner message="Please wait..." />}

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
            onClick={handleGoogleLogin}
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
            
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 bg-white">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Email or Username"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
                autoComplete="username"
                disabled={loading}
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 bg-white">
              <Lock size={16} className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
                autoComplete="current-password"
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="flex items-center gap-2 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <p className="text-red-500 text-sm text-center">{errorMessage}</p>
              </div>
            )}

            {/* Sign In Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#a3907a] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs mt-5 text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#B5A491] font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginPage;