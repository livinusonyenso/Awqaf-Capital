// "use client";
// import React from "react";

// type AboutSplitProps = {
//   title?: string;
//   description?: string;
//   descriptionClassName?: string;
// };

// export default function TitleComponent({
//   title,
//   description,
//   descriptionClassName = "max-w-prose",
// }: AboutSplitProps) {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto py-16 sm:py-10  lg:py-20 px-4 lg:px-35">
//         <div className="flex justify-between flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-6 lg:gap-0 ">

//           <div className="flex-auto lg:flex-1 md:flex-1  ">
//             <h2 className="text-[32px] font-bold tracking-tight text-[#1A2553] md:text-[40px]">
//               {title || "About Awqaf Capital"}
//             </h2>
//           </div>

//           <div className="flex-auto lg:flex-1 md:flex-1">
//             <p
//               className={`text-base leading-7 text-slate-600 md:text-[17px] md:leading-8 ${descriptionClassName}`}
//             >
//               {description ||
//                 "Awqaf Capital was established to manage, grow, and sustain endowment assets in line with Abu Dhabi's long-term vision. The initiative reflects the Emirate's commitment to transforming endowment management into a driver of prosperity, sustainability, and community wellbeing."}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

// import React from "react";
// import { motion } from "framer-motion";

// type AboutSplitProps = {
//   title?: string;
//   description?: string;
//   descriptionClassName?: string;
//   titleClassName?: string;
//   paddingClassName?: string;
// };

// export default function TitleComponent({
//   title,
//   description,
//   descriptionClassName = "max-w-prose",
//   titleClassName = "text-[#1A2553]",
//   paddingClassName = "lg:px-35",
// }: AboutSplitProps) {
//   const text =
//     description ||
//     "Awqaf Capital was established to manage, grow, and sustain endowment assets in line with Abu Dhabi's long-term vision. The initiative reflects the Emirate's commitment to transforming endowment management into a driver of prosperity, sustainability, and community wellbeing.";
//   const titleText = title || "About Awqaf Capital";

//   const words = text.split(" ");
//   const titleWords = titleText.split(" ");

//   return (
//     <section className="">
//       <div
//         className={`mx-auto py-16 sm:py-10 lg:py-30 px-4 ${paddingClassName}`}
//       >
//         <div className="flex justify-between flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-6 lg:gap-0">
//           {/* Left: Title */}
//           <div className="flex-auto lg:flex-1 md:flex-1">
//             <motion.h2
//               className={`text-[44px] font-bold tracking-tight  md:text-[40px] flex gap-[10px] ${titleClassName}`}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ staggerChildren: 0.08 }}
//             >
//               {titleWords.map((word, index) => (
//                 <motion.span
//                   key={index}
//                   variants={{
//                     hidden: { opacity: 0.1, y: 15 },
//                     visible: {
//                       opacity: 1,
//                       y: 0,
//                       transition: { duration: 0.35, ease: "easeOut" },
//                     },
//                   }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.h2>
//           </div>

//           <div className="flex-auto lg:flex-1 md:flex-1">
//             <motion.p
//               className={`text-base leading-7 text-slate-600 md:text-[17px] md:leading-8 ${descriptionClassName} flex flex-wrap`}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ staggerChildren: 0.04 }}
//             >
//               {words.map((word, index) => (
//                 <motion.span
//                   key={index}
//                   variants={{
//                     hidden: { opacity: 0.1, y: 15 },
//                     visible: {
//                       opacity: 1,
//                       y: 0,
//                       transition: { duration: 0.35, ease: "easeOut" },
//                     },
//                   }}
//                   className="mr-1 inline-block"
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

type AboutSplitProps = {
  title?: string;
  description?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  paddingClassName?: string;
};

export default function TitleComponent({
  title,
  description,
  descriptionClassName = "max-w-prose",
  titleClassName = "text-[#1A2553]",
  paddingClassName = "lg:px-35",
}: AboutSplitProps) {
  const text =
    description ||
    "Awqaf Capital was established to manage, grow, and sustain endowment assets in line with Abu Dhabi's long-term vision. The initiative reflects the Emirate's commitment to transforming endowment management into a driver of prosperity, sustainability, and community wellbeing.";
  const titleText = title || "About Awqaf Capital";

  const words = text.split(" ");
  const titleWords = titleText.split(" ");

  // Container animation for the entire section
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Divider line animation
  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };

  // Column animations
  const columnVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32   rounded-full blur-3xl opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40  rounded-full blur-3xl opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      <div
        className={`mx-auto py-16 sm:py-10 lg:py-30 px-4 ${paddingClassName}`}
      >
        {/* Top decorative line */}
        <motion.div
          className="h-0.5  mb-12 origin-center"
          variants={dividerVariants}
        />

        <motion.div
          className="flex justify-between flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-6 lg:gap-0"
          variants={sectionVariants}
        >
          {/* Left: Title */}
          <motion.div 
            className="flex-auto lg:flex-1 md:flex-1"
            variants={columnVariants}
          >
            <motion.h2
              className={`text-[44px] font-bold tracking-tight md:text-[40px] flex gap-[10px] ${titleClassName}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0.1, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>

          {/* Vertical divider for large screens */}
          <motion.div
            className="hidden lg:block w-px mx-12 self-stretch origin-top"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          />

          <motion.div 
            className="flex-auto lg:flex-1 md:flex-1"
            variants={columnVariants}
          >
            <motion.p
              className={`text-base leading-7 text-slate-600 md:text-[17px] md:leading-8 ${descriptionClassName} flex flex-wrap`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.04, delayChildren: 0.4 }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0.1, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  className="mr-1 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="h-0.5  origin-center"
          variants={dividerVariants}
        />
      </div>
    </motion.section>
  );
}