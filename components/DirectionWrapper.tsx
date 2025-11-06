// app/components/DirectionWrapper.tsx  (client component)
"use client";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DirectionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");
  useEffect(() => {
    document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", isArabic ? "ar" : "en");
  }, [isArabic]);

  return <>{children}</>;
}
