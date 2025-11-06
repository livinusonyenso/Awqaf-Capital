import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import DirectionWrapper from "@/components/DirectionWrapper";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awqaf Capital — One Page",
  description:
    "Strategic investments anchored on transparency, stewardship and long-term value creation.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-tahoma antialiased`}>
        <DirectionWrapper>{children}</DirectionWrapper>
        <Analytics />
      </body>
    </html>
  );
}
