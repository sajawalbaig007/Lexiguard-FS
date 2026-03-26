// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpV4JbgCo_kMaTEZiI0KiIos63_YtLonY",
  authDomain: "lexiguard-31ea9.firebaseapp.com",
  projectId: "lexiguard-31ea9",
  storageBucket: "lexiguard-31ea9.firebasestorage.app",
  messagingSenderId: "1059447838458",
  appId: "1:1059447838458:web:ec25abd6ffe20836cbdb43",
  measurementId: "G-57Q2WY9941"
};

export const app = initializeApp(firebaseConfig);

// Client-only Analytics
export let analytics;
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  }).catch(err => console.warn("Firebase Analytics load failed:", err));
}

// Auth + Google Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();