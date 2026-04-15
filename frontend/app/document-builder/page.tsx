import { Suspense } from "react";
import DocumentBuilderClient from "./DocumentBuilderClient";
import AuthMiddleware from "@/components/AuthMiddleware";

export default function Page() {
  return (
    <AuthMiddleware>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <DocumentBuilderClient />
      </Suspense>
    </AuthMiddleware>
  );
}