"use client";
import React from "react";
import ValuesGrid from "./ourValueGrid";

export default function OurValues() {
  return (
    <>
      <section className="bg-[#B29C78] text-white py-16 sm:py-10 lg:py-20 px-14">
        <div className="mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Our Values
            </h2>
            <p className="text-base leading-7 text-white/90">
              Awqaf Capital was established to manage, grow, and sustain
              endowment assets in line with Abu Dhabi's long-term vision. The
              initiative reflects the Emirate's commitment to transforming
              endowment management into a driver of prosperity, sustainability,
              and community wellbeing.
            </p>
          </div>
        </div>
      </section>
      <ValuesGrid gridCol="5" />
    </>
  );
}
