"use client";

import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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
          className="bg-white rounded-[6px] w-full max-w-[900px] relative flex flex-col"
          style={{ maxHeight: "calc(100vh - 96px)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-4 shrink-0">
            <a
              href="/resume.pdf"
              download="Joan_Miguel_Resume.pdf"
              className="text-xs font-mono tracking-widest text-gray-600 border border-gray-400 rounded-full px-3 py-1 hover:bg-black hover:border-black hover:text-white transition-colors duration-200"
            >
              Save Copy
            </a>
            <button
              onClick={onClose}
              className="absolute top-5 right-6 text-gray-400 hover:text-black text-2xl leading-none transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Resume document */}
          <div className="overflow-y-auto px-6 pb-6">
            <div className="bg-white rounded-[4px] px-14 py-12 text-black shadow-2xl">

              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="font-caveat text-[52px] leading-none text-black font-bold">Joan Miguel</h1>
                  <p className="mt-1">
                    <span className="font-cormorant italic text-[15px] font-bold text-[#C9A85C]">POSITION</span>
                    <span className="font-roboto italic text-[14px] text-gray-600"> / UX/UI Developer</span>
                  </p>
                </div>
                <div className="text-right font-merriweather text-[13px] text-gray-600 leading-relaxed font-light">
                  <p>Seattle, WA</p>
                  <p>(206) 637-0438</p>
                  <p>joanaberionmiguel@gmail.com</p>
                </div>
              </div>

              {/* Two-column body */}
              <div className="flex gap-10">

                {/* Left column */}
                <div className="flex-[3] min-w-0">

                  {/* EXPERIENCE */}
                  <h2 className="font-cormorant italic font-bold text-[18px] text-[#C9A85C] tracking-wider mb-3">EXPERIENCE</h2>

                  <p className="font-mono italic text-[13px] mb-2">Pool, group vacationing App — UX/UI Designer</p>
                  <div className="pl-6 space-y-2 mb-4">
                    <p className="font-mono text-[12px] leading-relaxed">
                      <span className="font-bold">Strategy</span> | Uncovered key user insights by conducting usability testing with 5 participants, directly influencing feature prioritization and design strategy
                    </p>
                    <p className="font-mono text-[12px] leading-relaxed">
                      <span className="font-bold">Leadership</span> | Led end-to-end UX for a mobile group-travel app, prioritizing inclusive design and accessibility standards to improve engagement and financial accountability
                    </p>
                  </div>

                  <p className="font-mono italic text-[13px] mb-2">ASU, Senior Project — Student</p>
                  <div className="pl-6 mb-6">
                    <p className="font-mono text-[12px] leading-relaxed">
                      Orchestrated a game-day marketing initiative for Wing Stop, enhancing brand visibility during key sporting events
                    </p>
                  </div>

                  {/* WORK */}
                  <h2 className="font-cormorant italic font-bold text-[18px] text-[#C9A85C] tracking-wider mb-3">WORK</h2>

                  <p className="font-mono italic text-[13px] mb-2">Stoke Mountain (WA) — Lead Barista (current)</p>
                  <div className="pl-6 space-y-2 mb-4">
                    <p className="font-mono text-[12px] leading-relaxed">
                      <span className="font-bold">Operations Lead</span> | Solely responsible for all opening/closing procedures, inventory management, and guest experience during peak operational hours
                    </p>
                    <p className="font-mono text-[12px] leading-relaxed">
                      <span className="font-bold">Product Development</span> | Developed and tested new menu items based on rapid feedback cycles, creating a more intuitive and appealing customer journey
                    </p>
                  </div>

                  <p className="font-mono italic text-[13px] mb-2">Starbucks (WI, WA) — Barista (2017-2022)</p>
                  <div className="pl-6 space-y-2">
                    <p className="font-mono text-[12px] leading-relaxed">
                      <span className="font-bold">Workflow</span> | Managed high-volume orders and drink production in fast-paced environments while maintaining high service standards
                    </p>
                    <p className="font-mono text-[12px] leading-relaxed">
                      <span className="font-bold">Cross-functional Collaboration</span> | Successfully integrated into 4 different store locations across WA and WI, seamlessly adapting to new team cultures and workflows
                    </p>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex-[2] min-w-0">

                  {/* SKILLS */}
                  <h2 className="font-cormorant italic font-bold text-[18px] text-[#C9A85C] tracking-wider mb-3">SKILLS</h2>
                  <div className="space-y-2 mb-6">
                    {[
                      { label: "People", value: "Leadership, Time Management, Multitasking, Team Training, Sales & Client Relations, Community Builder" },
                      { label: "Technical", value: "Figma, Adobe (Premiere Pro, Illustrator, Photoshop, InDesign, Lightroom), Trello" },
                      { label: "Design", value: "Accessibility (WCAG), Design Systems, Prototyping, Information Architecture, User flow, Wireframing, User Research, Usability Testing, Responsive Web, App Design" },
                      { label: "Teams", value: "Cross-functional collaboration, Data-driven design, Agile Development, Slack" },
                    ].map(({ label, value }) => (
                      <p key={label} className="font-open-sans text-[12px] leading-relaxed">
                        <span className="font-bold">{label}</span>
                        <span className="font-merriweather font-light"> | {value}</span>
                      </p>
                    ))}
                  </div>

                  {/* LANGUAGES */}
                  <h2 className="font-cormorant italic font-bold text-[18px] text-[#C9A85C] tracking-wider mb-3">LANGUAGES</h2>
                  <p className="font-merriweather font-light text-[12px] leading-relaxed mb-6">English, Ilocano</p>

                  {/* EDUCATION */}
                  <h2 className="font-cormorant italic font-bold text-[18px] text-[#C9A85C] tracking-wider mb-3">EDUCATION</h2>
                  <p className="font-cormorant italic font-bold text-[13px] leading-relaxed mb-2 text-[#C9A85C]">
                    Arizona State University, Tempe, AZ — B.S in Graphic Information Technology (summa cum laude)
                  </p>
                  <p className="font-open-sans text-[12px] leading-relaxed mb-1">
                    <span className="font-bold">Focus</span>
                    <span className="font-merriweather font-light"> | UX/UI design in web development technologies.</span>
                  </p>
                  <p className="font-roboto italic font-light text-[12px] leading-relaxed">
                    (Achieved through <span className="font-bold not-italic font-open-sans">Starbucks SCRAP</span> program)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
