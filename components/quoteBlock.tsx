// "use client";
// import Image from "next/image";

// type QuoteBlockProps = {
//   imageSrc?: string;
//   imageAlt?: string;
//   quote?: string;
//   name?: string;
//   title?: string;
//   className?: string;
// };

// export default function QuoteBlock({
//   imageSrc = "/images/quote.png",
//   imageAlt = "Portrait",
//   quote = "Awqaf Capital represents our dedication to innovation in financial markets and our belief that investment can deliver both financial excellence and social progress",
//   name = "HE Fahad Al Qasim",
//   title = "Director General, Awqaf Abu Dhabi",
//   className = "",
// }: QuoteBlockProps) {
//   return (
//     <section className={`bg-white ${className}`}>
//       <div className="mx-auto py-16 sm:py-10 lg:py-40 px-4 lg:px-35">
//         <div className="flex justify-center items-center gap-14 flex-wrap ">
//           <div className="relative aspect-square md:aspect-4/3 w-[557px] h-[566px] ">
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               fill
//               className="object-cover rounded"
//               sizes="(min-width: 768px) 320px, 100vw"
//               priority
//             />
//           </div>

//           <div className="max-w-3xl flex flex-col gap-15 w-[563px] ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="29"
//               viewBox="0 0 40 29"
//               fill="none"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M31.5568 7.83703C33.0043 5.80854 35.7394 3.62768 39.4612 1.80871C40.4307 1.33635 39.9945 -0.126442 38.926 0.0087899C31.1015 0.999224 26.0294 4.42574 23.26 9.52077C22.2579 11.3853 21.5742 13.4041 21.2372 15.4938C21.0105 16.8519 20.9515 17.8709 20.9515 19.048C20.9515 21.5737 21.9548 23.9961 23.7408 25.782C25.5268 27.568 27.9491 28.5714 30.4749 28.5714C33.0007 28.5714 35.423 27.568 37.209 25.782C38.9949 23.9961 39.9983 21.5737 39.9983 19.048C39.9983 13.7892 35.6651 9.52077 30.6882 9.52077C30.9511 8.8008 31.012 8.597 31.5568 7.83703ZM10.6053 7.83703C12.0528 5.80854 14.7879 3.62768 18.5097 1.80871C19.4792 1.33635 19.043 -0.126442 17.9745 0.0087899C10.15 0.999224 5.07788 4.42574 2.30847 9.52077C1.30641 11.3853 0.622753 13.4041 0.285702 15.4938C0.0590453 16.8519 0 17.8709 0 19.048C-1.86359e-08 20.2986 0.24633 21.537 0.724926 22.6924C1.20352 23.8479 1.90501 24.8977 2.78934 25.782C3.67367 26.6664 4.72352 27.3679 5.87896 27.8465C7.03439 28.3251 8.27277 28.5714 9.5234 28.5714C10.774 28.5714 12.0124 28.3251 13.1679 27.8465C14.3233 27.3679 15.3731 26.6664 16.2575 25.782C17.1418 24.8977 17.8433 23.8479 18.3219 22.6924C18.8005 21.537 19.0468 20.2986 19.0468 19.048C19.0468 13.7892 14.7137 9.52077 9.73673 9.52077C9.99957 8.8008 10.0605 8.597 10.6053 7.83703Z"
//                 fill="#B69662"
//               />
//             </svg>

//             <blockquote className="text-[20px] lg:text-[20px] leading-8 md:leading-9 text-[#6B6B6B] ">
//               {/* <span className="font-bold text-[#757575] ">“</span> */}
//               {quote}
//               {/* <span className="font-bold text-[#757575]">”</span> */}
//             </blockquote>

//             <div>
//               <p className="text-[16px] font-bold text-[#757575]">{name}</p>
//               <p className="text-[16px] text-[#757575]">{title}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";
import { AnimatedText } from "@/lib/shared";

// const textContainer = {
//   hidden: { opacity: 1 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.06 },
//   },
// };

