"use client";

import { useState } from "react";
import PolaroidCard from "@/components/ui/PolaroidCard";
import AboutMeModal from "@/components/ui/AboutMeModal";
import ContactFormModal from "@/components/ui/ContactFormModal";

function ClothespinSVG() {
  return (
    <svg width="28" height="72" viewBox="0 0 28 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="9" y="0" width="10" height="42" rx="5" fill="#C8A870" />
      <rect x="11" y="0" width="6" height="42" rx="3" fill="#B89258" />
      {/* Spring ring */}
      <ellipse cx="14" cy="40" rx="9" ry="5" fill="#A07840" />
      <ellipse cx="14" cy="40" rx="6" ry="3" fill="#C8A870" />
      {/* Left leg */}
      <rect x="1" y="38" width="11" height="34" rx="5" fill="#C8A870" />
      {/* Right leg */}
      <rect x="16" y="38" width="11" height="34" rx="5" fill="#C8A870" />
      {/* Gap between legs */}
      <rect x="10" y="44" width="8" height="28" fill="white" />
      {/* Highlight */}
      <rect x="12" y="2" width="3" height="20" rx="1.5" fill="#E4C090" opacity="0.7" />
    </svg>
  );
}

export default function CardsSection() {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Joan_Miguel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <ClothespinSVG />
              <PolaroidCard
                imageUrl="https://picsum.photos/seed/projectscard/400/350"
                label="Projects"
                onClick={scrollToProjects}
              />
            </div>

            {/* About Me */}
            <div className="flex flex-col items-center">
              <ClothespinSVG />
              <PolaroidCard
                imageUrl="https://picsum.photos/seed/aboutmecard/400/350"
                label="About Me"
                onClick={() => setAboutMeOpen(true)}
              />
            </div>

            {/* Contact — sticky note */}
            <div className="flex flex-col items-center">
              <div className="relative z-10">
                <ClothespinSVG />
              </div>
              <div
                style={{
                  transform: "rotate(-5.55deg)",
                  transformOrigin: "top center",
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
                      href="https://www.linkedin.com/in/josh-rochon/"
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
              <ClothespinSVG />
              <PolaroidCard
                imageUrl="https://picsum.photos/seed/resumecard/400/350"
                label="Resume"
                onClick={downloadResume}
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMeModal isOpen={aboutMeOpen} onClose={() => setAboutMeOpen(false)} />
      <ContactFormModal isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </>
  );
}
