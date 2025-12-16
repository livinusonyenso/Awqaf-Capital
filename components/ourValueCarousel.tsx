// export default function ValuesCarousel() {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     if (index < slides.length - 1) setIndex(index + 1);
//   };

//   const prev = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   const cardWidthMobile = 100 / 1.1;
//   const cardWidthDesktop = 100 / 3.5;

//   return (
//     <div className="w-full px-4 py-12 bg-[#bca881]">
//       <div className="relative overflow-hidden">

//         <motion.div
//           animate={{
//             x: `-${
//               index *
//               (window.innerWidth < 768 ? cardWidthMobile : cardWidthDesktop)
//             }%`,
//           }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex gap-6"
//         >
//           {slides.map((slide, i) => (
//             <motion.div
//               key={i}
//               className="bg-white shadow-lg rounded-lg cursor-pointer"
//               style={{
//                 flex: "0 0 auto",
//                 width: "calc(100% / 1.1)",
//               }}
//               whileHover={{
//                 rotateY: 10,
//                 rotateX: 6,
//                 scale: 1.03,
//                 transition: { duration: 0.4, ease: "easeOut" },
//               }}
//             >
//               <div className="w-full h-60 relative">
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   className="object-cover rounded-t-lg"
//                 />
//               </div>

//               <div className="bg-[#00154B] text-white px-6 py-6 rounded-b-lg">
//                 <h3 className="text-lg font-semibold">{slide.title}</h3>
//                 <p className="text-sm mt-2 leading-6 text-gray-200">
//                   {slide.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="flex justify-center gap-6 mt-10">
//           <motion.button
//             onClick={prev}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             disabled={index === 0}
//             className="border border-white p-3 rounded-md"
//           >
//             <Image
//               src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
//               width={20}
//               height={20}
//               alt="prev"
//             />
//           </motion.button>

//           <motion.button
//             onClick={next}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             disabled={index === slides.length - 1}
//             className="border border-white p-3 rounded-md"
//           >
//             <Image
//               src="https://cdn-icons-png.flaticon.com/512/545/545680.png"
//               width={20}
//               height={20}
//               alt="next"
//             />
//           </motion.button>
//         </div>
//       </div>
//       <style jsx>{`
//         @media (min-width: 768px) {
//           div[style] {
//             width: calc(100% / 3.5) !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     title: "Transparency",
//     text: "We uphold absolute openness and unwavering integrity in the stewardship of both endowments and minors' funds.",
//     image: "/images/value-1.png",
//   },
//   {
//     title: "Responsibility",
//     text: "We fully commit to safeguarding and growing both endowments and minors' funds.",
//     image: "/images/value-2.png",
//   },
//   {
//     title: "Unity",
//     text: "We bring together diverse partners from endowment donors to minors' guardians around a shared purpose.",
//     image: "/images/value-3.png",
//   },
//   {
//     title: "Stewardship",
//     text: "We safeguard and grow both endowments and minors' funds with foresight to benefit present and future generations.",
//     image: "/images/value-4.png",
//   },
//   {
//     title: "Trust",
//     text: "We build trust through ethical behavior in managing all funds.",
//     image: "/images/value-5.png",
//   },
// ];

