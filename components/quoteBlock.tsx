// components/QuoteBlock.tsx
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
  quote = "Awqaf Capital represents our dedication to innovation in financial markets and our belief that investment can deliver both financial excellence and social progress",
  name = "HE Fahad Al Qasim",
  title = "Director General, Awqaf Abu Dhabi",
  className = "",
}: QuoteBlockProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto py-16 sm:py-10 lg:py-40 px-4 lg:px-14">
        <div className="flex items-center gap-14 flex-wrap ">
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
          <div className="max-w-3xl">
            <blockquote className="text-lg sm:text-xl md:text-[22px] leading-8 md:leading-9 text-slate-600">
              <span className="font-medium text-slate-700">“</span>
              {quote}
              <span className="font-medium text-slate-700">”</span>
            </blockquote>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-800">{name}</p>
              <p className="text-sm text-slate-500">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
