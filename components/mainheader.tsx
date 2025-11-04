// "use client";

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const slides = [
//   {
//     image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
//     title: 'Empowering Endowment Growth For A Sustainable Future',
//     desc: 'Awaqf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
//     title: "Innovating for Tomorrow's Endowment Solutions",
//     desc: 'Building sustainable frameworks and innovative investment opportunities to empower future generations.'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80',
//     title: 'Partnering for a Better Future',
//     desc: 'Collaborating with stakeholders to enhance transparency, growth, and global impact in the endowment sector.'
//   }
// ];

// export default function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[85vh] overflow-hidden">
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
//           <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-10 md:px-24 text-white">
//             <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight mb-4">
//               {slides[current].title}
//             </h1>
//             <p className="max-w-xl text-lg md:text-xl text-gray-200">
//               {slides[current].desc}
//             </p>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
//       >
//         <ChevronLeft size={28} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
//       >
//         <ChevronRight size={28} />
//       </button>

//       <div className="absolute bottom-8 w-full flex justify-center gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               current === index ? 'bg-white w-6' : 'bg-white/50'
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
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/banner-1.png",
    title: "Empowering Endowment Growth For A Sustainable Future",
    desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    title: "Empowering Endowment Growth For A Sustainable Future",
    desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    title: "Innovating for Tomorrow's Endowment Solutions",
    desc: "Building sustainable frameworks and innovative investment opportunities to empower future generations.",
  },
  {
    image: "/images/banner-1.png",
    title: "Empowering Endowment Growth For A Sustainable Future",
    desc: "Awqaf Capital is dedicated to advancing the endowment sector through innovative investment management, real estate development, and strategic partnerships that serve Government, Donors, and the Private Sector.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover brightness-75"
          />

          {/* Overlay split into 2 halves */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            {/* Left half: empty overlay for layout balance */}

            {/* Right half: Text content */}
            <div className="flex flex-col justify-center text-white px-4 lg:px-14 md:px-14">
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                {slides[current].title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-lg">
                {slides[current].desc}
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
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