// export default function ValuesCarousel() {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     if (index < slides.length - 1) setIndex(index + 1);
//   };
//   const prev = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   return (
//     <div className="w-full bg-[#B29C78]">
//       <div className="relative overflow-hidden">
//         {/* Slider track */}
//         <div
//           className="flex gap-6 transition-transform duration-500 ease-out"
//           style={{
//             transform: `translateX(-${index * 28}%)`, // 28% = 100 / 3.5
//           }}
//         >
//           {slides.map((slide, i) => (
//             <div
//               key={i}
//               className="bg-white shadow-lg overflow-hidden shrink-0 card"
//               style={{
//                 padding: "0px",
//                 background: "none",
//                 border: "none",
//                 borderRadius: "0px",
//               }}
//             >
//               <div className="w-full h-[273px] relative">
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="bg-[#00154B] text-white px-6 py-10 h-[234px]">
//                 <h3 className="text-[28px] font-semibold">{slide.title}</h3>
//                 <p className="text-[16px] mt-4 leading-6">{slide.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ARROWS */}
//         <div className="flex justify-end gap-6 mt-20 lg:mr-30">
//           <button
//             onClick={prev}
//             disabled={index === 0}
//             className="border border-white p-3"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//             >
//               <path
//                 d="M9.29255 16.7076L19.2926 26.7076C19.3855 26.8005 19.4958 26.8742 19.6172 26.9245C19.7386 26.9747 19.8687 27.0006 20.0001 27.0006C20.1314 27.0006 20.2616 26.9747 20.383 26.9245C20.5043 26.8742 20.6146 26.8005 20.7076 26.7076C20.8005 26.6147 20.8742 26.5044 20.9244 26.383C20.9747 26.2616 21.0006 26.1315 21.0006 26.0001C21.0006 25.8687 20.9747 25.7386 20.9244 25.6172C20.8742 25.4958 20.8005 25.3855 20.7076 25.2926L11.4138 16.0001L20.7076 6.70757C20.8952 6.51993 21.0006 6.26543 21.0006 6.00007C21.0006 5.7347 20.8952 5.48021 20.7076 5.29257C20.5199 5.10493 20.2654 4.99951 20.0001 4.99951C19.7347 4.99951 19.4802 5.10493 19.2926 5.29257L9.29255 15.2926C9.19958 15.3854 9.12582 15.4957 9.07549 15.6171C9.02517 15.7385 8.99927 15.8687 8.99927 16.0001C8.99927 16.1315 9.02517 16.2616 9.07549 16.383C9.12582 16.5044 9.19958 16.6147 9.29255 16.7076Z"
//                 fill="white"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={next}
//             disabled={index === slides.length - 1}
//             className="border border-white p-3"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//             >
//               <path
//                 d="M22.7074 15.2924L12.7074 5.29243C12.6145 5.19952 12.5042 5.12582 12.3828 5.07554C12.2614 5.02526 12.1313 4.99937 11.9999 4.99937C11.8686 4.99937 11.7384 5.02526 11.617 5.07554C11.4957 5.12582 11.3854 5.19952 11.2924 5.29243C11.1995 5.38534 11.1258 5.49564 11.0756 5.61703C11.0253 5.73843 10.9994 5.86854 10.9994 5.99993C10.9994 6.13133 11.0253 6.26143 11.0756 6.38283C11.1258 6.50422 11.1995 6.61452 11.2924 6.70743L20.5862 15.9999L11.2924 25.2924C11.1048 25.4801 10.9994 25.7346 10.9994 25.9999C10.9994 26.2653 11.1048 26.5198 11.2924 26.7074C11.4801 26.8951 11.7346 27.0005 11.9999 27.0005C12.2653 27.0005 12.5198 26.8951 12.7074 26.7074L22.7074 16.7074C22.8004 16.6146 22.8742 16.5043 22.9245 16.3829C22.9748 16.2615 23.0007 16.1313 23.0007 15.9999C23.0007 15.8685 22.9748 15.7384 22.9245 15.617C22.8742 15.4956 22.8004 15.3853 22.7074 15.2924Z"
//                 fill="white"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .card {
//           width: calc(100% / 1.1); /* Mobile: 1.1 cards */
//         }

//         @media (min-width: 768px) {
//           .card {
//             width: calc(100% / 3.5); /* Desktop: 3.5 cards */
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     title: "Transparency",
//     text: "We uphold absolute openness and unwavering integrity in the stewardship of both endowments and minors' funds.",
//     image: "/images/value-1.png",
//   },
//   {
//     title: "Responsibility",
//     text: "We fully commit to safeguarding and growing both endowments and minors' funds.",
//     image: "/images/value-2.png",
//   },
//   {
//     title: "Unity",
//     text: "We bring together diverse partners from endowment donors to minors' guardians around a shared purpose.",
//     image: "/images/value-3.png",
//   },
//   {
//     title: "Stewardship",
//     text: "We safeguard and grow both endowments and minors' funds with foresight to benefit present and future generations.",
//     image: "/images/value-4.png",
//   },
//   {
//     title: "Trust",
//     text: "We build trust through ethical behavior in managing all funds.",
//     image: "/images/value-5.png",
//   },
// ];

// export default function ValuesCarousel() {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     if (index < slides.length - 1) setIndex(index + 1);
//   };
//   const prev = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   // Container animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1
//       }
//     }
//   };

