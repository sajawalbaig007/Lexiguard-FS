"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthMiddlewareProps {
  children: React.ReactNode;
}

export default function AuthMiddleware({ children }: AuthMiddlewareProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    
    console.log("AuthMiddleware: Checking token...", token ? "TOKEN_FOUND" : "NO_TOKEN");
    
    if (!token) {
      // No token found, redirect to login
      console.log("AuthMiddleware: No token found, redirecting to login");
      router.push("/login");
      return;
    }

    // Token found, user authenticated
    console.log("AuthMiddleware: Token found, user authenticated");
    setIsAuthenticated(true);
  }, [router]);

  // If not authenticated, show loading and redirect
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7]">
        <div className="text-center">
          <div className="flex gap-2 justify-center mb-4">
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
          <p className="text-gray-600 text-sm">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If authenticated, render children
  return <>{children}</>;
}