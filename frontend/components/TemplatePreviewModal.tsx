 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type TemplatePreviewProps = {
  id: string; // for AI flow
  title: string; // for Manual flow
  description: string;
  image: string;
  onClose: () => void;
};

export default function TemplatePreviewModal({
  id,
  title,
  description,
  image,
  onClose,
}: TemplatePreviewProps) {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Preview Modal */}
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[10000]">
        <div className="bg-white w-full h-full md:w-[80vw] md:h-[90vh] md:rounded-xl shadow-lg flex flex-col md:flex-row relative text-gray-900">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10"
          >
            ×
          </button>

          {/* Image */}
          <div className="w-full md:w-[90%] h-[40%] md:h-full bg-gray-100 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="shadow-lg md:rounded-md w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-6 md:py-0">
            <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-[#1F2A44]">
              {title}
            </h1>

            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
              {description}
            </p>

            <button
              onClick={() => setShowCreatePopup(true)}
              className="bg-[#2F4EA1] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg w-full md:w-[200px] hover:bg-[#243d82] transition"
            >
              Create document
            </button>
          </div>
        </div>
      </div>

      {/* Create Document Popup */}
      {showCreatePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-[11000]">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 w-[90%] md:w-[380px] text-center">
            
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#1F2A44]">
              Create Document
            </h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
              Choose how you want to create your document
            </p>

            <div className="flex gap-3 md:gap-5 justify-center">
              
              {/* ✍️ Manual Button */}
              <button
                onClick={() => {
                  setShowCreatePopup(false);
                  onClose();

                  // ✅ PASS TITLE (important for your manual flow)
                  router.push(
                    `/document-builder?template=${encodeURIComponent(title)}`
                  );
                }}
                className="px-4 py-2 md:px-6 md:py-3 rounded-xl border border-gray-300 text-gray-700 text-sm md:text-base font-medium hover:bg-gray-100 transition"
              >
                ✍️ Manually
              </button>

              {/* 🤖 AI Button */}
              <button
                onClick={() => {
                  setShowCreatePopup(false);
                  onClose();

                  // ✅ PASS ID (important for AI flow)
                  router.push(`/ai-builder?template=${id}`);
                }}
                className="px-4 py-2 md:px-6 md:py-3 rounded-xl text-white text-sm md:text-base font-medium bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] transition shadow-md"
              >
                🤖 Use AI
              </button>
            </div>

            {/* Cancel */}
            <button
              onClick={() => setShowCreatePopup(false)}
              className="mt-6 md:mt-8 text-xs md:text-sm text-gray-400 hover:text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}