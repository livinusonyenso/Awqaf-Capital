"use client";

import React from "react";
type SectionHeaderProps = {
  title?: string;
  className?: string;
};
export default function SectionHeader({
  title,
  className = " border-[#BEB8B0] lg:border-r lg:border-[#BEB8B0] md:border-r md:border-[#BEB8B0]",
}: SectionHeaderProps) {
  return (
    <section className="px-4 lg:px-14 md:px-14">
      <div className="mx-auto min-h-[120px] lg:min-h-[189px] md:min-h-[189px] flex">
        <div className={`flex items-center ${className} flex-1`}>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F1A4C]">
            {title}
          </h2>
        </div>
        <div className="h-8  flex-1"></div>
      </div>
    </section>
  );
}
