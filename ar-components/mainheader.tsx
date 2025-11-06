
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/images/banner-1.png",
    title: "تمكين نمو الأوقاف لمستقبلٍ مستدام",
    desc: "تلتزم أوقاف كابيتال بدفع عجلة تطوير قطاع الأوقاف من خلال إدارة استثمارات مبتكرة، وتطوير عقاري استراتيجي، وشراكات فاعلة تخدم الجهات الحكومية والمتبرعين والقطاع الخاص، بما يعزز التنمية المستدامة ويحقق أثراً مجتمعياً طويل الأمد",
  },
  {
    image: "/images/banner-2.png",
    title: "تمكين نمو الأوقاف لمستقبلٍ مستدام",
    desc: "تلتزم أوقاف كابيتال بدفع عجلة تطوير قطاع الأوقاف من خلال إدارة استثمارات مبتكرة، وتطوير عقاري استراتيجي، وشراكات فاعلة تخدم الجهات الحكومية والمتبرعين والقطاع الخاص، بما يعزز التنمية المستدامة ويحقق أثراً مجتمعياً طويل الأمد",
  },
  {
    image: "/images/banner-3.png",
    title: "تمكين نمو الأوقاف لمستقبلٍ مستدام",
    desc: "تلتزم أوقاف كابيتال بدفع عجلة تطوير قطاع الأوقاف من خلال إدارة استثمارات مبتكرة، وتطوير عقاري استراتيجي، وشراكات فاعلة تخدم الجهات الحكومية والمتبرعين والقطاع الخاص، بما يعزز التنمية المستدامة ويحقق أثراً مجتمعياً طويل الأمد",
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
