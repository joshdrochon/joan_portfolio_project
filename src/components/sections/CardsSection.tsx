"use client";

import { useState } from "react";
import PolaroidCard from "@/components/ui/PolaroidCard";
import AboutMeModal from "@/components/ui/AboutMeModal";
import ContactFormModal from "@/components/ui/ContactFormModal";
import ResumeModal from "@/components/ui/ResumeModal";

function ClothespinSVG() {
  return (
    <svg width="16" height="68" viewBox="0 0 16 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="0" y="0" width="16" height="68" rx="4" fill="#C9A85C" />
      {/* Spring line */}
      <line x1="0" y1="34" x2="16" y2="34" stroke="#A0A0A0" strokeWidth="2.5" />
    </svg>
  );
}

export default function CardsSection() {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section className="relative w-full pt-2 pb-20">
        <div className="relative max-w-[1280px] mx-auto">
          {/* Rope */}
          <div
            className="absolute left-0 right-0 z-0"
            style={{
              top: 22,
              height: 7,
              background:
                "linear-gradient(180deg, #C4A060 0%, #7A5828 40%, #9B7238 70%, #6B4820 100%)",
              borderRadius: 4,
              boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          />

          {/* Cards row */}
          <div className="relative z-10 flex justify-between px-6">
            {/* Projects */}
            <div className="flex flex-col items-center">
              <div className="relative z-20 mb-[-18px]"><ClothespinSVG /></div>
              <a href="#projects">
                <PolaroidCard
                  imageUrl="https://picsum.photos/seed/projectscard/400/350"
                  label="Projects"
                  onClick={() => {}}
                />
              </a>
            </div>

            {/* About Me */}
            <div className="flex flex-col items-center">
              <div className="relative z-20 mb-[-18px]"><ClothespinSVG /></div>
              <PolaroidCard
                imageUrl="https://picsum.photos/seed/nature42/400/350"
                label="About Me"
                onClick={() => setAboutMeOpen(true)}
              />
            </div>

            {/* Contact — sticky note */}
            <div className="flex flex-col items-center">
              <div className="relative z-20 mb-[-18px]">
                <ClothespinSVG />
              </div>
              <div
                style={{
                  transform: "rotate(-5.55deg)",
                  transformOrigin: "center",
                  width: 288,
                }}
              >
                <div
                  className="border border-yellow-300 pt-3 px-3 pb-10
                             shadow-[3px_6px_18px_rgba(0,0,0,0.14)]"
                  style={{ background: "#FFFF99" }}
                >
                  <div
                    className="flex flex-col items-center justify-center gap-6"
                    style={{ height: 183 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/joan-miguel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sticky text-[36px] tracking-[7.2px] text-[#1a8dd4]
                                 hover:text-[#0d5fa0] hover:underline underline-offset-4
                                 transition-colors duration-200 cursor-pointer"
                    >
                      LinkedIn
                    </a>
                    <button
                      className="font-sticky text-[36px] tracking-[7.2px] text-[#1a8dd4]
                                 hover:text-[#0d5fa0] hover:underline underline-offset-4
                                 transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                      onClick={() => setContactFormOpen(true)}
                    >
                      Email
                    </button>
                  </div>
                  <p className="font-handwritten text-[32px] tracking-[6.4px] text-black text-center leading-none mt-1">
                    Contact
                  </p>
                </div>
              </div>
            </div>

            {/* Resume */}
            <div className="flex flex-col items-center">
              <div className="relative z-20 mb-[-18px]"><ClothespinSVG /></div>
              <PolaroidCard
                imageUrl="https://picsum.photos/seed/colorful99/400/350"
                label="Resume"
                onClick={() => setResumeOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMeModal isOpen={aboutMeOpen} onClose={() => setAboutMeOpen(false)} />
      <ContactFormModal isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
