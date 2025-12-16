"use client";

// import Image from "next/image";
// import React from "react";

// interface InnovationSectionProps {
//   backgroundUrl?: string;
// }

// const InnovationSection: React.FC<InnovationSectionProps> = ({
//   backgroundUrl = "/images/spiral.svg",
// }) => {
//   return (
//     <section className="relative w-full h-[746px] md:h-[746px] overflow-hidden font-[Tahoma]">
//       {/* Background Image */}
//       <Image
//         src={backgroundUrl}
//         alt="Abu Dhabi Financial Future"
//         fill
//         className="object-cover object-center"
//         priority
//       />

//       {/* Text Content */}
//       <div className="relative z-10 h-full flex items-center px-4 lg:px-35">
//         <div className="max-w-3xl text-[#25537F] space-y-6">
//           <h2 className="text-[32px] md:text-[56px] font-bold leading-snug w-full md:w-[900px]">
//             Driving Abu Dhabi's financial future through{" "}
//             <span className="text-[#25537F] underline underline-offset-4 decoration-[#25537F]/60">
//               innovation and integrity.
//             </span>
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InnovationSection;
import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

export default function AwqafHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const verticalTextVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <div className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="particles.mp4" type="video/mp4" />
          {/* <source src="particles.webm" type="video/webm" /> */}
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Content */}
        <motion.div
          className="relative z-20 flex gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Vertical Text */}
          <motion.div
            className="flex items-center"
            variants={verticalTextVariants}
          >
            <div className="relative flex flex-col items-center gap-2">
              <p
                className="writing-mode-vertical text-sm tracking-widest p-0"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                Awqaf Capital
              </p>
              <motion.div
                className="bg-white h-[166px] w-px"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div className="flex-1 space-y-6" variants={containerVariants}>
            {/* Heading */}
            <motion.div variants={headingVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-[44px] font-light leading-[70px]">
                Driving Abu Dhabi's financial future
                <br />
                through{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    innovation and integrity.
                  </span>
                  <motion.span
                    className="absolute bottom-1 left-0 right-0 h-0.5 bg-white origin-left"
                    variants={underlineVariants}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed"
              variants={paragraphVariants}
            >
              Awqaf Capital was established to manage, grow, and sustain
              endowment assets in line with Abu Dhabi's long-term vision. The
              initiative reflects the Emirate's commitment to transforming
              endowment management into a driver of prosperity, sustainability,
              and community wellbeing.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
