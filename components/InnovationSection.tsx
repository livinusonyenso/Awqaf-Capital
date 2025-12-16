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
      <div className="relative z-10 h-full flex items-center px-4 lg:px-15">
        <div className="max-w-3xl text-[#25537F] space-y-6">
          <h2 className="text-[32px] md:text-[56px] font-bold leading-snug w-full md:w-[900px]">
            Driving Abu Dhabi's financial future through{" "}
            <span className="text-[#25537F] underline underline-offset-4 decoration-[#25537F]/60">
              innovation and integrity.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
