// import Image from "next/image";

// export default function LeadSection() {
//   return (
//     <section className="relative h-[640px] bg-[#081443] overflow-hidden flex items-center">
//       <div className="relative z-10 mx-auto w-full px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
//         {/* Left: Text */}
//         <div className="max-w-lg text-white space-y-4 md:space-y-6">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
//             Investing in <br />
//             Abu <span className="text-[#4FB5B9]">
//               Dhabi&apos;s Future
//             </span>, <br />
//             Leading from Its Capital.
//           </h1>
//         </div>

//         {/* Right: Person Image */}
//         <div className="relative mt-10 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
//           <Image
//             src="./images/lead.png"
//             alt="Professional in traditional attire"
//             width={500}
//             height={640}
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { sectionVariants } from "@/lib/utils";
import { motion } from "framer-motion";

// export default function LeadSection() {
//   return (
//     <section
//       className="relative min-h-[640px] flex items-center"
//       style={{
//         backgroundImage: "url(/images/invest-bg.svg)",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >

//       <div className="relative z-10 mx-auto w-full px-4 lg:px-35 flex flex-col md:flex-row items-center justify-between">
//         {/* Left: Text */}
//         <div className="max-w-lg text-white space-y-4 md:space-y-6">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
//             Investing in <br />
//             Abu <span className="text-[#081443] underline ">
//               Dhabi&apos;s Future
//             </span>, <br />
//             Leading from Its Capital.
//           </h1>
//         </div>

//         <div className="relative mt-10 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg pr-18">
//           <Image
//             src="/images/lead.png"
//             alt="Professional in traditional attire"
//             width={500}
//             height={640}
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function LeadSection() {
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
      style={{
        backgroundImage: 'url(/lead-bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Video Background */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="lead-vid.mp4" type="video/mp4" /> 
        </video> */}

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
                Investing in Abu {" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Dhabi's Future</span>
                  <motion.span
                    className="absolute bottom-1 left-0 right-0 h-0.5 bg-white origin-left"
                    variants={underlineVariants}
                  />
                </span>
                , Leading
                <br />
                from its Capital.
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
