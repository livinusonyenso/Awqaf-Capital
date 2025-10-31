"use client";

import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
import React from "react";

interface FooterProps {
  logoSrc?: string;
  companyName?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  companyName = "Awqaf Capital",
}) => {
  return (
    <footer className="w-full bg-white text-[#0A1C45] font-[Tahoma]">
      {/* Main container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Left: Logo + contact info (wider section) */}
          <div className="md:w-[45%] mr-10">
            <div className="relative h-10 w-[190px]">
              <Image
                src={logoSrc || "/images/AwqafCapitalLogo.png"}
                alt={`${companyName} logo`}
                fill
                className="object-contain"
                sizes="190px"
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-600 max-w-sm">
              General Authority of Islamic Affairs,
              <br />
              Endowments and Zakat Building - Bani Yas East
              <br />
              8008222
              <br />
              info@awqaf.gov.ae
            </p>
          </div>

          {/* Middle: Useful links */}
          <div className="md:w-[30%]">
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

          {/* Right: Social Media */}
          <div className="md:w-[25%]">
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

        {/* Divider and bottom links */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <a href="#sitemap" className="hover:text-slate-800">
              SITEMAP
            </a>
            <a href="#terms" className="hover:text-slate-800">
              TERMS & CONDITIONS
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
