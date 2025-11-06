// app/components/DirectionWrapper.tsx  (client component)
"use client";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import ArHeader from "@/ar-components/header";
import Footer from "./footer";
import AlFooter from "@/ar-components/footer";

export default function DirectionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");
  useEffect(() => {
    document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", isArabic ? "ar" : "en");
  }, [isArabic]);

  return (
    <>
      {/* English site */}
      {!isArabic && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}

      {/* Arabic site */}
      {isArabic && (
        <>
          <ArHeader />
          {children}
          <AlFooter />
        </>
      )}
    </>
  );
}
