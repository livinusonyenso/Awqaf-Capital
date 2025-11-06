"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import React from "react";

interface HeroSectionProps {
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl = "https://images.unsplash.com/photo-1607602313891-31f603252656?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJ1JTIwZGhhYmklMjBza3lsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
}) => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[90vh] overflow-hidden font-[Tahoma]">
      {/* Left Text Column */}
      <div
        className="flex flex-col justify-center text-white bg-[#27666B] px-8 sm:px-12 md:px-16 py-16 md:py-20 w-full md:w-1/2 relative"
        // style={{
        //   clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
        // }}
      >
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Empowering{" "}
            <span className="text-[#5DA6A8] underline underline-offset-4">
              Endowment Growth
            </span>{" "}
            for a Sustainable Future
          </h1>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            Awqaf Capital is dedicated to advancing the endowment sector through
            innovative investment management, real estate development, and
            strategic partnerships that serve Government, Donors, and the
            Private Sector.
          </p>
        </div>

        {/* Down Arrow */}
        <div className="mt-10 md:mt-16">
          <ArrowDown className="w-6 h-6 text-white opacity-90 animate-bounce" />
        </div>
      </div>

      {/* Right Image Column */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
        <Image
          src={imageUrl}
          alt="City skyline"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
