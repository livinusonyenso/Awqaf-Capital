"use client";
import React from "react";
import GridFive from "./GridFive";
import ValuesCarousel from "./ourValueCarousel";
import TitleComponent from "./TitleComponent";
import { sectionVariants } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function OurValues() {
  return (
    <>
      <motion.section
        className="bg-[#B29C78] text-white "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        {/* <section className="bg-[#B29C78] text-white  "> */}
        {/* <div className="mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-[32px] md:text-[40px] font-bold mb-6">
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
        </div> */}
        {/* <GridFive /> */}
        <TitleComponent
          title="Our Values"
          description="Awqaf Capital was established to manage, grow, and sustain
              endowment assets in line with Abu Dhabi's long-term vision. The
              initiative reflects the Emirate's commitment to transforming
              endowment management into a driver of prosperity, sustainability,
              and community wellbeing."
          descriptionClassName="text-white"
          titleClassName="text-white"
          // paddingClassName="lg:px-[0px]"
        />
        <div className="pb-16 sm:pb-10 lg:pb-20 pl-4 lg:pl-35">
          <ValuesCarousel />
        </div>
      </motion.section>
    </>
  );
}