//   // Individual card animation
//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   // Image animation
//   const imageVariants = {
//     hidden: { scale: 1.2, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   // Content animation
//   const contentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         delay: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div className="w-full bg-[#B29C78] py-16">
//       <div className="relative overflow-hidden px-6">
//         {/* Slider track */}
//         <motion.div
//           className="flex gap-6 transition-transform duration-500 ease-out"
//           style={{
//             transform: `translateX(-${index * 28}%)`,
//           }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           {slides.map((slide, i) => (
//             <motion.div
//               key={i}
//               className="bg-white shadow-lg overflow-hidden shrink-0 card"
//               style={{
//                 padding: "0px",
//                 background: "none",
//                 border: "none",
//                 borderRadius: "0px",
//               }}
//               variants={cardVariants}
//             >
//               <motion.div
//                 className="w-full h-[273px] relative overflow-hidden"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <motion.div
//                   variants={imageVariants}
//                   className="w-full h-full relative"
//                 >
//                   <Image
//                     src={slide.image}
//                     alt={slide.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 className="bg-[#00154B] text-white px-6 py-10 h-[234px]"
//                 variants={contentVariants}
//               >
//                 <h3 className="text-[28px] font-semibold">{slide.title}</h3>
//                 <p className="text-[16px] mt-4 leading-6">{slide.text}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ARROWS */}
//         <motion.div
//           className="flex justify-end gap-6 mt-20 lg:mr-30"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 1 }}
//         >
//           <motion.button
//             onClick={prev}
//             disabled={index === 0}
//             className="border border-white p-3 hover:bg-white hover:bg-opacity-10 transition-all disabled:opacity-50"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//             >
//               <path
//                 d="M9.29255 16.7076L19.2926 26.7076C19.3855 26.8005 19.4958 26.8742 19.6172 26.9245C19.7386 26.9747 19.8687 27.0006 20.0001 27.0006C20.1314 27.0006 20.2616 26.9747 20.383 26.9245C20.5043 26.8742 20.6146 26.8005 20.7076 26.7076C20.8005 26.6147 20.8742 26.5044 20.9244 26.383C20.9747 26.2616 21.0006 26.1315 21.0006 26.0001C21.0006 25.8687 20.9747 25.7386 20.9244 25.6172C20.8742 25.4958 20.8005 25.3855 20.7076 25.2926L11.4138 16.0001L20.7076 6.70757C20.8952 6.51993 21.0006 6.26543 21.0006 6.00007C21.0006 5.7347 20.8952 5.48021 20.7076 5.29257C20.5199 5.10493 20.2654 4.99951 20.0001 4.99951C19.7347 4.99951 19.4802 5.10493 19.2926 5.29257L9.29255 15.2926C9.19958 15.3854 9.12582 15.4957 9.07549 15.6171C9.02517 15.7385 8.99927 15.8687 8.99927 16.0001C8.99927 16.1315 9.02517 16.2616 9.07549 16.383C9.12582 16.5044 9.19958 16.6147 9.29255 16.7076Z"
//                 fill="white"
//               />
//             </svg>
//           </motion.button>
//           <motion.button
//             onClick={next}
//             disabled={index === slides.length - 1}
//             className="border border-white p-3 hover:bg-white hover:bg-opacity-10 transition-all disabled:opacity-50"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//             >
//               <path
//                 d="M22.7074 15.2924L12.7074 5.29243C12.6145 5.19952 12.5042 5.12582 12.3828 5.07554C12.2614 5.02526 12.1313 4.99937 11.9999 4.99937C11.8686 4.99937 11.7384 5.02526 11.617 5.07554C11.4957 5.12582 11.3854 5.19952 11.2924 5.29243C11.1995 5.38534 11.1258 5.49564 11.0756 5.61703C11.0253 5.73843 10.9994 5.86854 10.9994 5.99993C10.9994 6.13133 11.0253 6.26143 11.0756 6.38283C11.1258 6.50422 11.1995 6.61452 11.2924 6.70743L20.5862 15.9999L11.2924 25.2924C11.1048 25.4801 10.9994 25.7346 10.9994 25.9999C10.9994 26.2653 11.1048 26.5198 11.2924 26.7074C11.4801 26.8951 11.7346 27.0005 11.9999 27.0005C12.2653 27.0005 12.5198 26.8951 12.7074 26.7074L22.7074 16.7074C22.8004 16.6146 22.8742 16.5043 22.9245 16.3829C22.9748 16.2615 23.0007 16.1313 23.0007 15.9999C23.0007 15.8685 22.9748 15.7384 22.9245 15.617C22.8742 15.4956 22.8004 15.3853 22.7074 15.2924Z"
//                 fill="white"
//               />
//             </svg>
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Responsive width rules */}
//       <style jsx>{`
//         .card {
//           width: calc(100% / 1.1); /* Mobile: 1.1 cards */
//         }

//         @media (min-width: 768px) {
//           .card {
//             width: calc(100% / 3.5); /* Desktop: 3.5 cards */
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Transparency",
    text: "We uphold absolute openness and unwavering integrity in the stewardship of both endowments and minors' funds.",
    image: "/images/value-1.png",
  },
  {
    title: "Responsibility",
    text: "We fully commit to safeguarding and growing both endowments and minors' funds.",
    image: "/images/val-2.png",
  },
  {
    title: "Unity",
    text: "We bring together diverse partners from endowment donors to minors' guardians around a shared purpose.",
    image: "/images/val-3.png",
  },
  {
    title: "Stewardship",
    text: "We safeguard and grow both endowments and minors' funds with foresight to benefit present and future generations.",
    image: "/images/value-4.png",
  },
  {
    title: "Trust",
    text: "We build trust through ethical behavior in managing all funds.",
    image: "/images/value-5.png",
  },
];

