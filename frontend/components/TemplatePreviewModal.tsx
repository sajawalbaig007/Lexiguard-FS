 "use client";
import { useState } from "react";

type TemplatePreviewProps = {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
  onUseTemplate?: () => void;
};

export default function TemplatePreviewModal({
  title,
  description,
  image,
  onClose,
  onUseTemplate,
}: TemplatePreviewProps) {
  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[10000]">
        <div className="bg-white w-full h-full md:w-[80vw] md:h-[90vh] md:rounded-xl shadow-lg flex flex-col md:flex-row relative text-gray-900">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl md:text-xl font-bold z-10"
          >
            ×
          </button>

          {/* Image Preview */}
          <div className="w-full md:w-[90%] h-[40%] md:h-full bg-gray-100 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="shadow-lg md:rounded-md w-full h-full object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-6 md:py-0">
            <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-[#1F2A44]">
              {title}
            </h1>

            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
              {description}
            </p>

            <button
              onClick={() => onUseTemplate?.()}
              className="bg-[#2F4EA1] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg w-full md:w-[200px] hover:bg-[#243d82] transition"
            >
              Create document
            </button>
          </div>
        </div>
      </div>
    </>
  );
}