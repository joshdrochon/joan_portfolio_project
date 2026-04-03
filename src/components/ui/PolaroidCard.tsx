"use client";

import Image from "next/image";

interface PolaroidCardProps {
  imageUrl: string;
  label: string;
  onClick: () => void;
}

export default function PolaroidCard({ imageUrl, label, onClick }: PolaroidCardProps) {
  return (
    <div
      className="polaroid-card cursor-pointer select-none"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div
        className="bg-white border border-gray-100 pt-3 px-3 pb-10
                   shadow-[3px_6px_18px_rgba(0,0,0,0.18)]
                   hover:shadow-[6px_14px_36px_rgba(0,0,0,0.26)]
                   transition-shadow duration-300"
        style={{ width: 288 }}
      >
        {/* Image with developing effect */}
        <div className="polaroid-photo relative overflow-hidden" style={{ height: 183 }}>
          <Image
            src={imageUrl}
            alt={label}
            fill
            className="object-cover"
          />
        </div>

        {/* Label */}
        <p className="font-handwritten text-[32px] tracking-[6.4px] text-black text-center mt-2 leading-none">
          {label}
        </p>
      </div>
    </div>
  );
}
