"use client";

import Image from "next/image";
import React from "react";

interface MessageSectionProps {
  leftImageUrl?: string;
  profileImageUrl?: string;
  name?: string;
  title?: string;
  quote?: string;
}

const Services: React.FC<MessageSectionProps> = ({
  leftImageUrl = "https://plus.unsplash.com/premium_photo-1694475185526-1f5118ccfe65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFidS1kaGFiaSUyQ2FyY2hpdGVjdHVyZSUyQ3NreWxpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  profileImageUrl = "https://plus.unsplash.com/premium_photo-1661964252605-8ba0cd83b056?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  name = "HE Fahad Al Qasim",
  title = "Director General, Awqaf Abu Dhabi",
  quote = `"Awqaf Capital represents our dedication to innovation in financial markets and our belief that investment can deliver both financial excellence and social progress"`,
}) => {
  return (
    <section className="flex flex-col md:flex-row w-full font-[Tahoma] overflow-hidden bg-white">
      {/* LEFT SIDE IMAGE */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[85vh]">
        <Image
          src={leftImageUrl}
          alt="Awqaf Capital Architecture"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 py-12 md:py-0 bg-white">
        {/* Profile Image */}
        <div className="relative w-[140px] h-[140px] mb-6">
          <Image
            src={profileImageUrl}
            alt={name}
            fill
            className="object-cover object-center rounded-md"
          />
        </div>

        {/* Quote */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
          {quote}
        </p>

        {/* Name */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
          {name}
        </h3>

        {/* Title */}
        <p className="text-sm md:text-base text-gray-500">{title}</p>
      </div>
    </section>
  );
};

export default Services;
