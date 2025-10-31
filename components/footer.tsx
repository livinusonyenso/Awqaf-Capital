"use client";

import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
import React from "react";

interface FooterProps {
  logoSrc?: string; // optional logo
  companyName?: string; // for alt text / aria
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  companyName = "Awqaf Capital",
}) => {
  return (
    <footer className="w-full bg-white text-[#0A1C45] font-[Tahoma]">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Logo + blurb */}
          <div className="md:col-span-5">
            <div className="h-10 relative w-[190px]">
              <Image
                src={"/images/AwqafCapitalLogo.png"}
                alt={`${companyName} logo`}
                fill
                className="object-contain"
                sizes="190px"
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-600 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada
              purus arcu. Neque mi arcu nunc velit.
              <br />
              800 242 6237 (Toll Free UAE)
              <br />
              contact@dac.ae
            </p>
          </div>

          {/* Middle: Useful links */}
          <div className="md:col-span-4">
            <h4 className="text-sm tracking-wide text-slate-500 font-semibold uppercase">
              Useful Links
            </h4>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a href="#about" className="hover:text-[#0A1C45]/80">
                  About Awqaf
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-[#0A1C45]/80">
                  Investment Opportunities
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#0A1C45]/80">
                  News and Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0A1C45]/80">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div className="md:col-span-3">
            <h4 className="text-sm tracking-wide text-slate-500 font-semibold uppercase">
              Social Media
            </h4>
            <div className="mt-4 flex items-center gap-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-slate-700 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-500 hover:text-slate-700 transition"
              >
                <Facebook className="h-6 w-6" />
              </a>
              {/* X (Twitter) — custom SVG for the X glyph */}
              <a
                href="#"
                aria-label="X"
                className="text-slate-500 hover:text-slate-700 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 3H21l-6.45 7.37L22.5 21h-6.18l-4.83-5.82L5.84 21H3l6.93-7.93L1.5 3h6.26l4.36 5.37L18.244 3Zm-1.08 16.14h1.7L7.01 4.74H5.22l11.944 14.4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <a href="#sitemap" className="hover:text-slate-800">
              SITEMAP
            </a>
            <a href="#terms" className="hover:text-slate-800">
              TERMS &amp; CONDITIONS
            </a>
            <a href="#privacy" className="hover:text-slate-800">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
