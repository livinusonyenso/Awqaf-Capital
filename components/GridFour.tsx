"use client";

import Image from "next/image";

type ValueItem = {
  title: string;
  description: string;
  imageUrl: string; // URL or /public path
  imageAlt?: string;
};

type ValuesGridProps = {
  items?: ValueItem[];
  className?: string;
  textColor?: string;
};

export default function GridFour({
  items = defaultProps,
  className = "",
  textColor = "white",
}: ValuesGridProps) {
  return (
    <section className={`bg-[#B29C78]  ${className}`}>
      <div className="mx-auto">
        {/* Top row: images */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 overflow-hidden rounded`}
        >
          {items.map((item, idx) => (
            <div key={idx} className="border-r-[0.5px] border-r-[#BEB8B0]">
              <div className="relative">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt ?? item.title}
                  width={800}
                  height={500}
                  className="h-44 sm:h-52 w-full object-cover"
                  priority={idx < 2}
                />
              </div>
              <article
                key={idx}
                className={`p-6 sm:p-7 lg:p-8 text-${textColor} border-t lg:border-t-0 lg:border-l border-white/20`}
                style={{
                  borderLeftWidth: idx === 0 ? 0 : undefined,
                }}
              >
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className={`mt-3 text-${textColor} text-sm leading-6`}>
                  {item.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultProps = [
  {
    title: "Transparency",
    description:
      "We uphold absolute openness and unwavering integrity in the stewardship of both endowments and minors' funds.",
    imageUrl: "/images/value-1.png",
  },
  {
    title: "Responsibility",
    description:
      "We fully commit to safeguarding and growing both endowments and minors' funds.",
    imageUrl: "/images/value-2.png",
  },
  {
    title: "Unity",
    description:
      "We bring together diverse partners from endowment donors to minors' guardians around a shared purpose.",
    imageUrl: "/images/value-3.png",
  },
  {
    title: "Stewardship",
    description:
      "We safeguard and grow both endowments and minors' funds with foresight to benefit present and future generations.",
    imageUrl: "/images/value-4.png",
  },
  {
    title: "Trust ",
    description:
      "We build trust through ethical behavior in managing all funds. ",
    imageUrl: "/images/value-5.png",
  },
];
