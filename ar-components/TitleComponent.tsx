"use client";
import React from "react";

type AboutSplitProps = {
  title?: string;
  description?: string;
  /** Optional: tweak max width of the paragraph (default: prose) */
  paragraphClassName?: string;
};

export default function TitleComponent({
  title,
  description,
  paragraphClassName = "max-w-prose",
}: AboutSplitProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 sm:py-10  lg:py-20 px-4 lg:px-35">
        <div className="flex justify-between flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-6 lg:gap-0 ">
          {/* Left: Title */}
          <div className="flex-auto lg:flex-1 md:flex-1  ">
            <h2 className="text-[32px] font-bold tracking-tight text-[#1A2553] md:text-[40px]">
              {title || "من نحن"}
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex-auto lg:flex-1 md:flex-1">
            <p
              className={`text-base leading-7 text-slate-600 md:text-[17px] md:leading-8 ${paragraphClassName}`}
            >
              {description ||
                "تُعنى أوقاف كابيتال بإحداث نقلة نوعية في قطاع الأوقاف، من خلال إدارة استثمارات مبتكرة، تطوير عقاري استراتيجي، وخلق شراكات فعّالة مع كل من الجهات حكومية، المتبرّعين، والقطاع خاص، بهدف خدمة التنمية المستدامة والرفاه المجتمعي."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
