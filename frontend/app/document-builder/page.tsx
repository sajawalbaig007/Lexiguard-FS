import { Suspense } from "react";
import DocumentBuilderClient from "./DocumentBuilderClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <DocumentBuilderClient />
    </Suspense>
  );
}