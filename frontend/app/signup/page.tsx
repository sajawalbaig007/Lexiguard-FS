// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Mail, Lock, User, AtSign, ArrowLeft } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, AuthError } from "firebase/auth";
// import { auth, provider } from "../../lib/firebase";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export default function SignupPage() {
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(""); // for errors & success

//   // GOOGLE SIGNUP
//   const handleGoogleSignup = async () => {
//     try {
//       setLoading(true);
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       await axios.post("http://localhost:5000/api/auth/google", {
//         fullName: user.displayName,
//         email: user.email,
//         googleId: user.uid,
//         profilePic: user.photoURL,
//       });

//       setMessage("Signup successful! Redirecting to login...");
//       setTimeout(() => router.push("/login"), 1500);
//     } catch (err) {
//       setMessage("Google signup failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // EMAIL/PASSWORD SIGNUP
//   const handleSignup = async () => {
//     // 1️⃣ Frontend validation
//     if (!fullName || !username || !email || !password) {
//       setMessage("All fields are required.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     if (password.length < 6) {
//       setMessage("Password must be at least 6 characters.");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 2️⃣ Firebase signup
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCredential.user, { displayName: fullName });

//       // 3️⃣ Backend signup
//       await axios.post("http://localhost:5000/api/auth/register", {
//         fullName,
//         username,
//         email,
//         password,
//       });

//       setMessage("Account created successfully! Redirecting...");
//       setTimeout(() => router.push("/login"), 1500);
//     } catch (err: unknown) {
//       // Firebase errors
//       if ((err as AuthError).code) {
//         const firebaseErr = err as AuthError;
//         switch (firebaseErr.code) {
//           case "auth/email-already-in-use":
//             setMessage("Email is already in use.");
//             break;
//           case "auth/invalid-email":
//             setMessage("Invalid email address.");
//             break;
//           case "auth/weak-password":
//             setMessage("Password is too weak (min 6 characters).");
//             break;
//           default:
//             setMessage(firebaseErr.message);
//         }
//       } 
//       // Backend errors
//       else if (axios.isAxiosError(err) && err.response?.data?.message) {
//         setMessage(err.response.data.message);
//       } else {
//         setMessage("Signup failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
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

//       <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <Image src="/images/logo2.png" alt="logo" width={42} height={42} />
//           <h2 className="text-lg font-semibold text-[#B5A491] mt-2">LEXIGUARD</h2>
//         </div>

//         <button
//           onClick={handleGoogleSignup}
//           className="w-full flex items-center justify-center gap-3 border py-2.5 rounded-full text-sm"
//         >
//           <FcGoogle size={20} />
//           Continue with Google
//         </button>

//         <div className="flex items-center my-5">
//           <div className="flex-1 h-px bg-gray-200" />
//           <span className="px-3 text-gray-400 text-sm">or</span>
//           <div className="flex-1 h-px bg-gray-200" />
//         </div>

//         <div className="space-y-3">
//           <div className="flex items-center border rounded-full px-4 py-2.5">
//             <User size={16} className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full outline-none text-sm bg-transparent"
//             />
//           </div>

//           <div className="flex items-center border rounded-full px-4 py-2.5">
//             <AtSign size={16} className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full outline-none text-sm bg-transparent"
//             />
//           </div>

//           <div className="flex items-center border rounded-full px-4 py-2.5">
//             <Mail size={16} className="text-gray-400 mr-2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full outline-none text-sm bg-transparent"
//             />
//           </div>

//           <div className="flex items-center border rounded-full px-4 py-2.5">
//             <Lock size={16} className="text-gray-400 mr-2" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full outline-none text-sm bg-transparent"
//             />
//           </div>

//           {/* Message shown on screen */}
//           {message && <p className="text-center text-sm text-red-500">{message}</p>}

//           <button
//             onClick={handleSignup}
//             disabled={loading}
//             className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm"
//           >
//             {loading ? "Creating..." : "Create Account"}
//           </button>
//         </div>

//         <p className="text-center text-xs mt-5">
//           Already have an account?{" "}
//           <Link href="/login" className="text-[#B5A491] font-medium">
//             Login
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }





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

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  // ------------------ GOOGLE SIGNUP ------------------
  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await axios.post("https://lexiguard-fs.onrender.com/api/auth/google", {
        fullName: user.displayName,
        email: user.email,
        googleId: user.uid,
        profilePic: user.photoURL,
      });

      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Google signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ------------------ SEND VERIFICATION CODE ------------------
  const handleSendCode = async () => {
    if (!email) {
      setMessage("Please enter your email first.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("https://lexiguard-fs.onrender.com/api/auth/send-code", { email });
      setCodeSent(true);
      setMessage("Verification code sent! It will expire in 5 minutes.");
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Failed to send verification code. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ------------------ VERIFY CODE & SIGNUP ------------------
  const handleVerifyAndSignup = async () => {
    if (!fullName || !username || !email || !password || !code) {
      setMessage("All fields including the code are required.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("https://lexiguard-fs.onrender.com/api/auth/verify-register", {
        fullName,
        username,
        email,
        password,
        code,
      });

      setMessage("Account created successfully! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
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

      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-lg">
        {/* cspell:ignore LEXIGUARD */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/logo2.png" alt="logo" width={42} height={42} />
          <h2 className="text-lg font-semibold text-[#B5A491] mt-2">LEXIGUARD</h2>
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border py-2.5 rounded-full text-sm"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="space-y-3">
          {/* Full Name */}
          <div className="flex items-center border rounded-full px-4 py-2.5">
            <User size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          {/* Username */}
          <div className="flex items-center border rounded-full px-4 py-2.5">
            <AtSign size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-full px-4 py-2.5">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
              disabled={codeSent}
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-full px-4 py-2.5">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          {/* Verification Code Input */}
          {codeSent && (
            <div className="flex items-center border rounded-full px-4 py-2.5">
              <Lock size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter Verification Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          )}

          {/* Message */}
          {message && <p className="text-center text-sm text-red-500">{message}</p>}

          {/* Button */}
          {!codeSent ? (
            <button
              onClick={handleSendCode}
              disabled={loading}
              className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm"
            >
              {loading ? "Sending..." : "Send Verification Code"}
            </button>
          ) : (
            <button
              onClick={handleVerifyAndSignup}
              disabled={loading}
              className="w-full bg-[#B5A491] text-white py-2.5 rounded-full text-sm"
            >
              {loading ? "Creating..." : "Verify & Create Account"}
            </button>
          )}
        </div>

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