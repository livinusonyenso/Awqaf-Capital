"use client";

import Image from "next/image";
import React from "react";

interface InnovationSectionProps {
  backgroundUrl?: string;
}

const InnovationSection: React.FC<InnovationSectionProps> = ({
  backgroundUrl = "/images/spiral.svg",
}) => {
  return (
    <section className="relative w-full h-[746px] md:h-[746px] overflow-hidden font-[Tahoma]">
      {/* Background Image */}
      <Image
        src={backgroundUrl}
        alt="Abu Dhabi Financial Future"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-20">
        <div className="max-w-3xl text-white space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-5xl leading-snug">
            Driving Abu Dhabi's financial future through{" "}
            <span className="text-[#B29C78] underline underline-offset-4 decoration-[#B29C78]/60">
              innovation and integrity.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
