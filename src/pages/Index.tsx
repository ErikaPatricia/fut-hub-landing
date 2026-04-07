import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsorBanner from "@/components/SponsorBanner";
import AboutSection from "@/components/AboutSection";
import TournamentSection from "@/components/TournamentSection";
import BailaoSection from "@/components/BailaoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SponsorBanner />
      <AboutSection />
      <TournamentSection />
      <BailaoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
