import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TournamentSection from "@/components/TournamentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TournamentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
