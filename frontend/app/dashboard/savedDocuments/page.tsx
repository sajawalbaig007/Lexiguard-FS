 import { Suspense } from "react";
import SavedDocuments from "@/components/SavedDocuments";

export default function SavedDocumentsPage() {
  return (
    <div className="bg-[#f6f2ed] min-h-screen">
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <SavedDocuments />
      </Suspense>
    </div>
  );
}