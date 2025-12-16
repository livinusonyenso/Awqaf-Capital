import { motion } from "framer-motion";

const textContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const wordVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({ text }: { text: string }) {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-wrap"
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="mr-2 overflow-hidden inline-block">
          <motion.span variants={wordVariant as any} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
