"use client";
import React from "react";
import GridFive from "./GridFive";

export default function OurValues() {
  return (
    <>
      <section className="bg-[#B29C78] text-white py-16 sm:py-10 lg:py-20 px-4 lg:px-15 ">
        <div className="mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-[32px] md:text-[40px] font-bold mb-6">قيمنا</h2>
            <p className="text-base leading-7 text-white/90">
              الشفافية: نلتزم بالانفتاح المطلق والنزاهة الكاملة في إدارة الأوقاف
              وصناديق القاصرين المسؤولية: نتحمّل الكاملة لحماية الأصول وتنميتها
              خدمة للمجتمع الوحدة: نوحّد جهود الشركاء المتنوّعين - من متبرّعين
              وحُكّام وأوصياء - نحو هدف مشترك الرعاية: نُضفي رؤية مستقبلية في
              حُسن العناية بالأوقاف ومصالح القاصرين لضمان استمرار المنافع الثقة:
              نبني ثقة مستدامة من خلال السلوك الأخلاقي، والمعاملة الأمينة،
              والخدمة المتميّزة
            </p>
          </div>
        </div>
      </section>
      <GridFive />
    </>
  );
}
