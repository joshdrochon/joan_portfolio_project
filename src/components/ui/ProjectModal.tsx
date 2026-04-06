"use client";

import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tags: string[];
}

export default function ProjectModal({ isOpen, onClose, title, tags }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-8"
      style={{ display: isOpen ? undefined : "none" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {isOpen && <style>{`body { overflow: hidden; }`}</style>}
      <div
        className="bg-white rounded-[6px] w-full max-w-[718px] relative"
        style={{ maxHeight: "calc(100vh - 96px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-black text-2xl leading-none transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono tracking-wide text-gray-400 border border-gray-200 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-handwritten text-[48px] tracking-[3px] text-black leading-none mb-8">
            {title}
          </h2>

          {/* Coming soon */}
          <p className="font-mono text-[14px] tracking-[3px] text-gray-400 text-center py-16">
            Case study coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
