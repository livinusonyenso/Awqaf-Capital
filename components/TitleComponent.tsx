"use client";
import React from "react";

type AboutSplitProps = {
  title?: string;
  description?: string;
  /** Optional: tweak max width of the paragraph (default: prose) */
  paragraphClassName?: string;
};

export default function TitleComponent({
  title,
  description,
  paragraphClassName = "max-w-prose",
}: AboutSplitProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 sm:py-10  lg:py-20 px-4 lg:px-14 md:px-14 ">
        <div className="flex justify-between flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-6 lg:gap-0 ">
          {/* Left: Title */}
          <div className="flex-auto lg:flex-1 md:flex-1  ">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1A2553] sm:text-4xl md:text-5xl">
              {title || "About Awqaf Capital"}
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex-auto lg:flex-1 md:flex-1">
            <p
              className={`text-base leading-7 text-slate-600 md:text-[17px] md:leading-8 ${paragraphClassName}`}
            >
              {description ||
                "Awqaf Capital was established to manage, grow, and sustain endowment assets in line with Abu Dhabi's long-term vision. The initiative reflects the Emirate's commitment to transforming endowment management into a driver of prosperity, sustainability, and community wellbeing."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
