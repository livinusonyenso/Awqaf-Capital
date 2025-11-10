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
                src={"/images/AwqafCapitalLogo.svg"}
                alt={`${companyName} logo`}
                fill
                className="object-contain"
                sizes="190px"
              />
            </div>

            <p className="mt-15 text-sm leading-relaxed text-[#505050] font-medium max-w-md">
              General Authority of Islamic Affairs,
              <br />
              Endowments and Zakat Building - Bani
              <br />
              Yas East
              <br />
              8008222
              <br />
              info@awqaf.gov.ae
            </p>
          </div>

          {/* Middle: الروابط المفيدة */}
          <div className="md:col-span-4">
            <h4 className="text-sm tracking-wide text-[#505050]  font-bold uppercase">
              الروابط المفيدة
            </h4>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#0A1C45]/80 text-[14px] text-[#505050] "
                >
                  عن الأوقاف
                </a>
              </li>
              <li>
                <a
                  href="#opportunities"
                  className="hover:text-[#0A1C45]/80 text-[14px] text-[#505050] "
                >
                  فرص الاستثمار
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0A1C45]/80 text-[14px] text-[#505050] "
                >
                  الأخبار والفعاليات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#0A1C45]/80 text-[14px] text-[#505050] "
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div className="md:col-span-3">
            {/* <h4 className="text-sm tracking-wide text-[#505050]  font-bold uppercase">
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
            </div> */}
            <button
              type="submit"
              className="bg-[#3AA4AF] text-white px-6 py-4 hover:bg-[#6BB8B8] transition flex gap-3.5 items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_405_985)">
                  <path
                    d="M10 0.384766C4.6848 0.384766 0.384644 4.69934 0.384644 10.0002C0.384644 15.2887 4.66926 19.6155 10 19.6155C15.3135 19.6155 19.6154 15.3023 19.6154 10.0002C19.6154 4.70277 15.3178 0.384766 10 0.384766ZM16.7899 15.6698C16.0373 15.283 15.1844 14.9808 14.3555 14.7657C14.7439 13.4404 14.9646 11.945 14.9958 10.3848H18.8378C18.7538 12.3252 18.036 14.179 16.7899 15.6698ZM3.21011 15.6698C1.96403 14.179 1.24622 12.3252 1.16222 10.3848H5.00418C5.03541 11.945 5.25614 13.4404 5.64453 14.7657C4.81487 14.9813 3.97626 15.2776 3.21011 15.6698ZM3.21011 4.33046C3.97503 4.72234 4.81611 5.019 5.64453 5.23465C5.25614 6.55992 5.03541 8.05523 5.00418 9.61553H1.16222C1.24622 7.67511 1.96403 5.82127 3.21011 4.33046ZM14.1178 4.50284C13.7283 3.41715 13.1488 2.2833 12.3378 1.4698C13.8056 1.87296 15.1576 2.65103 16.2493 3.74007C15.582 4.06215 14.8165 4.32815 14.1178 4.50284ZM10.3846 4.99569V1.19196C11.3239 1.376 12.2124 2.2305 12.9196 3.64504C13.0813 3.96857 13.2291 4.31296 13.3625 4.67496C12.3821 4.87169 11.3764 4.97469 10.3846 4.99569ZM9.61541 4.99569C8.61522 4.97453 7.6068 4.86984 6.63761 4.67496C6.77095 4.31292 6.91872 3.96853 7.08045 3.64504C7.78772 2.2305 8.67618 1.37596 9.61541 1.19196V4.99569ZM9.61541 5.76507V9.61553H5.77353C5.80472 8.1105 6.01868 6.67388 6.39414 5.40938C7.39041 5.61557 8.48053 5.742 9.61541 5.76507ZM9.61541 10.3848V14.2352C8.54353 14.257 7.43968 14.3737 6.39418 14.5909C6.01868 13.3264 5.80472 11.8898 5.77353 10.3848H9.61541ZM9.61541 15.0046V18.8083C8.67618 18.6243 7.78772 17.7698 7.08045 16.3553C6.91868 16.0317 6.77095 15.6873 6.63761 15.3253C7.56945 15.1372 8.58349 15.0265 9.61541 15.0046ZM10.3846 15.0046C11.4142 15.0264 12.4241 15.1363 13.3625 15.3253C13.2291 15.6873 13.0813 16.0317 12.9196 16.3553C12.2123 17.7698 11.3239 18.6243 10.3846 18.8083V15.0046ZM10.3846 14.2352V10.3848H14.2266C14.1953 11.8898 13.9814 13.3264 13.6059 14.5909C12.6155 14.3852 11.518 14.2583 10.3846 14.2352ZM10.3846 9.61553V5.76507C11.5323 5.74173 12.6182 5.6135 13.6059 5.40938C13.9814 6.67384 14.1953 8.1105 14.2266 9.61553H10.3846ZM5.88226 4.50284C5.16111 4.32073 4.41837 4.0628 3.75068 3.74007C4.84249 2.65103 6.19449 1.87296 7.66226 1.4698C6.85011 2.2845 6.27076 3.4198 5.88226 4.50284ZM5.88226 15.4975C6.27061 16.5802 6.85003 17.7158 7.66226 18.5305C6.19449 18.1273 4.84249 17.3492 3.75068 16.2602C4.41937 15.9368 5.16245 15.6801 5.88226 15.4975ZM14.1178 15.4975C14.807 15.6697 15.5823 15.9374 16.2494 16.2602C15.1576 17.3492 13.8056 18.1273 12.3378 18.5305C13.15 17.7157 13.7295 16.5802 14.1178 15.4975ZM14.9959 9.61553C14.9646 8.05523 14.7439 6.55992 14.3555 5.23465C15.1983 5.0158 16.0422 4.71392 16.79 4.3305C18.036 5.82127 18.7539 7.67515 18.8378 9.61557H14.9959V9.61553Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_405_985">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>قم بزيارة أوقاف أبوظبي</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12  border-slate-200 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <a
              href="#sitemap"
              className="hover:text-slate-800 text-[#505050] font-bold"
            >
              خريطة الموقع
            </a>
            <a
              href="#terms"
              className="hover:text-slate-800 text-[#505050] font-bold"
            >
              الشروط والأحكام
            </a>
            <a
              href="#privacy"
              className="hover:text-slate-800 text-[#505050] font-bold"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
