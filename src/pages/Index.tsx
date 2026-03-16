import SystemHeader from "@/components/SystemHeader";
import HeroSection from "@/components/HeroSection";
import ProvenSpeed from "@/components/ProvenSpeed";
import ExperienceLog from "@/components/ExperienceLog";
import TechArsenal from "@/components/TechArsenal";
import PortfolioSection from "@/components/PortfolioSection";
import ContactUplink from "@/components/ContactUplink";
import SystemFooter from "@/components/SystemFooter";
import EnergyBar from "@/components/EnergyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SystemHeader />
      <EnergyBar />
      <main>
        <HeroSection />
        <ProvenSpeed />
        <ExperienceLog />
        <TechArsenal />
        <PortfolioSection />
        <ContactUplink />
      </main>
      <SystemFooter />
    </div>
  );
};

export default Index;
