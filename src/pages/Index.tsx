import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import YachtSection from "@/components/YachtSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import IslandsSection from "@/components/IslandsSection";
import CrewSection from "@/components/CrewSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <YachtSection />
      <ExperiencesSection />
      <IslandsSection />
      <CrewSection />
      <FacilitiesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
