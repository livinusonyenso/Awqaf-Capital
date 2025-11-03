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
                <a href="#" className="hover:text-[#0A1C45]/80">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M24 23.9998V15.2098C24 10.8898 23.07 7.58984 18.03 7.58984C15.6 7.58984 13.98 8.90984 13.32 10.1698H13.26V7.97984H8.48999V23.9998H13.47V16.0498C13.47 13.9498 13.86 11.9398 16.44 11.9398C18.99 11.9398 19.02 14.3098 19.02 16.1698V23.9698H24V23.9998Z"
                    fill="#505050"
                  />
                  <path
                    d="M0.390015 7.97998H5.37002V24H0.390015V7.97998Z"
                    fill="#505050"
                  />
                  <path
                    d="M2.88 0C1.29 0 0 1.29 0 2.88C0 4.47 1.29 5.79 2.88 5.79C4.47001 5.79 5.76001 4.47 5.76001 2.88C5.76001 1.29 4.47001 0 2.88 0Z"
                    fill="#505050"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-500 hover:text-slate-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.4844 0H3.51562C1.57727 0 0 1.57727 0 3.51562V20.4844C0 22.4227 1.57727 24 3.51562 24H10.5938V15.5156H7.78125V11.2969H10.5938V8.4375C10.5938 6.11115 12.4861 4.21875 14.8125 4.21875H19.0781V8.4375H14.8125V11.2969H19.0781L18.375 15.5156H14.8125V24H20.4844C22.4227 24 24 22.4227 24 20.4844V3.51562C24 1.57727 22.4227 0 20.4844 0Z"
                    fill="#505050"
                  />
                </svg>
              </a>
              {/* X (Twitter) — custom SVG for the X glyph */}
              <a
                href="#"
                aria-label="X"
                className="text-slate-500 hover:text-slate-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14.2833 10.3857L23.2178 0H21.1006L13.3427 9.01774L7.14656 0H0L9.36984 13.6364L0 24.5274H2.11732L10.3098 15.0044L16.8534 24.5274H24L14.2827 10.3857H14.2833ZM11.3833 13.7566L10.4339 12.3987L2.88022 1.59388H6.1323L12.2282 10.3137L13.1776 11.6716L21.1016 23.006H17.8495L11.3833 13.7571V13.7566Z"
                    fill="#505050"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <a
              href="#sitemap"
              className="hover:text-slate-800 text-[#505050] font-bold"
            >
              SITEMAP
            </a>
            <a
              href="#terms"
              className="hover:text-slate-800 text-[#505050] font-bold"
            >
              TERMS &amp; CONDITIONS
            </a>
            <a
              href="#privacy"
              className="hover:text-slate-800 text-[#505050] font-bold"
            >
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
