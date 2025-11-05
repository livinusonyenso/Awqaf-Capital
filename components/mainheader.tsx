// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "/images/banner-1.png",
//     title: "Empowering Endowment Growth For A Sustainable Future",
//     desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
//     title: "Empowering Endowment Growth For A Sustainable Future",
//     desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
//     title: "Innovating for Tomorrow's Endowment Solutions",
//     desc: "Building sustainable frameworks and innovative investment opportunities to empower future generations.",
//   },
//   {
//     image: "/images/banner-1.png",
//     title: "Empowering Endowment Growth For A Sustainable Future",
//     desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
//   },
// ];

// export default function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[85vh] overflow-hidden ">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 w-full h-full"
//         >

//           <Image
//             src={slides[current].image}
//             alt={slides[current].title}
//             fill
//             className="object-cover brightness-75"
//           />

//           <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">

//             <div className="flex flex-col justify-center text-white px-4 lg:px-14 md:px-14">
//               <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
//                 {slides[current].title}
//               </h1>
//               <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-lg">
//                 {slides[current].desc}
//               </p>
//             </div>
//             <div className="hidden md:block"></div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute bottom-8 w-full flex justify-center gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               current === index ? "bg-white w-6" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/images/banner-1.png",
    title: "Empowering Endowment Growth for a Sustainable Future",
    desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
  },
  {
    image: "/images/banner-2.png",
    title: "Creating new pathways for capital with purpose.",
    desc: "At Awqaf Capital, we deploy financial strength across diverse asset classes, empowering investors and supporting Abu Dhabi's role as the “Capital of Capital.”",
  },
  {
    image: "/images/banner-3.png",
    title: "Investing in Abu Dhabi's global financial future.",
    desc: "As a cornerstone of the emirate's financial ecosystem, Awqaf Capital is leveraging Abu Dhabi's position as a bridge between global markets to deliver value and impact.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const goToNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setNext((prev) => (prev + 1) % slides.length);
      setIsFading(false);
    }, 800); // match fade duration
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-black">
      {/* Current slide */}
      <motion.div
        key={`current-${current}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isFading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          priority
          className="object-cover brightness-75"
        />
      </motion.div>

      {/* Next slide (preloaded behind fade) */}
      <motion.div
        key={`next-${next}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isFading ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={slides[next].image}
          alt={slides[next].title}
          fill
          className="object-cover brightness-75"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="text-white px-4 md:px-15 max-w-5xl">
          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={slides[current].desc}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-200"
          >
            {slides[current].desc}
          </motion.p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
