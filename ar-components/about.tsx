"use client";

import Image from "next/image";
import { Target, Radar } from "lucide-react";
import React from "react";

interface AboutSectionProps {
  imageUrl?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageUrl = "https://images.unsplash.com/photo-1758952327539-171dd13c0e8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFidS1kaGFiaSUyQ2FyY2hpdGVjdHVyZSUyQ3NreXNjcmFwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
}) => {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] overflow-hidden font-[Tahoma] bg-white">
      {/* Left Side */}
      <div className="flex flex-col w-full md:w-1/2">
        {/* Title Area */}
        <div className="flex items-center px-6 sm:px-10 md:px-16 py-10 md:py-16 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-[#27666B]">
            About Awqaf Capital
          </h2>
        </div>

        {/* Image Area */}
        <div className="relative flex-1 min-h-[300px] md:min-h-0">
          <Image
            src={imageUrl}
            alt="About Awqaf Capital"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Right Side: Mission & Vision */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-16 bg-[#FAFAFA]">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-start gap-5 pb-8 border-b border-gray-200">
          <div className="shrink-0">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-[#27666B]" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1E293B] mb-3">
              Mission
            </h3>
            <p className="text-sm md:text-base text-[#475569] leading-relaxed">
              Creating lasting social impact and delivering an integrated
              experience by delivering distinguished services through
              professional asset management, innovative endowment products,
              enhancing financial empowerment for minors, and fostering
              institutional excellence in the Emirate of Abu Dhabi.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row items-start gap-5 pt-8">
          <div className="shrink-0">
            <Radar className="w-8 h-8 md:w-10 md:h-10 text-[#27666B]" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1E293B] mb-3">
              Vision
            </h3>
            <p className="text-sm md:text-base text-[#475569] leading-relaxed">
              Managing endowments and entrusted wealth to achieve sustainable
              economic and social impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
