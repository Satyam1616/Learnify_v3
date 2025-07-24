import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import WhyChooseUnlox from "@/components/WhyChooseUnlox";
import EduletSection from "@/components/EduletSection";
import AIBluSection from "@/components/AIBluSection";
import LearningModules from "@/components/LearningModules";
import SmartLabsSection from "@/components/SmartLabsSection";
import PartnersSection from "@/components/PartnersSection";
import AcademicPartnersSection from "@/components/AcademicPartnersSection";
import MediaSection, { ContactFormSection } from "@/components/MediaSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyChooseUnlox />
      <EduletSection />
      <AIBluSection />
      <LearningModules />
      <SmartLabsSection />
      <PartnersSection />
      <AcademicPartnersSection />
      <MediaSection />
      <ContactFormSection />
    </Layout>
  );
}
