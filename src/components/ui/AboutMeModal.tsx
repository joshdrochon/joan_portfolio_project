"use client";

import { useEffect } from "react";
import Image from "next/image";
import { about } from "@/data/about";

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


  return (
    <>
    {isOpen && <style>{`body { overflow: hidden; }`}</style>}
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-8"
      style={{ display: isOpen ? undefined : "none" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#f2f2f2] rounded-[6px] w-full max-w-[718px] overflow-y-auto relative"
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

        {/* Top placeholder image */}
        <div className="pt-[47px] flex justify-center">
          <div className="relative w-[584px] h-[328px] rounded-[4px] overflow-hidden">
            <Image src="/joanaboutme.jpeg" alt="About Joan" fill priority className="object-cover" style={{ objectPosition: 'center calc(20% - 25px)' }} />
          </div>
        </div>

        {/* Content */}
        <div className="px-[56px] pt-6 pb-6">
          {/* Greeting */}
          <p className="font-mono text-[16px] tracking-[4px] text-black text-center">
            {about.greeting}
          </p>

          {/* Subtitle */}
          <p className="font-mono font-semibold text-[16px] tracking-[3.2px] text-black text-center mt-4">
            {about.subtitle}
          </p>

          {/* Intro */}
          <p className="font-sans text-[14px] tracking-[2.8px] text-black text-justify mt-5 leading-[1.4]">
            {about.intro}
          </p>

          {/* Sections */}
          {about.sections.map((section) => (
            <div key={section.title} className="mt-4">
              <p className="font-mono font-bold text-[16px] tracking-[3.2px] text-black">
                {section.emoji} <span className="font-bold">{section.title}</span>
              </p>
              <p className="font-sans text-[14px] tracking-[2.8px] text-black text-justify mt-1 leading-[1.4]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
