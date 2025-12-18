"use client";

// import React from "react";
// import Image from "next/image";

// export default function InvestorOpportunities() {
//   const opportunities = [
//     {
//       id: 1,
//       image: "/images/opportunity-1.png",
//       title: "Title",
//       description:
//         "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
//     },
//     {
//       id: 2,
//       image: "/images/opportunity-2.png",
//       title: "Title",
//       description:
//         "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
//     },
//     {
//       id: 3,
//       image: "/images/opportunity-3.png",
//       title: "Title",
//       description:
//         "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-gray-900">
//           Investor Opportunities
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {opportunities.map((opportunity) => (
//             <div key={opportunity.id} className="group cursor-pointer">
//               <div className="relative aspect-4/3 mb-6 overflow-hidden">
//                 <Image
//                   src={opportunity.image}
//                   alt={opportunity.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="space-y-3">
//                 <h3 className="text-xl md:text-2xl font-normal text-amber-700">
//                   {opportunity.title}
//                 </h3>
//                 <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                   {opportunity.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";
import { AnimatedText } from "@/lib/shared";

export default function InvestorOpportunities() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cardPadding, setCardPadding] = useState("");
  const opportunities = [
    {
      id: 1,
      image: "/images/opportunity-1.png",
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
    },
    {
      id: 2,
      image: "/images/opportunity-2.png",
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
    },
    {
      id: 3,
      image: "/images/opportunity-3.png",
      title: "Title",
      description:
        "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
    },
  ];

  return (
    <motion.section
      className="py-16 sm:py-10 lg:py-30 px-4 lg:px-35"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <style jsx>{`
        .perspective-container {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-20 text-[#1E1F28]">
          <AnimatedText text="Investor Opportunities" />
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="perspective-container"
              onMouseEnter={() => {
                // setCardPadding("p-[24px] pt-[0px]");
                setHoveredCard(opportunity.id);
              }}
              onMouseLeave={() => {
                // setCardPadding("");
                setHoveredCard(null);
              }}
            >
              <div
                className="relative cursor-pointer transition-all duration-700 ease-out preserve-3d"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    hoveredCard === opportunity.id
                      ? "rotateY(-15deg) translateX(-10px)"
                      : "rotateY(0deg) translateX(0px)",
                }}
              >
                {/* Main Card */}
                <div className="relative bg-white">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden shadow-lg">
                    <Image
                      src={opportunity.image}
                      alt={opportunity.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="space-y-3"
                    style={{
                      padding:
                        hoveredCard === opportunity.id
                          ? "0px 24px 24px 24px"
                          : "0",
                    }}
                  >
                    <h3 className="text-xl md:text-[28px] font-bold text-[#B29C78]">
                      <AnimatedText text={opportunity.title} />
                    </h3>
                    <div className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                      <AnimatedText text={opportunity.description} />
                    </div>
                  </div>
                </div>

                {/* Book Page Effect - Right Side */}
                <div
                  className={`absolute top-0 right-0 w-full h-full bg-gradient-to-l from-gray-100 to-gray-50 pointer-events-none shadow-2xl `}
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      hoveredCard === opportunity.id
                        ? "rotateY(15deg) translateX(20px) translateZ(-5px)"
                        : "rotateY(0deg) translateX(0px) translateZ(0px)",
                    opacity: hoveredCard === opportunity.id ? 0.6 : 0,
                    transition: "all 0.7s ease-out",
                  }}
                />

                {/* Book Spine Shadow */}
                <div
                  className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-800 to-transparent pointer-events-none"
                  style={{
                    opacity: hoveredCard === opportunity.id ? 0.3 : 0,
                    transition: "opacity 0.7s ease-out",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// import React, { useState } from "react";
// import Image from "next/image";

// export default function InvestorOpportunities() {
//   const [openCard, setOpenCard] = useState(null);

//   const opportunities = [
//     {
//       id: 1,
//       image: "/images/opportunity-1.png",
//       title: "Title",
//       description:
//         "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
//       detailedContent: {
//         overview:
//           "Comprehensive property management solutions designed to maximize your investment returns while maintaining the highest standards of service.",
//         features: [
//           "Strategic asset positioning",
//           "Professional tenant management",
//           "Regular maintenance and inspections",
//           "Financial reporting and analysis",
//         ],
//         benefits:
//           "With our expert team, you can rest assured that your property is in capable hands, generating optimal returns while preserving its long-term value.",
//       },
//     },
//     {
//       id: 2,
//       image: "/images/opportunity-2.png",
//       title: "Title",
//       description:
//         "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
//       detailedContent: {
//         overview:
//           "Innovative real estate solutions that combine traditional values with modern management techniques for superior results.",
//         features: [
//           "Market analysis and positioning",
//           "Revenue optimization strategies",
//           "Sustainable property upgrades",
//           "Comprehensive risk management",
//         ],
//         benefits:
//           "Experience peace of mind knowing your investment is actively managed to achieve sustained growth and market competitiveness.",
//       },
//     },
//     {
//       id: 3,
//       image: "/images/opportunity-3.png",
//       title: "Title",
//       description:
//         "Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.",
//       detailedContent: {
//         overview:
//           "Tailored investment opportunities that align with your financial goals and risk appetite in the dynamic Abu Dhabi market.",
//         features: [
//           "Personalized investment strategies",
//           "Diversified portfolio options",
//           "Expert market insights",
//           "Long-term value creation",
//         ],
//         benefits:
//           "Partner with us to unlock the full potential of your real estate investments through strategic planning and expert execution.",
//       },
//     },
//   ];

//   const handleCardClick = (id: any) => {
//     setOpenCard(openCard === id ? null : id);
//   };

//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
//       <style jsx>{`
//         .perspective-container {
//           perspective: 2500px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-gray-900">
//           Investor Opportunities
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
//           {opportunities.map((opportunity) => {
//             const isOpen = openCard === opportunity.id;

//             return (
//               <div key={opportunity.id} className="perspective-container">
//                 <div
//                   className="relative cursor-pointer preserve-3d transition-all duration-1000 ease-out"
//                   style={{
//                     transformStyle: "preserve-3d",
//                     transform: isOpen ? "rotateY(-25deg)" : "rotateY(0deg)",
//                     minHeight: "500px",
//                   }}
//                   onClick={() => handleCardClick(opportunity.id)}
//                 >
//                   {/* Left Page (Cover/Front) */}
//                   <div
//                     className="absolute inset-0 bg-white shadow-2xl backface-hidden preserve-3d transition-all duration-1000"
//                     style={{
//                       transformStyle: "preserve-3d",
//                       transform: isOpen ? "rotateY(-160deg)" : "rotateY(0deg)",
//                       transformOrigin: "left center",
//                       zIndex: isOpen ? 1 : 2,
//                     }}
//                   >
//                     {/* Image Container */}
//                     <div className="relative aspect-[4/3] overflow-hidden">
//                       <Image
//                         src={opportunity.image}
//                         alt={opportunity.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Cover Content */}
//                     <div className="p-6 space-y-3">
//                       <h3 className="text-xl md:text-2xl font-normal text-amber-700">
//                         {opportunity.title}
//                       </h3>
//                       <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                         {opportunity.description}
//                       </p>
//                       <p className="text-xs text-amber-600 font-medium pt-2">
//                         {isOpen ? "Click to close" : "Click to read more →"}
//                       </p>
//                     </div>

//                     {/* Book Spine Shadow */}
//                     <div
//                       className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-gray-700 via-gray-500 to-transparent"
//                       style={{
//                         opacity: isOpen ? 0.8 : 0,
//                         transition: "opacity 1s ease-out",
//                       }}
//                     />
//                   </div>

//                   {/* Right Page (Inside Content) */}
//                   <div
//                     className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white shadow-2xl p-8 overflow-y-auto"
//                     style={{
//                       transform: "translateX(2px)",
//                       opacity: isOpen ? 1 : 0,
//                       visibility: isOpen ? "visible" : "hidden",
//                       transition:
//                         "opacity 0.6s ease-out 0.4s, visibility 0.6s ease-out 0.4s",
//                       zIndex: 0,
//                     }}
//                   >
//                     {/* Inner Page Content */}
//                     <div className="space-y-6">
//                       <div>
//                         <h4 className="text-lg font-semibold text-amber-700 mb-3 border-b border-amber-200 pb-2">
//                           Overview
//                         </h4>
//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           {opportunity.detailedContent.overview}
//                         </p>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-semibold text-amber-700 mb-3 border-b border-amber-200 pb-2">
//                           Key Features
//                         </h4>
//                         <ul className="space-y-2">
//                           {opportunity.detailedContent.features.map(
//                             (feature, idx) => (
//                               <li
//                                 key={idx}
//                                 className="text-sm text-gray-700 flex items-start"
//                               >
//                                 <span className="text-amber-600 mr-2">•</span>
//                                 <span>{feature}</span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-semibold text-amber-700 mb-3 border-b border-amber-200 pb-2">
//                           Benefits
//                         </h4>
//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           {opportunity.detailedContent.benefits}
//                         </p>
//                       </div>

//                       <button className="w-full mt-6 px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors text-sm font-medium">
//                         Learn More
//                       </button>
//                     </div>

//                     {/* Page Lines Effect */}
//                     <div className="absolute top-0 left-8 bottom-0 w-px bg-amber-200 opacity-30" />
//                   </div>

//                   {/* Book Binding/Crease Shadow */}
//                   <div
//                     className="absolute top-0 left-0 w-1 h-full bg-gradient-to-r from-amber-900 to-transparent pointer-events-none"
//                     style={{
//                       opacity: isOpen ? 0.5 : 0,
//                       transition: "opacity 1s ease-out",
//                       zIndex: 3,
//                     }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function InvestorOpportunities() {
//   const [openCard, setOpenCard] = useState(null);

//   const opportunities = [
//     {
//       id: 1,
//       image: '/images/opportunity-1.png',
//       title: 'Title',
//       description: 'Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.',
//       detailedContent: {
//         overview: 'Comprehensive property management solutions designed to maximize your investment returns while maintaining the highest standards of service.',
//         features: [
//           'Strategic asset positioning',
//           'Professional tenant management',
//           'Regular maintenance and inspections',
//           'Financial reporting and analysis'
//         ],
//         benefits: 'With our expert team, you can rest assured that your property is in capable hands, generating optimal returns while preserving its long-term value.'
//       }
//     },
//     {
//       id: 2,
//       image: '/images/opportunity-2.png',
//       title: 'Title',
//       description: 'Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.',
//       detailedContent: {
//         overview: 'Innovative real estate solutions that combine traditional values with modern management techniques for superior results.',
//         features: [
//           'Market analysis and positioning',
//           'Revenue optimization strategies',
//           'Sustainable property upgrades',
//           'Comprehensive risk management'
//         ],
//         benefits: 'Experience peace of mind knowing your investment is actively managed to achieve sustained growth and market competitiveness.'
//       }
//     },
//     {
//       id: 3,
//       image: '/images/opportunity-3.png',
//       title: 'Title',
//       description: 'Our property management services provide tailored solutions for your asset with the aim of enhancing asset value.',
//       detailedContent: {
//         overview: 'Tailored investment opportunities that align with your financial goals and risk appetite in the dynamic Abu Dhabi market.',
//         features: [
//           'Personalized investment strategies',
//           'Diversified portfolio options',
//           'Expert market insights',
//           'Long-term value creation'
//         ],
//         benefits: 'Partner with us to unlock the full potential of your real estate investments through strategic planning and expert execution.'
//       }
//     }
//   ];

//   const handleCardClick = (id: any) => {
//     setOpenCard(openCard === id ? null : id);
//   };

//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
//       <style jsx>{`
//         .perspective-container {
//           perspective: 2000px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-gray-900">
//           Investor Opportunities
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
//           {opportunities.map((opportunity) => {
//             const isOpen = openCard === opportunity.id;

//             return (
//               <div
//                 key={opportunity.id}
//                 className="perspective-container relative"
//                 style={{ minHeight: '600px' }}
//               >
//                 {/* Book Container */}
//                 <div
//                   className="relative preserve-3d"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     width: '100%',
//                     minHeight: '600px'
//                   }}
//                 >
//                   {/* Left Page (Opens to the left) */}
//                   {/* 1111111111111111 */}
//                   <div
//                     className="absolute top-0 left-0 w-full bg-white shadow-2xl cursor-pointer preserve-3d transition-all duration-1000 ease-out"
//                     style={{
//                       transformStyle: 'preserve-3d',
//                       transformOrigin: 'left center',
//                       transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)',
//                       zIndex: isOpen ? 1 : 3,
//                       height: '600px'
//                     }}
//                     onClick={() => handleCardClick(opportunity.id)}
//                   >
//                     {/* Front of Left Page (visible when closed) */}
//                     <div className="absolute inset-0 backface-hidden">
//                       <div className="relative aspect-[4/3] overflow-hidden">
//                         <Image
//                           src={opportunity.image}
//                           alt={opportunity.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div className="p-6 space-y-3">
//                         <h3 className="text-xl md:text-2xl font-normal text-amber-700">
//                           {opportunity.title}
//                         </h3>
//                         <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                           {opportunity.description}
//                         </p>
//                         <p className="text-xs text-amber-600 font-medium pt-2">
//                           Click to open →
//                         </p>
//                       </div>
//                     </div>

//                     {/* Back of Left Page (visible when open) */}
//                     <div
//                       className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white p-8 backface-hidden"
//                       style={{ transform: 'rotateY(180deg)' }}
//                     >
//                       <div className="space-y-4">
//                         <h4 className="text-lg font-semibold text-amber-700 mb-3 border-b border-amber-200 pb-2">
//                           Overview
//                         </h4>
//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           {opportunity.detailedContent.overview}
//                         </p>

//                         <div className="pt-4">
//                           <h4 className="text-base font-semibold text-amber-700 mb-2">
//                             Key Features
//                           </h4>
//                           <ul className="space-y-2">
//                             {opportunity.detailedContent.features.slice(0, 2).map((feature, idx) => (
//                               <li key={idx} className="text-sm text-gray-700 flex items-start">
//                                 <span className="text-amber-600 mr-2">•</span>
//                                 <span>{feature}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="absolute top-0 right-8 bottom-0 w-px bg-amber-200 opacity-30" />
//                     </div>

//                     {/* Left Page Spine Shadow */}
//                     <div
//                       className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-800 via-gray-600 to-transparent"
//                       style={{
//                         opacity: isOpen ? 0.6 : 0,
//                         transition: 'opacity 1s'
//                       }}
//                     />
//                   </div>

//                   {/* Right Page (Opens to the right) */}
//                   {/* 1111111 */}
//                   <div
//                     className="absolute top-0 left-0 w-full bg-gradient-to-br from-white to-amber-50 shadow-2xl cursor-pointer preserve-3d transition-all duration-1000 ease-out"
//                     style={{
//                       transformStyle: 'preserve-3d',
//                       transformOrigin: 'right center',
//                       transform: isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
//                       zIndex: isOpen ? 1 : 2,
//                       height: '600px'
//                     }}
//                     onClick={() => handleCardClick(opportunity.id)}
//                   >
//                     {/* Front of Right Page (visible when closed - hidden behind left page) */}
//                     <div
//                       className="absolute inset-0 bg-white backface-hidden"
//                       style={{ opacity: 0 }}
//                     />

//                     {/* Back of Right Page (visible when open) */}
//                     <div
//                       className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white p-8 backface-hidden overflow-y-auto"
//                       style={{ transform: 'rotateY(180deg)' }}
//                     >
//                       <div className="space-y-4">
//                         <div>
//                           <h4 className="text-base font-semibold text-amber-700 mb-2">
//                             More Features
//                           </h4>
//                           <ul className="space-y-2">
//                             {opportunity.detailedContent.features.slice(2).map((feature, idx) => (
//                               <li key={idx} className="text-sm text-gray-700 flex items-start">
//                                 <span className="text-amber-600 mr-2">•</span>
//                                 <span>{feature}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="pt-4">
//                           <h4 className="text-lg font-semibold text-amber-700 mb-3 border-b border-amber-200 pb-2">
//                             Benefits
//                           </h4>
//                           <p className="text-sm text-gray-700 leading-relaxed">
//                             {opportunity.detailedContent.benefits}
//                           </p>
//                         </div>

//                         <button className="w-full mt-6 px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors text-sm font-medium">
//                           Learn More
//                         </button>

//                         <p className="text-xs text-center text-amber-600 font-medium pt-4">
//                           Click to close
//                         </p>
//                       </div>
//                       <div className="absolute top-0 left-8 bottom-0 w-px bg-amber-200 opacity-30" />
//                     </div>

//                     {/* Right Page Spine Shadow */}
//                     <div
//                       className="absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-gray-800 via-gray-600 to-transparent"
//                       style={{
//                         opacity: isOpen ? 0.6 : 0,
//                         transition: 'opacity 1s'
//                       }}
//                     />
//                   </div>

//                   {/* Center Binding */}
//                   <div
//                     className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 pointer-events-none"
//                     style={{
//                       height: '600px',
//                       opacity: isOpen ? 0.8 : 0,
//                       transition: 'opacity 1s',
//                       zIndex: 4,
//                       boxShadow: isOpen ? '0 0 20px rgba(0,0,0,0.5)' : 'none'
//                     }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
