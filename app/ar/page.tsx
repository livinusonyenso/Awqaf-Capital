import LeadSection from "@/ar-components/lead-section";
import Opportunities from "@/ar-components/opportunities";
import ContactForm from "@/ar-components/contact-form";
import ServicesSection from "@/ar-components/banner";
import InnovationSection from "@/ar-components/InnovationSection";
import HeroCarousel from "@/ar-components/mainheader";
import TitleComponent from "@/ar-components/TitleComponent";
import MissionVision from "@/ar-components/mission";
import OurValues from "@/ar-components/ourValueTitle";
import QuoteBlock from "@/ar-components/quoteBlock";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section id="about" className="scroll-mt-20">
        <TitleComponent />
        <MissionVision />
      </section>
      <section id="values" className="scroll-mt-20">
        <OurValues />
      </section>
      <QuoteBlock />
      <LeadSection />
      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>
      <InnovationSection />
      {/* <section id="opportunities" className="scroll-mt-20">
        <Opportunities />
      </section> */}
      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>
    </>
  );
}
