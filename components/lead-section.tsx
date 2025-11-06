// import Image from "next/image";

// export default function LeadSection() {
//   return (
//     <section className="relative h-[640px] bg-[#081443] overflow-hidden flex items-center">
//       <div className="relative z-10 mx-auto w-full px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
//         {/* Left: Text */}
//         <div className="max-w-lg text-white space-y-4 md:space-y-6">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
//             Investing in <br />
//             Abu <span className="text-[#4FB5B9]">
//               Dhabi&apos;s Future
//             </span>, <br />
//             Leading from Its Capital.
//           </h1>
//         </div>

//         {/* Right: Person Image */}
//         <div className="relative mt-10 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
//           <Image
//             src="./images/lead.png"
//             alt="Professional in traditional attire"
//             width={500}
//             height={640}
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function LeadSection() {
  return (
    <section
      className="relative min-h-[640px] flex items-center"
      style={{
        backgroundImage: "url(/images/invest-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background image */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/invest-bg.png" 
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="max-w-lg text-white space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Investing in <br />
            Abu <span className="text-[#4FB5B9]">
              Dhabi&apos;s Future
            </span>, <br />
            Leading from Its Capital.
          </h1>
        </div>

        {/* Right: Person Image */}
        <div className="relative mt-10 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg pr-18">
          <Image
            src="/images/lead.png"
            alt="Professional in traditional attire"
            width={500}
            height={640}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
