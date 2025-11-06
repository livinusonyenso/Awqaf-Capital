// components/QuoteBlock.tsx
"use client";
import Image from "next/image";

type QuoteBlockProps = {
  imageSrc?: string; // URL or /public path
  imageAlt?: string;
  quote?: string;
  name?: string;
  title?: string;
  className?: string;
};

export default function QuoteBlock({
  imageSrc = "/images/quote.png",
  imageAlt = "Portrait",
  quote = `تُجسّد "أوقاف كابيتال" التزامنا بالابتكار في الأسواق المالية، وإيماننا بأن الاستثمار قادر على تحقيق التميّز المالي`,
  name = "والمساهمة في التقدّم الاجتماعي معًا",
  title = "معاليه فهد القاسم",
  className = "",
}: QuoteBlockProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto py-16 sm:py-10 lg:py-40 px-4 lg:px-15">
        <div className="flex items-center gap-14 flex-wrap flex-col ">
          {/* Left: Image */}
          <div className="relative aspect-square md:aspect-4/3 w-[300px] h-[300px] ">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded"
              sizes="(min-width: 768px) 320px, 100vw"
              priority
            />
          </div>

          {/* Right: Quote + Author */}
          <div className="max-w-3xl flex flex-col justify-center items-center text-center ">
            <blockquote className="text-[20px] lg:text-[24px] leading-8 md:leading-9 text-[#757575] font-bold">
              <span className="font-bold text-[#757575] ">“</span>
              {quote}
              <span className="font-bold text-[#757575]">”</span>
            </blockquote>

            <div className="mt-15">
              <p className="text-[16px] font-bold text-[#757575]">{name}</p>
              <p className="text-[16px] text-[#757575]">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