// const wordVariant = {
//   hidden: {
//     opacity: 0,
//     y: "100%",
//     filter: "blur(4px)",
//   },
//   show: {
//     opacity: 1,
//     y: "0%",
//     filter: "blur(0px)",
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// function AnimatedText({ text }: { text: string }) {
//   return (
//     <motion.div
//       variants={textContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-80px" }}
//       className="flex flex-wrap"
//     >
//       {text.split(" ").map((word, i) => (
//         <span key={i} className="mr-2 overflow-hidden inline-block">
//           <motion.span variants={wordVariant} className="inline-block">
//             {word}
//           </motion.span>
//         </span>
//       ))}
//     </motion.div>
//   );
// }

export default function QuoteBlock({
  imageSrc = "/images/quote.png",
  imageAlt = "Portrait",
  quote = "Awqaf Capital represents our dedication to innovation in financial markets and our belief that investment can deliver both financial excellence and social progress",
  name = "HE Fahad Al Qasim",
  title = "Director General, Awqaf Abu Dhabi",
  className = "",
}) {
  return (
    <motion.section
      className={`bg-white ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <div className="mx-auto py-16 sm:py-10 lg:py-40 px-4 lg:px-35">
        <div className="flex justify-center items-center gap-14 flex-wrap ">
          <div className="relative aspect-square md:aspect-4/3 w-full h-full lg:w-[520px] lg:h-[566px] ">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded"
              sizes="(min-width: 768px) 320px, 100vw"
              priority
            />
          </div>

          <div className="max-w-3xl flex flex-col gap-15 w-[563px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="29"
              viewBox="0 0 40 29"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.5568 7.83703C33.0043 5.80854 35.7394 3.62768 39.4612 1.80871C40.4307 1.33635 39.9945 -0.126442 38.926 0.0087899C31.1015 0.999224 26.0294 4.42574 23.26 9.52077C22.2579 11.3853 21.5742 13.4041 21.2372 15.4938C21.0105 16.8519 20.9515 17.8709 20.9515 19.048C20.9515 21.5737 21.9548 23.9961 23.7408 25.782C25.5268 27.568 27.9491 28.5714 30.4749 28.5714C33.0007 28.5714 35.423 27.568 37.209 25.782C38.9949 23.9961 39.9983 21.5737 39.9983 19.048C39.9983 13.7892 35.6651 9.52077 30.6882 9.52077C30.9511 8.8008 31.012 8.597 31.5568 7.83703ZM10.6053 7.83703C12.0528 5.80854 14.7879 3.62768 18.5097 1.80871C19.4792 1.33635 19.043 -0.126442 17.9745 0.0087899C10.15 0.999224 5.07788 4.42574 2.30847 9.52077C1.30641 11.3853 0.622753 13.4041 0.285702 15.4938C0.0590453 16.8519 0 17.8709 0 19.048C-1.86359e-08 20.2986 0.24633 21.537 0.724926 22.6924C1.20352 23.8479 1.90501 24.8977 2.78934 25.782C3.67367 26.6664 4.72352 27.3679 5.87896 27.8465C7.03439 28.3251 8.27277 28.5714 9.5234 28.5714C10.774 28.5714 12.0124 28.3251 13.1679 27.8465C14.3233 27.3679 15.3731 26.6664 16.2575 25.782C17.1418 24.8977 17.8433 23.8479 18.3219 22.6924C18.8005 21.537 19.0468 20.2986 19.0468 19.048C19.0468 13.7892 14.7137 9.52077 9.73673 9.52077C9.99957 8.8008 10.0605 8.597 10.6053 7.83703Z"
                fill="#B69662"
              />
            </svg>

            <blockquote className="text-[20px] leading-8 md:leading-9 text-[#6B6B6B]">
              <AnimatedText text={quote} />
            </blockquote>

            <div>
              <div className="text-[16px] font-bold text-[#757575]">
                {/* {name} */}
                <AnimatedText text={name} />
              </div>
              <div className="text-[16px] text-[#757575]">
                {/* {title} */}
                <AnimatedText text={title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
