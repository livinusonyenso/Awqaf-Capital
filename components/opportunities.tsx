"use client";

import Image from "next/image";
import React from "react";
import ValuesGrid from "./ourValueGrid";
import SectionHeader from "./sectionHeader";

interface Opportunity {
  title: string;
  description: string;
  imageUrl: string;
}

interface InvestorOpportunitiesProps {
  opportunities?: Opportunity[];
}

const InvestorOpportunities: React.FC<InvestorOpportunitiesProps> = ({
  opportunities = [
    {
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
      imageUrl: "/images/invest-1.png",
    },
    {
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
      imageUrl: "/images/invest-2.png",
    },
    {
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
      imageUrl: "/images/invest-3.png",
    },
    {
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
      imageUrl: "/images/invest-4.png",
    },
  ],
}) => {
  return (
    <>
      <SectionHeader title="Investor Opportunities" className="" />
      <section className="w-full bg-[#F9FAFB] font-[Tahoma]">
        <ValuesGrid
          items={opportunities}
          gridCol="4"
          className={"bg-white"}
          textColor={"black"}
        />
      </section>
    </>
  );
};

export default InvestorOpportunities;
