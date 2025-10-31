"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React from "react";
import SectionHeader from "./sectionHeader";

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
      <SectionHeader title="Service" />
      <section className="w-full bg-white font-[Tahoma] ">
        {/* Two Full-Width Columns */}
        <div className="flex flex-col md:flex-row w-full ">
          {/* LEFT SERVICE */}
          <div className="flex-1 flex flex-col justify-between border-r border-[#BEB8B0] ">
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
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 mt-8 md:mt-10 space-y-4">
              <h3 className="text-2xl md:text-[1.8rem] font-semibold text-[#25686E]">
                Property management services
              </h3>
              <p className="text-[#475569] text-base md:text-[17px] leading-relaxed">
                Our property management services provide tailored solutions for
                your asset with the aim of enhancing asset value. We help our
                clients manage the rental process, assess rental values,
                maintain their assets, and oversee lease lifecycle management
                and operating expenses management.
              </p>

              <button className="group inline-flex items-center gap-2 border border-[#25686E] text-[#25686E] px-6 py-3  font-medium transition-all hover:gap-3 mt-auto mb-14">
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.8371 3.13074C10.6332 2.94456 10.3169 2.95895 10.1307 3.16289C9.94456 3.36683 9.95895 3.68309 10.1629 3.86927L16.3307 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H16.3279L10.1629 16.1281C9.95895 16.3143 9.94456 16.6305 10.1307 16.8345C10.3169 17.0384 10.6332 17.0528 10.8371 16.8666L17.7535 10.5526C17.8934 10.4248 17.9732 10.2573 17.993 10.0841C17.9976 10.0568 18 10.0287 18 10C18 9.97313 17.9979 9.94675 17.9938 9.92103C17.9756 9.74512 17.8955 9.57446 17.7535 9.44478L10.8371 3.13074Z"
                    fill="#25686E"
                  />
                </svg>
                {/* <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                /> */}
              </button>
            </div>
          </div>

          {/* RIGHT SERVICE */}
          <div className="flex-1 flex flex-col justify-between">
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
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 mt-8 md:mt-10 space-y-4">
              <h3 className="text-2xl md:text-[1.8rem] font-semibold text-[#25686E]">
                Development management services
              </h3>
              <p className="text-[#475569] text-base md:text-[17px] leading-relaxed">
                We provide consultancy advice on high and best solutions for
                your land bank. After a recommendation is provided, we deliver
                end-to-end solutions starting with design development,
                contractor selection, and construction management.
              </p>

              <button className="group inline-flex items-center gap-2 border border-[#25686E] text-[#25686E] px-6 py-3  font-medium transition-all hover:gap-3 mt-auto mb-14 ">
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.8371 3.13074C10.6332 2.94456 10.3169 2.95895 10.1307 3.16289C9.94456 3.36683 9.95895 3.68309 10.1629 3.86927L16.3307 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H16.3279L10.1629 16.1281C9.95895 16.3143 9.94456 16.6305 10.1307 16.8345C10.3169 17.0384 10.6332 17.0528 10.8371 16.8666L17.7535 10.5526C17.8934 10.4248 17.9732 10.2573 17.993 10.0841C17.9976 10.0568 18 10.0287 18 10C18 9.97313 17.9979 9.94675 17.9938 9.92103C17.9756 9.74512 17.8955 9.57446 17.7535 9.44478L10.8371 3.13074Z"
                    fill="#25686E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
