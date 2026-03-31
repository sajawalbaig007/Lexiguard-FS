// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Mail, Lock, ArrowLeft } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../../lib/firebase";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export default function LoginPage() {
//   const router = useRouter();

//   const [login, setLogin] = useState(""); // email or username
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // error message display

//   // EMAIL/USERNAME LOGIN
//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", { login, password });
//       localStorage.setItem("token", res.data.token);
//       setErrorMessage(""); // clear previous errors
//       router.push("/dashboard");
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err) && err.response) {
//         setErrorMessage(err.response.data?.message || "Something went wrong. Please try again.");
//       } else {
//         setErrorMessage("Something went wrong. Please try again.");
//       }
//     }
//   };

//   // GOOGLE LOGIN
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       await axios.post("http://localhost:5000/api/auth/google", {
//         fullName: user.displayName,
//         email: user.email,
//         googleId: user.uid,
//         profilePic: user.photoURL,
//       });

//       router.push("/dashboard");
//     } catch (err: unknown) {
//       console.error("Google Login Error:", err);
//       setErrorMessage("Google login failed. Please try again.");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 bg-[#FAF9F7] dark:bg-gray-900">
//       <button
//         onClick={() => router.push("/")}
//         className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-[#B5A491]"
//       >
//         <ArrowLeft size={20} />
//         Back
//       </button>

//       <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
//         <div className="flex flex-col items-center mb-6">
//           <Image src="/images/logo2.png" alt="logo" width={42} height={42} />
//           <h2 className="text-lg font-semibold text-[#B5A491] mt-2 tracking-wide">
//             {/* cSpell:ignore LEXIGUARD */}
//             LEXIGUARD
//           </h2>
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-3 border dark:border-gray-600 py-2.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm dark:text-gray-200"
//         >
//           <FcGoogle size={20} />
//           Continue with Google
//         </button>

//         <div className="flex items-center my-5">
//           <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
//           <span className="px-3 text-gray-400 text-sm">or</span>
//           <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
//         </div>

//         <div className="space-y-3">
//           <div className="flex items-center border rounded-full px-4 py-2.5 border-gray-300 dark:border-gray-600 dark:bg-gray-700">
//             <Mail size={16} className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Email or Username"
//               value={login}
//               onChange={(e) => setLogin(e.target.value)}
//               className="w-full outline-none text-sm bg-transparent"
//             />
//           </div>

//           <div className="flex items-center border rounded-full px-4 py-2.5 border-gray-300 dark:border-gray-600 dark:bg-gray-700">
//             <Lock size={16} className="text-gray-400 mr-2" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full outline-none text-sm bg-transparent"
//             />
//           </div>

//           {/* Error message display */}
//           {errorMessage && (
//             <p className="text-red-500 text-sm text-center mb-2">{errorMessage}</p>
//           )}

//           <button
//             onClick={handleLogin}
//             className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm hover:opacity-90 transition"
//           >
//             Sign In
//           </button>
//         </div>

//         <p className="text-center text-xs mt-5 dark:text-gray-300">
//           Don’t have an account?{" "}
//           <Link href="/signup" className="text-[#B5A491] font-medium">
//             Create one
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }





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

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [login, setLogin] = useState(""); // email or username
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // error message display

  // EMAIL/USERNAME LOGIN
  const handleLogin = async () => {
    try {
      const res = await axios.post("https://lexiguard-fs.onrender.com/api/auth/login", {
        login: login.trim(),
        password: password.trim(),
      });
      localStorage.setItem("token", res.data.token);
      setErrorMessage(""); // clear previous errors
      router.push("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setErrorMessage(err.response.data?.message || "Something went wrong. Please try again.");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await axios.post("https://lexiguard-fs.onrender.com/api/auth/google", {
        fullName: user.displayName,
        email: user.email,
        googleId: user.uid,
        profilePic: user.photoURL,
      });

      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Google Login Error:", err);
      setErrorMessage("Google login failed. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#FAF9F7] dark:bg-gray-900">
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-[#B5A491]"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/logo2.png" alt="logo" width={42} height={42} />
          <h2 className="text-lg font-semibold text-[#B5A491] mt-2 tracking-wide">
            LEXIGUARD
          </h2>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border dark:border-gray-600 py-2.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm dark:text-gray-200"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center border rounded-full px-4 py-2.5 border-gray-300 dark:border-gray-600 dark:bg-gray-700">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Email or Username"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2.5 border-gray-300 dark:border-gray-600 dark:bg-gray-700">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center mb-2">{errorMessage}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm hover:opacity-90 transition"
          >
            Sign In
          </button>
        </div>

        <p className="text-center text-xs mt-5 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#B5A491] font-medium">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;