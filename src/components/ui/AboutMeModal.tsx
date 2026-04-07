"use client";

import React, { useEffect } from "react";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 md:px-8"
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
          className="absolute top-5 right-6 text-gray-400 hover:text-black text-2xl leading-none transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Top image */}
        <div className="pt-6 md:pt-[47px] px-4 md:px-[56px]">
          <div className="relative w-full h-[200px] md:h-[328px] rounded-[4px] overflow-hidden">
            <Image src="/joanaboutme.jpeg" alt="About Joan" fill priority className="object-cover" style={{ objectPosition: 'center calc(20% - 25px)' }} />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 md:px-[56px] pt-6 pb-10">
          {/* Greeting */}
          <p className="font-handwritten text-[24px] tracking-[3px] text-black text-center leading-none">
            {about.greeting}
          </p>

          {/* Subtitle */}
          <div className="flex justify-between mt-4">
            {about.subtitle.split(" | ").map((item, i, arr) => (
              <React.Fragment key={item}>
                <span className="font-mono font-semibold text-[16px] tracking-[3.2px] text-black">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span className="font-mono text-[16px] text-black">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Intro */}
          <p className="font-sans text-[16px] text-gray-700 leading-relaxed mt-5">
            {about.intro}
          </p>

          {/* Sections */}
          {about.sections.map((section) => (
            <div key={section.title} className="mt-4">
              <p className="font-mono font-bold text-[16px] tracking-[3.2px] text-black">
                {section.title}
              </p>
              <p className="font-sans text-[16px] text-gray-700 leading-relaxed mt-1">
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
