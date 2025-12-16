import LeadSection from "@/components/lead-section";
import Opportunities from "@/components/opportunities";
import ContactForm from "@/components/contact-form";
import ServicesSection from "@/components/banner";
import InnovationSection from "@/components/InnovationSection";
import HeroCarousel from "@/components/mainheader";
import TitleComponent from "@/components/TitleComponent";
import MissionVision from "@/components/mission";
import OurValues from "@/components/ourValueTitle";
import QuoteBlock from "@/components/quoteBlock";
import HeroSection from "@/components/mainHeader_v2";
import MissionSlider from "@/components/MissionSlider";
import InvestorOpportunities from "@/components/InvestorOpportunities";

export default function Home() {
  return (
    <>
      {/* <HeroCarousel /> */}
      <HeroSection />
      <section id="about" className="scroll-mt-20">
        <TitleComponent />
        {/* <MissionVision /> */}
        <MissionSlider />
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
      <InvestorOpportunities />
      {/* <section id="opportunities" className="scroll-mt-20">
        <Opportunities />
      </section> */}
      <section id="contact" className="scroll-mt-20">
        {/* <ContactForm /> */}
      </section>
    </>
  );
}
