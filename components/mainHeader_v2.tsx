"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/header-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1" />
      {/* Content */}
      <div className="relative z-2 flex flex-col items-center justify-center w-full h-full text-white px-4">
        {/* Masked Text Reveal */}
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold text-center mb-6 overflow-hidden"
        >

          <span className="font-medium text-6xl ">
            Innovate. Empower. Elevate.
          </span>
        </motion.h1>

        {/* Paragraph masked reveal (slight delay) */}
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-3xl text-center overflow-hidden"
        >
          Awqaf Capital advances the endowment sector through innovative investments, 
          real estate development, and strategic partnerships for governments, donors, 
          and the private sector.
        </motion.p>

      </div>
    </section>
  );
}
