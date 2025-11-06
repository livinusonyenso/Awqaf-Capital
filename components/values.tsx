"use client";

import Image from "next/image";
import React from "react";

interface ValuesSectionProps {
  imageUrl?: string;
}

const Values: React.FC<ValuesSectionProps> = ({
  imageUrl = "https://www.absoluteproduct.com/images/pages/1583-alex-block-XHToFZ7tM7A-unsplash.webp",
}) => {
  const values = [
    {
      title: "Transparency",
      description:
        "We uphold absolute openness and unwavering integrity in the stewardship of both endowments and minors' funds.",
    },
    {
      title: "Responsibility",
      description:
        "We fully commit to safeguarding and growing both endowments and minors' funds.",
    },
    {
      title: "Unity",
      description:
        "We bring together diverse partners from endowment donors to minors' guardians around a shared purpose.",
    },
    {
      title: "Stewardship",
      description:
        "We safeguard and grow both endowments and minors' funds with foresight to benefit present and future generations.",
    },
    {
      title: "Trust",
      description:
        "We build trust through ethical behavior in managing all funds.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row w-full font-[Tahoma] overflow-hidden">
      {/* LEFT SIDE: Values List */}
      <div className="bg-[#B59664] text-white w-full md:w-1/2 flex flex-col justify-center">
        {values.map((val, index) => (
          <div
            key={index}
            className={`px-6 sm:px-10 md:px-16 py-8 border-b border-white/30 last:border-none`}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {val.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              {val.description}
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE: Title + Image */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Top Title Block */}
        <div className="bg-[#B59664] text-white flex items-center justify-center py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
        </div>

        {/* Bottom Image */}
        <div className="relative w-full h-[320px] md:h-full">
          <Image
            src={imageUrl}
            alt="Values architecture"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
