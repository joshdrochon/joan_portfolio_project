"use client";

import { useEffect } from "react";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white max-w-2xl w-full p-10 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-400 hover:text-black text-2xl leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="font-handwritten text-[64px] tracking-[6px] text-black leading-none mb-8">
          About Me
        </h2>

        <div className="space-y-5">
          <div className="bg-gray-50 border border-dashed border-gray-200 p-5">
            <p className="font-mono text-sm text-gray-400">
              [ Placeholder — Bio content coming soon ]
            </p>
            <p className="font-mono text-xs text-gray-300 mt-2">
              This section will introduce Joan: her background, how she got into UX, and what drives her work.
            </p>
          </div>

          <div className="bg-gray-50 border border-dashed border-gray-200 p-5">
            <p className="font-mono text-sm text-gray-400">
              [ Placeholder — Design philosophy ]
            </p>
            <p className="font-mono text-xs text-gray-300 mt-2">
              Joan&apos;s approach to design — research-first, user-centered, and iterative.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["UX Research", "Interaction Design", "Prototyping"].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 border border-dashed border-gray-200 p-4 text-center"
              >
                <p className="font-mono text-xs text-gray-400">[ {skill} ]</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
