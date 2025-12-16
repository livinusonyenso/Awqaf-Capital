"use client";

import React from "react";

const GetInvolvedSection = () => {
  return (
    <section className="w-full bg-[#081443] text-white py-20 font-[Tahoma] relative overflow-hidden">
      {/* Subtle background watermark pattern */}
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/contact-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative  mx-auto flex flex-col md:flex-row gap-12 px-4 lg:px-35">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold"> تواصل معنا </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            نرحّب بالتعاون مع المتبرّعين والمستثمرين والمؤسّسات التي تشاركنا
            رؤيتنا في التنمية المستدامة وتمكين المجتمع. تواصلوا مع فريقنا
            لاستكشاف فرص الشراكة والتعاون نحو تحقيق أثرٍ مستدام يعود بالنفع على
            الأجيال القادمة.
          </p>
        </div>

        {/* Right Column — Form */}
        <div className="md:w-1/2 bg-transparent">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name / Phone Number */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">الاسم الكامل</label>
              <input
                type="text"
                placeholder="Blue Acer Group of Companies"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">رقم الهاتف</label>
              <input
                type="text"
                placeholder="+971 321 4567543"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>

            {/* Email / Company Name */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">
                اسم الشركة (الاختياري)
              </label>
              <input
                type="text"
                placeholder="Blue Acer Group of Companies"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>

            {/* Address / Company Number */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">
                عنوان الشركة (الإمارة، المدينة، العنوان
              </label>
              <input
                type="text"
                placeholder="Lorem Ipsum"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">
                رقم الشركة (اختياري)
              </label>
              <input
                type="text"
                placeholder="+971 321 4567543"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>

            {/* Trade License (Full Width) */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-white mb-1">تراخيص الشركة</label>
              <input
                type="text"
                placeholder="Lorem Ipsum"
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              />
            </div>

            {/* Municipality Developer Registration */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-white mb-1">
                التسجيل في البلدية/المطور
              </label>
              <textarea
                rows={4}
                placeholder="Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus arcu. Neque mi arcu nunc velit. "
                className="bg-transparent border border-white  px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5DA6A8]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="bg-[#3AA4AF] text-white px-6 py-4 hover:bg-[#6BB8B8] transition"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
