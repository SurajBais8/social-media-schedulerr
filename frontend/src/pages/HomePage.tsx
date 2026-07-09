import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import TrustedBrands from "../components/landing/TrustedBrands";
import FeaturesSection from "../components/landing/FeaturesSection";
import DashboardShowcase from "../components/DashboardShowcase";
import AIStudioSection from "../components/landing/AIStudioSection";
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