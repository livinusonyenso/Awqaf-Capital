"use client";

import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
import React from "react";
import ContactForm from "./contact-form";

interface FooterProps {
  logoSrc?: string; // optional logo
  companyName?: string; // for alt text / aria
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  companyName = "Awqaf Capital",
}) => {
  return (
    // <footer className="w-full bg-[#081443] text-white font-[Tahoma]">
    <ContactForm />

    // {/* </footer> */}
  );
};

export default Footer;
