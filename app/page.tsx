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

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TitleComponent />
      <MissionVision />
      <OurValues />
      <QuoteBlock />
      <LeadSection />
      <ServicesSection />
      <InnovationSection />
      {/* <Hero />
      <About />*/}
      {/* <Services />  */}
      <Opportunities />
      <ContactForm />
    </>
  );
}
