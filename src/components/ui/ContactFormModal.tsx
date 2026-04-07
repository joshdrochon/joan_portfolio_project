"use client";

import { useEffect, useState } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);


  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setFormState("idle");
        setFields({ name: "", email: "", subject: "", message: "" });
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full border border-gray-200 px-4 py-3 text-sm font-mono tracking-wide text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-500 transition-colors bg-gray-50 rounded-[6px]";

  return (
    <>
    <style>{`body { overflow: hidden; }`}</style>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white max-w-lg w-full p-10 relative shadow-2xl rounded-[6px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-400 hover:text-black text-2xl leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="font-handwritten text-[56px] tracking-[6px] text-black leading-none mb-8">
          Say Hello
        </h2>

        {formState === "success" ? (
          <div className="text-center py-10">
            <p className="font-handwritten text-[48px] tracking-wide text-black mb-3 leading-none">
              Message sent!
            </p>
            <p className="text-sm text-gray-400 font-mono tracking-wide mt-4">
              I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono tracking-widest text-gray-400 mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                  value={fields.name}
                  onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest text-gray-400 mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  value={fields.email}
                  onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-gray-400 mb-2 uppercase">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="What's this about?"
                className={inputClass}
                value={fields.subject}
                onChange={(e) => setFields((f) => ({ ...f, subject: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-gray-400 mb-2 uppercase">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                className={`${inputClass} resize-none`}
                value={fields.message}
                onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
              />
            </div>

            {formState === "error" && (
              <p className="text-red-400 text-xs font-mono tracking-wide">
                Something went wrong. Please try again or email directly at joanaberionmiguel@gmail.com
              </p>
            )}

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full py-3 bg-black text-white text-xs font-mono tracking-widest uppercase
                         hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 mt-2 rounded-[6px]"
            >
              {formState === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
    </>
  );
}
