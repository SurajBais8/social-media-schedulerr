import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrustedBrands from "../components/TrustedBrands";
import FeaturesSection from "../components/FeaturesSection";
import DashboardShowcase from "../components/DashboardShowcase";
import AIStudioSection from "../components/AIStudioSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <FeaturesSection />
      <DashboardShowcase />
    <AIStudioSection />
    </>
  );
}

export default HomePage;