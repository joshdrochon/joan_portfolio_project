"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "@/components/ui/ProjectModal";
import { truncate } from "@/utils/text";

interface ProjectCardProps {
  id: number;
  seed: string;
  title: string;
  tags: string[];
  desc: string;
}

export default function ProjectCard({ seed, title, tags, desc }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white border border-gray-200 overflow-hidden rounded-[6px]">
        <div className="relative w-full overflow-hidden" style={{ height: 260 }}>
          <Image
            src={`https://picsum.photos/seed/${seed}/600/400`}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono tracking-wide text-gray-400 border border-gray-200 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-handwritten text-[28px] tracking-[3px] text-black mb-2 leading-none">
            {title}
          </h3>
          <p className="text-sm font-mono text-gray-400 mb-4">{truncate(desc, 12)}</p>
          <div className="flex justify-start">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-mono tracking-widest text-gray-600 border border-gray-400 rounded-full px-3 py-1 hover:border-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        tags={tags}
      />
    </>
  );
}
