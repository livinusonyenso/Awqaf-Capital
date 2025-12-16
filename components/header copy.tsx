"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-35 py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/AwqafCapitalLogo.svg"
                alt="Awqaf Capital Logo"
                width={150}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-700">
            <Link
              href="#about"
              className="hover:text-[#0F3558] transition-colors cursor-pointer text-[20px]"
            >
              About
            </Link>
            <Link
              href="#values"
              className="hover:text-[#0F3558] transition-colors cursor-pointer text-[20px]"
            >
              Our Values
            </Link>
            <Link
              href="#services"
              className="hover:text-[#0F3558] transition-colors cursor-pointer text-[20px]"
            >
              Services
            </Link>
            {/* <Link
              href="#opportunities"
              className="hover:text-[#0F3558] transition-colors cursor-pointer text-[20px]"
            >
              Opportunities
            </Link> */}
            <div className="hidden md:block cursor-pointer">
              <Link
                href="/ar"
                className="border border-[#25686E] text-[#25686E] px-6 py-4 text-sm font-bold hover:bg-[#0F3558] hover:text-white transition-all "
              >
                العربية
              </Link>
            </div>
            <div className="hidden md:block cursor-pointer">
              <Link
                href="#contact"
                className="border border-[#25686E] text-[#25686E] px-6 py-4 text-sm font-medium hover:bg-[#0F3558] hover:text-white transition-all "
              >
                Get In Touch
              </Link>
            </div>
          </nav>

          {/* Mobile: Hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 -mr-1"
          >
            {/* Hamburger / X */}
            <span className="relative block h-5 w-7">
              <span
                className={`absolute left-0 top-0 h-0.5 w-7 bg-[#0F3558] transition-transform duration-300 ${
                  open ? "translate-y-2.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-7 bg-[#0F3558] transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-5 h-0.5 w-7 bg-[#0F3558] transition-transform duration-300 ${
                  open ? "-translate-y-2.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-100 transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 sm:px-6 pb-6 pt-4 bg-white">
          <ul className="space-y-4 text-[16px] font-medium text-gray-800">
            <li>
              <Link
                href="#about"
                onClick={() => setOpen(false)}
                className="block py-1"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#values"
                onClick={() => setOpen(false)}
                className="block py-1"
              >
                Our Values
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={() => setOpen(false)}
                className="block py-1"
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                href="#opportunities"
                onClick={() => setOpen(false)}
                className="block py-1"
              >
                Opportunities
              </Link>
            </li> */}
          </ul>

          {/* Full-width CTA (matches your mobile design) */}

          <div className="mt-5">
            <Link
              href="/ar"
              onClick={() => setOpen(false)}
              className="block w-full text-center border-2 border-[#2F6F79] text-[#2F6F79] py-3 rounded-sm font-semibold hover:bg-[#2F6F79] hover:text-white transition-colors"
            >
              العربية
            </Link>
          </div>
          <div className="mt-5">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center border-2 border-[#2F6F79] text-[#2F6F79] py-3 rounded-sm font-semibold hover:bg-[#2F6F79] hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>

      {/* Backdrop for mobile (click to close) */}
      {open && (
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed  bg-black/20 md:hidden"
        />
      )}
    </header>
  );
}
