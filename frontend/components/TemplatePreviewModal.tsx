"use client";
import { useState } from "react";

type TemplatePreviewProps = {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
  onUseTemplate?: () => void; // ✅ connection to parent
};

export default function TemplatePreviewModal({
  title,
  description,
  image,
  onClose,
  onUseTemplate,
}: TemplatePreviewProps) {
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[10000]">
        <div className="bg-white w-[80vw] h-[90vh] rounded-xl shadow-lg flex relative text-gray-900">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
          >
            ×
          </button>

          {/* Left Document Preview */}
          <div className="w-[90%] h-full bg-gray-100 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="shadow-lg rounded-md w-full h-full object-contain" 
            />
          </div>

          {/* Right Side Content */}
          <div className="w-1/2 flex flex-col justify-center px-16">
            <h1 className="text-4xl font-semibold mb-4 text-[#1F2A44]">
              {title}
            </h1>

            <p className="text-gray-600 mb-8">
              {description}
            </p>

            <button
              onClick={() => setShowCreatePopup(true)}
              className="bg-[#2F4EA1] text-white px-6 py-3 rounded-lg w-[200px] hover:bg-[#243d82] transition"
            >
              Create document
            </button>
          </div>
        </div>
      </div>

      {/* Small Elegant Popup */}
      {showCreatePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-[11000]">
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-[380px] text-center animate-scaleIn">
            
            <h2 className="text-2xl font-semibold mb-2 text-[#1F2A44]">
              Create Document
            </h2>

            <p className="text-gray-500 mb-8">
              Choose how you want to create your document
            </p>

            <div className="flex gap-5 justify-center">
              
              {/* Manual Button */}
              <button
                onClick={() => {
                  onUseTemplate?.(); // ✅ triggers parent flow
                }}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 hover:scale-105 transition"
              >
                Manually
              </button>

              {/* AI Button */}
              <button className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-[#2F4EA1] to-[#4F6EDB] hover:scale-105 transition shadow-md">
                Use AI
              </button>

            </div>

            <button
              onClick={() => setShowCreatePopup(false)}
              className="mt-8 text-sm text-gray-400 hover:text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}