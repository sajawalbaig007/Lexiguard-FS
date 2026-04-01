"use client";

import { motion, AnimatePresence } from "framer-motion";
import PricingSection from "./Pricing";

export default function PricingModal({ open, onClose }: any) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Blur */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed left-1/2 top-0 -translate-x-1/2
                       w-[95%] md:w-[75%] lg:w-[65%] 
                       h-[60vh] 
                       bg-white rounded-b-2xl z-[100] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b sticky top-0 bg-white z-10">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Close
              </button>
            </div>

            {/* Pricing Section */}
            <div className="overflow-y-auto h-full pb-10">
              <PricingSection />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}