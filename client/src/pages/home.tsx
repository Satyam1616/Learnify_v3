import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUnlox from "@/components/WhyChooseUnlox";
import EduletSection from "@/components/EduletSection";
import AIBluSection from "@/components/AIBluSection";
import LearningModules from "@/components/LearningModules";
import SmartLabsSection from "@/components/SmartLabsSection";
import PartnersSection from "@/components/PartnersSection";
import AcademicPartnersSection from "@/components/AcademicPartnersSection";
import MediaSection from "@/components/MediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUnlox />
      <EduletSection />
      <AIBluSection />
      <LearningModules />
      <SmartLabsSection />
      <PartnersSection />
      <AcademicPartnersSection />
      <MediaSection />
      <Footer />
    </div>
  );
}