export default function ValuesCarousel() {
  const [index, setIndex] = useState(0);

  // Calculate max index - when last card is fully visible
  // With 3.5 visible cards, max index is slides.length - 3.5 rounded down
  const maxIndex = Math.max(0, Math.ceil(slides.length - 3.5));

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Image animation
  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-[#B29C78]">
      <div className="relative overflow-hidden px-6">
        {/* Slider track */}
        <motion.div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (367 + 24)}px)`, // 367px card width + 24px gap
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg overflow-hidden shrink-0"
              style={{
                width: "367px",
                height: "500px",
                padding: "0px",
                background: "none",
                border: "none",
                borderRadius: "0px",
              }}
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[273px] relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={imageVariants}
                  className="w-full h-full relative"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-[#00154B] text-white px-6 py-10 h-[227px]"
                variants={contentVariants}
              >
                <motion.h3
                  className="text-[28px] font-semibold flex flex-wrap gap-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
                >
                  {/* {slide.title} */}

                  {slide?.title?.split(" ").map((word, index) => (
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
                </motion.h3>
                <motion.p
                  className="text-[16px] mt-4 leading-6 flex flex-wrap gap-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
                >
                  {/* {slide.text} */}

                  {slide?.text?.split(" ").map((word, index) => (
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
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ARROWS */}
        <motion.div
          className="flex justify-end gap-6 mt-20 lg:mr-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            onClick={prev}
            disabled={index === 0}
            className="border border-white p-3 hover:bg-white hover:bg-opacity-10 transition-all disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M9.29255 16.7076L19.2926 26.7076C19.3855 26.8005 19.4958 26.8742 19.6172 26.9245C19.7386 26.9747 19.8687 27.0006 20.0001 27.0006C20.1314 27.0006 20.2616 26.9747 20.383 26.9245C20.5043 26.8742 20.6146 26.8005 20.7076 26.7076C20.8005 26.6147 20.8742 26.5044 20.9244 26.383C20.9747 26.2616 21.0006 26.1315 21.0006 26.0001C21.0006 25.8687 20.9747 25.7386 20.9244 25.6172C20.8742 25.4958 20.8005 25.3855 20.7076 25.2926L11.4138 16.0001L20.7076 6.70757C20.8952 6.51993 21.0006 6.26543 21.0006 6.00007C21.0006 5.7347 20.8952 5.48021 20.7076 5.29257C20.5199 5.10493 20.2654 4.99951 20.0001 4.99951C19.7347 4.99951 19.4802 5.10493 19.2926 5.29257L9.29255 15.2926C9.19958 15.3854 9.12582 15.4957 9.07549 15.6171C9.02517 15.7385 8.99927 15.8687 8.99927 16.0001C8.99927 16.1315 9.02517 16.2616 9.07549 16.383C9.12582 16.5044 9.19958 16.6147 9.29255 16.7076Z"
                fill="white"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={next}
            disabled={index >= maxIndex}
            className="border border-white p-3 hover:bg-white hover:bg-opacity-10 transition-all disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M22.7074 15.2924L12.7074 5.29243C12.6145 5.19952 12.5042 5.12582 12.3828 5.07554C12.2614 5.02526 12.1313 4.99937 11.9999 4.99937C11.8686 4.99937 11.7384 5.02526 11.617 5.07554C11.4957 5.12582 11.3854 5.19952 11.2924 5.29243C11.1995 5.38534 11.1258 5.49564 11.0756 5.61703C11.0253 5.73843 10.9994 5.86854 10.9994 5.99993C10.9994 6.13133 11.0253 6.26143 11.0756 6.38283C11.1258 6.50422 11.1995 6.61452 11.2924 6.70743L20.5862 15.9999L11.2924 25.2924C11.1048 25.4801 10.9994 25.7346 10.9994 25.9999C10.9994 26.2653 11.1048 26.5198 11.2924 26.7074C11.4801 26.8951 11.7346 27.0005 11.9999 27.0005C12.2653 27.0005 12.5198 26.8951 12.7074 26.7074L22.7074 16.7074C22.8004 16.6146 22.8742 16.5043 22.9245 16.3829C22.9748 16.2615 23.0007 16.1313 23.0007 15.9999C23.0007 15.8685 22.9748 15.7384 22.9245 15.617C22.8742 15.4956 22.8004 15.3853 22.7074 15.2924Z"
                fill="white"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
