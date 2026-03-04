import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SponsorBanner from "@/components/SponsorBanner";
import TournamentSection from "@/components/TournamentSection";
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
