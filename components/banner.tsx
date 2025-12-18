"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React from "react";
import SectionHeader from "./sectionHeader";
import Link from "next/link";
import TitleComponent from "./TitleComponent";
import { motion, AnimatePresence } from "framer-motion";
import { sectionVariants } from "@/lib/utils";
import { AnimatedText } from "@/lib/shared";

interface ServicesSectionProps {
  leftImageUrl?: string;
  rightImageUrl?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  leftImageUrl = "./images/service-1.png",
  rightImageUrl = "./images/service-2.png",
}) => {
  return (
    <>
      {/* Section Title */}
      {/* <SectionHeader title="Services" /> */}
      <TitleComponent
        title="Services"
        description="Awqaf Capital was established to manage, grow, and sustain endowment assets in line with Abu Dhabi's long-term vision. The initiative reflects the Emirate's commitment to transforming endowment management into a driver of prosperity, sustainability, and community wellbeing."
      />
      <motion.section
        className="relative overflow-hidden w-full bg-white font-[Tahoma] pt-0 lg:p-[140px] lg:pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row w-full gap-10 ">
          {/* LEFT SERVICE */}
          <div className="flex-1 flex flex-col border border-[#BEB8B0] ">
            {/* Image — FULL WIDTH */}
            <div className="relative w-full h-[360px] md:h-[500px]">
              <Image
                src={leftImageUrl}
                alt="Property Management Services"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 mt-8 md:mt-10 space-y-4  flex flex-col justify-between gap-6 flex-1  ">
              <h3 className="text-2xl md:text-[1.8rem] font-bold text-[#B29C78]">
                <AnimatedText text={"Property management services"} />
              </h3>
              <div className="text-[#757575] text-base md:text-[17px] leading-relaxed">
                <AnimatedText
                  text={
                    "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value. We helpour clients manage the rental process, assess rental values, maintain their assets, and oversee lease lifecycle managementand operating expenses management."
                  }
                />
              </div>

              <Link
                className="group inline-flex items-center gap-2 border border-[#081443] text-white px-6 py-3  font-medium transition-all hover:gap-3 mt-auto mb-14 w-max bg-[#081443] "
                href={"#contact"}
              >
                <AnimatedText text={"Register Now"} />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.8371 3.13074C10.6332 2.94456 10.3169 2.95895 10.1307 3.16289C9.94456 3.36683 9.95895 3.68309 10.1629 3.86927L16.3307 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H16.3279L10.1629 16.1281C9.95895 16.3143 9.94456 16.6305 10.1307 16.8345C10.3169 17.0384 10.6332 17.0528 10.8371 16.8666L17.7535 10.5526C17.8934 10.4248 17.9732 10.2573 17.993 10.0841C17.9976 10.0568 18 10.0287 18 10C18 9.97313 17.9979 9.94675 17.9938 9.92103C17.9756 9.74512 17.8955 9.57446 17.7535 9.44478L10.8371 3.13074Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT SERVICE */}
          <div className="flex-1 flex flex-col border-l border-b border-[#BEB8B0]">
            {/* Image — FULL WIDTH */}
            <div className="relative w-full h-[360px] md:h-[500px]">
              <Image
                src={rightImageUrl}
                alt="Development Management Services"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 mt-8 md:mt-10 space-y-4 flex flex-col justify-between gap-6 flex-1">
              <h3 className="text-2xl md:text-[1.8rem] font-bold text-[#B29C78]">
                <AnimatedText text={"Development management services"} />
              </h3>
              <div className="text-[#757575] text-base md:text-[17px] leading-relaxed">
                <AnimatedText
                  text={
                    "We provide consultancy advice on high and best solutions for your land bank. After a recommendation is provided, we deliver end-to-end solutions starting with design development, contractor selection, and construction management."
                  }
                />
              </div>

              <Link
                className="group inline-flex items-center gap-2 border border-[#081443] text-white px-6 py-3  font-medium transition-all hover:gap-3 mt-auto mb-14 w-max bg-[#081443] "
                href={"#contact"}
              >
                <AnimatedText text={"Register Now"} />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.8371 3.13074C10.6332 2.94456 10.3169 2.95895 10.1307 3.16289C9.94456 3.36683 9.95895 3.68309 10.1629 3.86927L16.3307 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H16.3279L10.1629 16.1281C9.95895 16.3143 9.94456 16.6305 10.1307 16.8345C10.3169 17.0384 10.6332 17.0528 10.8371 16.8666L17.7535 10.5526C17.8934 10.4248 17.9732 10.2573 17.993 10.0841C17.9976 10.0568 18 10.0287 18 10C18 9.97313 17.9979 9.94675 17.9938 9.92103C17.9756 9.74512 17.8955 9.57446 17.7535 9.44478L10.8371 3.13074Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesSection;
