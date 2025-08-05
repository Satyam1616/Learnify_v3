import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import MentorshipSection from "@/components/MentorshipSection";
import CourseCardsSection from "@/components/CourseCardsSection";
import PartnersSection from "@/components/PartnersSection";
import LearningModules from "@/components/LearningModules";
import StudyAbroadSection from "@/components/StudyAbroadSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ContactFormSection } from "@/components/MediaSection";
import HomePageSwitcher from "@/components/HomePageSwitcher";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <StatsSection />
      <MentorshipSection />
      <CourseCardsSection />
      <PartnersSection />
      <LearningModules />
      <StudyAbroadSection />
      <TestimonialsSection />
      <ContactFormSection />
      <HomePageSwitcher />
    </Layout>
  );
}
